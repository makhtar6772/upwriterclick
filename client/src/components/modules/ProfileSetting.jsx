import React from "react";

const ProfileSetting = ({ firstName, lastName, email, onProfileClick }) => {
  return (
    <div className="dropdown-menu bg-white rounded-lg shadow-lg py-2 absolute right-4 top-16 z-10 w-64">
      <div className="flex items-center px-4 py-3 border-b">
        <div className="ml-3">
          <p className="text-sm font-semibold text-gray-700">
            {firstName} {"\t"} {lastName}
          </p>
          <p className="text-xs text-gray-500">{email}</p>
        </div>
      </div>
      <a
        href="#"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        onClick={onProfileClick} // Call the onProfileClick function passed from DashboardRight
      >
        Profile
      </a>
      <a
        href="#"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
      >
        Settings
      </a>
      <a
        href="#"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
      >
        Get Help
      </a>
      <a
        href="#"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
      >
        Logout
      </a>
      <div className="border-t px-4 py-2">
        <button className="w-full bg-blue-500 text-white rounded mt-2 py-2 px-4">
          App Store
        </button>
        <button className="w-full bg-green-500 text-white rounded mt-2 py-2 px-4">
          Google Play
        </button>
      </div>
    </div>
  );
};

export default ProfileSetting;
