export default async function handler(req, res) {
  if (req.method === 'GET') {
    const attendance = [
      { id: 1, student: 'Amit Sharma', status: 'Present' },
      { id: 2, student: 'Priya Singh', status: 'Absent' },
    ];
    res.status(200).json(attendance);
  } else if (req.method === 'POST') {
    const newRecord = req.body;
    res.status(201).json({ message: 'Attendance record added', data: newRecord });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}