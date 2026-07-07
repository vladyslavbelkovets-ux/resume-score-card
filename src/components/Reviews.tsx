import { useRef, useState } from 'react';
import { IconButton } from '@universe-forma/ui-pes';

const REVIEWS = [
  { title: 'Best on the market', body: "I've been writing my resume for 14 years and wish this program had existed in high school. I've learned a lot from the formatting and detailed job descriptions.", author: 'Alexa Mitskevitch' },
  { title: 'Perfect template to write a good CV', body: 'Great recommendations for my resume! The process was easy and efficient.', author: 'Alexa Mitskevitch' },
  { title: 'Great experience!', body: 'This was a fantastic experience! The site was easy to navigate and did most of the work for me, resulting in a more appealing and professional resume.', author: 'Alexa Mitskevitch' },
  { title: 'Easy quick best resume ive made', body: 'An excellent tool that simplifies creating customized CVs for each job. It offers great layouts and AI assistance for content.', author: 'Alexa Mitskevitch' },
  { title: 'Great experience!', body: 'This was a fantastic experience! The site was easy to navigate and did most of the work for me, resulting in a more appealing and professional resume.', author: 'Alexa Mitskevitch' },
];

const DOTS = 10;
const STEP = 324; // card width + gap

const TpStar = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" fill="#00B67A" />
    <path d="M20.7381 10.1641H14.4371L12.4971 4.20312L10.5451 10.1641L4.24414 10.1531L9.34014 13.8421L7.39014 19.8031L12.4861 16.1141L17.5831 19.8031L15.6431 13.8421L20.7381 10.1641Z" fill="white" />
    <path d="M16.081 15.1829L15.645 13.8359L12.5 16.1069L16.081 15.1829Z" fill="#00B67A" />
  </svg>
);

function ReviewCard({ title, body, author }: (typeof REVIEWS)[number]) {
  return (
    <article className="review-card">
      <div className="stars-row">
        <div className="stars">{Array.from({ length: 5 }, (_, i) => <TpStar key={i} />)}</div>
        <span className="ago">5 hours ago</span>
      </div>
      <h3>{title}</h3>
      <p className="body">{body}</p>
      <p className="author">{author}</p>
    </article>
  );
}

export function Reviews() {
  const trackRef = useRef<HTMLDivElement>(null);
  const animating = useRef(false);
  const [activeDot, setActiveDot] = useState(0);
  // order of review indices in the track (rotated by the carousel)
  const [order, setOrder] = useState(() => REVIEWS.map((_, i) => i));

  const slide = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track || animating.current) return;
    animating.current = true;
    setActiveDot((d) => (d + dir + DOTS) % DOTS);
    if (dir === 1) {
      track.style.transition = 'transform .45s cubic-bezier(.22,1,.36,1)';
      track.style.transform = `translateX(-${STEP}px)`;
      track.addEventListener('transitionend', () => {
        track.style.transition = 'none';
        track.style.transform = 'none';
        setOrder((o) => [...o.slice(1), o[0]]);
        requestAnimationFrame(() => { animating.current = false; });
      }, { once: true });
    } else {
      track.style.transition = 'none';
      track.style.transform = `translateX(-${STEP}px)`;
      setOrder((o) => [o[o.length - 1], ...o.slice(0, -1)]);
      requestAnimationFrame(() => {
        track.style.transition = 'transform .45s cubic-bezier(.22,1,.36,1)';
        track.style.transform = 'none';
        track.addEventListener('transitionend', () => { animating.current = false; }, { once: true });
      });
    }
  };

  return (
    <section className="reviews">
      <div className="inner">
        <h2>What our users say</h2>
        <div className="meta-row">
          <div className="meta-left">
            <img src="/assets/trustpilot.svg" width={130} height={32} alt="Trustpilot" />
            <span className="vdiv" />
            <div className="rating">
              <span className="strong">Excellent</span>
              <span className="strong">•</span>
              <span className="strong">4,5</span>
              <span className="muted">out of 5</span>
            </div>
          </div>
          <div className="avatars">
            {[1, 2, 3, 4, 5, 6].map((i) => <img key={i} className="avatar" src={`/assets/avatar-${i}.png`} alt="" />)}
            <div className="avatar initials">FN</div>
            <div className="avatar initials">KJ</div>
          </div>
        </div>
      </div>

      <div className="strip-zone">
        <div className="strip-viewport">
          <div className="track" ref={trackRef}>
            {order.map((idx) => <ReviewCard key={idx} {...REVIEWS[idx]} />)}
          </div>
        </div>
        <IconButton
          variant="filled"
          color="action"
          className="nav-btn-pos nav-prev !size-12 !rounded-[12px] !bg-black/32 hover:!bg-black/40 backdrop-blur-[16px] !text-white"
          aria-label="Previous reviews"
          onClick={() => slide(-1)}
        >
          <span className="msr !text-[24px]">chevron_left</span>
        </IconButton>
        <IconButton
          variant="filled"
          color="action"
          className="nav-btn-pos nav-next !size-12 !rounded-[12px] !bg-black/32 hover:!bg-black/40 backdrop-blur-[16px] !text-white"
          aria-label="Next reviews"
          onClick={() => slide(1)}
        >
          <span className="msr !text-[24px]">chevron_right</span>
        </IconButton>
      </div>

      <div className="pagination">
        {Array.from({ length: DOTS }, (_, i) => (
          <span key={i} className={i === activeDot ? 'pdot active' : 'pdot'} />
        ))}
      </div>
    </section>
  );
}
