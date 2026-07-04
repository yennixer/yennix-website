/**
 * YENNIX Site Search
 * Lightweight frontend search across products, blog posts, and pages
 */

// Site pages index (static pages)
const SITE_PAGES = [
    { title: "Home", url: "/", description: "Custom sealing solution provider specializing in engineered OEM sealing solutions.", category: "Pages" },
    { title: "Products", url: "/products/", description: "Browse our complete range of mechanical seals — component seals, cartridge seals, custom solutions, and seal parts.", category: "Pages" },
    { title: "Component Seals", url: "/products/component-seals.html", description: "Elastomeric bellows, multi-spring, and metal bellows component seals for various applications.", category: "Products" },
    { title: "Cartridge Seals", url: "/products/cartridge-seals.html", description: "Pre-assembled cartridge seals for easy installation and reliable performance.", category: "Products" },
    { title: "Custom & ODM Seals", url: "/products/custom-seals.html", description: "Custom-designed and OEM replacement seals for Flygt, Grundfos, and more.", category: "Products" },
    { title: "Seal Parts & Accessories", url: "/products/parts.html", description: "Seal sleeves, O-rings, and other seal components and accessories.", category: "Products" },
    { title: "Cross Reference", url: "/cross-reference/", description: "Find YENNIX equivalents for Burgmann, John Crane, AESSEAL, Flowserve, and other brands.", category: "Resources" },
    { title: "Reverse Engineering", url: "/reverse-engineering/", description: "Reverse engineering service for obsolete or hard-to-find mechanical seals.", category: "Resources" },
    { title: "Quality Standards", url: "/quality/", description: "Our commitment to quality — ISO certification, testing, and quality assurance processes.", category: "Resources" },
    { title: "FAQ", url: "/faq/", description: "Frequently asked questions about mechanical seals, ordering, and technical support.", category: "Resources" },
    { title: "About Us", url: "/about/", description: "Learn about YENNIX — our history, capabilities, and commitment to engineering excellence.", category: "Pages" },
    { title: "Contact Us", url: "/contact/", description: "Get in touch with YENNIX for quotes, technical support, or custom seal inquiries.", category: "Pages" },
    { title: "Resources & Blog", url: "/blog/", description: "Expert guides, technical articles, and industry insights on mechanical seals.", category: "Resources" }
];

/**
 * Initialize site search - creates the search modal and binds triggers
 */
