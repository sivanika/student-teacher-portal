import { useEffect, useState } from "react"
import API from "../../services/api"
import DashboardLayout from "../../components/DashboardLayout"

function Progress() {
  const [data, setData] = useState([])

  useEffect(() => {
    API.get("/attendance/my-progress")
      .then(res => setData(res.data))
  }, [])

  return (
    <DashboardLayout role="student">
      <h2 className="text-2xl font-bold mb-4">My Progress</h2>

      {data.map((item) => (
        <div key={item._id} className="bg-white p-3 mb-3 rounded shadow">
          <p><b>{item.session.title}</b></p>
          <p>Status: {item.status}</p>
          <p>Progress: {item.progress}%</p>
        </div>
      ))}
    </DashboardLayout>
  )
}

export default Progress
