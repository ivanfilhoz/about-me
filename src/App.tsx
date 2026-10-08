import type { ReactNode } from 'react'

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg className="arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d={diagonal ? 'M6 18 18 6M6 6h12v12' : 'M4 12h16m-6-6 6 6-6 6'} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return <a className="text-link" href={href}>{children}<Arrow diagonal /></a>
}

function Project({ number, kind, title, children, visual, tags, links }: {
  number: string; kind: string; title: string; children: ReactNode
  visual: ReactNode; tags: string[]; links?: ReactNode
}) {
  return (
    <article className="project" aria-labelledby={`project-${number}`}>
      <div className="project-copy">
        <div className="eyebrow project-meta"><span>{number}</span><span>{kind}</span></div>
        <h3 id={`project-${number}`}>{title}</h3>
        <div className="project-description">{children}</div>
        <ul className="tags" aria-label={`${title} focus areas`}>
          {tags.map(tag => <li key={tag}>{tag}</li>)}
        </ul>
        {links && <div className="project-links">{links}</div>}
      </div>
      {visual}
    </article>
  )
}

function DotencVisual() {
  return (
    <div className="project-art dotenc-art" aria-hidden="true">
      <div className="art-topline"><span>dotenc</span><span className="small-label">DEVELOPER TOOLS</span></div>
      <div className="encrypted-file">
        <span className="file-tab">.env.enc</span>
        <svg className="lock" width="46" height="54" viewBox="0 0 46 54" fill="none"><path d="M12 24V14a11 11 0 0 1 22 0v10" stroke="currentColor" strokeWidth="2"/><rect x="4" y="23" width="38" height="28" rx="5" stroke="currentColor" strokeWidth="2"/><circle cx="23" cy="36" r="3" fill="currentColor"/><path d="M23 36v6" stroke="currentColor" strokeWidth="2"/></svg>
        <span className="cipher">a8f2 · e91c · 7b04<br/>d6e3 · 0f8a · c152</span>
      </div>
      <div className="dotenc-flow"><span>Your SSH key</span><span className="flow-line"/><span>Your environment</span></div>
      <div className="art-caption"><span>Secrets stay in your repo.</span><span>Encrypted.</span></div>
    </div>
  )
}

function CladeVisual() {
  return (
    <div className="project-art clade-art" aria-hidden="true">
      <div className="art-topline"><span className="small-label">CLADE / WEBSITE</span><span>2026</span></div>
      <div className="clade-composition"><span className="clade-wordmark">Clade</span><div className="frame frame-large"/><div className="frame frame-small"/><span className="clade-asterisk">✳</span></div>
      <div className="art-caption"><span>Design meets implementation.</span><span>↗</span></div>
    </div>
  )
}

function SystemVisual() {
  return (
    <div className="project-art system-art" aria-hidden="true">
      <div className="art-topline"><span className="small-label">CLADE / DESIGN SYSTEM</span><span>UI</span></div>
      <div className="system-composition">
        <div className="system-layer layer-back"><span>Application logic</span><span>03</span></div>
        <div className="system-layer layer-middle"><span>Composition</span><span>02</span></div>
        <div className="system-layer layer-front"><div><span>Reusable UI</span><span>01</span></div><div className="component-samples"><span className="sample-button">Continue <span>↗</span></span><span className="sample-toggle"/><span className="sample-swatch"/></div></div>
      </div>
      <div className="art-caption"><span>A shared foundation. Room to build.</span><span>↗</span></div>
    </div>
  )
}

