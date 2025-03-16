import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow flex flex-col items-center justify-center bg-gray-100 px-4 sm:px-6 md:px-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 text-center">
          Welcome to My Website
        </h1>
        <p className="text-gray-600 text-center max-w-2xl text-base sm:text-lg">
          This is a simple Home Page. You can add more content here to introduce yourself or your services.
        </p>
      </main>

      <Footer />
    </div>
  )
}

export default Home
