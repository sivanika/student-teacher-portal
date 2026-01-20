import { useEffect, useState } from "react"
import API from "../../services/api"
import DashboardLayout from "../../components/DashboardLayout"
import { Link } from "react-router-dom"

function Sessions() {
  const [sessions, setSessions] = useState([])

  useEffect(() => {
    API.get("/sessions")
      .then((res) => setSessions(res.data))
      .catch(console.error)
  }, [])

  const enroll = async (id) => {
    await API.post(`/sessions/${id}/enroll`)
    alert("Enrolled")
  }

  return (
    <DashboardLayout role="student">
      <h2 className="text-xl font-bold mb-4">Available Sessions</h2>

      {sessions.map((s) => (
        <div key={s._id} className="bg-white p-4 mb-3 rounded">
          <h3>{s.title}</h3>
          <p>{s.professor.name}</p>

          <button
            onClick={() => enroll(s._id)}
            className="bg-green-600 text-white px-3 py-1 mr-2"
          >
            Enroll
          </button>

          <Link
            to={`/chat/${s._id}`}
            className="bg-blue-600 text-white px-3 py-1"
          >
            Open Chat
          </Link>
        </div>
      ))}
    </DashboardLayout>
  )
}

export default Sessions
