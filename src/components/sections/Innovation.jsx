
import { useState } from 'react';
import "../../pages/styles/main.css";

const Innovation = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="innovation" className="innovation-section">
      <div className="container">
        <h2>Fueling the Future with Innovation</h2>
        <div className="innovation-content">
          <p>
            At Websort, we harness the power of Artificial Intelligence and Internet of Things 
            to create revolutionary products that shape the future of technology.
          </p>
          
          {showMore && (
            <div className="innovation-expanded">
              <div className="innovation-features">
                <div className="feature">
                  <h4>🤖 AI-Powered Solutions</h4>
                  <p>Machine learning algorithms that adapt and improve user experiences automatically.</p>
                </div>
                <div className="feature">
                  <h4>🌐 IoT Integration</h4>
                  <p>Connecting devices and systems for seamless data flow and intelligent automation.</p>
                </div>
                <div className="feature">
                  <h4>🚀 Future-Ready Technology</h4>
                  <p>Building with tomorrow's technologies today, ensuring long-term scalability.</p>
                </div>
              </div>
            </div>
          )}
          
          <button 
            className="know-more-btn"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? 'Show Less' : 'Know More'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Innovation;