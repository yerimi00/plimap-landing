import type { ReactNode } from 'react';

export function Eyebrow({ color = 'neon', children }: { color?: 'neon' | 'muted'; children: ReactNode }) {
  return (
    <span
      style={{
        fontSize: 12,
        letterSpacing: '0.08em',
        color: color === 'neon' ? '#c8f940' : 'rgba(253,253,253,0.5)',
      }}
    >
      {children}
    </span>
  );
}
