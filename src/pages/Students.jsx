import { useState } from 'react';
import StudentCard from '../components/StudentCard';

const studentsData = [
  {
    id: '2023-10021',
    name: 'Dan Marko Dulutan',
    courseYear: 'BSIT 3-6',
    email: 'danmarko.dulutan@cvsu.edu.ph',
    track: 'Network & Web Systems',
    status: "Dean's Lister"
  },
  {
    id: '2023-10045',
    name: 'Erich Mikaela Santos',
    courseYear: 'BSCS 3-1',
    email: 'erich.santos@cvsu.edu.ph',
    track: 'Artificial Intelligence',
    status: 'Regular'
  },
  {
    id: '2023-10098',
    name: 'Ivan Christian Rivera',
    courseYear: 'BSIT 3-6',
    email: 'ivan.rivera@cvsu.edu.ph',
    track: 'Systems Development',
    status: "Dean's Lister"
  },
  {
    id: '2024-10112',
    name: 'Alliah Nicole Bautista',
    courseYear: 'BSIT 2-6',
    email: 'alliah.bautista@cvsu.edu.ph',
    track: 'Database Architecture',
    status: 'Regular'
  },
  {
    id: '2023-10174',
    name: 'Angelica Mae Cruz',
    courseYear: 'BSCS 3-2',
    email: 'angelica.cruz@cvsu.edu.ph',
    track: 'Data Science & Analytics',
    status: "Dean's Lister"
  },
  {
    id: '2024-10205',
    name: 'Johnny Ray Mendoza',
    courseYear: 'BSIT 2-6',
    email: 'johnny.mendoza@cvsu.edu.ph',
    track: 'Information Security',
    status: 'Regular'
  }
];

function Students() {
  const [filter, setFilter] = useState('All');

  const filteredStudents = filter === 'All' 
    ? studentsData 
    : studentsData.filter(s => s.courseYear.includes(filter));

  return (
    <div className="page-container page-enter">
      <header className="page-header">
        <div className="header-meta">
          <span className="eyebrow">Directory / Cohort 2026–2027</span>
          <h2>Scholars & <span className="cursive-accent">Profiles</span></h2>
        </div>
        <p>Active collegiate roster enrolled across computational sciences and information technology divisions.</p>
      </header>

      {/* Filter Tabs */}
      <div className="filter-bar">
        {['All', 'BSIT 3', 'BSIT 2', 'BSCS 3'].map((item) => (
          <button
            key={item}
            className={`filter-btn ${filter === item ? 'active' : ''}`}
            onClick={() => setFilter(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="card-grid">
        {filteredStudents.map((student) => (
          <StudentCard
            key={student.id}
            name={student.name}
            studentId={student.id}
            courseYear={student.courseYear}
            email={student.email}
            track={student.track}
            status={student.status}
          />
        ))}
      </div>
    </div>
  );
}

export default Students;