/**
 * YENNIX Product Detail Page Renderer
 * Renders full product detail pages dynamically from the product data store
 */

function initProductPage(slug) {
    const product = findProductBySlug(slug);
    const app = document.getElementById('app');

    if (!product) {
        app.innerHTML = `
            <div class="min-h-screen flex items-center justify-center">
                <div class="text-center">
                    <h1 class="text-4xl font-bold text-gray-300 mb-4">Product Not Found</h1>
                    <a href="/products/" class="text-primary-600 font-semibold hover:text-primary-700">Back to Products</a>
                </div>
            </div>`;
        return;
    }

    // Update title
    document.title = `${product.model} - ${product.categoryName} | YENNIX`;

    const catLinks = {
        'component-seals': { href: '/products/component-seals.html', label: 'Component Seals' },
        'cartridge-seals': { href: '/products/cartridge-seals.html', label: 'Cartridge Seals' },
        'custom-seals': { href: '/products/custom-seals.html', label: 'Custom & ODM Seals' },
        'parts': { href: '/products/parts.html', label: 'Seal Parts & Accessories' }
    };
    const cat = catLinks[product.category];

    const catColors = {
        'component-seals': 'bg-blue-50 text-primary-700',
        'cartridge-seals': 'bg-amber-50 text-accent-700',
        'custom-seals': 'bg-green-50 text-green-700',
        'parts': 'bg-purple-50 text-purple-700'
    };

    const code = product.defaultCode;
    const codeParts = code.split('-');

    // Dimensions table
    let dimensionsHTML = '';
    if (product.dimensions.length) {
        dimensionsHTML = `
            <h3 class="text-lg font-bold text-gray-900 mb-4">Product Dimensions (mm)</h3>
            <div class="overflow-x-auto">
                <table class="dim-table w-full">
                    <thead><tr><th>d (Shaft)</th><th>D1</th><th>D2</th><th>L1</th><th>L2</th></tr></thead>
                    <tbody>${product.dimensions.map(d => `<tr><td>${d.d}</td><td>${d.D1}</td><td>${d.D2}</td><td>${d.L1}</td><td>${d.L2}</td></tr>`).join('')}</tbody>
                </table>
            </div>
            <p class="text-xs text-gray-400 mt-3">* Dimensions are for reference only. Contact us for confirmed drawings.</p>`;
    } else {
        dimensionsHTML = '<p class="text-gray-500 py-8">Contact us for detailed dimension information for this product.</p>';
    }

    // Materials grid
    let matGrid = '';
    if (product.materials.sealFace) {
        matGrid += `<div class="bg-white rounded-xl border p-5"><h4 class="font-bold text-gray-900 mb-3 flex items-center gap-2"><span class="w-3 h-3 bg-red-400 rounded-full"></span>Seal Face</h4><ul class="space-y-2">${product.materials.sealFace.map(m => `<li class="text-sm text-gray-700">${m}</li>`).join('')}</ul></div>`;
    }
    if (product.materials.elastomer) {
        matGrid += `<div class="bg-white rounded-xl border p-5"><h4 class="font-bold text-gray-900 mb-3 flex items-center gap-2"><span class="w-3 h-3 bg-green-400 rounded-full"></span>Elastomer</h4><ul class="space-y-2">${product.materials.elastomer.map(m => `<li class="text-sm text-gray-700">${m}</li>`).join('')}</ul></div>`;
    }
    if (product.materials.metal) {
        matGrid += `<div class="bg-white rounded-xl border p-5"><h4 class="font-bold text-gray-900 mb-3 flex items-center gap-2"><span class="w-3 h-3 bg-gray-400 rounded-full"></span>Metal</h4><ul class="space-y-2">${product.materials.metal.map(m => `<li class="text-sm text-gray-700">${m}</li>`).join('')}</ul></div>`;
    }

    // Related products
    const related = YENNIX_PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
    const relatedHTML = related.map(p => `
        <a href="/product/${p.slug}.html" class="product-card bg-white rounded-2xl p-5 group">
            <div class="placeholder-drawing h-32 rounded-xl !min-h-0 mb-3">
                <svg class="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>
            </div>
            <h4 class="font-bold text-gray-900">${p.model}</h4>
            <p class="text-sm text-gray-500 mt-1">${p.replaces.slice(0,2).join(', ')}</p>
            <div class="mt-2 text-primary-600 text-sm font-semibold">View Details &rarr;</div>
        </a>
    `).join('');

    app.innerHTML = `
    <!-- Navigation -->
    <nav class="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <div class="flex items-center space-x-2">
                    <a href="/"><div class="w-8 h-8 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg flex items-center justify-center"><span class="text-white font-bold text-sm">Y</span></div></a>
                    <a href="/"><span class="text-xl font-bold text-primary-800 tracking-tight">YENNIX</span></a>
                </div>
                <div class="hidden lg:flex items-center space-x-6">
                    <a href="/" class="nav-link text-gray-700 hover:text-primary-600 font-medium text-sm">Home</a>
                    <a href="/products/" class="nav-link text-gray-700 hover:text-primary-600 font-medium text-sm">Products</a>
                    <a href="/cross-reference/" class="nav-link text-gray-700 hover:text-primary-600 font-medium text-sm">Cross Reference</a>
                    <a href="/reverse-engineering/" class="nav-link text-gray-700 hover:text-primary-600 font-medium text-sm">Engineering</a>
                    <a href="/quality/" class="nav-link text-gray-700 hover:text-primary-600 font-medium text-sm">Quality</a>
                    <a href="/about/" class="nav-link text-gray-700 hover:text-primary-600 font-medium text-sm">About</a>
                    <a href="/contact/" class="bg-accent-500 hover:bg-accent-600 text-white px-5 py-2 rounded-lg font-medium text-sm transition-colors">Get a Quote</a>
                </div>
                <button id="mobile-menu-btn" class="lg:hidden p-2"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg></button>
            </div>
        </div>
        <div id="mobile-menu" class="hidden lg:hidden bg-white border-t"><div class="px-4 py-3 space-y-2"><a href="/" class="block py-2 text-gray-700">Home</a><a href="/products/" class="block py-2 text-gray-700">Products</a><a href="/cross-reference/" class="block py-2 text-gray-700">Cross Reference</a><a href="/contact/" class="block py-2 text-accent-600 font-medium">Get a Quote</a></div></div>
    </nav>

    <!-- Breadcrumb -->
    <section class="pt-20 bg-gray-50 border-b">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div class="breadcrumb text-sm">
                <a href="/">Home</a> <span class="text-gray-400 mx-2">/</span>
                <a href="/products/">Products</a> <span class="text-gray-400 mx-2">/</span>
                <a href="${cat.href}">${cat.label}</a> <span class="text-gray-400 mx-2">/</span>
                <span class="text-gray-700">${product.model}</span>
            </div>
        </div>
    </section>

    <!-- Product Detail -->
    <section class="py-12 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid lg:grid-cols-2 gap-12">
                <div>
                    <div class="placeholder-drawing min-h-[400px] mb-6">
                        <svg class="w-20 h-20 text-gray-300 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>
                        <span class="text-gray-400 font-medium">Product Drawing</span>
                        <span class="text-gray-300 text-sm mt-1">Image to be added</span>
                    </div>
                    <div class="grid grid-cols-4 gap-3">
                        <div class="placeholder-drawing h-20 rounded-lg !min-h-0"><span class="text-xs text-gray-400">Photo</span></div>
                        <div class="placeholder-drawing h-20 rounded-lg !min-h-0"><span class="text-xs text-gray-400">Photo</span></div>
                        <div class="placeholder-drawing h-20 rounded-lg !min-h-0"><span class="text-xs text-gray-400">Photo</span></div>
                        <div class="placeholder-drawing h-20 rounded-lg !min-h-0"><span class="text-xs text-gray-400">Drawing</span></div>
                    </div>
                </div>
                <div>
                    <div class="mb-3"><span class="xref-tag ${catColors[product.category]}">${cat.label}</span></div>
                    <h1 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">${product.model}</h1>
                    <div class="mb-4"><span class="font-mono text-primary-600 font-semibold text-sm">YENNIX Code: ${product.model} | Default: ${product.defaultCode}</span></div>
                    <p class="text-gray-600 leading-relaxed mb-6">${product.description}</p>
                    <div class="bg-primary-50 rounded-xl p-4 mb-6">
                        <h4 class="font-semibold text-gray-900 text-sm mb-2">Cross Reference</h4>
                        <div class="flex flex-wrap gap-2">${product.replaces.map(r => `<span class="xref-tag bg-white text-gray-700 border border-gray-200 text-xs">Replaces: ${r}</span>`).join('')}</div>
                        ${product.compatiblePumps.length ? `<div class="mt-3"><span class="text-xs text-gray-500">Compatible with: </span><span class="text-xs text-primary-600 font-semibold">${product.compatiblePumps.join(', ')}</span></div>` : ''}
                    </div>
                    <div class="grid grid-cols-2 gap-4 mb-6">
                        <div class="bg-gray-50 rounded-xl p-4"><div class="text-xs text-gray-400 mb-1">Shaft Diameter</div><div class="font-semibold text-gray-900">${product.specs.shaftDiameter}</div></div>
                        <div class="bg-gray-50 rounded-xl p-4"><div class="text-xs text-gray-400 mb-1">Pressure</div><div class="font-semibold text-gray-900">${product.specs.pressure}</div></div>
                        <div class="bg-gray-50 rounded-xl p-4"><div class="text-xs text-gray-400 mb-1">Temperature</div><div class="font-semibold text-gray-900">${product.specs.temperature}</div></div>
                        <div class="bg-gray-50 rounded-xl p-4"><div class="text-xs text-gray-400 mb-1">Speed</div><div class="font-semibold text-gray-900">${product.specs.speed}</div></div>
                    </div>
                    <a href="/contact/" class="inquiry-btn inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors shadow-lg shadow-amber-500/20">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                        Request Quotation
                    </a>
                </div>
            </div>

            <!-- Tabs -->
            <div class="mt-12 border-b border-gray-200">
                <div class="flex gap-0 overflow-x-auto">
                    <button class="tab-btn active" data-tab="specs">Specifications</button>
                    <button class="tab-btn" data-tab="dimensions">Dimensions</button>
                    <button class="tab-btn" data-tab="materials">Materials</button>
                    <button class="tab-btn" data-tab="features">Features & Applications</button>
                </div>
            </div>

            <div id="tab-specs" class="tab-content active py-8">
                <div class="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 class="text-lg font-bold text-gray-900 mb-4">Operating Conditions</h3>
                        <div class="space-y-3">
                            <div class="flex justify-between py-2 border-b border-gray-100"><span class="text-gray-500">Shaft Diameter</span><span class="font-semibold">${product.specs.shaftDiameter}</span></div>
                            <div class="flex justify-between py-2 border-b border-gray-100"><span class="text-gray-500">Pressure</span><span class="font-semibold">${product.specs.pressure}</span></div>
                            <div class="flex justify-between py-2 border-b border-gray-100"><span class="text-gray-500">Temperature</span><span class="font-semibold">${product.specs.temperature}</span></div>
                            <div class="flex justify-between py-2 border-b border-gray-100"><span class="text-gray-500">Speed</span><span class="font-semibold">${product.specs.speed}</span></div>
                        </div>
                    </div>
                    <div>
                        <h3 class="text-lg font-bold text-gray-900 mb-4">Design Features</h3>
                        <ul class="space-y-2">${product.features.map(f => `<li class="flex items-start gap-2"><svg class="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg><span class="text-gray-700">${f}</span></li>`).join('')}</ul>
                    </div>
                </div>
            </div>

            <div id="tab-dimensions" class="tab-content py-8">${dimensionsHTML}</div>

            <div id="tab-materials" class="tab-content py-8">
                <h3 class="text-lg font-bold text-gray-900 mb-6">Material Options & Coding System</h3>
                <div class="bg-gray-50 rounded-2xl p-6 mb-8">
                    <div class="text-sm text-gray-500 mb-3">Example Material Code</div>
                    <div class="flex items-center gap-2 flex-wrap">
                        ${codeParts.map((p, i) => {
                            const labels = ['Model', 'Seal Face', 'Elastomer', 'Metal'];
                            const colors = ['bg-blue-50 text-primary-700 border-primary-200', 'bg-red-50 text-red-700 border-red-200', 'bg-green-50 text-green-700 border-green-200', 'bg-gray-50 text-gray-700 border-gray-200'];
                            return `<span class="material-badge ${colors[i]}"><strong>${p}</strong> ${labels[i]}</span>${i < codeParts.length - 1 ? '<span class="text-gray-300">-</span>' : ''}`;
                        }).join('')}
                    </div>
                </div>
                <div class="grid md:grid-cols-3 gap-6">${matGrid}</div>
            </div>

            <div id="tab-features" class="tab-content py-8">
                <div class="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 class="text-lg font-bold text-gray-900 mb-4">Key Features</h3>
                        <ul class="space-y-3">${product.features.map(f => `<li class="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"><svg class="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg><span class="text-gray-700">${f}</span></li>`).join('')}</ul>
                    </div>
                    <div>
                        <h3 class="text-lg font-bold text-gray-900 mb-4">Typical Applications</h3>
                        <div class="space-y-2 mb-8">${product.applications.map(a => `<div class="flex items-center gap-2"><span class="w-2 h-2 bg-accent-400 rounded-full"></span><span class="text-gray-700">${a}</span></div>`).join('')}</div>
                        <h3 class="text-lg font-bold text-gray-900 mb-4">Compatible Pump Brands</h3>
                        <div class="flex flex-wrap gap-2">${product.compatiblePumps.map(b => `<span class="xref-tag bg-primary-50 text-primary-700">${b}</span>`).join('')}</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Related Products -->
    ${related.length ? `
    <section class="py-12 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Related Products</h2>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">${relatedHTML}</div>
        </div>
    </section>` : ''}

    <!-- Footer -->
    <footer class="bg-primary-900 text-white py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-4 gap-8">
                <div><div class="flex items-center space-x-2 mb-4"><div class="w-8 h-8 bg-gradient-to-br from-accent-400 to-accent-600 rounded-lg flex items-center justify-center"><span class="text-white font-bold text-sm">Y</span></div><span class="text-xl font-bold tracking-tight">YENNIX</span></div><p class="text-blue-300 text-sm">Professional mechanical seal supplier.</p></div>
                <div><h4 class="font-semibold mb-4">Products</h4><ul class="space-y-2 text-sm text-blue-300"><li><a href="/products/component-seals.html" class="hover:text-white">Component Seals</a></li><li><a href="/products/cartridge-seals.html" class="hover:text-white">Cartridge Seals</a></li><li><a href="/products/custom-seals.html" class="hover:text-white">Custom & ODM</a></li><li><a href="/products/parts.html" class="hover:text-white">Seal Parts</a></li></ul></div>
                <div><h4 class="font-semibold mb-4">Resources</h4><ul class="space-y-2 text-sm text-blue-300"><li><a href="/cross-reference/" class="hover:text-white">Cross Reference</a></li><li><a href="/reverse-engineering/" class="hover:text-white">Reverse Engineering</a></li><li><a href="/quality/" class="hover:text-white">Quality</a></li></ul></div>
                <div><h4 class="font-semibold mb-4">Contact</h4><ul class="space-y-2 text-sm text-blue-300"><li><a href="mailto:sales@yennix.com" class="hover:text-white">sales@yennix.com</a></li><li><a href="/contact/" class="hover:text-white">Get a Quote</a></li></ul></div>
            </div>
            <div class="border-t border-blue-800 mt-12 pt-8 text-center text-blue-400 text-sm">&copy; 2026 YENNIX. All rights reserved.</div>
        </div>
    </footer>`;

    // Wire up interactions
    document.getElementById('mobile-menu-btn').addEventListener('click', function() {
        document.getElementById('mobile-menu').classList.toggle('hidden');
    });

    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            document.getElementById('tab-' + this.dataset.tab).classList.add('active');
        });
    });
}
