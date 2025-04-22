import { useEffect, useState } from "react";
import { RequestMessage, ResponseMessage } from "../types";
import { isLeetcodeWebsite } from "../utils/url";

const useCode = () => {
  const [code, setCode] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const extractSubmissionCode = async () => {
      if (await isLeetcodeWebsite()) {
        const message: RequestMessage = {
          from: "POPUP",
          to: "BACKGROUND",
          instruction: "EXTRACT_CODE",
        };

        chrome.runtime.sendMessage(message, (response: ResponseMessage<string>) => {
          if (response.from === "CONTENT" && response.to === "POPUP" && response.content) {
            setCode(response.content);
          } else {
            setError("Could not find the submitted code. Please close the submissions tab and try again.");
          }
        });
      } else {
        setError("Please navigate to a Leetcode problem.");
      }
    };

    extractSubmissionCode();
  }, []);

  return { code, error };
};

export default useCode;
