import type { ComponentPropsWithoutRef } from 'react';

interface PanelProps extends ComponentPropsWithoutRef<'div'> {
  radius?: 16 | 24;
}

export function Panel({ radius = 16, style, children, ...rest }: PanelProps) {
  return (
    <div
      style={{
        borderRadius: radius,
        border: '1px solid rgba(200,249,64,0.12)',
        background: 'rgba(200,249,64,0.03)',
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
