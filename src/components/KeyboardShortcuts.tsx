'use client';

import { useState, useEffect } from 'react';

interface KeyboardShortcutsProps {
  className?: string;
}

export default function KeyboardShortcuts({
  className = ''
}: KeyboardShortcutsProps) {
  const [isVisible, setIsVisible] = useState(false);

  const shortcuts = [
    { key: '←', description: 'Previous month' },
    { key: '→', description: 'Next month' },
    { key: 'T', description: 'Go to today' },
    { key: 'ESC', description: 'Close modal' },
    { key: '?', description: 'Show shortcuts' }
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '?' || e.key === '/') {
        e.preventDefault();
        setIsVisible(!isVisible);
      }
      if (e.key === 'Escape' && isVisible) {
        setIsVisible(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isVisible]);

  return (
    <>
      {/* Keyboard shortcuts button */}
      <button
        onClick={() => setIsVisible(true)}
        className={`fixed bottom-4 right-4 bg-glass-white/10 backdrop-blur-lg border border-glass-white/20 rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-glass-white/15 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent-blue/50 ${className}`}
        aria-label="Show keyboard shortcuts"
        title="Press ? for shortcuts"
      >
        <svg
          className="w-5 h-5 text-text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>

      {/* Shortcuts modal */}
      {isVisible && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsVisible(false)}
        >
          <div
            className="bg-black/80 backdrop-blur-3xl border border-glass-white/10 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)] max-w-md w-full p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-text-primary">
                Keyboard Shortcuts
              </h2>
              <button
                onClick={() => setIsVisible(false)}
                className="group bg-glass-white/10 backdrop-blur-md border border-glass-white/20 rounded-full w-8 h-8 flex items-center justify-center hover:bg-glass-white/20 hover:scale-110 transition-all duration-200"
                aria-label="Close shortcuts"
              >
                <svg
                  className="w-4 h-4 text-text-secondary group-hover:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="space-y-2">
              {shortcuts.map((shortcut) => (
                <div
                  key={shortcut.key}
                  className="flex items-center justify-between p-3 bg-glass-secondary/5 backdrop-blur-md rounded-xl border border-glass-white/10"
                >
                  <kbd className="bg-glass-white/20 backdrop-blur-md border border-glass-white/30 rounded-lg px-3 py-1 text-sm font-mono text-text-primary">
                    {shortcut.key}
                  </kbd>
                  <span className="text-text-secondary text-sm">
                    {shortcut.description}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-glass-white/10">
              <p className="text-xs text-text-tertiary text-center">
                Press ESC to close this dialog
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
