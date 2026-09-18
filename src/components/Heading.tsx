import type { ReactNode, CSSProperties } from 'react';

export function Heading({ children, style }: { children: ReactNode; style?: CSSProperties }) {
  return (
    <h2
      style={{
        margin: 0,
        fontSize: 40,
        lineHeight: 1.2,
        fontWeight: 700,
        letterSpacing: '-0.02em',
        color: '#fdfdfd',
        ...style,
      }}
    >
      {children}
    </h2>
  );
}
