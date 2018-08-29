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
                  $(card).css({
                    "background-image":
                      "radial-gradient(circle, #ff0000, #f56d00, #d6a700, #a0d600, #00ff0b)"
                  });

                  $("#clouds").animate(
                    {
                      "background-image":
                        "radial-gradient(circle, #d300ff, #ff00a8, #ff5250, #ffb800, #f4ff00)"
                    },
                    5000,
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
