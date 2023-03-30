import React from "react";
import { ReactComponent as MySvg } from "./images/instagram.svg";

let styles = {
  Svgcontainer: {
    backgroundColor: "#000",
  },
  svg: {
    fill: "#ffff",
    width: "40px",
    height: "auto",
  },
};

function Instagramsvg() {
  return (
    <div style={styles.Svgcontainer}>
      <MySvg style={styles.svg} />
    </div>
  );
}

export default Instagramsvg;
