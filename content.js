function removeAds() {
    const adSelectors = [
        "iframe[src*='ads']", "iframe[src*='doubleclick.net']", "iframe[src*='googlesyndication']",
        ".ad", ".ads", ".ad-container", ".ad-banner", ".sponsored",
        "[id^='ad']", "[class^='ad']",
        "ins.adsbygoogle", "ytd-ad-slot-renderer", "yt-ad"
    ];
    adSelectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => el.remove());
    });
}

// Run on page load
document.addEventListener("DOMContentLoaded", removeAds);

// Watch for video changes on YouTube
let lastUrl = location.href;
const observer = new MutationObserver(() => {
    if (location.href !== lastUrl) {
        lastUrl = location.href;
        setTimeout(removeAds, 1000); // Wait a sec to remove new ads
    }
});
observer.observe(document.body, { childList: true, subtree: true });

// Keep watching for dynamically loaded ads
const adObserver = new MutationObserver(removeAds);
adObserver.observe(document.body, { childList: true, subtree: true });
