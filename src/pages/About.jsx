function About() {
  const specs = [
    { label: 'Frontend Engine', value: 'React 19 & JSX Component Architecture' },
    { label: 'Client Routing', value: 'React Router DOM (BrowserRouter, Routes, NavLink)' },
    { label: 'Build Bundler', value: 'Vite Next-Gen Module Tooling' },
    { label: 'Design Language', value: 'Modernist High-Contrast Minimalist Typography' }
  ];

  return (
    <div className="page-container page-enter">
      <header className="page-header">
        <div className="header-meta">
          <span className="eyebrow">Documentation & Context</span>
          <h2>Platform <span className="cursive-accent">Manifesto</span></h2>
        </div>
        <p>A unified interface engineered for structured academic navigation, modularity, and client-side efficiency.</p>
      </header>

      <section className="about-editorial">
        <div className="manifesto-card">
          <h3>Architectural Blueprint</h3>
          <p>
            The Student Information Portal illustrates component decoupling, deterministic URL state synchrony,
            and prop composition. Rather than relying on heavyweight UI frameworks, the system utilizes
            lightweight semantic structures, native CSS custom properties, and declarative React Router paradigms.
          </p>
        </div>

        <div className="specs-grid">
          {specs.map((item, idx) => (
            <div key={idx} className="spec-card">
              <span className="spec-label">{item.label}</span>
              <strong className="spec-value">{item.value}</strong>
            </div>
          ))}
        </div>

        <div className="about-details">
          <div className="detail-col">
            <h4>Institutional Integration</h4>
            <p>Designed to scale for departmental records, curriculum scheduling matrices, and student verification registries with sub-millisecond route transitions.</p>
          </div>
          <div className="detail-col">
            <h4>Design Ethos</h4>
            <p>Balanced with editorial serif italics and geometric sans-serif data structures, focusing purely on readability, spatial harmony, and clarity.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;