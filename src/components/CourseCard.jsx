function CourseCard({ code, title, units, type, schedule, room, instructor }) {
  return (
    <div className="card course-card">
      <div className="card-top">
        <span className="badge badge-code">{code}</span>
        <span className="badge badge-units">{units} Credit Units</span>
      </div>
      <h3 className="card-title">{title}</h3>
      <div className="course-meta">
        <span className="course-type">{type}</span>
        <span className="course-room">&bull; {room}</span>
      </div>
      <p 
        className="course-schedule" 
        dangerouslySetInnerHTML={{ __html: schedule }}
      />
      <div className="card-footer">
        <span className="card-instructor"><span>Faculty:</span> {instructor}</span>
      </div>
    </div>
  );
}

export default CourseCard;