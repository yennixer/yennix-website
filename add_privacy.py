import os
import glob

# ============================================================
# 1. 生成隐私政策页
# ============================================================

privacy_html = r'''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Privacy Policy — YENNIX Mechanical Seals</title>
    <meta name="description" content="YENNIX privacy policy: how we collect, use, and protect your personal data in compliance with GDPR, CCPA, and other global privacy regulations.">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/css/custom.css?v=20260703e">
    <meta property="og:title" content="Privacy Policy — YENNIX Mechanical Seals">
    <meta property="og:description" content="YENNIX privacy policy: how we collect, use, and protect your personal data.">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://yennix.com/privacy/">
    <meta property="og:image" content="https://yennix.com/images/logo/og-image.jpg">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Privacy Policy — YENNIX Mechanical Seals">
    <meta name="twitter:description" content="YENNIX privacy policy: how we collect, use, and protect your personal data.">
    <link rel="icon" type="image/png" href="/images/logo/favicon-32.png">
    <link rel="apple-touch-icon" href="/images/logo/apple-touch-icon.png">
</head>
<body>

    <nav class="nav-main" id="navbar">
        <div class="nav-inner">
            <a href="/" class="nav-logo">
                <img src="/images/logo/logo-gold-nav.png" alt="YENNIX" class="nav-logo-img">
            </a>
            <div class="nav-links"><a href="/">Home</a><a href="/products/">Products</a><a href="/cross-reference/">Cross Reference</a><a href="/reverse-engineering/">Engineering</a><a href="/quality/">Quality</a><a href="/faq/">FAQ</a><a href="/about/">About</a><a href="/contact/" class="nav-cta">Get a Quote</a></div>
            <button class="nav-mobile-btn" id="mobile-menu-btn">
                <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
            </button>
        </div>
        <div class="nav-mobile-menu" id="mobile-menu"><a href="/">Home</a><a href="/products/">Products</a><a href="/cross-reference/">Cross Reference</a><a href="/reverse-engineering/">Engineering</a><a href="/quality/">Quality</a><a href="/faq/">FAQ</a><a href="/about/">About</a><a href="/contact/">Get a Quote</a></div>
    </nav>

    <section class="page-header">
        <div class="page-inner" style="max-width:1200px;margin:0 auto;">
            <div class="breadcrumb"><a href="/">Top</a> <span class="sep">/</span> <span class="current">Privacy Policy</span></div>
            <h1>Privacy Policy</h1>
            <p>Last updated: July 3, 2026. Your privacy matters. This policy explains what data YENNIX collects, how we use it, and your rights.</p>
        </div>
    </section>

    <section class="section">
        <div class="section-inner" style="max-width:900px;">

            <div class="privacy-section">
                <h2>1. Who We Are</h2>
                <p>YENNIX ("we", "us", "our") operates the website yennix.com and related services. We are a mechanical seal supplier based in China, serving customers worldwide. If you have questions about this policy, contact us at <a href="mailto:privacy@yennix.com">privacy@yennix.com</a>.</p>
            </div>

            <div class="privacy-section">
                <h2>2. Information We Collect</h2>
                <p>We collect only the information necessary to serve you:</p>
                <ul class="privacy-list">
                    <li><strong>Contact form data</strong>: name, email, company, country, and message content you submit through our quote/inquiry forms.</li>
                    <li><strong>Email correspondence</strong>: any information you choose to share with us via email.</li>
                    <li><strong>Usage data</strong>: basic analytics (page views, referral source, device type) collected via server logs and privacy-friendly analytics. We do not use Google Analytics or third-party tracking cookies.</li>
                    <li><strong>Cookies</strong>: strictly necessary cookies for website functionality (e.g., remembering cookie consent preference). We do not use marketing or advertising cookies.</li>
                </ul>
            </div>

            <div class="privacy-section">
                <h2>3. How We Use Your Information</h2>
                <ul class="privacy-list">
                    <li>To respond to your inquiries and provide quotations.</li>
                    <li>To process and fulfill orders (if applicable).</li>
                    <li>To send product updates or technical information — <em>only if you have explicitly opted in</em>.</li>
                    <li>To improve our website and services based on aggregated, anonymized usage data.</li>
                    <li>To comply with legal obligations.</li>
                </ul>
                <p>We <strong>do not</strong> sell, rent, or trade your personal information to third parties for marketing purposes.</p>
            </div>

            <div class="privacy-section">
                <h2>4. Data Sharing & Third Parties</h2>
                <p>We share your data only with service providers necessary to operate our business:</p>
                <ul class="privacy-list">
                    <li><strong>Formspree</strong>: processes contact form submissions. <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener">View their privacy policy</a>.</li>
                    <li><strong>Cloudflare</strong>: hosts our website and provides security services. <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener">View their privacy policy</a>.</li>
                    <li><strong>Email providers</strong>: for email communication (Alibaba Cloud Enterprise Mail).</li>
                </ul>
                <p>All third-party providers are contractually required to protect your data and use it only for the purposes we specify.</p>
            </div>

            <div class="privacy-section">
                <h2>5. Data Retention</h2>
                <p>We retain your personal data only as long as necessary:</p>
                <ul class="privacy-list">
                    <li><strong>Inquiry records</strong>: retained for up to 3 years for customer relationship purposes.</li>
                    <li><strong>Order records</strong>: retained for the duration of any warranty period plus applicable legal requirements.</li>
                    <li><strong>Email marketing</strong>: you can unsubscribe at any time by replying "unsubscribe" or emailing <a href="mailto:privacy@yennix.com">privacy@yennix.com</a>.</li>
                </ul>
            </div>

            <div class="privacy-section">
                <h2>6. Your Rights (GDPR & CCPA)</h2>
                <p>Depending on your location, you may have the right to:</p>
                <ul class="privacy-list">
                    <li>Access the personal data we hold about you.</li>
                    <li>Request correction of inaccurate or incomplete data.</li>
                    <li>Request deletion of your personal data ("right to be forgotten").</li>
                    <li>Request restriction of processing.</li>
                    <li>Data portability — receive your data in a machine-readable format.</li>
                    <li>Object to processing for direct marketing purposes.</li>
                    <li>Withdraw consent at any time (where processing is based on consent).</li>
                </ul>
                <p>To exercise these rights, email <a href="mailto:privacy@yennix.com">privacy@yennix.com</a>. We respond within 30 days.</p>
            </div>

            <div class="privacy-section">
                <h2>7. Cookies</h2>
                <p>Our website uses the following cookies:</p>
                <div style="overflow-x:auto;">
                    <table class="privacy-table">
                        <thead>
                            <tr><th>Cookie Name</th><th>Purpose</th><th>Duration</th><th>Type</th></tr>
                        </thead>
                        <tbody>
                            <tr><td><code>cookie_consent</code></td><td>Remembers your cookie consent preference</td><td>1 year</td><td>Necessary</td></tr>
                            <tr><td>Server session</td><td>Maintains basic website functionality</td><td>Session</td><td>Necessary</td></tr>
                        </tbody>
                    </table>
                </div>
                <p>We do not use third-party tracking cookies, advertising cookies, or behavioral advertising. You can manage cookie preferences through your browser settings.</p>
            </div>

            <div class="privacy-section">
                <h2>8. Data Security</h2>
                <p>We implement reasonable technical and organizational measures to protect your personal data, including HTTPS encryption, access controls, and regular security reviews. However, no method of transmission over the internet is 100% secure.</p>
            </div>

            <div class="privacy-section">
                <h2>9. International Data Transfers</h2>
                <p>As a China-based company serving global customers, your data may be transferred to and processed in countries outside your residence. We ensure such transfers comply with applicable data protection laws through appropriate safeguards.</p>
            </div>

            <div class="privacy-section">
                <h2>10. Children's Privacy</h2>
                <p>Our website and services are not directed to children under 16. We do not knowingly collect personal data from children.</p>
            </div>

            <div class="privacy-section">
                <h2>11. Changes to This Policy</h2>
                <p>We may update this policy from time to time. The latest version will always be posted on this page with the "Last updated" date. Material changes will be notified through a prominent notice on our website.</p>
            </div>

            <div class="privacy-section">
                <h2>12. Contact Us</h2>
                <p>If you have questions about this privacy policy or our data practices, contact our data protection representative at:</p>
                <p><strong>Email</strong>: <a href="mailto:privacy@yennix.com">privacy@yennix.com</a><br>
                <strong>Response time</strong>: within 30 days of receipt</p>
            </div>

        </div>
    </section>

    <footer class="footer">
        <div class="footer-inner">
            <div class="footer-brand">
                <a href="/" class="nav-logo" style="margin-bottom:0;">
                    <img src="/images/logo/logo-gold-footer.png" alt="YENNIX" class="nav-logo-img">
                </a>
                <p>Professional mechanical seal supplier. Fast delivery, competitive pricing, and expert technical support worldwide.</p>
            </div>
            <div>
                <h4>Products</h4>
                <ul>
                    <li><a href="/products/component-seals.html">Component Seals</a></li>
                    <li><a href="/products/cartridge-seals.html">Cartridge Seals</a></li>
                    <li><a href="/products/custom-seals.html">Custom & ODM Seals</a></li>
                    <li><a href="/products/parts.html">Seal Parts</a></li>
                </ul>
            </div>
            <div>
                <h4>Resources</h4>
                <ul>
                    <li><a href="/resources/">Resource Center</a></li>
                    <li><a href="/cross-reference/">Cross Reference</a></li>
                    <li><a href="/reverse-engineering/">Reverse Engineering</a></li>
                    <li><a href="/quality/">Quality Standards</a></li>
                    <li><a href="/faq/">FAQ</a></li>
                </ul>
            </div>
            <div>
                <h4>Contact</h4>
                <ul>
                    <li><a href="mailto:sales@yennix.com">sales@yennix.com</a></li>
                    <li><a href="/contact/">Get a Quote</a></li>
                    <li style="font-size:12px;color:rgba(255,255,255,0.3);">Response within 12 hours</li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom" style="text-align:center;">
            &copy; 2026 YENNIX. All rights reserved. &nbsp;|&nbsp; <a href="/privacy/" style="color:rgba(255,255,255,0.4);">Privacy Policy</a>
        </div>
    </footer>

    <div id="scroll-top" class="scroll-top" onclick="window.scrollTo({top:0,behavior:'smooth'})">
        <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 10l7-7m0 0l7 7m-7-7v18"/></svg>
    </div>

    <!-- Cookie Consent Banner -->
    <div id="cookie-banner" class="cookie-banner">
        <div class="cookie-banner-inner">
            <div class="cookie-banner-text">
                <strong>Privacy & Cookies</strong><br>
                We use essential cookies to make our site work. We don't use tracking or advertising cookies. By clicking "Accept", you consent to our use of necessary cookies.
            </div>
            <div class="cookie-banner-buttons">
                <a href="/privacy/" class="cookie-btn cookie-btn-text">Learn more</a>
                <button class="cookie-btn cookie-btn-accept" onclick="setCookieConsent()">Accept</button>
            </div>
        </div>
    </div>

    <script>
        // Nav & scroll
        document.getElementById('mobile-menu-btn').addEventListener('click',function(){document.getElementById('mobile-menu').classList.toggle('open')});
        window.addEventListener('scroll',function(){var nb=document.getElementById('navbar'),st=document.getElementById('scroll-top');if(window.scrollY>50)nb.classList.add('scrolled');else nb.classList.remove('scrolled');if(window.scrollY>400)st.classList.add('visible');else st.classList.remove('visible')});
        
        // Cookie consent
        function setCookieConsent(){
            document.cookie='cookie_consent=accepted;path=/;max-age=31536000;SameSite=Lax';
            document.getElementById('cookie-banner').style.display='none';
        }
        (function(){
            if(!document.cookie.match(/cookie_consent=accepted/)){
                document.getElementById('cookie-banner').style.display='block';
            }
        })();
    </script>

</body>
</html>
'''

