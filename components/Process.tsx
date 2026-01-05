export default function Process() {
  const steps = [
    {
      number: 1,
      gradient: "from-green-500 to-emerald-600",
      shadowColor: "shadow-green-500/25",
      title: "Enter Your URL",
      description: "Simply paste your website URL into our analyzer. No sign-up or installation required.",
      showConnector: true,
      connectorGradient: "from-green-500",
    },
    {
      number: 2,
      gradient: "from-emerald-500 to-teal-600",
      shadowColor: "shadow-emerald-500/25",
      title: "We Analyze",
      description: "Our algorithms scan your site's resources, performance, and server data in seconds.",
      showConnector: true,
      connectorGradient: "from-emerald-500",
    },
    {
      number: 3,
      gradient: "from-teal-500 to-cyan-600",
      shadowColor: "shadow-teal-500/25",
      title: "Get Results",
      description: "Receive detailed insights and actionable recommendations to make your site greener.",
      showConnector: false,
      connectorGradient: "",
    },
  ];

  return (
    <section className="py-24 bg-gray-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full mb-6">
            <span className="text-green-400 text-sm font-medium">Simple Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How It{" "}
            <span className="bg-linear-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get your website&apos;s environmental analysis in three simple steps.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              <div className={`w-20 h-20 bg-linear-to-br ${step.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg ${step.shadowColor}`}>
                <span className="text-3xl font-bold text-white">{step.number}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
              {/* Connector Line */}
              {step.showConnector && (
                <div className={`hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-linear-to-r ${step.connectorGradient} to-transparent`}></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
