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
        'about_text': 'Yazılım mühendisiyim ve yeni teknolojileri öğrenme konusunda tutkuluyum. Yenilikçi teknolojileri takip ederek kendimi sürekli geliştirmeye çalışıyorum. Hızlı öğrenen ve analitik düşünen biriyim. Takım oyuncusuyum ve zorluklarla karşılaşmaktan keyif alıyorum.',
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
        'about_story_p1': 'Merhaba! Yazılım mühendisliği yolculuğum, küçük yaşlarda dijital dünyaya duyduğum merakla başladı ve zamanla bu ilgi profesyonel bir tutkuya dönüştü.',
        'about_story_p2': 'Üniversite eğitimim süresince backend geliştirme ve web teknolojilerine odaklandım. Öğrendiklerimi gerçek projelerde uygulayarak hem teknik becerilerimi geliştirdim hem de kullanıcı deneyimini ön planda tutan, ölçeklenebilir ve işlevsel sistemler geliştirmeye başladım.',
        'about_story_p3': 'Teknolojinin hızla değiştiği bir dünyada yaşıyoruz. Bu nedenle kendimi sürekli güncel tutmaya, yeni teknolojileri öğrenmeye ve bu yenilikleri projelerime entegre etmeye özen gösteriyorum. Her projede estetik, performans ve kullanıcı dostu çözümler üretmeye çalışıyorum.',
        'about_story_p4': 'Yazılım geliştirme benim için sadece bir meslek değil; aynı zamanda kendimi ifade etmenin ve değer üretmenin bir yolu. Öğrenmeye ve gelişmeye açık yapım sayesinde, her geçen gün daha iyi yazılımlar geliştirme hedefiyle ilerliyorum.',
        'education_title': 'Eğitim',
        'education_se': 'Yazılım Mühendisliği',
        'education_se_school': 'Fırat Üniversitesi',
        'education_erasmus': 'Erasmus+ Öğrenim Hareketliliği',
        'education_erasmus_school': 'University of Beira Interior',
        'education_prep': 'İngilizce Hazırlık',
        'education_prep_school': 'FÜ Yabancı Diller Yüksekokulu',
        'experience_title': 'Deneyim',
        'experience_webdev': 'Java Web Geliştirici - Stajyer',
        'experience_company1': 'T.C. Gelir İdaresi Başkanlığı - GİB Teknoloji',
        'experience_desc1': '• Spring Boot kullanarak, bir kamu kurumunun yapısına uygun, kurumsal düzeyde bir arka uç uygulaması (Personel Takip Sistemi) geliştirdim.',
        'experience_desc2': '• Proje yenileme ekibinde kıdemli mentor mühendislerle iş birliği yaparak, görev odaklı iterasyonlarla arka uç servislerini tasarladım, geliştirdim ve optimize ettim; bu süreçte SOLID prensiplerini uyguladım ve CI/CD araçlarını kullandım.',
        'experience_desc3': '• RESTful API geliştirme, veritabanı yönetimi ve katmanlı mimari konularında en iyi uygulamaları kullanarak sistem güvenliğini rol tabanlı yetkilendirme ile güçlendirdim ve önceden tanımlı kurallara dayalı otomatik e-posta bildirimleri sağladım.',
        'experience_javadev': 'Java Geliştirici - Stajyer',
        'experience_company2': 'T.C. Gelir İdaresi Başkanlığı - GİB Teknoloji',
        'experience_desc4': '• Java geliştirme becerilerimi güçlendirdim ve yazılım geliştirme yaşam döngüsü, çevik metodolojiler, tasarım kalıpları, yazılım mimarileri ve teorik bilginin endüstri standardı uygulamalara nasıl dönüştüğü konusunda pratik bilgiler edindim.',
        'experience_desc5': '• Gerçek dünya yazılım geliştirmede teorik bilgi kazandım ve ülke çapındaki projelerin ardındaki mantığı daha derinlemesine anladım.',
        'skills_title': 'Yeteneklerim',
        'skills_programming': 'Programlama Dilleri',
        'skills_frameworks': 'Çerçeveler & Kütüphaneler',
        'skills_tools': 'Araçlar & Platformlar',
        'testimonials_title': 'Etkilendiğim Sözler',
        'quote1': '"Hayatımın erken dönemlerinde öğrendim ki eğer bir şeyi istiyorsan, biraz gürültü yapsan iyi olur."',
        'quote1_author': 'İnsan hakları savunucusu',
        'quote2': '"Hayat kısa, kuşlar uçuyor."',
        'quote2_author': 'Şair',
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
        'cv_file': './documents/arif-ozcan-cv.pdf', // CV dosya yolu
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
        'contact_email_note': 'Bu buton, cihazınızın varsayılan e-posta uygulamasını açacaktır.'
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
        'about_text': 'I am a software engineer with a passion for learning new technologies. I am constantly striving to improve myself by following innovative technologies. I am a quick learner and an analytical thinker. I am a team player and I am always looking for new challenges.',
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
        'about_story_p1': 'Hello! My software engineering journey began with my curiosity about the digital world at a young age and eventually evolved into a passion.',
        'about_story_p2': 'During my Software Engineering education, I focused on backend development and web technologies. I have continuously improved myself by working on various projects since graduation. I aim to produce modern and functional web solutions that prioritize user experience.',
        'about_story_p3': 'In this ever-changing world of technology, I regularly learn new technologies and integrate them into my projects to keep myself updated. In every project, I aim to provide aesthetic and user-friendly solutions that meet the needs of users.',
        'about_story_p4': 'Software development is not just a profession for me; it is also a way to express myself and create value. Thanks to my open-minded approach to learning and growth, I am constantly striving to improve myself and develop better software every day.',
        'education_title': 'Education',
        'education_se': 'Software Engineering',
        'education_se_school': 'Fırat University',
        'education_erasmus': 'Erasmus+ Study Mobility',
        'education_erasmus_school': 'University of Beira Interior',
        'education_prep': 'English Preparatory',
        'education_prep_school': 'FU School of Foreign Languages',
        'experience_title': 'Experience',
        'experience_webdev': 'Java Web Developer - Intern',
        'experience_company1': 'T.C. Gelir İdaresi Başkanlığı - GİB Teknoloji',
        'experience_desc1': '• I developed an enterprise-level backend application (Personnel Tracking System) using Spring Boot, designed to align with the structure of a public institution.',
        'experience_desc2': '• Collaborated with senior mentor engineers in the project renewal team through task-oriented iterations, designing, developing, and optimizing back-end services by applying SOLID principles and using CI/CD tools.',
        'experience_desc3': '• Applied best practices in RESTful API development, database management, and layered  architecture to enhance system security with role-based authorization and enable automated email notifications based on predefined rules.',
        'experience_javadev': 'Java Developer - Intern',
        'experience_company2': 'T.C. Gelir İdaresi Başkanlığı - GİB Teknoloji',
        'experience_desc4': '• Strengthened Java development skills and gained practical insights into the software development lifecycle, agile methodologies, design patterns, software architectures, and how theoretical knowledge translates into industry-standard applications.',
        'experience_desc5': '• Gained theoretical knowledge in real-world software development and deepened understanding of the logic behind nationwide projects.',
        'skills_title': 'My Skills',
        'skills_programming': 'Programming Languages',
        'skills_frameworks': 'Frameworks & Libraries',
        'skills_tools': 'Tools & Platforms',
        'testimonials_title': 'Quotes That Inspire Me',
        'quote1': '"Early in my life, I had learned that if you want something, you had better make some noise."',
        'quote1_author': 'Human rights activist',
        'quote2': '"Life is short, birds are flying."',
        'quote2_author': 'Poet',
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
        'cv_file': './documents/arif-ozcan-resume.pdf', // CV dosya yolu
        // Contact page
        'contact_subtitle': 'Get in touch with me',
        'contact_info_title': 'Contact Me',
        'contact_email': 'Email',
        'contact_phone': 'Phone',
        'contact_location': 'Location',
        'contact_social': 'Social Media',
        'contact_send_message': 'Send Message',
        'contact_email_info': 'Click the button below to send me an email directly:',
        'contact_send_email': 'Send Email',
        'contact_email_note': 'This button will open your device\'s default email application.'
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
    
    // CV link güncellemesini başlat
    updateCVLink();
});

