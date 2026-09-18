import { marquee } from '../data';

export function Marquee() {
  return (
    <div
      style={{
        overflow: 'hidden',
        padding: '16px 0',
      }}
    >
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {marquee.map((m) => (
          <span key={m} style={{ padding: '8px 32px', fontSize: 13, color: 'rgba(253,253,253,0.55)', whiteSpace: 'nowrap' }}>
            {m} <span style={{ color: '#c8f940', marginLeft: 32 }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
