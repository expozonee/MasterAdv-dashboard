import { LoaderStyles } from "@/types/LoaderStyles";
import "./spinnerLoader.css";

type SpinnerLoaderProps = {
  color?: string;
};

export function SpinnerLoader({ color }: SpinnerLoaderProps) {
  const styles: LoaderStyles = {
    "--uib-color": color ?? "#bd9b53",
  };
  return (
    <>
      <div style={styles} className="container">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </>
  );
}
