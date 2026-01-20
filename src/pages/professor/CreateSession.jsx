import { useState } from "react"
import DashboardLayout from "../../components/DashboardLayout"
import API from "../../services/api"

function CreateSession() {
  const [form, setForm] = useState({
    title: "",
    level: "",
    date: "",
    time: "",
    meetLink: "",
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }


const handleSubmit = async (e) => {
  e.preventDefault()

  try {
    const res = await API.post("/sessions", form)
    alert("Session created successfully")
    console.log("SESSION CREATED:", res.data)
  } catch (err) {
    console.error("CREATE SESSION ERROR:", err)

    alert(
      err.response?.data?.message ||
      err.response?.data ||
      err.message
    )
  }
}

  return (
    <DashboardLayout role="professor">
      <h2 className="text-2xl font-bold mb-4">Create Session</h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded shadow max-w-md"
      >
        <input
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
        />

        <input
          name="level"
          placeholder="Level"
          value={form.level}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
        />

        <input
          name="date"
          type="date"
          value={form.date}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
        />

        <input
          name="time"
          type="time"
          value={form.time}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
        />

        <input
          name="meetLink"
          placeholder="Meeting Link"
          value={form.meetLink}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
        />

        <button className="bg-green-600 text-white px-4 py-2 rounded">
          Create
        </button>
      </form>
    </DashboardLayout>
  )
}

export default CreateSession
