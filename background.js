chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ blockedNames: ["Wanda Nara", "Mauro Icardi", "China Suárez", "Wanda", "Icardi"] });
});
