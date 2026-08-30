// Vespa Street Culture - Interactive Script

document.addEventListener('DOMContentLoaded', () => {
    initScrollSpy();
    initMobileNav();
    initBackToTop();
    initCommunityForm();
    loadCommunityMembers();
    initGarageCatalog();
});

/* ==========================================================================
   Vespa Catalog Database
   ========================================================================== */
const vespaDatabase = [
    // CLASSIC 2-TAK MODELS
    {
        id: 'px150',
        category: 'classic',
        name: 'Vespa PX 150 Exclusive II',
        tag: 'Legend 2-Tak',
        era: '1981 - 2005',
        image: 'images/vespa_px150.jpg',
        cc: '150 cc',
        engine: '2-Tak, Single Cylinder',
        transmission: 'Manual 4-Speed',
        brakes: 'Tromol (Front/Rear)',
        wheels: 'Ring 10 Inci',
        topSpeed: '95 km/jam',
        description: 'Vespa PX 150 adalah salah satu model 2-tak paling ikonik dan sukses di dunia. Dikenal dengan bodi monocoque baja yang kokoh, bodi kotak khas 80-an, serta keandalan mesin untuk perjalanan jarak jauh maupun touring.',
        styleGuide: 'Original Restoration / Mods Style (Kaca spion berlipat, bumper krom, lampu hazard).'
    },
    {
        id: 'sprint70s',
        category: 'classic',
        name: 'Vespa Sprint 150 VLB1T',
        tag: 'Vintage Retro',
        era: '1965 - 1979',
        image: 'images/vespa_sprint70s.jpg',
        cc: '150 cc',
        engine: '2-Tak, Rotary Valve',
        transmission: 'Manual 4-Speed',
        brakes: 'Tromol',
        wheels: 'Ring 10 Inci',
        topSpeed: '90 km/jam',
        description: 'Vespa Sprint 150 era 70-an memiliki karakter bodi membulat nan anggun dengan headlamp trapesium yang sangat khas. Merupakan motor impian para kolektor Vespa klasik.',
        styleGuide: 'Italian Vintage Style / Leather Accessories / Two-tone Paint.'
    },
    {
        id: 'super150',
        category: 'classic',
        name: 'Vespa Super 150 (VBC)',
        tag: 'Collector Classic',
        era: '1966 - 1978',
        image: 'images/vespa_super150.jpg',
        cc: '150 cc',
        engine: '2-Tak, 2 Transfer Port',
        transmission: 'Manual 4-Speed',
        brakes: 'Tromol',
        wheels: 'Ring 8 & 10 Inci',
        topSpeed: '85 km/jam',
        description: 'Vespa Super 150 hadir dengan headlamp bulat klasik dan desain bodi yang proporsional. Sangat populer di Indonesia pada era 70-an dan menjadi simbol romantisme jalanan.',
        styleGuide: 'Original Factory Restoration / Cream-Ivory Paint / Split Saddle Seat.'
    },
    {
        id: 'pts100',
        category: 'classic',
        name: 'Vespa PTS 100 Special',
        tag: 'Smallframe Rare',
        era: '1976 - 1984',
        image: 'images/vespa_pts100.jpg',
        cc: '100 cc',
        engine: '2-Tak Smallframe',
        transmission: 'Manual 3 & 4-Speed',
        brakes: 'Tromol',
        wheels: 'Ring 10 Inci',
        topSpeed: '85 km/jam',
        description: 'Vespa Smallframe PTS 100 memiliki dimensi bodi yang jauh lebih ramping dan lincah dibanding Vespa besar. Mesinnya unik dengan karburator di bawah jok dan bodi monocoque ringkas.',
        styleGuide: 'Racing Smallframe Look / Exhaust Polini / Dropbar Handlebar.'
    },
    {
        id: 'excel200',
        category: 'classic',
        name: 'Vespa Excel 150 / 200',
        tag: 'Touring 2-Tak',
        era: '1987 - 2006',
        image: 'images/vespaclassic.jpg',
        cc: '150 cc / 200 cc',
        engine: '2-Tak, Reed Valve / Rotary',
        transmission: 'Manual 4-Speed',
        brakes: 'Tromol / Cakram',
        wheels: 'Ring 10 Inci',
        topSpeed: '110 km/jam',
        description: 'Vespa Excel adalah kasta tertinggi Vespa 2-tak modern di Indonesia. Sudah dilengkapi fitur electric starter, windshield bawaan, panel spidometer besar, serta bodi bongsor yang sangat nyaman untuk perjalanan luar kota.',
        styleGuide: 'Touring Proper / Windshield Tall / Top Box / Spot Light.'
    },
    {
        id: 'ss180',
        category: 'classic',
        name: 'Vespa SS 180 (Super Sport)',
        tag: 'Ultra Rare Sport',
        era: '1964 - 1968',
        image: 'images/vespasprint.jpg',
        cc: '181 cc',
        engine: '2-Tak Piston Ported',
        transmission: 'Manual 4-Speed',
        brakes: 'Tromol Heavy Duty',
        wheels: 'Ring 10 Inci',
        topSpeed: '105 km/jam',
        description: 'Vespa Super Sport 180 adalah mahakarya legendaris dengan performa tinggi pada masanya. Didesain khusus untuk para pencinta kecepatan dengan garis bodi aerodinamis khas 60-an.',
        styleGuide: 'Museum Grade Original / Racing Livery 60s.'
    },

    // MODERN MATIC MODELS
    {
        id: 'sprint_matic',
        category: 'matic',
        name: 'Vespa Sprint 150 i-Get ABS',
        tag: 'Sporty Modern',
        era: '2016 - Sekarang',
        image: 'images/vespamatic.jpg',
        cc: '154.8 cc',
        engine: '4-Tak, i-Get 3-Valve Single Cylinder',
        transmission: 'CVT Otomatis',
        brakes: 'Depan Cakram ABS / Belakang Tromol',
        wheels: 'Ring 12 Inci Alloy',
        topSpeed: '110 km/jam',
        description: 'Vespa Sprint 150 i-Get memadukan headlamp hexagonal (persegi) yang agresif dengan mesin i-Get yang halus dan minim getaran. Menjadi pilihan paling populer bagi kalangan muda berjiwa sporty.',
        styleGuide: 'Proper Clean Look / Velg CNC Overrange / Brembo Brakes / Sokbreker Ohlins.'
    },
    {
        id: 'primavera_matic',
        category: 'matic',
        name: 'Vespa Primavera 150 i-Get ABS',
        tag: 'Elegant Heritage',
        era: '2014 - Sekarang',
        image: 'images/vespasprint.jpg',
        cc: '154.8 cc',
        engine: '4-Tak, i-Get 3-Valve Injeksi',
        transmission: 'CVT Otomatis',
        brakes: 'Depan Cakram ABS / Belakang Tromol',
        wheels: 'Ring 12 Inci Alloy',
        topSpeed: '105 km/jam',
        description: 'Mengambil inspirasi ikonik dari Primavera klasik tahun 1968, Vespa Primavera modern tampil dengan headlamp membulat yang anggun, sentuhan krom elegan, dan kenyamanan berkendara maksimal.',
        styleGuide: 'Modern Retro Chic / Chrome Accessories / Saddle Leather Brown / Windshield.'
    },
    {
        id: 'gts300_matic',
        category: 'matic',
        name: 'Vespa GTS Super Tech 300 HPE',
        tag: 'Flagship Touring',
        era: '2019 - Sekarang',
        image: 'images/vespamatic.jpg',
        cc: '278 cc',
        engine: '4-Tak HPE (High Performance Engine), Liquid Cooled',
        transmission: 'CVT Otomatis dengan ASR Traction Control',
        brakes: 'Dual Disc ABS + ASR',
        wheels: 'Ring 12 Inci Sport Rim',
        topSpeed: '130 km/jam',
        description: 'Vespa GTS 300 HPE adalah varian flagship tertinggi Vespa. Dibekali mesin 278cc paling bertenaga, layar TFT full color dengan navigasi smartphone, serta bodi besar (gambot) yang stabil untuk antar kota.',
        styleGuide: 'Night Ride Setup / Akrapovic Exhaust / Touring Side Bags / Matte Black Theme.'
    },
    {
        id: 'lx125_matic',
        category: 'matic',
        name: 'Vespa LX 125 i-Get',
        tag: 'Urban Compact',
        era: '2011 - Sekarang',
        image: 'images/vespaclassic.jpg',
        cc: '124.5 cc',
        engine: '4-Tak, i-Get 3-Valve Single Cylinder',
        transmission: 'CVT Otomatis',
        brakes: 'Depan Cakram / Belakang Tromol',
        wheels: 'Ring 11 (Front) / 10 (Rear)',
        topSpeed: '98 km/jam',
        description: 'Vespa LX 125 hadir dengan ukuran bodi lebih ramping dan ramah untuk penggunaan harian di lalu lintas perkotaan. Desain klasik modern yang lincah dan hemat bahan bakar.',
        styleGuide: 'Daily Commuter / Custom Pastel Color / Flyscreen Clear.'
    },
    {
        id: 's125_matic',
        category: 'matic',
        name: 'Vespa S 125 i-Get Sport',
        tag: 'Street Youth',
        era: '2012 - Sekarang',
        image: 'images/vespa_px150.jpg',
        cc: '124.5 cc',
        engine: '4-Tak, i-Get 3-Valve',
        transmission: 'CVT Otomatis',
        brakes: 'Depan Cakram / Belakang Tromol',
        wheels: 'Ring 11 (Front) / 10 (Rear)',
        topSpeed: '100 km/jam',
        description: 'Vespa S 125 menonjolkan garis desain kotak tegas pada headlamp dan spion, dilengkapi decal striping sporty dan per suspensi merah yang memberikan kesan agresif khas anak muda.',
        styleGuide: 'Streetwear Style / Blackout Chrome / Sport Exhaust.'
    },
    {
        id: 'vespa946',
        category: 'matic',
        name: 'Vespa 946 Dragon / Red Edition',
        tag: 'Ultra Luxury Collector',
        era: '2013 - Sekarang',
        image: 'images/vespa_super150.jpg',
        cc: '150 cc',
        engine: '4-Tak 3V i-Get electronic injection',
        transmission: 'CVT Otomatis with ASR',
        brakes: 'Dual Disc ABS',
        wheels: 'Ring 12 Inci Aluminum Alloy Split Rims',
        topSpeed: '110 km/jam',
        description: 'Vespa 946 adalah mahakarya seni dan teknologi. Dibuat secara terbatas (limited edition) dengan bodi alumunium buatan tangan, jok melayang monocoque, serta harga fantastis untuk kolektor kelas atas.',
        styleGuide: 'Pure Original Masterpiece Collector Item.'
    }
];

