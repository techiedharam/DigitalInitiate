// import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 md:px-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Company Info */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">Digital Initiate</h3>
            <p className="text-gray-300 leading-relaxed">
              We are a leading digital marketing agency dedicated to helping businesses grow and thrive in the digital landscape.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="mb-8 md:mb-0">
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="mb-8 md:mb-0">
            <h4 className="text-xl font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  SEO Optimization
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Social Media Marketing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Content Creation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                  Paid Advertising
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Rohini Sector-4 , North West Delhi</li>
              <li>Email: contact@digitalinitiate.com</li>
              <li>Phone: +91 8586035778</li>
              <li>
                <div className="flex space-x-4 mt-4">
                  <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Digital Initiate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;