import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import contactImg from "../../images/contactus.webp";

const ContactUs = () => {
  return (
    <div className="m-5 py-8">
      <div>
        <img
          src={contactImg}
          alt=""
          className="lg:w-[80%] m-auto mb-10 rounded-xl shadow-2xl"
        />
      </div>
      <div className="container mx-auto px-20 py-10">
        {/* Contact Information */}
        <div className="lg:grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 sm:flex sm:flex-col-reverse">
          <div>
            <h2 className="text-2xl text-grayForPageHeading mb-4">
              Contact Us
            </h2>
            <p className="mb-4 text-grayForPageHeading">
              Have any questions? We'd love to hear from you! Reach out to us
              via the form or the contact details below.
            </p>
            <div className="space-y-4 text-grayForPageHeading">
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-blue-600 text-xl" />
                <p>1234 Dummy Street, Fake City, Country, 56789</p>
              </div>
              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-green-600 text-xl" />
                <p>+1 234 567 890</p>
              </div>
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-red-600 text-xl" />
                <p>contact@dummyemail.com</p>
              </div>
            </div>
            <div className="flex mt-6 gap-4">
              <a href="#" className="text-blue-600 text-xl hover:text-blue-800">
                <FaFacebook />
              </a>
              <a href="#" className="text-blue-400 text-xl hover:text-blue-600">
                <FaTwitter />
              </a>
              <a href="#" className="text-pink-600 text-xl hover:text-pink-800">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="lg:text-2xl sm:text-xl mb-4 text-grayForPageHeading">
              Send Us a Message
            </h2>
            <form className="bg-white border-2 border-gray-300 shadow-sm rounded px-8 pt-6 pb-8">
              <div className="mb-4">
                <label
                  className="block text-sm mb-2 text-grayForPageHeading"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="shadow appearance-none border-gray-100 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline "
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm mb-2 text-grayForPageHeading"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  className="shadow appearance-none border-gray-100 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-sm mb-2 text-grayForPageHeading"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  className="shadow appearance-none border-gray-100 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  rows="4"
                  required
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-green-400 text-white-400 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