function initSiteSearch() {
    // Don't init twice
    if (document.getElementById('site-search-modal')) return;

    // Create modal HTML
    const modalHTML = `
    <div id="site-search-modal" class="search-modal" role="dialog" aria-modal="true" aria-label="Site Search">
        <div class="search-modal-inner">
            <div class="search-modal-header">
                <svg width="20" height="20" fill="none" stroke="var(--gray-400)" stroke-width="2" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                <input type="text" id="site-search-input" placeholder="Search products, articles, pages..." autocomplete="off">
                <button class="search-modal-close" id="search-modal-close" aria-label="Close search">
                    <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"/></svg>
                </button>
            </div>
            <div class="search-modal-results" id="search-results">
                <div class="search-modal-empty">
                    Start typing to search...
                </div>
            </div>
            <div class="search-modal-footer">
                <span><kbd>ESC</kbd> to close</span>
                <span><kbd>Enter</kbd> to select</span>
            </div>
        </div>
    </div>`;

    document.body.insertAdjacentHTML('beforeend', modalHTML);

    const modal = document.getElementById('site-search-modal');
    const input = document.getElementById('site-search-input');
    const results = document.getElementById('search-results');
    const closeBtn = document.getElementById('search-modal-close');

    // Open search
    function openSearch() {
        modal.classList.add('open');
        input.value = '';
        results.innerHTML = '<div class="search-modal-empty">Start typing to search...</div>';
        setTimeout(function() { input.focus(); }, 50);
        document.body.style.overflow = 'hidden';
    }

    // Close search
    function closeSearch() {
        modal.classList.remove('open');
        document.body.style.overflow = '';
    }

    // Search function
    function doSearch(query) {
        if (!query || query.trim().length < 1) {
            results.innerHTML = '<div class="search-modal-empty">Start typing to search...</div>';
            return;
        }

        const q = query.toLowerCase().trim();
        const allResults = [];

        // Search products
        if (typeof YENNIX_PRODUCTS !== 'undefined') {
            YENNIX_PRODUCTS.forEach(function(p) {
                let score = 0;
                if (p.model.toLowerCase().indexOf(q) !== -1) score += 10;
                if (p.name.toLowerCase().indexOf(q) !== -1) score += 8;
                if (p.description.toLowerCase().indexOf(q) !== -1) score += 4;
                if (p.categoryName.toLowerCase().indexOf(q) !== -1) score += 3;
                if (p.applications && p.applications.some(function(a) { return a.toLowerCase().indexOf(q) !== -1; })) score += 3;
                if (p.replaces && p.replaces.some(function(r) { return r.toLowerCase().indexOf(q) !== -1; })) score += 5;
                if (p.compatiblePumps && p.compatiblePumps.some(function(b) { return b.toLowerCase().indexOf(q) !== -1; })) score += 4;
                if (score > 0) {
                    allResults.push({
                        title: p.name,
                        url: '/product/' + p.slug + '.html',
                        description: p.description.substring(0, 80) + '...',
                        category: 'Products',
                        score: score
                    });
                }
            });
        }

        // Search blog posts
        if (typeof YENNIX_BLOG_POSTS !== 'undefined') {
            YENNIX_BLOG_POSTS.forEach(function(p) {
                let score = 0;
                if (p.title.toLowerCase().indexOf(q) !== -1) score += 10;
                if (p.excerpt.toLowerCase().indexOf(q) !== -1) score += 5;
                if (p.category.toLowerCase().indexOf(q) !== -1) score += 4;
                if (p.tags && p.tags.some(function(t) { return t.toLowerCase().indexOf(q) !== -1; })) score += 5;
                if (score > 0) {
                    allResults.push({
                        title: p.title,
                        url: '/blog/' + p.slug + '.html',
                        description: p.excerpt.substring(0, 80) + '...',
                        category: 'Resources',
                        score: score
                    });
                }
            });
        }

        // Search static pages
        SITE_PAGES.forEach(function(page) {
            let score = 0;
            if (page.title.toLowerCase().indexOf(q) !== -1) score += 8;
            if (page.description.toLowerCase().indexOf(q) !== -1) score += 3;
            if (score > 0) {
                allResults.push({
                    title: page.title,
                    url: page.url,
                    description: page.description.substring(0, 80) + (page.description.length > 80 ? '...' : ''),
                    category: page.category,
                    score: score
                });
            }
        });

        // Sort by score
        allResults.sort(function(a, b) { return b.score - a.score; });

        if (allResults.length === 0) {
            results.innerHTML = '<div class="search-modal-empty">No results found for "' + query + '"</div>';
            return;
        }

        // Group by category
        const grouped = {};
        allResults.forEach(function(r) {
            if (!grouped[r.category]) grouped[r.category] = [];
            grouped[r.category].push(r);
        });

        // Render results
        let html = '';
        const categoryOrder = ['Products', 'Resources', 'Pages'];
        categoryOrder.forEach(function(cat) {
            if (grouped[cat] && grouped[cat].length > 0) {
                html += '<div class="search-modal-section">' + cat + '</div>';
                grouped[cat].slice(0, cat === 'Products' ? 8 : 5).forEach(function(r) {
                    html += '<a href="' + r.url + '" class="search-modal-item">' +
                        '<div class="search-modal-item-title">' + r.title + '</div>' +
                        '<div class="search-modal-item-desc">' + r.description + '</div>' +
                        '</a>';
                });
            }
        });

        results.innerHTML = html;
    }

    // Event listeners
    input.addEventListener('input', function(e) {
        doSearch(e.target.value);
    });

    closeBtn.addEventListener('click', closeSearch);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) closeSearch();
    });

    document.addEventListener('keydown', function(e) {
        // Cmd/Ctrl + K to open search
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault();
            openSearch();
        }
        // ESC to close
        if (e.key === 'Escape' && modal.classList.contains('open')) {
            closeSearch();
        }
    });

    // Bind search icons
    document.querySelectorAll('[data-search-trigger]').forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            openSearch();
        });
    });
}

// Auto-init when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSiteSearch);
} else {
    initSiteSearch();
}
