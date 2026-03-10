export type NavTab = 'contents' | 'home' | 'journal';

interface BottomNavProps {
  active: NavTab;
  onNavigate: (tab: NavTab) => void;
}

export function BottomNav({ active, onNavigate }: BottomNavProps) {
  return (
    <nav className="flex items-center justify-around bg-white/90 backdrop-blur-sm rounded-b-3xl px-6 py-3.5 mt-auto flex-shrink-0 border-t border-[var(--color-border)]">
      {/* Table of Contents */}
      <button
        onClick={() => onNavigate('contents')}
        className={`flex flex-col items-center gap-1 transition-colors ${
          active === 'contents' ? 'text-[var(--color-accent)]' : 'text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]'
        }`}
      >
        {/* Grid/list icon */}
        <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="7" height="7" rx="2" stroke="currentColor" strokeWidth="1.6" fill={active === 'contents' ? 'currentColor' : 'none'} fillOpacity="0.15" />
          <rect x="3" y="14" width="7" height="7" rx="2" stroke="currentColor" strokeWidth="1.6" fill={active === 'contents' ? 'currentColor' : 'none'} fillOpacity="0.15" />
          <path d="M14 5h7M14 9h5M14 16h7M14 20h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
        <span className="text-[10px] font-medium">Contents</span>
      </button>

      {/* Home — larger center icon */}
      <button
        onClick={() => onNavigate('home')}
        className={`flex flex-col items-center gap-1 transition-colors ${
          active === 'home' ? 'text-[var(--color-accent)]' : 'text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]'
        }`}
      >
        {/* Lotus/zen icon */}
        <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14 22 C14 22 6 17 6 11.5 C6 8 8.5 6 11 7.5 C12.5 8.4 14 10 14 10 C14 10 15.5 8.4 17 7.5 C19.5 6 22 8 22 11.5 C22 17 14 22 14 22Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
            fill={active === 'home' ? 'currentColor' : 'none'}
            fillOpacity="0.15"
          />
        </svg>
        <span className="text-[10px] font-medium">Home</span>
      </button>

      {/* Journal */}
      <button
        onClick={() => onNavigate('journal')}
        className={`flex flex-col items-center gap-1 transition-colors ${
          active === 'journal' ? 'text-[var(--color-accent)]' : 'text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]'
        }`}
      >
        {/* Notebook/pen icon */}
        <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6 3h10a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2z"
            stroke="currentColor"
            strokeWidth="1.6"
            fill={active === 'journal' ? 'currentColor' : 'none'}
            fillOpacity="0.15"
          />
          <path d="M8 8h6M8 12h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M18 8l2.5-2.5a1 1 0 011.4 1.4L19.4 9.4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
        <span className="text-[10px] font-medium">Journal</span>
      </button>
    </nav>
  );
}
