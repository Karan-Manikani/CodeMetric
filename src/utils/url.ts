/**
 * Returns the URL of the currently active tab in the browser window
 */
export const getActiveURL = async () => {
  const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
  const currentTab = tabs[0];
  const URL = currentTab.url;

  return URL ? URL : "";
};

export async function isLeetcodeWebsite(): Promise<boolean> {
  const activeURL = await getActiveURL();

  return activeURL.includes("leetcode");
}
