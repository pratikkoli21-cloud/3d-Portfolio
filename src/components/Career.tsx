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
                <h4>Quality Analyst</h4>
                <h5>GigLabz Private Limited</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>GigLabz Private Limited</h4>
                <h5>6+ years · Noida</h5>
              </div>
              <h3>2025–06 to Present</h3>
            </div>
            <p>
2025–06 to Present

Client: Fino Payments Bank

Led end-to-end testing for digital banking applications (iOS & Android), ensuring seamless user journeys across high-impact financial features

Validated critical UPI functionalities (Pay to Number, Rupay Credit Card, UPI Lite) supporting real-time transactions and improving system reliability

Delivered comprehensive testing for lending workflows (Personal, Gold, Home Loans), reducing risk in customer-facing financial journeys

Designed and maintained RTMs, UAT scenarios, and test data strategies, increasing test coverage and release confidence

Collaborated cross-functionally with Product, BA, and Dev teams to identify defects early and prevent production escalations
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Quality Analyst</h4>
                <h5>CddersBrain </h5>
              </div>
              <h3>Dec-2024</h3>
            </div>
            <p>
Dec 2024 – Jun 2025. Executed UAT and system testing for key financial modules including Mutual Funds, Fixed Deposits, Rewards, and Digital Onboarding

Built and executed robust regression test suites, ensuring stability across multiple release cycles

Played a key role in UAT sign-offs, minimizing post-release defects and improving user experience

Managed defect lifecycle using Jira, ensuring faster resolution and better traceability</p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Sf Engineer</h4>
                <h5>Infogain</h5>
              </div>
              <h3>2013-16</h3>
            </div>
            <p>
              Software engineering across enterprise projects, contributing to
              design, development, and delivery of business applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
