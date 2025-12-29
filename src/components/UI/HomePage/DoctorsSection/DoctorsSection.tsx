/* eslint-disable react-hooks/purity */
"use client";
import { useState, useEffect, useRef } from "react";
import {
  FaSearch,
  FaFilter,
  FaStar,
  FaMapMarkerAlt,
  FaStethoscope,
  FaPhoneAlt,
  FaVideo,
  FaRegClock,
  FaUserMd,
  FaCalendarAlt,
  FaChevronDown,
  FaCheck,
} from "react-icons/fa";
import {
  MdVerified,
  MdLocalHospital,
  MdAccessTime,
  MdLanguage,
  MdOutlineMail,
  MdOutlineCall,
} from "react-icons/md";
import { TbHeartbeat, TbMessage } from "react-icons/tb";
import Image from "next/image";
import Link from "next/link";

// Types
interface Doctor {
  id: number;
  name: string;
  specialty: string;
  hospital: string;
  division: string;
  rating: number;
  experience: number;
  fee: number;
  languages: string[];
  availability: string;
  image: string; // URL or path to doctor image
  isVerified: boolean;
  isPremium: boolean;
  videoConsultation: boolean;
  nextAvailable: string;
}

interface DivisionStat {
  name: string;
  count: number;
  color: string;
}

interface DropdownProps {
  options: string[];
  selected: string;
  onSelect: (value: string) => void;
  icon?: React.ReactNode;
  placeholder?: string;
}

