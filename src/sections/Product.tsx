import { goals } from '../data';
import { Eyebrow } from '../components/Eyebrow';
import { Heading } from '../components/Heading';
import { Panel } from '../components/Panel';

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
        <Eyebrow>03 — SERVICE CONCEPT</Eyebrow>
        <Heading>플레이리스트(Playlist)와 지도(Map)의 만남</Heading>
        <p style={{ margin: 0, fontSize: 15, lineHeight: 1.7, color: 'rgba(253,253,253,0.7)', maxWidth: 680 }}>
          음악으로 순간을 기억하고 싶은 20대를 위해, 소비만 기록되고 취향의 서사는 사라지는 음악 서비스의 한계를
          해결하고자, 지도 위에서 음악을 아카이빙하고 공유하는 소셜 서비스를 통해, 개인의 음악 취향이 곧 나만의
          여정 지도가 되는 경험을 제공해요.
        </p>
      </div>
      <img
        data-reveal
        src="/uploads/cropped/logo-mean.png"
        alt="원하는 장소에 + 음악을 남겨서 = 나만의 플레이리스트를"
        style={{ width: '100%', borderRadius: 24, height: 'auto' }}
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
        {goals.map((g) => (
          <Panel key={g.hi} data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 16, padding: 28 }}>
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
          </Panel>
        ))}
      </div>
    </section>
  );
}
