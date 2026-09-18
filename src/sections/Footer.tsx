export function Footer() {
  return (
    <footer
      style={{
        padding: '32px 24px',
        borderTop: '1px solid rgba(200,249,64,0.12)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: 13,
        color: 'rgba(253,253,253,0.5)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <img src="/uploads/logo.png" alt="PLIMAP" style={{ width: 20, height: 20, borderRadius: 5 }} />
        <span style={{ fontWeight: 700, letterSpacing: '0.04em', color: 'rgba(253,253,253,0.7)' }}>PLIMAP</span>
      </div>
      <span>© 2026 PLIMAP · UMC 10th</span>
    </footer>
  );
}
