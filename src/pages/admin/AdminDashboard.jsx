import { useEffect, useState } from "react"
import API from "../../services/api"
import DashboardLayout from "../../components/DashboardLayout"

function AdminDashboard() {
  const [professors, setProfessors] = useState([])

  useEffect(() => {
    API.get("/admin/pending-professors")
      .then((res) => setProfessors(res.data))
      .catch(() => alert("Failed to load professors"))
  }, [])

  const verifyProfessor = async (id) => {
    await API.put(`/admin/verify/${id}`)
    setProfessors((prev) => prev.filter((p) => p._id !== id))
  }

  return (
    <DashboardLayout role="admin">
      <h2 className="text-2xl font-bold mb-4">
        Pending Professors
      </h2>

      {professors.length === 0 && (
        <p>No pending professors</p>
      )}

      {professors.map((p) => (
        <div
          key={p._id}
          className="bg-white p-3 mb-2 rounded shadow"
        >
          <p>{p.name} ({p.email})</p>
          <button
            onClick={() => verifyProfessor(p._id)}
            className="mt-2 bg-green-600 text-white px-3 py-1 rounded"
          >
            Verify
          </button>
        </div>
      ))}
    </DashboardLayout>
  )
}

export default AdminDashboard
