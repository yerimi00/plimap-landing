import { features } from '../data';

export function Detail() {
  return (
    <section
      id="detail"
      style={{
        padding: '112px 24px',
        display: 'flex',
        flexDirection: 'column',
        gap: 64,
        borderTop: '1px solid rgba(200,249,64,0.1)',
      }}
    >
      <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 620 }}>
        <span style={{ fontSize: 12, color: '#c8f940', letterSpacing: '0.08em' }}>05 — FEATURES</span>
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
          사람들의 감정을 담아
          <br />장소에 노래를 가볍게 남기는 기능
        </h2>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 80 }}>
        {features.map((f) => (
          <div
            key={f.n}
            data-reveal
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 40, alignItems: 'center' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, order: f.textOrder }}>
              <span style={{ fontSize: 13, color: '#c8f940' }}>
                {f.n} · {f.eyebrow}
              </span>
              <h3
                style={{
                  margin: 0,
                  fontSize: 20,
                  lineHeight: 1.3,
                  fontWeight: 700,
                  letterSpacing: '-0.01em',
                  color: '#fdfdfd',
                }}
              >
                {f.title}
              </h3>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.7, color: 'rgba(253,253,253,0.7)' }}>{f.desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {f.tags.map((t) => (
                  <span
                    key={t}
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
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div
              style={{
                order: f.imgOrder,
                aspectRatio: '9/16',
                maxHeight: 440,
                margin: '0 auto',
                width: '100%',
                maxWidth: 260,
                borderRadius: 32,
                border: '1px solid rgba(200,249,64,0.28)',
                background: '#0c0d0f',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 60px rgba(200,249,64,0.1)',
                overflow: 'hidden',
              }}
            >
              <img src={f.img} alt={`${f.eyebrow} 화면`} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
