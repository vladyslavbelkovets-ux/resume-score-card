import { useEffect, useState } from 'react';

/** Count-up for the score, replayed on mount (i.e. every time V1 is shown). */
function useScoreCount(target = 87, duration = 1100, startDelay = 250) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(target);
      return;
    }
    let raf = 0;
    const timer = setTimeout(() => {
      const t0 = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - t0) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setValue(Math.round(target * eased));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, startDelay);
    return () => { clearTimeout(timer); cancelAnimationFrame(raf); };
  }, [target, duration, startDelay]);
  return value;
}

const ResumeImg = () => (
  <img
    className="resume"
    src="/assets/resume.png"
    alt="Resume preview — Yana Mykhailenko, Product Designer"
    width={422}
    height={473}
  />
);

/** Confetti of the "with score" variant (exported from Figma node 15354:38311). */
const DotsV1 = () => (
  <svg className="dots-overlay" width="508" height="536" viewBox="0 0 508 536" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="425.643" cy="58.1515" rx="3.73919" ry="3.20502" transform="rotate(11.5135 425.643 58.1515)" fill="#FFD166" />
    <ellipse cx="327.304" cy="29.8869" rx="3.73919" ry="3.20502" transform="rotate(11.5135 327.304 29.8869)" fill="#FFD166" />
    <circle cx="460.879" cy="77.8668" r="3.73919" transform="rotate(11.5135 460.879 77.8668)" fill="#3B71E3" />
    <ellipse cx="68.6336" cy="114.083" rx="3.73919" ry="3.20502" transform="rotate(11.5135 68.6336 114.083)" fill="#FFD166" />
    <ellipse cx="465.537" cy="142.777" rx="3.73919" ry="3.20502" transform="rotate(116.513 465.537 142.777)" fill="#FFD166" />
    <ellipse cx="97.4455" cy="156.166" rx="3.73919" ry="3.20502" transform="rotate(-91.5937 97.4455 156.166)" fill="#FFD166" />
    <ellipse cx="41.4455" cy="228.166" rx="3.73919" ry="3.20502" transform="rotate(-91.5937 41.4455 228.166)" fill="#FFD166" />
    <rect x="84.6582" y="176" width="8.19657" height="8.19657" rx="1" transform="rotate(26.5135 84.6582 176)" fill="#54A55C" />
    <ellipse opacity="0.73" cx="67.4884" cy="37.271" rx="3.02874" ry="2.59607" transform="rotate(165.513 67.4884 37.271)" fill="#FFD166" />
    <ellipse opacity="0.88" cx="133.289" cy="72.9627" rx="4.22529" ry="3.62167" transform="rotate(-22.4866 133.289 72.9627)" fill="#FFD166" />
    <ellipse opacity="0.88" cx="448.522" cy="207.872" rx="4.22529" ry="3.62167" transform="rotate(82.5134 448.522 207.872)" fill="#FFD166" />
    <ellipse opacity="0.88" cx="26.7338" cy="150.52" rx="4.22529" ry="3.62167" transform="rotate(-125.594 26.7338 150.52)" fill="#FFD166" />
    <ellipse opacity="0.88" cx="384.289" cy="104.962" rx="4.22529" ry="3.62167" transform="rotate(-22.4866 384.289 104.962)" fill="#FFD166" />
    <circle opacity="0.96" cx="94.9321" cy="78.9314" r="2.767" transform="rotate(3.51345 94.9321 78.9314)" fill="#3B71E3" />
    <rect opacity="0.99" x="35.2148" y="87.0625" width="5.24581" height="5.24581" rx="1" transform="rotate(121.513 35.2148 87.0625)" fill="#54A55C" />
    <circle opacity="0.96" cx="412.683" cy="137.277" r="2.767" transform="rotate(108.513 412.683 137.277)" fill="#3B71E3" />
    <circle opacity="0.96" cx="41.2457" cy="186.524" r="2.767" transform="rotate(-99.5937 41.2457 186.524)" fill="#3B71E3" />
    <rect opacity="0.76" x="25.5586" y="77.6543" width="7.54085" height="7.54085" rx="1" transform="rotate(-137.487 25.5586 77.6543)" fill="#54A55C" />
    <ellipse opacity="0.77" cx="498.452" cy="268.378" rx="2.58004" ry="2.21146" transform="rotate(-130.487 498.452 268.378)" fill="#FFD166" />
    <rect opacity="0.87" x="138.602" y="480.727" width="4.99991" height="4.99991" rx="1" transform="rotate(121.513 138.602 480.727)" fill="#54A55C" />
    <circle opacity="0.72" cx="357.589" cy="395.33" r="2.91657" transform="rotate(123.513 357.589 395.33)" fill="#3B71E3" />
  </svg>
);

