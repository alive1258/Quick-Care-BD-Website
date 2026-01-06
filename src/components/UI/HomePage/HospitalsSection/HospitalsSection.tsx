"use client";
import React, { useState } from "react";
import {
  FaStar,
  FaMapMarkerAlt,
  FaBed,
  FaUserMd,
  FaArrowRight,
  FaPhoneAlt,
  FaAmbulance,
  FaClock,
  FaHeartbeat,
} from "react-icons/fa";

interface Hospital {
  id: number;
  name: string;
  rating: number;
  distance: string;
  beds: number;
  doctors: number;
  specialty: string;
  image: string;
  division: string;
  emergency: boolean;
  open24h: boolean;
  contact: string;
}

const HospitalsSection = () => {
  const [selectedDivision, setSelectedDivision] = useState("All Divisions");

  const hospitals: Hospital[] = [
    {
      id: 1,
      name: "Bangabandhu Sheikh Mujib Medical University",
      rating: 4.8,
      distance: "2.5 km",
      beds: 2500,
      doctors: 850,
      specialty: "Multi-Specialty",
      image: "/hospitals/bsmmu.jpg",
      division: "Dhaka",
      emergency: true,
      open24h: true,
      contact: "01713-040506",
    },
    {
      id: 2,
      name: "Chittagong Medical College Hospital",
      rating: 4.7,
      distance: "4.2 km",
      beds: 1200,
      doctors: 450,
      specialty: "Cardiology",
      image: "/hospitals/cmc.jpg",
      division: "Chittagong",
      emergency: true,
      open24h: true,
      contact: "031-619999",
    },
    {
      id: 3,
      name: "Rajshahi Medical College Hospital",
      rating: 4.6,
      distance: "3.8 km",
      beds: 1000,
      doctors: 320,
      specialty: "Multi-Specialty",
      image: "/hospitals/rmc.jpg",
      division: "Rajshahi",
      emergency: true,
      open24h: true,
      contact: "0721-761224",
    },
    {
      id: 4,
      name: "Khulna Medical College Hospital",
      rating: 4.5,
      distance: "2.1 km",
      beds: 850,
      doctors: 280,
      specialty: "General Medicine",
      image: "/hospitals/kmc.jpg",
      division: "Khulna",
      emergency: true,
      open24h: true,
      contact: "041-720251",
    },
    {
      id: 5,
      name: "Sylhet MAG Osmani Medical College",
      rating: 4.7,
      distance: "1.8 km",
      beds: 750,
      doctors: 260,
      specialty: "Multi-Specialty",
      image: "/hospitals/sylhet.jpg",
      division: "Sylhet",
      emergency: true,
      open24h: true,
      contact: "0821-716409",
    },
    {
      id: 6,
      name: "Rangpur Medical College Hospital",
      rating: 4.4,
      distance: "3.2 km",
      beds: 900,
      doctors: 310,
      specialty: "General Surgery",
      image: "/hospitals/rangpur.jpg",
      division: "Rangpur",
      emergency: true,
      open24h: true,
      contact: "0521-55230",
    },
    {
      id: 7,
      name: "Barisal Sher-e-Bangla Medical College",
      rating: 4.3,
      distance: "2.7 km",
      beds: 800,
      doctors: 270,
      specialty: "General Medicine",
      image: "/hospitals/barisal.jpg",
      division: "Barisal",
      emergency: true,
      open24h: true,
      contact: "0431-65152",
    },
    {
      id: 8,
      name: "Mymensingh Medical College Hospital",
      rating: 4.5,
      distance: "4.5 km",
      beds: 950,
      doctors: 330,
      specialty: "Multi-Specialty",
      image: "/hospitals/mymensingh.jpg",
      division: "Mymensingh",
      emergency: true,
      open24h: true,
      contact: "091-66666",
    },
  ];

  const divisions = [
    "All Divisions",
    "Dhaka",
    "Chittagong",
    "Rajshahi",
    "Khulna",
    "Sylhet",
    "Rangpur",
    "Barisal",
    "Mymensingh",
  ];

  const filteredHospitals =
    selectedDivision === "All Divisions"
      ? hospitals
      : hospitals.filter((h) => h.division === selectedDivision);

  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Top Hospitals Across{" "}
            <span className="text-blue-600">Bangladesh</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Premium healthcare facilities from all 8 divisions of Bangladesh
          </p>
        </div>

        {/* Division Filter */}
        <div className="mb-12 lg:mb-16">
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 px-1">
            {divisions.map((division, index) => (
              <button
                key={index}
                onClick={() => setSelectedDivision(division)}
                className={`px-4 py-2 rounded-full font-medium text-sm md:text-base transition-all duration-300 ${
                  selectedDivision === division
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-gray-700 border border-gray-300 hover:border-blue-500 hover:text-blue-600 hover:shadow-md"
                }`}
              >
                {division}
              </button>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-12 lg:mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-gradient-to-br from-blue-600 to-blue-500 text-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
                8
              </div>
              <div className="text-sm md:text-base">Divisions Covered</div>
            </div>
            <div className="bg-gradient-to-br from-green-600 to-green-500 text-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
                150+
              </div>
              <div className="text-sm md:text-base">Hospitals Network</div>
            </div>
            <div className="bg-gradient-to-br from-purple-600 to-purple-500 text-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
                5000+
              </div>
              <div className="text-sm md:text-base">Expert Doctors</div>
            </div>
            <div className="bg-gradient-to-br from-cyan-600 to-cyan-500 text-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
                24/7
              </div>
              <div className="text-sm md:text-base">Emergency Service</div>
            </div>
          </div>
        </div>

        {/* Main Hospital Grid - 5x3 Layout */}
        <div className="mb-12 lg:mb-16">
          {/* Mobile Layout */}
          <div className="lg:hidden space-y-6">
            {filteredHospitals.map((hospital) => (
              <HospitalCardMobile key={hospital.id} hospital={hospital} />
            ))}
          </div>

          {/* Desktop 5x3 Grid Layout */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-5 grid-rows-3 gap-6">
              {/* Hospital 1 - col-span-3 */}
              {filteredHospitals[0] && (
                <div className="col-span-3">
                  <HospitalCard1 hospital={filteredHospitals[0]} />
                </div>
              )}

              {/* Hospital 2 - col-span-2 col-start-4 */}
              {filteredHospitals[1] && (
                <div className="col-span-2 col-start-4">
                  <HospitalCard2 hospital={filteredHospitals[1]} />
                </div>
              )}

              {/* Hospital 3 - col-span-2 row-start-2 */}
              {filteredHospitals[2] && (
                <div className="col-span-2 row-start-2">
                  <HospitalCard3 hospital={filteredHospitals[2]} />
                </div>
              )}

              {/* Hospital 4 - col-span-2 col-start-3 row-start-2 */}
              {filteredHospitals[3] && (
                <div className="col-span-2 col-start-3 row-start-2">
                  <HospitalCard4 hospital={filteredHospitals[3]} />
                </div>
              )}

              {/* Hospital 5 - col-start-5 row-start-2 */}
              {filteredHospitals[4] && (
                <div className="col-start-5 row-start-2">
                  <HospitalCard5 hospital={filteredHospitals[4]} />
                </div>
              )}

              {/* Hospital 6 - row-start-3 */}
              {filteredHospitals[5] && (
                <div className="row-start-3">
                  <HospitalCard6 hospital={filteredHospitals[5]} />
                </div>
              )}

              {/* Hospital 7 - col-span-2 row-start-3 */}
              {filteredHospitals[6] && (
                <div className="col-span-2 row-start-3">
                  <HospitalCard7 hospital={filteredHospitals[6]} />
                </div>
              )}

              {/* Hospital 8 - col-span-2 col-start-4 row-start-3 */}
              {filteredHospitals[7] && (
                <div className="col-span-2 col-start-4 row-start-3">
                  <HospitalCard8 hospital={filteredHospitals[7]} />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 md:p-12 shadow-xl mb-6">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Need Immediate Medical Assistance?
                </h3>
                <p className="text-white/90 text-lg">
                  QuickCareBD connects you with the best hospitals across all 8
                  divisions
                </p>
              </div>
              <button className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <span>Explore All Hospitals</span>
                <FaArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
          <p className="text-gray-500 text-sm">
            QuickCareBD - Your Trusted Healthcare Partner Across Bangladesh
          </p>
        </div>
      </div>
    </section>
  );
};

// Mobile Card Component
const HospitalCardMobile = ({ hospital }: { hospital: Hospital }) => (
  <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300">
    <div className="p-6">
      <div className="flex items-center gap-3 mb-4">
        <span className="px-3 py-1.5 bg-blue-100 text-blue-700 text-sm font-bold rounded-full">
          {hospital.division}
        </span>
        {hospital.emergency && (
          <span className="px-3 py-1.5 bg-red-100 text-red-700 text-sm font-bold rounded-full">
            Emergency
          </span>
        )}
      </div>

      <h3 className="font-bold text-gray-900 text-lg mb-3 line-clamp-2">
        {hospital.name}
      </h3>

      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center gap-2">
          <FaStar className="h-5 w-5 text-yellow-500" />
          <span className="font-bold text-gray-900">{hospital.rating}</span>
        </div>
        <div className="text-gray-600">{hospital.specialty}</div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="flex items-center gap-3">
          <FaMapMarkerAlt className="h-4 w-4 text-gray-500" />
          <span className="text-gray-600">{hospital.distance}</span>
        </div>
        <div className="flex items-center gap-3">
          <FaPhoneAlt className="h-4 w-4 text-gray-500" />
          <span className="text-gray-600">{hospital.contact}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="text-center p-3 bg-blue-50 rounded-lg">
          <FaBed className="h-5 w-5 text-blue-600 mx-auto mb-2" />
          <div className="font-bold text-gray-900 text-lg">{hospital.beds}</div>
          <div className="text-sm text-gray-600">Beds</div>
        </div>
        <div className="text-center p-3 bg-green-50 rounded-lg">
          <FaUserMd className="h-5 w-5 text-green-600 mx-auto mb-2" />
          <div className="font-bold text-gray-900 text-lg">
            {hospital.doctors}
          </div>
          <div className="text-sm text-gray-600">Doctors</div>
        </div>
      </div>

      <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300">
        Book Appointment
      </button>
    </div>
  </div>
);

// Hospital Card Base Component (Common Structure)
const HospitalCard = ({
  hospital,
  variant = "default",
}: {
  hospital: Hospital;
  variant?: string;
}) => {
  const variants = {
    default: "bg-white text-gray-900",
    gradient: "bg-gradient-to-br from-blue-600 to-cyan-500 text-white",
    dark: "bg-gradient-to-br from-gray-800 to-gray-900 text-white",
    green: "bg-gradient-to-br from-green-500 to-emerald-600 text-white",
    purple: "bg-gradient-to-br from-purple-600 to-pink-600 text-white",
    orange: "bg-gradient-to-br from-orange-500 to-red-500 text-white",
  };

  const variantClass =
    variants[variant as keyof typeof variants] || variants.default;

  return (
    <div
      className={`rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full ${variantClass}`}
    >
      <div className="p-6 h-full flex flex-col">
        {/* Division & Rating */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-2">
            <span
              className={`px-3 py-1.5 rounded-full text-sm font-bold ${
                variant === "default"
                  ? "bg-blue-100 text-blue-700"
                  : "bg-white/20 backdrop-blur-sm"
              }`}
            >
              {hospital.division}
            </span>
            {hospital.emergency && (
              <span
                className={`px-2 py-1 rounded-full text-xs font-bold ${
                  variant === "default"
                    ? "bg-red-100 text-red-700"
                    : "bg-white/20 backdrop-blur-sm"
                }`}
              >
                24/7
              </span>
            )}
          </div>
          <div
            className={`flex items-center gap-1 px-2 py-1 rounded-full ${
              variant === "default"
                ? "bg-gray-100"
                : "bg-white/20 backdrop-blur-sm"
            }`}
          >
            <FaStar
              className={
                variant === "default"
                  ? "h-4 w-4 text-yellow-500"
                  : "h-4 w-4 text-yellow-300"
              }
            />
            <span className="font-bold">{hospital.rating}</span>
          </div>
        </div>

        {/* Hospital Name */}
        <h3 className="font-bold text-lg mb-4 line-clamp-2">{hospital.name}</h3>

        {/* Specialty & Location */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <FaHeartbeat className="h-4 w-4 opacity-80" />
            <span className="text-sm">{hospital.specialty}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="h-4 w-4 opacity-80" />
            <span className="text-sm">{hospital.distance} away</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="text-center p-3 rounded-lg bg-white/10">
            <FaBed className="h-5 w-5 mx-auto mb-2 opacity-90" />
            <div className="font-bold text-lg">{hospital.beds}</div>
            <div className="text-xs opacity-80">Beds</div>
          </div>
          <div className="text-center p-3 rounded-lg bg-white/10">
            <FaUserMd className="h-5 w-5 mx-auto mb-2 opacity-90" />
            <div className="font-bold text-lg">{hospital.doctors}</div>
            <div className="text-xs opacity-80">Doctors</div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-sm">
            <FaPhoneAlt className="h-3 w-3 opacity-80" />
            <span>{hospital.contact}</span>
          </div>
        </div>

        {/* Button */}
        <button
          className={`w-full py-3 rounded-lg font-medium transition-colors duration-300 ${
            variant === "default"
              ? "bg-blue-600 hover:bg-blue-700 text-white"
              : "bg-white text-blue-600 hover:bg-gray-100"
          }`}
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
};

// Individual Cards with consistent styling but different variants
const HospitalCard1 = ({ hospital }: { hospital: Hospital }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
    <div className="h-48 bg-gradient-to-br from-blue-600 to-cyan-500 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      <div className="absolute inset-0 p-6 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-bold">
            {hospital.division}
          </span>
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
            <FaStar className="h-5 w-5 text-yellow-300" />
            <span className="text-white font-bold text-lg">
              {hospital.rating}
            </span>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-3">{hospital.name}</h3>
          <div className="flex items-center gap-4 text-white/90">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="h-5 w-5" />
              <span>{hospital.distance} away</span>
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="h-5 w-5" />
              <span>{hospital.contact}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="p-6">
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="text-center p-3 bg-blue-50 rounded-lg">
          <FaBed className="h-5 w-5 text-blue-600 mx-auto mb-2" />
          <div className="font-bold text-gray-900">{hospital.beds}</div>
          <div className="text-sm text-gray-600">Beds</div>
        </div>
        <div className="text-center p-3 bg-green-50 rounded-lg">
          <FaUserMd className="h-5 w-5 text-green-600 mx-auto mb-2" />
          <div className="font-bold text-gray-900">{hospital.doctors}</div>
          <div className="text-sm text-gray-600">Doctors</div>
        </div>
        <div className="text-center p-3 bg-red-50 rounded-lg">
          <FaAmbulance className="h-5 w-5 text-red-600 mx-auto mb-2" />
          <div className="font-bold text-gray-900">24/7</div>
          <div className="text-sm text-gray-600">Emergency</div>
        </div>
        <div className="text-center p-3 bg-purple-50 rounded-lg">
          <FaClock className="h-5 w-5 text-purple-600 mx-auto mb-2" />
          <div className="font-bold text-gray-900">Open</div>
          <div className="text-sm text-gray-600">24 Hours</div>
        </div>
      </div>
      <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors duration-300">
        Book Appointment Now
      </button>
    </div>
  </div>
);

const HospitalCard2 = ({ hospital }: { hospital: Hospital }) => (
  <HospitalCard hospital={hospital} variant="green" />
);

const HospitalCard3 = ({ hospital }: { hospital: Hospital }) => (
  <HospitalCard hospital={hospital} variant="default" />
);

const HospitalCard4 = ({ hospital }: { hospital: Hospital }) => (
  <HospitalCard hospital={hospital} variant="purple" />
);

const HospitalCard5 = ({ hospital }: { hospital: Hospital }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
    <div className="p-6 h-full flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1.5 bg-orange-100 text-orange-700 rounded-full text-sm font-bold">
            {hospital.division}
          </span>
        </div>
        <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-gray-100">
          <FaStar className="h-4 w-4 text-yellow-500" />
          <span className="font-bold">{hospital.rating}</span>
        </div>
      </div>

      <h3 className="font-bold text-gray-900 text-lg mb-4 line-clamp-2">
        {hospital.name}
      </h3>

      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <FaHeartbeat className="h-4 w-4 text-gray-500" />
          <span className="text-gray-600">{hospital.specialty}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="h-4 w-4 text-gray-500" />
          <span className="text-gray-600">{hospital.distance} away</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="text-center p-3 bg-blue-50 rounded-lg">
          <FaBed className="h-5 w-5 text-blue-600 mx-auto mb-2" />
          <div className="font-bold text-gray-900">{hospital.beds}</div>
          <div className="text-sm text-gray-600">Beds</div>
        </div>
        <div className="text-center p-3 bg-green-50 rounded-lg">
          <FaUserMd className="h-5 w-5 text-green-600 mx-auto mb-2" />
          <div className="font-bold text-gray-900">{hospital.doctors}</div>
          <div className="text-sm text-gray-600">Doctors</div>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <FaPhoneAlt className="h-3 w-3" />
          <span>{hospital.contact}</span>
        </div>
      </div>

      <button className="w-full py-3 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-lg transition-colors duration-300">
        Quick Contact
      </button>
    </div>
  </div>
);

const HospitalCard6 = ({ hospital }: { hospital: Hospital }) => (
  <HospitalCard hospital={hospital} variant="dark" />
);

const HospitalCard7 = ({ hospital }: { hospital: Hospital }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
    <div className="p-6 h-full flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-bold">
            {hospital.division}
          </span>
        </div>
        <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-gray-100">
          <FaStar className="h-4 w-4 text-yellow-500" />
          <span className="font-bold text-sm">{hospital.rating}</span>
        </div>
      </div>

      <h3 className="font-bold text-gray-900 text-base mb-4 line-clamp-2">
        {hospital.name}
      </h3>

      <div className="mb-4">
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
          <FaHeartbeat className="h-4 w-4" />
          <span>{hospital.specialty}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <FaMapMarkerAlt className="h-3 w-3" />
          <span>{hospital.distance} away</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="text-center p-3 bg-blue-50 rounded-lg">
          <FaBed className="h-4 w-4 text-blue-600 mx-auto mb-1" />
          <div className="font-bold text-gray-900">{hospital.beds}</div>
          <div className="text-xs text-gray-600">Beds</div>
        </div>
        <div className="text-center p-3 bg-green-50 rounded-lg">
          <FaUserMd className="h-4 w-4 text-green-600 mx-auto mb-1" />
          <div className="font-bold text-gray-900">{hospital.doctors}</div>
          <div className="text-xs text-gray-600">Doctors</div>
        </div>
      </div>

      <button className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300">
        Contact Now
      </button>
    </div>
  </div>
);

const HospitalCard8 = ({ hospital }: { hospital: Hospital }) => (
  <div className="bg-gradient-to-br from-cyan-500 to-blue-600 text-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
    <div className="p-6 h-full flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold">
            {hospital.division}
          </span>
        </div>
        <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-white/20 backdrop-blur-sm">
          <FaStar className="h-4 w-4 text-yellow-300" />
          <span className="font-bold">{hospital.rating}</span>
        </div>
      </div>

      <h3 className="font-bold text-white text-base mb-4 line-clamp-2">
        {hospital.name}
      </h3>

      <div className="mb-4">
        <div className="flex items-center gap-2 text-sm opacity-90 mb-2">
          <FaHeartbeat className="h-4 w-4" />
          <span>{hospital.specialty}</span>
        </div>
        <div className="flex items-center gap-2 text-sm opacity-90">
          <FaMapMarkerAlt className="h-4 w-4" />
          <span>{hospital.distance} away</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="text-center p-3 rounded-lg bg-white/10">
          <FaBed className="h-4 w-4 mx-auto mb-1 opacity-90" />
          <div className="font-bold text-lg">{hospital.beds}</div>
          <div className="text-xs opacity-80">Beds</div>
        </div>
        <div className="text-center p-3 rounded-lg bg-white/10">
          <FaUserMd className="h-4 w-4 mx-auto mb-1 opacity-90" />
          <div className="font-bold text-lg">{hospital.doctors}</div>
          <div className="text-xs opacity-80">Doctors</div>
        </div>
      </div>

      <button className="w-full py-2.5 bg-white text-cyan-600 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-300">
        Book Appointment
      </button>
    </div>
  </div>
);

export default HospitalsSection;
