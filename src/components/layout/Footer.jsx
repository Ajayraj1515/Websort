import "../../pages/styles/main.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
            
              <img src="data:image/png;base64,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" alt="Websort Logo" className="logo-image" />
            
            </div>
            <div className="footer-contact">
              <p>Web Development | App Development | UI/UX Design | Digital Marketing</p>
              <p>📞 +91-XXXXXXXXX</p>
              <p>📧 contact@websort.com</p>
            </div>
          </div>

          <div className="footer-social">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="#" className="social-icon google">G</a>
              <a href="#" className="social-icon instagram">📷</a>
              <a href="#" className="social-icon facebook">f</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Websort. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;