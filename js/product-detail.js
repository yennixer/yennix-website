/**
 * YENNIX V3 Product Detail Page Renderer — NOK-inspired minimal style
 */

function initProductPage(slug) {
    const product = findProductBySlug(slug);
    const app = document.getElementById('app');

    if (!product) {
        app.innerHTML = '<div style="min-height:80vh;display:flex;align-items:center;justify-content:center;text-align:center;"><div><h1 style="font-size:48px;font-weight:200;color:var(--gray-300);margin-bottom:16px;">404</h1><a href="/products/" style="color:var(--gold);font-size:12px;letter-spacing:0.1em;text-transform:uppercase;text-decoration:none;">Back to Products</a></div></div>';
        return;
    }

    document.title = `${product.model} — ${product.categoryName} | YENNIX`;

    const catLinks = {
        'component-seals': { href: '/products/component-seals.html', label: 'Component Seals' },
        'cartridge-seals': { href: '/products/cartridge-seals.html', label: 'Cartridge Seals' },
        'custom-seals': { href: '/products/custom-seals.html', label: 'Custom & ODM Seals' },
        'parts': { href: '/products/parts.html', label: 'Seal Parts & Accessories' }
    };
    const cat = catLinks[product.category];
    const code = product.defaultCode;
    const codeParts = code.split('-');

    // Dimensions table
    let dimensionsHTML = '';
    if (product.dimensions.length) {
        // Build dynamic columns based on first dimension entry
        const firstDim = product.dimensions[0];
        const hasL = firstDim.hasOwnProperty('L');
        const hasTotalWL = firstDim.hasOwnProperty('TotalWL');
        let thCols = '<th>d (Shaft)</th><th>D1</th><th>D2</th><th>L1</th><th>L2</th>';
        if (hasL) thCols += '<th>L</th>';
        if (hasTotalWL) thCols += '<th>Total W.L</th>';
        const dimRows = product.dimensions.map(d => {
            let row = `<td>${d.d}</td><td>${d.D1}</td><td>${d.D2}</td><td>${d.L1}</td><td>${d.L2}</td>`;
            if (hasL) row += `<td>${d.L || ''}</td>`;
            if (hasTotalWL) row += `<td>${d.TotalWL || ''}</td>`;
            return `<tr>${row}</tr>`;
        }).join('');
        dimensionsHTML = `
            <h3 style="font-size:16px;font-weight:600;color:var(--gray-900);margin-bottom:16px;">Dimensions (mm)</h3>
            <div style="overflow-x:auto;">
                <table class="dim-table">
                    <thead><tr>${thCols}</tr></thead>
                    <tbody>${dimRows}</tbody>
                </table>
            </div>
            <p style="font-size:11px;color:var(--gray-400);margin-top:12px;">* Dimensions are for reference only. Contact us for confirmed drawings.</p>`;
    } else {
        dimensionsHTML = '<p style="color:var(--gray-400);padding:40px 0;text-align:center;">Contact us for detailed dimension information for this product.</p>';
    }

    // Materials
    let matCards = '';
    if (product.materials.sealFace) {
        matCards += `<div class="mat-card"><h4><span class="mat-dot" style="background:#c8a45c;"></span>Seal Face</h4><ul>${product.materials.sealFace.map(m => '<li>' + m + '</li>').join('')}</ul></div>`;
    }
    if (product.materials.elastomer) {
        matCards += `<div class="mat-card"><h4><span class="mat-dot" style="background:#4a994a;"></span>Elastomer</h4><ul>${product.materials.elastomer.map(m => '<li>' + m + '</li>').join('')}</ul></div>`;
    }
    if (product.materials.metal) {
        matCards += `<div class="mat-card"><h4><span class="mat-dot" style="background:#5a5a99;"></span>Metal</h4><ul>${product.materials.metal.map(m => '<li>' + m + '</li>').join('')}</ul></div>`;
    }

    // Related products
    const related = YENNIX_PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

    app.innerHTML = `
    <!-- Navigation -->
    <nav class="nav-main" id="navbar">
        <div class="nav-inner">
            <a href="/" class="nav-logo"><div class="nav-logo-mark">Y</div><span class="nav-logo-text">YENNIX</span></a>
            <div class="nav-links"><a href="/">Home</a><a href="/products/">Products</a><a href="/cross-reference/">Cross Reference</a><a href="/reverse-engineering/">Engineering</a><a href="/quality/">Quality</a><a href="/about/">About</a><a href="/contact/" class="nav-cta">Get a Quote</a></div>
            <button class="nav-mobile-btn" id="mobile-menu-btn"><svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" d="M4 6h16M4 12h16M4 18h16"/></svg></button>
        </div>
        <div class="nav-mobile-menu" id="mobile-menu"><a href="/">Home</a><a href="/products/">Products</a><a href="/cross-reference/">Cross Reference</a><a href="/contact/">Get a Quote</a></div>
    </nav>

    <!-- Breadcrumb -->
    <section class="page-header" style="padding-top:96px;padding-bottom:24px;">
        <div class="page-header-inner">
            <div class="breadcrumb"><a href="/">Top</a> <span class="sep">/</span> <a href="/products/">Products</a> <span class="sep">/</span> <a href="${cat.href}">${cat.label}</a> <span class="sep">/</span> <span class="current">${product.model}</span></div>
        </div>
    </section>

    <!-- Product Detail -->
    <section class="section" style="padding-top:48px;">
        <div class="section-inner" style="display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:start;">
            <div>
                ${product.image ? `<img src="${product.image}" alt="${product.model}" style="width:100%;height:auto;display:block;margin-bottom:16px;border:1px solid var(--gray-100);" onerror="this.outerHTML='<div class=placeholder-drawing style=min-height:400px;margin-bottom:16px;><svg fill=none stroke=currentColor stroke-width=1 viewBox=\\'0 0 24 24\\' style=width:64px;height:64px;color:var(--gray-300);margin-bottom:8px;><path d=\\'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z\\'/></svg><span>Product Drawing</span></div>'">` : `<div class="placeholder-drawing" style="min-height:400px;margin-bottom:16px;">
                    <svg fill="none" stroke="currentColor" stroke-width="1" viewBox="0 0 24 24" style="width:64px;height:64px;color:var(--gray-300);margin-bottom:8px;"><path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>
                    <span>Product Drawing</span>
                </div>`}
                <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;">
                    <div class="placeholder-drawing" style="min-height:60px;"><span style="font-size:10px;">Photo</span></div>
                    <div class="placeholder-drawing" style="min-height:60px;"><span style="font-size:10px;">Photo</span></div>
                    <div class="placeholder-drawing" style="min-height:60px;"><span style="font-size:10px;">Photo</span></div>
                    <div class="placeholder-drawing" style="min-height:60px;"><span style="font-size:10px;">Drawing</span></div>
                </div>
            </div>
            <div>
                <span class="tag tag-gold" style="margin-bottom:12px;display:inline-block;">${cat.label}</span>
                <h1 style="font-size:clamp(28px,4vw,42px);font-weight:300;color:var(--gray-900);margin-bottom:8px;">${product.model}</h1>
                <div style="font-size:12px;color:var(--gray-400);margin-bottom:24px;letter-spacing:0.05em;">YENNIX Code: ${product.defaultCode}</div>
                <p style="font-size:14px;color:var(--gray-600);line-height:1.8;margin-bottom:24px;font-weight:300;">${product.description}</p>

                <!-- Cross Reference -->
                <div style="border:1px solid var(--gray-200);padding:20px;margin-bottom:24px;">
                    <div style="font-size:11px;font-weight:500;letter-spacing:0.1em;text-transform:uppercase;color:var(--gray-400);margin-bottom:12px;">Cross Reference</div>
                    <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:8px;">
                        ${product.replaces.map(r => `<span class="tag">${r}</span>`).join('')}
                    </div>
                    ${product.compatiblePumps.length ? `<div style="font-size:12px;color:var(--gray-500);margin-top:8px;">Compatible: <span style="color:var(--gold);font-weight:500;">${product.compatiblePumps.join(', ')}</span></div>` : ''}
                </div>

                <!-- Specs -->
                <div class="spec-grid" style="margin-bottom:24px;">
                    <div class="spec-item"><div class="spec-item-label">Shaft Diameter</div><div class="spec-item-value">${product.specs.shaftDiameter}</div></div>
                    <div class="spec-item"><div class="spec-item-label">Pressure</div><div class="spec-item-value">${product.specs.pressure}</div></div>
                    <div class="spec-item"><div class="spec-item-label">Temperature</div><div class="spec-item-value">${product.specs.temperature}</div></div>
                    <div class="spec-item"><div class="spec-item-label">Speed</div><div class="spec-item-value">${product.specs.speed}</div></div>
                </div>

                <a href="/contact/" class="btn-primary" style="display:inline-flex;">Request Quotation</a>
            </div>
        </div>
    </section>

    <!-- Tabs -->
    <section class="section section-light" style="padding-top:0;">
        <div class="section-inner">
            <div class="tabs">
                <button class="tab-btn active" data-tab="specs">Specifications</button>
                <button class="tab-btn" data-tab="dimensions">Dimensions</button>
                <button class="tab-btn" data-tab="materials">Materials</button>
                <button class="tab-btn" data-tab="features">Features &amp; Applications</button>
            </div>

            <div id="tab-specs" class="tab-content active" style="padding-top:32px;">
                <div class="grid-2">
                    <div>
                        <h3 style="font-size:14px;font-weight:600;color:var(--gray-900);margin-bottom:16px;letter-spacing:0.05em;text-transform:uppercase;">Operating Conditions</h3>
                        <div style="border:1px solid var(--gray-200);">
                            <div style="display:flex;justify-content:space-between;padding:12px 16px;border-bottom:1px solid var(--gray-100);"><span style="color:var(--gray-400);font-size:13px;">Shaft Diameter</span><span style="font-weight:500;font-size:13px;">${product.specs.shaftDiameter}</span></div>
                            <div style="display:flex;justify-content:space-between;padding:12px 16px;border-bottom:1px solid var(--gray-100);"><span style="color:var(--gray-400);font-size:13px;">Pressure</span><span style="font-weight:500;font-size:13px;">${product.specs.pressure}</span></div>
                            <div style="display:flex;justify-content:space-between;padding:12px 16px;border-bottom:1px solid var(--gray-100);"><span style="color:var(--gray-400);font-size:13px;">Temperature</span><span style="font-weight:500;font-size:13px;">${product.specs.temperature}</span></div>
                            <div style="display:flex;justify-content:space-between;padding:12px 16px;"><span style="color:var(--gray-400);font-size:13px;">Speed</span><span style="font-weight:500;font-size:13px;">${product.specs.speed}</span></div>
                        </div>
                    </div>
                    <div>
                        <h3 style="font-size:14px;font-weight:600;color:var(--gray-900);margin-bottom:16px;letter-spacing:0.05em;text-transform:uppercase;">Design Features</h3>
                        <ul class="feature-list">${product.features.map(f => '<li><svg class="feature-check" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>' + f + '</li>').join('')}</ul>
                    </div>
                </div>
            </div>

            <div id="tab-dimensions" class="tab-content" style="padding-top:32px;">${dimensionsHTML}</div>

            <div id="tab-materials" class="tab-content" style="padding-top:32px;">
                <h3 style="font-size:16px;font-weight:600;color:var(--gray-900);margin-bottom:24px;">Material Options &amp; Coding System</h3>
                <div class="code-display" style="margin-bottom:32px;">
                    ${codeParts.map((p, i) => {
                        const labels = ['Model', 'Seal Face', 'Elastomer', 'Metal'];
                        const classes = ['', 'code-part-face', 'code-part-elastomer', 'code-part-metal'];
                        return `<span class="code-part ${classes[i]}"><strong>${p}</strong> ${labels[i]}</span>${i < codeParts.length - 1 ? '<span class="code-sep">—</span>' : ''}`;
                    }).join('')}
                </div>
                <div class="mat-grid">${matCards}</div>
            </div>

            <div id="tab-features" class="tab-content" style="padding-top:32px;">
                <div class="grid-2">
                    <div>
                        <h3 style="font-size:14px;font-weight:600;color:var(--gray-900);margin-bottom:16px;letter-spacing:0.05em;text-transform:uppercase;">Key Features</h3>
                        <ul class="feature-list">${product.features.map(f => '<li><svg class="feature-check" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>' + f + '</li>').join('')}</ul>
                    </div>
                    <div>
                        <h3 style="font-size:14px;font-weight:600;color:var(--gray-900);margin-bottom:16px;letter-spacing:0.05em;text-transform:uppercase;">Applications</h3>
                        <div style="margin-bottom:24px;">${product.applications.map(a => '<div style="display:flex;align-items:center;gap:8px;padding:8px 0;border-bottom:1px solid var(--gray-100);font-size:13px;color:var(--gray-600);"><span style="width:6px;height:6px;background:var(--gold);border-radius:50%;flex-shrink:0;"></span>' + a + '</div>').join('')}</div>
                        <h3 style="font-size:14px;font-weight:600;color:var(--gray-900);margin-bottom:16px;letter-spacing:0.05em;text-transform:uppercase;">Compatible Pump Brands</h3>
                        <div style="display:flex;flex-wrap:wrap;gap:6px;">${product.compatiblePumps.map(b => '<span class="tag tag-gold">' + b + '</span>').join('')}</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    ${related.length ? `
    <section class="section">
        <div class="section-inner">
            <div class="section-label">Related Products</div>
            <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:24px;">
                ${related.map(p => `
                    <a href="/product/${p.slug}.html" class="product-card">
                        <div class="placeholder-drawing" style="min-height:120px;border-bottom:1px dashed var(--gray-300);margin:-32px -28px 16px;border-left:0;border-right:0;border-top:0;border-radius:0;">
                            <svg fill="none" stroke="currentColor" stroke-width="1" viewBox="0 0 24 24" style="width:24px;height:24px;color:var(--gray-300);"><path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>
                        </div>
                        <h3 style="font-size:16px;font-weight:600;color:var(--gray-900);margin-bottom:4px;">${p.model}</h3>
                        <p style="font-size:12px;color:var(--gray-400);">${p.replaces.slice(0,2).join(', ')}</p>
                    </a>
                `).join('')}
            </div>
        </div>
    </section>` : ''}

    <!-- Footer -->
    <footer class="footer"><div class="footer-inner"><div class="footer-brand"><a href="/" class="nav-logo"><div class="nav-logo-mark">Y</div><span class="nav-logo-text">YENNIX</span></a><p>Professional mechanical seal supplier.</p></div><div><h4>Products</h4><ul><li><a href="/products/component-seals.html">Component Seals</a></li><li><a href="/products/cartridge-seals.html">Cartridge Seals</a></li><li><a href="/products/custom-seals.html">Custom &amp; ODM</a></li><li><a href="/products/parts.html">Seal Parts</a></li></ul></div><div><h4>Resources</h4><ul><li><a href="/cross-reference/">Cross Reference</a></li><li><a href="/reverse-engineering/">Reverse Engineering</a></li><li><a href="/quality/">Quality</a></li></ul></div><div><h4>Contact</h4><ul><li><a href="mailto:sales@yennix.com">sales@yennix.com</a></li><li><a href="/contact/">Get a Quote</a></li></ul></div></div><div class="footer-bottom" style="text-align:center;">&copy; 2026 YENNIX. All rights reserved.</div></footer>

    <div id="scroll-top" class="scroll-top" onclick="window.scrollTo({top:0,behavior:'smooth'})"><svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 10l7-7m0 0l7 7m-7-7v18"/></svg></div>`;

    // Wire interactions
    document.getElementById('mobile-menu-btn').addEventListener('click', function() {
        document.getElementById('mobile-menu').classList.toggle('open');
    });
    window.addEventListener('scroll', function() {
        var nb = document.getElementById('navbar'), st = document.getElementById('scroll-top');
        if (window.scrollY > 50) nb.classList.add('scrolled'); else nb.classList.remove('scrolled');
        if (window.scrollY > 400) st.classList.add('visible'); else st.classList.remove('visible');
    });
    document.querySelectorAll('.tab-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.tab-btn').forEach(function(b) { b.classList.remove('active'); });
            document.querySelectorAll('.tab-content').forEach(function(c) { c.classList.remove('active'); });
            btn.classList.add('active');
            document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
        });
    });
}
