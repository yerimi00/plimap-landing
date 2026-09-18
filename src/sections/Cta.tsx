import { bars } from '../data';

export function Cta() {
  return (
    <section
      id="cta"
      style={{
        padding: '120px 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: 28,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          bottom: -200,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 700,
          height: 500,
          background: 'radial-gradient(ellipse at center, rgba(200,249,64,0.2), rgba(12,13,15,0) 70%)',
          pointerEvents: 'none',
        }}
      />
      <div data-reveal style={{ display: 'flex', gap: 4, alignItems: 'flex-end', height: 36 }}>
        {Array.from({ length: bars }).map((_, i) => (
          <span key={i} style={{ width: 4, height: 36, borderRadius: 2, background: '#c8f940' }} />
        ))}
      </div>
      <h2
        data-reveal
        style={{
          margin: 0,
          fontSize: 44,
          lineHeight: 1.15,
          fontWeight: 800,
          letterSpacing: '-0.03em',
          color: '#fdfdfd',
        }}
      >
        지금 이 장소에,
        <br />
        <span style={{ color: '#c8f940' }}>당신의 노래를 남겨보세요</span>
      </h2>
      <p style={{ margin: 0, fontSize: 15, lineHeight: 1.7, color: 'rgba(253,253,253,0.7)', maxWidth: 460 }} data-reveal>
        반경 500m 안의 음악 지도가 당신을 기다리고 있어요.
      </p>
      <div data-reveal style={{ display: 'flex', gap: 12 }}>
        <a
          href="#"
          className="btn-neon"
          style={{
            padding: '14px 28px',
            background: 'linear-gradient(180deg,#c8f940,#fcff98)',
            color: '#0c0d0f',
            borderRadius: 999,
            fontSize: 15,
            fontWeight: 600,
            boxShadow: '0 3px 8px rgba(0,0,0,0.7)',
          }}
        >
          App Store
        </a>
        <a
          href="#"
          className="btn-neon"
          style={{
            padding: '14px 28px',
            background: 'linear-gradient(180deg,#c8f940,#fcff98)',
            color: '#0c0d0f',
            borderRadius: 999,
            fontSize: 15,
            fontWeight: 600,
            boxShadow: '0 3px 8px rgba(0,0,0,0.7)',
          }}
        >
          Google Play
        </a>
      </div>
    </section>
  );
}
