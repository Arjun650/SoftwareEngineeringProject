import React from 'react';
import { 
  Users, 
  MessageSquare, 
  Briefcase, 
  BarChart4, 
  Home,
  X
} from 'lucide-react';

const SidebarItem = ({ icon, title, active = false, onClick, href }) => {
  return (
    <div 
      className={`flex items-center px-6 py-3 cursor-pointer transition-colors duration-200 ${
        active 
          ? 'text-white bg-indigo-600' 
          : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'
      }`}
      onClick={onClick}
    >
      <div className="mr-3">
        {icon}
      </div>
      <a href={href} className="text-sm font-medium">
        {title}
      </a>
    </div>
  );
};

const Sidebar = ({ open, setOpen }) => {
  return (
    <>
      {/* Mobile backdrop */}
      {open && (
        <div 
          className="fixed inset-0 z-20 bg-black/50 lg:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}
      
      {/* Sidebar */}
      <aside 
        className={`
          fixed inset-y-0 z-30 w-64 transform bg-white dark:bg-gray-800 transition-all duration-300 ease-in-out
          lg:translate-x-0 lg:static lg:inset-0 
          ${open ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="py-4 text-gray-500 dark:text-gray-400">
          <div className="flex items-center justify-between px-6">
            <div className="flex items-center">
              <BarChart4 className="h-6 w-6 text-indigo-600" />
              <span className="ml-3 text-lg font-bold text-gray-800 dark:text-gray-200">
                AdminDash
              </span>
            </div>
            
            <button
              className="p-1 rounded-md lg:hidden focus:outline-none"
              onClick={() => setOpen(false)}
            >
              <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>
          </div>
          
          <nav className="mt-8">
            <SidebarItem icon={<Home className="h-5 w-5"  />} title="Dashboard" active href="#dashboard" />
            <SidebarItem icon={<Users className="h-5 w-5"  />} title="Users" href='#user'/>
            <SidebarItem icon={<MessageSquare className="h-5 w-5" />} title="Feedback" href='#feedback' />
            <SidebarItem icon={<Briefcase className="h-5 w-5" />} title="Job Listings" href='#joblisting' />
            {/* <SidebarItem icon={<BarChart4 className="h-5 w-5" />} title="Assessments" /> */}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
