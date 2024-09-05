document.addEventListener('DOMContentLoaded', () => {
    console.log('ページが読み込まれました');

    // ナビゲーションのスムーズスクロール
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });

            // メニューリンクをクリックしたらメニューを閉じる
            const navLinksContainer = document.querySelector('.nav-links');
            navLinksContainer.classList.remove('nav-active');
            menuToggle.classList.remove('active');
            body.classList.remove('menu-open');
        });
    });

    // ハンバーガーメニューの開閉
    const menuToggle = document.querySelector('.hamburger-menu');
    const navLinksContainer = document.querySelector('.nav-links');
    const body = document.body;

    menuToggle.addEventListener('click', () => {
        // メニューの表示/非表示を切り替え
        navLinksContainer.classList.toggle('nav-active');

        // ハンバーガーアイコンのアニメーション
        menuToggle.classList.toggle('active');

        // ボディのスクロールを制御
        body.classList.toggle('menu-open');
    });

    // メニュー外クリックでメニューを閉じる
    document.addEventListener('click', (e) => {
        if (!navLinksContainer.contains(e.target) && !menuToggle.contains(e.target)) {
            navLinksContainer.classList.remove('nav-active');
            menuToggle.classList.remove('active');
            body.classList.remove('menu-open');
        }
    });

    function adjustHeroSize() {
        const heroContainer = document.getElementById('hero-container');
        const windowHeight = window.innerHeight;
        
        heroContainer.style.height = `${windowHeight}px`;
    }

    // ページ読み込み時に実行
    window.addEventListener('load', adjustHeroSize);

    // ウィンドウサイズ変更時に実行
    window.addEventListener('resize', adjustHeroSize);

    // フォームの入力チェックと送信ボタンの制御
    const contactForm = document.getElementById('contact-form');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const submitButton = contactForm.querySelector('button[type="submit"]');

    function validateForm() {
        if (emailInput.value.trim() !== '' && messageInput.value.trim() !== '') {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }
    }

    emailInput.addEventListener('input', validateForm);
    messageInput.addEventListener('input', validateForm);

    // 初期状態で送信ボタンを非アクティブにする
    validateForm();

    function setupImageSlideshow() {
        const images = document.querySelectorAll('.hero-image');
        let currentIndex = 0;

        function showNextImage() {
            images[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].classList.add('active');
        }

        setInterval(showNextImage, 5000);
    }

    // DOMContentLoadedイベントリスナー内で以下の行を追加
    setupImageSlideshow();
});
