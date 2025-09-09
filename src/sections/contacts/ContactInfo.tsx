import {
    PhoneCall,
    Mail,
    Locate,
    Clock,
  } from "lucide-react";
  import ColoredTitle from "../../components/ColoredTitle";
  import Tagline from "../../components/Tagline";

  
  const ContactInfo = () => {
    return (
      <section className="bg-white flex flex-col lg:flex-row text-gray-900 px-6 md:px-16 py-16 gap-10">
        <div className="flex-1">
          <Tagline label="Contact info" className="mb-4" />
          <ColoredTitle
            title="Connect with us today and we will help your business"
            className="text-3xl max-w-xl mb-4"
            highlightWords={["Connect","your","business"]}
            highlightColor="text-blue-800"
          />
          <p className="text-lg font-light text-gray-700 max-w-lg">
            Ready to take logistics to the next level? Reach out to us and discover how our expertise can streamline your operations and drive success.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="border p-3 border-gray-200 rounded-md">
               <div className="flex gap-2 items-center">
                <span className="p-1.5 flex items-center bg-gray-200 rounded-full"><PhoneCall size={12} /></span> 
                <span className="font-light text-sm">Phone</span>
               </div>
               <p className="py-3 text-sm font-light">+1 (555) 7786543</p>
            </div>
            <div className="border p-3 border-gray-200 rounded-md">
               <div className="flex gap-2 items-center">
                <span className="p-1.5 flex items-center bg-gray-200 rounded-full"><Mail size={12} /></span> 
                <span className="font-light text-sm">E-Mail</span>
               </div>
               <p className="py-3 text-SM font-light">support@logistics.com</p>
            </div>
            <div className="border col-span-2 p-3 border-gray-200 rounded-md">
               <div className="flex gap-2 items-center">
                <span className="p-1.5 flex items-center bg-gray-200 rounded-full"><Locate size={12} /></span> 
                <span className="font-light text-sm">Address</span>
               </div>
               <p className="py-3 text-sm font-light">123 Logistics Avenue, New york city, ST, 56476</p>
            </div>
            <div className="border col-span-2 p-3 border-gray-200 rounded-md">
               <div className="flex gap-2 items-center">
                <span className="p-1.5 flex items-center bg-gray-200 rounded-full"><Clock size={12} /></span> 
                <span className="font-light text-sm">Business Hours</span>
               </div>
               <p className="py-3 text-sm font-light">Monday - Friday 7:00AM - 5:00PM</p>
            </div>
          </div>
        </div>
  
        <div className="flex-1 border border-gray-200 px-6 py-2 rounded-md mt-6">
          <p className="font-light text-2xl text-center">
            Please fill out the following form and our team will reach out to you promptly
          </p>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-6">
            {/* First Name */}
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="firstName">
                First Name
              </label>
              <input
                className="border border-gray-200 p-2 w-full rounded-md"
                type="text"
                id="firstName"
                placeholder="Enter your first name"
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="lastName">
                Last Name
              </label>
              <input
                className="border border-gray-200 p-2 w-full rounded-md"
                type="text"
                id="lastName"
                placeholder="Enter your last name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="email">
                Email
              </label>
              <input
                className="border border-gray-200 p-2 w-full rounded-md"
                type="email"
                id="email"
                placeholder="Enter your email address"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="phone">
                Phone
              </label>
              <input
                className="border border-gray-200 p-2 w-full rounded-md"
                type="tel"
                id="phone"
                placeholder="Enter your phone number"
              />
            </div>

            {/* Subject */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1" htmlFor="subject">
                Subject
              </label>
              <input
                className="border border-gray-200 p-2 w-full rounded-md"
                type="text"
                id="subject"
                placeholder="Enter the subject"
              />
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1" htmlFor="message">
                Message
              </label>
              <textarea
                className="border border-gray-200 p-2 w-full rounded-md"
                id="message"
                rows={3}
                placeholder="Write your message here..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 text-center mt-2 w-full">
              <button
                type="submit"
                className="bg-blue-950 hover:bg-blue-900 w-full text-white py-2 px-6 rounded-full transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

      </section>
    );
  };
  
  export default ContactInfo;
  