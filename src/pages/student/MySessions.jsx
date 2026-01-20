import { useEffect, useState } from "react"
import API from "../../services/api"
import { Link } from "react-router-dom"

function MySessions() {
  const [sessions, setSessions] = useState([])

  useEffect(() => {
    API.get("/sessions/my").then((res) => setSessions(res.data))
  }, [])

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">My Sessions</h2>

      {sessions.map((s) => (
        <div key={s._id} className="border p-3 mb-3">
          <h3>{s.title}</h3>
          <p>{s.date} • {s.time}</p>
          <p>Professor: {s.professor.name}</p>

          <Link
            to={`/chat/${s._id}`}
            className="text-blue-600 underline"
          >
            Open Chat
          </Link>
        </div>
      ))}
    </div>
  )
}

export default MySessions
