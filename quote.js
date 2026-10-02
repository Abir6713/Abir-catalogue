/* ABIR PUBLISHING — Modal + Pricing */
(function () {
  "use strict";

  var WA_NUMBER = "2349066324358";
  var EMAIL = "Ademolaadedayo52@gmail.com";
  var SUBMIT_PAGE = "submit-manuscript.html";

  var css = document.createElement("style");
  css.textContent = `
.quote-modal-overlay{position:fixed;inset:0;background:rgba(10,25,47,.75);z-index:2000;display:none;align-items:center;justify-content:center;padding:20px;opacity:0;transition:opacity .25s;}
.quote-modal-overlay.open{display:flex;opacity:1;}
.quote-modal{background:#fff;border-radius:16px;max-width:460px;width:100%;padding:38px 34px 34px;box-shadow:0 30px 80px rgba(0,0,0,.35);position:relative;max-height:90vh;overflow-y:auto;}
.quote-modal-close{position:absolute;top:14px;right:16px;width:34px;height:34px;border:none;background:#f5f0e4;color:#0A192F;border-radius:50%;font-size:20px;line-height:1;cursor:pointer;font-family:inherit;}
.quote-modal-close:hover{background:#D4AF37;color:#fff;}
.quote-modal-kicker{font-size:11px;font-weight:800;letter-spacing:2px;text-transform:uppercase;color:#D4AF37;margin-bottom:12px;}
.quote-modal-title{font-family:'Playfair Display',serif;font-size:24px;color:#0A192F;line-height:1.25;margin-bottom:10px;font-weight:700;}
.quote-modal-sub{font-size:13.5px;color:#6c757d;margin-bottom:26px;line-height:1.6;}
.quote-modal-options{display:grid;gap:12px;}
.quote-option{display:flex;align-items:center;gap:16px;padding:18px 20px;border:1.5px solid #e5e0d6;border-radius:12px;cursor:pointer;background:#fff;text-decoration:none;color:inherit;transition:all .2s;}
.quote-option:hover{transform:translateY(-2px);box-shadow:0 12px 28px rgba(10,25,47,.12);}
.quote-option.wa:hover{border-color:#25D366;background:#f0fdf4;}
.quote-option.email:hover{border-color:#0A192F;background:#f5f7fb;}
.quote-option.manuscript:hover{border-color:#D4AF37;background:#fffbf0;}
.quote-option-icon{width:48px;height:48px;border-radius:12px;display:grid;place-items:center;font-size:22px;flex-shrink:0;color:#fff;font-weight:700;}
.quote-option.wa .quote-option-icon{background:linear-gradient(135deg,#25D366,#128C7E);}
.quote-option.email .quote-option-icon{background:linear-gradient(135deg,#0A192F,#172A45);}
.quote-option.manuscript .quote-option-icon{background:linear-gradient(135deg,#D4AF37,#a8871f);}
.quote-option-label{font-family:'Playfair Display',serif;font-size:16px;font-weight:700;color:#0A192F;margin-bottom:2px;}
.quote-option-desc{font-size:12.5px;color:#6c757d;}
.quote-option-arrow{margin-left:auto;color:#D4AF37;font-size:18px;font-weight:700;}
.pricing{background:#fff;border:1px solid #e5e0d6;border-radius:14px;overflow:hidden;margin:28px 0 38px;box-shadow:0 12px 36px rgba(10,25,47,.08);}
.pricing-head{background:linear-gradient(135deg,#0A192F,#172A45);color:#fff;padding:16px 26px;font-size:11.5px;font-weight:700;letter-spacing:1.8px;text-transform:uppercase;display:flex;align-items:center;gap:10px;}
.pricing-head::before{content:'';width:8px;height:8px;background:#D4AF37;border-radius:50%;}
.pricing-row{display:grid;grid-template-columns:1.1fr .9fr 1.4fr;border-bottom:1px solid #e5e0d6;}
.pricing-row:last-child{border-bottom:none;}
.pricing-row > div{padding:18px 22px;font-size:14px;line-height:1.6;}
.pricing-row .tier-label{font-family:'Playfair Display',serif;font-size:15.5px;font-weight:700;color:#0A192F;}
.pricing-row .tier-label span{display:block;font-family:'Inter',sans-serif;font-size:10.5px;font-weight:500;color:#6c757d;letter-spacing:.8px;text-transform:uppercase;margin-top:4px;}
.pricing-row .tier-price{font-family:'Playfair Display',serif;font-size:17px;font-weight:700;color:#D4AF37;border-left:1px solid #e5e0d6;border-right:1px solid #e5e0d6;display:flex;align-items:center;}
.pricing-row .tier-desc{color:#3a3a3a;font-size:13px;display:flex;align-items:center;}
.pricing-note{padding:16px 22px;background:#fdfcf9;font-size:12.5px;color:#6c757d;font-style:italic;border-top:1px solid #e5e0d6;}
@media(max-width:700px){.pricing-row{grid-template-columns:1fr;}.pricing-row .tier-price{border-left:none;border-right:none;border-top:1px solid #e5e0d6;border-bottom:1px solid #e5e0d6;}}
  `;
  document.head.appendChild(css);

  var DATA = {
    "Topic & Content Planning": {hero:"From ₦50,000 · Delivery: 5–7 working days",head:"Pricing — Based on Chapter Count",rows:[["Small","Up to 8 chapters","₦50,000","Best for short workbooks, single-semester modules and pilot projects."],["Standard","9–15 chapters","₦80,000","The typical full textbook — chapter breakdown, learning outcomes, sequencing."],["Full","16+ chapters","₦120,000","Large multi-part textbooks with complex curriculum alignment."]],note:"Final quote confirmed after we know your subject, audience and target length."},
    "Copywriting": {hero:"From ₦30,000 · Delivery: 7–10 working days",head:"Pricing — Based on Deliverables",rows:[["Blurb Only","Back cover","₦30,000","A single 100–150 word back-cover blurb."],["Blurb + Bio","+ Tagline","₦50,000","Blurb, professional author bio, tagline and subtitle."],["Full Package","All copy","₦80,000","Blurb, bio, tagline, intro copy, marketing description and social copy."]],note:"Two rounds of revisions included in every tier."},
    "Content Development": {hero:"From ₦450,000 · Delivery: 8–16 weeks",head:"Pricing — Based on Word Count",rows:[["Small","Up to 30,000 words","₦450,000","Short textbook or supplementary course material."],["Standard","30,000–60,000 words","₦750,000","A full standard textbook. Approx. ₦15/word."],["Full","60,000+ words","From ₦1,100,000","Large comprehensive textbook with worked examples."]],note:"Priced at approximately ₦15 per word — matching market rates for professional ghostwriting in Nigeria."},
    "Image Sourcing & Placement": {hero:"From ₦50,000 · Delivery: 7–14 working days",head:"Pricing — Based on Image Count",rows:[["Basic","10–20 images","₦50,000","Stock photos sourced, placed and captioned."],["Standard","20–40 images","₦80,000","Full textbook coverage with figures and captions."],["Custom","40+ or illustrations","From ₦150,000","Custom-drawn diagrams and scientific illustrations."]],note:"Stock images are licensed for print. Custom illustrations are drawn specifically for your textbook."},
    "Editing": {hero:"From ₦2.50/word · Delivery: 2–4 weeks",head:"Pricing — Based on Editing Depth",rows:[["Line Edit","Grammar & style","₦2.50/word","Grammar, spelling, punctuation. 50,000 words ≈ ₦125,000."],["Structural + Line","Most common","₦3.70/word","Chapter structure, flow, argument. 50,000 words ≈ ₦185,000."],["Full Developmental","Deep edit","₦4.50/word","Rewriting and restructuring. 50,000 words ≈ ₦225,000."]],note:"Rates match Nigerian market benchmarks for professional academic editing."},
    "Proofreading": {hero:"From ₦2.00/word · Delivery: 5–10 working days",head:"Pricing — Based on Format",rows:[["Manuscript","Word file","₦2.00/word","Before layout. 50,000 words ≈ ₦100,000."],["Laid-out Pages","PDF or InDesign","₦2.40/word","Final proofread on designed pages. 50,000 words ≈ ₦120,000."],["Rush / Large","Priority","₦3.00/word","Priority turnaround. 50,000 words ≈ ₦150,000."]],note:"Two full passes included in every tier."},
    "Manuscript Preparation": {hero:"From ₦50,000 · Delivery: 5–10 working days",head:"Pricing — Based on Chapter Count",rows:[["Small","Up to 8 chapters","₦50,000","Short manuscripts with basic front matter."],["Standard","9–15 chapters","₦80,000","Full front matter, back matter and heading hierarchy."],["Full","16+ chapters","₦120,000","Large manuscripts with appendices, glossary and index."]],note:"Delivered as both a master Word document and a print-ready PDF."},
    "Corrections & Revision": {hero:"From ₦40,000 · Delivery: 3–7 working days",head:"Pricing — Based on Rounds",rows:[["Single Round","One set of changes","₦40,000","One batch of corrections applied and re-proofed."],["Two Rounds","Reviewer + author","₦70,000","Two distinct revision rounds."],["Ongoing","Retainer","From ₦150,000","Continuous revision support."]],note:"Every tier includes a full change log."},
    "Page Design & Layout": {hero:"From ₦150,000 · Delivery: 3–6 weeks",head:"Pricing — Based on Page Count",rows:[["Small","Up to 100 pages","₦150,000","Short workbooks and supplementary texts."],["Standard","100–250 pages","₦200,000","Full textbook layout with images and page numbers."],["Complex","250+ pages","From ₦300,000","Large textbooks with tables, charts and colour figures."]],note:"Delivered as print-ready PDF or native InDesign files."},
    "Cover Design": {hero:"From ₦50,000 · Delivery: 7–14 working days",head:"Pricing — Based on Deliverables",rows:[["Front Only","Front cover","₦50,000","Single front cover concept."],["Front + Spine + Back","Full wrap","₦80,000","Full print cover with ISBN and barcode placement."],["Full Package","Print + digital","₦120,000","Three concepts, full wrap, CMYK print + RGB digital."]],note:"Unlimited refinements included on the chosen concept."},
    "Prepress Preparation": {hero:"From ₦60,000 · Delivery: 3–5 working days",head:"Pricing — Based on Complexity",rows:[["Text Only","Simple documents","₦60,000","Standard preflight and PDF/X export."],["Standard","Text + images","₦90,000","Image resolution checks and colour mode conversion."],["Complex","Colour & charts","From ₦150,000","Full-colour textbooks with charts and tables."]],note:"Every tier includes a completed preflight report."},
    "Printing": {hero:"Custom Quote · Based on run size",head:"Pricing — Per Copy, Based on Quantity",rows:[["Short Run","~100 copies","₦2,800 – ₦3,500","Per copy. Best for departmental runs."],["Medium Run","~500 copies","₦1,800 – ₦2,500","Per copy. Best value for faculty distribution."],["Long Run","1,000+ copies","₦1,300 – ₦1,700","Per copy. Best for nationwide distribution."]],note:"Rates are for A5 textbooks, 100–150 pages, perfect-bound."},
    "Finishing & Binding": {hero:"Custom Quote · Based on style",head:"Pricing — Per Copy, Based on Binding Style",rows:[["Saddle-Stitch","Under 80 pages","From ₦150","Per copy. Stapled along the spine."],["Perfect Binding","80–400 pages","From ₦350","Per copy. Glued square spine."],["Hardcover","Reference texts","From ₦800","Per copy. Rigid board cover."]],note:"Binding cost is usually included in the per-copy printing quote when ordered together."},
    "Final Inspection": {hero:"From ₦40,000 · Delivery: 2–4 working days",head:"Pricing — Based on Print Run Size",rows:[["Small","Up to 200 copies","₦40,000","Multiple sample copies inspected, written report."],["Medium","200–1,000 copies","₦70,000","Expanded sampling across the print run."],["Large","1,000+ copies","₦100,000","Full statistical sampling and QC documentation."]],note:"Every inspection ends with a written pass/fail report."}
  };

  function buildPricing(data) {
    var rows = data.rows.map(function (r) {
      return '<div class="pricing-row"><div class="tier-label">' + r[0] + '<span>' + r[1] + '</span></div><div class="tier-price">' + r[2] + '</div><div class="tier-desc">' + r[3] + '</div></div>';
    }).join('');
    return '<div class="pricing"><div class="pricing-head">' + data.head + '</div>' + rows + '<div class="pricing-note">' + data.note + '</div></div>';
  }

  function findKey(text) {
    text = text.trim();
    for (var key in DATA) {
      if (DATA.hasOwnProperty(key)) {
        if (text === key) return key;
        if (text.replace(/&amp;/g, "&") === key) return key;
        if (key.indexOf(text.replace(/&amp;/g, "&")) === 0) return key;
      }
    }
    return null;
  }

  function updatePage() {
    var h1 = document.querySelector(".svc-hero h1");
    if (!h1) return;
    var key = findKey(h1.textContent);
    if (!key) return;
    var data = DATA[key];
    var tag = document.querySelector(".svc-hero .tag");
    if (tag) tag.textContent = data.hero;
    if (!document.querySelector(".pricing")) {
      var cta = document.querySelector(".cta-box");
      if (cta) {
        var wrap = document.createElement("div");
        wrap.innerHTML = buildPricing(data);
        cta.parentNode.insertBefore(wrap.firstChild, cta);
      }
    }
  }

  function buildModal() {
    var overlay = document.createElement("div");
    overlay.className = "quote-modal-overlay";
    overlay.id = "quoteModalOverlay";
    overlay.innerHTML =
      '<div class="quote-modal">' +
        '<button class="quote-modal-close" type="button">&times;</button>' +
        '<div class="quote-modal-kicker">Get in Touch</div>' +
        '<div class="quote-modal-title">How would you like to reach us?</div>' +
        '<div class="quote-modal-sub" id="qService">Choose the contact method that suits you best.</div>' +
        '<div class="quote-modal-options">' +
          '<a class="quote-option wa" id="qWa" href="#" target="_blank" rel="noopener"><div class="quote-option-icon">💬</div><div><div class="quote-option-label">WhatsApp</div><div class="quote-option-desc">Chat instantly · fastest reply</div></div><div class="quote-option-arrow">→</div></a>' +
          '<a class="quote-option email" id="qEmail" href="#" target="_blank" rel="noopener"><div class="quote-option-icon">✉</div><div><div class="quote-option-label">Email (Gmail)</div><div class="quote-option-desc">Opens Gmail compose in a new tab</div></div><div class="quote-option-arrow">→</div></a>' +
          '<a class="quote-option manuscript" id="qManuscript" href="' + SUBMIT_PAGE + '"><div class="quote-option-icon">📄</div><div><div class="quote-option-label">Submit Manuscript</div><div class="quote-option-desc">Upload your file &amp; get a quote</div></div><div class="quote-option-arrow">→</div></a>' +
        '</div>' +
      '</div>';
    document.body.appendChild(overlay);
    return overlay;
  }

  function buildGmailUrl(service) {
    var subject = encodeURIComponent("Enquiry: " + service);
    var body = encodeURIComponent("Hi Abir Publishing,\n\nI would like to enquire about " + service + ".\n\nProject details:\n\n— \n\nThank you.");
    return "https://mail.google.com/mail/?view=cm&fs=1&to=" + EMAIL + "&su=" + subject + "&body=" + body;
  }

  function openModal(service) {
    var overlay = document.getElementById("quoteModalOverlay") || buildModal();
    document.getElementById("qWa").href = "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent("Enquiry: " + service);
    document.getElementById("qEmail").href = buildGmailUrl(service);
    document.getElementById("qService").textContent = service;
    var m = document.getElementById("qManuscript");
    if (window.location.pathname.indexOf(SUBMIT_PAGE) !== -1) m.style.display = "none";
    else m.style.display = "";
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    var o = document.getElementById("quoteModalOverlay");
    if (o) { o.classList.remove("open"); document.body.style.overflow = ""; }
  }

  function extractService(href) {
    try {
      var url = new URL(href);
      var t = url.searchParams.get("text") || url.searchParams.get("subject") || "";
      var c = t.replace(/^Enquiry\s*:\s*/i, "").replace(/^New\s+Enquiry.*?—\s*/i, "").trim();
      return c || null;
    } catch (e) { return null; }
  }

  function getServiceName(link) {
    var fromHref = extractService(link.href);
    if (fromHref) return fromHref;
    var h1 = document.querySelector(".svc-hero h1");
    if (h1) return h1.textContent.trim();
    return "Abir Publishing Services";
  }

  function wire() {
    document.addEventListener("click", function (e) {
      var o = document.getElementById("quoteModalOverlay");
      if (o && e.target === o) closeModal();
      if (e.target.classList && e.target.classList.contains("quote-modal-close")) closeModal();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeModal();
    });

    // Catch clicks on any .cta-btn link
    document.addEventListener("click", function (e) {
      var link = e.target.closest ? e.target.closest("a.cta-btn") : null;
      if (!link) return;
      if (link.closest(".quote-modal")) return;
      e.preventDefault();
      openModal(getServiceName(link));
    });
  }

  function run() {
    updatePage();
    wire();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }
})();
