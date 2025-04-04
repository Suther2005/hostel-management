import { HomeIcon, ClipboardDocumentCheckIcon, UserGroupIcon, Cog6ToothIcon, CalendarIcon } from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const menuItems = [
    { name: 'Dashboard', icon: HomeIcon, path: '/' },
    { name: 'Attendance', icon: ClipboardDocumentCheckIcon, path: '/attendance' },
    { name: 'Students', icon: UserGroupIcon, path: '/students' },
    { name: 'Meals', icon: CalendarIcon, path: '/meals' },
    { name: 'Settings', icon: Cog6ToothIcon, path: '/settings' },
  ];

  return (
    <aside className="bg-primary-800 text-white w-64 min-h-screen">
      <div className="p-6">
        <h2 className="text-2xl font-bold">HostelEase</h2>
      </div>
      <nav className="mt-6">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center px-6 py-3 hover:bg-primary-700 ${isActive ? 'bg-primary-700' : ''}`
            }
          >
            <item.icon className="h-5 w-5 mr-3" />
            {item.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;