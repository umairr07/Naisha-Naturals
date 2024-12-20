import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaClock,
} from "react-icons/fa";
// import contactImg from "../../images/contactus.webp";

const ContactUs = () => {
  return (
    <div className="m-5 py-8">
      <div>
        <img
          src="https://img.freepik.com/premium-vector/green-rounded-contact-information-vector-icons-business-card-phone-number-email_642540-23.jpg"
          alt=""
          className="m-auto"
        />
      </div>
      <div className="container mx-auto lg:px-20 py-10">
        {/* Contact Information */}
        <div className="min-h-screen bg-gray-100 py-12 px-6 lg:px-24">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Section: Contact Info */}
            <div className="lg:col-span-1 bg-white-400 text-grayForPageHeading p-8 shadow-lg rounded-lg">
              <h2 className="lg:text-4xl sm:text-3xl  font-extrabold mb-6">
                Contact Us
              </h2>
              <p className="mb-8">
                We’re here to help! Reach out to us anytime, and we'll get back
                to you as soon as possible.
              </p>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="bg-green-400 text-white-400 w-12 h-12 flex items-center justify-center rounded-full shadow-md">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold ">Phone</h4>
                    <p className="">+1 (234) 567-891</p>
                  </div>
                </div>
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="bg-green-400 text-white-400 w-16 h-12 flex items-center justify-center rounded-full shadow-md">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold ">Address</h4>
                    <p className="">123 Green Avenue, New City, Country</p>
                  </div>
                </div>
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="bg-green-400 text-white-400 w-12 h-12 flex items-center justify-center rounded-full shadow-md">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">Email</h4>
                    <p className="">support@naisha.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex gap-6">
                <FaFacebook className="text-2xl text-gray-600 hover:text-blue-600 cursor-pointer" />
                <FaTwitter className="text-2xl text-gray-600 hover:text-blue-600 cursor-pointer" />
                <FaInstagram className="text-2xl text-gray-600 hover:text-blue-600 cursor-pointer" />
              </div>
            </div>

            {/* Right Section: Contact Form */}
            <div className="lg:col-span-2 bg-white-400 text-grayForPageHeading p-8 rounded-lg shadow-lg">
              <h2 className="lg:text-4xl sm:text-3xl font-bold mb-6">
                Send a Message
              </h2>
              <p className="mb-8">
                Have questions? Fill out the form below and our team will
                respond within 24 hours.
              </p>
              <form>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Your Name"
                      className="w-full rounded-lg py-3 px-4 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-300 "
                    />
                  </div>
                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Your Email"
                      className="w-full rounded-lg py-3 px-4 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-300 "
                    />
                  </div>
                </div>
                {/* Message Field */}
                <div className="mt-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Write your message..."
                    rows="5"
                    className="w-full rounded-lg py-3 px-4 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-300 "
                  ></textarea>
                </div>
                {/* Submit Button */}
                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full bg-green-400 hover:bg-green-600 py-3 rounded-lg text-white-400 text-lg font-semibold transition-all"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
