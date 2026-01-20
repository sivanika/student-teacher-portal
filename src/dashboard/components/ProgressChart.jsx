import { useEffect, useState } from "react"
import API from "../../services/api"

export default function ProgressChart() {
  const [percent, setPercent] = useState(0)

  useEffect(() => {
    API.get("/my-sessions").then(res => {
      const total = res.data.length
      const completed = res.data.filter(
        s => s.status === "completed"
      ).length

      const progress =
        total === 0 ? 0 : Math.round((completed / total) * 100)

      setPercent(progress)
    })
  }, [])

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h3 className="font-bold mb-3">Learning Progress</h3>

      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className="bg-blue-600 h-3 rounded-full transition-all"
          style={{ width: `${percent}%` }}
        />
      </div>

      <p className="text-sm mt-2 text-gray-600">
        {percent}% completed
      </p>
    </div>
  )
}
