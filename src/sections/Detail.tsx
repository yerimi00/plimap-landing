import { features } from '../data';
import { Eyebrow } from '../components/Eyebrow';
import { Heading } from '../components/Heading';
import { Tag } from '../components/Tag';

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
        <Eyebrow>05 — FEATURES</Eyebrow>
        <Heading>
          사람들의 감정을 담아
          <br />장소에 노래를 가볍게 남기는 기능
        </Heading>
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
                  <Tag key={t}>{t}</Tag>
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
