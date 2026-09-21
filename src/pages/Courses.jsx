import { useState } from 'react';
import CourseCard from '../components/CourseCard';

const coursesData = [
  {
    code: 'DCIT 26',
    title: 'Application Development and Emerging Technologies',
    units: 3,
    type: 'Lecture & Lab',
    schedule: 'Mon / Wed &bull; 08:00 AM – 11:00 AM',
    room: 'CL 305',
    instructor: 'Engr. M. De Guzman'
  },
  {
    code: 'ITEC 76',
    title: 'Web Systems and Technologies II',
    units: 3,
    type: 'Pure Laboratory',
    schedule: 'Tue / Thu &bull; 01:00 PM – 04:00 PM',
    room: 'IT Lab 2',
    instructor: 'Prof. J. Anderson'
  },
  {
    code: 'DCIT 50',
    title: 'Advanced Database Systems & Architecture',
    units: 3,
    type: 'Lecture & Lab',
    schedule: 'Friday &bull; 09:00 AM – 03:00 PM',
    room: 'CL 302',
    instructor: 'Dr. C. Rivera'
  },
  {
    code: 'ITEC 80',
    title: 'Network Administration & Security Infrastructure',
    units: 3,
    type: 'Pure Laboratory',
    schedule: 'Saturday &bull; 08:00 AM – 02:00 PM',
    room: 'Cisco Networking Lab',
    instructor: 'Engr. R. Ramos'
  },
  {
    code: 'GNED 08',
    title: 'Science, Technology, and Society',
    units: 3,
    type: 'Lecture',
    schedule: 'Mon / Wed &bull; 01:00 PM – 02:30 PM',
    room: 'Lecture Hall B',
    instructor: 'Prof. L. Mendoza'
  },
  {
    code: 'COSC 70',
    title: 'Software Engineering & Agile Methodologies',
    units: 3,
    type: 'Lecture & Capstone Lab',
    schedule: 'Thursday &bull; 08:00 AM – 02:00 PM',
    room: 'Design Studio 1',
    instructor: 'Dr. K. Bautista'
  }
];

function Courses() {
  const [selectedType, setSelectedType] = useState('All');

  const filteredCourses = selectedType === 'All'
    ? coursesData
    : coursesData.filter(c => c.type.includes(selectedType));

  return (
    <div className="page-container page-enter">
      <header className="page-header">
        <div className="header-meta">
          <span className="eyebrow">Curriculum / 1st Semester</span>
          <h2>Academic <span className="cursive-accent">Modules</span></h2>
        </div>
        <p>Current syllabi and departmental offerings configured for undergraduate degree tracks.</p>
      </header>

      {/* Type Toggle */}
      <div className="filter-bar">
        {['All', 'Laboratory', 'Lecture'].map((t) => (
          <button
            key={t}
            className={`filter-btn ${selectedType === t ? 'active' : ''}`}
            onClick={() => setSelectedType(t)}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="card-grid">
        {filteredCourses.map((course) => (
          <CourseCard
            key={course.code}
            code={course.code}
            title={course.title}
            units={course.units}
            type={course.type}
            schedule={course.schedule}
            room={course.room}
            instructor={course.instructor}
          />
        ))}
      </div>
    </div>
  );
}

export default Courses;