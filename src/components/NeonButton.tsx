import type { ReactNode } from 'react';

const sizes = {
  sm: { padding: '10px 18px', fontSize: 13 },
  lg: { padding: '14px 28px', fontSize: 15 },
};

export function NeonButton({
  href,
  size = 'lg',
  children,
}: {
  href: string;
  size?: 'sm' | 'lg';
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className="btn-neon"
      style={{
        ...sizes[size],
        background: 'linear-gradient(180deg,#c8f940,#fcff98)',
        color: '#0c0d0f',
        borderRadius: 999,
        fontWeight: 600,
        boxShadow: '0 3px 8px rgba(0,0,0,0.7)',
      }}
    >
      {children}
    </a>
  );
}
