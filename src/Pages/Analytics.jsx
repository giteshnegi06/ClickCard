import { useState } from 'react'
import { 
  Users, Activity, MousePointerClick, Calendar, UserPlus, 
  Search, Trash2, Tag, BookOpen, Share2, Download, Copy, Check, 
  ExternalLink, ChevronRight, Filter, ChevronDown, CheckCircle, FileSpreadsheet, Plus, X 
} from 'lucide-react';
import { ANALYTICS_DATA, Connection } from "../Data/cardData"


function Analytics() {

  const connections = Connection
  const [activeChartMetric, setActiveChartMetric] = useState('views');

  const totalViews = ANALYTICS_DATA.reduce((acc, curr) => acc + curr.views, 0);
  const totalClicks = ANALYTICS_DATA.reduce((acc, curr) => acc + curr.clicks, 0);
  const conversionRate = totalViews > 0 ? ((connections.length / totalViews) * 100).toFixed(1) : '0.0';

  // SVG chart sizing metrics
  const chartHeight = 120;
  const chartWidth = 560;
  const maxMetricVal = Math.max(...ANALYTICS_DATA.map(d => d[activeChartMetric])) * 1.15 || 10;

  // Compute SVG Points array dynamically
  const svgPoints = ANALYTICS_DATA.map((d, index) => {
    const x = (index / (ANALYTICS_DATA.length - 1)) * chartWidth;
    const y = chartHeight - (d[activeChartMetric] / maxMetricVal) * chartHeight;
    return `${x},${y}`;
  }).join(' ');



  const exportToCSV = () => {
    const headers = ['Name', 'Role', 'Company', 'Email', 'Phone', 'Date Added', 'Notes', 'Tags'];
    const rows = connections.map(c => [
      c.name,
      c.role,
      c.company,
      c.email,
      c.phone,
      c.dateAdded,
      c.notes || '',
      c.tags ? c.tags.join('; ') : ''
    ]);

    const csvContent = "data:text/csv;charset=utf-8," 
      + [headers.join(','), ...rows.map(e => e.map(val => `"${val.replace(/"/g, '""')}"`).join(","))].join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `clikcard_connections_${card.name.replaceAll(' ', '_')}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  
  return (



    <>
      <div className="max-w-7xl w-full mx-auto space-y-6 pt-25 animate-fade-in mb-40 px-4">


        {/* Section title & Header */}
        <div className="space-y-1 py-1">
          <div className="flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-widest text-zinc-400">
            <span className="h-1.5 w-1.5 rounded-full bg-zinc-900 animate-pulse"></span>
            Workspace Metrics Cockpit
          </div>
          <h2 className="text-2xl font-extrabold text-zinc-950 tracking-tight font-display">Interaction Analytics</h2>
          <p className="text-xs text-zinc-500 leading-relaxed max-w-xl">
            Track visiting statistics, link click logs, and overall capture ratios across your active days.
          </p>
        </div>

        {/* 2. Core Stats Grid Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

          {/* Visitors */}
          <div className="p-2 md:p-5 bg-white border border-zinc-200 rounded-2xl shadow-[0_1px_2px_rgba(0,0,0,0.01)] flex items-center space-x-4">
            <div className="p-2.5 bg-zinc-50 text-zinc-900 border border-zinc-200/60 rounded-xl">
              <Activity className="w-4.5 h-4.5" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Total Visits</span>
              <div className="flex items-baseline space-x-1.5">
                <h3 className="text-2xl font-bold text-zinc-900">{totalViews}</h3>
                <span className="text-[10px] font-bold text-zinc-550">+12%</span>
              </div>
            </div>
          </div>

          {/* Clicks */}
          <div className="p-2 md:p-5 bg-white border border-zinc-200 rounded-2xl shadow-[0_1px_2px_rgba(0,0,0,0.01)] flex items-center space-x-4">
            <div className="p-2.5 bg-zinc-50 text-zinc-900 border border-zinc-200/60 rounded-xl">
              <MousePointerClick className="w-4.5 h-4.5" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Profile Clicks</span>
              <div className="flex items-baseline space-x-1.5">
                <h3 className="text-2xl font-bold text-zinc-900">{totalClicks}</h3>
                <span className="text-[10px] font-bold text-zinc-550">+8%</span>
              </div>
            </div>
          </div>

          {/* Connection Directory */}
          <div className="p-2 md:p-5 bg-white border border-zinc-200 rounded-2xl shadow-[0_1px_2px_rgba(0,0,0,0.01)] flex items-center space-x-4">
            <div className="p-2.5 bg-zinc-50 text-zinc-900 border border-zinc-200/60 rounded-xl">
              <Users className="w-4.5 h-4.5" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Connections</span>
              <div className="flex items-baseline space-x-1.5">
                <h3 className="text-2xl font-bold text-zinc-900">{connections.length}</h3>
                <span className="text-[10px] font-bold text-emerald-600">Live</span>
              </div>
            </div>
          </div>

          {/* Capture Ratio */}
          <div className="p-2 md:p-5 bg-white border border-zinc-200 rounded-2xl shadow-[0_1px_2px_rgba(0,0,0,0.01)] flex items-center space-x-4">
            <div className="p-2.5 bg-zinc-50 text-zinc-900 border border-zinc-200/60 rounded-xl">
              <CheckCircle className="w-4.5 h-4.5" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase md:tracking-wider text-zinc-400">Exchange Ratio</span>
              <div className="flex items-baseline space-x-1.5">
                <h3 className="text-xl font-bold text-zinc-900">{conversionRate}%</h3>
                <span className="text-[10px] font-bold text-zinc-400">of visits</span>
              </div>
            </div>
          </div>

        </div>

        {/* 3. Analytics Chart Board Frame */}
        <div className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-[0_1px_3px_rgba(0,0,0,0.01)] space-y-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <div className="space-y-0.5">
              <h3 className="text-sm font-bold text-zinc-950 flex items-center gap-1.5">
                <Activity className="w-4 h-4 text-zinc-500" /> Historic Interaction Analytics
              </h3>
              <p className="text-xs text-zinc-550">Tracking digital engagements, profile views, and connected cards over the past 7 days.</p>
            </div>

            {/* Metric Selector Buttons */}
            <div className="flex bg-zinc-100/80 p-1 rounded-xl border border-zinc-200/50">
              <button
                onClick={() => setActiveChartMetric('views')}
                className={`px-3 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${activeChartMetric === 'views' ? 'bg-white text-zinc-900 shadow-sm border border-zinc-200/45' : 'text-zinc-400 hover:text-zinc-650'}`}
              >
                Views
              </button>
              <button
                onClick={() => setActiveChartMetric('clicks')}
                className={`px-3 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${activeChartMetric === 'clicks' ? 'bg-white text-zinc-900 shadow-sm border border-zinc-200/45' : 'text-zinc-400 hover:text-zinc-650'}`}
              >
                Clicks
              </button>
              <button
                onClick={() => setActiveChartMetric('connections')}
                className={`px-3 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${activeChartMetric === 'connections' ? 'bg-white text-zinc-900 shadow-sm border border-zinc-200/45' : 'text-zinc-400 hover:text-zinc-650'}`}
              >
                Taps
              </button>
            </div>
          </div>

          {/* Custom React SVG Graph plotting */}
          <div className="pt-3 overflow-x-auto">
            <div className="min-w-[560px] h-36">
              <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="overflow-visible w-full h-full font-mono">
                {/* Grid Lines */}
                <line x1="0" y1="0" x2={chartWidth} y2="0" stroke="#f4f4f5" strokeWidth="1" />
                <line x1="0" y1={chartHeight / 2} x2={chartWidth} y2={chartHeight / 2} stroke="#f4f4f5" strokeWidth="1" />
                <line x1="0" y1={chartHeight} x2={chartWidth} y2={chartHeight} stroke="#e4e4e7" strokeWidth="1.5" />

                {/* Area path */}
                <path
                  d={`M 0,${chartHeight} L ${svgPoints} L ${chartWidth},${chartHeight} Z`}
                  fill="url(#chartGrad)"
                  className="opacity-5 transition-all duration-300"
                />

                {/* Main Line path */}
                <polyline
                  fill="none"
                  stroke={activeChartMetric === 'views' ? '#18181b' : activeChartMetric === 'clicks' ? '#3f3f46' : '#71717a'}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  points={svgPoints}
                  className="transition-all duration-300"
                />

                {/* Individual Dot Circles with Label Tooltips */}
                {ANALYTICS_DATA.map((d, ind) => {
                  const x = (ind / (ANALYTICS_DATA.length - 1)) * chartWidth;
                  const y = chartHeight - (d[activeChartMetric] / maxMetricVal) * chartHeight;
                  return (
                    <g key={ind} className="group cursor-pointer">
                      <circle
                        cx={x}
                        cy={y}
                        r="4.5"
                        fill="white"
                        stroke={activeChartMetric === 'views' ? '#18181b' : activeChartMetric === 'clicks' ? '#3f3f46' : '#71717a'}
                        strokeWidth="2.5"
                      />
                      <circle
                        cx={x}
                        cy={y}
                        r="9"
                        className="fill-transparent group-hover:fill-current group-hover:opacity-10 text-zinc-900"
                      />
                      <text
                        x={x}
                        y={y - 12}
                        textAnchor="middle"
                        className="font-mono text-[9px] font-bold fill-zinc-950 opacity-0 group-hover:opacity-100 transition-opacity bg-neutral-900 px-1 rounded"
                      >
                        {d[activeChartMetric]}
                      </text>
                    </g>
                  );
                })}

                <defs>
                  <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={activeChartMetric === 'views' ? '#18181b' : activeChartMetric === 'clicks' ? '#3f3f46' : '#71717a'} />
                    <stop offset="100%" stopColor="#ffffff" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Dates layout row under graph */}
            <div className="flex justify-between text-[10px] font-mono font-bold text-zinc-400 px-1 pt-2 label-spacing">
              {ANALYTICS_DATA.map((d, index) => (
                <span key={index}>{d.date}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Analytics
