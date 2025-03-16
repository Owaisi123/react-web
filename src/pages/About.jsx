import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'

function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow bg-gray-100 flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
        <p className="text-gray-700 max-w-3xl text-center">
          Welcome to our website! We are passionate about building amazing web experiences.
          Our team focuses on creating high-quality, responsive, and user-friendly websites for everyone.
          If you want to know more about us or collaborate, feel free to reach out through our contact page!
        </p>
      </main>

      <Footer />
    </div>
  )
}

export default About