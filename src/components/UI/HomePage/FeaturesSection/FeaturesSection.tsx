import {
  FaCalendarCheck,
  FaAmbulance,
  FaFileMedical,
  FaShieldAlt,
  FaPills,
  FaVideo,
  FaStethoscope,
  FaHeart,
  FaUserMd,
  FaClock,
  FaPhoneAlt,
  FaStar,
  FaCheckCircle,
  FaRocket,
  FaHandHoldingHeart,
  FaChartLine,
  FaCapsules,
  FaHeartbeat,
  FaUserFriends,
  FaAward,
  FaMagic,
  FaFire,
  FaGem,
  FaCrown,
} from "react-icons/fa";
import { FaCirclePlay, FaShieldHeart } from "react-icons/fa6";

const FeaturesSection = () => {
  const features = [
    {
      icon: <FaCalendarCheck className="h-12 w-12" />,
      title: "Online Appointment Booking",
      description:
        "Book appointments with top specialists instantly, 24/7 from any device.",
      color: "bg-gradient-to-br from-blue-500 to-cyan-500",
      glowColor: "from-blue-500/30",
      gradient: "from-blue-500 to-cyan-500",
      stats: "1000+ Daily Bookings",
      badge: <FaRocket className="h-4 w-4" />,
    },
    {
      icon: <FaAmbulance className="h-12 w-12" />,
      title: "Emergency Services",
      description:
        "24/7 emergency response with GPS-tracked ambulance services.",
      color: "bg-gradient-to-br from-red-500 to-pink-600",
      glowColor: "from-red-500/30",
      gradient: "from-red-500 to-pink-600",
      stats: "15 Min Avg Response",
      badge: <FaFire className="h-4 w-4" />,
    },
    {
      icon: <FaFileMedical className="h-12 w-12" />,
      title: "Digital Lab Reports",
      description:
        "Access your lab reports online within hours, securely and privately.",
      color: "bg-gradient-to-br from-emerald-500 to-green-500",
      glowColor: "from-emerald-500/30",
      gradient: "from-emerald-500 to-green-500",
      stats: "Instant Access",
      badge: <FaChartLine className="h-4 w-4" />,
    },
    {
      icon: <FaShieldAlt className="h-12 w-12" />,
      title: "Insurance Support",
      description:
        "Cashless treatments with 100+ insurance partners supported.",
      color: "bg-gradient-to-br from-purple-500 to-violet-600",
      glowColor: "from-purple-500/30",
      gradient: "from-purple-500 to-violet-600",
      stats: "100+ Partners",
      badge: <FaGem className="h-4 w-4" />,
    },
    {
      icon: <FaPills className="h-12 w-12" />,
      title: "Medicine Delivery",
      description:
        "Get prescribed medicines delivered to your doorstep within 2 hours.",
      color: "bg-gradient-to-br from-amber-500 to-orange-500",
      glowColor: "from-amber-500/30",
      gradient: "from-amber-500 to-orange-500",
      stats: "2-Hour Delivery",
      badge: <FaCapsules className="h-4 w-4" />,
    },
    {
      icon: <FaVideo className="h-12 w-12" />,
      title: "Telemedicine",
      description:
        "Virtual consultations with doctors from the comfort of your home.",
      color: "bg-gradient-to-br from-indigo-500 to-blue-500",
      glowColor: "from-indigo-500/30",
      gradient: "from-indigo-500 to-blue-500",
      stats: "500+ Virtual Visits",
      badge: <FaCirclePlay className="h-4 w-4" />,
    },
  ];

  const stats = [
    {
      value: "50K+",
      label: "Happy Patients",
      icon: <FaHeartbeat />,
      color: "text-red-400",
    },
    {
      value: "500+",
      label: "Expert Doctors",
      icon: <FaUserMd />,
      color: "text-blue-400",
    },
    {
      value: "24/7",
      label: "Emergency Service",
      icon: <FaClock />,
      color: "text-amber-400",
    },
    {
      value: "98%",
      label: "Satisfaction Rate",
      icon: <FaAward />,
      color: "text-purple-400",
    },
  ];

  return (
    <section className="relative py-20 px-4 md:py-28 bg-linear-to-b from-gray-200  to-blue-50/30 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-60 h-60 bg-linear-to-r from-emerald-500/10 to-green-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header - Enhanced */}
        <div className="text-center mb-16 relative">
          {/* Floating Elements */}
          <div className="absolute -top-10 left-10 animate-float-slow">
            <div className="w-10 h-10 rounded-full bg-linear-to-r from-blue-500 to-cyan-500 opacity-20"></div>
          </div>
          <div className="absolute -bottom-5 right-10 animate-float">
            <div className="w-8 h-8 rounded-full bg-linear-to-r from-purple-500 to-pink-500 opacity-20"></div>
          </div>

          {/* Main Badge */}
          <div className="inline-flex items-center gap-3 bg-linear-to-r from-blue-500/10 via-cyan-500/10 to-blue-500/10 border border-white/50 backdrop-blur-sm px-6 py-3 rounded-full mb-8 group hover:scale-105 transition-transform duration-300">
            <div className="w-7 h-7 rounded-full bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center animate-pulse-slow">
              <FaCrown className="text-white text-sm" />
            </div>
            <span className="text-transparent bg-linear-to-r from-blue-600 via-cyan-600 to-blue-600 bg-clip-text text-sm font-bold tracking-wider">
              PREMIUM HEALTHCARE EXPERIENCE
            </span>
            <div className="w-3 h-3 bg-linear-to-r from-emerald-500 to-green-500 rounded-full animate-ping"></div>
          </div>

          {/* Main Heading */}
          <div className="relative mb-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-6">
              <span className="block text-gray-800">
                Revolutionizing
                <span className="inline-block mx-4 text-gradient-shimmer bg-linear-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                  Healthcare
                </span>
                in
              </span>
              <span className="text-gradient-animated bg-linear-to-r from-blue-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                Bangladesh
              </span>
            </h1>

            {/* Animated Underline */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-48 h-2 bg-linear-to-r from-blue-500 via-cyan-500 to-blue-500 rounded-full">
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white to-transparent animate-shimmer"></div>
                </div>
                <div className="absolute -top-2 left-1/4 w-4 h-4 bg-linear-to-r from-blue-500 to-cyan-500 rounded-full animate-bounce"></div>
              </div>
            </div>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Experience{" "}
              <span className="font-bold text-blue-600">next-generation</span>{" "}
              healthcare with our{" "}
              <span className="font-bold bg-linear-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                AI-powered digital ecosystem
              </span>
              <br className="hidden md:block" />
              designed for{" "}
              <span className="font-bold text-purple-600">
                modern Bangladesh
              </span>
            </p>
          </div>

          {/* Mini Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-4 py-2 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-100"
              >
                <div
                  className={`p-2 rounded-lg bg-linear-to-br from-white to-gray-50 ${stat.color}`}
                >
                  {stat.icon}
                </div>
                <div className="text-left">
                  <div className="text-xl font-bold text-gray-800">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid - Enhanced */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Glow Effect */}
              <div
                className={`absolute inset-0 bg-linear-to-br ${feature.glowColor} rounded-3xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
              ></div>

              {/* Main Card */}
              <div className="relative bg-linear-to-br  from-white via-white to-gray-50/50 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-2xl shadow-gray-200/30 hover:shadow-2xl hover:shadow-blue-200/50 transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 h-full flex flex-col">
                {/* Icon with Floating Effect */}
                <div className="relative mb-8">
                  <div className="absolute -inset-4 bg-linear-to-br from-white to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div
                    className={`relative w-24 h-24 rounded-2xl ${feature.color} flex items-center justify-center shadow-2xl shadow-current/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                  >
                    <div className="absolute inset-0 bg-linear-to-br from-white/30 to-transparent rounded-2xl"></div>
                    <div className="text-white">{feature.icon}</div>

                    {/* Badge */}
                    <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-linear-to-br from-white to-gray-100 border-2 border-white flex items-center justify-center shadow-lg">
                      <div className="text-gray-700">{feature.badge}</div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-blue-600 group-hover:to-cyan-600 group-hover:bg-clip-text transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Stats Chip */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-gray-50 to-white rounded-full border border-gray-100 mb-6">
                    <FaStar className="h-4 w-4 text-amber-500" />
                    <span className="text-sm font-semibold text-gray-700">
                      {feature.stats}
                    </span>
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href="#"
                  className="inline-flex items-center justify-between group/btn"
                >
                  <span className="text-transparent bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text font-semibold text-lg group-hover/btn:translate-x-2 transition-transform duration-300">
                    Discover More
                  </span>
                  <div className="w-10 h-10 rounded-full bg-linear-to-r from-blue-600 to-cyan-600 flex items-center justify-center text-white group-hover/btn:scale-110 transition-transform duration-300">
                    <svg
                      className="w-5 h-5"
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
                  </div>
                </a>

                {/* Corner Accent */}
                <div
                  className={`absolute top-0 right-0 w-20 h-20 bg-linear-to-br ${feature.gradient} opacity-5 rounded-bl-3xl rounded-tr-3xl`}
                ></div>
              </div>

              {/* Floating Particles */}
              <div className="absolute -bottom-4 -left-4 w-4 h-4 bg-linear-to-r from-blue-400 to-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-float-slow"></div>
              <div className="absolute -top-4 -right-4 w-3 h-3 bg-linear-to-r from-purple-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-float"></div>
            </div>
          ))}
        </div>

        {/* Enhanced Stats Banner */}
        <div className="relative mb-16">
          {/* Glow Background */}
          <div className="absolute inset-0 bg-linear-to-r from-blue-600/20 via-cyan-600/20 to-blue-600/20 rounded-3xl blur-xl"></div>

          <div className="relative bg-linear-to-r from-blue-600 via-cyan-600 to-blue-700 rounded-3xl p-10 md:p-14 text-white overflow-hidden">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-grid-white/10"></div>
            </div>

            {/* Floating Icons */}
            <FaHeart className="absolute top-10 left-10 text-white/10 h-20 w-20 animate-float-slow" />
            <FaStethoscope className="absolute bottom-10 right-10 text-white/10 h-24 w-24 animate-float" />

            <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="relative inline-block mb-4">
                    <div className="absolute inset-0 bg-linear-to-r from-white/20 to-transparent rounded-full blur-md group-hover:blur-lg transition-all duration-500"></div>
                    <div className="relative w-20 h-20 rounded-full bg-linear-to-br from-white/10 to-white/5 border border-white/20 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-500">
                      <div className={stat.color}>{stat.icon}</div>
                    </div>
                  </div>
                  <div className="text-5xl font-black mb-2 text-white group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-white group-hover:to-cyan-200 group-hover:bg-clip-text transition-all duration-300">
                    {stat.value}
                  </div>
                  <div className="text-blue-100 font-medium tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center relative">
          {/* Background Glow */}
          <div className="absolute -inset-8 bg-linear-to-r from-blue-500/10 via-cyan-500/10 to-blue-500/10 rounded-3xl blur-3xl opacity-50"></div>

          <div className="relative">
            <h3 className="text-3xl font-bold text-gray-800 mb-8">
              Ready to Experience{" "}
              <span className="text-gradient-shimmer">Premium Healthcare?</span>
            </h3>

            <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-8">
              <button className="group relative px-12 py-5 bg-linear-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-2xl text-white font-bold text-xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-105 transition-all duration-500">
                {/* Shimmer Effect */}
                <div className="absolute inset-0 translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent group-hover:-translate-x-full transition-transform duration-1000"></div>

                <div className="relative flex items-center justify-center gap-4">
                  <FaMagic className="h-6 w-6" />
                  <span>Start Your Journey</span>
                  <FaHeart className="h-6 w-6" />
                </div>

                {/* Corner Accents */}
                <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-white/30 rounded-tl-2xl"></div>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-white/30 rounded-br-2xl"></div>
              </button>

              <button className="group px-10 py-5 bg-white/80 backdrop-blur-sm rounded-2xl border-2 border-blue-200 text-blue-600 font-bold text-xl hover:bg-white hover:border-cyan-300 hover:shadow-2xl hover:scale-105 transition-all duration-500">
                <div className="flex items-center justify-center gap-3">
                  <FaPhoneAlt className="h-6 w-6 group-hover:animate-pulse" />
                  <div>
                    <div className="text-sm text-gray-500">
                      Emergency Hotline
                    </div>
                    <div className="text-2xl font-black">1066</div>
                  </div>
                  <FaHandHoldingHeart className="h-6 w-6" />
                </div>
              </button>
            </div>

            <p className="text-gray-500 text-lg">
              Join <span className="font-bold text-blue-600">100,000+</span>{" "}
              satisfied patients across Bangladesh
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg">
                <FaCheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm font-semibold">ISO Certified</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg">
                <FaShieldHeart className="h-5 w-5 text-blue-500" />
                <span className="text-sm font-semibold">100% Secure</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg">
                <FaUserFriends className="h-5 w-5 text-purple-500" />
                <span className="text-sm font-semibold">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Floating Elements */}
      <div className="absolute top-1/4 left-5 animate-float">
        <div className="w-4 h-4 rounded-full bg-linear-to-r from-blue-400 to-cyan-400"></div>
      </div>
      <div className="absolute top-1/2 right-8 animate-float-slow delay-500">
        <div className="w-6 h-6 rounded-full bg-linear-to-r from-purple-400 to-pink-400"></div>
      </div>
      <div className="absolute bottom-1/4 left-10 animate-float delay-1000">
        <div className="w-3 h-3 rounded-full bg-linear-to-r from-emerald-400 to-green-400"></div>
      </div>
    </section>
  );
};

export default FeaturesSection;
