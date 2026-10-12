/**
 * AURA PRESTIGE DUBAI — APPLICATION CORE
 * Interactive Fleet Engine, Multi-Photo Gallery Slider & WhatsApp Dispatcher
 */

// ==========================================================================
// 1. VEHICLE DATASET WITH MULTI-IMAGE GALLERIES
// ==========================================================================
const FLEET_CARS = [
  {
    id: "ferrari-sf90-spider",
    name: "Ferrari SF90 Spider",
    category: ["supercar", "cabriolet"],
    priceAed: 9200,
    priceUsd: 2500,
    depositAed: 20000,
    depositUsd: 5500,
    image: "assets/images/Ferrari-sf90-detail.jpeg",
    images: [
      "assets/images/Ferrari-sf90-detail.jpeg",
      "assets/images/Ferrari-sf90-interior.jpeg",
      "assets/images/Ferrari-SF90-rear.jpeg",
      "assets/images/Ferrari-SF90-front.jpeg"
    ],
    engine: "4.0L V8 Twin-Turbo Plug-in Hybrid",
    power: "1,000 HP",
    acceleration: "2.5s (0-100)",
    topSpeed: "340 km/h",
    transmission: "8-Speed F1 Dual-Clutch",
    seats: "2 Seats",
    description: "The pinnacle of Maranello performance. Combining a twin-turbocharged V8 with three electric motors for mind-bending hybrid acceleration and open-top V8 symphony through Dubai."
  },
  {
    id: "ferrari-sf90-stradale",
    name: "Ferrari SF90 Stradale Nero",
    category: ["supercar", "cabriolet"],
    priceAed: 9200,
    priceUsd: 2500,
    depositAed: 20000,
    depositUsd: 5500,
    image: "assets/images/sf90.png",
    images: [
      "assets/images/sf90.png",
      "assets/images/Ferrari-sf90-interior.jpeg",
      "assets/images/Ferrari-SF90-rear.jpeg"
    ],
    engine: "4.0L V8 Twin-Turbo PHEV",
    power: "1,000 HP",
    acceleration: "2.5s (0-100)",
    topSpeed: "340 km/h",
    transmission: "8-Speed Dual-Clutch",
    seats: "2 Seats",
    description: "Finished in bespoke menacing Nero Daytona. Ultra-rare hypercar status with all-wheel-drive electric torque vectoring for maximum grip and prestige."
  },
  {
    id: "ferrari-portofino-m",
    name: "Ferrari Portofino M",
    category: ["supercar", "cabriolet"],
    priceAed: 6000,
    priceUsd: 1650,
    depositAed: 10000,
    depositUsd: 2750,
    image: "assets/images/Portofino-M.jpeg",
    images: [
      "assets/images/Portofino-M.jpeg",
      "assets/images/Pictures.jpeg"
    ],
    engine: "3.9L V8 Twin-Turbo",
    power: "620 HP",
    acceleration: "3.4s (0-100)",
    topSpeed: "320 km/h",
    transmission: "8-Speed Dual-Clutch",
    seats: "2+2 Seats",
    description: "The 'M' stands for Modificata. The definitive Italian 2+2 grand tourer with a folding hardtop, designed for leisurely cruising down Jumeirah Beach Road in effortless style."
  },
  {
    id: "rolls-royce-dawn",
    name: "Rolls-Royce Dawn",
    category: ["cabriolet", "luxury"],
    priceAed: 9200,
    priceUsd: 2500,
    depositAed: 15000,
    depositUsd: 4100,
    image: "assets/images/dawn.road.jpeg",
    images: [
      "assets/images/dawn.road.jpeg",
      "assets/images/Pictures.jpeg"
    ],
    engine: "6.6L V12 Twin-Turbo",
    power: "563 HP",
    acceleration: "4.9s (0-100)",
    topSpeed: "250 km/h",
    transmission: "8-Speed Automatic",
    seats: "4 Seats",
    description: "The world's most seductive open-top super-luxury motor car. Hand-stitched bespoke leather, silent magic carpet ride, and effortless presence outside Burj Al Arab."
  },
  {
    id: "rolls-royce-wraith",
    name: "Rolls-Royce Wraith",
    category: ["luxury"],
    priceAed: 10000,
    priceUsd: 2700,
    depositAed: 15000,
    depositUsd: 4100,
    image: "assets/images/Wraith.road.jpeg",
    images: [
      "assets/images/Wraith.road.jpeg",
      "assets/images/Pictures.jpeg"
    ],
    engine: "6.6L V12 Twin-Turbo",
    power: "624 HP",
    acceleration: "4.6s (0-100)",
    topSpeed: "250 km/h",
    transmission: "8-Speed Satellite Aided",
    seats: "4 Seats",
    description: "The most powerful Rolls-Royce coupe ever conceived. Dramatic fastback silhouette, starlight headliner, and coach doors engineered for grand Dubai arrivals."
  },
  {
    id: "lamborghini-urus",
    name: "Lamborghini Urus",
    category: ["suv", "supercar"],
    priceAed: 7200,
    priceUsd: 1950,
    depositAed: 10000,
    depositUsd: 2750,
    image: "assets/images/Urus.road.jpeg",
    images: [
      "assets/images/Urus.road.jpeg",
      "assets/images/Urus.interior.jpeg",
      "assets/images/Urus.exterior.jpeg",
      "assets/images/Urus.int.2.jpeg"
    ],
    engine: "4.0L V8 Twin-Turbo",
    power: "650 HP",
    acceleration: "3.6s (0-100)",
    topSpeed: "305 km/h",
    transmission: "8-Speed Automatic AWD",
    seats: "5 Seats",
    description: "The pioneer of the Super SUV segment. Combines pure raging bull supercar genetics with unmatched luxury SUV versatility and aggressive presence across Downtown Dubai."
  },
  {
    id: "bentley-continental-gtc",
    name: "Bentley Continental GTC",
    category: ["cabriolet", "luxury"],
    priceAed: 4800,
    priceUsd: 1300,
    depositAed: 8000,
    depositUsd: 2200,
    image: "assets/images/Bentlez.road.jpeg",
    images: [
      "assets/images/Bentlez.road.jpeg",
      "assets/images/Pictures.jpeg"
    ],
    engine: "4.0L V8 Twin-Turbo",
    power: "542 HP",
    acceleration: "4.0s (0-100)",
    topSpeed: "318 km/h",
    transmission: "8-Speed Dual-Clutch",
    seats: "4 Seats",
    description: "Handcrafted British luxury meeting exhilaration. Four-layer acoustic soft top, diamond-in-diamond quilted hides, and roaring V8 grand touring performance."
  },
  {
    id: "audi-r8-spyder",
    name: "Audi R8 Spyder V10 Performance",
    category: ["supercar", "cabriolet"],
    priceAed: 4000,
    priceUsd: 1100,
    depositAed: 8000,
    depositUsd: 2200,
    image: "assets/images/R8.road.jpeg",
    images: [
      "assets/images/R8.road.jpeg",
      "assets/images/Pictures.jpeg"
    ],
    engine: "5.2L Naturally Aspirated V10",
    power: "620 HP",
    acceleration: "3.2s (0-100)",
    topSpeed: "329 km/h",
    transmission: "7-Speed S Tronic Dual-Clutch",
    seats: "2 Seats",
    description: "One of the last naturally aspirated V10 supercars ever engineered. Spine-tingling 8,700 RPM redline exhaust howl with Quattro permanent all-wheel drive."
  },
  {
    id: "mercedes-g63-amg",
    name: "Mercedes-AMG G63 (2025 Edition)",
    category: ["suv", "luxury"],
    priceAed: 3800,
    priceUsd: 1050,
    depositAed: 6000,
    depositUsd: 1650,
    image: "assets/images/Mercedes-G63-2.jpeg",
    images: [
      "assets/images/Mercedes-G63-2.jpeg",
      "assets/images/G-Interior.jpeg",
      "assets/images/G-interior1.jpeg",
      "assets/images/G-front.jpeg"
    ],
    engine: "4.0L V8 Biturbo AMG",
    power: "585 HP",
    acceleration: "4.5s (0-100)",
    topSpeed: "240 km/h",
    transmission: "AMG SPEEDSHIFT TCT 9G",
    seats: "5 Seats",
    description: "The undisputed king of Dubai streets. Brand-new 2025 model featuring AMG side-exit exhaust, Burmester 3D surround sound, and legendary off-road commanding stance."
  },
  {
    id: "mercedes-amg-gtr",
    name: "Mercedes-AMG GT R",
    category: ["supercar"],
    priceAed: 2000,
    priceUsd: 550,
    depositAed: 6000,
    depositUsd: 1650,
    image: "assets/images/Mercedes-AMG-GTR.jpeg",
    images: [
      "assets/images/Mercedes-AMG-GTR.jpeg",
      "assets/images/AMG-GTR-Steering.jpeg",
      "assets/images/Mercedes-amg-gtr4.jpeg",
      "assets/images/Mercedes-amg-gtr2.jpeg"
    ],
    engine: "4.0L V8 Biturbo Dry-Sump",
    power: "585 HP",
    acceleration: "3.6s (0-100)",
    topSpeed: "318 km/h",
    transmission: "7-Speed AMG SPEEDSHIFT DCT",
    seats: "2 Seats",
    description: "The 'Beast of the Green Hell'. Carbon-fiber aero package, rear-axle steering, active aerodynamics, and unmistakable race-bred cockpit ergonomics."
  },
  {
    id: "porsche-carrera-cabriolet",
    name: "Porsche 911 Carrera Cabriolet",
    category: ["cabriolet", "luxury"],
    priceAed: 2800,
    priceUsd: 760,
    depositAed: 6000,
    depositUsd: 1650,
    image: "assets/images/IMG_5343.jpeg",
    images: [
      "assets/images/IMG_5343.jpeg",
      "assets/images/Porsche-ext.jpeg",
      "assets/images/porsche-int.jpeg",
      "assets/images/porsche-detail.jpeg",
      "assets/images/PORSCHE-ROOF.jpeg"
    ],
    engine: "3.0L Twin-Turbo Flat-6",
    power: "385 HP",
    acceleration: "4.2s (0-100)",
    topSpeed: "291 km/h",
    transmission: "8-Speed Porsche Doppelkupplung (PDK)",
    seats: "2+2 Seats",
    description: "The benchmark sports car of all time. Precision German engineering, iconic flyline silhouette, and lightning-fast electric roof opening in just 12 seconds."
  },
  {
    id: "bentley-bentayga",
    name: "Bentley Bentayga V8",
    category: ["suv", "luxury"],
    priceAed: 3400,
    priceUsd: 925,
    depositAed: 6000,
    depositUsd: 1650,
    image: "assets/images/IMG_5317.jpeg",
    images: [
      "assets/images/IMG_5317.jpeg",
      "assets/images/b9c2e8bd-d225-48d1-ba8e-b287ed01a8f0.jpeg",
      "assets/images/c9fb85b5-4879-4bd1-afe0-850e1e397ca9.jpeg",
      "assets/images/2cc16157-b6ce-405c-8600-077d0d131cbf.jpeg",
      "assets/images/020ba1db-b3fb-4014-bfc8-cebc2c356be0.jpeg"
    ],
    engine: "4.0L V8 Twin-Turbo",
    power: "542 HP",
    acceleration: "4.5s (0-100)",
    topSpeed: "290 km/h",
    transmission: "8-Speed Automatic AWD",
    seats: "5 Seats",
    description: "Supreme craftsmanship meets effortless grand touring capability. Panoramic roof, handcrafted wood veneers, and tranquil cabin isolation in high-speed comfort."
  },
  {
    id: "bmw-x6",
    name: "BMW X6 M-Sport",
    category: ["suv", "luxury"],
    priceAed: 2000,
    priceUsd: 550,
    depositAed: 5000,
    depositUsd: 1350,
    image: "assets/images/BMW-X6-road.jpeg",
    images: [
      "assets/images/BMW-X6-road.jpeg",
      "assets/images/BMW-X6-side2.jpeg",
      "assets/images/BMW-X6-rear-side.jpeg",
      "assets/images/BMW-X6-side.jpeg"
    ],
    engine: "3.0L BMW TwinPower Turbo",
    power: "340 HP",
    acceleration: "5.5s (0-100)",
    topSpeed: "250 km/h",
    transmission: "8-Speed Steptronic Sport",
    seats: "5 Seats",
    description: "Sports Activity Coupe with bold illuminated kidney grille, M-Sport aerodynamic kit, and executive commanding driving position ideal for Dubai Marina drives."
  },
  {
    id: "range-rover-autobiography",
    name: "Range Rover Autobiography",
    category: ["suv", "luxury"],
    priceAed: 2400,
    priceUsd: 650,
    depositAed: 6000,
    depositUsd: 1650,
    image: "assets/images/Rover.road.jpeg",
    images: [
      "assets/images/Rover.road.jpeg",
      "assets/images/Pictures.jpeg"
    ],
    engine: "4.4L V8 Twin-Turbo",
    power: "530 HP",
    acceleration: "4.6s (0-100)",
    topSpeed: "250 km/h",
    transmission: "8-Speed Automatic Electronic Air Susp",
    seats: "5 Seats",
    description: "Peerless refinement and modernist luxury. Executive Class rear seating with hot stone massage, active noise cancellation, and first-class road prestige."
  },
  {
    id: "mercedes-v-class",
    name: "Mercedes-Benz V-Class VIP 8-Seater",
    category: ["luxury"],
    priceAed: 1400,
    priceUsd: 380,
    depositAed: 4000,
    depositUsd: 1100,
    image: "assets/images/Mercedes-V-class.png",
    images: [
      "assets/images/Mercedes-V-class.png",
      "assets/images/Mercedes-V-class-interior.jpeg",
      "assets/images/Mercedes-V-Class-front.jpeg",
      "assets/images/Mercedes-V-class-side.jpeg"
    ],
    engine: "2.0L Turbo Diesel / Petrol Long-Wheelbase",
    power: "239 HP",
    acceleration: "7.8s (0-100)",
    topSpeed: "215 km/h",
    transmission: "9G-TRONIC Automatic",
    seats: "8 Seats",
    description: "The VIP conference on wheels. Configurable luxury captain chairs, ambient mood lighting, privacy electric glass, and generous luggage volume for family or delegation."
  },
  {
    id: "bmw-m850i-cabriolet",
    name: "BMW M850i xDrive Cabriolet",
    category: ["cabriolet", "luxury"],
    priceAed: 1600,
    priceUsd: 435,
    depositAed: 5000,
    depositUsd: 1350,
    image: "assets/images/IMG_5291.jpeg",
    images: [
      "assets/images/IMG_5291.jpeg",
      "assets/images/b3928430-a535-4c80-b0a7-3407e2a11736.jpeg",
      "assets/images/IMG_5114.jpeg",
      "assets/images/95c34a5a-9414-445a-86f0-86cf1b4e97d8.jpeg",
      "assets/images/45e86e45-b06c-4f86-af92-24f9bccdfec9.jpeg"
    ],
    engine: "4.4L BMW M Performance TwinPower V8",
    power: "530 HP",
    acceleration: "3.9s (0-100)",
    topSpeed: "250 km/h",
    transmission: "8-Speed Steptronic Sport xDrive",
    seats: "4 Seats",
    description: "Formidable V8 power blended with supreme open-top grand touring. Crafted clarity crystal gear shifter, neck warmers, and dynamic four-wheel steering."
  }
];

