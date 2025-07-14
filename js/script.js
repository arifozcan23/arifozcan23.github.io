/**
 * Arif Özcan - Kişisel Web Sitesi
 * Ana JavaScript Dosyası
 * Yazan: Arif Özcan
 */

// DOM elementlerinin yüklenmesini bekliyoruz
document.addEventListener('DOMContentLoaded', function() {
    // Mobil menü fonksiyonlarını başlat
    initMobileMenu();
    
    // Form doğrulama fonksiyonlarını başlat
    initFormValidation();
    
    // Animasyonları başlat
    initAnimations();
});

/**
 * Mobil menü için hamburger toggle fonksiyonu
 */
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            // Hamburger menü animasyonu
            this.classList.toggle('active');
            
            // Mobil menüyü aç/kapat
            navLinks.classList.toggle('active');
        });
        
        // Menü linklerine tıklandığında menüyü kapat
        const navItems = document.querySelectorAll('.nav-links li a');
        
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    navLinks.classList.remove('active');
                }
            });
        });
    }
}

/**
 * Form doğrulama fonksiyonları
 */
function initFormValidation() {
    // Ana sayfa iletişim formu
    const homeContactForm = document.getElementById('home-contact-form');
    if (homeContactForm) {
        homeContactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            validateForm(this);
        });
    }
    
    // İletişim sayfası formu
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            validateForm(this);
        });
    }
}

/**
 * Form doğrulama fonksiyonu
 * @param {HTMLFormElement} form - Doğrulanacak form elementi
 */
function validateForm(form) {
    let isValid = true;
    
    // Input ve textarea elementlerini seç
    const inputs = form.querySelectorAll('input, textarea');
    
    // Her input için doğrulama yap
    inputs.forEach(input => {
        const errorElement = document.getElementById(`${input.id}-error`);
        
        // "required" özelliği olan boş alanları kontrol et
        if (input.hasAttribute('required') && !input.value.trim()) {
            isValid = false;
            if (errorElement) {
                errorElement.textContent = 'Bu alan boş bırakılamaz.';
            }
            input.classList.add('error');
        } else if (input.type === 'email' && input.value.trim() && !validateEmail(input.value)) {
            // Email formatını doğrula
            isValid = false;
            if (errorElement) {
                errorElement.textContent = 'Geçerli bir e-posta adresi giriniz.';
            }
            input.classList.add('error');
        } else {
            // Hata yoksa hata mesajını temizle
            if (errorElement) {
                errorElement.textContent = '';
            }
            input.classList.remove('error');
        }
        
        // Input değiştiğinde hata mesajını temizle
        input.addEventListener('input', function() {
            if (errorElement) {
                errorElement.textContent = '';
            }
            input.classList.remove('error');
        });
    });
    
    // Form geçerliyse formu gönder (örnek amaçlı)
    if (isValid) {
        const formStatus = form.querySelector('#form-status') || document.createElement('div');
        formStatus.id = 'form-status';
        formStatus.className = 'success';
        formStatus.textContent = 'Mesajınız başarıyla gönderildi. Teşekkür ederiz!';
        
        if (!form.querySelector('#form-status')) {
            form.appendChild(formStatus);
        }
        
        // Formu sıfırla
        form.reset();
        
        // 3 saniye sonra başarı mesajını kaldır
        setTimeout(() => {
            formStatus.textContent = '';
            formStatus.className = '';
        }, 3000);
    }
}

/**
 * Email formatı doğrulama fonksiyonu
 * @param {string} email - Doğrulanacak email adresi
 * @returns {boolean} - Email formatı geçerli mi?
 */
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

/**
 * Sayfa animasyonlarını başlatan fonksiyon
 */
function initAnimations() {
    // Sayfa scroll olduğunda elemanların görünümünü kontrol et
    const fadeElements = document.querySelectorAll('.service-card, .project-card, .skill-category, .testimonial-item');
    
    if (fadeElements.length > 0) {
        // Başlangıçta elementleri gizle
        fadeElements.forEach((element, index) => {
            element.classList.add('fade-up');
            element.style.opacity = '0';
            
            // Elementlere farklı gecikmeler ekle
            if (index % 3 === 0) {
                element.classList.add('delay-1');
            } else if (index % 3 === 1) {
                element.classList.add('delay-2');
            } else {
                element.classList.add('delay-3');
            }
        });
        
        // Scroll olayını dinle ve elementleri göster
        window.addEventListener('scroll', checkFadeElements);
        
        // Sayfa yüklendiğinde de kontrol et
        checkFadeElements();
    }
}

/**
 * Görüntüde olan elementler için fade-in animasyonu ekler
 */
function checkFadeElements() {
    const fadeElements = document.querySelectorAll('.fade-up');
    
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
        }
    });
}

// Hamburger menü için CSS sınıfı ekleyen fonksiyon
document.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
}); 