os.makedirs('privacy', exist_ok=True)
with open('privacy/index.html', 'w') as f:
    f.write(privacy_html)
print("✅ Privacy page created")

# ============================================================
# 2. 添加Cookie横幅CSS
# ============================================================

css_addition = '''

/* ============================================
   Privacy & Cookie Banner
   ============================================ */
.cookie-banner {
    display: none;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #0a1628;
    border-top: 1px solid rgba(200,164,92,0.2);
    z-index: 9999;
    padding: 16px 24px;
    box-shadow: 0 -4px 20px rgba(0,0,0,0.3);
}
.cookie-banner-inner {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
}
.cookie-banner-text {
    font-size: 13px;
    color: rgba(255,255,255,0.7);
    line-height: 1.6;
    flex: 1;
}
.cookie-banner-text strong {
    color: var(--white);
    font-weight: 600;
}
.cookie-banner-buttons {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-shrink: 0;
}
.cookie-btn {
    padding: 10px 20px;
    font-size: 13px;
    font-weight: 500;
    border-radius: 4px;
    cursor: pointer;
    border: none;
    transition: all 0.2s ease;
    font-family: inherit;
}
.cookie-btn-text {
    color: rgba(255,255,255,0.5);
    background: transparent;
    text-decoration: none;
    padding: 10px 4px;
}
.cookie-btn-text:hover { color: var(--gold); }
.cookie-btn-accept {
    background: var(--gold);
    color: #0a1628;
}
.cookie-btn-accept:hover {
    background: #d4b06a;
    transform: translateY(-1px);
}
@media (max-width: 768px) {
    .cookie-banner-inner {
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
    }
    .cookie-banner-buttons {
        width: 100%;
        justify-content: flex-end;
    }
}

/* Privacy page */
.privacy-section {
    margin-bottom: 40px;
    padding-bottom: 32px;
    border-bottom: 1px solid rgba(255,255,255,0.06);
}
.privacy-section:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
}
.privacy-section h2 {
    font-size: 20px;
    font-weight: 600;
    color: var(--white);
    margin-bottom: 16px;
    letter-spacing: -0.01em;
}
.privacy-section p {
    color: rgba(255,255,255,0.65);
    font-size: 14px;
    line-height: 1.8;
    margin-bottom: 12px;
}
.privacy-section a {
    color: var(--gold);
    text-decoration: none;
    border-bottom: 1px solid rgba(200,164,92,0.3);
    transition: border-color 0.2s;
}
.privacy-section a:hover { border-color: var(--gold); }
.privacy-list {
    list-style: none;
    padding: 0;
    margin: 16px 0;
}
.privacy-list li {
    position: relative;
    padding-left: 20px;
    margin-bottom: 10px;
    color: rgba(255,255,255,0.65);
    font-size: 14px;
    line-height: 1.7;
}
.privacy-list li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 10px;
    width: 6px;
    height: 6px;
    background: var(--gold);
    border-radius: 50%;
}
.privacy-list li strong {
    color: var(--white);
    font-weight: 500;
}
.privacy-table {
    width: 100%;
    border-collapse: collapse;
    margin: 16px 0;
    font-size: 13px;
}
.privacy-table th {
    text-align: left;
    padding: 12px 16px;
    background: rgba(200,164,92,0.1);
    color: var(--gold);
    font-weight: 600;
    border-bottom: 1px solid rgba(200,164,92,0.2);
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}
.privacy-table td {
    padding: 12px 16px;
    color: rgba(255,255,255,0.65);
    border-bottom: 1px solid rgba(255,255,255,0.05);
}
.privacy-table code {
    background: rgba(255,255,255,0.05);
    padding: 2px 6px;
    border-radius: 3px;
    font-size: 12px;
    color: var(--gold);
}
'''

