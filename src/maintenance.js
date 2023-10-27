import React from 'react';

class MaintenancePage extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.imageContainer}>
          <img src="maintenance-image.jpg" alt="Maintenance" style={styles.image} />
        </div>
        <div style={styles.textContainer}>
          <h1 style={styles.heading}>Website Under Maintenance</h1>
          <p style={styles.text}>
            We apologize for the inconvenience. Our website is currently undergoing maintenance to serve you better.
          </p>
          <p style={styles.text}>Please check back later.</p>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
  },
  imageContainer: {
    flex: 1,
    marginRight: '20px',
  },
  image: {
    width: '100%',
    maxWidth: '300px',
    height: 'auto',
  },
  textContainer: {
    flex: 2,
    textAlign: 'center',
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '20px',
  },
  text: {
    fontSize: '18px',
    color: '#666',
    margin: '10px 0',
  },
};

export default MaintenancePage;
