import johnImage from "../../images/johndoe.jpg";

const Profile = () => {
  const userData = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1234567890",
    address: "123, Main Street, City, Country",
    profilePicture: johnImage,
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10">
      <div className="bg-white-400 shadow-xl rounded-lg w-full lg:max-w-3xl sm:max-w-xl p-8">
        {/* Centered Image */}
        <div className="flex flex-col items-center">
          <img
            src={userData.profilePicture}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-green-400 object-cover shadow-md"
          />
          <h2 className="text-2xl font-semibold text-green-600 mt-4">
            {userData.name}
          </h2>
        </div>
        {/* Email section */}
        <div className="mt-8 bg-gray-100 rounded-lg p-6">
          <h3 className="text-lg font-medium text-green-600">Email</h3>
          <p className="text-gray-700 mt-2">{userData.email}</p>
        </div>
        {/* Phone section */}
        <div className="mt-8 bg-gray-100 rounded-lg p-6">
          <h3 className="text-lg font-medium text-green-600">Phone</h3>
          <p className="text-gray-700 mt-2">{userData.phone}</p>
        </div>
        {/* Address Section */}
        <div className="mt-8 bg-gray-100 rounded-lg p-6">
          <h3 className="text-lg font-medium text-green-600">Address</h3>
          <p className="text-gray-700 mt-2">{userData.address}</p>
        </div>
        {/* Edit Profile Button */}
        <div className="flex justify-center mt-8">
          <button className="bg-green-400 hover:bg-green-600 text-white-400 px-6 py-3 rounded-lg shadow-md">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
