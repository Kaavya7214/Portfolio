import React from 'react';
import myImage from '../components/my.jpg'; // Adjust the path to your image
import './About.css'; // Create a new CSS file for About component styles

const About = () => {
  const sectionStyle = {
    backgroundImage: `url('https://wallpaperaccess.com/full/5652012.jpg')`, // Set the background image URL
    backgroundSize: 'cover', // Set the background image size to cover the entire section
    backgroundRepeat: 'no-repeat', // Prevent background image from repeating
  };
  const scrollToHeader = () => {
    setTimeout(() => {
      document.getElementById('header').scrollIntoView({ behavior: 'smooth' });
    }, 0);
  };

  return (
    <section id="about" className="section" style={sectionStyle}>
      <h1>About Me</h1>
      <div className="about-content">
        <div className="about-image">
          <img src={myImage} alt="My Image" />
        </div>
        <div className="about-text">
          <p>
            Hi there! I'm <strong>A. Kavya Sri</strong>, a passionate web developer currently on a journey to master JavaScript.
          </p>
          <p>
            Alongside my technical skills, I thrive as a mentor in machine learning for my juniors. I believe in empowering others through knowledge sharing and collaboration.
          </p>
          <p>
            Excited about the endless possibilities of web development, I am dedicated to both learning and contributing to the community. Join me in this exciting journey of innovation and self-improvement!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
