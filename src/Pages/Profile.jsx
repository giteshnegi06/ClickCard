import { useState } from 'react'
import { cardDetails } from "../Data/cardData"
import {
  User, Briefcase, Building, FileText, MapPin, Mail, Phone,
  Plus, X, RefreshCw, Layers, Sparkles, Sliders, Play, Trash2, Edit
} from 'lucide-react';
import CardPrev from '../Components/CardPrev';

const Profile = () => {

  const card = cardDetails

  const [activeSubTab, setActiveSubTag] = useState('info')
  const [activeTab, setActivetab] = useState('customize')


  return (
    <div className='lg:flex justify-between items-center max-w-6xl mx-auto w-full bg-background px-4 lg:mt-10 pt-20 pb-10 mb-15'>
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
          <div className='bg-white rounded-b-xl p-6 border border-zinc-200 space-y-6 max-w-175 w-full mx-auto'>
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

          <div className="bg-white rounded-b-xl p-6 border-x border-b border-slate-200/80 shadow-sm space-y-6 animate-fade-in max-w-175 w-full mx-auto">

            {/* Skills manager */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-widest">Tags / Skills Specialties</h4>
              <form className="flex gap-2">
                <input
                  type="text"
                  placeholder="e.g. Interaction Architect"
                  className="flex-1 text-xs py-2 px-3 rounded-lg border border-slate-200 focus:outline-none focus:border-indigo-500 text-slate-800"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-lg cursor-pointer flex items-center gap-1.5 transition-colors"
                >
                  <Plus className="w-4 h-4" /> Add Tag
                </button>
              </form>

              {/* Skills Listing */}
              <div className="flex flex-wrap gap-1.5">
                {card.skills.map((skill, i) => (
                  <span key={i} className="px-2.5 py-1 bg-slate-150 text-slate-700 border border-slate-200 text-xs rounded-full font-medium flex items-center space-x-1">
                    <span>{skill}</span>
                    <button type="button" className="text-slate-400 hover:text-red-500 cursor-pointer">
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </span>
                ))}
                {card.skills.length === 0 && (
                  <span className="text-xs text-slate-400 font-medium">No custom competency tags loaded yet.</span>
                )}
              </div>
            </div>

            {/* Links Editor */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-widest">Online Profiles & Links</h4>

              <form className="grid grid-cols-1 md:grid-cols-4 gap-2 bg-slate-50 p-4 border border-slate-200/60 rounded-xl">
                <div className="space-y-1 md:col-span-1">
                  <label className="text-[10px] font-bold text-slate-500 uppercase">Platform</label>
                  <select
                    className="w-full text-xs py-2 px-2 bg-white rounded border border-slate-200 focus:outline-none"
                  >
                    <option value="linkedin">LinkedIn</option>
                    <option value="github">GitHub</option>
                    <option value="twitter">Twitter / X</option>
                    <option value="instagram">Instagram</option>
                    <option value="website">Website Portfolio</option>
                    <option value="email">Alternate Email</option>
                    <option value="phone">Alternate Phone</option>
                  </select>
                </div>

                <div className="space-y-1 md:col-span-1">
                  <label className="text-[10px] font-bold text-slate-500 uppercase">Button Label</label>
                  <input
                    type="text"
                    placeholder="e.g. GitHub Profile"
                    className="w-full text-xs py-2 px-3.5 bg-white rounded border border-slate-200 focus:outline-none"
                  />
                </div>

                <div className="space-y-1 md:col-span-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase">Card Address / URL *</label>
                  <div className="flex gap-2">
                    <input
                      type="text"

                      placeholder="e.g. github.com/username"
                      required
                      className="flex-1 text-xs py-2 px-3.5 bg-white rounded border border-slate-200 focus:outline-none"
                    />
                    <button
                      type="submit"
                      style={{ height: '34px', alignSelf: 'flex-end' }}
                      className="px-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded cursor-pointer transition-colors"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </form>

              {/* Mounted links list */}
              <div className="space-y-2">
                {card.socialLinks.map((link) => (
                  <div key={link.id} className="flex items-center justify-between p-3 border border-slate-150/80 bg-slate-50/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <span className="text-[11px] font-bold px-2 py-0.5 bg-slate-200/75 rounded text-slate-700 capitalize">{link.platform}</span>
                      <span className="text-xs font-semibold text-slate-800">{link.label}</span>
                      <span className="text-[11px] text-slate-400 max-w-xs truncate hidden sm:inline">{link.value}</span>
                    </div>
                    <button
                      type="button"

                      className="p-1 px-2 hover:bg-red-50 hover:text-red-500 text-slate-400 rounded cursor-pointer transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}

                {card.socialLinks.length === 0 && (
                  <div className="text-center py-6 border border-dashed border-slate-200 rounded-lg text-slate-400 text-xs">
                    No custom online profiles. Add your social profiles above so visitors can connect!
                  </div>
                )}
              </div>
            </div>
          </div>

        )}
        {activeSubTab === 'style' && (
          <div className="bg-white rounded-b-xl p-6 border-x border-b border-slate-200/80 shadow-sm space-y-5 animate-fade-in max-w-175 w-full mx-auto">
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-widest">Aesthetic Presets</h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              {/* Slate Theme */}
              <button
                type="button"
                
                className={`p-4 rounded-xl text-left border-2 transition-all cursor-pointer border-slate-200 hover:border-slate-300`}
              >
                <div className="flex justify-between items-center pb-2">
                  <span className="text-xs font-bold text-slate-900 block font-sans">Cosmic Indigo</span>
                  <span className="w-3 h-3 rounded-full bg-indigo-600"></span>
                </div>
                <p className="text-[11px] text-slate-500 leading-snug">Rich slate background with modern Indigo neon colors. Highly interactive visual tone.</p>
              </button>

              {/* Minimalist style */}
              <button
                type="button"
                
                className={`p-4 rounded-xl text-left border-2 transition-all cursor-pointer border-slate-200 hover:border-slate-300`}
              >
                <div className="flex justify-between items-center pb-2">
                  <span className="text-xs font-bold text-slate-900 block font-sans">Corporate Minimalist</span>
                  <span className="w-3 h-3 rounded-full bg-slate-900"></span>
                </div>
                <p className="text-[11px] text-slate-500 leading-snug">Ultra clean, warm off-white layout focusing purely on high-contrast crisp typography lines.</p>
              </button>

              {/* Glassmorphic */}
              <button
                type="button"
                
                className={`p-4 rounded-xl text-left border-2 transition-all cursor-pointer border-slate-200 hover:border-slate-300`}
              >
                <div className="flex justify-between items-center pb-2">
                  <span className="text-xs font-bold text-slate-900 block font-sans">Pink Glassmorphism</span>
                  <span className="w-3 h-3 rounded-full bg-pink-500"></span>
                </div>
                <p className="text-[11px] text-slate-500 leading-snug">Frosted-glass background with vibrant pastel mesh highlights and soft drop-shadow containers.</p>
              </button>

              {/* Neo brutalist */}
              <button
                type="button"
                
                className={`p-4 rounded-xl text-left border-2 transition-all cursor-pointer border-slate-200 hover:border-slate-300`}
              >
                <div className="flex justify-between items-center pb-2">
                  <span className="text-xs font-bold text-slate-900 block font-mono">Neo-Brutalist</span>
                  <span className="w-3 h-3 rounded-full bg-yellow-400 border border-black"></span>
                </div>
                <p className="text-[11px] text-slate-500 leading-snug">Flat primary colors, prominent black stroke borders, retro mono fonts, and high-contrast styling.</p>
              </button>

              {/* Emerald Leaf */}
              <button
                type="button"
                
                className={`p-4 rounded-xl text-left border-2 transition-all cursor-pointer border-indigo-600 bg-slate-50 font-serif`}
              >
                <div className="flex justify-between items-center pb-2">
                  <span className="text-xs font-bold text-stone-900 block font-serif">Emerald Editorial</span>
                  <span className="w-3 h-3 rounded-full bg-emerald-800"></span>
                </div>
                <p className="text-[11px] text-slate-500 leading-snug font-sans">Elegant Playfair Serif headings, soft cream layout, and noble British green accent lines.</p>
              </button>

            </div>
          </div>
        )}
      </div>

      {/* Live Mobile Preview */}
      <div className={`flex-col justify-center items-center text-center stickey top-24 ${activeTab === 'preview' ? 'block' : 'hidden lg:block'}`}>
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

            

              <CardPrev />
            

          </div>
        </div>

      </div>

    </div>
  )
}

export default Profile
