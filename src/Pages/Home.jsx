import React from 'react'
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import {
  Edit, Share2, QrCode, Download, Check, Copy, Camera,
  Sparkles, X, UserCheck, Smartphone, ExternalLink, Briefcase, Building, MapPin
} from 'lucide-react';
import { cardDetails } from '../Data/cardData';
import CardPrev from '../Components/CardPrev';

const Home = () => {

  const card = cardDetails

  return (
    <div className='max-w-7xl w-full mx-auto min-h-screen bg-background px-4 pt-25 pb-15 space-y-6 '>

      <div className="bg-white border border-zinc-250/80 rounded-2xl p-5 md:p-6 shadow-[0_1px_3px_rgba(0,0,0,0.01)] flex flex-col md:flex-row items-center md:items-start justify-between gap-5 relative overflow-hidden">
        {/* Glow effect on background */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-zinc-100 rounded-full blur-2xl -mr-16 -mt-16 opacity-40"></div>

        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left z-10">
          <img
            src={card.avatarUrl || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80"}
            alt={card.name}
            className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-zinc-950 p-0.5 shadow-md shrink-0"
            referrerPolicy="no-referrer"
          />
          <div className="space-y-1 py-1">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 md:gap-2">
              <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400">Live Workspace Profile</span>
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-zinc-950 tracking-tight font-display">{card.name || "Sienna Vance"}</h1>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-2 gap-y-1 text-xs text-zinc-550 font-medium">
              <span className="flex items-center gap-1">
                <Briefcase className="w-3.5 h-3.5 text-zinc-400" /> {card.role || "Lead Architect"}
              </span>
              <span className="text-zinc-300">•</span>
              <span className="flex items-center gap-1">
                <Building className="w-3.5 h-3.5 text-zinc-400" /> {card.company || "Sienna Labs"}
              </span>
              {card.address && (
                <>
                  <span className="text-zinc-300">•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-zinc-400" /> {card.address}
                  </span>
                </>
              )}
            </div>
          </div>
        </div>

      </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start ">

          {/* Digital card preview layout (Column 7) */}
          <div className="lg:col-span-7 space-y-3.5">
            <div className="flex items-center justify-between px-2">
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-zinc-500 flex items-center gap-1.5">
                <Smartphone className="w-4 h-4 text-zinc-400" /> Digital Card Cardboard View
              </span>
              <button
                onClick={() => onNavigate('profile')}
                className="text-[10px] md:text-xs font-bold text-zinc-950 hover:underline flex items-center gap-1 cursor-pointer"
              >
                Configure Styles <ExternalLink className="w-3 h-3 text-zinc-500" />
              </button>
            </div>

            <div className="bg-zinc-100 p-5 rounded-[40px] border border-zinc-200/80 shadow-[inset_0_1.5px_4px_rgba(0,0,0,0.02)] flex justify-center items-center relative overflow-hidden">
              {/* Ambient pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(#e4e4e7_1px,transparent_1px)] [bg-size:16px_16px] opacity-35"></div>

              <div className="relative z-10 w-full max-w-81.25 overflow-hidden rounded-[26px] shadow-xl border-8 border-zinc-800">
                <CardPrev card={card} interactive={false} />
              </div>
            </div>
          </div>

          {/* QR Code preview layout (Column 5) */}
          <div className="lg:col-span-5 space-y-3.5 h-full">
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 flex items-center gap-1.5 px-2">
              <QrCode className="w-4 h-4 text-zinc-400" /> Direct QR Badge Key
            </span>

            <div className="bg-white border border-zinc-200 rounded-3xl p-6 shadow-[0_1px_3px_rgba(0,0,0,0.01)] text-center flex flex-col justify-between h-full min-h-[460px] space-y-6">

              <div className="space-y-1">
                <span className="text-[9px] font-mono font-bold tracking-widest text-zinc-400 block uppercase">INSTANT PAIR OR TRANSFER</span>
                <h3 className="text-lg font-bold font-display text-zinc-900 tracking-tight">Interactive Scanner Badge</h3>
                <p className="text-xs text-zinc-500 max-w-xs mx-auto leading-relaxed">
                  Scan this active barcode in reality on an external phone to load your digital experience card immediately. No companion application is necessary!
                </p>
              </div>

              {/* QR image block */}
              <div className="p-4 bg-zinc-50 border border-zinc-150 rounded-2xl max-w-48.75 w-full mx-auto aspect-square flex items-center justify-center shadow-inner relative group">
                <img
                  src="/"
                  alt="Digital business card QR code"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
                <div className=" absolute inset-0 bg-white/90 backdrop-blur-xs rounded-2xl flex items-center justify-center p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[11px] font-bold text-zinc-900 font-mono">Scan code on physical camera</span>
                </div>
              </div>

              {/* Downward links layout */}
              <div className="space-y-2.5">
                <div className="p-2.5 bg-zinc-50 border border-zinc-200 rounded-xl flex items-center justify-between text-left">
                  <div className="truncate pr-2">
                    <span className="text-[9px] font-bold text-zinc-400 block uppercase">SHARING DEEP LINK</span>
                    <span className="text-[11px] text-zinc-650 font-mono font-semibold block truncate leading-tight pt-0.5"></span>
                  </div>
                  <button
                    type="button"
                    className="p-2 hover:bg-white border rounded-lg transition-all cursor-pointer text-zinc-600 shrink-0"
                    title="Copy link to clipboard"
                  >

                  </button>
                </div>

                <a
                  href="/"
                  download="clikcard_personal_badge.png"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 rounded-xl border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-950 text-xs font-bold flex items-center justify-center space-x-1.5 transition-colors cursor-pointer shadow-sm"
                >
                  <Download className="w-4 h-4 text-zinc-500" />
                  <span>Save Badge Image</span>
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* 3. QUICK ACTION BUTTONS: Clean Tactile 4-Grid Block */}
        <div className="space-y-3.5 mt-4">
          <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 flex items-center gap-1.5 px-2 ">
            <Sparkles className="w-4 h-4 text-zinc-400" /> Quick Cockpit Operations
          </span>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            {/* Quick Action A: Edit Card */}
            <button

              className="group p-5 bg-white border border-zinc-220 hover:border-zinc-900 rounded-2xl shadow-[0_1px_2px_rgba(0,0,0,0.01)] text-left space-y-3 transition-all cursor-pointer h-full flex flex-col justify-between hover:shadow-md"
            >
              <div className="p-2.5 bg-zinc-50 text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white rounded-xl border border-zinc-200/60 w-fit transition-colors">
                <Edit className="w-4.5 h-4.5" />
              </div>
              <div>
                <h4 className="text-xs font-black text-zinc-950 font-display">Edit Card Details</h4>
                <p className="text-[11px] text-zinc-400 font-medium leading-normal pt-1">
                  Configure your identity, custom skills, bio details, and alternate socials instantly.
                </p>
              </div>
            </button>

            {/* Quick Action B: Share Card */}
            <button

              className="group p-5 bg-white border border-zinc-220 hover:border-zinc-900 rounded-2xl shadow-[0_1px_2px_rgba(0,0,0,0.01)] text-left space-y-3 transition-all cursor-pointer h-full flex flex-col justify-between hover:shadow-md"
            >
              <div className="p-2.5 bg-zinc-50 text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white rounded-xl border border-zinc-200/60 w-fit transition-colors">
                <Share2 className="w-4.5 h-4.5" />
              </div>
              <div>
                <h4 className="text-xs font-black text-zinc-950 font-display">Share Business Card</h4>
                <p className="text-[11px] text-zinc-400 font-medium leading-normal pt-1">
                  Copy, send or direct embed your live, interactive deep link onto email banners.
                </p>
              </div>
            </button>

            {/* Quick Action C: Scan QR / Exchange Simulator */}
            <button

              className="group p-5 bg-white border border-zinc-220 hover:border-zinc-900 rounded-2xl shadow-[0_1px_2px_rgba(0,0,0,0.01)] text-left space-y-3 transition-all cursor-pointer h-full flex flex-col justify-between hover:shadow-md"
            >
              <div className="p-2.5 bg-zinc-50 text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white rounded-xl border border-zinc-200/60 w-fit transition-colors">
                <Camera className="w-4.5 h-4.5" />
              </div>
              <div>
                <h4 className="text-xs font-black text-zinc-950 font-display">Scan QR Code</h4>
                <p className="text-[11px] text-zinc-400 font-medium leading-normal pt-1">
                  Simulate scan input exchanges to automatically record card directories on-the-go.
                </p>
              </div>
            </button>

            {/* Quick Action D: Save Contact (VCard download of the user's card) */}
            <button

              className="group p-5 bg-white border border-zinc-220 hover:border-zinc-900 rounded-2xl shadow-[0_1px_2px_rgba(0,0,0,0.01)] text-left space-y-3 transition-all cursor-pointer h-full flex flex-col justify-between hover:shadow-md"
            >
              <div className="p-2.5 bg-zinc-50 text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white rounded-xl border border-zinc-200/60 w-fit transition-colors">
                <Download className="w-4.5 h-4.5" />
              </div>
              <div>
                <h4 className="text-xs font-black text-zinc-950 font-display">Save Contact vCard</h4>
                <p className="text-[11px] text-zinc-400 font-medium leading-normal pt-1">
                  Download your physical virtual contact profile file directly to test the offline import lookup.
                </p>
              </div>
            </button>

          </div>
        </div>

    </div>
  )
}

export default Home
