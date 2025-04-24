export type RequestMessage = {
  instruction: string;
  to: "BACKGROUND" | "CONTENT" | "POPUP";
  from: "BACKGROUND" | "CONTENT" | "POPUP";
};

export type ResponseMessage<T> = {
  to: "BACKGROUND" | "CONTENT" | "POPUP";
  from: "BACKGROUND" | "CONTENT" | "POPUP";
  content: T;
};

export type ModelResponse = {
  time: string;
  space: string;
  time_vars: string | null;
  space_vars: string | null;
  time_improvements: string | null;
  space_improvements: string | null;
};
