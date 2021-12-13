import React from "react";

const Like = ({ liked, onClick }) => {
  let classes = "heart";
  if (!liked) classes += "-outline";
  return (
    <span onClick={onClick} style={{ cursor: "pointer" }}>
      <ion-icon name={classes}></ion-icon>
    </span>
  );
};

export default Like;
