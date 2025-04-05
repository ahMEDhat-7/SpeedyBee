function addReadingTimeToElements() {
  const targets =
    document.querySelectorAll("main") ||
    document.querySelectorAll("article") ||
    document.querySelectorAll("section");

  targets.forEach((element) => {
    const text = element.innerText;
    const words = text.match(/\S+/g) || [];

    if (words.length > 50) {
      const wordsCount = words.length;
      const readingTime = Math.ceil(wordsCount / 100);

      if (!element.querySelector(".reading-time-badge")) {
        const badge = document.createElement("span");
        badge.classList.add(
          "reading-time-badge",
          "color-secondary-text",
          "type--caption"
        );
        badge.style.display = "block";
        badge.style.position = "center";
        badge.style.margin = "25px";
        badge.style.fontSize = "0.9em";
        badge.style.color = "#666";
        badge.textContent = `⏱️ ${readingTime} min read`;

        const heading = element.querySelector("h1, h2, h3");
        const date = element.querySelector("time")?.parentNode;

        if (heading) {
          heading.insertAdjacentElement("afterend", badge);
        } else if (date) {
          date.insertAdjacentElement("afterend", badge);
        } else {
          if (element.tagName === "P") {
            const firstSentenceEnd = element.innerHTML.indexOf(". ");
            if (firstSentenceEnd > -1) {
              const originalHtml = element.innerHTML;
              element.innerHTML =
                originalHtml.substring(0, firstSentenceEnd + 1) +
                ' <span class="reading-time-badge color-secondary-text type--caption" style="font-size:0.8em;color:#666;">⏱️ ' +
                readingTime +
                " min read</span>" +
                originalHtml.substring(firstSentenceEnd + 1);
            } else {
              element.insertAdjacentElement("afterbegin", badge);
            }
          } else {
            element.insertAdjacentElement("afterbegin", badge);
          }
        }
      }
    }
  });
}

addReadingTimeToElements();
