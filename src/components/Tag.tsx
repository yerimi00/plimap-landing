import type { ReactNode } from 'react';

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span
      style={{
        padding: '5px 12px',
        borderRadius: 999,
        border: '1px solid #6d794d',
        background: '#c8f94014',
        fontSize: 12,
        color: '#efefef',
        whiteSpace: 'nowrap',
        flex: 'none',
      }}
    >
      {children}
    </span>
  );
}