/* 1. Navbar ScrollSpy - Highlighting Active Menu */
function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a');

    if (!sections.length || !navLinks.length) return;

    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        const scrollPosition = window.scrollY + 120;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href && href.includes(`#${currentSectionId}`)) {
                link.classList.add('active');
            }
        });
    });
}

/* 2. Mobile Hamburger Navigation Toggle */
function initMobileNav() {
    const header = document.querySelector('header');
    if (!header) return;

    const nav = header.querySelector('nav');
    if (!nav) return;

    if (document.querySelector('.mobile-toggle')) return;

    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'mobile-toggle';
    toggleBtn.setAttribute('aria-label', 'Toggle Menu');
    toggleBtn.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
    `;

    header.insertBefore(toggleBtn, nav);

    toggleBtn.addEventListener('click', () => {
        nav.classList.toggle('open');
        toggleBtn.classList.toggle('active');
    });

    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('open');
            toggleBtn.classList.remove('active');
        });
    });
}

/* 3. Floating Back to Top Button */
function initBackToTop() {
    const btn = document.createElement('button');
    btn.className = 'back-to-top';
    btn.setAttribute('aria-label', 'Kembali ke Atas');
    btn.innerHTML = '↑';
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/* 4. Garage Interactive Catalog, Tabs, Search & Modal Specs */
let activeGarageFilter = 'all';
let garageSearchQuery = '';

function initGarageCatalog() {
    // Inject modal container if not present
    if (!document.getElementById('vespa-modal-overlay')) {
        const modalHTML = `
            <div id="vespa-modal-overlay" class="vespa-modal-overlay">
                <div class="vespa-modal-card">
                    <button class="modal-close-btn" id="modal-close-btn" aria-label="Tutup Modal">✕</button>
                    <div class="modal-header-hero">
                        <img id="modal-hero-img" src="" alt="Vespa Detail">
                        <div class="modal-header-overlay">
                            <span id="modal-era-tag" class="category-badge-pill"></span>
                            <h3 id="modal-title"></h3>
                        </div>
                    </div>
                    <div class="modal-body-content">
                        <div class="modal-section-title">📌 Deskripsi &amp; Histori</div>
                        <p id="modal-desc" class="modal-desc-text"></p>
                        
                        <div class="modal-section-title">⚙️ Spesifikasi Teknis</div>
                        <div class="specs-table-grid" id="modal-specs-grid"></div>
                        
                        <div class="modal-section-title">🎨 Rekomendasi Modifikasi</div>
                        <div class="style-guide-box">
                            <strong>Gaya Modifikasi:</strong> <span id="modal-style-guide"></span>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHTML);

        // Bind Close events
        const overlay = document.getElementById('vespa-modal-overlay');
        const closeBtn = document.getElementById('modal-close-btn');

        closeBtn.addEventListener('click', () => closeModal());
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) closeModal();
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeModal();
        });
    }

    // Determine target page context
    const catalogContainer = document.getElementById('vespa-catalog-grid');
    const isClassicPage = document.body.dataset.page === 'classic' || window.location.pathname.includes('vespaclassic');
    const isMaticPage = document.body.dataset.page === 'matic' || window.location.pathname.includes('vespamatic');

    if (isClassicPage) {
        activeGarageFilter = 'classic';
    } else if (isMaticPage) {
        activeGarageFilter = 'matic';
    }

    // Check if controls exist or need event binding
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeGarageFilter = btn.dataset.filter || 'all';
            
            // Also update category hero cards if available
            updateHeroCardsHighlight(activeGarageFilter);
            renderVespaCatalog();
        });
    });

    const searchInput = document.getElementById('model-search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            garageSearchQuery = e.target.value.trim().toLowerCase();
            renderVespaCatalog();
        });
    }

    // Category Hero Cards Click Event (Index / Garage)
    const categoryHeroCards = document.querySelectorAll('.category-hero-card');
    categoryHeroCards.forEach(card => {
        card.addEventListener('click', () => {
            const filter = card.dataset.categoryFilter;
            if (!filter) return;

            activeGarageFilter = filter;
            updateTabButtonsHighlight(filter);
            updateHeroCardsHighlight(filter);
            renderVespaCatalog();

            // Smooth scroll down to catalog grid
            if (catalogContainer) {
                catalogContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    renderVespaCatalog();
}

function updateHeroCardsHighlight(filter) {
    const categoryHeroCards = document.querySelectorAll('.category-hero-card');
    categoryHeroCards.forEach(card => {
        if (filter === 'all' || card.dataset.categoryFilter === filter) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });
}

function updateTabButtonsHighlight(filter) {
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        if (btn.dataset.filter === filter) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function renderVespaCatalog() {
    const container = document.getElementById('vespa-catalog-grid');
    if (!container) return;

    let filtered = vespaDatabase;

    // Apply category filter
    if (activeGarageFilter !== 'all') {
        filtered = filtered.filter(item => item.category === activeGarageFilter);
    }

    // Apply search query
    if (garageSearchQuery) {
        filtered = filtered.filter(item =>
            item.name.toLowerCase().includes(garageSearchQuery) ||
            item.tag.toLowerCase().includes(garageSearchQuery) ||
            item.cc.toLowerCase().includes(garageSearchQuery) ||
            item.description.toLowerCase().includes(garageSearchQuery)
        );
    }

    if (filtered.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 40px; background: var(--surface-card); border-radius: var(--radius-md); border: 1px solid var(--border-color);">
                <p style="font-size: 18px; color: var(--text-muted); margin-bottom: 8px;">Tipe Vespa tidak ditemukan.</p>
                <p style="font-size: 14px; color: var(--text-dim);">Coba kata kunci pencarian lain atau pilih kategori Semua Tipe.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = filtered.map(item => `
        <div class="vespa-model-card" data-id="${item.id}">
            <div class="model-card-img">
                <img src="${item.image}" alt="${escapeHtml(item.name)}">
                <span class="model-category-tag">${item.category === 'classic' ? 'Classic 2-Tak' : 'Modern Matic'}</span>
                <span class="model-era-tag">${item.era}</span>
            </div>
            <div class="model-card-body">
                <h4>${escapeHtml(item.name)}</h4>
                <div class="model-specs-pills">
                    <span class="spec-pill">⚙️ ${item.cc}</span>
                    <span class="spec-pill">🛵 ${item.transmission}</span>
                    <span class="spec-pill">🏷️ ${item.tag}</span>
                </div>
                <p class="model-desc-short">${escapeHtml(item.description)}</p>
                <button class="btn-detail-modal" onclick="openVespaModal('${item.id}')">
                    <span>Lihat Spesifikasi &amp; Detail</span> &rarr;
                </button>
            </div>
        </div>
    `).join('');
}

function openVespaModal(id) {
    const item = vespaDatabase.find(v => v.id === id);
    if (!item) return;

    document.getElementById('modal-hero-img').src = item.image;
    document.getElementById('modal-hero-img').alt = item.name;
    document.getElementById('modal-era-tag').textContent = `${item.category === 'classic' ? 'Classic 2-Tak' : 'Modern Matic'} • ${item.era}`;
    document.getElementById('modal-title').textContent = item.name;
    document.getElementById('modal-desc').textContent = item.description;
    document.getElementById('modal-style-guide').textContent = item.styleGuide;

    const specsGrid = document.getElementById('modal-specs-grid');
    specsGrid.innerHTML = `
        <div class="specs-table-item">
            <span class="label">Kapasitas Mesin</span>
            <span class="value">${item.cc}</span>
        </div>
        <div class="specs-table-item">
            <span class="label">Tipe Mesin</span>
            <span class="value">${item.engine}</span>
        </div>
        <div class="specs-table-item">
            <span class="label">Transmisi</span>
            <span class="value">${item.transmission}</span>
        </div>
        <div class="specs-table-item">
            <span class="label">Sistem Pengereman</span>
            <span class="value">${item.brakes}</span>
        </div>
        <div class="specs-table-item">
            <span class="label">Ukuran Roda / Velg</span>
            <span class="value">${item.wheels}</span>
        </div>
        <div class="specs-table-item">
            <span class="label">Kecepatan Maksimal</span>
            <span class="value">${item.topSpeed}</span>
        </div>
    `;

    const overlay = document.getElementById('vespa-modal-overlay');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const overlay = document.getElementById('vespa-modal-overlay');
    if (overlay) {
        overlay.classList.remove('open');
        document.body.style.overflow = '';
    }
}

/* 5. Community Form & Local Storage Integration */
/* 5. Community Form, Local Storage & Formspree Integration */
function initCommunityForm() {
    const form = document.querySelector('#community form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const namaInput = document.getElementById('nama');
        const tipeInput = document.getElementById('tipe');

        if (!namaInput || !tipeInput) return;

        const nama = namaInput.value.trim();
        const tipe = tipeInput.value.trim();

        if (!nama || !tipe) return;

        // 1. Kirim data ke Formspree secara background (AJAX / Fetch)
        const formData = new FormData(form);
        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (!response.ok) {
                console.error("Gagal mengirim ke Formspree");
            }
        } catch (error) {
            console.error("Error koneksi:", error);
        }

        // 2. Simpan & Tampilkan ke list lokal webmu (seperti sebelumnya)
        const newMember = {
            id: Date.now(),
            nama: nama,
            tipe: tipe,
            waktu: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })
        };

        saveMemberToStorage(newMember);
        loadCommunityMembers();

        // 3. Munculkan pop-up toast sukses
        showToast(`Selamat bergabung, ${nama}! Data Vespa (${tipe}) kamu telah terdaftar.`);
        form.reset();
    });
}

function saveMemberToStorage(member) {
    let members = getSavedMembers();
    members.unshift(member);
    if (members.length > 5) members = members.slice(0, 5);
    localStorage.setItem('vespa_community_members', JSON.stringify(members));
}

function getSavedMembers() {
    const data = localStorage.getItem('vespa_community_members');
    if (!data) {
        return [
            { id: 1, nama: "Budi Santoso", tipe: "Vespa Sprint 150 3V", waktu: "Hari ini" },
            { id: 2, nama: "Rian Rinaldi", tipe: "Vespa PX 150 Classic", waktu: "Kemarin" }
        ];
    }
    try {
        return JSON.parse(data);
    } catch (e) {
        return [];
    }
}

function loadCommunityMembers() {
    const container = document.getElementById('community-list');
    if (!container) return;

    const members = getSavedMembers();

    if (members.length === 0) {
        container.innerHTML = `<p style="color: var(--text-dim); font-size: 14px;">Belum ada pengendara yang terdaftar.</p>`;
        return;
    }

    container.innerHTML = `
        <h4 style="font-size: 16px; color: #ffffff; margin-bottom: 12px; font-weight: 700;">Pengendara Baru Bergabung:</h4>
        <div class="member-cards">
            ${members.map(m => `
                <div class="member-card">
                    <div class="member-avatar">🛵</div>
                    <div class="member-info">
                        <strong>${escapeHtml(m.nama)}</strong>
                        <span>${escapeHtml(m.tipe)}</span>
                    </div>
                    <span class="member-time">${m.waktu}</span>
                </div>
            `).join('')}
        </div>
    `;
}

/* 6. Custom Toast Notification UI */
function showToast(message) {
    const existing = document.querySelector('.custom-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'custom-toast';
    toast.innerHTML = `
        <div class="toast-icon">✓</div>
        <div class="toast-content">${escapeHtml(message)}</div>
        <button class="toast-close" onclick="this.parentElement.remove()">✕</button>
    `;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('show');
    }, 10);

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.innerText = text;
    return div.innerHTML;
}

