import { useRef } from "react";

const useMainRef = () => {
  const mainRef = useRef(null);
  return mainRef;
};

export default useMainRef;
