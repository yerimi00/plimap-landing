import { stats, problems } from '../data';
import { Eyebrow } from '../components/Eyebrow';
import { Heading } from '../components/Heading';
import { Panel } from '../components/Panel';

export function Story() {
  return (
    <section
      id="story"
      style={{ padding: '112px 24px', display: 'flex', flexDirection: 'column', gap: 56 }}
    >
      <div data-reveal style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 20 }}>
        <Eyebrow>02 — BACKGROUND</Eyebrow>
        <div
          style={{
            padding: '22px 36px',
            borderRadius: 24,
            background: 'rgba(200,249,64,0.08)',
            border: '1px solid rgba(200,249,64,0.12)',
            fontSize: 28,
            fontWeight: 700,
            color: '#fdfdfd',
          }}
        >
          “ 혹시 지금 무슨 노래 듣고 있어요? ”
        </div>
        <p style={{ margin: 0, fontSize: 15, lineHeight: 1.8, color: 'rgba(253,253,253,0.72)', maxWidth: 620 }}>
          지하철에서도, 버스에서도, 카페에서도 사람들은 각자의 이어폰으로 저마다 다른 음악을 듣고 있어요. ‘나와 같은
          공간에 있는 저 사람은 지금 무슨 노래를 듣고 있을까?’ 이 서비스는 그 작은 호기심에서 출발했어요.
        </p>
      </div>

      <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <Eyebrow color="muted">USER RESEARCH · 20대 72명</Eyebrow>
        <Heading style={{ lineHeight: 1.25 }}>20대는 장소와 음악을 함께 경험하고 싶어해요</Heading>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
        {stats.map((s) => (
          <Panel key={s.label} data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: 28 }}>
            <span style={{ fontSize: 48, fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1, color: '#c8f940' }}>
              {s.value}
            </span>
            <span style={{ fontSize: 15, lineHeight: 1.55, color: 'rgba(253,253,253,0.75)' }}>{s.label}</span>
          </Panel>
        ))}
      </div>

      <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 24 }}>
        <Eyebrow color="muted">PAIN POINTS</Eyebrow>
        <Heading style={{ lineHeight: 1.25 }}>하지만 기존 서비스에는 한계가 있었어요</Heading>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
        {problems.map((p) => (
          <Panel key={p.n} data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 18, padding: 28 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 12, color: 'rgba(253,253,253,0.5)' }}>
              <span style={{ width: 8, height: 8, borderRadius: 2, background: 'rgba(200,249,64,0.3)' }} />
              {p.n} · {p.ref}
            </div>
            <h3 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: '#fdfdfd' }}>{p.title}</h3>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: 'rgba(253,253,253,0.72)' }}>{p.problem}</p>
            <div style={{ height: 1, background: 'linear-gradient(90deg, #c8f940, transparent)' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 12, color: '#c8f940' }}>
              <span style={{ width: 8, height: 8, borderRadius: 2, background: '#c8f940' }} />
              PLIMAP
            </div>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, fontWeight: 500, color: '#fdfdfd' }}>{p.solution}</p>
          </Panel>
        ))}
      </div>
      <div
        data-reveal
        style={{
          padding: 40,
          borderRadius: 24,
          background: 'linear-gradient(180deg,#c8f940,#fcff98)',
          color: '#0c0d0f',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
        }}
      >
        <span style={{ fontSize: 12, letterSpacing: '0.08em', fontWeight: 500 }}>INSIGHT</span>
        <p style={{ margin: 0, fontSize: 20, lineHeight: 1.45, fontWeight: 700 }}>
          다녀간 장소에서 새로운 음악을 발견하고,
          <br />그 기록이 휘발되지 않고 지도 위에 남는 경험이 필요해요
        </p>
      </div>
    </section>
  );
}
