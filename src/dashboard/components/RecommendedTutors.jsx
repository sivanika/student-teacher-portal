import { useEffect, useState } from "react"
import API from "../../services/api"

export default function RecommendedTutors() {
  const [tutors, setTutors] = useState([])

  useEffect(() => {
    API.get("/sessions").then(res => {
      const map = {}

      res.data.forEach(s => {
        if (s.teacher?._id) {
          map[s.teacher._id] = s.teacher
        }
      })

      setTutors(Object.values(map))
    })
  }, [])

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h3 className="font-bold mb-3">Recommended Tutors</h3>

      {tutors.length === 0 && (
        <p className="text-gray-500">No tutors found</p>
      )}

      <div className="grid md:grid-cols-3 gap-4">
        {tutors.map(t => (
          <div
            key={t._id}
            className="border p-3 rounded-lg"
          >
            <p className="font-semibold">{t.name}</p>
            <p className="text-sm text-gray-500">
              {t.subject}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
