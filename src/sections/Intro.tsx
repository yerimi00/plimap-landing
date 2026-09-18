export function Intro() {
  return (
    <section
      id="intro"
      style={{
        padding: '72px 24px 64px',
        display: 'flex',
        flexDirection: 'column',
        gap: 40,
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: 'repeating-linear-gradient(90deg, rgba(200,249,64,0.05) 0 2px, transparent 2px 18px)',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: -160,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 640,
          height: 420,
          background: 'radial-gradient(ellipse at center, rgba(200,249,64,0.18), rgba(12,13,15,0) 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ fontSize: 12, letterSpacing: '0.08em', color: 'rgba(253,253,253,0.45)' }}>2026. 09. 18</div>

      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 40 }}>
        <div data-reveal style={{ flex: '1 1 360px', display: 'flex', flexDirection: 'column', gap: 24, textAlign: 'left' }}><h1
            style={{
              margin: 0,
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: 16,
              fontSize: 40,
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: '#fdfdfd',
            }}
          >
            <span>지도 위에서 발견하는</span>
            <span style={{ width: 56, height: 2, background: 'rgba(253,253,253,0.35)' }} />
            <span>
              새로운 <span style={{ color: '#c8f940' }}>플레이리스트</span>
            </span>
          </h1>
          <img src="/uploads/plimap-logo.svg" alt="PLIMAP" style={{ width: '100%', maxWidth: 280, height: 'auto' }} />

          

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 420 }}>
            <span style={{ fontSize: 15, fontWeight: 700, color: '#c8f940' }}>Overview</span>
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.7, color: 'rgba(253,253,253,0.65)' }}>
              PLIMAP은 기존의 개인화된 음악 취향의 틀에서 벗어나, 지금 내가 서 있는 이 장소에 남겨진 음악을 따라
              익명의 누군가와 취향을 나누고, 새로운 음악을 우연히 발견하는 위치 기반 음악 큐레이션 서비스에요.
            </p>
          </div>

          <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <span style={{ fontSize: 12, letterSpacing: '0.06em', color: 'rgba(253,253,253,0.45)' }}>
                PLAN &amp; DESIGN
              </span>
              <span style={{ fontSize: 14, color: '#fdfdfd' }}>임효리</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <span style={{ fontSize: 12, letterSpacing: '0.06em', color: 'rgba(253,253,253,0.45)' }}>FRONTEND</span>
              <span style={{ fontSize: 14, color: '#fdfdfd' }}>이승준</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <span style={{ fontSize: 12, letterSpacing: '0.06em', color: 'rgba(253,253,253,0.45)' }}>BACKEND</span>
              <span style={{ fontSize: 14, color: '#fdfdfd' }}>이예림 주보경</span>
            </div>
          </div>
        </div>

        <img
          data-reveal
          src="/uploads/cropped/hero-mockup.png"
          alt="PLIMAP 앱 목업"
          style={{
            flex: '1 1 300px',
            maxWidth: 420,
            width: '100%',
            height: 'auto',
            filter: 'drop-shadow(0 20px 60px rgba(200,249,64,0.2))',
          }}
        />
      </div>
    </section>
  );
}
