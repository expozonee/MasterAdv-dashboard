import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { useSession, signOut } from "next-auth/react";
import { Rubik } from "next/font/google";

const rubikText = Rubik({ subsets: ["hebrew"], weight: ["500"] });

const handleLogout = async () => {
  await signOut({ redirect: true, callbackUrl: "/dashboard" });
};

const Logout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      setIsLoggedIn(true);
    }
  }, [status]);

  return isLoggedIn ? (
    <>
      <Button
        variant="contained"
        color="error"
        onClick={handleLogout}
        sx={{
          fontFamily: `${rubikText.style.fontFamily}`,
          fontWeight: `${rubikText.style.fontWeight}`,
        }}
      >
        התנתקות
      </Button>
    </>
  ) : null;
};

export default Logout;
