import "../../pages/styles/main.css";

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'UI/UX Design',
      description: 'Creating intuitive and beautiful user interfaces that enhance user experience.',
      icon: '🎨'
    },
    {
      id: 2,
      title: 'Web Development',
      description: 'Building responsive and scalable web applications using modern technologies.',
      icon: '💻'
    },
    {
      id: 3,
      title: 'App Development',
      description: 'Developing mobile applications that work seamlessly across all platforms.',
      icon: '📱'
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2>Our Services</h2>
        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;