with open('css/custom.css', 'a') as f:
    f.write(css_addition)
print("✅ Cookie banner CSS added")

# ============================================================
# 3. 批量更新所有HTML页面：
#    - CSS版本号 20260703d → 20260703e
#    - 添加cookie banner HTML（在scroll-top之前）
#    - 添加cookie consent JS
#    - 页脚添加隐私政策链接
# ============================================================

html_files = []
for root, dirs, files in os.walk('.'):
    for f in files:
        if f.endswith('.html'):
            html_files.append(os.path.join(root, f))

print(f"Found {len(html_files)} HTML files")

cookie_banner_html = '''    <!-- Cookie Consent Banner -->
    <div id="cookie-banner" class="cookie-banner">
        <div class="cookie-banner-inner">
            <div class="cookie-banner-text">
                <strong>Privacy & Cookies</strong><br>
                We use essential cookies to make our site work. We don't use tracking or advertising cookies. By clicking "Accept", you consent to our use of necessary cookies.
            </div>
            <div class="cookie-banner-buttons">
                <a href="/privacy/" class="cookie-btn cookie-btn-text">Learn more</a>
                <button class="cookie-btn cookie-btn-accept" onclick="setCookieConsent()">Accept</button>
            </div>
        </div>
    </div>
'''

cookie_js = '''
        // Cookie consent
        function setCookieConsent(){
            document.cookie='cookie_consent=accepted;path=/;max-age=31536000;SameSite=Lax';
            document.getElementById('cookie-banner').style.display='none';
        }
        (function(){
            if(!document.cookie.match(/cookie_consent=accepted/)){
                document.getElementById('cookie-banner').style.display='block';
            }
        })();
'''

