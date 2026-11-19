import Link from "next/link";

function Home() {
  return (
    <>
      <main className="page">
        <header className="header">
          <Link className="brand" href="/" aria-label="Luli — página inicial">
            <span className="brand-mark" aria-hidden="true">
              <svg viewBox="0 0 32 32" fill="none">
                <path
                  d="M7 16c0-5 4-9 9-9s9 4 9 9-4 9-9 9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="1 4"
                />
                <path
                  d="M13 18c0-2 1-3 3-3s3 1 3 3-1 3-3 3"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="1 4"
                />
              </svg>
            </span>
            <span>feito pela Luli</span>
          </Link>
          <span className="header-note">um cantinho feito à mão</span>
        </header>

        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="eyebrow-dot" />
              novidades sendo tecidas
            </p>
            <h1 id="hero-title">
              Um mundo de
              <br />
              <span>crochê</span> está
              <br />
              chegando.
            </h1>
            <p className="description">
              Receitas, ideias e carinho em cada ponto. Estou preparando um
              cantinho especial para compartilhar tudo isso com você.
            </p>
            <div className="coming-soon">
              <span className="coming-soon-icon" aria-hidden="true">
                ✿
              </span>
              <span>Em breve, linha por linha.</span>
            </div>
            <p className="signature">Com carinho, Luli ♡</p>
          </div>

          <div
            className="hero-art"
            aria-label="Ilustração de um novelo rosa e uma agulha de crochê"
          >
            <div className="art-sun" />
            <div className="art-sparkle sparkle-one">✳</div>
            <div className="art-sparkle sparkle-two">✦</div>
            <div className="art-sparkle sparkle-three">✧</div>
            <svg
              className="yarn-art"
              viewBox="0 0 460 430"
              role="img"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="yarn" x1="120" y1="110" x2="340" y2="340">
                  <stop stopColor="#F4A8B9" />
                  <stop offset="1" stopColor="#DB7895" />
                </linearGradient>
                <clipPath id="ball">
                  <path d="M230 80c82 0 148 66 148 148s-66 148-148 148S82 310 82 228 148 80 230 80Z" />
                </clipPath>
              </defs>
              <ellipse cx="231" cy="374" rx="131" ry="17" fill="#EED9D7" />
              <path
                d="M230 80c82 0 148 66 148 148s-66 148-148 148S82 310 82 228 148 80 230 80Z"
                fill="url(#yarn)"
              />
              <g
                clipPath="url(#ball)"
                fill="none"
                stroke="#FBE2E6"
                strokeWidth="7"
                strokeLinecap="round"
              >
                <path d="M104 146c71 34 130 74 250 172" />
                <path d="M85 187c76 22 161 77 266 139" />
                <path d="M84 232c82 4 157 39 252 95" />
                <path d="M112 108c78 53 151 126 237 236" />
                <path d="M164 82c36 72 105 165 190 229" />
                <path d="M220 80c2 67 34 162 122 236" />
                <path d="M278 91c-9 66 5 148 66 208" />
                <path d="M335 121c-26 56-23 120 22 158" />
                <path d="M90 280c70-21 166-20 272 12" />
                <path d="M116 330c73-46 162-65 227-64" />
                <path d="M151 367c48-55 114-89 170-104" />
              </g>
              <path
                d="M334 122 421 35c8-8 21-8 29 0s8 21 0 29l-87 87"
                fill="#F9DDE2"
                stroke="#B96980"
                strokeWidth="7"
                strokeLinejoin="round"
              />
              <path
                d="m334 122 28 29-20 20-29-28 21-21Z"
                fill="#D98AA0"
                stroke="#B96980"
                strokeWidth="6"
                strokeLinejoin="round"
              />
              <path
                d="M231 80c-28 20-50 47-66 77-18 33-27 69-26 106"
                fill="none"
                stroke="#FFF0F1"
                strokeWidth="8"
                strokeLinecap="round"
              />
            </svg>
            <div className="art-caption">
              <span className="caption-line" />
              feito com calma
            </div>
          </div>
        </section>

        <footer className="footer">
          <span>Um ponto de cada vez.</span>
          <span className="footer-heart" aria-hidden="true">
            ♡
          </span>
          <span>Feito à mão, com amor.</span>
        </footer>
      </main>

      <style jsx>{`
        :global(*) {
          box-sizing: border-box;
        }

        :global(html) {
          min-height: 100%;
          background: #fff9f6;
        }

        :global(body) {
          margin: 0;
          color: #51383f;
          font-family: "Avenir Next", Avenir, "Segoe UI", sans-serif;
        }

        .page {
          display: flex;
          min-height: 100vh;
          flex-direction: column;
          overflow: hidden;
          padding: 0 8.3%;
          background:
            radial-gradient(
              ellipse at 86% 44%,
              rgba(245, 220, 220, 0.3),
              transparent 35%
            ),
            #fff9f6;
        }

        .header {
          display: flex;
          height: 100px;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #f1e5e1;
        }

        .brand {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: #68414c;
          font-family: Georgia, serif;
          font-size: 19px;
          font-weight: 700;
          letter-spacing: -0.5px;
          text-decoration: none;
        }

        .brand-mark {
          display: grid;
          width: 36px;
          height: 36px;
          place-items: center;
          border-radius: 50%;
          background: #f8e5e7;
          color: #c8758b;
        }

        .brand-mark svg {
          width: 28px;
          height: 28px;
        }

        .header-note {
          color: #9c7d80;
          font-size: 11px;
          letter-spacing: 1.8px;
          text-transform: uppercase;
        }

        .hero {
          display: grid;
          width: 100%;
          max-width: 1200px;
          flex: 1;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 6%;
          margin: 0 auto;
          padding: 48px 0 58px;
        }

        .hero-copy {
          position: relative;
          z-index: 1;
          padding: 20px 0;
        }

        .eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 0 0 25px;
          color: #aa7580;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .eyebrow-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #d98da0;
          box-shadow: 0 0 0 4px #f7e7e8;
        }

        h1 {
          margin: 0;
          color: #51383f;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(44px, 5.2vw, 72px);
          font-weight: 400;
          letter-spacing: -2.8px;
          line-height: 1.08;
        }

        h1 span {
          color: #cb718a;
          font-style: italic;
        }

        .description {
          max-width: 420px;
          margin: 26px 0 0;
          color: #8e7375;
          font-size: 15px;
          line-height: 1.85;
        }

        .coming-soon {
          display: inline-flex;
          align-items: center;
          gap: 11px;
          margin-top: 30px;
          padding: 12px 17px;
          border: 1px solid #f0d9dc;
          border-radius: 30px;
          background: rgba(255, 255, 255, 0.55);
          color: #98616f;
          font-size: 13px;
          letter-spacing: 0.1px;
        }

        .coming-soon-icon {
          color: #d5889b;
          font-size: 18px;
          line-height: 1;
        }

        .signature {
          margin: 25px 0 0;
          color: #b18f91;
          font-family: Georgia, serif;
          font-size: 15px;
          font-style: italic;
        }

        .hero-art {
          position: relative;
          display: grid;
          min-height: 430px;
          place-items: center;
        }

        .art-sun {
          position: absolute;
          width: min(390px, 90%);
          aspect-ratio: 1;
          border: 1px solid rgba(218, 164, 170, 0.34);
          border-radius: 50%;
          background: rgba(248, 233, 230, 0.58);
          box-shadow:
            0 0 0 24px rgba(248, 233, 230, 0.3),
            0 0 0 25px rgba(218, 164, 170, 0.16);
        }

        .yarn-art {
          position: relative;
          width: min(100%, 460px);
          overflow: visible;
          filter: drop-shadow(0 15px 16px rgba(133, 77, 89, 0.12));
        }

        .art-sparkle {
          position: absolute;
          z-index: 1;
          color: #d99baa;
        }

        .sparkle-one {
          top: 15%;
          left: 12%;
          font-size: 24px;
        }

        .sparkle-two {
          top: 25%;
          right: 8%;
          color: #bd8c78;
          font-size: 20px;
        }

        .sparkle-three {
          right: 14%;
          bottom: 17%;
          font-size: 30px;
        }

        .art-caption {
          position: absolute;
          right: 4%;
          bottom: 7%;
          display: flex;
          align-items: center;
          gap: 9px;
          color: #a77c7c;
          font-family: Georgia, serif;
          font-size: 13px;
          font-style: italic;
        }

        .caption-line {
          width: 28px;
          height: 1px;
          background: #d7a4a5;
        }

        .footer {
          display: flex;
          min-height: 70px;
          align-items: center;
          justify-content: center;
          gap: 12px;
          border-top: 1px solid #f1e5e1;
          color: #ab9090;
          font-size: 11px;
          letter-spacing: 0.7px;
        }

        .footer-heart {
          color: #d48798;
          font-size: 17px;
        }

        @media (max-width: 760px) {
          .page {
            padding: 0 7%;
          }

          .header {
            height: 76px;
          }

          .header-note {
            font-size: 9px;
            letter-spacing: 1px;
          }

          .hero {
            grid-template-columns: 1fr;
            gap: 6px;
            padding: 52px 0 34px;
          }

          .hero-copy {
            padding: 0;
          }

          .eyebrow {
            margin-bottom: 20px;
            font-size: 10px;
          }

          h1 {
            font-size: clamp(48px, 11vw, 68px);
          }

          .description {
            max-width: 490px;
            margin-top: 20px;
            font-size: 14px;
          }

          .coming-soon {
            margin-top: 24px;
          }

          .signature {
            margin-top: 18px;
          }

          .hero-art {
            min-height: 320px;
            margin-top: 3px;
          }

          .art-sun {
            width: min(300px, 78%);
          }

          .yarn-art {
            width: min(100%, 350px);
          }

          .art-caption {
            right: 1%;
            bottom: 3%;
          }

          .footer {
            min-height: 62px;
            gap: 8px;
            font-size: 10px;
          }
        }

        @media (max-width: 380px) {
          .brand {
            font-size: 17px;
          }

          .header-note {
            max-width: 110px;
            text-align: right;
          }
        }
      `}</style>
    </>
  );
}

export default Home;
