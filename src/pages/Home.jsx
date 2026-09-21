import { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [activeModal, setActiveModal] = useState(null);

  const announcements = [
    {
      id: 1,
      tag: 'Academic',
      date: 'Sept 24, 2026',
      title: 'Midterm Examination Schedule Released',
      preview: 'The central administration has finalized the examination timetable for the 1st semester...',
      details: 'All students are advised to confirm their room assignments and clear laboratory clearances before Friday. Bring valid student ID and test permits.'
    },
    {
      id: 2,
      tag: 'Advisory',
      date: 'Sept 22, 2026',
      title: 'Annual Tech Symposium & Project Showcase',
      preview: 'Calling all IT and CS innovators to submit entries for the upcoming tech showcase...',
      details: 'Registration for student team exhibits remains open until October 15. Tracks include Web Frameworks, Edge IoT, and UI/UX Systems.'
    }
  ];

  return (
    <div className="home-dashboard">
      {/* Editorial Hero Banner */}
      <section className="hero-section">
        <span className="hero-eyebrow">Academic Term 2026–2027</span>
        <h1 className="hero-title">
          Empowering your <span className="cursive-accent">scholastic</span> journey.
        </h1>
        <p className="hero-subtitle">
          Centralized access to real-time student directories, course catalogs, and administrative updates.
        </p>
        <div className="hero-actions">
          <Link to="/students" className="btn btn-primary">Browse Directory</Link>
          <Link to="/courses" className="btn btn-secondary">Explore Catalog</Link>
        </div>
      </section>

      {/* Metrics Strip */}
      <section className="stats-row">
        <div className="stat-card">
          <span className="stat-number">1,480+</span>
          <span className="stat-label">Active Scholars</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">42</span>
          <span className="stat-label">Accredited Modules</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">98.4%</span>
          <span className="stat-label">Term Completion</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">100%</span>
          <span className="stat-label">Digital Access</span>
        </div>
      </section>

      {/* Announcements & Activity Section */}
      <section className="home-grid">
        <div className="panel-main">
          <div className="panel-header">
            <h3>Notices & Dispatches</h3>
            <span className="panel-meta">Updated Daily</span>
          </div>

          <div className="announcement-list">
            {announcements.map((item) => (
              <div 
                key={item.id} 
                className="announcement-card"
                onClick={() => setActiveModal(item)}
              >
                <div className="announcement-top">
                  <span className="badge badge-tag">{item.tag}</span>
                  <span className="announcement-date">{item.date}</span>
                </div>
                <h4>{item.title}</h4>
                <p>{item.preview}</p>
                <span className="read-more">Read bulletin &rarr;</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Insights Sidebar */}
        <aside className="panel-sidebar">
          <div className="panel-header">
            <h3>Term Schedule</h3>
          </div>
          <ul className="timeline">
            <li>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <strong>Course Add/Drop Closes</strong>
                <span>October 2, 2026</span>
              </div>
            </li>
            <li>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <strong>Midterm Assessment Week</strong>
                <span>October 19–24, 2026</span>
              </div>
            </li>
            <li>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <strong>Project Submissions Due</strong>
                <span>November 12, 2026</span>
              </div>
            </li>
          </ul>
        </aside>
      </section>

      {/* Detail Modal */}
      {activeModal && (
        <div className="modal-overlay" onClick={() => setActiveModal(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <span className="badge badge-tag">{activeModal.tag}</span>
              <button className="close-button" onClick={() => setActiveModal(null)}>&times;</button>
            </div>
            <h2>{activeModal.title}</h2>
            <span className="modal-date">Published: {activeModal.date}</span>
            <div className="modal-body">
              <p>{activeModal.details}</p>
            </div>
            <button className="btn btn-primary btn-block" onClick={() => setActiveModal(null)}>
              Dismiss
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;