import { goals } from '../data';

export function Product() {
  return (
    <section
      id="product"
      style={{
        padding: '112px 24px',
        display: 'flex',
        flexDirection: 'column',
        gap: 48,
        borderTop: '1px solid rgba(200,249,64,0.1)',
      }}
    >
      <div data-reveal style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 14 }}>
        <span style={{ fontSize: 12, color: '#c8f940', letterSpacing: '0.08em' }}>03 — SERVICE CONCEPT</span>
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
          플레이리스트(Playlist)와 지도(Map)의 만남
        </h2>
        <p style={{ margin: 0, fontSize: 15, lineHeight: 1.7, color: 'rgba(253,253,253,0.7)', maxWidth: 560 }}>
          지도 위에 펼쳐지는 당신의 음악 취향과 감성을 자유롭게 공유해 보세요.
        </p>
      </div>
      <div
        data-reveal
        className="combo-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr auto 1fr',
          gap: 16,
          alignItems: 'center',
          padding: '36px 28px',
          borderRadius: 24,
          border: '1px solid rgba(200,249,64,0.12)',
          background: 'rgba(200,249,64,0.03)',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, textAlign: 'center' }}>
          <div style={{ width: 56, height: 56, borderRadius: '50% 50% 50% 50% / 40% 40% 60% 60%', background: '#c8f940' }} />
          <span style={{ fontSize: 15, color: 'rgba(253,253,253,0.8)' }}>원하는 장소에</span>
        </div>
        <span style={{ fontSize: 28, color: 'rgba(253,253,253,0.4)' }}>+</span>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, textAlign: 'center' }}>
          <div style={{ width: 56, height: 56, borderRadius: '50%', border: '3px solid #fdfdfd' }} />
          <span style={{ fontSize: 15, color: 'rgba(253,253,253,0.8)' }}>음악을 남겨서</span>
        </div>
        <span style={{ fontSize: 28, color: 'rgba(253,253,253,0.4)' }}>=</span>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, textAlign: 'center' }}>
          <img src="/uploads/logo.png" alt="PLIMAP" style={{ width: 56, height: 56, borderRadius: 14 }} />
          <span style={{ fontSize: 15, color: 'rgba(253,253,253,0.8)' }}>
            나만의 <b style={{ color: '#c8f940' }}>플레이리스트</b>를
          </span>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
        {goals.map((g) => (
          <div
            key={g.hi}
            data-reveal
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
              padding: 28,
              borderRadius: 16,
              border: '1px solid rgba(200,249,64,0.12)',
              background: 'rgba(200,249,64,0.03)',
            }}
          >
            <div
              style={{
                aspectRatio: '1',
                borderRadius: 12,
                background: '#0c0d0f',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
              }}
            >
              <img src={g.icon} alt={`${g.hi}${g.rest}`} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
            <p style={{ margin: 0, fontSize: 18, fontWeight: 600, lineHeight: 1.4, color: '#fdfdfd' }}>
              <span style={{ color: '#c8f940' }}>{g.hi}</span>
              {g.rest}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