/**
 * CV dosya yolunu mevcut dile göre güncelleyen fonksiyon
 */
function updateCVLink() {
    const cvLink = document.getElementById('cv-link');
    if (cvLink) {
        cvLink.href = translations[currentLanguage]['cv_file'];
    }
}

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
    
    // Hreflang etiketlerini güncelle
    updateHrefLangTags(language);
    
    // Sayfadaki metinleri güncelle
    updatePageLanguage();
    
    // CV link dosya yolunu güncelle
    updateCVLink();
    
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
 * Hreflang etiketlerini günceller
 * @param {string} language - Aktif dil
 */
function updateHrefLangTags(language) {
    const alternateLinks = document.querySelectorAll('link[rel="alternate"][hreflang]');
    if (alternateLinks.length > 0) {
        // Mevcut sayfanın URL'sini al
        const currentURL = window.location.href;
        const baseURL = currentURL.split('/').slice(0, -1).join('/') || currentURL;
        
        alternateLinks.forEach(link => {
            if (link.hreflang === language) {
                link.setAttribute('rel', 'alternate canonical');
            } else {
                link.setAttribute('rel', 'alternate');
            }
        });
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
    // Hero bölümü için özel animasyonlar ve animasyonlu öğeler oluştur
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        // Parçacıklar için container ekle
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'particles';
        
        // 5 adet parçacık ekle
        for (let i = 0; i < 5; i++) {
            const particle = document.createElement('span');
            particle.className = 'particle';
            particlesContainer.appendChild(particle);
        }
        
        heroSection.appendChild(particlesContainer);
    }
    
    const heroContent = document.querySelector('.hero-content');
    
    if (heroContent) {
        const heroTitle = heroContent.querySelector('h1');
        const heroSubtitle = heroContent.querySelector('p');
        const heroButton = heroContent.querySelector('.btn');
        
        if (heroTitle) heroTitle.classList.add('slide-left', 'delay-1');
        if (heroSubtitle) heroSubtitle.classList.add('slide-left', 'delay-2');
        if (heroButton) {
            heroButton.classList.add('slide-left', 'delay-3');
            heroButton.classList.add('float');
        }
    }
    
    // Servis kartlarına dalga efekti ekle
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        const wave = document.createElement('div');
        wave.className = 'wave';
        card.appendChild(wave);
    });
    
    // Proje kartlarına parıltı ve arka plan animasyon efekti ekle
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        const shimmer = document.createElement('div');
        shimmer.className = 'shimmer';
        
        const bgAnimation = document.createElement('div');
        bgAnimation.className = 'bg-animation';
        
        card.appendChild(shimmer);
        card.appendChild(bgAnimation);
    });
    
    // Skill kartlarına hareketli noktalar ve dalga efektleri ekle
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach(skill => {
        // Noktalar için container
        const dots = document.createElement('div');
        dots.className = 'dots';
        
        // 4 adet nokta ekle
        for (let i = 0; i < 4; i++) {
            const dot = document.createElement('div');
            dot.className = 'dot';
            dots.appendChild(dot);
        }
        
        // Dalga gradyan efekti
        const waveGradient = document.createElement('div');
        waveGradient.className = 'wave-gradient';
        
        skill.appendChild(dots);
        skill.appendChild(waveGradient);
    });
    
    // Testimonial kartlarına ışıma ve desen efektleri ekle
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    testimonialItems.forEach(item => {
        const glow = document.createElement('div');
        glow.className = 'glow';
        
        const glowBottom = document.createElement('div');
        glowBottom.className = 'glow-bottom';
        
        const pattern = document.createElement('div');
        pattern.className = 'pattern';
        
        item.appendChild(glow);
        item.appendChild(glowBottom);
        item.appendChild(pattern);
    });
    
    // Nav linklerine arka plan animasyonu ekle
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        const navBg = document.createElement('div');
        navBg.className = 'nav-bg';
        link.appendChild(navBg);
    });
    
    // Sayfa scroll olduğunda elemanların görünümünü kontrol et
    const fadeElements = document.querySelectorAll('.service-card, .project-card, .skill-category, .testimonial-item');
    
    if (fadeElements.length > 0) {
        // Başlangıçta elementleri gizle
        fadeElements.forEach((element, index) => {
            // Farklı animasyonlar uygula
            if (index % 3 === 0) {
                element.classList.add('fade-up');
                element.classList.add('delay-1');
            } else if (index % 3 === 1) {
                element.classList.add('slide-left');
                element.classList.add('delay-2');
            } else {
                element.classList.add('slide-right');
                element.classList.add('delay-3');
            }
            
            element.style.opacity = '0';
        });
        
        // İletişim butonlarına float animasyonu ekle
        const contactButtons = document.querySelectorAll('.contact-form .btn, .email-btn, .hero-content .btn');
        contactButtons.forEach(button => {
            button.classList.add('float');
        });
        
        // Scroll olayını dinle ve elementleri göster
        window.addEventListener('scroll', checkFadeElements);
        
        // Sayfa yüklendiğinde de kontrol et
        checkFadeElements();
    }
    
    // Logoya pulse animasyonu ekle
    const logoImage = document.querySelector('.logo-img');
    if (logoImage) {
        logoImage.classList.add('pulse');
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