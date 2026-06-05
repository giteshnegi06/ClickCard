import { useState } from 'react'
import {
  Mail, Phone, MapPin, Globe,
  Share2, Download, Send, Check, Play, MessageSquarePlus
} from 'lucide-react';
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";



const CardPrev = () => {

  const [connectName, setConnectName] = useState('');
  const [connectEmail, setConnectEmail] = useState('');
  const [connectPhone, setConnectPhone] = useState('');
  const [connectRole, setConnectRole] = useState('');
  const [connectCompany, setConnectCompany] = useState('');
  const [connectMsg, setConnectMsg] = useState('');
  const [showConnectForm, setShowConnectForm] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showCopied, setShowCopied] = useState(false);


  const getThemeStyles = () => {
    return {
      wrapper: 'bg-amber-50 text-black border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] font-mono',
      avatarRing: 'border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]',
      badge: 'bg-amber-200 text-black border-2 border-black font-bold text-xs',
      btnPrimary: 'bg-yellow-300 hover:bg-yellow-400 text-black border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all font-bold rounded-none active:translate-x-[2px] active:translate-y-[2px]',
      btnSecondary: 'bg-white hover:bg-stone-100 text-black border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px]',
      socialBtn: 'bg-sky-200 hover:bg-sky-300 text-black border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] rounded-none active:translate-x-[1px] active:translate-y-[1px]',
      fontClass: 'font-mono',
      cardAccent: 'yellow-400',
      cardStyle: 'border-3 border-black bg-white rounded-none p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
      glassHeader: 'border-b-4 border-black bg-yellow-100'
    };
  }

  const currentStyles = getThemeStyles();

  const cardDetails = () => {
    return {
      name: "Gitesh",
      email: "giteshneg5@gmail.com",
      avatarUrl: "https://res.cloudinary.com/dh52la71p/image/upload/v1774208606/Gitesh_Kumar1_tjpqq5.png",
      phone: "8219569278",
      role: "FrontEnd Developer",
      address: "Krnal, Haryana 132001",
      note: "Crafting beautiful digital realities. Specializing in high-fidelity prototypes, fluid motion design, and developer relations.",
      skills: ["React", "JavaScript", "Responsive Design", "Figma Design"],
      socialLinks: [
        { id: '1', platform: <FaGithub/>, label: 'GitHub', value: 'https://siennastudio.co' },
        { id: '2', platform: <FaLinkedinIn/>, label: 'LinkedIn', value: 'https://linkedin.com' },
        { id: '3', platform: <FaInstagram/>, label: 'Instagram', value: 'https://instagram.com' }
      ],
    };
  };

  const card = cardDetails()

  return (
    <div className={`w-full max-w-sm mx-auto overflow-hidden relative flex flex-col h-full transition-all duration-300 bg-amber-50 text-black  font-mono`}>
      <div className={`px-4 py-3 sticky top-0 z-10 flex items-center justify-between border-b-4 border-black bg-yellow-100`}>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
          <span className="text-[10px] tracking-widest font-mono uppercase opacity-75">LIVE PREVIEW</span>
        </div>
        <div className="flex items-center space-x-1.5">
          <button
            id="clikcard-share-btn"

            className={`p-1.5 hover:opacity-80 transition-opacity rounded-md`}
            title="Copy Public Card Link"
          >
            {showCopied ? <Check className="w-4 h-4 text-green-500" /> : <Share2 className="w-4 h-4" />}
          </button>
          <button
            id="clikcard-download-btn"

            className={`p-1.5 hover:opacity-80 transition-opacity rounded-md`}
            title="Download vCard Contacts File"
          >
            <Download className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="p-3 flex-1 flex flex-col space-y-6 overflow-y-auto scrollbar-none ">

        {/* Core Hero Section / Header Card */}
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="relative">
            <img
              id="clikcard-user-avatar"
              src={`${card.avatarUrl}`}
              alt={`${card.name}`}
              className={`w-24 h-24 rounded-full object-cover shadow-md transition-all border-4 border-black`}
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="space-y-1">
            <h2 id="clikcard-user-name" className={`text-2xl font-bold tracking-tight font-mono`}>{`${card.name}`}</h2>
            <p id="clikcard-user-role-company" className="text-sm font-medium opacity-85 leading-snug">
              {`${card.role}`}
            </p>

            <div id="clikcard-user-location" className="flex items-center justify-center space-x-1 opacity-70 text-xs">
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span>{`${card.address}`}</span>
            </div>

          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button
            className={`py-2.5 px-4 text-xs font-semibold flex items-center justify-center space-x-1.5 cursor-pointer ${currentStyles.btnPrimary}`}
          >
            <Download className="w-4 h-4" />
            <span>Save Contact</span>
          </button>
          <button
            className={`py-2.5 px-4 text-xs font-semibold flex items-center justify-center space-x-1.5 cursor-pointer ${currentStyles.btnSecondary}`}
          >
            <MessageSquarePlus className="w-4 h-4" />
            <span>Exchange contact</span>
          </button>
        </div>


        <div className={`p-4 space-y-3.5 ${currentStyles.cardStyle}`}>

          <p id="clikcard-user-bio" className="text-xs leading-relaxed opacity-90 wrap-break-word font-medium">
            {`${card.note}`}
          </p>


          {/* Email / Phone lists */}
          <div className="space-y-2 text-xs pt-2 border-t border-slate-500/10">
            {card.email && (
              <a href={`mailto:${card.email}`} className="flex items-center space-x-2.5 opacity-80 hover:opacity-100 transition-opacity">
                <Mail className="w-4 h-4 shrink-0" />
                <span className="break-all">{card.email}</span>
              </a>
            )}
            {card.phone && (
              <a href={`tel:${card.phone}`} className="flex items-center space-x-2.5 opacity-80 hover:opacity-100 transition-opacity">
                <Phone className="w-4 h-4 shrink-0" />
                <span>{card.phone}</span>
              </a>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <span className="text-[10px] tracking-widest font-bold uppercase opacity-85">Online Profiles</span>
          <div className="grid grid-cols-2 gap-2.5">
            {card.socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.value}
                target="_blank"
                rel="noreferrer"
                onClick={() => { if (onActionClick) onActionClick(`tap-social-${link.platform}`); }}
                className={`p-2.5 flex items-center space-x-3 text-xs font-semibold cursor-pointer transition-all hover:scale-[1.02] ${currentStyles.socialBtn}`}
              >
                <span className="opacity-90 ">{link.platform}</span>
                <span className="truncate">{link.label}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-2.5">
          <span className="text-[10px] tracking-widest font-bold uppercase opacity-85">Excellence & Focus</span>
          <div className="flex flex-wrap gap-1.5">
            {card.skills.map((skill, index) => (
              <span
                key={index}
                className={`px-3 py-1 rounded-full text-xs font-medium tracking-tight ${currentStyles.badge}`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>


        {showConnectForm && (
          <div className={`p-4 border border-slate-300 rounded-xl space-y-3 mt-4 animate-fade-in ${currentStyles.cardStyle}`}>
            <div className="flex justify-between items-center text-xs pb-1 border-b border-slate-500/10">
              <span className="font-bold tracking-tight">Exchange Contact Card</span>
              <button
                onClick={() => setShowConnectForm(false)}
                className="text-stone-400 hover:text-stone-200 transition-colors cursor-pointer text-xs"
              >
                Dismiss
              </button>
            </div>
            {isSubmitted ? (
              <div className="text-center py-6 space-y-2">
                <div className="w-10 h-10 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mx-auto">
                  <Check className="w-5 h-5 animate-bounce" />
                </div>
                <h4 className="text-xs font-bold">Contact Exchanged!</h4>
                <p className="text-[11px] opacity-80">Gitesh and you are now connected.</p>
              </div>
            ) : (
              <form onSubmit={handleConnectSubmit} className="space-y-2.5">
                <input
                  type="text"
                  value={connectName}
                  onChange={(e) => setConnectName(e.target.value)}
                  placeholder="Your Full Name *"
                  required
                  className="w-full text-xs p-2.5 rounded bg-slate-900/40 text-inherit border border-slate-500/15 focus:outline-none focus:border-indigo-500 transition-colors"
                />
                <input
                  type="email"
                  value={connectEmail}
                  onChange={(e) => setConnectEmail(e.target.value)}
                  placeholder="Your Email *"
                  required
                  className="w-full text-xs p-2.5 rounded bg-slate-900/40 text-inherit border border-slate-500/15 focus:outline-none focus:border-indigo-500 transition-colors"
                />
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    value={connectRole}
                    onChange={(e) => setConnectRole(e.target.value)}
                    placeholder="Role (e.g. Designer)"
                    className="w-full text-xs p-2 rounded bg-slate-900/40 text-inherit border border-slate-500/15 focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                  <input
                    type="text"
                    value={connectCompany}
                    onChange={(e) => setConnectCompany(e.target.value)}
                    placeholder="Company name"
                    className="w-full text-xs p-2 rounded bg-slate-900/40 text-inherit border border-slate-500/15 focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
                <input
                  type="tel"
                  value={connectPhone}
                  onChange={(e) => setConnectPhone(e.target.value)}
                  placeholder="Phone number"
                  className="w-full text-xs p-2.5 rounded bg-slate-900/40 text-inherit border border-slate-500/15 focus:outline-none focus:border-indigo-500 transition-colors"
                />
                <textarea
                  value={connectMsg}
                  onChange={(e) => setConnectMsg(e.target.value)}
                  placeholder="Add a friendly note..."
                  rows={2}
                  className="w-full text-xs p-2 rounded bg-slate-900/40 text-inherit border border-slate-500/15 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded cursor-pointer font-bold text-xs flex items-center justify-center space-x-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send My Info</span>
                </button>
              </form>
            )}
          </div>
        )}


      </div>
      <div className="px-4 py-3 text-center border-t border-slate-500/10 opacity-60 text-[9px] font-mono tracking-wider">
        POWERED BY CLIKCARD.IO © 2026
      </div>
    </div>
  )
}

export default CardPrev