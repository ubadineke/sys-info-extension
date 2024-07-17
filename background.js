chrome.runtime.onInstalled.addListener(() => {
    console.log('Extension Installed');
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'getSystemInfo') {
        let systemInfo = {};
        // const userAgent = window.navigator.userAgent;
        // systemInfo.userAgent = userAgent;
        chrome.system.cpu.getInfo((cpuInfo) => {
            systemInfo.cpu = cpuInfo;
            chrome.system.memory.getInfo((memoryInfo) => {
                systemInfo.memory = memoryInfo;
                chrome.system.storage.getInfo((storageInfo) => {
                    systemInfo.storage = storageInfo;
                    sendResponse(systemInfo);
                });
            });
        });

        return true; // Keeps the message channel open for sendResponse.
    }
});
