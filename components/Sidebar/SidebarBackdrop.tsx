import React, {
  useState,
  useEffect,
  CSSProperties,
  useLayoutEffect,
} from "react";

interface BackdropProps {
  show: boolean;
}

const SidebarBackdrop = ({ show }: BackdropProps) => {
  const [render, setRender] = useState(show);
  const [visible, setVisible] = useState(show);

  // useEffect(() => {
  //   if (show) {
  //     setRender(true);
  //     setTimeout(() => setVisible(true), 10); // slight delay to ensure that the component is rendered before the transition starts
  //   }
  // }, [show]);

  // useEffect(() => {
  //   if (!show) {
  //     setVisible(false);
  //     setTimeout(() => setRender(false), 300); // same duration as transition
  //   }
  // }, [show]);

  useEffect(() => {
    if (show) {
      setRender(true);
      setVisible(false); // initially set to false
    } else {
      setVisible(false);
    }
  }, [show]);

  useEffect(() => {
    show
      ? setTimeout(() => setVisible(true), 0) // set to true after the transition has started
      : setTimeout(() => setRender(false), 300); // unmount after the transition has completed
  }, [show]);

  const handleTransitionEnd = () => {
    if (!visible) {
      setRender(false);
    }
  };

  const style: CSSProperties = {
    opacity: visible ? 0.5 : 0,
    visibility: visible ? "visible" : "hidden",
    transition: "opacity 0.3s, visibility 0.3s",
  };

  return (
    <>
      {render ? (
        <div
          style={style}
          className={`bg-[#000000] absolute inset-0 z-[9998] lg:hidden`}
          onTransitionEnd={handleTransitionEnd}
        ></div>
      ) : null}
    </>
  );
};

export default SidebarBackdrop;
