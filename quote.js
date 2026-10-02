/* ==========================================================
   QUOTE MODAL — gives visitors a choice between WhatsApp
   and Email when they click "Request a Quote".
   ========================================================== */
(function () {
  "use strict";

  // ⚙️ CONFIGURE HERE
  var WHATSAPP_NUMBER = "2349066324358";           // no +, no spaces
  var EMAIL_ADDRESS   = "Ademolaadedayo52@gmail.com";
  var DEFAULT_SERVICE = "Abir Publishing Services";

  // Extract a clean service name from a wa.me link's ?text= param
  function extractServiceName(href) {
    try {
      var url = new URL(href);
      var text = url.searchParams.get("text") || "";
      // decodeURIComponent is handled by searchParams.get
      var cleaned = text
        .replace(/^Enquiry\s*:\s*/i, "")
        .replace(/^New\s+Enquiry.*?—\s*/i, "")
        .trim();
      return cleaned || DEFAULT_SERVICE;
    } catch (e) {
      return DEFAULT_SERVICE;
    }
  }

  // Build the modal once
  function buildModal() {
    var overlay = document.createElement("div");
    overlay.className = "quote-modal-overlay";
    overlay.id = "quoteModalOverlay";
    overlay.innerHTML =
      '<div class="quote-modal" role="dialog" aria-modal="true" aria-labelledby="quoteModalTitle">' +
        '<button class="quote-modal-close" type="button" aria-label="Close">&times;</button>' +
        '<div class="quote-modal-kicker">Request a Quote</div>' +
        '<div class="quote-modal-title" id="quoteModalTitle">How would you like to reach us?</div>' +
        '<div class="quote-modal-sub" id="quoteModalService">Choose the contact method that suits you best.</div>' +
        '<div class="quote-modal-options">' +
          '<a class="quote-option wa" id="quoteOptionWa" href="#" target="_blank" rel="noopener">' +
            '<div class="quote-option-icon">💬</div>' +
            '<div>' +
              '<div class="quote-option-label">WhatsApp</div>' +
              '<div class="quote-option-desc">Chat instantly · fastest reply</div>' +
            '</div>' +
            '<div class="quote-option-arrow">→</div>' +
          '</a>' +
          '<a class="quote-option email" id="quoteOptionEmail" href="#">' +
            '<div class="quote-option-icon">✉</div>' +
            '<div>' +
              '<div class="quote-option-label">Email</div>' +
              '<div class="quote-option-desc">Send a detailed message</div>' +
            '</div>' +
            '<div class="quote-option-arrow">→</div>' +
          '</a>' +
        '</div>' +
      '</div>';
    document.body.appendChild(overlay);
    return overlay;
  }

  // Show the modal with the given service name
  function openModal(serviceName) {
    var overlay = document.getElementById("quoteModalOverlay") || buildModal();
    var waBtn = document.getElementById("quoteOptionWa");
    var emailBtn = document.getElementById("quoteOptionEmail");
    var serviceLine = document.getElementById("quoteModalService");

    var waHref = "https://wa.me/" + WHATSAPP_NUMBER +
      "?text=" + encodeURIComponent("Enquiry: " + serviceName);
    var emailHref = "mailto:" + EMAIL_ADDRESS +
      "?subject=" + encodeURIComponent("Enquiry: " + serviceName);

    waBtn.setAttribute("href", waHref);
    emailBtn.setAttribute("href", emailHref);
    serviceLine.textContent = serviceName;

    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    var overlay = document.getElementById("quoteModalOverlay");
    if (overlay) {
      overlay.classList.remove("open");
      document.body.style.overflow = "";
    }
  }

  // Wire it up once DOM is ready
  function init() {
    // Close handlers
    document.addEventListener("click", function (e) {
      var overlay = document.getElementById("quoteModalOverlay");
      if (!overlay) return;
      if (e.target === overlay) closeModal();
      if (e.target.classList && e.target.classList.contains("quote-modal-close")) closeModal();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeModal();
    });

    // Intercept any CTA button pointing to WhatsApp
    var ctas = document.querySelectorAll('a.cta-btn[href*="wa.me"]');
    ctas.forEach(function (link) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        var service = extractServiceName(link.href);
        openModal(service);
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
