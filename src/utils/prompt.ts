export const generatePrompt = (code: string): string => {
  const prompt = `Analyse the following code and return only the time and space complexity in Big-O notation. Do not include any explanations or code in your response.
  
  Only provide suggestions for improvements if they reduce the Big-O time complexity — do not suggest general efficiency, readability, or style improvements.
  
  Clearly define all variables used in the complexity analysis. If more than one variable is used, separate them with semicolons.
  
  Your answer must be returned strictly in unformatted JSON with these keys:
  * "time"
  * "space"
  * "time_vars": Brief explanation of time complexity variables, or null if constant
  * "space_vars" Brief explanation of space complexity variables, or null if constant
  * "time_improvements" Suggested improvements only if they improve Big-O time complexity; else null
  * "space_improvements" Suggested improvements only if they improve Big-O space complexity; else null
   
  Code:
  
  ${code}
  
  `;

  return JSON.stringify(prompt);
};
