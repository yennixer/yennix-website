/**
 * YENNIX Blog / Resource Center Data
 * Articles about mechanical seals, maintenance, industry applications
 */

const YENNIX_BLOG_POSTS = [
    {
        id: "mechanical-seal-basics",
        slug: "mechanical-seal-basics",
        title: "Understanding Mechanical Seal Basics: A Complete Guide",
        excerpt: "Learn the fundamentals of mechanical seals — how they work, key components, types, and why they're critical for pump reliability in industrial applications.",
        date: "2026-06-15",
        author: "YENNIX Engineering Team",
        category: "Technical Guide",
        readTime: "8 min read",
        image: "/images/blog/seal-basics-cover.jpg",
        tags: ["mechanical seals", "basics", "pump maintenance", "components"],
        content: `
            <h2>What Is a Mechanical Seal?</h2>
            <p>A mechanical seal is a precision device used to prevent leakage between rotating and stationary components in pumps, compressors, and other rotating equipment. Unlike gland packing, mechanical seals provide a nearly leak-tight seal with minimal friction and wear.</p>
            
            <p>Modern industrial processes demand increasingly reliable sealing solutions. From water treatment plants to chemical processing facilities, mechanical seals play a critical role in equipment performance, environmental compliance, and operational safety.</p>

            <h2>Key Components of a Mechanical Seal</h2>
            <p>Every mechanical seal consists of several fundamental components that work together to create a reliable sealing interface:</p>
            
            <h3>1. Seal Faces (Primary Sealing Elements)</h3>
            <p>The seal faces — typically one rotating and one stationary — form the primary sealing surface. These are lapped to extremely flat tolerances (measured in light bands) to create a micro-gap that allows a thin film of process fluid to lubricate the faces while preventing leakage.</p>
            
            <h3>2. Secondary Seals</h3>
            <p>O-rings, gaskets, and bellows provide secondary sealing between the seal components and the equipment shaft or housing. These static seals prevent leakage around the perimeter of the seal faces.</p>
            
            <h3>3. Spring Mechanism</h3>
            <p>Springs or bellows provide the face loading necessary to maintain contact between the seal faces. The spring design can be single spring, multi-spring, or metal bellows depending on the application requirements.</p>
            
            <h3>4. Drive Mechanism</h3>
            <p>Drive pins, set screws, or keyways transmit torque from the shaft to the rotating seal face. This ensures the rotating face turns with the shaft without slipping.</p>

            <h2>Common Types of Mechanical Seals</h2>
            <p>Mechanical seals come in various configurations to suit different applications:</p>
            
            <ul>
                <li><strong>Component Seals:</strong> Individual parts assembled on the pump shaft. Cost-effective and versatile for general-purpose applications.</li>
                <li><strong>Cartridge Seals:</strong> Pre-assembled units that include all seal components in a single cartridge. Easier to install and less prone to errors.</li>
                <li><strong>Elastomeric Bellows Seals:</strong> Use a rubber or elastomer bellows as both the secondary seal and spring element. Good for general-purpose pump applications.</li>
                <li><strong>Metal Bellows Seals:</strong> Use welded metal bellows for high-temperature and corrosive applications where elastomers would fail.</li>
                <li><strong>Double Seals:</strong> Two sets of seal faces arranged in tandem or back-to-back for hazardous or toxic media where zero leakage is required.</li>
            </ul>

            <h2>How Mechanical Seals Work</h2>
            <p>The operating principle of a mechanical seal relies on maintaining a thin fluid film between the two lapped seal faces. This film — typically only a few microns thick — provides lubrication and cooling while preventing bulk fluid from passing through.</p>
            
            <p>The balance between face pressure, fluid pressure, and spring force determines the seal's performance. Too much face loading causes excessive wear and heat generation; too little allows excessive leakage.</p>

            <h2>Factors Affecting Seal Life</h2>
            <p>Several factors influence how long a mechanical seal will last in service:</p>
            
            <ul>
                <li><strong>Face Material Selection:</strong> Silicon carbide (SiC), tungsten carbide (TC), and carbon graphite are the most common. The right combination depends on the fluid, pressure, and temperature.</li>
                <li><strong>Elastomer Compatibility:</strong> The secondary seal material must be compatible with the process fluid to avoid swelling, hardening, or degradation.</li>
                <li><strong>Operating Conditions:</strong> Pressure, temperature, and speed all affect seal performance. Operating outside design limits dramatically reduces seal life.</li>
                <li><strong>Installation Quality:</strong> Proper installation is critical. Even the best seal will fail prematurely if installed incorrectly.</li>
                <li><strong>Fluid Properties:</strong> Abrasive particles, chemical reactivity, and lubricity of the process fluid all impact wear rates.</li>
            </ul>

            <h2>Conclusion</h2>
            <p>Understanding mechanical seal basics is essential for anyone involved in pump operation, maintenance, or procurement. Choosing the right seal type, material combination, and installation method can dramatically improve equipment reliability and reduce total cost of ownership.</p>
            
            <p>At YENNIX, we engineer custom mechanical seals for the most demanding applications. Whether you need a standard component seal or a fully custom OEM solution, our engineering team can help you select the right seal for your specific requirements.</p>
        `
    },
    {
        id: "choosing-right-mechanical-seal",
        slug: "choosing-right-mechanical-seal",
        title: "How to Choose the Right Mechanical Seal for Your Application",
        excerpt: "A practical guide to selecting mechanical seals based on fluid type, operating conditions, and industry requirements. Make the right choice the first time.",
        date: "2026-06-28",
        author: "YENNIX Engineering Team",
        category: "Selection Guide",
        readTime: "10 min read",
        image: "/images/blog/selection-guide-cover.jpg",
        tags: ["selection guide", "applications", "materials", "pump types"],
        content: `
            <h2>Introduction</h2>
            <p>Selecting the right mechanical seal is critical to achieving reliable, long-lasting pump performance. With so many seal types, materials, and configurations available, making the right choice can seem overwhelming. This guide walks you through the key factors to consider.</p>

            <h2>Step 1: Understand Your Operating Conditions</h2>
            <p>Before selecting a seal, gather the following information about your application:</p>
            
            <ul>
                <li><strong>Fluid type:</strong> What is being pumped? Water, oil, chemicals, slurry?</li>
                <li><strong>Pressure:</strong> What is the operating pressure at the seal chamber?</li>
                <li><strong>Temperature:</strong> What is the fluid temperature range?</li>
                <li><strong>Shaft size:</strong> What is the shaft diameter or seal size needed?</li>
                <li><strong>Speed:</strong> What is the rotational speed (RPM or m/s)?</li>
                <li><strong>Equipment type:</strong> Centrifugal pump, mixer, compressor, agitator?</li>
            </ul>

            <h2>Step 2: Choose the Seal Type</h2>
            
            <h3>Component Seals vs. Cartridge Seals</h3>
            <p><strong>Component seals</strong> are individual parts that are assembled on the shaft. They are generally less expensive upfront but require skilled installation. Best for:</p>
            <ul>
                <li>General-purpose water pumps</li>
                <li>Standard HVAC applications</li>
                <li>Budget-conscious projects</li>
                <li>Experienced maintenance teams</li>
            </ul>
            
            <p><strong>Cartridge seals</strong> come pre-assembled and pre-set, reducing installation errors. They are more expensive upfront but often deliver better long-term value. Best for:</p>
            <ul>
                <li>Critical process pumps</li>
                <li>Chemical and petrochemical applications</li>
                <li>Reduced maintenance downtime</li>
                <li>Less experienced installation teams</li>
            </ul>

            <h3>Single vs. Double Seals</h3>
            <p><strong>Single seals</strong> have one set of seal faces and are suitable for most non-hazardous applications.</p>
            <p><strong>Double seals</strong> use two sets of seal faces with a barrier fluid between them. They are required for:</p>
            <ul>
                <li>Hazardous or toxic fluids</li>
                <li>Regulatory zero-leakage requirements</li>
                <li>Abrasive or crystallizing fluids</li>
                <li>High-value product containment</li>
            </ul>

            <h2>Step 3: Select Seal Face Materials</h2>
            <p>The seal face material combination is one of the most important choices. Here are common pairings:</p>
            
            <h3>Carbon vs. Silicon Carbide (C/SiC)</h3>
            <p>The most common general-purpose combination. Carbon graphite provides excellent self-lubricating properties, while silicon carbide offers hardness and chemical resistance. Suitable for clean water and many chemical applications.</p>
            
            <h3>Silicon Carbide vs. Silicon Carbide (SiC/SiC)</h3>
            <p>Both faces are silicon carbide for maximum wear resistance. Excellent for abrasive fluids, high PV conditions, and where carbon would be chemically attacked.</p>
            
            <h3>Tungsten Carbide vs. Carbon (TC/C)</h3>
            <p>Tungsten carbide offers exceptional hardness and impact resistance. Good for applications with moderate abrasives or where shock loading may occur.</p>

            <h2>Step 4: Select Elastomer Materials</h2>
            <p>Secondary seal material must be compatible with the process fluid:</p>
            
            <ul>
                <li><strong>NBR (Buna-N):</strong> General-purpose, oils and fuels. -30°C to +120°C</li>
                <li><strong>EPDM:</strong> Hot water, steam, acids, and alkalines. -50°C to +150°C</li>
                <li><strong>FKM (Viton):</strong> Wide chemical compatibility, hydrocarbons. -20°C to +200°C</li>
                <li><strong>FFKM (Kalrez):</strong> Ultimate chemical resistance. -20°C to +327°C</li>
                <li><strong>AFLAS:</strong> High temperature + amine resistance. -10°C to +230°C</li>
            </ul>

            <h2>Step 5: Consider Industry-Specific Requirements</h2>
            
            <h3>Water Treatment</h3>
            <p>Water applications generally use EPDM or FKM elastomers with SiC/C faces. Consider whether the water contains chlorine, abrasives, or chemicals that might affect material selection.</p>
            
            <h3>Chemical Processing</h3>
            <p>Chemical applications require careful material selection. Always verify compatibility with the specific chemical and concentration. Metal bellows seals may be needed for high-temperature or highly corrosive services.</p>
            
            <h3>Oil & Gas / Petrochemical</h3>
            <p>API 682 standards may apply. Cartridge seals, often in double or tandem configurations, are common. FKM or FFKM elastomers with SiC faces are typical.</p>
            
            <h3>Food & Beverage</h3>
            <p>Food-grade materials and hygienic designs are required. External springs and clean-in-place (CIP) compatibility are important considerations.</p>

            <h2>Common Selection Mistakes to Avoid</h2>
            <ol>
                <li><strong>Ignoring the seal chamber environment:</strong> Conditions at the seal can be very different from pump discharge.</li>
                <li><strong>Over-specifying:</strong> You don't always need the most expensive seal. Match the seal to the actual application.</li>
                <li><strong>Under-specifying:</strong> Trying to save money on a critical application can cost far more in downtime.</li>
                <li><strong>Neglecting installation:</strong> Even the best seal fails if installed incorrectly. Use cartridge seals when installation quality is uncertain.</li>
                <li><strong>Not considering operating variability:</strong> If conditions vary widely, choose a seal that can handle the full range.</li>
            </ol>

            <h2>Conclusion</h2>
            <p>Choosing the right mechanical seal involves balancing performance requirements, material compatibility, and cost. By understanding your operating conditions and working with an experienced sealing solution specialist, you can select a seal that provides reliable, long-lasting performance.</p>
            
            <p>Need help selecting the right seal? <a href="/contact/">Contact YENNIX</a> for expert technical support. Our engineering team can help you specify the perfect seal for your application.</p>
        `
    },
    {
        id: "mechanical-seal-maintenance-tips",
        slug: "mechanical-seal-maintenance-tips",
        title: "10 Mechanical Seal Maintenance Tips to Extend Service Life",
        excerpt: "Proactive maintenance practices that can double or triple your mechanical seal life. Save money on replacements and reduce unplanned downtime.",
        date: "2026-07-01",
        author: "YENNIX Engineering Team",
        category: "Maintenance",
        readTime: "6 min read",
        image: "/images/blog/maintenance-tips-cover.jpg",
        tags: ["maintenance", "reliability", "best practices", "troubleshooting"],
        content: `
            <h2>Introduction</h2>
            <p>Mechanical seals are often the weakest link in pump reliability. According to industry studies, seal failures account for approximately 30-40% of all pump downtime. The good news is that proper maintenance can significantly extend seal life — in many cases by 2-3x or more.</p>
            
            <p>Here are 10 maintenance tips that will help you get the most out of your mechanical seals.</p>

            <h2>1. Ensure Proper Installation</h2>
            <p>Proper installation is the single most important factor in seal reliability. Studies show that up to 60% of premature seal failures are caused by installation errors.</p>
            
            <ul>
                <li>Follow the manufacturer's installation instructions precisely</li>
                <li>Use the correct tools — never hammer on seal components</li>
                <li>Inspect the shaft and sleeve for wear, scoring, or corrosion</li>
                <li>Verify shaft end play and runout are within limits</li>
                <li>Clean all seal components thoroughly before assembly</li>
                <li>Use cartridge seals to minimize installation errors</li>
            </ul>

            <h2>2. Maintain Proper Lubrication & Cooling</h2>
            <p>Mechanical seals rely on a thin film of process fluid for lubrication and cooling. Without adequate lubrication, seal faces will quickly overheat and fail.</p>
            
            <ul>
                <li>Ensure the seal chamber is properly vented before startup</li>
                <li>Verify flush plans are functioning correctly</li>
                <li>Check barrier/buffer fluid levels for double seals regularly</li>
                <li>Monitor seal chamber temperature</li>
                <li>Never run a pump dry — even briefly</li>
            </ul>

            <h2>3. Keep the Fluid Clean</h2>
            <p>Abrasive particles in the process fluid are one of the most common causes of accelerated seal face wear. Even small amounts of dirt, sand, or corrosion products can dramatically reduce seal life.</p>
            
            <ul>
                <li>Install suction strainers or filters where appropriate</li>
                <li>Flush piping systems before pump startup</li>
                <li>Use Plan 32 flush for dirty services</li>
                <li>Consider double seals with barrier fluid for abrasive services</li>
            </ul>

            <h2>4. Monitor Operating Conditions</h2>
            <p>Seals are designed for specific operating conditions. Operating outside those limits — even occasionally — can cause rapid degradation.</p>
            
            <ul>
                <li>Monitor pressure, temperature, and flow rate</li>
                <li>Keep operating conditions within seal design limits</li>
                <li>Be aware of off-design operation (deadheading, cavitation)</li>
                <li>Investigate and correct any recurring alarm conditions</li>
            </ul>

            <h2>5. Implement a Predictive Maintenance Program</h2>
            <p>Instead of waiting for seals to fail, use condition monitoring to detect problems early and plan maintenance.</p>
            
            <ul>
                <li>Monitor seal leakage rates</li>
                <li>Use vibration analysis to detect seal and bearing problems</li>
                <li>Track seal temperatures with thermal imaging or sensors</li>
                <li>Analyze seal failure modes to identify systemic issues</li>
            </ul>

            <h2>6. Use the Right Material for the Application</h2>
            <p>Using the wrong material is a common cause of premature seal failure. Always verify that the seal materials are compatible with the process fluid and operating conditions.</p>
            
            <ul>
                <li>Check elastomer compatibility with all process fluids</li>
                <li>Consider both normal and upset conditions</li>
                <li>Review material compatibility when process changes occur</li>
                <li>Consult with your seal supplier for difficult services</li>
            </ul>

            <h2>7. Control Pressure and Transients</h2>
            <p>Pressure transients — water hammer, pressure spikes, and vacuum conditions — can cause immediate seal failure or significantly shorten life.</p>
            
            <ul>
                <li>Install pressure relief valves where needed</li>
                <li>Use soft starters or VFDs to reduce startup transients</li>
                <li>Ensure proper valve operation to prevent water hammer</li>
                <li>Consider balanced seals for high-pressure applications</li>
            </ul>

            <h2>8. Don't Neglect Seal Support Systems</h2>
            <p>The seal support system (flush, quench, barrier fluid system) is an integral part of the sealing solution. Problems with the support system often manifest as seal failures.</p>
            
            <ul>
                <li>Inspect and maintain flush plans regularly</li>
                <li>Change barrier fluid on schedule</li>
                <li>Check heat exchangers for fouling</li>
                <li>Verify pressure and flow settings</li>
                <li>Keep reservoirs clean and properly vented</li>
            </ul>

            <h2>9. Train Maintenance Personnel</h2>
            <p>Well-trained maintenance personnel are your best defense against preventable seal failures. Invest in training and make seal reliability a priority.</p>
            
            <ul>
                <li>Provide regular training on seal installation and maintenance</li>
                <li>Document best practices and procedures</li>
                <li>Share lessons learned from seal failures</li>
                <li>Encourage root cause analysis for every failure</li>
            </ul>

            <h2>10. Work with a Reliable Seal Supplier</h2>
            <p>Your seal supplier should be a partner in reliability, not just a vendor.</p>
            
            <ul>
                <li>Choose a supplier with technical expertise</li>
                <li>Look for engineering support for difficult applications</li>
                <li>Consider suppliers who offer failure analysis services</li>
                <li>Build a relationship — your supplier should know your operations</li>
            </ul>

            <h2>Conclusion</h2>
            <p>Mechanical seal maintenance doesn't have to be complicated. By following these 10 tips, you can dramatically improve seal reliability, reduce maintenance costs, and minimize unplanned downtime.</p>
            
            <p>Remember: the most effective maintenance strategy is proactive, not reactive. Invest in proper installation, ongoing monitoring, and regular training, and your seals will reward you with years of reliable service.</p>
            
            <p>For expert advice on seal selection, installation, or troubleshooting, <a href="/contact/">contact the YENNIX team</a>. We're here to help you get the best performance from your mechanical seals.</p>
        `
    }
];

