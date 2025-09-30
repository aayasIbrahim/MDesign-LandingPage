import React from 'react';
// Import icons for social media links
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

const socialLinks = [
    { icon: FaFacebookF, link: 'https://facebook.com/yourprofile', label: 'Facebook' },
    { icon: FaTwitter, link: 'https://twitter.com/yourprofile', label: 'Twitter' },
    { icon: FaLinkedinIn, link: 'https://linkedin.com/in/tanvirahmed', label: 'LinkedIn' },
    { icon: FaWhatsapp, link: 'https://wa.me/+8801613968687', label: 'WhatsApp' },
];

export default function Footer() {
    // Get the current year dynamically
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white border-t border-gray-100 mt-[100px]">
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between">
                
                {/* Left Side: Copyright */}
                <p className="text-gray-600 text-sm mb-4 md:mb-0">
                    &copy; {currentYear}. All Rights Reserved
                </p>

                {/* Center: Designed By Credit */}
                <p className="text-gray-600 text-sm mb-4 md:mb-0">
                    Designed by Ayas Ibrahim
                </p>

                {/* Right Side: Social Icons */}
                <div className="flex space-x-3">
                    {socialLinks.map((item, index) => (
                        <a 
                            key={index}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={item.label}
                            // Green circle background for the icon
                            className="w-8 h-8 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center transition duration-300"
                        >
                            <item.icon className="w-4 h-4" />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}