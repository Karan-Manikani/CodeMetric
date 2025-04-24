import warn from "../assets/warn.svg";
import check from "../assets/check.svg";

interface Props {
  for: "Time" | "Space";
  visible: boolean;
  complexity: string;
  variables: string | null;
  improvements: string | null;
}

const DetailedComplexityAnalysis = (props: Props) => {
  return (
    props.visible && (
      <div className="">
        <p className="font-thin text-xl font-secondary tracking-wider text-secondary">
          {props.complexity} {props.for}
        </p>
        <div className="mt-1">
          {props.variables?.split(";").map((variable, i) => (
            <p key={i} className="italic font-thin font-secondary tracking-wider text-primary">
              {variable}
            </p>
          ))}
        </div>
        <div className="mt-4">
          {props.improvements ? (
            <div className="flex items-end justify-center bg-yellow-100 p-2 rounded-md">
              <img className="mr-2 h-5" src={warn} alt="suboptimal" />
              <p className=" text-yellow-600">Your code could run more efficiently.</p>
            </div>
          ) : (
            <div className="flex items-end justify-center bg-green-100 p-2 rounded-md">
              <img className="mr-2 h-5" src={check} alt="optimal" />
              <p className=" text-green-700">Your code is well-optimized!</p>
            </div>
          )}
        </div>
        {props.improvements && (
          <>
            <p className="font-extralight text-sm font-secondary tracking-wider text-secondary mt-4">
              Suggested Improvements
            </p>
            <p className="mt-0.5 font-thin font-secondary tracking-wider text-primary">
              {props.improvements}
            </p>
          </>
        )}
      </div>
    )
  );
};

export default DetailedComplexityAnalysis;
