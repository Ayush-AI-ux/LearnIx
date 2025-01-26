import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Top Section */}
        <div className="footer-top">
          <div className="footer-column">
            <h4>Certifications by Issuer</h4>
            <ul>
              <li>Amazon Web Services (AWS)</li>
              <li>Microsoft Certifications</li>
              <li>Cisco Certifications</li>
              <li>Six Sigma Certifications</li>
              <li>See all Certifications</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Data Science</h4>
            <ul>
              <li>Python</li>
              <li>Machine Learning</li>
              <li>Deep Learning</li>
              <li>Data Analytics</li>
              <li>See all Courses</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Business Analytics</h4>
            <ul>
              <li>Microsoft Excel</li>
              <li>Power BI</li>
              <li>SQL</li>
              <li>Data Analysis</li>
              <li>See all Analytics Courses</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>About</h4>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Contact Us</li>
              <li>Blog</li>
              <li>Investors</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} EduPlatform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
