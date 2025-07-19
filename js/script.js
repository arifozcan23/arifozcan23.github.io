/**
 * Arif Özcan - Kişisel Web Sitesi
 * Ana JavaScript Dosyası
 * Yazan: Arif Özcan
 */

// Çeviriler objesi
const translations = {
    'tr': {
        'nav_home': 'Ana Sayfa',
        'nav_about': 'Hakkımda',
        'nav_portfolio': 'Portföy',
        'nav_contact': 'İletişim',
        'hero_greeting': 'Merhaba, Ben Arif!',
        'hero_title': 'Yazılım Mühendisi',
        'hero_button': 'İletişime Geç',
        'about_title': 'Kısaca Ben',
        'about_text': 'Yazılım geliştirme konusunda tutkuluyum. Yenilikçi teknolojileri takip ederek kendimi sürekli geliştirmeye özen gösteriyorum.',
        'about_button': 'Daha Fazla Bilgi',
        'services_title': 'Hizmetlerim',
        'service_web_title': 'Web Geliştirme',
        'service_web_text': 'Modern web teknolojileri kullanarak hızlı ve etkili web siteleri geliştiriyorum.',
        'service_ai_title': 'AI',
        'service_ai_text': 'Yapay zeka teknolojileri kullanarak çözümler geliştiriyorum.',
        'service_algo_title': 'Algoritma',
        'service_algo_text': 'Algoritma geliştirme ve optimizasyonu yapıyorum.',
        'footer_rights': 'Tüm hakları saklıdır.',
        'lang_tr': 'Türkçe',
        'lang_en': 'English',
        // Form validation mesajları
        'form_error_required': 'Bu alan boş bırakılamaz.',
        'form_error_email': 'Geçerli bir e-posta adresi giriniz.',
        'form_success': 'Mesajınız başarıyla gönderildi. Teşekkür ederiz!',
        // Hakkımda sayfası
        'about_page_title': 'Hakkımda',
        'about_story_title': 'Benim Hikayem',
        'about_story_p1': 'Merhaba! Ben Arif Özcan, yazılım mühendisiyim. Dijital dünyaya olan ilgim küçük yaşlarda başladı ve zamanla bu ilgi tutkuya dönüştü.',
        'about_story_p2': 'Yazılım Mühendisliği eğitimim sırasında web teknolojilerine odaklanmaya karar verdim ve mezuniyetimden bu yana çeşitli projelerde çalışarak kendimi sürekli geliştirdim. Kullanıcı deneyimini ön planda tutan, modern ve işlevsel web çözümleri üretmeyi hedefliyorum.',
        'about_story_p3': 'Teknolojinin sürekli değiştiği bu dünyada, kendimi güncel tutmak için düzenli olarak yeni teknolojileri öğreniyor ve bunları projelerime entegre ediyorum. Her projede, kullanıcıların ihtiyaçlarını karşılayan, estetik ve kullanıcı dostu çözümler sunmayı amaçlıyorum.',
        'about_story_p4': 'Yazılım geliştirme konusunda kendimi sürekli geliştirmeye çalışıyorum. Yeni teknolojileri takip ederek kendimi sürekli geliştirmeye özen gösteriyorum.',
        'education_title': 'Eğitim',
        'experience_title': 'Deneyim',
        'skills_title': 'Yeteneklerim',
        'skills_programming': 'Programlama Dilleri',
        'skills_frameworks': 'Çerçeveler & Kütüphaneler',
        'skills_tools': 'Araçlar & Platformlar',
        'testimonials_title': 'Etkilendiğim Sözler',
        // Portfolio sayfası
        'portfolio_title': 'Portföyüm',
        'portfolio_subtitle': 'İşte bazı projelerim ve çalışmalarım',
        'project1_title': 'Personel Takip Sistemi',
        'project1_desc': 'Personel, birimler, kapılar, turnikeler ve çalışma saatlerini yönetmek için tasarlanmış kapsamlı bir arka uç projesi, kolay erişim kontrolü, e-posta bildirimi ve maaş hesaplaması sağlar.',
        'project2_title': 'Yapay Zeka Destekli Yazı Dağıtım Sistemi',
        'project2_desc': 'Gelen resmi belgeleri analiz etmek ve bunları uygun üniversite bölümlerine otomatik olarak yönlendirmek için yapay zeka destekli bir platform oluşturdu. SAYZEK (Savunma Sanayii Yapay Zeka Yetenek Kümesi) tarafından desteklenmektedir.',
        'project3_title': 'Yüz Şekline Göre Gözlük Öneri Uygulaması',
        'project3_desc': 'Kullanıcının yüz şeklini tanımlayan ve yüz tipine uygun gözlük çerçeveleri öneren bir yapay zeka uygulaması tasarladı.',
        'project4_title': 'Uçuş Takip Uygulaması',
        'project4_desc': 'OpenSky Network API\'sını kullanarak dünya çapındaki uçuşların mevcut konumlarını harita üzerinde gösterme ve uçuş verilerini grafik yapılarıyla görselleştirme.',
        'source_code': 'Kaynak Kodu',
        'resume_title': 'Özgeçmişim',
        'resume_professional': 'Profesyonel CV',
        'resume_desc': 'Eğitim geçmişim, iş deneyimim, becerilerim ve projelerim hakkında daha detaylı bilgi edinmek için özgeçmişimi inceleyebilirsiniz.',
        'view': 'Görüntüle',
        // İletişim sayfası
        'contact_subtitle': 'Benimle iletişime geçin',
        'contact_info_title': 'İletişim Bilgilerim',
        'contact_email': 'E-posta',
        'contact_phone': 'Telefon',
        'contact_location': 'Konum',
        'contact_social': 'Sosyal Medya',
        'contact_send_message': 'Mesaj Gönder',
        'contact_email_info': 'Bana doğrudan e-posta göndermek için aşağıdaki butona tıklayın:',
        'contact_send_email': 'E-posta Gönder',
        'contact_email_note': 'Bu buton, bilgisayarınızın varsayılan e-posta uygulamasını açacaktır.'
    },
    'en': {
        'nav_home': 'Home',
        'nav_about': 'About Me',
        'nav_portfolio': 'Portfolio',
        'nav_contact': 'Contact',
        'hero_greeting': 'Hello, I am Arif!',
        'hero_title': 'Software Engineer',
        'hero_button': 'Get in Touch',
        'about_title': 'About Me',
        'about_text': 'I am passionate about software development. I constantly strive to improve myself by following innovative technologies.',
        'about_button': 'Learn More',
        'services_title': 'My Services',
        'service_web_title': 'Web Development',
        'service_web_text': 'I develop fast and effective websites using modern web technologies.',
        'service_ai_title': 'AI',
        'service_ai_text': 'I develop solutions using artificial intelligence technologies.',
        'service_algo_title': 'Algorithm',
        'service_algo_text': 'I develop and optimize algorithms.',
        'footer_rights': 'All rights reserved.',
        'lang_tr': 'Türkçe',
        'lang_en': 'English',
        // Form validation messages
        'form_error_required': 'This field cannot be left blank.',
        'form_error_email': 'Please enter a valid email address.',
        'form_success': 'Your message has been sent successfully. Thank you!',
        // About page
        'about_page_title': 'About Me',
        'about_story_title': 'My Story',
        'about_story_p1': 'Hello! I am Arif Özcan, a software engineer. My interest in the digital world began at an early age and eventually evolved into a passion.',
        'about_story_p2': 'During my Software Engineering education, I decided to focus on web technologies and have continuously improved myself by working on various projects since graduation. I aim to produce modern and functional web solutions that prioritize user experience.',
        'about_story_p3': 'In this ever-changing world of technology, I regularly learn new technologies and integrate them into my projects to keep myself updated. In every project, I aim to provide aesthetic and user-friendly solutions that meet the needs of users.',
        'about_story_p4': 'I constantly strive to improve myself in software development. I make an effort to continuously develop myself by following new technologies.',
        'education_title': 'Education',
        'experience_title': 'Experience',
        'skills_title': 'My Skills',
        'skills_programming': 'Programming Languages',
        'skills_frameworks': 'Frameworks & Libraries',
        'skills_tools': 'Tools & Platforms',
        'testimonials_title': 'Quotes That Inspire Me',
        // Portfolio page
        'portfolio_title': 'My Portfolio',
        'portfolio_subtitle': 'Here are some of my projects and work',
        'project1_title': 'Personnel Tracking System',
        'project1_desc': 'A comprehensive backend project designed to manage personnel, departments, doors, turnstiles, and working hours, providing easy access control, email notifications, and salary calculations.',
        'project2_title': 'AI-Supported Document Distribution System',
        'project2_desc': 'Created an AI-powered platform to analyze incoming official documents and automatically route them to appropriate university departments. Supported by SAYZEK (Defense Industry Artificial Intelligence Capability Cluster).',
        'project3_title': 'Face Shape Based Glasses Recommendation App',
        'project3_desc': 'Designed an artificial intelligence application that identifies the user\'s face shape and recommends eyeglass frames suitable for their face type.',
        'project4_title': 'Flight Tracking Application',
        'project4_desc': 'Displaying the current positions of flights worldwide on a map and visualizing flight data with graphical structures using the OpenSky Network API.',
        'source_code': 'Source Code',
        'resume_title': 'My Resume',
        'resume_professional': 'Professional CV',
        'resume_desc': 'You can review my resume to learn more detailed information about my educational background, work experience, skills, and projects.',
        'view': 'View',
        // Contact page
        'contact_subtitle': 'Get in touch with me',
        'contact_info_title': 'My Contact Information',
        'contact_email': 'Email',
        'contact_phone': 'Phone',
        'contact_location': 'Location',
        'contact_social': 'Social Media',
        'contact_send_message': 'Send Message',
        'contact_email_info': 'Click the button below to send me an email directly:',
        'contact_send_email': 'Send Email',
        'contact_email_note': 'This button will open your computer\'s default email application.'
    }
};

