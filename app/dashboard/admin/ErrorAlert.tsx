import React, { useState } from "react";
import { Alert, makeStyles } from "@mui/material";
import animation from "./errorsAlerts.module.css";

type ErrorAlertProps = {
  alerts: {
    text: string;
    type: "error" | "success";
  }[];
};

const iconStyle = {
  "& .MuiAlert-icon": {
    margin: "0",
  },
};

const ErrorAlert = ({ alerts }: ErrorAlertProps) => {
  const [animationClass, setAnimationClass] = useState(`fade_in`);

  const handleAnimationEnd = () => {
    if (animationClass === "fade_in") {
      setAnimationClass("fade_out");
    }
  };

  return (
    <div className="grid gap-2 fixed bottom-10 left-3">
      {alerts.map((alert, index) => (
        <Alert
          className={`transition-all duration-300 ease-in-out ${animation[animationClass]}`}
          key={index}
          severity={alert.type === "error" ? "error" : "success"}
          sx={{
            minWidth: "350px",
            gap: ".5rem",
            ...iconStyle,
          }}
          onAnimationEnd={handleAnimationEnd}
        >
          {alert.text}
        </Alert>
      ))}
    </div>
  );
};

export default ErrorAlert;

// Image must be 1200 X 1200px or less
