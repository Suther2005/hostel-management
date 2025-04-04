import { useState } from 'react';
import Button from '../components/Button';

const Settings = () => {
  const [notificationEnabled, setNotificationEnabled] = useState(true);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const handleSave = () => {
    alert('Settings saved successfully!');
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Notifications
          </label>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={notificationEnabled}
              onChange={() => setNotificationEnabled(!notificationEnabled)}
              className="h-5 w-5 text-primary-500 border-gray-300 rounded focus:ring-primary-500"
            />
            <span className="ml-3 text-sm text-gray-600">
              Enable email notifications
            </span>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Theme
          </label>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value as 'light' | 'dark')}
            className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>

        <Button onClick={handleSave} className="mt-4">
          Save Settings
        </Button>
      </div>
    </div>
  );
};

export default Settings;