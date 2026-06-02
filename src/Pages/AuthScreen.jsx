import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Logo from '../Components/Logo'
import { Mail, Lock, ArrowRight, Sparkles, User, Phone } from 'lucide-react'

function AuthScreen() {

  const authModes = { logIn: 'logIn', SignUp: 'SignUp', ForgotPassword: 'ForgotPassword' }

  const [authMode, setAuthMode] = useState(authModes.logIn)

  const navigate = useNavigate()

  return (
    <div className='auth-screen '>
      <div className="flex-col justify-center items-center text-center gap-4 bg-background min-h-screen py-10 lg:py-20 px-4">
        <Logo />
        {authMode === authModes.logIn && (
          <div className="flex-col justify-center items-center text-center gap-4 bg-primary max-w-lg mx-auto px-4 py-8 md:px-8 md:py-12 rounded-2xl shadow-xl border border-gray-300">
            <h1 className="text-2xl font-bold tracking-tight text-zinc-900 font-display">
              Welcome Back
            </h1>
            <p className="text-sm text-zinc-500">
              Sign in to access your ClikCard wallet.
            </p>
            <form className="flex-col justify-center items-center text-center gap-4">
              <div className="relative mt-4">
                <label className="flex uppercase text-xs font-semibold text-text tracking-wider">Email*</label>
                <div>
                  <Mail className="absolute mt-2 ml-2 text-zinc-400" />
                  <input type="email" id="email" placeholder="Email" required className="w-full px-9 pr-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring focus:black " />
                </div>
              </div>
              <div className="relative mt-4">
                <div className="flex justify-between items-center">
                  <label className="flex uppercase text-xs font-semibold text-text tracking-wider">Password*</label>
                  <button onClick={() => setAuthMode(authModes.ForgotPassword)}>
                    <span className="text-sm text-text hover:underline">Forgot Password?</span>
                  </button>
                </div>
                <div>
                  <Lock className="absolute mt-2 ml-2 text-zinc-400" />
                  <input type="password" id="password" placeholder="Password" required className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring focus:black" />
                </div>
              </div>
              <button type="submit" className="w-full bg-black text-white py-2 rounded-2xl hover:bg-zinc-800 transition duration-200 mt-6 flex items-center justify-center gap-1">
                Access Dashboard <ArrowRight className="inline w-4" />
              </button>
              <p className="text-sm text-zinc-500 mt-3">
                Don't have an account? <button onClick={() => setAuthMode(authModes.SignUp)}><span className="text-sm text-text hover:underline">Sign Up</span></button>
              </p>

              <div className="flex justify-center items-center mt-5">
                <div className="grow border-t border-gray-300 my-4"></div>
                <span className=" text-sm text-zinc-500 mx-4">OR</span>
                <div className="grow border-t border-gray-300 my-4"></div>
              </div>
              <div className="flex-col justify-center items-center text-center gap-4 mt-5">
                <button onClick={() => navigate('/')} className="w-full bg-gray-200 text-gray-700 py-2 rounded-2xl hover:bg-gray-300 transition duration-200">
                  <Sparkles className="inline w-5 mr-2" />
                  Access with Demo Account
                </button>
              </div>
            </form>
          </div>
        )}




        {authMode === authModes.SignUp && (
          <div className="flex-col justify-center items-center text-center gap-4 bg-primary max-w-lg mx-auto px-4 py-8 md:px-8 md:py-12 rounded-2xl shadow-xl border border-gray-300">
            <h1 className="text-2xl font-bold tracking-tight text-zinc-900 font-display">
              Create an Account
            </h1>
            <p className="text-sm text-zinc-500">
              Sign up to create your ClikCard wallet.
            </p>
            <form className="flex-col justify-center items-center text-center gap-4 mt-10">
              <div className="relative">
                <label className="flex uppercase text-xs font-semibold text-text tracking-wider">Name*</label>
                <div>
                  <User className="absolute mt-2 ml-2 text-zinc-400" />
                  <input type="text" id="name" placeholder="Name" required className="w-full px-9 pr-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring focus:black " />
                </div>
              </div>
              <div className="relative mt-5">
                <label className="flex uppercase text-xs font-semibold text-text tracking-wider">Contact Number*</label>
                <div>
                  <Phone className="absolute mt-2 ml-2 text-zinc-400 w-5" />
                  <input type="text" id="contact" placeholder="+91 " required className="w-full px-9 pr-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring focus:black " />
                </div>
              </div>
              <div className="relative mt-5">
                <label className="flex uppercase text-xs font-semibold text-text tracking-wider">Email*</label>
                <div>
                  <Mail className="absolute mt-2 ml-2 text-zinc-400" />
                  <input type="email" id="email" placeholder="user@example.com" required className="w-full px-9 pr-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring focus:black " />
                </div>
              </div>
              <div className="relative mt-5">
                <label className="flex uppercase text-xs font-semibold text-text tracking-wider">Password*</label>
                <div>
                  <Lock className="absolute mt-2 ml-2 text-zinc-400" />
                  <input type="password" id="password" placeholder="minimum 8 characters" required className="w-full px-9 pr-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring focus:black " />
                </div>
              </div>

              <button type="submit" className="w-full bg-black text-white py-2 rounded-2xl hover:bg-zinc-800 transition duration-200 mt-6 flex items-center justify-center gap-1">
                Create Account <ArrowRight className="inline w-4" />
              </button>
              <p className="text-sm text-zinc-500 mt-3">
                Already have an account? <button onClick={() => setAuthMode(authModes.logIn)}><span className="text-sm text-text hover:underline">Log In</span></button>
              </p>
            </form>
          </div>
        )}



        {authMode === authModes.ForgotPassword && (
          <div className="flex-col justify-center items-center text-center gap-4 bg-primary max-w-lg mx-auto px-4 py-8 md:px-8 md:py-12 rounded-2xl shadow-xl border border-gray-300">
            <h1 className="text-2xl font-bold tracking-tight text-zinc-900 font-display">
              Forgot Password?
            </h1>
            <p className="text-sm text-zinc-500">
              Enter your email address and we'll send you a link to reset your password.
            </p>
            <form className="flex-col justify-center items-center text-center gap-4 mt-10">
              <div className="relative">
                <label className="flex uppercase text-xs font-semibold text-text tracking-wider">Email*</label>
                <div>
                  <Mail className="absolute mt-2 ml-2 text-zinc-400" />
                  <input type="email" id="email" placeholder="user@example.com" required className="w-full px-9 pr-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring focus:black " />
                </div>
              </div>
              <div className="flex justify-center items-center gap-4 mt-6">
                <button onClick={() => setAuthMode(authModes.logIn)} className="w-full bg-zinc-500 text-white py-2 rounded-2xl hover:bg-zinc-800 transition duration-200 ">
                  Cancel
                </button>
                <button type="submit" className="w-full bg-black text-white py-2 rounded-2xl hover:bg-zinc-800 transition duration-200 flex items-center justify-center gap-1">
                  Send <ArrowRight className="inline w-4" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}

export default AuthScreen
