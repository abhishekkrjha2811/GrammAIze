
const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About GrammAIze
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your intelligent writing companion powered by advanced AI technology
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            GrammAIze is designed to revolutionize the way you write and communicate. We believe that 
            everyone deserves access to professional-grade writing assistance, regardless of their 
            background or experience level. Our AI-powered platform ensures that your ideas are 
            expressed clearly, correctly, and compellingly.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <span className="text-2xl">✏️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Grammar Perfection</h3>
            </div>
            <p className="text-gray-600">
              Advanced AI algorithms detect and correct grammatical errors, spelling mistakes, 
              and punctuation issues with unprecedented accuracy.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <span className="text-2xl">📝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Smart Summarization</h3>
            </div>
            <p className="text-gray-600">
              Transform lengthy texts into concise, meaningful summaries while preserving 
              the core message and adapting to your desired tone.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Tone Adaptation</h3>
            </div>
            <p className="text-gray-600">
              Whether you need professional, casual, academic, or creative content, 
              our AI adapts to match your specific communication style.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="bg-orange-100 p-3 rounded-full mr-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Lightning Fast</h3>
            </div>
            <p className="text-gray-600">
              Get instant results with our optimized AI processing, allowing you to 
              maintain your writing flow without interruptions.
            </p>
          </div>
        </div>

        {/* Technology Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-md p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Powered by Advanced AI</h2>
          <p className="text-blue-100 leading-relaxed mb-4">
            GrammAIze leverages cutting-edge natural language processing and machine learning 
            technologies to understand context, intent, and nuance in your writing. Our AI 
            models are continuously trained on diverse datasets to ensure accuracy across 
            various writing styles and domains.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold">99.9%</div>
              <div className="text-blue-200">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold">50+</div>
              <div className="text-blue-200">Languages Supported</div>
            </div>
            <div>
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-blue-200">Availability</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;