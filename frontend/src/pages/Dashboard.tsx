import Card from '../components/Card';
import Chart from '../components/Chart';

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card title="Today's Attendance">
          <p className="text-2xl font-bold text-gray-800">85%</p>
          <p className="text-sm text-gray-500">Students present today</p>
        </Card>
        <Card title="Students on Leave">
          <p className="text-2xl font-bold text-gray-800">12</p>
          <p className="text-sm text-gray-500">Approved leave requests</p>
        </Card>
        <Card title="Total Students">
          <p className="text-2xl font-bold text-gray-800">120</p>
          <p className="text-sm text-gray-500">Enrolled in the hostel</p>
        </Card>
      </div>
      <div className="mt-8">
        <Card title="Attendance Overview">
          <Chart />
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;