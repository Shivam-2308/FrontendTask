import React from "react";

const Banner = () => {
  return (
    <div
      className="bannerContainer"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div
        style={{
          fontWeight: "bold",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#f1f2f4",
          width: "20%",
          padding: "5px 8px",
          borderRadius: "25px",
          marginTop: "50px",
        }}
      >
        An other way to manage time
      </div>
      <div
        style={{
          fontSize: "40px",
          fontWeight: "bolder",
          fontSize: "70px",
          width: "60%",
          color: "rgb(45, 45, 45)",
        }}
      >
        Your new favorite calendar 🗓️ app
      </div>
      <div
        style={{
          marginTop: "20px",
          fontSize: "40px",
          fontWeight: 500,
          fontSize: "20px",
          width: "45%",
          color: "rgb(107, 107, 120)",
        }}
      >
        Here you should explain how cool your app is. Remember, focus on the
        benefits for your users, not on the features.{" "}
      </div>
      <div style={{ width: "20%" }}>
        <div
          className="getsStartedButton"
          style={{
            marginTop: "30px",
            backgroundColor: "rgb(46, 46, 46)",
            opacity: "1",
            borderRadius: "12px",
            color: "#fff",
            fontWeight: "bold",
            padding: "15px ",
          }}
        >
          Get Started, it's free
        </div>
        <div
          className="freetrial"
          style={{
            marginTop: "10px",
            color: "rgb(107, 107, 120)",
            fontWeight: "500",
            fontSize: "12px",
          }}
        >
          Free 14 days trials,no credit card needed
        </div>
      </div>
    </div>
  );
};

export default Banner;
