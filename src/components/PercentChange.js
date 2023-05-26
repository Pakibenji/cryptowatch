import React from "react";
import colors from "../styles/_settings.scss";
import { useEffect } from "react";
import { useState } from "react";

const PercentChange = ({ percent }) => {
  const [color, setColor] = useState("");

  useEffect(() => {
    if (percent) {
      if (percent >= 0) {
        setColor(colors.green1);
      } else {
        setColor(colors.red1);
      }
    } else {
      setColor(colors.white1);
    }
  }, [percent]);

  return (
    <p className="percent-change-container" style={{ color }}>
      {percent ? percent.toFixed(1) + "%" : "-"}
    </p>
  );
};

export default PercentChange;
