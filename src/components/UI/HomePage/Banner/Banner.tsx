import {
  FaSearch,
  FaAmbulance,
  FaUserMd,
  FaPlay,
  FaPhoneAlt,
} from "react-icons/fa";
import {
  MdBloodtype,
  MdLocalHospital,
  MdVerified,
  MdLocationOn,
  MdArrowForward,
} from "react-icons/md";
import { TbStethoscope, TbMedicineSyrup, TbHeartbeat } from "react-icons/tb";

const Banner = () => {
  return (
    <div className="relative flex items-center bg-gradient-to-br from-blue-50 via-white to-cyan-50 overflow-hidden pt-20 lg:pt-0">
      {/* Mobile Background Elements (Hidden on Desktop) */}
      <div className="absolute inset-0 lg:hidden">
        <div className="absolute top-20 left-0 w-64 h-64 bg-blue-100 rounded-full opacity-10"></div>
        <div className="absolute bottom-20 right-0 w-56 h-56 bg-cyan-100 rounded-full opacity-10"></div>
      </div>

      {/* Desktop Background Elements */}
      <div className="hidden lg:block absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="relative container  py-8 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20 items-center">
          {/* Left Content - Mobile First */}
          <div className="relative z-10 order-2 lg:order-1">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-blue-200 px-4 py-2.5 rounded-full mb-6 lg:mb-8 shadow-sm w-full lg:w-auto">
              <div className="w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                <MdVerified className="text-white text-xs lg:text-sm" />
              </div>
              <span className="font-semibold text-gray-700 text-xs lg:text-sm truncate">
                Trusted Healthcare Platform • 64 Districts
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-4 lg:mb-6">
              Healthcare
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 mt-1 lg:mt-2 text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                Simplified
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-6 lg:mb-10 leading-relaxed max-w-2xl">
              Connect instantly with verified doctors, emergency services, blood
              donors, and hospitals across all
              <span className="font-semibold text-blue-600">
                {" "}
                64 districts
              </span>{" "}
              of Bangladesh.
            </p>

            {/* Search & District Selector */}
            <div className="space-y-4 lg:space-y-6 mb-8 lg:mb-12">
              {/* Search Bar */}
              <div className="relative group">
                <div className="hidden lg:block absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
                <div className="relative flex flex-col sm:flex-row items-stretch sm:items-center bg-white rounded-xl lg:rounded-2xl p-1.5 lg:p-2 shadow-lg lg:shadow-xl border border-gray-200">
                  <div className="flex items-center pl-3 lg:pl-5 pr-2 mb-2 sm:mb-0 sm:border-r border-gray-200">
                    <FaSearch className="text-gray-400 text-base lg:text-lg" />
                    <input
                      type="text"
                      placeholder="Search doctors, hospitals..."
                      className="flex-1 py-3 lg:py-4 px-2 lg:px-3 text-gray-700 placeholder-gray-500 focus:outline-none text-sm lg:text-lg bg-transparent"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 sm:border-r border-gray-200 pr-2">
                      <select className="w-full py-2 lg:py-3 px-2 lg:px-3 text-gray-600 bg-transparent focus:outline-none text-sm lg:text-base">
                        <option>All Districts</option>
                        <option>Dhaka</option>
                        <option>Chittagong</option>
                      </select>
                    </div>
                    <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-4 lg:px-8 py-3 lg:py-4 rounded-lg lg:rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 text-sm lg:text-base">
                      <FaSearch className="text-sm lg:text-lg" />
                      <span className="hidden sm:inline">Find Now</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-wrap gap-2 lg:gap-4">
                <a
                  href="tel:999"
                  className="inline-flex items-center gap-2 bg-red-50 text-red-600 hover:bg-red-100 px-3 lg:px-4 py-2 lg:py-3 rounded-lg lg:rounded-xl font-medium transition text-sm lg:text-base flex-1 sm:flex-none text-center justify-center"
                >
                  <FaAmbulance className="text-sm" />
                  <span>Emergency</span>
                </a>
                <a
                  href="/blood-donors"
                  className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 hover:bg-blue-100 px-3 lg:px-4 py-2 lg:py-3 rounded-lg lg:rounded-xl font-medium transition text-sm lg:text-base flex-1 sm:flex-none text-center justify-center"
                >
                  <MdBloodtype className="text-sm" />
                  <span>Blood Donors</span>
                </a>
                <a
                  href="/hospitals"
                  className="inline-flex items-center gap-2 bg-green-50 text-green-600 hover:bg-green-100 px-3 lg:px-4 py-2 lg:py-3 rounded-lg lg:rounded-xl font-medium transition text-sm lg:text-base flex-1 sm:flex-none text-center justify-center"
                >
                  <MdLocalHospital className="text-sm" />
                  <span>Hospitals</span>
                </a>
              </div>
            </div>

            {/* Live Stats - Mobile Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 lg:gap-6">
              {[
                {
                  icon: (
                    <FaUserMd className="text-blue-600 text-xl lg:text-2xl" />
                  ),
                  value: "5K+",
                  label: "Doctors",
                },
                {
                  icon: (
                    <MdBloodtype className="text-red-600 text-xl lg:text-2xl" />
                  ),
                  value: "50K+",
                  label: "Donors",
                },
                {
                  icon: (
                    <TbHeartbeat className="text-green-600 text-xl lg:text-2xl" />
                  ),
                  value: "24/7",
                  label: "Service",
                },
                {
                  icon: (
                    <MdLocationOn className="text-purple-600 text-xl lg:text-2xl" />
                  ),
                  value: "64",
                  label: "Districts",
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center group bg-white/80 backdrop-blur-sm rounded-xl lg:rounded-2xl p-3 lg:p-4 border border-gray-100 hover:border-blue-200 transition-all"
                >
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 rounded-lg lg:rounded-2xl bg-${
                      stat.label === "Doctors"
                        ? "blue"
                        : stat.label === "Donors"
                        ? "red"
                        : stat.label === "Service"
                        ? "green"
                        : "purple"
                    }-50 mb-2 lg:mb-3 group-hover:scale-105 transition-transform duration-300`}
                  >
                    {stat.icon}
                  </div>
                  <div className="text-lg lg:text-2xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs lg:text-sm text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Interactive Dashboard */}
          <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
            {/* Floating Emergency Badge - Mobile Top */}
            <div className="lg:absolute -top-4 -right-4 z-20 mb-4 lg:mb-0">
              <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-3 lg:px-5 lg:py-3 rounded-xl shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 lg:w-8 lg:h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <FaAmbulance className="text-xs lg:text-sm" />
                  </div>
                  <div>
                    <div className="font-bold text-sm lg:text-base">
                      24/7 Emergency
                    </div>
                    <div className="text-xs opacity-90">Tap for help</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Dashboard Card */}
            <div className="relative bg-white rounded-2xl lg:rounded-3xl shadow-xl lg:shadow-2xl overflow-hidden border border-gray-100">
              {/* Dashboard Header */}
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-4 lg:p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 lg:gap-3">
                    <div className="w-8 h-8 lg:w-10 lg:h-10 bg-white/20 rounded-lg lg:rounded-xl flex items-center justify-center">
                      <TbStethoscope className="text-white text-base lg:text-xl" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-base lg:text-xl">
                        QuickCare Dashboard
                      </h3>
                      <p className="text-blue-100 text-xs lg:text-sm">
                        Real-time Healthcare Access
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-white/80 text-xs lg:text-sm">Live</div>
                    <div className="flex items-center gap-1 lg:gap-2">
                      <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <div className="text-white font-bold text-sm lg:text-base">
                        Active
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-4 lg:p-6">
                {/* Emergency Panel */}
                <div className="mb-4 lg:mb-6">
                  <div className="flex items-center gap-2 mb-3 lg:mb-4">
                    <div className="w-6 h-6 lg:w-8 lg:h-8 bg-red-100 rounded-lg flex items-center justify-center">
                      <FaAmbulance className="text-red-600 text-sm lg:text-base" />
                    </div>
                    <h4 className="font-bold text-gray-900 text-sm lg:text-base">
                      Emergency Services
                    </h4>
                  </div>
                  <div className="grid grid-cols-2 gap-2 lg:gap-3">
                    <a
                      href="tel:999"
                      className="bg-red-50 hover:bg-red-100 p-3 lg:p-4 rounded-lg lg:rounded-xl transition group"
                    >
                      <div className="text-red-600 font-bold text-base lg:text-lg">
                        999
                      </div>
                      <div className="text-xs lg:text-sm text-gray-600">
                        National Emergency
                      </div>
                    </a>
                    <a
                      href="tel:199"
                      className="bg-red-50 hover:bg-red-100 p-3 lg:p-4 rounded-lg lg:rounded-xl transition group"
                    >
                      <div className="text-red-600 font-bold text-base lg:text-lg">
                        199
                      </div>
                      <div className="text-xs lg:text-sm text-gray-600">
                        Ambulance
                      </div>
                    </a>
                  </div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-2 gap-3 lg:gap-4 mb-4 lg:mb-6">
                  {[
                    {
                      href: "/doctors",
                      icon: (
                        <FaUserMd className="text-blue-600 text-base lg:text-xl" />
                      ),
                      title: "Find Doctors",
                      desc: "Instant booking",
                      color: "blue",
                    },
                    {
                      href: "/hospitals",
                      icon: (
                        <MdLocalHospital className="text-green-600 text-base lg:text-xl" />
                      ),
                      title: "Hospitals",
                      desc: "Bed availability",
                      color: "green",
                    },
                    {
                      href: "/blood-donors",
                      icon: (
                        <MdBloodtype className="text-red-600 text-base lg:text-xl" />
                      ),
                      title: "Blood Donors",
                      desc: "Find donors",
                      color: "red",
                    },
                    {
                      href: "/medicines",
                      icon: (
                        <TbMedicineSyrup className="text-purple-600 text-base lg:text-xl" />
                      ),
                      title: "Medicines",
                      desc: "Price & stock",
                      color: "purple",
                    },
                  ].map((service, index) => (
                    <a key={index} href={service.href} className="group">
                      <div
                        className={`bg-${service.color}-50 hover:bg-${service.color}-100 p-3 lg:p-5 rounded-lg lg:rounded-xl transition-all duration-300 hover:shadow-md border border-${service.color}-100`}
                      >
                        <div className="flex items-center gap-2 lg:gap-4">
                          <div
                            className={`w-8 h-8 lg:w-12 lg:h-12 bg-${service.color}-100 rounded-lg lg:rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform`}
                          >
                            {service.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-bold text-gray-900 text-sm lg:text-base truncate">
                              {service.title}
                            </div>
                            <div className="text-xs lg:text-sm text-gray-500 truncate">
                              {service.desc}
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Live Activity */}
                <div className="bg-gray-50 rounded-lg lg:rounded-xl p-3 lg:p-5">
                  <div className="flex items-center justify-between mb-3 lg:mb-4">
                    <div className="font-semibold text-gray-900 text-sm lg:text-base">
                      Live Activity
                    </div>
                    <div className="text-xs lg:text-sm text-gray-500">
                      Right Now
                    </div>
                  </div>
                  <div className="space-y-2 lg:space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 lg:gap-3">
                        <div className="w-6 h-6 lg:w-8 lg:h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                          <span className="text-blue-600 text-xs lg:text-sm">
                            👨‍⚕️
                          </span>
                        </div>
                        <div className="text-xs lg:text-sm">
                          Dr. consultations
                        </div>
                      </div>
                      <div className="font-bold text-blue-600 text-sm lg:text-base">
                        142
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 lg:gap-3">
                        <div className="w-6 h-6 lg:w-8 lg:h-8 bg-red-100 rounded-lg flex items-center justify-center">
                          <span className="text-red-600 text-xs lg:text-sm">
                            🩸
                          </span>
                        </div>
                        <div className="text-xs lg:text-sm">Blood requests</div>
                      </div>
                      <div className="font-bold text-red-600 text-sm lg:text-base">
                        28
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dashboard Footer */}
              <div className="bg-gray-50 p-3 lg:p-5 border-t border-gray-200">
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-2.5 lg:py-3 rounded-lg lg:rounded-xl font-semibold transition-all duration-300 text-sm lg:text-base"
                >
                  <FaPlay className="mr-2 text-sm" />
                  Watch How It Works
                </a>
              </div>
            </div>

            {/* Floating Download App Badge - Mobile Bottom */}
            <div className="lg:absolute -bottom-4 -left-4 z-20 mt-4 lg:mt-0">
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white px-4 py-3 lg:px-5 lg:py-3 rounded-xl shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="text-xl lg:text-2xl">📱</div>
                  <div>
                    <div className="font-bold text-sm lg:text-base">
                      Get the App
                    </div>
                    <div className="text-xs text-gray-300">
                      Better experience
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Emergency Call Button (Fixed at bottom on mobile) */}
        <div className="fixed bottom-6 right-6 lg:hidden z-50">
          <a
            href="tel:999"
            className="w-14 h-14 bg-red-600 text-white rounded-full flex items-center justify-center shadow-2xl animate-pulse"
          >
            <FaPhoneAlt className="text-xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
