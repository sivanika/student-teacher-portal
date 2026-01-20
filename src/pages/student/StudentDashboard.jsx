import DashboardLayout from "../../components/DashboardLayout"
import StatsCards from "../../dashboard/components/StatsCards"
import UpcomingSessions from "../../dashboard/components/UpcomingSessions"
import RecentSessions from "../../dashboard/components/RecentSessions"
import ProgressChart from "../../dashboard/components/ProgressChart"
import RecommendedTutors from "../../dashboard/components/RecommendedTutors"

function StudentDashboard() {
  return (
    <DashboardLayout role="student">
      <h2 className="text-2xl font-bold mb-4">
        Welcome Student 🎓
      </h2>

    <div className="p-6 space-y-8">

      <StatsCards />

      <ProgressChart />

      <div className="grid md:grid-cols-2 gap-6">
        <UpcomingSessions />
        <RecentSessions />
      </div>

      <RecommendedTutors />

    </div>
    
    </DashboardLayout>
  )
}

export default StudentDashboard
