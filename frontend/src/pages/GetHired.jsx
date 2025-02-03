import { useState } from 'react';

const GetHired = () => {
  // State to manage form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [secondaryPhone, setSecondaryPhone] = useState('');
  const [education, setEducation] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [school, setSchool] = useState('');
  const [yearOfPassing, setYearOfPassing] = useState('');
  const [resume, setResume] = useState(null);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission logic here, like sending data to a server or saving it locally.
    console.log({
      name,
      email,
      phone,
      secondaryPhone,
      education,
      address,
      city,
      state,
      zipcode,
      school,
      yearOfPassing,
      resume,
    });
  };

  return (
    <div className="min-h-screen bg-[#edf2f4] flex flex-col justify-center items-center text-center px-4">
      {/* Heading */}
      <h1 className="text-4xl md:text-7xl font-bold leading-tight mb-6 mt-20">
        Get Hired and Join Our Team
      </h1>

      {/* Description */}
      <p className="max-w-2xl text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
        Ready to take the next step in your career? Fill out the form below to apply for a position with us.
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit} className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg">
        {/* Full Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-semibold text-gray-700">Full Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Full Name"
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
        </div>

        {/* Email Address */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-semibold text-gray-700">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
        </div>

        {/* Primary Phone */}
        <div className="mb-4">
          <label htmlFor="phone" className="block text-lg font-semibold text-gray-700">Phone Number</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Your Phone Number"
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
        </div>

        {/* Secondary Phone */}
        <div className="mb-4">
          <label htmlFor="secondaryPhone" className="block text-lg font-semibold text-gray-700">Secondary Phone Number (Optional)</label>
          <input
            type="text"
            id="secondaryPhone"
            value={secondaryPhone}
            onChange={(e) => setSecondaryPhone(e.target.value)}
            placeholder="Optional - Secondary Phone"
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        {/* Education */}
        <div className="mb-4">
          <label htmlFor="education" className="block text-lg font-semibold text-gray-700">Highest Level of Education</label>
          <input
            type="text"
            id="education"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
            placeholder="Your Highest Education"
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
        </div>

        {/* 12th School Name */}
        <div className="mb-4">
          <label htmlFor="school" className="block text-lg font-semibold text-gray-700">School Name (12th)</label>
          <input
            type="text"
            id="school"
            value={school}
            onChange={(e) => setSchool(e.target.value)}
            placeholder="Your 12th School"
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
        </div>

        {/* Year of Passing (12th) */}
        <div className="mb-4">
          <label htmlFor="yearOfPassing" className="block text-lg font-semibold text-gray-700">Year of Passing (12th)</label>
          <input
            type="text"
            id="yearOfPassing"
            value={yearOfPassing}
            onChange={(e) => setYearOfPassing(e.target.value)}
            placeholder="Year of Passing"
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
        </div>

        {/* Address */}
        <div className="mb-4">
          <label htmlFor="address" className="block text-lg font-semibold text-gray-700">Address</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Your Address"
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
        </div>

        {/* City */}
        <div className="mb-4">
          <label htmlFor="city" className="block text-lg font-semibold text-gray-700">City</label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Your City"
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
        </div>

        {/* State */}
        <div className="mb-4">
          <label htmlFor="state" className="block text-lg font-semibold text-gray-700">State</label>
          <input
            type="text"
            id="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
            placeholder="Your State"
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
        </div>

        {/* Zipcode */}
        <div className="mb-4">
          <label htmlFor="zipcode" className="block text-lg font-semibold text-gray-700">Zipcode</label>
          <input
            type="text"
            id="zipcode"
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
            placeholder="Your Zipcode"
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
        </div>

        {/* Resume Upload */}
        <div className="mb-4">
          <label htmlFor="resume" className="block text-lg font-semibold text-gray-700">Upload Resume</label>
          <input
            type="file"
            id="resume"
            onChange={(e) => setResume(e.target.files[0])}
            className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:from-orange-500 hover:to-yellow-400 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Apply Now
        </button>
      </form>
    </div>
  );
};

export default GetHired;
