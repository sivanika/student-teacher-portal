import { useEffect, useState } from "react"
import API from "../../services/api"

export default function RecentSessions() {
  const [sessions, setSessions] = useState([])

  useEffect(() => {
    API.get("/sessions/my").then((res) => {
      // If backend has status later, filter here
      setSessions(res.data.slice(0, 5))
    })
  }, [])

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h3 className="font-bold mb-4 text-lg">Recent Sessions</h3>

      {sessions.length === 0 && (
        <p className="text-gray-500">No recent sessions</p>
      )}

      {sessions.map((s) => (
        <div key={s._id} className="border-b last:border-none py-2">
          <p className="font-medium">{s.title}</p>
          <p className="text-sm text-gray-500">
            {s.date}
          </p>
        </div>
      ))}
    </div>
  )
}
