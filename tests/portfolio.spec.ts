import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

for (const width of [320, 390, 768, 1440]) {
  test(`production page is accessible and fits a ${width}px viewport`, async ({ page }, testInfo) => {
    await page.setViewportSize({ width, height: 900 })
    const errors: string[] = []
    const failedRequests: string[] = []
    page.on('pageerror', error => errors.push(error.message))
    page.on('response', response => {
      if (response.status() >= 400) failedRequests.push(`${response.status()} ${response.url()}`)
    })
    await page.goto('./')
    await page.evaluate(() => document.fonts.ready)
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
    await expect(page.getByRole('article')).toHaveCount(4)
    for (const name of ['dotenc', 'Clade website', 'Clade design system', 'Autopilot']) {
      await expect(page.getByRole('heading', { name, exact: true })).toBeVisible()
    }
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true)
    const accessibility = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze()
    expect(accessibility.violations).toEqual([])
    expect(errors).toEqual([])
    expect(failedRequests).toEqual([])
    await page.screenshot({ path: testInfo.outputPath(`portfolio-${width}.png`), fullPage: true })
  })
}

test('keyboard users can skip navigation and reach every section', async ({ page }) => {
  await page.goto('./')
  await page.keyboard.press('Tab')
  await expect(page.getByRole('link', { name: 'Skip to content' })).toBeFocused()
  await page.keyboard.press('Enter')
  await expect(page.getByRole('main')).toBeFocused()
  await page.keyboard.press('Tab')
  await expect(page.getByRole('link', { name: 'Explore selected work' })).toBeFocused()
  const outline = await page.locator(':focus').evaluate(element => getComputedStyle(element).outlineStyle)
  expect(outline).not.toBe('none')
  await page.keyboard.press('Enter')
  await expect(page).toHaveURL(/#work$/)
  for (const [name, hash] of [['Approach', 'approach'], ['Contact', 'contact']]) {
    await page.getByRole('navigation').getByRole('link', { name }).click()
    await expect(page).toHaveURL(new RegExp(`#${hash}$`))
    await expect(page.locator(`#${hash}`)).toBeInViewport()
  }
  await page.getByRole('contentinfo').getByRole('link', { name: 'Back to top' }).click()
  await expect(page.getByRole('heading', { level: 1 })).toBeInViewport()
})

test('reduced motion and a 200 percent zoom layout remain usable', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('./')
  expect(await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior)).toBe('auto')
  expect(await page.locator('.round-arrow').evaluate(element => getComputedStyle(element).transitionDuration)).toBe('0s')
  // Chromium page zoom equivalent: 1280 CSS pixels at 200% becomes a 640px layout viewport.
  await page.setViewportSize({ width: 640, height: 450 })
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true)
  await expect(page.getByRole('link', { name: 'i@ivanfilho.com', exact: true })).toBeVisible()
})

test('only approved external links are offered and assets stay under the Pages base', async ({ page }) => {
  await page.goto('./')
  const hrefs = await page.locator('a[href]').evaluateAll(links => links.map(link => link.getAttribute('href')!))
  const allowed = new Set([
    'https://dotenc.org', 'https://github.com/dotenc/dotenc', 'https://clade.co',
    'https://github.com/ivanfilhoz', 'https://www.linkedin.com/in/ivanfilhoz', 'mailto:i@ivanfilho.com',
  ])
  for (const href of hrefs) expect(href.startsWith('#') || allowed.has(href)).toBe(true)
  const assets = await page.locator('script[src], link[rel="stylesheet"], link[rel="icon"]').evaluateAll(elements =>
    elements.map(element => element.getAttribute('src') ?? element.getAttribute('href')),
  )
  expect(assets.length).toBeGreaterThan(0)
  for (const asset of assets) expect(asset).toMatch(/^\/about-me\//)
  await expect(page.getByRole('article').filter({ has: page.getByRole('heading', { name: 'Autopilot', exact: true }) }).getByRole('link')).toHaveCount(0)
})
