"use client";

import { GitHubCalendar } from 'react-github-calendar';

export function GithubHeatmap() {
  const explicitTheme = {
    light: ['#1a1a24', '#4a3b22', '#7a6238', '#a8874e', '#d4af37'],
    dark: ['#1a1a24', '#4a3b22', '#7a6238', '#a8874e', '#d4af37'],
  };

  return (
    <div className="w-full flex justify-center items-center p-4 bg-[#0a0a0c]/60 backdrop-blur-sm border border-gold-muted/20 rounded-sm">
      <GitHubCalendar 
        username="KavyaNagariya" 
        theme={explicitTheme}
        colorScheme="dark"
        fontSize={12}
        blockSize={12}
        blockMargin={4}
        style={{
            fontFamily: 'var(--font-iosevka)',
            color: '#c3a267'
        }}
      />
    </div>
  );
}