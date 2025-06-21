
import { useRef } from 'react';
import "../../pages/styles/main.css";

const Projects = () => {
  const scrollContainerRef = useRef(null);

  const projects = [
    { id: 1, title: 'E-commerce Platform', category: 'Web Development', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop' },
    { id: 2, title: 'Mobile Banking App', category: 'App Development', image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop' },
    { id: 3, title: 'Dashboard Design', category: 'UI/UX Design', image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop' },
    { id: 4, title: 'Social Media App', category: 'App Development', image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop' },
    { id: 5, title: 'Corporate Website', category: 'Web Development', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop' },
  ];

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2>Our Projects</h2>
        <div className="projects-carousel">
          <button className="carousel-btn prev" onClick={() => scroll('left')}>‹</button>
          <div className="projects-scroll" ref={scrollContainerRef}>
            {projects.map(project => (
              <div key={project.id} className="project-card">
                <img src={project.image} alt={project.title} />
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.category}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-btn next" onClick={() => scroll('right')}>›</button>
        </div>
      </div>
    </section>
  );
};

export default Projects;