// WhatsApp Concierge Number & Direct Call Line
const WHATSAPP_NUMBER = "79303008284";
const PHONE_NUMBER = "+79303008284";

// State
let currentCurrency = "USD"; // 'USD' or 'AED'
let currentCategory = "all";
let searchQuery = "";
let currentSort = "default";

// Gallery State
let currentCar = null;
let currentImageIndex = 0;

// Mobile Drawer Functions
window.openDrawer = function() {
  const drawer = document.getElementById("drawer");
  if (drawer) {
    drawer.classList.add("is-open");
    drawer.setAttribute("aria-hidden", "false");
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
  }
};

window.closeDrawer = function() {
  const drawer = document.getElementById("drawer");
  if (drawer) {
    drawer.classList.remove("is-open");
    drawer.setAttribute("aria-hidden", "true");
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
  }
};

// ==========================================================================
// 2. DOM INITIALIZATION
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  initElements();
  initEventListeners();
  populateCarSelectOptions();
  renderFleet();
});

let dom = {};

function initElements() {
  dom = {
    fleetGrid: document.getElementById("fleetGrid"),
    fleetEmpty: document.getElementById("emptyState"),
    filterChips: document.querySelectorAll(".filterChip"),
    searchInput: document.getElementById("searchInput"),
    sortSelect: document.getElementById("sortSelect"),
    currencyBtns: document.querySelectorAll(".currencyBtn"),
    reservationSelect: document.getElementById("reservationCarSelect"),
    reservationForm: document.getElementById("reservationForm"),
    modalOverlay: document.getElementById("carModalOverlay"),
    modalCloseBtn: document.getElementById("modalCloseBtn"),
    modalImg: document.getElementById("modalImg"),
    galleryCounter: document.getElementById("galleryCounter"),
    galleryPrevBtn: document.getElementById("galleryPrevBtn"),
    galleryNextBtn: document.getElementById("galleryNextBtn"),
    galleryThumbs: document.getElementById("galleryThumbs"),
    modalTitle: document.getElementById("modalTitle"),
    modalPrice: document.getElementById("modalPrice"),
    modalDeposit: document.getElementById("modalDeposit"),
    modalEngine: document.getElementById("modalEngine"),
    modalPower: document.getElementById("modalPower"),
    modalAcc: document.getElementById("modalAcc"),
    modalSpeed: document.getElementById("modalSpeed"),
    modalSeats: document.getElementById("modalSeats"),
    modalTrans: document.getElementById("modalTrans"),
    modalDesc: document.getElementById("modalDesc"),
    modalWaBtn: document.getElementById("modalWaBtn"),
    modalFormBtn: document.getElementById("modalFormBtn"),
    burgerBtn: document.getElementById("burgerBtn"),
    drawer: document.getElementById("drawer"),
    drawerClose: document.getElementById("drawerClose")
  };
}

