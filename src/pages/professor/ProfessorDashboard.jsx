import { useEffect, useState } from "react"
import DashboardLayout from "../../components/DashboardLayout"
import API from "../../services/api"
import { Link } from "react-router-dom"

function ProfessorDashboard() {
  const [sessions, setSessions] = useState([])

  useEffect(() => {
    API.get("/sessions/professor")
      .then((res) => setSessions(res.data))
      .catch(console.error)
  }, [])

  return (
    <DashboardLayout role="professor">
      <h2 className="text-2xl font-bold mb-4">My Sessions</h2>

      {sessions.map((s) => (
        <div
          key={s._id}
          className="bg-white p-4 rounded shadow mb-4"
        >
          <h3 className="text-lg font-semibold">{s.title}</h3>
          <p>{s.level} | {s.date} | {s.time}</p>

          <p className="mt-2 font-medium">Enrolled Students:</p>
          <ul className="list-disc ml-6">
            {s.students.length === 0 && <li>No students yet</li>}
            {s.students.map((st) => (
              <li key={st._id}>{st.name} ({st.email})</li>
            ))}
          </ul>

          <Link
            to={`/chat/${s._id}`}
            className="inline-block mt-3 bg-blue-600 text-white px-4 py-1 rounded"
          >
            Open Chat
          </Link>
        </div>
      ))}
    </DashboardLayout>
  )
}

export default ProfessorDashboard
