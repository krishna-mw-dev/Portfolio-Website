import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance Content Writer</h4>
                <h5>International Client</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Delivered high-quality articles for overseas clients, conducted
              thorough research, and met strict deadlines while strengthening
              remote collaboration skills.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>PR Team Member (Youthopia)</h4>
                <h5>DIT University</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Managed event operations and audience engagement for Youthopia
              (Cultural Fest). Increased participation through digital outreach
              and PR strategies.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>PR Team Member (Sphurti)</h4>
                <h5>DIT University</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Handled social media promotions and on-ground coordination for
              Sphurti (Sports Fest), ensuring smooth execution and high
              engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
