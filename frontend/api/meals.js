import { MongoClient } from 'mongodb';

const uri = process.env.MONGO_URI; // Add your MongoDB connection string in .env
const client = new MongoClient(uri);

export default async function handler(req, res) {
  try {
    await client.connect();
    const db = client.db('hostel'); // Replace 'hostel' with your database name
    const mealsCollection = db.collection('meals'); // Replace 'meals' with your collection name

    if (req.method === 'GET') {
      // Fetch all meal plans from the database
      const meals = await mealsCollection.find().toArray();
      res.status(200).json(meals);
    } else if (req.method === 'POST') {
      // Add a new meal plan to the database
      const newMeal = req.body;
      const result = await mealsCollection.insertOne(newMeal);
      res.status(201).json({ message: 'Meal plan added', data: result.ops[0] });
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Database connection error:', error);
    res.status(500).json({ message: 'Internal server error', error });
  } finally {
    await client.close();
  }
}