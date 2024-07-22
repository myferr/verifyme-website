import "./styles/Footer.scss";

import DatalixLogo from "../assets/datalix.webp";

export function Footer() {
  return (
    <>
      <br />
      <br />
      <footer className="footer-container">
        <div className="footer">
          <p className="column">
            <p className="title">Legal</p>
            <a href="/terms" className="footer-link">
              Terms of Service
            </a>
            <a href="/privacy" className="footer-link">
              Privacy Policy
            </a>
          </p>
          <p className="column">
            <p className="title">Information</p>
            <a href="/docs" className="footer-link">
              Documentation
            </a>
            <a href="/team" className="footer-link">
              Our Team
            </a>
            <a href="/add-bot" className="footer-link">
              Add bot
            </a>
            <a href="/commands" className="footer-link">
              Commands
            </a>
            <a href="/support" className="footer-link">
              Support
            </a>
          </p>
          <p className="column">
            <p className="title">Pages</p>
            <a href="/" className="footer-link">
              Home
            </a>
            <a href="/premium" className="footer-link">
              premium
            </a>
          </p>
          <div id="desktop">
            <p className="end-of-column">
              <p className="title">Who made this?</p>
              <a href="https://github.com/myferr/" className="footer-link">
                Myfer
              </a>
              <a href="https://datalix.eu/" target="_blank">
                <div className="datalix-container">
                  <p className="centered-text datalix">
                    <h3 className="powered-by">Powered by</h3>
                    <img src={DatalixLogo} width={130} />
                  </p>
                </div>
              </a>
            </p>
          </div>
        </div>
        <div id="mobile" className="footerStyles">
          <p className="end-of-column">
            <p className="title">Who made this?</p>
            <a href="https://github.com/myferr/" className="footer-link">
              Myfer
            </a>
            <a href="https://datalix.eu/" target="_blank">
              <div className="datalix-container">
                <p className="centered-text datalix">
                  <h3 className="powered-by">Powered by</h3>
                  <img src={DatalixLogo} width={130} />
                </p>
              </div>
            </a>
          </p>
        </div>
      </footer>
      © 2024 - VerifyME
    </>
  );
}