function AutopilotVisual() {
  return (
    <div className="project-art autopilot-art" aria-hidden="true">
      <div className="art-topline"><span className="small-label">AUTOPILOT</span><span className="small-label">SIMPLIFIED WORKFLOW</span></div>
      <div className="orchestration">
        <div className="flow-node intake-node">Request <span>→</span> Queue</div>
        <div className="flow-connector"/>
        <div className="agent-branches"><span>Worktree A</span><span>Worktree B</span></div>
        <div className="flow-connector"/>
        <div className="flow-node review-node"><span className="decision-dot"/>Human review & decisions</div>
        <div className="flow-connector"/>
        <div className="deploy-step">Validate <span>→</span> Deploy <span>→</span> Verify</div>
      </div>
      <div className="art-caption"><span>Parallel work. Shared visibility.</span><span>↗</span></div>
    </div>
  )
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="page-shell">
        <header className="site-header">
          <a className="wordmark" href="#" aria-label="Ivan Filho, back to top">ivan filho<span className="wordmark-dot">.</span></a>
          <nav aria-label="Main navigation"><a href="#work">Work</a><a href="#approach">Approach</a><a href="#contact">Contact <Arrow diagonal /></a></nav>
        </header>
        <main id="main" tabIndex={-1}>
          <section className="hero" aria-labelledby="intro-title">
            <div className="eyebrow hero-label"><span className="location-dot"/>SOFTWARE ENGINEER · BASED IN BRAZIL</div>
            <h1 id="intro-title">Good software.<br/><span className="hero-second-line">Thoughtfully <em>built.</em></span></h1>
            <div className="hero-bottom">
              <div className="hero-intro"><p>I’m Ivan, a senior software engineer turning complex problems into thoughtful interfaces, maintainable systems, and useful tools.</p><a href="#work" className="work-link">Explore selected work <span className="round-arrow"><Arrow /></span></a></div>
              <div className="hero-aside"><span className="aside-rule"/><p>10+ years building web products.<br/>From the details you see<br/>to the systems you don’t.</p><span className="small-label">REACT / TYPESCRIPT / FULL STACK</span></div>
            </div>
          </section>

          <section id="work" className="work-section" aria-labelledby="work-title">
            <div className="section-heading"><div><span className="eyebrow">01 / SELECTED WORK</span><h2 id="work-title">Built with <em>intent.</em></h2></div><p>Products, foundations, and tools.<br/>A few ways I put engineering to work.</p></div>
            <Project number="01" kind="OPEN SOURCE · CREATOR" title="dotenc" tags={['Developer experience', 'Encrypted environments']} visual={<DotencVisual />} links={<><TextLink href="https://dotenc.org">Explore dotenc</TextLink><TextLink href="https://github.com/dotenc/dotenc">Source code</TextLink></>}>
              <p className="project-lead">Your secrets. Your repo. One less thing to manage.</p>
              <p>I created dotenc to make encrypted environments part of the Git workflow, using the SSH keys developers already have. It injects environments at command time, with editor integrations, documentation, and agent skills.</p>
              <p className="project-outcome">An open-source tool I use in my own projects.</p>
            </Project>
            <Project number="02" kind="CLIENT WORK · WEB IMPLEMENTATION" title="Clade website" tags={['Responsive interfaces', 'Motion', 'Design collaboration']} visual={<CladeVisual />} links={<TextLink href="https://clade.co">Visit Clade</TextLink>}>
              <p className="project-lead">Bringing a shared design vision to the browser.</p>
              <p>I implemented Clade’s 2026 website in close collaboration with designers, translating the visual direction into responsive interfaces and carefully chosen animation implementations.</p>
              <p className="project-outcome">A finished website shaped by design and engineering working together.</p>
            </Project>
            <Project number="03" kind="CLIENT WORK · FRONTEND ARCHITECTURE" title="Clade design system" tags={['shadcn/ui', 'Storybook', 'tailwind-variants']} visual={<SystemVisual />}>
              <p className="project-lead">Less rework. A stronger foundation for what comes next.</p>
              <p>Recurring rework, duplicated UI, and tightly coupled application logic made changes harder than they needed to be. I proposed the architecture and wrote frontend guidelines around reusable components, composition, and clear separation of concerns.</p>
              <p>Storybook isolation, interaction and accessibility tests, and explicit variants replaced risky style overrides with a more maintainable approach.</p>
              <p className="project-outcome">Less complexity, safer maintenance, and faster feature delivery.</p>
            </Project>
            <Project number="04" kind="CUSTOM TOOLING · AI ENGINEERING" title="Autopilot" tags={['Agent orchestration', 'Next.js', 'WebSockets']} visual={<AutopilotVisual />}>
              <p className="project-lead">Parallel engineering, with human decisions in the loop.</p>
              <p>In my Clade workflow, Autopilot turns Slack requests into a prioritized Shortcut queue. Its event-driven orchestrator coordinates agents in isolated Git worktrees with explicit shared-resource allocation.</p>
              <p>Workflows cover implementation, browser validation, CI and review feedback, the PR and merge lifecycle, and deployment verification. A Next.js, React, TypeScript, and shadcn/ui dashboard uses WebSocket updates to surface progress, blockers, PRs, and human decisions—recorded separately from execution.</p>
              <p className="project-outcome">It handled smaller website feedback items while I focused on the broader Clade implementation, reducing context switching.</p>
            </Project>
          </section>

          <section id="approach" className="approach-section" aria-labelledby="approach-title">
            <div className="approach-intro"><span className="eyebrow">02 / HOW I WORK</span><h2 id="approach-title">Care in the details.<br/><em>Clarity in the system.</em></h2><p>I work across frontend architecture, full-stack development, developer experience, and AI-assisted engineering. The thread connecting them is making good work easier to build on.</p><p className="working-note">Based in Brazil. Experienced in distributed international teams. English C2.</p></div>
            <div className="principles">
              <div className="principle"><span>01</span><div><h3>Close the gap between design and code.</h3><p>Work with designers, resolve the details together, and make the interface hold up across screens, interactions, and input methods.</p></div></div>
              <div className="principle"><span>02</span><div><h3>Make the next change easier.</h3><p>Favor clear boundaries, reusable UI, and useful documentation. Build foundations that reduce complexity as the product grows.</p></div></div>
              <div className="principle"><span>03</span><div><h3>Use AI with engineering judgment.</h3><p>Give agents clear scope, isolated work, and concrete verification. Keep progress visible and human decisions explicit.</p></div></div>
            </div>
          </section>

          <section id="contact" className="contact-section" aria-labelledby="contact-title">
            <span className="eyebrow">03 / GET IN TOUCH</span>
            <div className="contact-main"><h2 id="contact-title">Something worth<br/><em>building together?</em></h2><a className="contact-arrow" href="mailto:i@ivanfilho.com" aria-label="Email Ivan Filho"><Arrow diagonal /></a></div>
            <div className="contact-bottom"><a className="email-link" href="mailto:i@ivanfilho.com">i@ivanfilho.com</a><div className="social-links"><TextLink href="https://github.com/ivanfilhoz">GitHub</TextLink><TextLink href="https://www.linkedin.com/in/ivanfilhoz">LinkedIn</TextLink></div></div>
          </section>
        </main>
        <footer className="site-footer"><span>© {new Date().getFullYear()} Ivan Filho</span><span>Thoughtfully built, from Brazil.</span><a href="#">Back to top ↑</a></footer>
      </div>
    </>
  )
}
