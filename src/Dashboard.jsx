import React from 'react';
// import { Navigate } from 'react-router-dom';

const Dashboard = ({ user, setUser }) => {
  const handleLogout = () => {
    setUser(undefined);
    const token = localStorage.getItem('token');
    localStorage.removeItem('token');
    console.log(token);
  };
  return (
    <>
      <div className="flex justify-center py-5 text-3xl text-red-600">
        hello {user.full_name} this is the dashboard page
      </div>
      <div className="flex justify-center py-5">
        <button
          className="bg-indigo-500 text-white px-4 py-2 rounded-md transition-all hover:bg-indigo-400 hover:-translate-y-0.5 active:translate-y-0.5"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default Dashboard;
