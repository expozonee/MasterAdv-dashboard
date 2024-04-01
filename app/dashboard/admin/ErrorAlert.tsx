import React, { useState } from "react";
import { Alert } from "@mui/material";
import animation from "./errorsAlerts.module.css";

type ErrorAlertProps = {
  alerts: string[];
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
          severity="error"
          sx={{ minWidth: "350px" }}
          onAnimationEnd={handleAnimationEnd}
        >
          {alert}
        </Alert>
      ))}
    </div>
  );
};

export default ErrorAlert;

// Image must be 1200 X 1200px or less
