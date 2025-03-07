chrome.runtime.onInstalled.addListener(() => {
    chrome.declarativeNetRequest.updateDynamicRules({
        removeRuleIds: [1, 2, 3, 4, 5], // Remove old rules
        addRules: [
            {
                "id": 1,
                "priority": 1,
                "action": { "type": "block" },
                "condition": {
                    "urlFilter": "doubleclick.net",
                    "resourceTypes": ["script", "xmlhttprequest", "sub_frame"]
                }
            },
            {
                "id": 2,
                "priority": 1,
                "action": { "type": "block" },
                "condition": {
                    "urlFilter": "googlesyndication.com",
                    "resourceTypes": ["script", "xmlhttprequest", "sub_frame"]
                }
            },
            {
                "id": 3,
                "priority": 1,
                "action": { "type": "block" },
                "condition": {
                    "urlFilter": "ads.youtube.com",
                    "resourceTypes": ["script", "xmlhttprequest", "sub_frame"]
                }
            },
            {
                "id": 4,
                "priority": 1,
                "action": { "type": "block" },
                "condition": {
                    "urlFilter": "pagead2.googlesyndication.com",
                    "resourceTypes": ["script", "xmlhttprequest", "sub_frame"]
                }
            },
            {
                "id": 5,
                "priority": 1,
                "action": { "type": "block" },
                "condition": {
                    "urlFilter": "securepubads.g.doubleclick.net",
                    "resourceTypes": ["script", "xmlhttprequest", "sub_frame"]
                }
            }
        ]
    });
});
