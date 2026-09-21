function StudentCard({ name, studentId, courseYear, email, track, status }) {
  return (
    <div className="card student-card">
      <div className="card-top">
        <span className="badge badge-id">{studentId}</span>
        <span className={`badge ${status === "Dean's Lister" ? 'badge-honor' : 'badge-regular'}`}>
          {status}
        </span>
      </div>
      <h3 className="card-title">{name}</h3>
      <p className="card-subtitle">{courseYear} &bull; {track}</p>
      <div className="card-footer">
        <span className="card-email">{email}</span>
      </div>
    </div>
  );
}

export default StudentCard;