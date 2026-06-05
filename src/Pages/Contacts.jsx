import { useState } from 'react'
import { Connection } from "../Data/cardData"
import { 
  Users, Activity, MousePointerClick, Calendar, UserPlus, 
  Search, Trash2, Tag, BookOpen, Share2, Download, Copy, Check, 
  ExternalLink, ChevronRight, Filter, ChevronDown, CheckCircle, FileSpreadsheet, Plus, X 
} from 'lucide-react';


const Contacts = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('all');
  const [showQrModal, setShowQrModal] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  

  const handleManualSubmit = (e) => {
    e.preventDefault();
    if (!manualName || !manualEmail) return;

    const Connection = {
      id: `conn-manual-${Date.now()}`,
      name: manualName,
      role: manualRole || 'Partner',
      company: manualCompany || 'Independent',
      email: manualEmail,
      phone: manualPhone || '[Unspecified]',
      dateAdded: new Date().toISOString().split('T')[0],
      notes: manualNotes,
      tags: manualTag ? [manualTag] : ['Manual'],
      avatarUrl: `https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80` // standard guest avatar
    };

    onAddManualConnection(newConn);
    
    // reset
    setManualName('');
    setManualRole('');
    setManualCompany('');
    setManualEmail('');
    setManualPhone('');
    setManualNotes('');
    setShowManualForm(false);
  };

  

  return (
    <div className='min-h-screen bg-background pt-25 pb-15 max-w-7xl w-full mx-auto space-y-10 px-4'>

      <div className="space-y-1 py-1">
        <div className="flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-widest text-zinc-400">
          <span className="h-1.5 w-1.5 rounded-full bg-zinc-900 animate-pulse"></span>
          Connections Log Book
        </div>
        <h2 className="text-2xl font-extrabold text-zinc-950 tracking-tight font-display">Contacts Directory</h2>
        <p className="text-xs text-zinc-500 leading-relaxed max-w-xl">
          Manage physical or mock business cards collected or exchanged. Search and filter logs below.
        </p>
      </div>

      {/* 4. Connection Directory Framework */}
      <div className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-[0_1px_3px_rgba(0,0,0,0.01)] space-y-6">

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-zinc-150 pb-4">
          <div className="space-y-0.5">
            <h3 className="text-sm font-bold text-zinc-950">Connections Log </h3>
            <p className="text-xs text-zinc-500 font-sans">Query and retrieve physical cards scanned or digital card entries collected.</p>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              className="px-3.5 py-2 bg-white text-zinc-800 border border-zinc-250 hover:bg-zinc-50 rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-sm transition-colors cursor-pointer"
            >
              <FileSpreadsheet className="w-4 h-4 text-zinc-650" /> Export CSV
            </button>
            <button
              
              type="button"
              className="px-3.5 py-2 bg-zinc-950 hover:bg-zinc-900 text-white border border-zinc-950 rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-sm transition-colors cursor-pointer"
            >
              <Plus className="w-4 h-4" /> Add Manual Link
            </button>
          </div>
        </div>


        {/* Searching and Categorizing bar */}
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Query string */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-3.5" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by name, role, email, company, or note..."
              className="w-full text-xs py-3 pl-9 pr-4 rounded-xl border border-zinc-200 focus:outline-none focus:border-zinc-500 text-zinc-850 font-medium"
            />
          </div>

          {/* Categorized filter tags */}
          <div className="flex gap-2 bg-zinc-100 p-1 rounded-xl border border-zinc-200/60 overflow-x-auto pb-1.5 sm:pb-1 items-center">
            <button
              onClick={() => setSelectedTag('all')}
              className={`px-3 py-1.5 whitespace-nowrap font-bold text-xs rounded-lg cursor-pointer ${selectedTag === 'all' ? 'bg-white text-zinc-905 shadow-sm border border-zinc-200/40' : 'text-zinc-400 hover:text-zinc-650'}`}
            >
              All Contacts
            </button>
           
              <button
                key={Connection.tag}
                onClick={() => setSelectedTag(Connection.tag)}
                className={`px-3 py-1.5 whitespace-nowrap font-bold text-xs rounded-lg cursor-pointer capitalize ${selectedTag === Connection.tag ? 'bg-white text-zinc-905 shadow-sm border border-zinc-200/40' : 'text-zinc-400 hover:text-zinc-650'}`}
              >
                {Connection.tag}
              </button>
            
          </div>
        </div>

        {/* Grid Log of connection cells */}
        <div className="md:grid grid-cols-1 md:grid-cols-2 gap-4 space-y-6">

          {Connection.map((conn) => (
            <div key={conn.id} className="p-4 border border-zinc-200 rounded-xl bg-white hover:bg-zinc-50/50 transition-colors flex flex-col md:justify-between">

              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  {/* Photo or initials */}
                  <div className="flex items-center space-x-3">
                    <img
                      src={conn.avatarUrl || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80"}
                      alt={conn.name}
                      className="w-10 h-10 rounded-full object-cover border border-zinc-200"
                    />
                    <div className="space-y-0.5">
                      <h4 className="text-xs font-bold text-zinc-900 leading-snug">{conn.name}</h4>
                      <p className="text-[11px] text-zinc-500 leading-none">{conn.role} at <b className="text-zinc-700 font-bold">{conn.company}</b></p>
                    </div>
                  </div>

                  {/* Actions right corner */}
                  <button
                    onClick={() => onRemoveConnection(conn.id)}
                    className="p-1.5 text-zinc-400 hover:text-zinc-900 cursor-pointer rounded transition-colors"
                    title="Remove connection log"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Notes box */}
                {conn.notes && (
                  <div className="p-2.5 bg-zinc-50 border-l border-zinc-950 rounded-r-lg text-[11px] text-zinc-600 leading-relaxed italic">
                    "{conn.notes}"
                  </div>
                )}
              </div>

              {/* Bottom tag indicators & detailed coordinates links */}
              <div className="pt-3 border-t border-zinc-150 mt-3 flex items-center justify-between">
                <div className="flex items-center space-x-1.5">
                  <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                  <span className="text-[10px] font-bold text-zinc-400">{conn.dateAdded}</span>
                  {conn.tags && conn.tags.map((tg, i) => (
                    <span key={i} className="px-2 py-0.5 text-[9px] font-bold bg-zinc-100 text-zinc-600 border border-zinc-200 rounded capitalize">
                      {tg}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-2">
                  <a href={`mailto:${conn.email}`} className="text-[10px] text-zinc-900 font-bold hover:underline">
                    Email
                  </a>
                  {conn.phone && conn.phone !== '[Unspecified]' && (
                    <>
                      <span className="text-slate-300">|</span>
                      <a href={`tel:${conn.phone}`} className="text-[10px] text-indigo-600 font-bold hover:underline">
                        Call
                      </a>
                    </>
                  )}
                </div>
              </div>

            </div>
          ))}

           
            <div className="col-span-2 text-center py-10 border border-dashed border-slate-200 rounded-xl space-y-2">
              <Users className="w-8 h-8 text-slate-300 mx-auto" />
              <h4 className="text-xs font-bold text-slate-700">No matching connections</h4>
              <p className="text-[11px] text-slate-400">Try modifying search tags or enter a directory lookup manually.</p>
            </div>
          

        </div>

      </div>

    </div>
  )
}

export default Contacts