// Custom Dropdown Component
const CustomDropdown: React.FC<DropdownProps> = ({
  options,
  selected,
  onSelect,
  icon,
  placeholder = "Select option",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-3 bg-white border border-gray-300 hover:border-blue-500 rounded-xl px-4 py-3.5 text-left transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <div className="flex items-center gap-3">
          {icon && <span className="text-gray-500">{icon}</span>}
          <span className="text-gray-700 font-medium">
            {selected || placeholder}
          </span>
        </div>
        <FaChevronDown
          className={`text-gray-400 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute z-50 w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-2xl overflow-hidden">
          <div className="max-h-60 overflow-y-auto">
            {options.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => {
                  onSelect(option);
                  setIsOpen(false);
                }}
                className={`w-full px-4 py-3 text-left hover:bg-blue-50 transition-colors flex items-center justify-between ${
                  selected === option
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-700"
                }`}
              >
                <span>{option}</span>
                {selected === option && <FaCheck className="text-blue-600" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const DoctorsSection = () => {
  // Bangladeshi divisions
  const divisions = [
    "All Divisions",
    "Dhaka",
    "Chattogram",
    "Rajshahi",
    "Khulna",
    "Barishal",
    "Sylhet",
    "Rangpur",
    "Mymensingh",
  ];

  const specialties = [
    "All Specialties",
    "Cardiology",
    "Neurology",
    "Pediatrics",
    "Orthopedics",
    "Dermatology",
    "Gynecology",
    "Psychiatry",
    "General Medicine",
    "Gastroenterology",
    "Urology",
    "ENT",
    "Ophthalmology",
  ];

  // Sample doctors data with image paths
  const allDoctors: Doctor[] = [
    {
      id: 1,
      name: "Dr. Ahmed Rahman",
      specialty: "Cardiology",
      hospital: "Square Hospital, Dhaka",
      division: "Dhaka",
      rating: 4.9,
      experience: 15,
      fee: 1500,
      languages: ["Bengali", "English", "Hindi"],
      availability: "Today 4:00 PM",
      image: "/doctors/dr-ahmed.jpg", // Replace with actual image path
      isVerified: true,
      isPremium: true,
      videoConsultation: true,
      nextAvailable: "2 hours",
    },
    {
      id: 2,
      name: "Dr. Fatima Chowdhury",
      specialty: "Pediatrics",
      hospital: "Apollo Hospital, Dhaka",
      division: "Dhaka",
      rating: 4.8,
      experience: 12,
      fee: 1200,
      languages: ["Bengali", "English"],
      availability: "Tomorrow 10:00 AM",
      image: "/doctors/dr-fatima.jpg",
      isVerified: true,
      isPremium: true,
      videoConsultation: true,
      nextAvailable: "1 day",
    },
    {
      id: 3,
      name: "Dr. Kamal Hossain",
      specialty: "Neurology",
      hospital: "CMH, Dhaka",
      division: "Dhaka",
      rating: 4.7,
      experience: 18,
      fee: 1800,
      languages: ["Bengali", "English", "Arabic"],
      availability: "Today 6:00 PM",
      image: "/doctors/dr-kamal.jpg",
      isVerified: true,
      isPremium: false,
      videoConsultation: false,
      nextAvailable: "4 hours",
    },
    {
      id: 4,
      name: "Dr. Salma Khan",
      specialty: "Gynecology",
      hospital: "Bangabandhu Medical, Dhaka",
      division: "Dhaka",
      rating: 4.9,
      experience: 14,
      fee: 1300,
      languages: ["Bengali", "English"],
      availability: "Today 3:00 PM",
      image: "/doctors/dr-salma.jpg",
      isVerified: true,
      isPremium: true,
      videoConsultation: true,
      nextAvailable: "1 hour",
    },
    {
      id: 5,
      name: "Dr. Rajib Das",
      specialty: "Orthopedics",
      hospital: "Chattogram Medical",
      division: "Chattogram",
      rating: 4.6,
      experience: 11,
      fee: 1100,
      languages: ["Bengali", "English"],
      availability: "Tomorrow 11:00 AM",
      image: "/doctors/dr-rajib.jpg",
      isVerified: true,
      isPremium: false,
      videoConsultation: true,
      nextAvailable: "1 day",
    },
    {
      id: 6,
      name: "Dr. Nusrat Jahan",
      specialty: "Dermatology",
      hospital: "Rajshahi Medical",
      division: "Rajshahi",
      rating: 4.8,
      experience: 9,
      fee: 1000,
      languages: ["Bengali"],
      availability: "Today 5:00 PM",
      image: "/doctors/dr-nusrat.jpg",
      isVerified: true,
      isPremium: true,
      videoConsultation: false,
      nextAvailable: "3 hours",
    },
    {
      id: 7,
      name: "Dr. Abdul Karim",
      specialty: "Psychiatry",
      hospital: "Khulna Medical",
      division: "Khulna",
      rating: 4.7,
      experience: 13,
      fee: 1250,
      languages: ["Bengali", "English"],
      availability: "Tomorrow 2:00 PM",
      image: "/doctors/dr-abdul.jpg",
      isVerified: true,
      isPremium: false,
      videoConsultation: true,
      nextAvailable: "1 day",
    },
    {
      id: 8,
      name: "Dr. Tahmina Akter",
      specialty: "General Medicine",
      hospital: "Sylhet MAG Osmani",
      division: "Sylhet",
      rating: 4.5,
      experience: 8,
      fee: 900,
      languages: ["Bengali", "English"],
      availability: "Today 7:00 PM",
      image: "/doctors/dr-tahmina.jpg",
      isVerified: true,
      isPremium: false,
      videoConsultation: true,
      nextAvailable: "5 hours",
    },
  ];

  // State
  const [selectedDivision, setSelectedDivision] =
    useState<string>("All Divisions");
  const [selectedSpecialty, setSelectedSpecialty] =
    useState<string>("All Specialties");
  const [doctors, setDoctors] = useState<Doctor[]>(allDoctors);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showFilters, setShowFilters] = useState<boolean>(false);

  // Filter doctors
  useEffect(() => {
    let filtered = allDoctors;

    if (selectedDivision !== "All Divisions") {
      filtered = filtered.filter(
        (doctor) => doctor.division === selectedDivision
      );
    }

    if (selectedSpecialty !== "All Specialties") {
      filtered = filtered.filter(
        (doctor) => doctor.specialty === selectedSpecialty
      );
    }

    if (searchQuery) {
      filtered = filtered.filter(
        (doctor) =>
          doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
          doctor.hospital.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setDoctors(filtered);
  }, [selectedDivision, selectedSpecialty, searchQuery]);

  // Reset filters
  const resetFilters = () => {
    setSelectedDivision("All Divisions");
    setSelectedSpecialty("All Specialties");
    setSearchQuery("");
  };

  // Division stats
  const divisionStats: DivisionStat[] = divisions.slice(1).map((division) => ({
    name: division,
    count: allDoctors.filter((d) => d.division === division).length,
    color: getDivisionColor(division),
  }));

  function getDivisionColor(division: string): string {
    const colors: Record<string, string> = {
      Dhaka: "from-blue-500 to-cyan-500",
      Chattogram: "from-green-500 to-emerald-500",
      Rajshahi: "from-purple-500 to-pink-500",
      Khulna: "from-orange-500 to-amber-500",
      Barishal: "from-red-500 to-rose-500",
      Sylhet: "from-indigo-500 to-violet-500",
      Rangpur: "from-teal-500 to-cyan-500",
      Mymensingh: "from-yellow-500 to-orange-500",
    };
    return colors[division] || "from-blue-500 to-cyan-500";
  }

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 mx-auto">
        {/* Section Header */}
        <div className="text-center mb-7 lg:mb-10">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-200 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <FaUserMd className="text-blue-600" />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent font-bold">
              Expert Medical Professionals
            </span>
          </div>

          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Find Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 mt-2">
              Trusted Doctor
            </span>
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Connect with verified doctors from all 8 divisions of Bangladesh.
            Book appointments instantly or consult via video call.
          </p>
        </div>

        {/* Division Quick Filter - Clean Single Line */}
        <div className="mb-4  flex jucstify-center items-center w-full max-auto">
          {/* <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Filter by Division
            </h3>
          </div> */}

          <div className="">
            {/* Scrollable Division Pills */}
            <div className="flex space-x-2   px-1 ">
              {/* All Divisions Button */}
              <button
                onClick={() => setSelectedDivision("All Divisions")}
                className={`flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedDivision === "All Divisions"
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-200"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                All Divisions
              </button>

              {/* Division Buttons */}
              {divisionStats.map((stat) => (
                <button
                  key={stat.name}
                  onClick={() => setSelectedDivision(stat.name)}
                  className={`flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 relative group ${
                    selectedDivision === stat.name
                      ? `bg-gradient-to-r ${stat.color} text-white shadow-lg`
                      : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {/* Active Indicator */}
                    {selectedDivision === stat.name && (
                      <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                    )}
                    <span>{stat.name}</span>
                    {/* Doctor Count */}
                    <span
                      className={`px-1.5 py-0.5 rounded-full text-xs font-medium ${
                        selectedDivision === stat.name
                          ? "bg-white/20"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {stat.count}
                    </span>
                  </div>

                  {/* Hover Tooltip */}
                  <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 px-3 py-1.5 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-10">
                    {stat.count} doctors in {stat.name}
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-xl border border-gray-200 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-6">
            {/* Search Input */}
            <div className="lg:col-span-5 relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <FaSearch />
              </div>
              <input
                type="text"
                placeholder="Search doctors by name, specialty, or hospital..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Division Dropdown */}
            <div className="lg:col-span-3">
              <CustomDropdown
                options={divisions}
                selected={selectedDivision}
                onSelect={setSelectedDivision}
                icon={<FaMapMarkerAlt className="text-blue-500" />}
                placeholder="Select Division"
              />
            </div>

            {/* Specialty Dropdown */}
            <div className="lg:col-span-3">
              <CustomDropdown
                options={specialties}
                selected={selectedSpecialty}
                onSelect={setSelectedSpecialty}
                icon={<FaStethoscope className="text-green-500" />}
                placeholder="Select Specialty"
              />
            </div>

            {/* Reset Button */}
            <div className="lg:col-span-1">
              <button
                onClick={resetFilters}
                className="w-full h-full flex items-center justify-center bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white rounded-xl font-semibold transition-all hover:shadow-lg px-4"
                title="Reset all filters"
              >
                Reset
              </button>
            </div>
          </div>

          {/* Active Filters */}
          <div className="flex flex-wrap items-center gap-2 mt-4">
            <span className="text-sm text-gray-600">Active filters:</span>
            {selectedDivision !== "All Divisions" && (
              <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                <FaMapMarkerAlt className="text-xs" />
                {selectedDivision}
                <button
                  onClick={() => setSelectedDivision("All Divisions")}
                  className="ml-1 hover:text-blue-900"
                >
                  ×
                </button>
              </span>
            )}
            {selectedSpecialty !== "All Specialties" && (
              <span className="inline-flex items-center gap-1 bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">
                <FaStethoscope className="text-xs" />
                {selectedSpecialty}
                <button
                  onClick={() => setSelectedSpecialty("All Specialties")}
                  className="ml-1 hover:text-green-900"
                >
                  ×
                </button>
              </span>
            )}
            {searchQuery && (
              <span className="inline-flex items-center gap-1 bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm">
                <FaSearch className="text-xs" />
                &quot;{searchQuery}&quot;
                <button
                  onClick={() => setSearchQuery("")}
                  className="ml-1 hover:text-purple-900"
                >
                  ×
                </button>
              </span>
            )}
          </div>
        </div>

        {/* Results Count */}
        {/* <div className="flex justify-between items-center mb-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">
              {doctors.length} {doctors.length === 1 ? "Doctor" : "Doctors"}{" "}
              Found
            </h3>
            <p className="text-gray-600">
              {selectedDivision === "All Divisions"
                ? "Across all divisions of Bangladesh"
                : `in ${selectedDivision} division`}
            </p>
          </div>
          <div className="flex items-center gap-2 text-blue-600">
            <TbHeartbeat className="text-xl" />
            <span className="font-semibold">Verified Professionals</span>
          </div>
        </div> */}

        {/* Doctors Grid - Clean Card Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300"
            >
              {/* Doctor Image Section */}
              <div className="relative h-48 bg-gradient-to-br from-blue-50 to-cyan-50">
                {/* Doctor Image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    {/* Replace with actual Image component if using Next.js */}
                    <div className="w-full h-full bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center text-4xl">
                      👨‍⚕️
                    </div>
                    {/* <Image
                      src={doctor.image}
                      alt={doctor.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 128px) 100vw, 128px"
                    /> */}
                  </div>
                </div>

                {/* Premium Badge */}
                {doctor.isPremium && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    PREMIUM
                  </div>
                )}
              </div>

              {/* Doctor Info */}
              <div className="p-6">
                {/* Name & Verification */}
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-bold text-xl text-gray-900 group-hover:text-blue-600 transition-colors">
                      {doctor.name}
                    </h4>

                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                        {doctor.specialty}
                      </span>
                      {doctor.isVerified && (
                        <MdVerified className="text-green-500 text-lg" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Hospital & Experience */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <MdLocalHospital className="text-blue-500 flex-shrink-0" />
                    <span className="text-sm truncate">{doctor.hospital}</span>

                    {/* Rating */}
                    <div className="flex items-center gap-2 ">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            className={`text-sm ${
                              i < Math.floor(doctor.rating)
                                ? "text-yellow-500"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm font-bold text-gray-900">
                        {doctor.rating}
                      </span>
                      <span className="text-xs text-gray-500">
                        ({Math.floor(Math.random() * 1000) + 100})
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaMapMarkerAlt className="text-red-500 flex-shrink-0" />
                    <span className="text-sm">{doctor.division}</span>
                    <span className="text-gray-400 mx-2">•</span>
                    <span className="text-sm font-medium">
                      {doctor.experience} years exp
                    </span>
                  </div>
                </div>

                {/* Features */}
                {/* <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="text-center bg-gray-50 rounded-lg p-3">
                    <div className="text-sm text-gray-500">Fee</div>
                    <div className="font-bold text-gray-900">৳{doctor.fee}</div>
                  </div>
                  <div className="text-center bg-gray-50 rounded-lg p-3">
                    <div className="text-sm text-gray-500">Available</div>
                    <div className="font-bold text-green-600">
                      {doctor.nextAvailable}
                    </div>
                  </div>
                </div> */}

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3">
                  <button className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white py-3 rounded-xl font-semibold transition-all hover:shadow-lg flex items-center justify-center gap-2">
                    <FaCalendarAlt />
                    <span className="text-sm">Book</span>
                  </button>
                  <button className="flex-1 bg-white border border-blue-500 text-blue-600 hover:bg-blue-50 py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2">
                    <TbMessage />
                    <span className="text-sm">Message</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className=" p-8 lg:p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <Link href="/doctors">
              <button className="primary-btn">View More Doctors</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
