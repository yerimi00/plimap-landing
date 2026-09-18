import { useState } from 'react';
import { reviews, faqData } from '../data';
import { Eyebrow } from '../components/Eyebrow';
import { Heading } from '../components/Heading';
import { Panel } from '../components/Panel';

export function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faq"
      style={{
        padding: '112px 24px',
        display: 'flex',
        flexDirection: 'column',
        gap: 48,
        borderTop: '1px solid rgba(200,249,64,0.1)',
      }}
    >
      <div data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 620 }}>
        <Eyebrow>06 — REVIEW &amp; Q&amp;A</Eyebrow>
        <Heading>먼저 써본 사람들의 이야기</Heading>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
        {reviews.map((r) => (
          <Panel key={r.name + r.quote} data-reveal style={{ display: 'flex', flexDirection: 'column', gap: 16, padding: 28 }}>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.65, color: '#fdfdfd' }}>“{r.quote}”</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 'auto' }}>
              <span style={{ width: 32, height: 32, borderRadius: '50%', background: 'rgba(200,249,64,0.15)' }} />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: '#fdfdfd' }}>{r.name}</span>
                <span style={{ fontSize: 12, color: 'rgba(253,253,253,0.55)' }}>{r.meta}</span>
              </div>
            </div>
          </Panel>
        ))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {faqData.map((q, i) => {
          const open = openIndex === i;
          return (
            <Panel key={q.q} data-reveal style={{ overflow: 'hidden' }}>
              <button
                onClick={() => setOpenIndex(open ? -1 : i)}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: 16,
                  padding: '20px 24px',
                  background: 'transparent',
                  border: 0,
                  color: '#fdfdfd',
                  fontSize: 17,
                  fontWeight: 600,
                  textAlign: 'left',
                  cursor: 'pointer',
                }}
              >
                <span>{q.q}</span>
                <span style={{ color: '#c8f940', fontSize: 20, flex: 'none' }}>{open ? '−' : '+'}</span>
              </button>
              {open && (
                <p style={{ margin: 0, padding: '0 24px 22px', fontSize: 15, lineHeight: 1.7, color: 'rgba(253,253,253,0.72)' }}>
                  {q.a}
                </p>
              )}
            </Panel>
          );
        })}
      </div>
    </section>
  );
}