function initEventListeners() {
  // Category Chips
  dom.filterChips.forEach(chip => {
    chip.addEventListener("click", () => {
      dom.filterChips.forEach(c => c.classList.remove("is-active"));
      chip.classList.add("is-active");
      currentCategory = chip.dataset.filter;
      renderFleet();
    });
  });

  // Search input
  if (dom.searchInput) {
    dom.searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      renderFleet();
    });
  }

  // Sort select
  if (dom.sortSelect) {
    dom.sortSelect.addEventListener("change", (e) => {
      currentSort = e.target.value;
      renderFleet();
    });
  }

  // Currency Toggle
  dom.currencyBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      dom.currencyBtns.forEach(b => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      currentCurrency = btn.dataset.currency;
      renderFleet();
      populateCarSelectOptions();
      if (currentCar && dom.modalOverlay && dom.modalOverlay.classList.contains("is-open")) {
        updateModalPricing();
      }
    });
  });

  // Modal Gallery Buttons
  if (dom.galleryPrevBtn) {
    dom.galleryPrevBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      prevImage();
    });
  }
  if (dom.galleryNextBtn) {
    dom.galleryNextBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      nextImage();
    });
  }

  // Modal Close
  if (dom.modalCloseBtn) {
    dom.modalCloseBtn.addEventListener("click", closeModal);
  }
  if (dom.modalOverlay) {
    dom.modalOverlay.addEventListener("click", (e) => {
      if (e.target === dom.modalOverlay) closeModal();
    });
  }

  // Keyboard navigation
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
      closeDrawer();
    }
    if (!dom.modalOverlay || !dom.modalOverlay.classList.contains("is-open")) return;
    if (e.key === "ArrowLeft") prevImage();
    if (e.key === "ArrowRight") nextImage();
  });

  // Mobile Drawer
  if (dom.burgerBtn) {
    dom.burgerBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      openDrawer();
    });
  }
  if (dom.drawerClose) {
    dom.drawerClose.addEventListener("click", (e) => {
      e.stopPropagation();
      closeDrawer();
    });
  }
  if (dom.drawer) {
    dom.drawer.addEventListener("click", (e) => {
      if (e.target === dom.drawer) closeDrawer();
    });
  }
  document.querySelectorAll(".drawer__link").forEach(link => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      closeDrawer();
      if (href && href.startsWith("#")) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });

  // Navigation Active State Click Handler
  const navLinks = document.querySelectorAll(".nav__link");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.forEach(l => l.classList.remove("is-active"));
      link.classList.add("is-active");
    });
  });

  // Dynamic Scrollspy
  initScrollSpy();

  // Reservation Form Submit -> WhatsApp Dispatch
  if (dom.reservationForm) {
    dom.reservationForm.addEventListener("submit", handleReservationSubmit);
  }
}

