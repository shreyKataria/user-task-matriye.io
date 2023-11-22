/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const SidebarHeader = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: 300,
      }}>
      <div>
        <h2>Matriye.io</h2>
      </div>

      <img
        // eslint-disable-next-line
        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        style={{
          height: 100,
          width: 100,
          objectFit: "cover",
          borderRadius: "100%",
          marginBottom: "20px",
          marginTop: "20px",
        }}
      />
      <p
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          marginBottom: "0px",
        }}>
        Mrunali
      </p>
      <small>Economic Times</small>
    </div>
  );
};

export default SidebarHeader;
