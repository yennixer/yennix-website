// YENNIX Main JS
// Common functionality across all pages

// ===== Cookie Consent Banner =====
(function() {
    var COOKIE_KEY = 'yennix_cookie_consent';
    var COOKIE_DAYS = 30;

    function getCookieConsent() {
        try {
            var stored = localStorage.getItem(COOKIE_KEY);
            if (!stored) return null;
            var data = JSON.parse(stored);
            var now = Date.now();
            if (now > data.expiresAt) {
                localStorage.removeItem(COOKIE_KEY);
                return null;
            }
            return data.value;
        } catch (e) {
            return null;
        }
    }

    function setCookieConsent(value) {
        try {
            var data = {
                value: value,
                expiresAt: Date.now() + (COOKIE_DAYS * 24 * 60 * 60 * 1000)
            };
            localStorage.setItem(COOKIE_KEY, JSON.stringify(data));
        } catch (e) {
            // Silently fail if localStorage is not available
        }
    }

    function hideBanner() {
        var banner = document.getElementById('cookie-banner');
        if (banner) {
            banner.classList.add('hidden');
            setTimeout(function() {
                banner.style.display = 'none';
            }, 300);
        }
    }

    function showBanner() {
        var banner = document.getElementById('cookie-banner');
        if (banner) {
            banner.style.display = 'flex';
        }
    }

    function initCookieBanner() {
        var banner = document.getElementById('cookie-banner');
        if (!banner) return;

        // Check if user has already accepted
        if (getCookieConsent() === 'accepted') {
            banner.style.display = 'none';
            return;
        }

        // Show banner (small delay for better UX)
        setTimeout(showBanner, 500);

        // Accept button
        var acceptBtn = document.getElementById('cookie-accept');
        if (acceptBtn) {
            acceptBtn.addEventListener('click', function() {
                setCookieConsent('accepted');
                hideBanner();
            });
        }
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCookieBanner);
    } else {
        initCookieBanner();
    }
})();

// ===== Contact Form Privacy Checkbox Validation =====
(function() {
    function initPrivacyCheckbox() {
        var form = document.getElementById('contact-form');
        if (!form) return;

        var privacyCheckbox = form.querySelector('#privacy-consent');
        if (!privacyCheckbox) return;

        form.addEventListener('submit', function(e) {
            if (!privacyCheckbox.checked) {
                e.preventDefault();
                var status = document.getElementById('form-status');
                if (status) {
                    status.className = 'form-status error';
                    status.textContent = 'Please agree to the Privacy Policy before submitting.';
                    status.style.display = 'block';
                }
                privacyCheckbox.focus();
                return false;
            }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initPrivacyCheckbox);
    } else {
        initPrivacyCheckbox();
    }
})();
