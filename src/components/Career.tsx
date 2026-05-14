import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My <span>Certificates</span>
          <br /> & Achievements
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <a href="https://www.coursera.org/account/accomplishments/verify/6UCJ0EJC24G7" target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
                  <h4>Automation Techniques in RPA</h4>
                </a>
                <h5>UiPath & Coursera</h5>
                <a 
                  href="https://www.coursera.org/account/accomplishments/verify/6UCJ0EJC24G7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: "#6f6cf4", marginTop: "10px", display: "inline-block" }}
                >
                  View Certificate →
                </a>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Completed the Automation Techniques in RPA certification by UiPath through Coursera, gaining hands-on knowledge in robotic process automation and workflow automation. Skilled in building automated processes using UiPath tools to improve efficiency and reduce repetitive manual tasks.
            </p>
            </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <a href="https://www.coursera.org/account/accomplishments/verify/1LY1VSZD0O2V" target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
                  <h4>The Bits and Bytes of Computer Networking</h4>
                </a>
                <h5>Google & Coursera</h5>
                <a 
                  href="https://www.coursera.org/account/accomplishments/verify/1LY1VSZD0O2V" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: "#6f6cf4", marginTop: "10px", display: "inline-block" }}
                >
                  View Certificate →
                </a>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Completed Google Cloud certification course on computer networking fundamentals. Gained comprehensive knowledge of networking concepts, protocols, and infrastructure to support cloud computing and software development practices.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <a href="https://hyperstack.id/credential/0a3b2407-fb30-4dc8-a1c7-8df3b70721b5?view=recipient" target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
                  <h4>Plasma Pull Winner</h4>
                </a>
                <h5>Roorkee</h5>
                <a 
                  href="https://hyperstack.id/credential/0a3b2407-fb30-4dc8-a1c7-8df3b70721b5?view=recipient" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: "#6f6cf4", marginTop: "10px", display: "inline-block" }}
                >
                  View Certificate →
                </a>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Awarded for winning at Plasma Pull in Roorkee. Demonstrated exceptional skills and teamwork to achieve the top position in the competition.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
