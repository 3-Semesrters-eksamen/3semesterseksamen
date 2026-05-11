const ContactUs = () => {
  return (
    <div className="contact-body">
      <div className="fields">
        <input className="field" type="text" placeholder="Your Name" />
        <input className="field" type="email" placeholder="Your Email" />
        <textarea className="field textarea" placeholder="Your Comment" />
      </div>

      <div className="send-wrap">
        <button className="send-btn">SEND</button>
      </div>

      <style>{`
        .contact-body {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          padding: 2rem 1.5rem;
          background: radial-gradient(ellipse at top, #1a0a0a 0%, #0a0a0a 60%);
          font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
          box-sizing: border-box;
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
          font-size: 0.85rem;
          letter-spacing: 0.04em;
          padding: 1rem 1rem;
          outline: none;
          transition: border-color 0.2s;
          font-family: inherit;
        }

        .field::placeholder {
          color: rgba(255, 255, 255, 0.3);
        }

        .field:focus {
          border-color: #e8003a;
        }

        .textarea {
          resize: vertical;
          min-height: 320px;
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

        @media (max-width: 480px) {
          .contact-body {
            padding: 1.25rem 1rem;
          }

          .field {
            font-size: 0.9rem;
            padding: 0.9rem 0.85rem;
          }

          .textarea {
            min-height: 260px;
          }

          .send-btn {
            font-size: 0.88rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactUs;
