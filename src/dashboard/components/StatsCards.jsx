import { useEffect, useState } from "react"
import API from "../../services/api"

export default function StatsCards() {
  const [sessions, setSessions] = useState([])

  useEffect(() => {
    API.get("/my-sessions").then(res => {
      setSessions(res.data)
    })
  }, [])

  const completed = sessions.filter(s => s.status === "completed")

  const totalHours = completed.reduce(
    (sum, s) => sum + (s.duration || 1),
    0
  )

  const subjects = new Set(
    sessions.map(s => s.subject)
  )

  return (
    <div className="grid md:grid-cols-3 gap-4">
      <Card title="Completed Sessions" value={completed.length} />
      <Card title="Hours Learned" value={totalHours} />
      <Card title="Active Subjects" value={subjects.size} />
    </div>
  )
}

function Card({ title, value }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  )
}
