import "./styles/About.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="section-container about-container">
        <h2>
          About <span>Me</span>
        </h2>

        <p>
          Hello! I'm <strong>Krishna Maheshwari</strong>, a passionate Computer
          Science undergraduate at DIT University, Dehradun. I specialize in
          full-stack web development and enjoy building modern, scalable, and
          user-friendly applications.
        </p>

        <p>
          My expertise includes React, Node.js, Express, MongoDB, and Docker. I
          also have a strong foundation in Data Structures and Algorithms using
          Java. I am enthusiastic about creating innovative solutions and
          continuously learning new technologies.
        </p>

        <p>
          Beyond coding, I actively participate in university events, contribute
          to technical projects, and enjoy fitness, football, and content
          creation.
        </p>

        <div className="about-details">
          <div>
            <h4>Name:</h4>
            <p>Krishna Maheshwari</p>
          </div>
          <div>
            <h4>Email:</h4>
            <p>krishna.mw.dev@gmail.com</p>
          </div>
          <div>
            <h4>Education:</h4>
            <p>B.Tech in Computer Science, DIT University</p>
          </div>
          <div>
            <h4>Location:</h4>
            <p>Dehradun, Uttarakhand, India</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
