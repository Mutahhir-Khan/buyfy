import React from "react";
import "./Paragraph.css"

const Paragraph = ({
  children,
  fontSize = 16,
  fontWeight = "regular",
  color = "black",
  style = {},
}) => { 
  var fontWeightCal = (weightStr) => {
    switch (weightStr) {
      case "light":
        return 300;
      case "regular":
        return 400;
      case "medium":
        return 5600;
      case "bold":
        return 700;
      default:
        return 400;
    }

};
var fontWeightValue = fontWeightCal(fontWeight);
var fontSizeValue = fontSize/10
  return (
    <div className="paragraph" style={{ fontWeight: fontWeightValue, fontSize: `${fontSizeValue}em`, color, ...style }}>
      {children}
    </div>
  );
};

export default Paragraph;
