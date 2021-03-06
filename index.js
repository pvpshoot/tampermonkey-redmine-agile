// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://pm.restr.im/
// @include      https://pm.restr.im/projects/vb-mobile/agile/*
// @grant        none
// ==/UserScript==

(function() {
  const init = params => {
    if (!window.$) return;
    clearInterval(timer);
    const table = $("table.list");
    const rows = table.find(".swimlane.issue");

    rows.each((_, row) => {
      $(row)
        .find("td")
        .each((_, col) => {
          $(col)
            .find(".issue-card")
            .each((_, card) => {
              const atr = $(card)
                .find(".attributes")
                .text()
                .split(": ")[1]
                .trim()
                .split(" ")[0];

              if (atr === "Low") {
                $(card).css({
                  "background-color": "#eaf7ff"
                });
              }

              if (atr === "Urgent") {
                const loop = () => {
                  $(card).css({
                    "background-color": "red"
                  });
                  $(card)
                    .find("a")
                    .css({ color: "#fff" });
                  $(card)
                    .find(".attributes")
                    .css({ color: "#fff" });
                };

                $(card).css({
                  "background-color": "red"
                });
                $(card)
                  .find("a")
                  .css({ color: "#fff" });
                $(card)
                  .find(".attributes")
                  .css({ color: "#fff" });
              }

              if (atr === "High") {
                $(card).css({
                  "background-color": "#fee"
                });
              }

              if (atr === "Immediate") {
                function loop() {
                  // $(card).css({
                  //   "background-image":
                  //     "radial-gradient(circle, #ff0000, #f56d00, #d6a700, #a0d600, #00ff0b)"
                  // });
                  $(card).css({
                    "background-color": "red"
                  });

                  $(card).animate(
                    {
                      "background-color": "white"
                    },
                    300,
                    "linear",
                    () => {
                      loop();
                    }
                  );
                }
                loop();
              }
            });
        });
    });
  };

  const timer = setInterval(init, 300);
  document.addEventListener("DOMContentLoaded", init);
})();
