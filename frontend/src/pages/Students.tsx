import { useState } from 'react';
import Button from '../components/Button';

interface Student {
  id: number;
  name: string;
  email: string;
  attendance: number; // Percentage of attendance
}

const Students = () => {
  const [students, setStudents] = useState<Student[]>([
    { id: 1, name: 'Amit Sharma', email: 'amit.sharma@example.com', attendance: 85 },
    { id: 2, name: 'Priya Singh', email: 'priya.singh@example.com', attendance: 92 },
    { id: 3, name: 'Rahul Kumar', email: 'rahul.kumar@example.com', attendance: 78 },
    { id: 4, name: 'Neha Patel', email: 'neha.patel@example.com', attendance: 88 },
  ]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Students</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Email</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Attendance (%)</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="border-t">
                <td className="px-6 py-4 text-sm text-gray-800">{student.name}</td>
                <td className="px-6 py-4 text-sm text-gray-800">{student.email}</td>
                <td className="px-6 py-4 text-sm text-gray-800">{student.attendance}%</td>
                <td className="px-6 py-4 text-sm">
                  <Button className="text-sm">View</Button>
                  <Button
                    className="text-sm text-red-500 ml-2"
                    onClick={() => setStudents(students.filter((s) => s.id !== student.id))}
                  >
                    Remove
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

export default Students;