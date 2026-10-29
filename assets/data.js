/* ==================================================================
   MAYANTOC — DATA
   ================================================================== */

/* ---- Helper: gumagawa ng barangay object mula sa shorthand ----
   Format ng bawat row: [position, imagePath, name]
   ------------------------------------------------------------------ */
function makeBrgy(name, opts) {
  return {
    name: name,
    image: opts.image || "",
    logo: opts.logo || "",
    description: opts.description || "",
    history: opts.history || "",
    officials: (opts.officials || []).map(function (row) {
      return { position: row[0] || "", img: row[1] || "", name: row[2] || "" };
    }),
    skOfficials: (opts.sk || []).map(function (row) {
      return { position: row[0] || "", img: row[1] || "", name: row[2] || "" };
    }),
    contact: opts.contact || { address: "", phone: "", email: "", hours: "" }
  };
}

window.MAY = window.MAY || {};

window.MAY.DATA = {

  // ============================================================
  // BARANGAYS
  // ============================================================
  barangays: [
    makeBrgy("Ambalingit", {
      image: "assets/icon1.jpg",
      logo:  "assets/icon1.jpg",
      description: "",
      history: "",
      officials: [
        ["Punong Barangay",    "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Secretary", "assets/icon1.jpg", ""],
        ["Barangay Treasurer", "assets/icon1.jpg", ""]
      ],
      sk: [
        ["SK Chairperson", "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""]
      ],
      contact: { address: "", phone: "", email: "", hours: "" }
    }),

    makeBrgy("Baybayaoas", {
      image: "assets/icon1.jpg",
      logo:  "assets/icon1.jpg",
      description: "",
      history: "",
      officials: [
        ["Punong Barangay",    "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Secretary", "assets/icon1.jpg", ""],
        ["Barangay Treasurer", "assets/icon1.jpg", ""]
      ],
      sk: [
        ["SK Chairperson", "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""]
      ],
      contact: { address: "", phone: "", email: "", hours: "" }
    }),

    makeBrgy("Bigbiga", {
      image: "assets/icon1.jpg",
      logo:  "assets/icon1.jpg",
      description: "",
      history: "",
      officials: [
        ["Punong Barangay",    "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Secretary", "assets/icon1.jpg", ""],
        ["Barangay Treasurer", "assets/icon1.jpg", ""]
      ],
      sk: [
        ["SK Chairperson", "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""]
      ],
      contact: { address: "", phone: "", email: "", hours: "" }
    }),

    makeBrgy("Binbinaca", {
      image: "assets/icon1.jpg",
      logo:  "assets/icon1.jpg",
      description: "",
      history: "",
      officials: [
        ["Punong Barangay",    "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Secretary", "assets/icon1.jpg", ""],
        ["Barangay Treasurer", "assets/icon1.jpg", ""]
      ],
      sk: [
        ["SK Chairperson", "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""]
      ],
      contact: { address: "", phone: "", email: "", hours: "" }
    }),

    makeBrgy("Calabtangan", {
      image: "assets/icon1.jpg",
      logo:  "assets/icon1.jpg",
      description: "",
      history: "",
      officials: [
        ["Punong Barangay",    "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Secretary", "assets/icon1.jpg", ""],
        ["Barangay Treasurer", "assets/icon1.jpg", ""]
      ],
      sk: [
        ["SK Chairperson", "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""]
      ],
      contact: { address: "", phone: "", email: "", hours: "" }
    }),

    makeBrgy("Caocaoayan", {
      image: "assets/icon1.jpg",
      logo:  "assets/icon1.jpg",
      description: "",
      history: "",
      officials: [
        ["Punong Barangay",    "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Secretary", "assets/icon1.jpg", ""],
        ["Barangay Treasurer", "assets/icon1.jpg", ""]
      ],
      sk: [
        ["SK Chairperson", "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""]
      ],
      contact: { address: "", phone: "", email: "", hours: "" }
    }),

    makeBrgy("Carabaoan", {
      image: "assets/icon1.jpg",
      logo:  "assets/icon1.jpg",
      description: "",
      history: "",
      officials: [
        ["Punong Barangay",    "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Secretary", "assets/icon1.jpg", ""],
        ["Barangay Treasurer", "assets/icon1.jpg", ""]
      ],
      sk: [
        ["SK Chairperson", "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""]
      ],
      contact: { address: "", phone: "", email: "", hours: "" }
    }),

    makeBrgy("Cubcub", {
      image: "assets/icon1.jpg",
      logo:  "assets/icon1.jpg",
      description: "",
      history: "",
      officials: [
        ["Punong Barangay",    "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Secretary", "assets/icon1.jpg", ""],
        ["Barangay Treasurer", "assets/icon1.jpg", ""]
      ],
      sk: [
        ["SK Chairperson", "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""]
      ],
      contact: { address: "", phone: "", email: "", hours: "" }
    }),

    makeBrgy("Gayonggayong", {
      image: "assets/icon1.jpg",
      logo:  "assets/icon1.jpg",
      description: "",
      history: "",
      officials: [
        ["Punong Barangay",    "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Secretary", "assets/icon1.jpg", ""],
        ["Barangay Treasurer", "assets/icon1.jpg", ""]
      ],
      sk: [
        ["SK Chairperson", "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""]
      ],
      contact: { address: "", phone: "", email: "", hours: "" }
    }),

    makeBrgy("Gossood", {
      image: "assets/icon1.jpg",
      logo:  "assets/icon1.jpg",
      description: "",
      history: "",
      officials: [
        ["Punong Barangay",    "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Secretary", "assets/icon1.jpg", ""],
        ["Barangay Treasurer", "assets/icon1.jpg", ""]
      ],
      sk: [
        ["SK Chairperson", "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""]
      ],
      contact: { address: "", phone: "", email: "", hours: "" }
    }),

    makeBrgy("Labney", {
      image: "assets/icon1.jpg",
      logo:  "assets/icon1.jpg",
      description: "",
      history: "",
      officials: [
        ["Punong Barangay",    "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Secretary", "assets/icon1.jpg", ""],
        ["Barangay Treasurer", "assets/icon1.jpg", ""]
      ],
      sk: [
        ["SK Chairperson", "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""]
      ],
      contact: { address: "", phone: "", email: "", hours: "" }
    }),

    makeBrgy("Mamonit", {
      image: "assets/icon1.jpg",
      logo:  "assets/icon1.jpg",
      description: "",
      history: "",
      officials: [
        ["Punong Barangay",    "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Secretary", "assets/icon1.jpg", ""],
        ["Barangay Treasurer", "assets/icon1.jpg", ""]
      ],
      sk: [
        ["SK Chairperson", "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""]
      ],
      contact: { address: "", phone: "", email: "", hours: "" }
    }),

    makeBrgy("Maniniog", {
      image: "assets/icon1.jpg",
      logo:  "assets/icon1.jpg",
      description: "",
      history: "",
      officials: [
        ["Punong Barangay",    "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Secretary", "assets/icon1.jpg", ""],
        ["Barangay Treasurer", "assets/icon1.jpg", ""]
      ],
      sk: [
        ["SK Chairperson", "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""]
      ],
      contact: { address: "", phone: "", email: "", hours: "" }
    }),

    makeBrgy("Mapandan", {
      image: "assets/icon1.jpg",
      logo:  "assets/icon1.jpg",
      description: "",
      history: "",
      officials: [
        ["Punong Barangay",    "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Secretary", "assets/icon1.jpg", ""],
        ["Barangay Treasurer", "assets/icon1.jpg", ""]
      ],
      sk: [
        ["SK Chairperson", "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""]
      ],
      contact: { address: "", phone: "", email: "", hours: "" }
    }),

    makeBrgy("Melecio Manganaan", {
      image: "assets/icon1.jpg",
      logo:  "assets/icon1.jpg",
      description: "",
      history: "",
      officials: [
        ["Punong Barangay",    "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Secretary", "assets/icon1.jpg", ""],
        ["Barangay Treasurer", "assets/icon1.jpg", ""]
      ],
      sk: [
        ["SK Chairperson", "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""]
      ],
      contact: { address: "", phone: "", email: "", hours: "" }
    }),

    makeBrgy("Nambalan", {
      image: "assets/icon1.jpg",
      logo:  "assets/icon1.jpg",
      description: "",
      history: "",
      officials: [
        ["Punong Barangay",    "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Secretary", "assets/icon1.jpg", ""],
        ["Barangay Treasurer", "assets/icon1.jpg", ""]
      ],
      sk: [
        ["SK Chairperson", "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""]
      ],
      contact: { address: "", phone: "", email: "", hours: "" }
    }),

    makeBrgy("Pedro L. Quines", {
      image: "assets/icon1.jpg",
      logo:  "assets/icon1.jpg",
      description: "",
      history: "",
      officials: [
        ["Punong Barangay",    "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Secretary", "assets/icon1.jpg", ""],
        ["Barangay Treasurer", "assets/icon1.jpg", ""]
      ],
      sk: [
        ["SK Chairperson", "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""]
      ],
      contact: { address: "", phone: "", email: "", hours: "" }
    }),

    makeBrgy("Pitombayog", {
      image: "assets/icon1.jpg",
      logo:  "assets/icon1.jpg",
      description: "",
      history: "",
      officials: [
        ["Punong Barangay",    "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Secretary", "assets/icon1.jpg", ""],
        ["Barangay Treasurer", "assets/icon1.jpg", ""]
      ],
      sk: [
        ["SK Chairperson", "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""]
      ],
      contact: { address: "", phone: "", email: "", hours: "" }
    }),

    makeBrgy("Poblacion Norte", {
      image: "assets/icon1.jpg",
      logo:  "assets/icon1.jpg",
      description: "",
      history: "",
      officials: [
        ["Punong Barangay",    "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Secretary", "assets/icon1.jpg", ""],
        ["Barangay Treasurer", "assets/icon1.jpg", ""]
      ],
      sk: [
        ["SK Chairperson", "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""]
      ],
      contact: { address: "", phone: "", email: "", hours: "" }
    }),

    makeBrgy("Poblacion Sur", {
      image: "assets/icon1.jpg",
      logo:  "assets/icon1.jpg",
      description: "",
      history: "",
      officials: [
        ["Punong Barangay",    "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Secretary", "assets/icon1.jpg", ""],
        ["Barangay Treasurer", "assets/icon1.jpg", ""]
      ],
      sk: [
        ["SK Chairperson", "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""]
      ],
      contact: { address: "", phone: "", email: "", hours: "" }
    }),

    makeBrgy("Rotrottooc", {
      image: "assets/icon1.jpg",
      logo:  "assets/icon1.jpg",
      description: "",
      history: "",
      officials: [
        ["Punong Barangay",    "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Secretary", "assets/icon1.jpg", ""],
        ["Barangay Treasurer", "assets/icon1.jpg", ""]
      ],
      sk: [
        ["SK Chairperson", "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""]
      ],
      contact: { address: "", phone: "", email: "", hours: "" }
    }),

    makeBrgy("San Bartolome", {
      image: "assets/icon1.jpg",
      logo:  "assets/icon1.jpg",
      description: "",
      history: "",
      officials: [
        ["Punong Barangay",    "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Secretary", "assets/icon1.jpg", ""],
        ["Barangay Treasurer", "assets/icon1.jpg", ""]
      ],
      sk: [
        ["SK Chairperson", "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""]
      ],
      contact: { address: "", phone: "", email: "", hours: "" }
    }),

    makeBrgy("San Jose", {
      image: "assets/icon1.jpg",
      logo:  "assets/icon1.jpg",
      description: "",
      history: "",
      officials: [
        ["Punong Barangay",    "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Secretary", "assets/icon1.jpg", ""],
        ["Barangay Treasurer", "assets/icon1.jpg", ""]
      ],
      sk: [
        ["SK Chairperson", "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""]
      ],
      contact: { address: "", phone: "", email: "", hours: "" }
    }),

    makeBrgy("Taldiapan", {
      image: "assets/icon1.jpg",
      logo:  "assets/icon1.jpg",
      description: "",
      history: "",
      officials: [
        ["Punong Barangay",    "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Kagawad",   "assets/icon1.jpg", ""],
        ["Barangay Secretary", "assets/icon1.jpg", ""],
        ["Barangay Treasurer", "assets/icon1.jpg", ""]
      ],
      sk: [
        ["SK Chairperson", "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""],
        ["SK Kagawad",     "assets/icon1.jpg", ""]
      ],
      contact: { address: "", phone: "", email: "", hours: "" }
    })
  ],

  // ============================================================
  // SERVICES
  // ============================================================
  services: [
    { name: "Business permits", desc: "Bagong permit, renewal, at closure ng negosyo.", office: "Business Permits and Licensing Office", reqs: "Barangay clearance, DTI/SEC registration, lease contract or land title" },
    { name: "Civil registry", desc: "Birth, marriage, at death certificates; late registration at correction.", office: "Local Civil Registry Office", reqs: "Valid ID, accomplished request form, applicable fees" },
    { name: "Real property tax", desc: "Bayad ng amilyar, tax declaration, at tax clearance.", office: "Municipal Treasurer's Office", reqs: "Latest official receipt or tax declaration number" },
    { name: "Health services", desc: "Konsulta, bakuna, prenatal care, at medical assistance.", office: "Rural Health Unit", reqs: "PhilHealth ID kung meron, barangay residency" },
    { name: "Social assistance", desc: "Tulong para sa senior citizens, PWD, solo parents at pamilyang nangangailangan.", office: "MSWDO", reqs: "Valid ID, barangay certificate of indigency" },
    { name: "Agriculture support", desc: "Binhi, technical assistance, at programa para sa magsasaka.", office: "Municipal Agriculture Office", reqs: "RSBSA registration, barangay certification" },
    { name: "Building permits", desc: "Building, occupancy, at electrical permits; public works requests.", office: "Municipal Engineering Office", reqs: "Lot title, signed plans, barangay clearance" },
    { name: "Disaster response", desc: "Emergency response, rescue, at relief operations.", office: "MDRRMO", reqs: "Tumawag sa hotline para sa agarang tulong" }
  ],

  // ============================================================
  // OFFICIALS
  // ============================================================
  officials: [
    { role: "Municipal Mayor", name: "[OFFICIAL INFORMATION TO BE INSERTED]", desc: "Chief executive ng bayan ng Mayantoc.", img: "" },
    { role: "Vice Mayor", name: "[OFFICIAL INFORMATION TO BE INSERTED]", desc: "Presiding officer ng Sangguniang Bayan.", img: "" },
    { role: "Sangguniang Bayan", name: "[OFFICIAL INFORMATION TO BE INSERTED]", desc: "Mga konsehal na bumubuo ng municipal council.", img: "" },
    { role: "Municipal Administrator", name: "[OFFICIAL INFORMATION TO BE INSERTED]", desc: "Namamahala sa araw-araw na operasyon ng bayan.", img: "" },
    { role: "Municipal Treasurer", name: "[OFFICIAL INFORMATION TO BE INSERTED]", desc: "Nangangasiwa sa koleksyon at pondo ng bayan.", img: "" },
    { role: "Municipal Secretary", name: "[OFFICIAL INFORMATION TO BE INSERTED]", desc: "Tagapag-ingat ng mga rekord at ordinansa.", img: "" }
  ],

  // ============================================================
  // CAROUSEL
  // ============================================================
  carousel: [
    { img: "assets/FlagMY.png", label: "Mayantoc", title: "Summer Capital of Tarlac" }
  ],

  // ============================================================
  // NEWS
  // ============================================================
  news: [
    { cat: "Anunsyo", date: "Petsa — ilalagay", title: "[OFFICIAL INFORMATION TO BE INSERTED]", excerpt: "Dito ilalagay ang mga opisyal na anunsyo mula sa Pamahalaang Bayan ng Mayantoc.", img: "assets/mayantoc.png" },
    { cat: "Serbisyo", date: "Petsa — ilalagay", title: "[OFFICIAL INFORMATION TO BE INSERTED]", excerpt: "Balita tungkol sa mga programa at serbisyo ng bayan.", img: "assets/mayantoc.png" },
    { cat: "Agrikultura", date: "Petsa — ilalagay", title: "[OFFICIAL INFORMATION TO BE INSERTED]", excerpt: "Updates para sa mga magsasaka at programa sa agrikultura.", img: "assets/mayantoc.png" },
    { cat: "Kalusugan", date: "Petsa — ilalagay", title: "[OFFICIAL INFORMATION TO BE INSERTED]", excerpt: "Mga abiso mula sa Rural Health Unit.", img: "assets/mayantoc.png" },
    { cat: "Kaligtasan", date: "Petsa — ilalagay", title: "[OFFICIAL INFORMATION TO BE INSERTED]", excerpt: "Paalala at babala mula sa MDRRMO.", img: "assets/mayantoc.png" },
    { cat: "Barangay", date: "Petsa — ilalagay", title: "[OFFICIAL INFORMATION TO BE INSERTED]", excerpt: "Mga gawain at proyekto sa iba't ibang barangay.", img: "assets/mayantoc.png" }
  ],

  // ============================================================
  // EVENTS
  // ============================================================
  events: [
    { month: "SET", day: "15", title: "Sesyon ng Sangguniang Bayan", location: "[OFFICIAL INFORMATION TO BE INSERTED]" },
    { month: "OKT", day: "02", title: "Medical at dental mission", location: "[OFFICIAL INFORMATION TO BE INSERTED]" },
    { month: "OKT", day: "21", title: "Barangay assembly day", location: "[OFFICIAL INFORMATION TO BE INSERTED]" },
    { month: "NOB", day: "20", title: "Public consultation sa budget", location: "[OFFICIAL INFORMATION TO BE INSERTED]" },
    { month: "DIS", day: "08", title: "Pasko sa Mayantoc", location: "[OFFICIAL INFORMATION TO BE INSERTED]" }
  ],

  // ============================================================
  // AWARDS
  // ============================================================
  awards: [
    { year: "Taon — ilalagay", title: "Seal of Good Local Governance", from: "Department of the Interior and Local Government", body: "[OFFICIAL INFORMATION TO BE INSERTED] — para sa pamantayan sa financial administration, disaster preparedness at social protection." },
    { year: "Taon — ilalagay", title: "Gawad Kalasag", from: "Office of Civil Defense", body: "[OFFICIAL INFORMATION TO BE INSERTED] — pagkilala sa disaster risk reduction at humanitarian service." },
    { year: "Taon — ilalagay", title: "Red Orchid Award", from: "Department of Health", body: "[OFFICIAL INFORMATION TO BE INSERTED] — para sa tobacco-free at healthy community programs." },
    { year: "Taon — ilalagay", title: "Child-Friendly Local Governance", from: "Council for the Welfare of Children", body: "[OFFICIAL INFORMATION TO BE INSERTED] — para sa programa ukol sa karapatan ng bata." },
    { year: "Taon — ilalagay", title: "Anti-Drug Abuse Council Award", from: "Provincial Government of Tarlac", body: "[OFFICIAL INFORMATION TO BE INSERTED] — para sa community-based rehabilitation at prevention." },
    { year: "Taon — ilalagay", title: "Agri-Pinoy Recognition", from: "Department of Agriculture", body: "[OFFICIAL INFORMATION TO BE INSERTED] — para sa suporta sa magsasaka at food security." }
  ],

  awardsGallery: [
    { img: "assets/mayantoc.png", label: "Parangal", title: "Pagtanggap ng parangal para sa bayan" },
    { img: "assets/mayantoc.png", label: "Seremonya", title: "Awarding ceremony ng munisipyo" },
    { img: "assets/mayantoc.png", label: "Komunidad", title: "Pagkilala sa mga volunteer at kawani" }
  ],

  // ============================================================
  // TRANSPARENCY
  // ============================================================
  transparency: [
    { icon: "file",   title: "Full disclosure", desc: "Buong pagsisiwalat ng pinansyal at operasyonal na impormasyon." },
    { icon: "money",  title: "Budget at financial reports", desc: "Taunang budget, financial statements, at ulat." },
    { icon: "cart",   title: "Procurement", desc: "Bids, awards, at oportunidad sa suplay ng bayan." },
    { icon: "shield", title: "Citizen's charter", desc: "Pamantayan sa serbisyo, bayarin at haba ng proseso." },
    { icon: "doc",    title: "Ordinansa at resolusyon", desc: "Mga batas-bayan, resolusyon, at executive orders." },
    { icon: "info",   title: "Iba pang dokumento", desc: "Karagdagang pampublikong ulat at anunsyo." }
  ],

  // ============================================================
  // EMERGENCY
  // ============================================================
  emergency: [
    { name: "MDRRMO", desc: "Disaster response at rescue" },
    { name: "PNP", desc: "Philippine National Police" },
    { name: "BFP", desc: "Bureau of Fire Protection" },
    { name: "RHU", desc: "Rural Health Unit" },
    { name: "Municipal Hall", desc: "Tanggapan ng pamahalaang bayan" }
  ]
};

/* ==================================================================
   SEARCH INDEX
   ================================================================== */
window.MAY.SEARCH = [
  ...window.MAY.DATA.barangays.map(b => ({ title: b.name, type: "Barangay", meta: "Barangay ng Mayantoc", url: "barangays.html" })),
  ...window.MAY.DATA.services.map(s => ({ title: s.name, type: "Serbisyo", meta: s.office, url: "services.html" })),
  ...window.MAY.DATA.awards.map(a => ({ title: a.title, type: "Parangal", meta: a.from, url: "awards.html" })),
  ...window.MAY.DATA.transparency.map(t => ({ title: t.title, type: "Transparency", meta: t.desc, url: "transparency.html" })),
  ...window.MAY.DATA.events.map(e => ({ title: e.title, type: "Event", meta: e.location, url: "events.html" })),
  ...window.MAY.DATA.emergency.map(e => ({ title: e.name, type: "Emergency", meta: e.desc, url: "contact.html" }))
];

/* ==================================================================
   ICONS
   ================================================================== */
window.MAY.ICONS = {
  file:  '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>',
  money: '<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',
  cart:  '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
  shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  doc:   '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>',
  info:  '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
  arrow: '<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>',
  trophy:'<path d="M8 21h8"/><path d="M12 17v4"/><path d="M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M17 5h3a3 3 0 0 1-3 3"/><path d="M7 5H4a3 3 0 0 0 3 3"/>'
};

/* ==================================================================
   LIVE CLOCK
   ================================================================== */
(function () {
  const clockEl = document.getElementById('live-clock');
  if (!clockEl) return;
  const dateEl = clockEl.querySelector('.header__clock-date');
  const timeEl = clockEl.querySelector('.header__clock-time');
  const TIMEZONE = 'Asia/Manila';
  function updateClock() {
    const now = new Date();
    const petsa = new Intl.DateTimeFormat('fil-PH', { timeZone: TIMEZONE, weekday: 'short', month: 'short', day: 'numeric' }).format(now);
    const oras = new Intl.DateTimeFormat('fil-PH', { timeZone: TIMEZONE, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }).format(now);
    if (dateEl) dateEl.textContent = petsa;
    if (timeEl) timeEl.textContent = oras;
  }
  updateClock();
  setInterval(updateClock, 1000);
})();