// Clickable robot diagrams. Any page can use one:
// <div class="anatomy" data-parts="path/to/parts.json"> with an SVG whose
// clickable groups have class="hs" and data-k="<key in the JSON>".
(function () {
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  function setup(root) {
    var detail = root.querySelector(".anatomy-detail");
    var groups = root.querySelectorAll(".hs");
    fetch(root.dataset.parts)
      .then(function (r) { return r.json(); })
      .then(function (parts) {
        function show(key) {
          var p = parts[key];
          if (!p) return;
          groups.forEach(function (g) { g.classList.toggle("on", g.dataset.k === key); });
          detail.innerHTML =
            "<h3>" + esc(p.name) + "</h3>" +
            "<p>" + esc(p.summary) + "</p>" +
            "<dl>" +
            (p.code && p.code !== "—" ? "<dt>In code</dt><dd><code>" + esc(p.code) + "</code></dd>" : "") +
            "<dt>Range</dt><dd>" + esc(p.range) + "</dd>" +
            (p.event && p.event !== "—" ? "<dt>Event</dt><dd>" + esc(p.event) + "</dd>" : "") +
            "</dl>" +
            (p.tip ? '<p class="anatomy-tip"><strong>Lab tip.</strong> ' + esc(p.tip) + "</p>" : "");
        }
        groups.forEach(function (g) {
          g.addEventListener("click", function () { show(g.dataset.k); });
          g.addEventListener("keydown", function (e) {
            if (e.key === "Enter" || e.key === " ") { e.preventDefault(); show(g.dataset.k); }
          });
        });
        if (groups.length) show(root.dataset.default || groups[0].dataset.k);
      })
      .catch(function () {
        detail.innerHTML = "<p>The part descriptions could not be loaded. Check the data-parts path and the JSON file.</p>";
      });
  }

  function init() { document.querySelectorAll(".anatomy").forEach(setup); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
