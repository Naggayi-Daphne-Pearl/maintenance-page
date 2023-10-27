import React from "react";
import CHPImage from "./assets/chp.jpg";
import AppIcon from "./assets/adaptive-icon.png";
import { FaFacebook, FaTwitter, FaLinkedin, FaMailBulk } from "react-icons/fa";
import "./App.css";

class MaintenancePage extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.contentContainer}>
          <div style={styles.socialContainer}>
            <img src={AppIcon} alt="Logo" style={styles.logo} />
            <div style={styles.socialLinks}>
              <a href="https://facebook.com" style={styles.socialLink}>
                <FaMailBulk />
              </a>
              <a href="https://facebook.com" style={styles.socialLink}>
                <FaFacebook />
              </a>
              <a href="https://twitter.com" style={styles.socialLink}>
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" style={styles.socialLink}>
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div style={styles.divider}></div>

          <div style={styles.textContainer}>
            <h1 style={styles.heading}>Website Under Maintenance</h1>
            <p style={styles.text}>
              We empower low-income community Health Systems with trainings and
              digital tool to ease access to healthcare. At our communities of
              work, we are using the ITED techniqu
            </p>
            <p style={styles.text}>
              We're currently undergoing maintenance to improve our website. We
              expect to be back online soon. Please check back later.
            </p>
            <p style={styles.text}>
              If you have any questions, please contact us at{" "}
              <a href="mailto:support@example.com">support@example.com</a>.
            </p>
          </div>
          <div style={styles.imageContainer}>
            <img src={CHPImage} alt="Maintenance" style={styles.image} />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    padding: "2rem",
    maxWidth: "100vw",
    height: "100vh",
  },
  contentContainer: {
    display: "flex",
    flexWrap: "wrap",
    maxWidth: "100%",
    width: "100%",
  },
  textContainer: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: "1rem",
    width: "100%",
    height: "100vh",
  },
  divider: {
    width: "2px",
    backgroundColor: "black",
    margin: "0 1rem",
    height: "90%",
    justifyContent: "center",

  },
  imageContainer: {
    flex: 1,
    display: "flex",
    width: "100%",
    height: "60vh",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "20px",
    marginTop: "3rem",
    textAlign: "center",
    fontStyle: "italic",
    fontFamily: "Poppins, sans-serif",
  },
  text: {
    fontSize: "18px",
    color: "#333", // Changed text color
    margin: "10px 0",
    fontFamily: "Arial, sans-serif", // Changed font family
  },
  image: {
    width: "100%",
    height: "auto",
  },
  socialContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: "50px",
    height: "auto",
    marginBottom: "1rem",
  },
  socialLinks: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  socialLink: {
    fontSize: "24px",
    color: "#666",
    margin: "10px",
    textDecoration: "none",
  },
};

export default MaintenancePage;
