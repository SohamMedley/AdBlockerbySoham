document.getElementById("toggleAds").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: toggleAdBlocking
        });
    });
});

function toggleAdBlocking() {
    const ads = document.querySelectorAll(".ad, [id^='ad'], [class*='ad']");
    ads.forEach(ad => ad.style.display = ad.style.display === "none" ? "block" : "none");
}