/** Confetti of the "resume ready" variant (exported from Figma node 15366:103075). */
const DotsV2 = () => (
  <svg className="dots-overlay" width="508" height="472" viewBox="0 0 508 472" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="460.879" cy="13.8671" r="3.73919" transform="rotate(11.5135 460.879 13.8671)" fill="#3B71E3" />
    <ellipse cx="81.3035" cy="15.8869" rx="3.73919" ry="3.20502" transform="rotate(11.5135 81.3035 15.8869)" fill="#FFD166" />
    <ellipse cx="466.537" cy="55.7768" rx="3.73919" ry="3.20502" transform="rotate(116.513 466.537 55.7768)" fill="#FFD166" />
    <ellipse cx="60.3068" cy="80.8269" rx="3.73919" ry="3.20502" transform="rotate(-91.5937 60.3068 80.8269)" fill="#FFD166" />
    <ellipse cx="41.4455" cy="164.166" rx="3.73919" ry="3.20502" transform="rotate(-91.5937 41.4455 164.166)" fill="#FFD166" />
    <rect x="84.6582" y="112" width="8.19657" height="8.19657" rx="1" transform="rotate(26.5135 84.6582 112)" fill="#54A55C" />
    <ellipse opacity="0.88" cx="45.2892" cy="24.9625" rx="4.22529" ry="3.62167" transform="rotate(-22.4866 45.2892 24.9625)" fill="#FFD166" />
    <ellipse opacity="0.88" cx="448.522" cy="143.872" rx="4.22529" ry="3.62167" transform="rotate(82.5134 448.522 143.872)" fill="#FFD166" />
    <ellipse opacity="0.88" cx="26.7338" cy="86.5197" rx="4.22529" ry="3.62167" transform="rotate(-125.594 26.7338 86.5197)" fill="#FFD166" />
    <ellipse opacity="0.88" cx="438.289" cy="88.9622" rx="4.22529" ry="3.62167" transform="rotate(-22.4866 438.289 88.9622)" fill="#FFD166" />
    <rect opacity="0.99" x="35.2148" y="23.0627" width="5.24581" height="5.24581" rx="1" transform="rotate(121.513 35.2148 23.0627)" fill="#54A55C" />
    <circle opacity="0.96" cx="425.501" cy="14.5023" r="2.767" transform="rotate(108.513 425.501 14.5023)" fill="#3B71E3" />
    <circle opacity="0.96" cx="41.2457" cy="122.524" r="2.767" transform="rotate(-99.5937 41.2457 122.524)" fill="#3B71E3" />
    <circle opacity="0.96" cx="38.189" cy="60.1895" r="2.767" transform="rotate(-99.5937 38.189 60.1895)" fill="#3B71E3" />
    <rect opacity="0.76" x="25.5586" y="13.6543" width="7.54085" height="7.54085" rx="1" transform="rotate(-137.487 25.5586 13.6543)" fill="#54A55C" />
    <ellipse opacity="0.77" cx="498.452" cy="204.378" rx="2.58004" ry="2.21146" transform="rotate(-130.487 498.452 204.378)" fill="#FFD166" />
    <rect opacity="0.87" x="138.602" y="416.727" width="4.99991" height="4.99991" rx="1" transform="rotate(121.513 138.602 416.727)" fill="#54A55C" />
  </svg>
);

/** Preview v1 — "With score" (Figma node 15354:37789). */
export function CardWithScore() {
  const score = useScoreCount();
  return (
    <section className="card">
      <div className="score-num">{score}</div>
      <div className="badge-wrap">
        <div className="badge"><span className="msr">star</span><span>Top 14% of applicants</span></div>
      </div>
      <div className="headline">
        <h2>Strong score, Yana! 🎉</h2>
        <p>Your resume's ready to download and apply.</p>
      </div>
      <div className="chips">
        <div className="chip chip-1"><span className="chip-icon">🛡️</span><span>ATS-optimized</span></div>
        <div className="chip chip-2"><span className="chip-icon">📂</span><span>Ready for download</span></div>
      </div>
      <ResumeImg />
      <DotsV1 />
    </section>
  );
}

/** Preview v2 — "Resume ready" (Figma node 15366:102556). */
export function CardResumeReady() {
  return (
    <section className="card card-v2">
      <div className="headline">
        <h2>Your resume is ready, Yana! 🎉</h2>
        <p>Download it and start applying.</p>
      </div>
      <div className="chips">
        <div className="chip chip-1"><span className="chip-icon">🛡️</span><span>ATS-optimized</span></div>
        <div className="chip chip-2"><span className="chip-icon">👤</span><span>Recruiter-ready</span></div>
      </div>
      <ResumeImg />
      <DotsV2 />
    </section>
  );
}
