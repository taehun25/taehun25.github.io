
:root {
  --bg-top: #eefaff;
  --bg-main: #d9f2ff;
  --bg-bottom: #bfe7fb;
  --panel: rgba(255, 255, 255, 0.76);
  --panel-hover: rgba(255, 255, 255, 0.92);
  --border: rgba(31, 95, 140, 0.16);
  --text: #16364d;
  --muted: #58758a;
  --accent: #1976b5;
  --accent-soft: #2d668d;
  --warning: #916300;
  --shadow: 0 16px 40px rgba(42, 105, 145, 0.12);
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }

body {
  margin: 0;
  color: var(--text);
  font-family: Inter, "Noto Sans KR", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  background:
    radial-gradient(circle at 15% 8%, rgba(255,255,255,.95), transparent 28%),
    radial-gradient(circle at 82% 20%, rgba(122,211,255,.23), transparent 29%),
    linear-gradient(165deg, var(--bg-top) 0%, var(--bg-main) 45%, var(--bg-bottom) 100%);
  min-height: 100vh;
}

a { color: inherit; text-decoration: none; }
.container { width: min(1120px, calc(100% - 40px)); margin: 0 auto; }

.hero {
  min-height: 74vh;
  border-bottom: 1px solid var(--border);
  background: linear-gradient(180deg, rgba(255,255,255,.18), rgba(255,255,255,.02));
}

.nav {
  min-height: 76px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

.brand { font-weight: 800; letter-spacing: .09em; font-size: .95rem; color: #134c73; }
.nav-right, .nav-links { display: flex; align-items: center; }
.nav-right { gap: 24px; }
.nav-links { gap: 22px; }
.nav-links a { color: var(--muted); font-size: .9rem; transition: .2s; }
.nav-links a:hover { color: var(--accent); }

.lang-btn {
  border: 1px solid rgba(25,118,181,.22);
  color: #155780;
  background: rgba(255,255,255,.58);
  padding: 9px 14px;
  border-radius: 999px;
  cursor: pointer;
  font-weight: 700;
  transition: .2s;
  box-shadow: 0 4px 14px rgba(42,105,145,.06);
}
.lang-btn:hover { background: rgba(255,255,255,.9); transform: translateY(-1px); }

.hero-content { padding: 92px 0 104px; }
.eyebrow, .section-label, .section-number {
  color: var(--accent);
  font-weight: 700;
  letter-spacing: .08em;
  text-transform: uppercase;
}
.eyebrow { margin: 0; }

h1 {
  margin: 18px 0 26px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: clamp(3.7rem, 9vw, 7.7rem);
  line-height: .9;
  letter-spacing: -.06em;
  color: #123b59;
}
.name-ko { font-size: .43em; letter-spacing: -.03em; color: #447995; }
.hero-description {
  max-width: 790px;
  margin: 0;
  color: var(--muted);
  font-size: clamp(1.04rem, 2vw, 1.28rem);
  line-height: 1.8;
}

.hero-chips, .chips { display: flex; flex-wrap: wrap; gap: 10px; }
.hero-chips { margin-top: 30px; }
.hero-chips span, .chips span {
  padding: 8px 12px;
  border: 1px solid rgba(25,118,181,.17);
  background: rgba(255,255,255,.52);
  color: #245f86;
  border-radius: 999px;
  font-size: .9rem;
}

.section { padding-top: 88px; }
.section-heading {
  display: grid;
  grid-template-columns: 58px 1fr;
  gap: 8px;
  align-items: start;
  margin-bottom: 26px;
}
.section-number { padding-top: 9px; }
.section-label { margin: 0 0 7px; font-size: .78rem; }
.section h2 {
  margin: 0;
  font-size: clamp(2rem, 4vw, 3.35rem);
  letter-spacing: -.04em;
  color: #183f5c;
}
.stack, .publication-list { display: grid; gap: 16px; }

.card {
  border: 1px solid var(--border);
  border-radius: 22px;
  background: linear-gradient(180deg, rgba(255,255,255,.86), rgba(255,255,255,.66));
  box-shadow: var(--shadow);
  backdrop-filter: blur(13px);
}
.education-card, .experience-card, .skill-card, .honor-card, .publication-card { padding: 26px; }
.card-top { display: flex; justify-content: space-between; gap: 20px; align-items: flex-start; }
h3 { margin: 0 0 8px; font-size: 1.2rem; line-height: 1.45; color: #173d59; }
p { line-height: 1.7; }
.accent { margin: 0; color: var(--accent-soft); }
.muted { color: var(--muted); }
.date { white-space: nowrap; color: var(--muted); font-size: .92rem; }
.meta-row { margin-top: 15px; display: flex; gap: 14px; }
.meta-row span { min-width: 82px; color: var(--muted); }

.role-grid { margin-top: 25px; display: grid; grid-template-columns: repeat(2,1fr); gap: 16px; }
.role-item { padding-top: 17px; border-top: 1px solid var(--border); display: grid; gap: 6px; }
.role-item span { color: var(--muted); font-size: .9rem; }

.publication-card { display: block; transition: transform .2s, border-color .2s, background .2s; }
.publication-card:hover {
  transform: translateY(-4px);
  border-color: rgba(25,118,181,.35);
  background: var(--panel-hover);
}
.publication-card p { margin: 7px 0 0; }
.pub-top { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 10px; margin-bottom: 13px; }
.pub-type { color: var(--accent); font-size: .82rem; font-weight: 700; }
.status-badge {
  border: 1px solid rgba(145,99,0,.18);
  background: rgba(255,245,208,.7);
  color: var(--warning);
  padding: 5px 9px;
  border-radius: 999px;
  font-size: .74rem;
  font-weight: 700;
}
.open-link { display: inline-block; margin-top: 18px; color: var(--accent); font-weight: 700; font-size: .88rem; }

.skills-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 16px; }
.honors-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 16px; }
.honor-card { display: flex; gap: 16px; align-items: flex-start; }
.award-symbol {
  width: 44px; height: 44px; flex: 0 0 44px;
  display: grid; place-items: center;
  border-radius: 13px;
  background: rgba(25,118,181,.09);
  color: var(--accent);
  font-size: 1.2rem;
}
.honor-card p { margin: 4px 0 0; }

footer { padding: 88px 0 34px; }
.footer-content {
  padding-top: 24px;
  border-top: 1px solid var(--border);
  display: flex;
  justify-content: space-between;
  gap: 20px;
}
.footer-content p { margin: 0; }

@media (max-width: 880px) {
  .nav-links { display: none; }
  .skills-grid { grid-template-columns: 1fr; }
}
@media (max-width: 720px) {
  .container { width: min(100% - 28px, 1120px); }
  .hero { min-height: auto; }
  .hero-content { padding: 70px 0 82px; }
  h1 { font-size: clamp(3.4rem, 18vw, 5.6rem); }
  .section { padding-top: 68px; }
  .section-heading { grid-template-columns: 42px 1fr; }
  .card-top { flex-direction: column; gap: 10px; }
  .date { white-space: normal; }
  .role-grid, .honors-grid { grid-template-columns: 1fr; }
  .footer-content { flex-direction: column; }
}