// Get all blog posts
function getAllBlogPosts() {
    return YENNIX_BLOG_POSTS;
}

// Get blog post by slug
function getBlogPostBySlug(slug) {
    return YENNIX_BLOG_POSTS.find(function(p) { return p.slug === slug; });
}

// Get related posts (same category, exclude current)
function getRelatedPosts(currentSlug, limit) {
    limit = limit || 3;
    const current = getBlogPostBySlug(currentSlug);
    if (!current) return [];
    
    const related = YENNIX_BLOG_POSTS
        .filter(function(p) { return p.slug !== currentSlug; })
        .filter(function(p) { return p.category === current.category || p.tags.some(function(t) { return current.tags.indexOf(t) !== -1; }); })
        .slice(0, limit);
    
    // If not enough related posts, fill with recent posts
    if (related.length < limit) {
        const recent = YENNIX_BLOG_POSTS
            .filter(function(p) { return p.slug !== currentSlug && related.indexOf(p) === -1; })
            .slice(0, limit - related.length);
        return related.concat(recent);
    }
    
    return related;
}

// Get all categories
function getBlogCategories() {
    const cats = {};
    YENNIX_BLOG_POSTS.forEach(function(p) {
        if (!cats[p.category]) cats[p.category] = 0;
        cats[p.category]++;
    });
    return Object.keys(cats).map(function(c) {
        return { name: c, count: cats[c] };
    });
}

// Search blog posts
function searchBlogPosts(query) {
    if (!query || !query.trim()) return YENNIX_BLOG_POSTS;
    const q = query.toLowerCase().trim();
    return YENNIX_BLOG_POSTS.filter(function(p) {
        return p.title.toLowerCase().indexOf(q) !== -1 ||
               p.excerpt.toLowerCase().indexOf(q) !== -1 ||
               p.tags.some(function(t) { return t.toLowerCase().indexOf(q) !== -1; }) ||
               p.category.toLowerCase().indexOf(q) !== -1;
    });
}

// Format date
function formatBlogDate(dateStr) {
    const date = new Date(dateStr);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}