function initScrollSpy() {
  const navLinks = document.querySelectorAll(".nav__link");
  const sections = [
    { id: "hero", href: "#hero" },
    { id: "fleet", href: "#fleet" },
    { id: "about", href: "#about" },
    { id: "reservation", href: "#reservation" },
    { id: "faq", href: "#faq" }
  ];

  function updateActiveNav() {
    const scrollPos = window.scrollY + 180;
    for (let i = sections.length - 1; i >= 0; i--) {
      const sec = document.getElementById(sections[i].id);
      if (sec && sec.offsetTop <= scrollPos) {
        navLinks.forEach(l => {
          if (l.getAttribute("href") === sections[i].href) {
            l.classList.add("is-active");
          } else {
            l.classList.remove("is-active");
          }
        });
        break;
      }
    }
  }

  window.addEventListener("scroll", updateActiveNav, { passive: true });
  updateActiveNav();
}

// ==========================================================================
// 3. CATALOG RENDERING & FILTERING
// ==========================================================================
function formatCurrency(amountAed, amountUsd) {
  if (currentCurrency === "USD") {
    const usd = amountUsd != null ? amountUsd : Math.round(amountAed / 3.67);
    return `$${usd.toLocaleString("en-US")}`;
  }
  return `${amountAed.toLocaleString("en-US")} AED`;
}

