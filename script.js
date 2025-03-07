document.getElementById("installBtn").addEventListener("click", () => {
    const chromeWebStoreLink = "YOUR_CHROME_WEB_STORE_LINK";
    const extensionZipLink = "YOUR_GITHUB_REPO_LINK/extension.zip";

    if (chromeWebStoreLink !== "YOUR_CHROME_WEB_STORE_LINK") {
        window.open(chromeWebStoreLink, "_blank");
    } else {
        window.location.href = extensionZipLink;
        alert("Your download has started. Follow the installation steps below.");
    }
});