privacy_footer_link = ' &nbsp;|&nbsp; <a href="/privacy/" style="color:rgba(255,255,255,0.4);">Privacy Policy</a>'

for fpath in html_files:
    # Skip the newly created privacy page (already has everything)
    if 'privacy/index.html' in fpath:
        continue
    
    with open(fpath, 'r') as f:
        content = f.read()
    
    # 1. Update CSS version
    content = content.replace('v=20260703d', 'v=20260703e')
    content = content.replace('v=20260703c', 'v=20260703e')
    content = content.replace('v=20260703b', 'v=20260703e')
    content = content.replace('v=20260703a', 'v=20260703e')
    
    # 2. Add cookie banner HTML before scroll-top div
    if 'cookie-banner' not in content and 'id="scroll-top"' in content:
        content = content.replace(
            '    <div id="scroll-top"',
            cookie_banner_html + '\n    <div id="scroll-top"'
        )
    
    # 3. Add cookie consent JS to the inline script block
    if 'setCookieConsent' not in content and 'window.addEventListener' in content:
        content = content.replace(
            "window.addEventListener('scroll',function(){var nb=document.getElementById('navbar'),st=document.getElementById('scroll-top');if(window.scrollY>50)nb.classList.add('scrolled');else nb.classList.remove('scrolled');if(window.scrollY>400)st.classList.add('visible');else st.classList.remove('visible')});",
            "window.addEventListener('scroll',function(){var nb=document.getElementById('navbar'),st=document.getElementById('scroll-top');if(window.scrollY>50)nb.classList.add('scrolled');else nb.classList.remove('scrolled');if(window.scrollY>400)st.classList.add('visible');else st.classList.remove('visible')});" + cookie_js
        )
    
    # 4. Update footer-bottom with privacy link
    if 'footer-bottom' in content and '/privacy/' not in content:
        # Replace the copyright line
        old_copyright = '&copy; 2026 YENNIX. All rights reserved.'
        old_copyright2 = '&copy; 2026 YENNIX. All rights reserved. &nbsp;|&nbsp;'
        if old_copyright2 not in content and old_copyright in content:
            content = content.replace(old_copyright, old_copyright + privacy_footer_link)
    
    with open(fpath, 'w') as f:
        f.write(content)

