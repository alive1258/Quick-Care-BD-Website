import {
  FaAmbulance,
  FaPhoneAlt,
  FaHospital,
  FaUserMd,
  FaClock,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaHeartbeat,
  FaFirstAid,
  FaCrosshairs,
  FaCheckCircle,
  FaHeadset,
  FaBell,
  FaCar,
  FaUserInjured,
  FaHeart,
  FaStethoscope,
  FaExclamationTriangle,
  FaStar,
  FaRadiation,
  FaLifeRing,
  FaUsers,
  FaHospitalSymbol,
  FaPhoneSquareAlt,
  FaLocationArrow,
  FaGooglePlusSquare,
  FaInfoCircle,
} from "react-icons/fa";
import { FaScrewdriverWrench } from "react-icons/fa6";

const EmergencyServices = () => {
  const services = [
    {
      icon: <FaAmbulance className="h-12 w-12" />,
      title: "Ambulance Service",
      description: "Advanced life support ambulances with trained paramedics",
      time: "5-10 mins",
      color: "from-blue-500 to-cyan-500",
      badge: "24/7",
      features: ["GPS Tracking", "ICU Facility", "First Aid"],
      glow: "from-blue-500/20",
    },
    {
      icon: <FaPhoneAlt className="h-12 w-12" />,
      title: "Emergency Hotline",
      description:
        "Dedicated emergency response team available round the clock",
      number: "1066",
      color: "from-purple-500 to-violet-600",
      badge: "Instant",
      features: ["Multi-language", "Medical Guidance", "Rapid Dispatch"],
      glow: "from-purple-500/20",
    },
    {
      icon: <FaHospital className="h-12 w-12" />,
      title: "Nearest Hospital",
      description: "Find the nearest emergency-ready hospital instantly",
      time: "Real-time",
      color: "from-cyan-500 to-blue-400",
      badge: "GPS",
      features: ["Live Bed Status", "Speciality Info", "Route Guide"],
      glow: "from-cyan-500/20",
    },
    {
      icon: <FaUserMd className="h-12 w-12" />,
      title: "Emergency Doctors",
      description: "Connect with emergency specialists immediately",
      time: "2 mins",
      color: "from-blue-600 to-indigo-500",
      badge: "On-call",
      features: ["Tele-consultation", "Prescription", "Follow-up"],
      glow: "from-blue-600/20",
    },
  ];

  const emergencyNumbers = [
    {
      name: "Cardiac Emergency",
      number: "1066",
      icon: <FaHeartbeat />,
      color: "bg-gradient-to-r from-red-500 to-pink-500",
    },
    {
      name: "Accident & Trauma",
      number: "1067",
      icon: <FaUserInjured />,
      color: "bg-gradient-to-r from-orange-500 to-amber-500",
    },
    {
      name: "Pediatric Emergency",
      number: "1068",
      icon: <FaHeart />,
      color: "bg-gradient-to-r from-green-500 to-emerald-500",
    },
    {
      name: "COVID Emergency",
      number: "1069",
      icon: <FaRadiation />,
      color: "bg-gradient-to-r from-purple-500 to-violet-500",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Call Emergency",
      description: "Dial our 24/7 emergency hotline",
      icon: <FaPhoneSquareAlt />,
      color: "bg-gradient-to-r from-blue-500 to-cyan-500",
    },
    {
      number: "02",
      title: "Share Location",
      description: "Provide your exact location via GPS",
      icon: <FaLocationArrow />,
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
    },
    {
      number: "03",
      title: "Get Assistance",
      description: "Receive immediate medical guidance",
      icon: <FaHeadset />,
      color: "bg-gradient-to-r from-cyan-500 to-blue-400",
    },
    {
      number: "04",
      title: "Ambulance Dispatch",
      description: "Nearest ambulance dispatched instantly",
      icon: <FaAmbulance />,
      color: "bg-gradient-to-r from-indigo-500 to-purple-500",
    },
  ];

  return (
    <section className="relative py-20 px-4 md:py-28 bg-linear-to-b from-blue-50/30 via-white to-cyan-50/20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Animated Grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>

        {/* Floating Icons */}
        <FaScrewdriverWrench className="absolute top-20 left-10 text-blue-400/20 h-16 w-16 animate-pulse-slow" />
        <FaCrosshairs className="absolute bottom-20 right-10 text-purple-400/20 h-20 w-20 animate-float" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-3 bg-linear-to-r from-blue-500/10 via-cyan-500/10 to-blue-500/10 border border-blue-200/50 backdrop-blur-sm px-6 py-3 rounded-2xl mb-8 group hover:scale-105 transition-transform duration-300">
            <div className="w-10 h-10 rounded-full bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
              <FaExclamationTriangle className="text-white text-lg" />
            </div>
            <span className="text-transparent bg-linear-to-r from-blue-600 via-cyan-600 to-blue-600 bg-clip-text text-lg font-bold tracking-wider">
              24/7 EMERGENCY SERVICES
            </span>
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
              <div className="w-2 h-2 bg-cyan-500 rounded-full animate-ping delay-300"></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping delay-600"></div>
            </div>
          </div>

          {/* Main Heading */}
          <div className="relative mb-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              <span className="text-gray-800">Emergency Care</span>
              <span className="block">
                <span className="text-gradient-animated bg-linear-to-r from-blue-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                  When Every Second
                </span>
                <span className="text-gray-800 mx-3">Matters</span>
              </span>
            </h1>

            {/* Emergency Alert Card */}
            <div className="relative inline-block mb-8">
              <div className="relative bg-linear-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-2xl px-8 py-6 shadow-2xl shadow-blue-200/50 overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-linear-to-r from-blue-500/5 via-cyan-500/5 to-blue-500/5 animate-shimmer"></div>

                <div className="relative flex flex-col md:flex-row items-center justify-center gap-8">
                  <div className="text-center">
                    <div className="text-5xl md:text-6xl font-black bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent animate-pulse-slow">
                      1066
                    </div>
                    <div className="text-gray-600 font-semibold">
                      National Emergency
                    </div>
                  </div>

                  <div className="hidden md:block">
                    <div className="w-1 h-20 bg-linear-to-b from-blue-400 to-cyan-400 rounded-full"></div>
                  </div>

                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-black text-blue-600">
                      999
                    </div>
                    <div className="text-gray-600 font-semibold">
                      Police & Fire
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-blue-400/50 rounded-tr-2xl"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-cyan-400/50 rounded-bl-2xl"></div>
            </div>

            {/* Description */}
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Immediate medical assistance with
              <span className="font-bold bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mx-2">
                advanced digital coordination
              </span>
              across Bangladesh
            </p>
          </div>
        </div>

        {/* Emergency Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <div key={index} className="group">
              {/* Card Container with Gradient Border */}
              <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-400 hover:-translate-y-2 h-full overflow-hidden">
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-blue-500/0 via-cyan-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:via-cyan-500/10 group-hover:to-blue-500/10 transition-all duration-500"></div>

                {/* Content */}
                <div className="relative">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    {/* Icon */}
                    <div
                      className={`relative p-3 rounded-lg bg-linear-to-br ${service.color} shadow-md group-hover:scale-110 transition-transform duration-300`}
                    >
                      <div className="text-white text-xl">{service.icon}</div>
                    </div>

                    {/* Badge */}
                    <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-700 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-5 line-clamp-2">
                    {service.description}
                  </p>

                  {/* Stats/Number */}
                  <div className="mb-6">
                    {service.number ? (
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-linear-to-r from-purple-100 to-violet-100 flex items-center justify-center">
                          <FaPhoneAlt className="h-5 w-5 text-purple-600" />
                        </div>
                        <div>
                          <div className="text-xs text-gray-500">Call Now</div>
                          <div className="text-2xl font-black bg-linear-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                            {service.number}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-linear-to-r from-cyan-100 to-blue-100 flex items-center justify-center">
                          <FaClock className="h-5 w-5 text-cyan-600" />
                        </div>
                        <div>
                          <div className="text-xs text-gray-500">
                            Response Time
                          </div>
                          <div className="text-xl font-bold text-gray-800">
                            {service.time}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Quick Actions */}
                  <div className="flex flex-col gap-3">
                    <button className="w-full py-3 bg-linear-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-300 transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                      <span>Emergency Help</span>
                      <svg
                        className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </button>

                    {/* Quick Links */}
                    <div className="flex items-center justify-between text-xs">
                      <a
                        href="#"
                        className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
                      >
                        <FaMapMarkerAlt className="h-3 w-3" />
                        <span>Locate</span>
                      </a>
                      <a
                        href="#"
                        className="text-cyan-600 hover:text-cyan-800 flex items-center gap-1"
                      >
                        <FaHeadset className="h-3 w-3" />
                        <span>Guide</span>
                      </a>
                      <a
                        href="#"
                        className="text-purple-600 hover:text-purple-800 flex items-center gap-1"
                      >
                        <FaInfoCircle className="h-3 w-3" />
                        <span>Info</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Bottom Gradient Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Process Flow */}
        <div className="relative mb-20">
          {/* Process Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              How Our{" "}
              <span className="bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Emergency Response
              </span>{" "}
              Works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From emergency call to ambulance arrival - seamless coordination
              for fastest response
            </p>
          </div>

          {/* Process Steps */}
          <div className="relative">
            {/* Animated Connecting Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-linear-to-r from-blue-500 via-cyan-500 to-purple-500 -translate-y-1/2">
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white to-transparent animate-shimmer"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative group">
                  {/* Step Container */}
                  <div className="relative bg-white rounded-3xl p-8 border-2 border-gray-100 shadow-2xl shadow-gray-200/30 hover:shadow-2xl hover:shadow-blue-200/30 transition-all duration-500 hover:scale-105 overflow-hidden">
                    {/* Animated Background */}
                    <div
                      className={`absolute inset-0 ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    ></div>

                    {/* Step Number */}
                    <div
                      className={`absolute -top-4 -left-4 w-16 h-16 rounded-2xl ${step.color} text-white flex items-center justify-center text-2xl font-black shadow-lg z-10`}
                    >
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="relative w-20 h-20 rounded-2xl bg-linear-to-br from-blue-50 to-cyan-50 border-2 border-blue-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-blue-500 text-2xl">{step.icon}</div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>

                    {/* Animated Progress Dot */}
                    <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 hidden lg:block">
                      <div className="relative">
                        <div
                          className={`w-8 h-8 rounded-full ${step.color} border-4 border-white shadow-lg`}
                        ></div>
                        <div className="absolute -inset-4 border-2 border-blue-300/30 rounded-full animate-ping"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Emergency Contact Panel */}
        <div className="bg-linear-to-r from-blue-600 via-cyan-600 to-blue-700 rounded-3xl p-10 text-white overflow-hidden mb-20 relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-grid-white/10"></div>
            <FaHospitalSymbol className="absolute top-10 right-10 h-32 w-32 text-white/20 animate-pulse-slow" />
          </div>

          <div className="relative">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">
                Emergency <span className="text-cyan-300">Contact Numbers</span>
              </h2>
              <p className="text-blue-100">
                Immediate access to specialized emergency services across
                Bangladesh
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {emergencyNumbers.map((item, index) => (
                <div key={index} className="group">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 overflow-hidden">
                    {/* Animated Background */}
                    <div
                      className={`absolute inset-0 ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    ></div>

                    <div className="relative flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-linear-to-br from-white/20 to-white/5 flex items-center justify-center">
                        <div className="text-white text-2xl">{item.icon}</div>
                      </div>
                      <div className="grow">
                        <h4 className="font-bold text-lg mb-2">{item.name}</h4>
                        <div className="text-3xl font-black text-cyan-300 group-hover:scale-110 transition-transform duration-300">
                          {item.number}
                        </div>
                      </div>
                      <button className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-300 flex items-center justify-center group/call">
                        <FaPhoneAlt className="h-5 w-5 group-hover/call:scale-110 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Live Tracking & Coordination */}
        <div className="bg-linear-to-br from-white to-gray-50 rounded-3xl p-10 border-2 border-gray-100 shadow-2xl shadow-gray-200/30 mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <FaGooglePlusSquare className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    Live{" "}
                    <span className="bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      Emergency Coordination
                    </span>
                  </h2>
                  <p className="text-gray-600">
                    Real-time tracking and digital coordination
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-blue-100 to-cyan-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <FaMapMarkerAlt className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">
                      Share Live Location
                    </h4>
                    <p className="text-gray-600">
                      One-tap GPS location sharing during emergencies
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-purple-100 to-pink-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <FaCar className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Track Ambulance</h4>
                    <p className="text-gray-600">
                      Real-time ETA and route visualization
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-cyan-100 to-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <FaBell className="h-6 w-6 text-cyan-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Alert Hospitals</h4>
                    <p className="text-gray-600">
                      Automatic alerts to prepare emergency teams
                    </p>
                  </div>
                </div>
              </div>

              <button className="mt-10 w-full py-4 bg-linear-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-blue-300 transition-all duration-300 flex items-center justify-center gap-3 group/btn">
                <FaMapMarkerAlt className="h-6 w-6" />
                <span>Activate Emergency Mode</span>
                <svg
                  className="w-5 h-5 transform group-hover/btn:translate-x-2 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>

            {/* Right - Emergency Dashboard Simulation */}
            <div className="relative">
              <div className="bg-linear-to-br from-gray-900 to-gray-800 rounded-2xl p-1 overflow-hidden">
                {/* Dashboard Container */}
                <div className="bg-gray-800 rounded-xl p-6">
                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <h3 className="text-white font-bold">
                        EMERGENCY DASHBOARD
                      </h3>
                    </div>
                    <div className="text-green-400 text-sm font-bold flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      LIVE
                    </div>
                  </div>

                  {/* Map Visualization */}
                  <div className="relative h-72 rounded-lg overflow-hidden bg-linear-to-br from-blue-900/50 to-gray-900/50 mb-6">
                    {/* Map Grid */}
                    <div className="absolute inset-0 bg-grid-white/5"></div>

                    {/* Ambulance */}
                    <div className="absolute top-1/4 left-1/4 animate-move-ambulance">
                      <div className="relative">
                        <div className="w-12 h-6 bg-linear-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                          <FaAmbulance className="h-4 w-4 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>
                      </div>
                    </div>

                    {/* Hospital */}
                    <div className="absolute bottom-1/3 right-1/3">
                      <div className="relative">
                        <div className="w-10 h-10 bg-linear-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                          <FaHospital className="h-6 w-6 text-white" />
                        </div>
                        <div className="absolute -inset-3 border-2 border-green-500/30 rounded-full animate-ping"></div>
                      </div>
                    </div>

                    {/* Patient */}
                    <div className="absolute bottom-1/4 left-1/2">
                      <div className="relative">
                        <div className="w-8 h-8 bg-linear-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                          <FaUsers className="h-4 w-4 text-white" />
                        </div>
                        <div className="absolute -inset-3 border-2 border-cyan-500/30 rounded-full animate-ping"></div>
                      </div>
                    </div>

                    {/* Route Line */}
                    <div className="absolute top-1/4 left-1/4 w-1/2 h-1 bg-linear-to-r from-blue-500 via-cyan-500 to-green-500 rounded-full transform rotate-45 translate-x-12 translate-y-12"></div>
                  </div>

                  {/* Live Status */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-sm text-gray-400">Ambulance</div>
                      <div className="text-lg font-bold text-cyan-400">
                        5 min away
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-400">Distance</div>
                      <div className="text-lg font-bold text-white">2.5 km</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-400">
                        Hospital Ready
                      </div>
                      <div className="text-lg font-bold text-green-400 flex items-center justify-center gap-1">
                        <FaCheckCircle className="h-4 w-4" />
                        Confirmed
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency CTA Section */}
        <div className="text-center">
          <div className="bg-linear-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-3xl p-12 shadow-2xl shadow-blue-200/30 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-grid-blue/10"></div>
            </div>

            {/* Icon */}
            <div className="relative w-24 h-24 mx-auto mb-8">
              <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"></div>
              <div className="relative w-full h-full rounded-full bg-linear-to-r from-blue-600 to-cyan-600 flex items-center justify-center">
                <FaPhoneAlt className="h-12 w-12 text-white" />
              </div>
              <div className="absolute -inset-6 border-2 border-blue-400/30 rounded-full animate-ping"></div>
            </div>

            <h2 className="text-4xl font-black text-gray-900 mb-6 relative">
              <span className="text-gradient-animated bg-linear-to-r from-blue-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Emergency Situation?
              </span>
              <br />
              <span className="text-gray-800">Stay Calm, We&apos;re Here</span>
            </h2>

            <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-8">
              <button className="group relative px-12 py-5 bg-linear-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-2xl text-white font-bold text-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-500">
                {/* Shimmer Effect */}
                <div className="absolute inset-0 translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent group-hover:-translate-x-full transition-transform duration-1000"></div>

                <div className="relative flex items-center justify-center gap-4">
                  <FaPhoneAlt className="h-8 w-8" />
                  <span className="text-3xl">DIAL 1066</span>
                  <FaLifeRing className="h-8 w-8" />
                </div>
              </button>

              <button className="group px-10 py-5 bg-white rounded-2xl border-2 border-blue-300 text-blue-600 font-bold text-xl hover:bg-blue-50 hover:border-blue-400 hover:shadow-2xl hover:scale-105 transition-all duration-500">
                <div className="flex items-center justify-center gap-3">
                  <FaFirstAid className="h-8 w-8" />
                  <div>
                    <div className="text-sm text-gray-500">Emergency Guide</div>
                    <div className="text-2xl font-black">Learn First Aid</div>
                  </div>
                  <FaStethoscope className="h-8 w-8" />
                </div>
              </button>
            </div>

            <p className="text-gray-600 text-lg mb-8">
              Our emergency response team is
              <span className="font-bold bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mx-2">
                always ready to assist you
              </span>
              24/7 across Bangladesh
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg">
                <FaShieldAlt className="h-5 w-5 text-blue-500" />
                <span className="text-sm font-semibold">Govt. Certified</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg">
                <FaStar className="h-5 w-5 text-amber-500" />
                <span className="text-sm font-semibold">5-Star Response</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg">
                <FaUsers className="h-5 w-5 text-purple-500" />
                <span className="text-sm font-semibold">1000+ Teams</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg">
                <FaClock className="h-5 w-5 text-cyan-500" />
                <span className="text-sm font-semibold">
                  Avg. 7-min Response
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Emergency Button */}
      <div className="fixed bottom-8 right-8 z-50 group">
        <button className="relative animate-bounce-emergency">
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-linear-to-r from-blue-600 to-cyan-600 shadow-2xl shadow-blue-500/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <FaPhoneAlt className="h-10 w-10 text-white" />
            </div>
            <div className="absolute -inset-4 border-2 border-blue-400/50 rounded-full animate-ping pointer-events-none"></div>
            <div className="absolute -inset-6 border-2 border-cyan-400/30 rounded-full animate-ping-slow pointer-events-none"></div>
          </div>
          <div className="absolute -top-12 right-0 bg-linear-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
            <div className="font-bold">EMERGENCY</div>
            <div className="text-xs">Tap to call 1066</div>
          </div>
        </button>
      </div>
    </section>
  );
};

export default EmergencyServices;
