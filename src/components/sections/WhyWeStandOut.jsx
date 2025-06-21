import "../../pages/styles/main.css";

const WhyWeStandOut = () => {
  return (
    <section id="why-stand-out" className="stand-out-section">
      <div className="container">
        <div className="stand-out-content">
          <div className="stand-out-text">
            <h2>Why We Stand Out</h2>
            <p>
              Our unique approach combines cutting-edge technology with human-centered design, 
              ensuring every solution we create is not just functional, but transformative. 
              We don't just build websites; we craft digital experiences that drive results.
            </p>
            <ul className="stand-out-features">
              <li>✓ Industry-leading expertise</li>
              <li>✓ Agile development process</li>
              <li>✓ 24/7 support and maintenance</li>
              <li>✓ Proven track record of success</li>
            </ul>
          </div>
          <div className="stand-out-image">
            <img 
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=400&fit=crop" 
              alt="Innovation illustration" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWeStandOut;