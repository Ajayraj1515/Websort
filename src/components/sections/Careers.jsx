import React, { useEffect, useRef } from 'react';
import "../../pages/styles/main.css";

const Careers = () => {
    const carouselRef = useRef(null);
    const expandedContentRef = useRef(null);

    useEffect(() => {
        const carousel = carouselRef.current;
        const prevBtn = document.querySelector('.opportunities-carousel-container .prev');
        const nextBtn = document.querySelector('.opportunities-carousel-container .next');
        const cards = carousel ? carousel.querySelectorAll('.opportunity-card') : [];

        if (carousel && prevBtn && nextBtn && cards.length > 0) {
            let cardWidth = cards[0].offsetWidth + 30;

            const scrollCarousel = (direction) => {
                const scrollAmount = cardWidth;
                if (direction === 'next') {
                    carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                } else {
                    carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
                }
            };

            const handlePrevClick = () => scrollCarousel('prev');
            const handleNextClick = () => scrollCarousel('next');

            prevBtn.addEventListener('click', handlePrevClick);
            nextBtn.addEventListener('click', handleNextClick);

            const handleResize = () => {
                if (cards[0]) {
                    cardWidth = cards[0].offsetWidth + 30;
                }
            };
            window.addEventListener('resize', handleResize);

            cards.forEach(card => {
                const exploreBtn = card.querySelector('.explore-btn');
                if (exploreBtn) {
                    const handleExploreClick = () => {
                        if (expandedContentRef.current) {
                            expandedContentRef.current.classList.toggle('show');
                            if (expandedContentRef.current.classList.contains('show')) {
                                expandedContentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }
                        }
                    };
                    exploreBtn.addEventListener('click', handleExploreClick);
                    return () => exploreBtn.removeEventListener('click', handleExploreClick);
                }
            });

            return () => {
                prevBtn.removeEventListener('click', handlePrevClick);
                nextBtn.removeEventListener('click', handleNextClick);
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);

    return (
        <section id="careers" className="careers-section">
            <div className="container">
                <h2>See What Opportunities Await You</h2>
                <p className="careers-description">
                    Explore diverse career paths at our company where innovation meets opportunity. We're building the future,
                    and we're looking for passionate individuals to join us in these key areas:
                </p>

                <div className="opportunities-carousel-container">
                    <button className="carousel-nav-btn prev">&lt;</button>
                    <div className="opportunities-carousel" ref={carouselRef}>
                        <div className="opportunity-card">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjLFjINz_-fPp7EhG5oztLZ7j1f1HAyieXIg&s" alt="Web Development" />
                            <h3>Web Development</h3>
                            <p>Craft responsive and dynamic websites using cutting-edge front-end and back-end technologies.</p>
                            <button className="explore-btn">Explore More</button>
                        </div>

                        <div className="opportunity-card">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3ZIDP8lo9uWgx6_RMbyZNue29_r3BiQsDCg&s" alt="Android Development" />
                            <h3>Android Development</h3>
                            <p>Build intuitive and high-performance mobile applications for Android platforms.</p>
                            <button className="explore-btn">Explore More</button>
                        </div>

                        <div className="opportunity-card">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnhA0CdVCwqp-7HY8quT3esD1K06-OWk2Asw&s" alt="Digital Marketing" />
                            <h3>Digital Marketing</h3>
                            <p>Drive brand visibility and engagement through SEO, social media, and content strategies.</p>
                            <button className="explore-btn">Explore More</button>
                        </div>
                    </div>
                    <button className="carousel-nav-btn next">&gt;</button>
                </div>

                <div id="careersExpanded" className="careers-expanded-content" ref={expandedContentRef}>
                    <h3>Explore Our Tech Domains in Depth:</h3>
                    <ul>
                        <li>
                            <strong>Artificial Intelligence (AI) & Machine Learning (ML):</strong> Develop intelligent systems,
                            from predictive analytics to natural language processing.
                        </li>
                        <li>
                            <strong>Web Design & Development:</strong> Craft engaging user experiences and robust web applications
                            using the latest front-end and back-end technologies.
                        </li>
                        <li>
                            <strong>Data Science & Analytics:</strong> Uncover insights from complex datasets, build data models,
                            and drive data-informed decision-making.
                        </li>
                        <li>
                            <strong>Cloud Computing & DevOps:</strong> Design, deploy, and manage scalable cloud infrastructure
                            and automate software delivery pipelines.
                        </li>
                        <li>
                            <strong>Cybersecurity:</strong> Protect critical systems and data, ensuring a secure digital future.
                        </li>
                    </ul>
                    <p>Ready to make your mark? Check out our current openings or reach out to us!</p>
                    <a href="#contact" className="explore-btn">Apply Now</a>
                </div>
            </div>
        </section>
    );
};

export default Careers;