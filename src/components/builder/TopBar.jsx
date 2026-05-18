import useStore from '../../store';

export default function TopBar() {
  const mode = useStore((s) => s.mode);
  const viewport = useStore((s) => s.viewport);
  const blockCount = useStore((s) => s.blocks.length);
  const setMode = useStore((s) => s.setMode);
  const setViewport = useStore((s) => s.setViewport);
  const clearAll = useStore((s) => s.clearAll);

  return (
    <header className="flex items-center gap-3 px-4 h-12 bg-slate-900 border-b border-slate-800 flex-shrink-0 z-50">
      {/* Logo */}
      <div className="flex items-center gap-2 mr-2">
        <div className="w-6 h-6 rounded-sm bg-violet-600 flex items-center justify-center text-white font-display font-black text-sm">
          SF
        </div>
        <span className="font-display font-black text-white text-base tracking-tight hidden sm:block">SiteForge</span>
        <span className="text-slate-600 text-xs font-medium hidden md:block">Mini CMS</span>
      </div>

      {/* Block counter */}
      <div className="text-xs font-semibold text-slate-500 bg-slate-800 border border-slate-700 px-2 py-0.5 rounded-full">
        {blockCount} {blockCount === 1 ? 'block' : 'blocks'}
      </div>

      <div className="flex-1" />

      {/* Viewport toggle (edit mode only) */}
      {mode === 'edit' && (
        <div className="flex items-center gap-1 bg-slate-800 border border-slate-700 rounded-lg p-1">
          <button
            onClick={() => setViewport('desktop')}
            title="Desktop preview"
            className={`p-1 rounded-md transition-all ${viewport === 'desktop' ? 'bg-slate-600 text-white' : 'text-slate-500 hover:text-slate-300'}`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <path d="M8 21h8M12 17v4" />
            </svg>
          </button>
          <button
            onClick={() => setViewport('mobile')}
            title="Mobile preview"
            className={`p-1 rounded-md transition-all ${viewport === 'mobile' ? 'bg-slate-600 text-white' : 'text-slate-500 hover:text-slate-300'}`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <rect x="5" y="2" width="14" height="20" rx="2" />
              <circle cx="12" cy="18" r="1" fill="currentColor" stroke="none" />
            </svg>
          </button>
        </div>
      )}

      {/* Edit / Preview toggle */}
      <div className="flex items-center bg-slate-800 border border-slate-700 rounded-lg p-1 gap-1">
        <button
          onClick={() => setMode('edit')}
          className={`px-3 py-1 rounded-md text-xs font-semibold transition-all ${mode === 'edit' ? 'bg-slate-600 text-white' : 'text-slate-500 hover:text-slate-300'}`}
        >
          Edit
        </button>
        <button
          onClick={() => setMode('preview')}
          className={`px-3 py-1 rounded-md text-xs font-semibold transition-all ${mode === 'preview' ? 'bg-slate-600 text-white' : 'text-slate-500 hover:text-slate-300'}`}
        >
          Preview
        </button>
      </div>

      {/* Clear */}
      <button
        onClick={clearAll}
        className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-500 border border-slate-700 rounded-lg hover:text-red-400 hover:border-red-900 transition-all"
      >
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
          <polyline points="3 6 5 6 21 6" /><path d="M19 6l-1 14H6L5 6" /><path d="M10 11v6M14 11v6" />
        </svg>
        Clear
      </button>
    </header>
  );
}