// Mevcut dil (varsayılan olarak Türkçe)
let currentLanguage = localStorage.getItem('language') || 'tr';

// DOM elementlerinin yüklenmesini bekliyoruz
document.addEventListener('DOMContentLoaded', function() {
    // Mobil menü fonksiyonlarını başlat
    initMobileMenu();
    
    // Form doğrulama fonksiyonlarını başlat
    initFormValidation();
    
    // Animasyonları başlat
    initAnimations();
    
    // Dil ayarlarını başlat
    initLanguageSettings();
});

/**
 * Dil ayarlarını başlatan fonksiyon
 */
function initLanguageSettings() {
    // HTML lang özniteliğini ayarla
    document.documentElement.lang = currentLanguage;
    
    // Dil değiştirme butonlarını ayarla
    const languageSwitcher = document.querySelector('.language-switcher');
    if (languageSwitcher) {
        const trButton = languageSwitcher.querySelector('.lang-tr');
        const enButton = languageSwitcher.querySelector('.lang-en');
        
        if (trButton && enButton) {
            // Aktif dile göre butonları güncelle
            if (currentLanguage === 'tr') {
                trButton.classList.add('active');
                enButton.classList.remove('active');
            } else {
                enButton.classList.add('active');
                trButton.classList.remove('active');
            }
            
            // Dil değiştirme olaylarını ekle
            trButton.addEventListener('click', () => changeLanguage('tr'));
            enButton.addEventListener('click', () => changeLanguage('en'));
        }
    }
    
    // Sayfadaki metinleri güncelle
    updatePageLanguage();
}

