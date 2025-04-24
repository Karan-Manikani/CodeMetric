import Divider from "./Divider";

import ComplexitySelector from "./ComplexitySelector";
import { ModelResponse } from "../types";
import DetailedComplexityAnalysis from "./DetailedComplexityAnalysis";
import { useState } from "react";

interface Props {
  analyses: ModelResponse;
}

const Analyses = (props: Props) => {
  const [active, setActive] = useState<"time" | "space">("time");

  const handleSelectorChange = (newActive: "time" | "space") => {
    setActive(newActive);
  };

  return (
    <>
      <DetailedComplexityAnalysis
        for="Time"
        visible={active === "time"}
        complexity={props.analyses.time}
        variables={props.analyses.time_vars}
        improvements={props.analyses.time_improvements}
      />
      <DetailedComplexityAnalysis
        for="Space"
        visible={active === "space"}
        complexity={props.analyses.space}
        variables={props.analyses.space_vars}
        improvements={props.analyses.space_improvements}
      />
      <Divider marginTop="mt-4" marginBottom="mb-3" />
      <ComplexitySelector
        timeOptimized={props.analyses.time_improvements === null}
        spaceOptimized={props.analyses.space_improvements === null}
        handleSelectorChange={handleSelectorChange}
        active={active}
      />
    </>
  );
};

export default Analyses;
