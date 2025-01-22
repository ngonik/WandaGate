chrome.storage.sync.get("blockedNames", (data) => {
    const blockedNames = data.blockedNames || [];
    const url = window.location.hostname;
    const elements = document.querySelectorAll("h1, h2, h3, p, span"); // Ajustar según el sitio web

    const siteConfig = {
        "www.infobae.com": "a",
        "www.lanacion.com.ar": "a",
        "www.clarin.com": "article"
    };

    if (siteConfig[url]) {
        selectors = siteConfig[url];
    }

    elements.forEach(el => {
        if (blockedNames.some(name => el.innerText.includes(name))) {
            const parentLink = el.closest(selectors);
            if (parentLink) {
                parentLink.style.display = "none";
            } else {
                el.style.display = "none";
            }
        }
    });
});