/**
 * Dili değiştiren fonksiyon
 * @param {string} language - 'tr' veya 'en' olarak dil kodu
 */
function changeLanguage(language) {
    if (language === currentLanguage) return;
    
    currentLanguage = language;
    
    // Dil tercihini localStorage'a kaydet
    localStorage.setItem('language', language);
    
    // HTML lang özniteliğini güncelle
    document.documentElement.lang = language;
    
    // Sayfadaki metinleri güncelle
    updatePageLanguage();
    
    // Dil değiştirme butonlarını güncelle
    const languageSwitcher = document.querySelector('.language-switcher');
    if (languageSwitcher) {
        const trButton = languageSwitcher.querySelector('.lang-tr');
        const enButton = languageSwitcher.querySelector('.lang-en');
        
        if (trButton && enButton) {
            if (language === 'tr') {
                trButton.classList.add('active');
                enButton.classList.remove('active');
            } else {
                enButton.classList.add('active');
                trButton.classList.remove('active');
            }
        }
    }
}

/**
 * Sayfa üzerindeki metinleri mevcut dile göre güncelleyen fonksiyon
 */
function updatePageLanguage() {
    // Çeviri özniteliği olan tüm elementleri seç
    const translatableElements = document.querySelectorAll('[data-translate]');
    
    // Her element için çeviriyi uygula
    translatableElements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLanguage][key]) {
            // Eğer innerHTML içinde HTML etiketleri varsa, innerText yerine innerHTML kullan
            if (element.innerHTML.includes('<') && element.innerHTML.includes('>')) {
                element.innerHTML = translations[currentLanguage][key];
            } else {
                element.innerText = translations[currentLanguage][key];
            }
        }
    });
    
    // Sayfa başlığını güncelle
    const pageTitle = document.querySelector('title');
    if (pageTitle) {
        const currentPageKey = window.location.pathname.includes('about.html') ? 'about_page_title' :
                             window.location.pathname.includes('portfolio.html') ? 'nav_portfolio' :
                             window.location.pathname.includes('contact.html') ? 'nav_contact' :
                             'nav_home';
        
        pageTitle.textContent = `Arif Özcan | ${translations[currentLanguage][currentPageKey]}`;
    }
}

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
                errorElement.textContent = translations[currentLanguage]['form_error_required'];
            }
            input.classList.add('error');
        } else if (input.type === 'email' && input.value.trim() && !validateEmail(input.value)) {
            // Email formatını doğrula
            isValid = false;
            if (errorElement) {
                errorElement.textContent = translations[currentLanguage]['form_error_email'];
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
        formStatus.textContent = translations[currentLanguage]['form_success'];
        
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