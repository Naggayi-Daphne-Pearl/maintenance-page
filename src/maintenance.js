import React from "react";
import CHPImage from "./assets/chp.jpg";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import "./App.css";

class MaintenancePage extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.contentContainer}>
          <div style={styles.socialContainer}>
            <a href="https://facebook.com" style={styles.socialLink}>
              <FaFacebook />
            </a>
            <a href="https://twitter.com" style={styles.socialLink}>
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" style={styles.socialLink}>
              <FaLinkedin />
            </a>
            <div style={styles.divider}></div> {/* Vertical line */}
          </div>
          <div style={styles.textContainer}>
            <h1 style={styles.heading}>Website Under Maintenance</h1>
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
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    maxWidth: "100%",
    height: "100vh",
  },
  contentContainer: {
    display: "flex",
    maxWidth: "100%",
    width: "100%",
  },
  textContainer: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: "3rem",
    width: "100%",
    height: "100%",
  },
  divider: {
    width: "2px", // Adjust the width of the divider
    backgroundColor: "#666", // Color of the divider
    margin: "0 1rem", // Add some margin for spacing
  },
  imageContainer: {
    flex: 1,
    display: "flex",
    width: "100%",
    height: "80vh",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "20px",
    marginTop: "6rem",
    textAlign: "center",
    fontStyle: "italic",
    fontFamily: "Poppins, sans-serif",
  },
  text: {
    fontSize: "18px",
    color: "#666",
    margin: "10px 0",
    fontFamily: "Poppins, sans-serif",
  },
  image: {
    width: "100%",
    height: "auto",
  },
  socialContainer: {
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