print(f"✅ Updated {len(html_files)} HTML files with cookie banner + privacy link")

# ============================================================
# 5. Contact页表单添加隐私声明
# ============================================================

contact_page = 'contact/index.html'
if os.path.exists(contact_page):
    with open(contact_page, 'r') as f:
        content = f.read()
    
    # Add privacy consent checkbox before submit button
    old_submit_line = '<button type="submit" class="btn-primary" style="width:100%;justify-content:center;" id="submit-btn">Submit Inquiry</button>'
    new_privacy_field = '''                    <div style="margin-bottom:20px;">
                        <label style="display:flex;align-items:flex-start;gap:10px;font-size:12px;color:rgba(255,255,255,0.5);line-height:1.6;cursor:pointer;">
                            <input type="checkbox" required name="privacy_consent" style="margin-top:2px;flex-shrink:0;">
                            <span>I confirm that I have read and agree to the <a href="/privacy/" target="_blank" style="color:var(--gold);text-decoration:none;">YENNIX Privacy Policy</a> and consent to the processing of my personal data for the purpose of responding to my inquiry.</span>
                        </label>
                    </div>
                    ''' + old_submit_line
    
    if 'privacy_consent' not in content:
        content = content.replace(old_submit_line, new_privacy_field)
        with open(contact_page, 'w') as f:
            f.write(content)
        print("✅ Contact form privacy consent added")
    else:
        print("ℹ️ Contact form already has privacy consent")

