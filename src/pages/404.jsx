
import React from "react";

export default function NotFound() {
  return (
    <>
      <style>{`
        .not-found {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
          box-sizing: border-box;
          background: #f8fafc;
          color: #172033;
          font-family: Inter, system-ui, sans-serif;
          text-align: center;
        }

        .not-found-content {
          width: 100%;
          max-width: 560px;
        }

        .not-found-illustration {
          position: relative;
          height: 230px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 25px;
        }

        .error-code {
          font-size: clamp(110px, 22vw, 190px);
          font-weight: 900;
          letter-spacing: -12px;
          color: #e2e8f0;
          line-height: 1;
        }

        .planet {
          position: absolute;
          width: 90px;
          height: 90px;
          border-radius: 50%;
          background: linear-gradient(135deg, #63f1bf, #38cab9);
          box-shadow: 0 15px 35px rgba(70, 229, 142, 0.25);
        }

        .planet-ring {
          position: absolute;
          width: 135px;
          height: 35px;
          border: 5px solid #a5fcd9;
          border-radius: 50%;
          transform: rotate(-25deg);
          top: 28px;
          left: -22px;
        }

        .planet-dot {
          position: absolute;
          width: 13px;
          height: 13px;
          background: #c7fee8;
          border-radius: 50%;
          top: 22px;
          right: 20px;
        }

        .not-found-label {
          display: inline-block;
          color: #259d5b;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 3px;
          margin-bottom: 15px;
        }

        .not-found h1 {
          font-size: clamp(28px, 5vw, 38px);
          font-weight: 800;
          letter-spacing: -1.5px;
          margin: 0 0 15px;
        }

        .not-found p {
          max-width: 430px;
          margin: 0 auto;
          color: #64748b;
          font-size: 16px;
          line-height: 1.8;
        }

        .not-found-actions {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 14px;
          margin-top: 32px;
          flex-wrap: wrap;
        }

        .home-button,
        .back-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          padding: 13px 22px;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
          cursor: pointer;
          transition: all .2s ease;
        }

        .home-button {
          background: #46e59b;
          color: white;
          border: 1px solid #46e57e;
        }

        .home-button:hover {
          background: #38caa1;
          transform: translateY(-2px);
        }

        .back-button {
          background: white;
          color: #33554e;
          border: 1px solid #e2e8f0;
        }

        .back-button:hover {
          background: #f1f5f9;
          transform: translateY(-2px);
        }

        .not-found-footer {
          margin-top: 65px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
          color: #94a3b8;
        }

        @media (max-width: 480px) {
          .not-found-illustration {
            height: 180px;
          }

          .planet {
            width: 70px;
            height: 70px;
          }

          .planet-ring {
            width: 110px;
            height: 28px;
            top: 21px;
            left: -20px;
          }

          .not-found-footer {
            margin-top: 45px;
          }
        }
      `}</style>

      <div className="not-found">
        <div className="not-found-content">

          <div className="not-found-illustration">
            <span className="error-code">404</span>
            <div className="planet">
              <div className="planet-ring" />
              <div className="planet-dot" />
            </div>
          </div>

          <span className="not-found-label">
            PAGE NOT FOUND
          </span>

          <h1>Oops! Lost in space?</h1>

          <p>
            The page you're looking for doesn't exist,
            may have been moved, or is temporarily unavailable.
          </p>

          <div className="not-found-actions">
            <a href="/" className="home-button">
              ← Back to homepage
            </a>

            <button
              className="back-button"
              onClick={() => window.history.back()}
            >
              Go back
            </button>
          </div>

          <div className="not-found-footer">
            ERROR CODE: 404 · PAGE NOT FOUND
          </div>

        </div>
      </div>
    </>
  );
}
