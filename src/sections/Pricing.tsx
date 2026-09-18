import { plans } from '../data';

export function Pricing() {
  return (
    <section
      id="pricing"
      style={{
        padding: '112px 24px',
        display: 'flex',
        flexDirection: 'column',
        gap: 48,
        borderTop: '1px solid rgba(200,249,64,0.1)',
      }}
    >
      <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'center', textAlign: 'center' }}>
        <span style={{ fontSize: 12, color: '#c8f940', letterSpacing: '0.08em' }}>MONETIZATION</span>
        <h2
          style={{
            margin: 0,
            fontSize: 40,
            lineHeight: 1.2,
            fontWeight: 700,
            letterSpacing: '-0.02em',
            color: '#fdfdfd',
          }}
        >
          수익 모델
        </h2>
        <p style={{ margin: 0, fontSize: 15, lineHeight: 1.7, color: 'rgba(253,253,253,0.7)', maxWidth: 560 }}>
          국내 로컬 마케팅 시장 15조원+. 장소 기반 콘텐츠의 경제적 가치를 수익으로 연결합니다.
        </p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, alignItems: 'stretch' }}>
        {plans.map((pl) => (
          <div
            key={pl.name}
            data-reveal
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 20,
              padding: '32px 28px',
              borderRadius: 24,
              border: `1px solid ${pl.border}`,
              background: pl.bg,
              color: pl.fg,
              position: 'relative',
            }}
          >
            {pl.hot && (
              <span
                style={{
                  position: 'absolute',
                  top: -12,
                  left: 28,
                  padding: '4px 10px',
                  borderRadius: 999,
                  background: '#fdfdfd',
                  color: '#0c0d0f',
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                }}
              >
                CORE
              </span>
            )}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <span style={{ fontSize: 12, letterSpacing: '0.06em', opacity: 0.7 }}>{pl.label}</span>
              <span style={{ fontSize: 24, fontWeight: 700, letterSpacing: '-0.01em' }}>{pl.name}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
              <span style={{ fontSize: 48, fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1 }}>{pl.price}</span>
              <span style={{ fontSize: 13, opacity: 0.7 }}>{pl.unit}</span>
            </div>
            <p style={{ margin: 0, fontSize: 13, lineHeight: 1.6, opacity: 0.8 }}>{pl.desc}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 'auto' }}>
              {pl.items.map((it) => (
                <div key={it} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 13, lineHeight: 1.5 }}>
                  <span style={{ width: 16, height: 16, borderRadius: '50%', flex: 'none', marginTop: 2, background: pl.dot }} />
                  {it}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
