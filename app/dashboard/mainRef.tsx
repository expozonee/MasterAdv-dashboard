import { useRef } from "react";

const useMainRef = () => {
  const useMainRef = useRef(null);
  return useMainRef;
};

export default useMainRef;
