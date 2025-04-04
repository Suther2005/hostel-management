import { useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

interface MealPlan {
  id: number;
  mealType: 'Breakfast' | 'Lunch' | 'Dinner';
  attendees: number;
  date: string;
}

const Meals = () => {
  const [mealPlans, setMealPlans] = useState<MealPlan[]>([
    { id: 1, mealType: 'Breakfast', attendees: 85, date: '2025-04-04' },
    { id: 2, mealType: 'Lunch', attendees: 90, date: '2025-04-04' },
    { id: 3, mealType: 'Dinner', attendees: 80, date: '2025-04-04' },
  ]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Meal Planning</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mealPlans.map((meal) => (
          <Card key={meal.id} title={`${meal.mealType} - ${meal.date}`}>
            <p className="text-2xl font-bold text-gray-800">{meal.attendees}</p>
            <p className="text-sm text-gray-500">Expected attendees</p>
            <Button
              className="mt-4"
              onClick={() =>
                setMealPlans((prevPlans) =>
                  prevPlans.map((p) =>
                    p.id === meal.id ? { ...p, attendees: p.attendees + 1 } : p
                  )
                )
              }
            >
              Edit Plan
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Meals;