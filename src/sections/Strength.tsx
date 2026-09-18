import { strengths, axes } from '../data';
import { Eyebrow } from '../components/Eyebrow';
import { Heading } from '../components/Heading';
import { Panel } from '../components/Panel';

export function Strength() {
  return (
    <section
      id="strength"
      style={{
        padding: '112px 24px',
        display: 'flex',
        flexDirection: 'column',
        gap: 48,
        borderTop: '1px solid rgba(200,249,64,0.1)',
      }}
    >
      <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 640 }}>
        <Eyebrow>04 — WHY PLIMAP</Eyebrow>
        <Heading>
          장소에서 발견하고,
          <br />함께 채워가는 음악 경험을 한 번에
        </Heading>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
        {strengths.map((s) => (
          <div
            key={s.n}
            data-reveal
            style={{ display: 'flex', gap: 18, padding: 28, borderRadius: 16, background: '#fdfdfd', color: '#0c0d0f' }}
          >
            <span
              style={{
                flex: 'none',
                width: 32,
                height: 32,
                borderRadius: '50%',
                background: '#c8f940',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                fontSize: 14,
              }}
            >
              {s.n}
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <h3 style={{ margin: 0, fontSize: 20, fontWeight: 700 }}>{s.title}</h3>
              <p style={{ margin: 0, fontSize: 13, lineHeight: 1.6, color: 'rgba(12,13,15,0.72)' }}>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <Panel radius={24} data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 20, padding: 32 }}>
        <Eyebrow color="muted">POSITIONING</Eyebrow>
        <p style={{ margin: 0, fontSize: 20, fontWeight: 600, lineHeight: 1.5, color: '#fdfdfd' }}>
          장소에 음악을 남기는 경험을 통해 지도 · 음악 · SNS 사이의 비어 있던 영역을 채워요
        </p>
        <div className="axes-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
          {axes.map((a) => (
            <div
              key={a.label}
              style={{
                padding: 14,
                borderRadius: 10,
                textAlign: 'center',
                fontSize: 13,
                fontWeight: 500,
                background: a.bg,
                color: a.fg,
                border: `1px solid ${a.border}`,
              }}
            >
              {a.label}
            </div>
          ))}
        </div>
      </Panel>
    </section>
  );
}
