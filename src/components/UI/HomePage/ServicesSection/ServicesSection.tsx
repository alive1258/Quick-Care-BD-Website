import {
  FaVideo,
  FaCalendarAlt,
  FaFilePrescription,
  FaClipboardCheck,
  FaShieldAlt,
  FaChartLine,
  FaMobileAlt,
  FaUserCheck,
  FaUserMd,
} from "react-icons/fa";
import {
  MdHealthAndSafety,
  MdLocalHospital,
  MdBloodtype,
} from "react-icons/md";
import {
  TbHeartPlus,
  TbReportMedical,
  TbClock24,
  TbMedicineSyrup,
} from "react-icons/tb";

const ServicesSection = () => {
  const services = [
    {
      icon: <FaVideo className="text-3xl text-blue-600" />,
      title: "Video Consultation",
      description:
        "Consult with doctors via HD video call from anywhere in Bangladesh",
      features: ["HD Quality", "Screen Sharing", "Record Session"],
      color: "blue",
      count: "50,000+",
    },
    {
      icon: <FaCalendarAlt className="text-3xl text-green-600" />,
      title: "Appointment Booking",
      description:
        "Book appointments with verified doctors & hospitals instantly",
      features: ["Real-time Slots", "Reminders", "Reschedule"],
      color: "green",
      count: "200+ Hospitals",
    },
    {
      icon: <MdHealthAndSafety className="text-3xl text-purple-600" />,
      title: "Health Records",
      description: "Digital health records accessible anytime, anywhere",
      features: ["Lifetime Storage", "Share with Doctors", "Analytics"],
      color: "purple",
      count: "1M+ Records",
    },
    {
      icon: <TbHeartPlus className="text-3xl text-red-600" />,
      title: "Emergency Blood",
      description: "Connect with blood donors in your area during emergencies",
      features: ["Verified Donors", "Blood Group Filter", "Live Tracking"],
      color: "red",
      count: "10,000+ Lives",
    },
    {
      icon: <FaFilePrescription className="text-3xl text-cyan-600" />,
      title: "e-Prescription",
      description: "Digital prescriptions sent directly to your pharmacy",
      features: ["Digital Signature", "Medicine Info", "Refill Reminders"],
      color: "cyan",
      count: "500+ Pharmacies",
    },
    {
      icon: <FaClipboardCheck className="text-3xl text-orange-600" />,
      title: "Health Checkup",
      description: "Comprehensive health packages at affordable prices",
      features: ["Home Service", "Lab Reports", "Doctor Review"],
      color: "orange",
      count: "150+ Tests",
    },
  ];

  const stats = [
    { number: "5K+", label: "Verified Doctors", icon: "👨‍⚕️" },
    { number: "50K+", label: "Blood Donors", icon: "🩸" },
    { number: "200+", label: "Partner Hospitals", icon: "🏥" },
    { number: "64", label: "Districts Covered", icon: "📍" },
    { number: "1M+", label: "Patients Served", icon: "❤️" },
    { number: "24/7", label: "Emergency Support", icon: "🚨" },
  ];

  return (
    <section className="py-16 lg:py-24 bg-linear-to-b from-white to-blue-50">
      <div className="container ">
        {/* Section Header */}
        <div className="text-center mb-10 ">
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-500/10 to-cyan-500/10 border border-blue-200/50 px-5 py-3 rounded-full text-sm font-semibold mb-6 lg:mb-8 relative overflow-hidden group">
            {/* Animated background effect */}
            <div className="absolute inset-0 bg-linear-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

            <div className="relative flex items-center gap-3">
              <div className="w-7 h-7 bg-linear-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center animate-pulse">
                <FaShieldAlt className="text-white text-xs" />
              </div>
              <span className="bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent font-bold">
                Trusted Healthcare Services
              </span>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
            </div>
          </div>

          {/* Main Heading with Gradient Effect */}
          <div className="relative mb-8 lg:mb-12">
            {/* Background Glow Effect */}
            {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 lg:w-[500px] lg:h-[500px] bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-blue-500/10 rounded-full blur-3xl opacity-50"></div> */}

            <h1 className="relative text-3xl md:text-4xl lg:text-6xl  font-bold mb-4 lg:mb-6">
              <span className="text-gray-900 block">Comprehensive</span>
              <span className="relative inline-block">
                {/* Text Outline Effect */}
                {/* <span className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></span> */}

                {/* Main Gradient Text */}
                <span className="relative text-gradient-animated bg-clip-text text-transparent bg-linear-to-r from-blue-500 via-cyan-500 to-blue-500 bg-size-[200%_100%] animate-gradient-x">
                  Healthcare Solutions
                </span>

                {/* Decorative Elements */}
                <span className="absolute -right-4 -top-2 text-xl lg:text-2xl">
                  ✨
                </span>
                {/* <span className="absolute -left-4 -bottom-2 text-xl lg:text-2xl">
                  ⚕️
                </span> */}
              </span>
            </h1>

            {/* Subtitle with animated underline */}
            <div className="relative inline-block max-w-3xl mx-auto">
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed relative z-10">
                Access a complete ecosystem of healthcare services designed for
                <span className="font-semibold text-blue-600 mx-1">
                  every medical need
                </span>
                across all
                <span className="font-bold bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mx-1">
                  64 districts
                </span>
                of Bangladesh
              </p>

              {/* Animated Underline */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-linear-to-r from-blue-500 to-cyan-500 rounded-full">
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white to-transparent animate-shimmer"></div>
              </div>
            </div>
          </div>

          {/* Decorative Icons */}
          <div className="flex justify-center items-center gap-6 lg:gap-10 opacity-40 mt-6">
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-blue-100 flex items-center justify-center animate-bounce">
              <FaUserMd className="text-blue-500" />
            </div>
            <div
              className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-green-100 flex items-center justify-center animate-bounce"
              style={{ animationDelay: "0.2s" }}
            >
              <MdLocalHospital className="text-green-500" />
            </div>
            <div
              className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-red-100 flex items-center justify-center animate-bounce"
              style={{ animationDelay: "0.4s" }}
            >
              <MdBloodtype className="text-red-500" />
            </div>
            <div
              className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-purple-100 flex items-center justify-center animate-bounce"
              style={{ animationDelay: "0.6s" }}
            >
              <TbMedicineSyrup className="text-purple-500" />
            </div>
          </div>
        </div>
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 lg:p-8 border border-gray-200 
              hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-100 
              transition-all duration-500 hover:-translate-y-2"
            >
              {/* Icon & Count */}
              <div className="flex items-start justify-between mb-6">
                <div
                  className={`p-4 rounded-2xl bg-${service.color}-50 group-hover:scale-110 transition-transform duration-300`}
                >
                  {service.icon}
                </div>
                <div className="text-right">
                  <div
                    className={`text-2xl font-bold text-${service.color}-600`}
                  >
                    {service.count}
                  </div>
                  <div className="text-sm text-gray-500">Active</div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-2 mb-8">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div
                      className={`w-1.5 h-1.5 rounded-full bg-${service.color}-500`}
                    ></div>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <a
                href="#"
                className={`inline-flex items-center gap-2 text-${service.color}-600 hover:text-${service.color}-700 font-semibold text-sm`}
              >
                <span>Learn More</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-linear-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 lg:p-12 mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-4xl font-bold text-white mb-4">
              Making Healthcare Accessible
            </h3>
            <p className="text-blue-100 text-lg">
              Real-time impact across Bangladesh
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div
                  className="inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 bg-white/20 
                rounded-2xl mb-4 group-hover:bg-white/30 transition-colors duration-300"
                >
                  <span className="text-2xl lg:text-3xl">{stat.icon}</span>
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-sm lg:text-base text-blue-100">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="relative overflow-hidden rounded-3xl ">
          {/* Background Decorative Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-50 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-50 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-sky-50 rounded-full opacity-10 blur-3xl"></div>
          </div>

          {/* <div className="relative bg-white rounded-3xl p-8 lg:p-12 border border-gray-200 shadow-xl"> */}
          <div className="relative bg-linear-to-br from-white via-blue-50/30 to-cyan-50/30 rounded-3xl p-8 lg:p-16 border border-blue-200/50 shadow-2xl">
            {/* Header with Animated Badge */}
            <div className="text-center mb-16 lg:mb-20">
              <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-500/10 to-cyan-500/10 border border-blue-200 px-5 py-3 rounded-full text-sm font-semibold mb-6 lg:mb-8 relative overflow-hidden group">
                {/* Animated background effect */}
                <div className="absolute inset-0 bg-linear-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                <div className="relative flex items-center gap-3">
                  <div className="w-7 h-7 bg-linear-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center animate-pulse">
                    <FaChartLine className="text-white text-xs" />
                  </div>
                  <span className="bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent font-bold">
                    Simple & Easy Process
                  </span>
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping"></div>
                    <div
                      className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-ping"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                </div>
              </div>

              <h3 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                Get Started in
                <span className="relative block mt-2 lg:mt-4">
                  {/* Text Glow Effect */}
                  {/* <span className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl blur opacity-20"></span> */}
                  {/* Main Text */}
                  <span className="relative text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-cyan-600 to-blue-600 bg-size-[200%_100%] animate-gradient-x">
                    4 Simple Steps
                  </span>
                </span>
              </h3>

              <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
                Join thousands who&apos;ve transformed their healthcare
                experience
              </p>
            </div>

            {/* Steps with Connection Lines */}
            <div className="relative mb-16">
              {/* Connection Lines (Desktop only) */}
              <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-linear-to-r from-blue-200 via-cyan-200 to-blue-200">
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white to-transparent animate-shimmer"></div>
              </div>

              {/* Steps Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
                {[
                  {
                    step: "01",
                    title: "Sign Up & Profile",
                    description:
                      "Create your account in 30 seconds with secure verification",
                    icon: <FaUserCheck className="text-2xl" />,
                    color: "blue",
                    gradient: "from-blue-500 to-cyan-500",
                  },
                  {
                    step: "02",
                    title: "Find Services",
                    description:
                      "Search doctors, hospitals or blood donors near you",
                    icon: <FaMobileAlt className="text-2xl" />,
                    color: "cyan",
                    gradient: "from-cyan-500 to-sky-500",
                  },
                  {
                    step: "03",
                    title: "Book Appointment",
                    description:
                      "Schedule video call or hospital visit instantly",
                    icon: <TbClock24 className="text-2xl" />,
                    color: "sky",
                    gradient: "from-sky-500 to-blue-400",
                  },
                  {
                    step: "04",
                    title: "Get Treatment",
                    description:
                      "Receive care with digital prescriptions & follow-ups",
                    icon: <TbReportMedical className="text-2xl" />,
                    color: "indigo",
                    gradient: "from-blue-400 to-indigo-400",
                  },
                ].map((item, index) => (
                  <div key={index} className="relative group">
                    {/* Step Number Badge */}
                    <div className="absolute -top-3 -left-3 z-20">
                      <div
                        className={`relative w-14 h-14 rounded-xl bg-linear-to-br ${item.gradient} shadow-lg flex items-center justify-center`}
                      >
                        <span className="text-white font-bold text-lg">
                          {item.step}
                        </span>
                        {/* Corner Decoration */}
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full"></div>
                        <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-white rounded-full"></div>
                      </div>
                    </div>

                    {/* Step Card */}
                    <div
                      className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-blue-100 shadow-lg 
              group-hover:shadow-2xl group-hover:shadow-blue-100/50 group-hover:border-blue-200 
              transition-all duration-500 group-hover:-translate-y-2"
                    >
                      {/* Icon Container */}
                      <div
                        className={`mb-6 p-4 rounded-xl bg-linear-to-br ${item.gradient} shadow-lg w-fit group-hover:scale-110 transition-transform duration-300`}
                      >
                        <div className="text-white">{item.icon}</div>
                      </div>

                      {/* Content */}
                      <h4 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                        {item.title}
                      </h4>

                      <p className="text-gray-600 mb-6">{item.description}</p>

                      {/* Progress Indicator (for mobile) */}
                      <div className="lg:hidden mb-4">
                        <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-linear-to-r ${item.gradient} w-3/4`}
                          ></div>
                        </div>
                      </div>

                      {/* Action Button */}
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm group/btn"
                      >
                        <span>Learn More</span>
                        <svg
                          className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </a>

                      {/* Hover Effect Glow */}
                      <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-500 -z-10"></div>
                    </div>

                    {/* Desktop Connection Dots */}
                    {index < 3 && (
                      <div className="hidden lg:block absolute -right-4 top-12 z-10">
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                          <div
                            className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
                            style={{ animationDelay: "0.2s" }}
                          ></div>
                          <div
                            className="w-2 h-2 bg-sky-400 rounded-full animate-pulse"
                            style={{ animationDelay: "0.4s" }}
                          ></div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced CTA Section */}
            <div className="text-center relative">
              {/* Floating Elements */}
              <div className="absolute -top-6 left-10 animate-bounce">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-2xl">👨‍⚕️</span>
                </div>
              </div>
              <div
                className="absolute -top-6 right-10 animate-bounce"
                style={{ animationDelay: "0.3s" }}
              >
                <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center">
                  <span className="text-2xl">🏥</span>
                </div>
              </div>

              <div className="relative inline-block">
                {/* Glow Effect Behind Button */}
                {/* <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-xl opacity-20 animate-pulse"></div> */}

                <a
                  href="/signup"
                  className="relative inline-flex items-center gap-3 bg-linear-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 
          text-white px-10 py-5 rounded-xl lg:rounded-2xl text-lg lg:text-xl font-bold 
          shadow-2xl shadow-blue-200 hover:shadow-3xl hover:shadow-blue-300 
          transition-all duration-300 hover:scale-105 group"
                >
                  <span>Start Your Health Journey Today</span>
                  <svg
                    className="w-6 h-6 group-hover:translate-x-2 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                  {/* Button Decoration */}
                  {/* <div className="absolute -top-2 -right-2 w-4 h-4 bg-white rounded-full"></div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-white rounded-full"></div> */}
                </a>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center items-center gap-6 mt-8">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-700 font-medium">
                    No registration fee
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
                  <div
                    className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <span className="text-sm text-gray-700 font-medium">
                    100% secure
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
                  <div
                    className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                  <span className="text-sm text-gray-700 font-medium">
                    Verified doctors
                  </span>
                </div>
              </div>

              {/* Stats Preview */}
              <div className="mt-12 pt-8 border-t border-blue-100">
                <p className="text-gray-500 text-sm mb-4">
                  Join our growing community
                </p>
                <div className="flex justify-center items-center gap-8 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">50K+</div>
                    <div className="text-xs text-gray-500">Active Users</div>
                  </div>
                  <div className="w-1 h-1 bg-blue-300 rounded-full"></div>
                  <div>
                    <div className="text-2xl font-bold text-cyan-600">5K+</div>
                    <div className="text-xs text-gray-500">Doctors</div>
                  </div>
                  <div className="w-1 h-1 bg-cyan-300 rounded-full"></div>
                  <div>
                    <div className="text-2xl font-bold text-sky-600">99%</div>
                    <div className="text-xs text-gray-500">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
