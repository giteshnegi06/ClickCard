import { useState } from 'react'
import {
  User, Briefcase, Building, FileText, MapPin, Mail, Phone,
  Plus, X, RefreshCw, Layers, Sparkles, Sliders, Play, Trash2, Edit
} from 'lucide-react';
import CardPrev from '../Components/CardPrev';

const Profile = () => {

  const [activeSubTab, setActiveSubTag] = useState('info')
  const [activeTab, setActivetab] = useState('customize')


  return (
    <div className='lg:flex justify-between max-w-7xl mx-auto w-full bg-background px-4 lg:mt-10 pt-20 pb-10 '>
      <div className='flex lg:hidden justify-center items-center bg-zinc-100 rounded-xl p-2 mb-6'>
        <button
          onClick={() => setActivetab('customize')}
          className={`flex-1 py-2 text-xs font-bold rounded-md transition-colors ${activeTab === 'customize'
            ? 'bg-white shadow-sm text-slate-900'
            : 'text-slate-500'}`}>
          Customize Details
        </button>
        <button
          onClick={() => setActivetab('preview')}
          className={`flex-1 py-2 text-xs font-bold rounded-md transition-colors ${activeTab === 'preview'
            ? 'bg-white shadow-sm text-slate-900'
            : 'text-slate-500'}`}>
          Live Preview
        </button>
      </div>
      {/* Profile Details */}
      <div className={`space-y-6 mt-4 ${activeTab === 'customize' ? 'block' : 'hidden lg:block'}`}>
        <div className='bg-primary rounded-xl p-4 md:p-6 border border-zinc-300 flex items-center justify-between'>
          <div>
            <h1 className='text-lg text-zinc-900 font-bold font-display'>Customization Engine</h1>
            <p className='text-zinc-500 text-xs'>Edit elements or change layout themes to customize your ClikCard.</p>
          </div>

        </div>

        <div className="flex border-b border-zinc-200 bg-white rounded-t-xl p-1.5 pb-0">
          <button
            onClick={() => setActiveSubTag('info')}
            className={`px-2 md:px-4 py-2 text-xs font-bold flex items-center space-x-0.5 md:space-x-1.5 border-b-2 transition-all cursor-pointer gap-1
          ${activeSubTab === 'info'
                ? 'border-zinc-950 text-zinc-950'
                : 'border-transparent text-zinc-400 hover:text-zinc-700'
              } `} >
            <User className='w-4 h-4' />
            1. Profile Details
          </button>
          <button
            onClick={() => setActiveSubTag('skills')}
            className={`px-2 md:px-4 py-2 text-xs font-bold flex items-center space-x-0.5 md:space-x-1.5 border-b-2 transition-all cursor-pointer gap-1
          ${activeSubTab === 'skills'
                ? 'border-zinc-950 text-zinc-950'
                : 'border-transparent text-zinc-400 hover:text-zinc-700'
              } `} >
            <Layers className='w-4 h-4' />
            2. Tech & Skills
          </button>
          <button
            onClick={() => setActiveSubTag('style')}
            className={`px-2 md:px-4 py-2 text-xs font-bold flex items-center space-x-0.5 md:space-x-1.5 border-b-2 transition-all cursor-pointer gap-1
          ${activeSubTab === 'style'
                ? 'border-zinc-950 text-zinc-950'
                : 'border-transparent text-zinc-400 hover:text-zinc-700'
              } `} >
            <Sparkles className='w-4 h-4' />
            3. Style & Themes
          </button>
        </div>

        {activeSubTab === 'info' && (
          <div className='bg-white rounded-b-xl p-6 border border-zinc-200 space-y-6 '>
            <h2 className='text-sm font-bold text-zinc-900 mb-4 flex items-center uppercase tracking-wider '>
              <Sliders className='w-4 h-4 inline-block mr-2' />
              Card Identity Setup
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-600 uppercase">Your Name <span className="text-red-500">*</span></label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    placeholder="e.g. Gitesh Negi"
                    className="w-full text-xs py-2.5 pl-9 pr-3 rounded-lg border border-slate-200 focus:outline-none focus:border-indigo-500 text-slate-800"
                    required
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-600 uppercase">Profile Avatar URL</label>
                <input
                  type="text"
                  placeholder="Paste URL or leave empty"
                  className="w-full text-xs py-2.5 px-3 rounded-lg border border-slate-200 focus:outline-none focus:border-indigo-500 text-slate-800"
                />
              </div>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-600 uppercase">Job Title / Role <span className="text-red-500">*</span></label>
                <div className="relative">
                  <Briefcase className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    placeholder="e.g. Software Engineer"
                    className="w-full text-xs py-2.5 pl-9 pr-3 rounded-lg border border-slate-200 focus:outline-none focus:border-indigo-500 text-slate-800"
                    required
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-600 uppercase">Company Name <span className="text-red-500">*</span></label>
                <div className="relative">
                  <Building className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    placeholder="e.g. Google, Microsoft, etc."
                    className="w-full text-xs py-2.5 pl-9 pr-3 rounded-lg border border-slate-200 focus:outline-none focus:border-indigo-500 text-slate-800"
                    required
                  />
                </div>
              </div>

            </div>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-600 uppercase">Location <span className="text-red-500">*</span></label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    placeholder="e.g. San Francisco, CA"
                    className="w-full text-xs py-2.5 pl-9 pr-3 rounded-lg border border-slate-200 focus:outline-none focus:border-indigo-500 text-slate-800"
                    required
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-600 uppercase">Email <span className="text-red-500">*</span></label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="email"
                    placeholder="e.g. john.doe@example.com"
                    className="w-full text-xs py-2.5 pl-9 pr-3 rounded-lg border border-slate-200 focus:outline-none focus:border-indigo-500 text-slate-800"
                    required
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-600 uppercase">Mobile Number <span className="text-red-500">*</span></label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    placeholder="e.g. +91 98765 "
                    className="w-full text-xs py-2.5 pl-9 pr-3 rounded-lg border border-slate-200 focus:outline-none focus:border-indigo-500 text-slate-800"
                    required
                  />
                </div>
              </div>

            </div>
          </div>
        )}
        {activeSubTab === 'skills' && (
          <div className='bg-white rounded-b-xl p-6 border border-zinc-200'>
            <h2 className='text-sm font-bold text-zinc-900 mb-2'>Tech & Skills</h2>
            <p className='text-xs text-zinc-500'>Manage your technical skills and expertise.</p>
          </div>
        )}
        {activeSubTab === 'style' && (
          <div className='bg-white rounded-b-xl p-6 border border-zinc-200'>
            <h2 className='text-sm font-bold text-zinc-900 mb-2'>Style & Themes</h2>
            <p className='text-xs text-zinc-500'>Customize the appearance and layout of your ClickCard.</p>
          </div>
        )}
      </div>

      {/* Live Mobile Preview */}
      <div className={`flex-col justify-center items-center text-center sticky top-24 ${activeTab === 'preview' ? 'block' : 'hidden lg:block'}`}>
        <h2>
          <Sliders className='w-4 h-4 inline-block mr-2' />
          Live Mobile Preview
        </h2>
        <div className='flex justify-center items-center mt-1'>
          <div className='relative border-10 border-zinc-900 rounded-4xl h-120 w-65 mt-4 overflow-scroll scrollbar-none '>

            <div className='absolute top-2 left-1/2 transform -translate-x-1/2 bg-zinc-900 rounded-full w-18 h-4 mx-auto z-50'>
              <span className='flex justify-center items-center gap-1.5 mt-0.5'>
                <span className='h-2 w-2 flex relative'>
                  <span className="inline-flex  absolute h-full w-full rounded-full bg-zinc-00 opacity-75"></span>
                  <span className='relative inline-flex rounded-full h-2 w-2 bg-zinc-700'></span>
                </span>
                <span className='h-3 w-3 flex relative'>
                  <span className="inline-flex  absolute h-full w-full rounded-full bg-zinc-600 opacity-75"></span>
                  <span className='relative animate-pulse inline-flex rounded-full h-3 w-3 bg-zinc-800'></span>
                </span>
              </span>

            </div>

            <CardPrev/>

          </div>
        </div>

      </div>

    </div>
  )
}

export default Profile
