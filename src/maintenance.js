import React from "react";
import CHPImage from "./assets/chp.jpg";

class MaintenancePage extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.contentContainer}>
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
    // justifyContent: "center",
    // alignItems: "center",
    padding: "20px",
    maxWidth: "100%",
    height: "100vh",
    // backgroundColor: "#f2f2f2", // Set a background color
  },
  contentContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "100%",
    width: "100%",
  },
  textContainer: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.9)", // Slightly transparent white background
    padding: "3rem",
    // textAlign: "center",
    borderRadius: "5px",
    // boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
    width: "100%",
    height: "100%",
    // justifyContent: "center",
    // alignItems: "center",
  },
  imageContainer: {
    flex: 1,
    display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
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
};

export default MaintenancePage;
