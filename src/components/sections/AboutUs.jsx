
import { useState } from 'react';
import "../../pages/styles/main.css";

const AboutUs = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2>About Websort</h2>
        <div className="about-content">
          <p className="about-description">
            Websort is a leading technology company dedicated to transforming digital experiences 
            through innovative web solutions. We specialize in creating cutting-edge applications 
            that drive business growth and user engagement.
          </p>
          
          {showMore && (
            <div className="about-expanded">
              <p>
                Our mission is to bridge the gap between technology and user experience, 
                delivering solutions that are not only functional but also beautiful and intuitive. 
                With a team of passionate developers and designers, we bring your vision to life 
                through the power of modern web technologies.
              </p>
              <p>
                Founded with the belief that every business deserves a powerful digital presence, 
                Websort has been at the forefront of web innovation, helping companies of all sizes 
                achieve their digital transformation goals.
              </p>
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

export default AboutUs;