function getCategoryLabel(cats) {
  if (cats.includes("supercar")) return "Supercar";
  if (cats.includes("suv")) return "SUV";
  if (cats.includes("cabriolet")) return "Cabriolet";
  return "Prestige";
}

function renderFleet() {
  if (!dom.fleetGrid) return;

  // Filter cars
  let filtered = FLEET_CARS.filter(car => {
    const matchesCategory = currentCategory === "all" || car.category.includes(currentCategory);
    const matchesSearch = !searchQuery || 
      car.name.toLowerCase().includes(searchQuery) ||
      car.category.some(c => c.toLowerCase().includes(searchQuery));
    return matchesCategory && matchesSearch;
  });

  // Sort cars
  if (currentSort === "priceAsc") {
    filtered.sort((a, b) => (currentCurrency === "USD" ? (a.priceUsd || a.priceAed) - (b.priceUsd || b.priceAed) : a.priceAed - b.priceAed));
  } else if (currentSort === "priceDesc") {
    filtered.sort((a, b) => (currentCurrency === "USD" ? (b.priceUsd || b.priceAed) - (a.priceUsd || a.priceAed) : b.priceAed - a.priceAed));
  }

  // Check empty state
  if (filtered.length === 0) {
    dom.fleetGrid.innerHTML = "";
    if (dom.fleetEmpty) dom.fleetEmpty.classList.add("is-visible");
    return;
  } else {
    if (dom.fleetEmpty) dom.fleetEmpty.classList.remove("is-visible");
  }

  // Render cards
  dom.fleetGrid.innerHTML = filtered.map(car => {
    const priceStr = formatCurrency(car.priceAed, car.priceUsd);
    const depositStr = formatCurrency(car.depositAed, car.depositUsd);
    const catLabel = getCategoryLabel(car.category);

    return `
      <article class="fleetCard" onclick="openCarModal('${car.id}')" role="button" tabindex="0" aria-label="View ${car.name}">
        <div class="fleetCard__media">
          <img src="${car.image}" alt="${car.name} luxury rental Dubai" loading="lazy" />
          <span class="fleetCard__badge">${catLabel}</span>
          <span class="fleetCard__deposit-tag">Deposit: ${depositStr}</span>
        </div>
        
        <div class="fleetCard__body">
          <h3 class="fleetCard__title">${car.name}</h3>
          
          <div class="fleetCard__specs">
            <span class="specPill">${car.power}</span>
            <span class="specPill">${car.acceleration}</span>
            <span class="specPill">${car.seats}</span>
          </div>

          <div class="fleetCard__footer">
            <div class="fleetCard__priceWrap">
              <span class="fleetCard__price">${priceStr}</span>
              <span class="fleetCard__period">per day</span>
            </div>
            <button type="button" class="btn btn--liquid btn--small fleetCard__btn">
              Photos &amp; Specs
            </button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

// ==========================================================================
// 4. INTERACTIVE CAR MODAL & MULTI-IMAGE CAROUSEL
// ==========================================================================
window.openCarModal = function(carId) {
  currentCar = FLEET_CARS.find(c => c.id === carId);
  if (!currentCar || !dom.modalOverlay) return;

  currentImageIndex = 0;
  updateModalPricing();

  dom.modalTitle.textContent = currentCar.name;
  dom.modalEngine.textContent = currentCar.engine;
  dom.modalPower.textContent = currentCar.power;
  dom.modalAcc.textContent = currentCar.acceleration;
  dom.modalSpeed.textContent = currentCar.topSpeed;
  dom.modalSeats.textContent = currentCar.seats;
  dom.modalTrans.textContent = currentCar.transmission;
  dom.modalDesc.textContent = currentCar.description;

  // Render Thumbnails
  renderThumbnails();

  // Show active image
  showImage(currentImageIndex);

  // WhatsApp button directly with this car
  const waText = encodeURIComponent(`Hello Aura Prestige! I would like to check availability for renting the ${currentCar.name} in Dubai. Please send me details.`);
  dom.modalWaBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`;

  // Form button - smooth scroll and auto-select
  dom.modalFormBtn.onclick = () => {
    closeModal();
    if (dom.reservationSelect) {
      dom.reservationSelect.value = currentCar.name;
    }
    const section = document.getElementById("reservation");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  dom.modalOverlay.classList.add("is-open");
  dom.modalOverlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
};

function updateModalPricing() {
  if (!currentCar) return;
  const priceStr = formatCurrency(currentCar.priceAed, currentCar.priceUsd);
  const depositStr = formatCurrency(currentCar.depositAed, currentCar.depositUsd);
  dom.modalPrice.textContent = `${priceStr} / day`;
  dom.modalDeposit.textContent = `Security Deposit: ${depositStr}`;
}

function showImage(index) {
  if (!currentCar || !currentCar.images || currentCar.images.length === 0) return;
  if (index < 0) index = currentCar.images.length - 1;
  if (index >= currentCar.images.length) index = 0;

  currentImageIndex = index;
  const src = currentCar.images[currentImageIndex];

  dom.modalImg.style.opacity = "0.4";
  dom.modalImg.src = src;
  dom.modalImg.onload = () => {
    dom.modalImg.style.opacity = "1";
  };

  if (dom.galleryCounter) {
    dom.galleryCounter.textContent = `${currentImageIndex + 1} / ${currentCar.images.length}`;
  }

  // Update active thumbnail
  const thumbs = dom.galleryThumbs ? dom.galleryThumbs.querySelectorAll(".thumbItem") : [];
  thumbs.forEach((t, i) => {
    if (i === currentImageIndex) {
      t.classList.add("is-active");
      t.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    } else {
      t.classList.remove("is-active");
    }
  });
}

function nextImage() {
  showImage(currentImageIndex + 1);
}

function prevImage() {
  showImage(currentImageIndex - 1);
}

function renderThumbnails() {
  if (!dom.galleryThumbs || !currentCar) return;
  const imgs = currentCar.images || [currentCar.image];

  if (imgs.length <= 1) {
    dom.galleryThumbs.style.display = "none";
    if (dom.galleryPrevBtn) dom.galleryPrevBtn.style.display = "none";
    if (dom.galleryNextBtn) dom.galleryNextBtn.style.display = "none";
    if (dom.galleryCounter) dom.galleryCounter.style.display = "none";
    return;
  }

  dom.galleryThumbs.style.display = "flex";
  if (dom.galleryPrevBtn) dom.galleryPrevBtn.style.display = "flex";
  if (dom.galleryNextBtn) dom.galleryNextBtn.style.display = "flex";
  if (dom.galleryCounter) dom.galleryCounter.style.display = "block";

  dom.galleryThumbs.innerHTML = imgs.map((imgSrc, i) => `
    <div class="thumbItem ${i === 0 ? "is-active" : ""}" onclick="selectThumb(${i})">
      <img src="${imgSrc}" alt="${currentCar.name} angle ${i + 1}" />
    </div>
  `).join("");
}

window.selectThumb = function(index) {
  showImage(index);
};

function closeModal() {
  if (!dom.modalOverlay) return;
  dom.modalOverlay.classList.remove("is-open");
  dom.modalOverlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

// ==========================================================================
// 5. RESERVATION FORM & WHATSAPP INTEGRATION
// ==========================================================================
function populateCarSelectOptions() {
  if (!dom.reservationSelect) return;
  const currentVal = dom.reservationSelect.value;
  dom.reservationSelect.innerHTML = `
    <option value="" disabled ${!currentVal ? "selected" : ""}>Select vehicle model...</option>
    ${FLEET_CARS.map(c => `<option value="${c.name}" ${currentVal === c.name ? "selected" : ""}>${c.name} (${formatCurrency(c.priceAed, c.priceUsd)}/day)</option>`).join("")}
  `;
}

function handleReservationSubmit(e) {
  e.preventDefault();

  const form = dom.reservationForm;
  const name = form.elements["clientName"] ? form.elements["clientName"].value.trim() : "";
  const phone = form.elements["clientPhone"] ? form.elements["clientPhone"].value.trim() : "";
  const car = form.elements["clientCar"] ? form.elements["clientCar"].value : "";
  const dates = form.elements["clientDates"] ? form.elements["clientDates"].value.trim() : "";
  const location = form.elements["clientLocation"] ? form.elements["clientLocation"].value.trim() : "";
  const notes = form.elements["clientNotes"] ? form.elements["clientNotes"].value.trim() : "";

  if (!name || !phone || !car || !dates) {
    alert("Please complete all required fields (Name, Phone/WhatsApp, Vehicle, Dates).");
    return;
  }

  // Format professional Dubai VIP message
  const lines = [
    "AURA PRESTIGE DUBAI — VIP BOOKING REQUEST",
    "──────────────────────────",
    `Vehicle: ${car}`,
    `Client Name: ${name}`,
    `Phone/WhatsApp: ${phone}`,
    `Rental Dates: ${dates}`,
    `Delivery Location: ${location || "To be arranged in Dubai"}`,
    notes ? `Special Requests: ${notes}` : null,
    "──────────────────────────",
    "Sent via Aura Prestige Dubai Concierge Portal"
  ].filter(Boolean);

  const message = encodeURIComponent(lines.join("\n"));
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  // Open WhatsApp in new tab
  window.open(waUrl, "_blank");

  // Reset form with friendly feedback
  alert(`Thank you, ${name}! Your booking request for ${car} has been formatted. Opening WhatsApp Concierge now...`);
  form.reset();
}
