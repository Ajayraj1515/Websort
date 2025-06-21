import "../../pages/styles/main.css";

const ProudAchievements = () => {
  const achievements = [
    {
      id: 1,
      title: '500+ Projects Delivered',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=300&h=200&fit=crop',
      description: 'Successfully completed projects across various industries'
    },
    {
      id: 2,
      title: '50+ Happy Clients',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=300&h=200&fit=crop',
      description: 'Building lasting relationships with satisfied customers'
    },
    {
      id: 3,
      title: 'Award-Winning Team',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGjXtFgvgXm5AwQaLc-sKxP5IcZ6SFB5jkEw&s',
      description: 'Recognized for excellence in web development and design'
    }
  ];

  return (
    <section id="achievements" className="achievements-section">
      <div className="container">
        <h2>Our Proud Achievements</h2>
        <div className="achievements-grid">
          {achievements.map(achievement => (
            <div key={achievement.id} className="achievement-card">
              <img src={achievement.image} alt={achievement.title} />
              <div className="achievement-content">
                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>
                <button className="explore-btn">Explore More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProudAchievements;