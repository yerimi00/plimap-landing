import { NeonButton } from '../components/NeonButton';

export function Nav() {
  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '14px 24px',
        background: 'rgba(12,13,15,0.82)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(200,249,64,0.14)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <img
          src="/uploads/logo.png"
          alt="PLIMAP"
          style={{ width: 44, height: 44, borderRadius: 10, display: 'block' }}
        />
        <span style={{ fontWeight: 800, fontSize: 22, letterSpacing: '0.04em', color: '#fdfdfd' }}>PLIMAP</span>
      </div>
      <div style={{ display: 'flex', gap: 22, fontSize: 16, color: 'rgba(253,253,253,0.72)' }}>
        <a href="#story" style={{ color: 'inherit' }}>스토리</a>
        <a href="#product" style={{ color: 'inherit' }}>소개</a>
        <a href="#strength" style={{ color: 'inherit' }}>강점</a>
        <a href="#detail" style={{ color: 'inherit' }}>기능</a>
        <a href="#pricing" style={{ color: 'inherit' }}>수익화</a>
        <a href="#faq" style={{ color: 'inherit' }}>Q&amp;A</a>
      </div>
      <NeonButton href="#cta" size="sm">시작하기</NeonButton>
    </nav>
  );
}
