import React from "react";

const Settings = () => {
  return (
    <div className="min-h-screen bg-gray-100  text-grayForPageHeading flex flex-col items-center py-10">
      <div className="bg-white-400 rounded-lg shadow-lg w-full max-w-4xl p-6">
        {/* Page Header */}
        <div className="border-b pb-4 mb-6">
          <h1 className="text-2xl font-semibold ">Settings</h1>
          <p className="text-gray-500 text-sm">
            Manage your account preferences.
          </p>
        </div>

        {/* Account Settings */}
        <div className="mb-8">
          <h2 className="text-xl font-medium ">Account Settings</h2>
          <div className="space-y-4 mt-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="">Name</p>
                <p className="text-sm text-gray-500">John Doe</p>
              </div>
              <button className="text-green-400 hover:text-green-600 text-sm">
                Edit
              </button>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="">Email</p>
                <p className="text-sm text-gray-500">john.doe@example.com</p>
              </div>
              <button className="text-green-400 hover:text-green-600 text-sm">
                Edit
              </button>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="">Password</p>
                <p className="text-sm text-gray-500">*********</p>
              </div>
              <button className="text-green-400 hover:text-green-600 text-sm">
                Change
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
