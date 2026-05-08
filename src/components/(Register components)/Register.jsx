export default function Register() {
  return (
    <div className="register-body">
      <div className="card">
        <p className="brand">
          NIGHT<span className="accent">CLUB</span> IS MEMBERS ONLY
        </p>
        <p className="subtitle">
          Fill out the form below to
          <br />
          register a membership
        </p>

        <div className="fields">
          <input className="field" type="email" placeholder="Email" />
          <input className="field" type="password" placeholder="Password" />
          <input className="field" type="password" placeholder="Confirm password" />
          <input className="field" type="tel" placeholder="Phone number" />
        </div>

        <div className="send-wrap">
          <button className="send-btn">SEND</button>
        </div>
      </div>

      <style>{`
        .register-body {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(ellipse at top, #1a0a0a 0%, #0a0a0a 60%);
          padding: 2rem 1rem;
          font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        }

        .card {
          width: 100%;
          max-width: 340px;
          background: rgba(15, 5, 5, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 4px;
          padding: 2.5rem 2rem;
        }

        .brand {
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: #fff;
          text-align: center;
          margin: 0 0 0.6rem;
        }

        .accent {
          color: #e8003a;
        }

        .subtitle {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.5);
          text-align: center;
          margin: 0 0 2rem;
          line-height: 1.6;
        }

        .fields {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .field {
          width: 100%;
          box-sizing: border-box;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 2px;
          color: #fff;
          font-size: 0.82rem;
          letter-spacing: 0.04em;
          padding: 0.85rem 1rem;
          outline: none;
          transition: border-color 0.2s;
        }

        .field::placeholder {
          color: rgba(255, 255, 255, 0.3);
        }

        .field:focus {
          border-color: #e8003a;
        }

        .send-wrap {
          display: flex;
          justify-content: flex-end;
        }

        .send-btn {
          background: transparent;
          border: none;
          color: #fff;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          cursor: pointer;
          padding: 0.4rem 0;
          position: relative;
          transition: color 0.2s;
        }

        .send-btn::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: rgba(255, 255, 255, 0.4);
          transition: background 0.2s;
        }

        .send-btn:hover {
          color: #e8003a;
        }

        .send-btn:hover::after {
          background: #e8003a;
        }
      `}</style>
    </div>
  );
}
