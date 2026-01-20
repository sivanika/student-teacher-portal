import { useEffect, useState } from "react"
import API from "../../services/api"
import { Link } from "react-router-dom"

function UpcomingSessions() {
  const [sessions, setSessions] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    API.get("/sessions/my")
      .then((res) => {
        console.log("Dashboard sessions:", res.data) // 🔥 DEBUG
        setSessions(Array.isArray(res.data) ? res.data : [])
      })
      .catch((err) => {
        console.error("UpcomingSessions error:", err)
        setSessions([])
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="bg-white p-4 rounded-xl shadow">
        Loading upcoming sessions...
      </div>
    )
  }

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h3 className="font-bold mb-4">Upcoming Sessions</h3>

      {sessions.length === 0 && (
        <p className="text-gray-500">No upcoming sessions</p>
      )}

      {sessions.map((s) => (
        <div
          key={s._id}
          className="border-b last:border-none pb-3 mb-3"
        >
          <h4 className="font-semibold">{s.title}</h4>

          <p className="text-sm text-gray-600">
            {s.date} • {s.time}
          </p>

          <p className="text-sm text-gray-500">
            Professor: {s.professor?.name}
          </p>

          <Link
            to={`/chat/${s._id}`}
            className="inline-block mt-2 text-sm text-blue-600 underline"
          >
            Open Chat
          </Link>
        </div>
      ))}
    </div>
  )
}

export default UpcomingSessions
