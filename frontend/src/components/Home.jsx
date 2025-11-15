
const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Welcome to GrammAIze
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Your intelligent writing companion that ensures impeccable grammar correction 
            and provides intelligent summarization tailored to your desired tone.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-4">✏️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Grammar Correction</h3>
              <p className="text-gray-600">Advanced AI-powered grammar checking to perfect your writing</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-4">📝</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Summarization</h3>
              <p className="text-gray-600">Intelligent text summarization adapted to your preferred tone</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Tone Adaptation</h3>
              <p className="text-gray-600">Professional, casual, academic, or creative - we adapt to your style</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
