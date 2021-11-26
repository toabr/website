import { useEffect } from "react";

export default function EmbedGists({ htmlString, render }) {
  useEffect(() => {
    for (const iFrameNode of document.querySelectorAll("iframe[id^=gist]")) {
      let doc = iFrameNode.document;
      if (iFrameNode.contentDocument) doc = iFrameNode.contentDocument;
      else if (iFrameNode.contentWindow)
        doc = iFrameNode.contentWindow.document;

      const styles = `style="margin: 0;"`
      const gistScript = `<script type="text/javascript" src="${iFrameNode.dataset.href}"></script>`;
      const resizeScript = `onload="parent.document.getElementById('${iFrameNode.id}').style.height=document.body.scrollHeight + 'px'"`;
      const iFrameHtml = `<html><head><base target="_parent"></head><body ${styles} ${resizeScript}>${gistScript}</body></html>`;

      // write to the iframe
      doc.open();
      doc.writeln(iFrameHtml);
      doc.close();
    }
  });

  function injectIFrames(htmlString) {
    const el = document.createElement("div");
    el.innerHTML = htmlString;

    for (const script of el.querySelectorAll("script")) {
      const src = new URL(script.src);

      // check for Gist resources
      if (src.hostname === "gist.github.com") {
        const iFrame = document.createElement("iframe");
        iFrame.width = "100%";
        iFrame.frameBorder = 0;

        const regex = /\/|\./g;
        const id = src.pathname.replace(regex, "-");
        const file = src.searchParams.get("file")
          ? src.searchParams.get("file").replace(regex, "-")
          : null;

        iFrame.dataset.href = src.href;
        iFrame.id = file ? `gist${id}-${file}` : `gist${id}`;

        // insert iframe after script tag
        script.parentNode.insertBefore(iFrame, script.nextSibling);
      }
    }
    return el.innerHTML;
  }

  return render(injectIFrames(htmlString));
}
