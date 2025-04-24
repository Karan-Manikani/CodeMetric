import Button from "./Button";
import warn from "../assets/warn.svg";
import check from "../assets/check.svg";

interface Props {
  active: "time" | "space";
  timeOptimized: boolean;
  spaceOptimized: boolean;
  handleSelectorChange: (newActive: "time" | "space") => void;
}

const ComplexitySelector = (props: Props) => {
  return (
    <div className="flex items-center justify-evenly">
      <Button
        active={props.active === "time"}
        image={props.timeOptimized ? check : warn}
        alt={props.timeOptimized ? "optimized" : "unoptimized"}
        text="Time"
        onClickHandler={() => props.handleSelectorChange("time")}
      />
      <div className="w-px h-7 bg-logo opacity-30 mx-4"></div>
      <Button
        active={props.active === "space"}
        image={props.spaceOptimized ? check : warn}
        alt={props.spaceOptimized ? "optimized" : "unoptimized"}
        text="Space"
        onClickHandler={() => props.handleSelectorChange("space")}
      />
    </div>
  );
};

export default ComplexitySelector;
