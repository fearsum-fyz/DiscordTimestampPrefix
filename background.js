chrome.runtime.onInstalled.addListener(() => {
    chrome.scripting.registerContentScripts([
        {
            id: "addTimestampPrefix",
            matches: ["*://*.discord.com/*"],
            js: ["content.js"],
            runAt: "document_idle"
        }
    ]);
});
  