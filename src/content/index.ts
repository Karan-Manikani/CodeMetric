import { RequestMessage, ResponseMessage } from "../types";

const extractCode = (callback: (response: ResponseMessage<string>) => void) => {
  const targetSpan = document.querySelectorAll("span[data-e2e-locator]")[0];

  if (!targetSpan) {
    const response: ResponseMessage<string> = {
      from: "CONTENT",
      to: "POPUP",
      content: "No Submission found",
    };

    callback(response);
  }

  const containerDiv = targetSpan.closest("div[data-layout-path]");
  const codeBlock = containerDiv?.querySelector("code");

  const response: ResponseMessage<string> = {
    from: "CONTENT",
    to: "POPUP",
    content: codeBlock?.innerText || "No submission found.",
  };

  callback(response);
};

chrome.runtime.onMessage.addListener((request: RequestMessage, _, sendResponse) => {
  if (request.from === "BACKGROUND" && request.to === "CONTENT" && request.instruction === "EXTRACT_CODE") {
    extractCode(sendResponse);
  }
});
