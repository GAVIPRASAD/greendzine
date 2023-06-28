import React from "react";

const Card = ({ user }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          height: "14.5rem",
          width: "14.9rem",
          border: "2px solid black",
          borderRadius: "15px",
          justifyContent: "center",
        }}
      >
        <img
          src={user.avatar}
          alt=""
          height={210}
          width={200}
          style={{ borderRadius: "20px", padding: "10px" }}
        />
      </div>
    </>
  );
};

export default Card;
