"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineDownload,
} from "react-icons/ai";
import { FaAmbulance } from "react-icons/fa";
import { MdBloodtype, MdLocalPhone } from "react-icons/md";

interface NavLink {
  path: string;
  display: string;
}

const navLinks: NavLink[] = [
  { path: "/", display: "Home" },
  { path: "/doctors", display: "Doctors" },
  { path: "/hospitals", display: "Hospitals" },
  { path: "/blood-donors", display: "Blood Donors" },
  { path: "/medicines", display: "Medicines" },
  { path: "/telemedicine", display: "Telemedicine" },
  { path: "/health-tips", display: "Health Tips" },
];

const emergencyContacts = [
  { name: "National Emergency", number: "999", icon: "🚨" },
  { name: "Ambulance", number: "199", icon: "🚑" },
  { name: "Police", number: "100", icon: "👮" },
  { name: "Fire Service", number: "101", icon: "🚒" },
];

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isEmergencyOpen, setIsEmergencyOpen] = useState(false);
  const pathname = usePathname();

  const handleLinkClick = useCallback(() => {
    setIsSidebarOpen(false);
    setIsEmergencyOpen(false);
  }, []);

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen((prev) => !prev);
    setIsEmergencyOpen(false);
  }, []);

  const toggleEmergency = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setIsEmergencyOpen((prev) => !prev);
  }, []);

  return (
    <>
      {/* Top Emergency Bar */}
      <div className="bg-linear-to-r from-blue-500 to-cyan-500 text-white">
        <div className="container">
          <div className="flex flex-col sm:flex-row justify-between items-center py-2 text-sm">
            {/* Left: Emergency Contact */}
            <div className="flex items-center space-x-4 mb-2 sm:mb-0">
              <div className="relative">
                <button
                  onClick={toggleEmergency}
                  className="flex items-center hover:text-blue-100 transition"
                  aria-expanded={isEmergencyOpen}
                >
                  <FaAmbulance className="mr-2 animate-pulse" />
                  <span className="font-bold">Emergency Contacts</span>
                  <span
                    className={`ml-2 transition-transform ${
                      isEmergencyOpen ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>

                {/* Emergency Dropdown */}
                {isEmergencyOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white text-black rounded-lg shadow-xl z-50 border border-gray-200">
                    <div className="p-3">
                      <h4 className="font-bold text-cyan-500 mb-3 border-b pb-2">
                        Emergency Services
                      </h4>
                      {emergencyContacts.map((contact) => (
                        <div
                          key={contact.name}
                          className="flex items-center justify-between py-2"
                        >
                          <div className="flex items-center">
                            <span className="mr-2">{contact.icon}</span>
                            <span className="text-sm">{contact.name}</span>
                          </div>
                          <a
                            href={`tel:${contact.number}`}
                            className="bg-blue-50 text-cyan-500 px-3 py-1 rounded text-sm font-bold hover:bg-blue-100 transition"
                          >
                            {contact.number}
                          </a>
                        </div>
                      ))}
                      <div className="mt-3 pt-3 border-t border-gray-200">
                        <Link
                          href="/emergency"
                          className="text-cyan-500 text-sm font-bold hover:underline flex items-center justify-center"
                          onClick={handleLinkClick}
                        >
                          <FaAmbulance className="mr-2" />
                          All Emergency Services
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right: Blood Donor & App Download */}
            <div className="flex items-center space-x-4">
              {/* Blood Donor Registration */}
              <Link
                href="/become-donor"
                className="flex items-center hover:text-red-200 transition"
                onClick={handleLinkClick}
              >
                <MdBloodtype className="mr-2" />
                <span className="font-medium">Become a Blood Donor</span>
              </Link>

              {/* Divider */}
              <span className="hidden sm:inline">|</span>

              {/* App Download */}
              <Link
                href="/download-app"
                className="flex items-center bg-white text-cyan-500 px-3 py-1 rounded-full hover:bg-blue-50 transition font-medium"
                onClick={handleLinkClick}
              >
                <AiOutlineDownload className="mr-1" />
                <span className="text-sm">Download App</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 left-0 right-0 bg-white border-b border-gray-200 z-40">
        <div className="container ">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3"
              onClick={handleLinkClick}
            >
              <div className="w-12 h-12 bg-linear-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">QC</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800 leading-tight">
                  QuickCare<span className="text-cyan-500">BD</span>
                </h1>
                <p className="text-xs text-gray-500 leading-tight">
                  National Health Services
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center">
              <ul className="flex items-center space-x-1">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      href={link.path}
                      className={`px-4 py-2 text-sm font-medium transition-colors duration-200 rounded ${
                        pathname === link.path
                          ? "text-cyan-500"
                          : "text-gray-900 hover:text-cyan-500"
                      }`}
                      aria-current={pathname === link.path ? "page" : undefined}
                      onClick={handleLinkClick}
                    >
                      {link.display}
                    </Link>
                  </li>
                ))}
                {/* Quick Action Buttons */}
                <li className="ml-4 space-x-2">
                  <Link
                    href="/register"
                    className="primary-btn text-sm px-4"
                    onClick={handleLinkClick}
                  >
                    Register
                  </Link>
                  <Link
                    href="/login"
                    className="px-4 py-2 text-sm font-medium text-blue-500 hover:text-cyan-500 transition"
                    onClick={handleLinkClick}
                  >
                    Login
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleSidebar}
              className="lg:hidden text-gray-700 p-2 hover:bg-gray-100 rounded"
              aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
            >
              {isSidebarOpen ? (
                <AiOutlineClose size={24} />
              ) : (
                <AiOutlineMenu size={24} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-40 bg-black/50 lg:hidden"
            onClick={handleLinkClick}
            aria-hidden="true"
          />

          {/* Sidebar */}
          <aside
            className="fixed top-0 right-0 z-50 h-full w-80 bg-white shadow-xl lg:hidden overflow-y-auto"
            aria-label="Mobile navigation"
          >
            <div className="p-5 h-full flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-linear-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">QC</span>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-800">
                      QuickCareBD
                    </h2>
                    <p className="text-sm text-gray-500">Healthcare Platform</p>
                  </div>
                </div>
                <button
                  onClick={handleLinkClick}
                  className="text-gray-500 hover:text-gray-700 p-1"
                  aria-label="Close menu"
                >
                  <AiOutlineClose size={24} />
                </button>
              </div>

              {/* Emergency Contacts Mobile */}
              <div className="mb-6 bg-blue-50 rounded-lg p-4">
                <h3 className="font-bold text-cyan-500 mb-3 flex items-center">
                  <FaAmbulance className="mr-2" />
                  Emergency Contacts
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {emergencyContacts.map((contact) => (
                    <a
                      key={contact.name}
                      href={`tel:${contact.number}`}
                      className="bg-white border border-blue-200 rounded p-2 text-center hover:bg-blue-50 transition"
                      onClick={handleLinkClick}
                    >
                      <div className="text-lg mb-1">{contact.icon}</div>
                      <div className="text-xs font-medium">{contact.name}</div>
                      <div className="text-cyan-500 font-bold">
                        {contact.number}
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Main Navigation */}
              <nav className="flex-1">
                <ul className="space-y-1">
                  {navLinks.map((link) => (
                    <li key={link.path}>
                      <Link
                        href={link.path}
                        onClick={handleLinkClick}
                        className={`block py-3 px-4 rounded transition-colors duration-200 ${
                          pathname === link.path
                            ? " text-cyan-500"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        {link.display}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* Quick Actions */}
                <div className="mt-8 space-y-3">
                  <Link
                    href="/become-donor"
                    className="flex items-center justify-center bg-red-50 text-red-600 py-3 rounded-lg hover:bg-red-100 transition"
                    onClick={handleLinkClick}
                  >
                    <MdBloodtype className="mr-2" />
                    <span className="font-medium">Register as Blood Donor</span>
                  </Link>

                  <Link
                    href="/download-app"
                    className="flex items-center justify-center bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                    onClick={handleLinkClick}
                  >
                    <AiOutlineDownload className="mr-2" />
                    <span className="font-medium">Download Mobile App</span>
                  </Link>

                  <div className="grid grid-cols-2 gap-2 mt-4">
                    <Link
                      href="/login"
                      className="text-center py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 transition"
                      onClick={handleLinkClick}
                    >
                      Login
                    </Link>
                    <Link
                      href="/register"
                      className="primary-btn text-center py-2"
                      onClick={handleLinkClick}
                    >
                      Register
                    </Link>
                  </div>
                </div>
              </nav>

              {/* Footer */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-2">
                    Need help? Call 24/7
                  </p>
                  <a
                    href="tel:09678100100"
                    className="text-cyan-500 font-bold text-lg hover:underline flex items-center justify-center"
                    onClick={handleLinkClick}
                  >
                    <MdLocalPhone className="mr-2" />
                    09678-100100
                  </a>
                  <p className="text-xs text-gray-400 mt-4">
                    © {new Date().getFullYear()} QuickCareBD. All healthcare
                    services.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </>
      )}

      {/* Spacer for fixed navbar */}
    </>
  );
};

export default Navbar;
