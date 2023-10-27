import React from "react";
import CHPImage from "./assets/chp.jpg";
import AppIcon from "./assets/adaptive-icon.png";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaMailBulk,
  FaEnvelope,
} from "react-icons/fa";
import "./App.css";

class MaintenancePage extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.contentContainer}>
          <div style={styles.socialContainer}>
            <img src={AppIcon} alt="Logo" style={styles.logo} />
            <div style={styles.socialLinks}>
              <a
                href="https://www.linkedin.com/company/mobiklinicfoundation/"
                style={styles.socialLink}
              >
                <FaEnvelope />
              </a>

              <a
                href="https://twitter.com/i/flow/login?redirect_after_login=%2Fklinicuganda"
                style={styles.socialLink}
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.linkedin.com/company/mobiklinicfoundation/"
                style={styles.socialLink}
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div style={styles.divider}></div>

          <div style={styles.textContainer}>
            <h1 style={styles.textError}>Website Under Maintenance</h1>
            <h1 style={styles.heading}>Mobiklinic</h1>

            <p style={styles.text}>
              We empower low-income community Health Systems with trainings and
              digital tool to ease access to healthcare. At our communities of
              work, we are using the ITED techniques.
            </p>
            <p style={styles.text}>
              We're currently undergoing maintenance to improve our website. We
              expect to be back online soon. Please check back later.
            </p>
            <p style={styles.text}>
              If you have any questions, please contact us at{" "}
              <a href="c">on this email </a>.
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
    backgroundColor: "#F5F7F8",
  },
  contentContainer: {
    display: "flex",
    flexWrap: "wrap",
    maxWidth: "100%",
    width: "100%",
  },
  textContainer: {
    flex: 1,
    backgroundColor: "#F5F7F8",
    padding: "1rem",
    width: "90vw",
    // padding: "1rem 3rem",
    height: "100vh",
  },
  divider: {
    width: "1px",
    backgroundColor: "red",
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
    fontSize: "25px",
    // fontWeight: "bold",
    color: "red",
    marginBottom: "20px",
    marginTop: "3rem",
    // textAlign: "center",
    fontStyle: "italic",
    fontFamily: "Georgia, sans-serif",
  },
  textError: {
    fontSize: "25px",
    // fontWeight: "bold",
    color: "#9CA1A6",
    marginBottom: "20px",
    marginTop: "3rem",
    // textAlign: "center",
    // fontStyle: "italic",
    fontFamily: "Georgia, sans-serif",
  },
  text: {
    fontSize: "18px",
    color: "black", // Changed text color
    margin: "10px 0",
    width: "35vw",

    fontFamily: "Georgia, sans-serif", // Changed font family
  },
  image: {
    width: "100%",
    height: "80vh",
  },
  socialContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "2rem",
  },
  logo: {
    width: "50px",
    height: "auto",
    marginBottom: "1rem",
    paddingBottom:'4rem', 
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
    color:'red',
  },
};

export default MaintenancePage;
