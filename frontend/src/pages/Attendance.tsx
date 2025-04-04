import { useState } from 'react';
import Button from '../components/Button';

interface AttendanceRecord {
  id: number;
  studentName: string;
  date: string;
  status: 'Present' | 'Absent' | 'On Leave';
}

const Attendance = () => {
  const [attendanceRecords, setAttendanceRecords] = useState<AttendanceRecord[]>([
    { id: 1, studentName: 'Amit Sharma', date: '2025-04-01', status: 'Present' },
    { id: 2, studentName: 'Priya Singh', date: '2025-04-01', status: 'Absent' },
    { id: 3, studentName: 'Rahul Kumar', date: '2025-04-01', status: 'On Leave' },
    { id: 4, studentName: 'Neha Patel', date: '2025-04-01', status: 'Present' },
  ]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Attendance</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Student Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Date</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Status</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {attendanceRecords.map((record) => (
              <tr key={record.id} className="border-t">
                <td className="px-6 py-4 text-sm text-gray-800">{record.studentName}</td>
                <td className="px-6 py-4 text-sm text-gray-800">{record.date}</td>
                <td className="px-6 py-4 text-sm">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      record.status === 'Present'
                        ? 'bg-green-100 text-green-800'
                        : record.status === 'Absent'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {record.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm">
                  <Button
                    className="text-sm"
                    onClick={() => {
                      const updatedRecords = attendanceRecords.map((r) =>
                        r.id === record.id ? { ...r, status: 'Present' } as AttendanceRecord : r
                      );
                      setAttendanceRecords(updatedRecords);
                    }}
                  >
                    Edit
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Attendance;