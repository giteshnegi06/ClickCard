import { useState } from 'react'
import {
  User, Briefcase, Building, FileText, MapPin, Mail, Phone,
  Plus, X, RefreshCw, Layers, Sparkles, Sliders, Play, Trash2, Edit
} from 'lucide-react';

const Profile = () => {

  const [activeSubTab, setActiveSubTag] = useState('info')

  return (
    <div className='max-w-7xl mx-auto w-full bg-background px-4 py-20 space-y-4'>
      <div className='bg-primary rounded-xl p-6 border border-zinc-300 flex items-center justify-between'>
        <div className=''>
          <h1 className='text-lg text-zinc-900 font-bold font-serif'>Customization Engine</h1>
          <p className='text-zinc-500 text-xs'>Edit elements or change layout themes to customize your ClikCard.</p>
        </div>
        <button
          className='bg-zinc-50 border border-zinc-300 px-3 py-1 rounded-lg text-xs text-zinc-700 hover:bg-zinc-100 transition-colors duration-200 font-sans font-bold'>
          Load Demo
        </button>
      </div>

      <div className="flex border-b border-zinc-200 bg-white rounded-t-xl p-1.5 pb-0">
        <button
          onClick={() => setActiveSubTag('info')}
          className={`px-4 py-2 text-xs font-bold flex items-center space-x-1.5 border-b-2 transition-all cursor-pointer gap-1.5
          ${activeSubTab === 'info'
              ? 'border-zinc-950 text-zinc-950'
              : 'border-transparent text-zinc-400 hover:text-zinc-700'
            } `} >
          <User className='w-4 h-4' />
          1. Profile Details
        </button>
        <button
          onClick={() => setActiveSubTag('skills')}
          className={`px-4 py-2 text-xs font-bold flex items-center space-x-1.5 border-b-2 transition-all cursor-pointer gap-1.5
          ${activeSubTab === 'skills'
              ? 'border-zinc-950 text-zinc-950'
              : 'border-transparent text-zinc-400 hover:text-zinc-700'
            } `} >
          <Layers className='w-4 h-4' />
          2. Tech & Skills
        </button>
        <button
          onClick={() => setActiveSubTag('style')}
          className={`px-4 py-2 text-xs font-bold flex items-center space-x-1.5 border-b-2 transition-all cursor-pointer gap-1.5
          ${activeSubTab === 'style'
              ? 'border-zinc-950 text-zinc-950'
              : 'border-transparent text-zinc-400 hover:text-zinc-700'
            } `} >
          <Sparkles className='w-4 h-4' />
          3. Style & Themes
        </button>
      </div>

      {activeSubTab === 'info' && (
        <div className='bg-white rounded-b-xl p-6 border border-zinc-200'>
          <h2 className='text-sm font-bold text-zinc-900 mb-2'>Card Identity Setup</h2>

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
  )
}

export default Profile
