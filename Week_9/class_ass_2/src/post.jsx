// eslint-disable-next-line react/prop-types
export function PostComponent({ name, subtitle, time, image, description }) {
    return (
      <div style={styles.postCard}>
        <div style={styles.header}>
          <img src={image} alt="profile" style={styles.profilePic} />
          <div>
            <b style={styles.name}>{name}</b>
            <div style={styles.subtitle}>{subtitle}</div>
            {time && (
              <div style={styles.timeContainer}>
                <span>{time}</span>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/54/54481.png"
                  alt="clock"
                  style={styles.clockIcon}
                />
              </div>
            )}
          </div>
        </div>
        <p style={styles.description}>{description}</p>
      </div>
    );
  }
  
  const styles = {
    postCard: {
      width: "350px",
      background: "white",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      padding: "15px",
      margin: "10px",
      textAlign: "left",
    },
    header: {
      display: "flex",
      alignItems: "center",
      marginBottom: "10px",
    },
    profilePic: {
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      marginRight: "10px",
    },
    name: {
      fontSize: "16px",
      fontWeight: "bold",
    },
    subtitle: {
      fontSize: "12px",
      color: "#7f8c8d",
    },
    timeContainer: {
      display: "flex",
      alignItems: "center",
      fontSize: "12px",
      color: "#95a5a6",
      marginTop: "5px",
    },
    clockIcon: {
      width: "14px",
      height: "14px",
      marginLeft: "5px",
    },
    description: {
      fontSize: "14px",
      color: "#2c3e50",
      marginTop: "10px",
    },
  };
  