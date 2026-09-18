import { Eyebrow } from '../components/Eyebrow';

export function StoryIntro() {
  return (
    <section id="story" style={{ padding: '112px 24px', display: 'flex', flexDirection: 'column' }}>
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
    </section>
  );
}
