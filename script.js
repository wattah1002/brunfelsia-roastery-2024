document.addEventListener('DOMContentLoaded', () => {
    // 初期アニメーションのセットアップ
    const header = document.getElementById('header');
    const footer = document.querySelector('footer');
    const heroLogo = document.querySelector('.hero-logo');

    // 初期状態で要素を非表示に
    header.classList.add('header-hidden');
    footer.classList.add('footer-hidden');
    heroLogo.classList.add('hero-logo-hidden');

    // ページ読み込み完了時にアニメーションを開始
    window.addEventListener('load', () => {
        // 要素を表示
        header.classList.add('header-fade-in');
        footer.classList.add('footer-fade-in');
        heroLogo.classList.add('hero-logo-fade-in');
    });

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

    // デバウンス関数を追加
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // ヒーローサイズの調整を最適化
    const adjustHeroSize = debounce(() => {
        const heroContainer = document.getElementById('hero-container');
        if (heroContainer) {
            heroContainer.style.height = `${window.innerHeight}px`;
        }
    }, 250);

    // バッジアニメーションの最適化
    const setupBadgeAnimation = debounce(() => {
        const badge = document.querySelector('.badge');
        const badgeText = document.querySelector('.badge-text');
        
        if (!badge || !badgeText) return;

        // キャッシュしてパフォーマンスを向上
        const textWidth = badgeText.offsetWidth;
        const duration = textWidth / 50;

        // アニメーションのキーフレームを動的に生成
        const keyframes = `
            @keyframes moveText {
                0% {
                    transform: translateX(0);
                }
                100% {
                    transform: translateX(-50%);
                }
            }
        `;

        // 既存のスタイルシートを確認
        let styleSheet = document.querySelector('style#badge-animation');
        if (!styleSheet) {
            styleSheet = document.createElement('style');
            styleSheet.id = 'badge-animation';
            document.head.appendChild(styleSheet);
        }

        // アニメーションスタイルを更新
        styleSheet.textContent = keyframes;
        badgeText.style.animation = `moveText ${duration}s linear infinite`;
    }, 250);

    // イベントリスナーの設定
    window.addEventListener('resize', () => {
        adjustHeroSize();
        setupBadgeAnimation();
    });

    // ページ読み込み時に実行
    window.addEventListener('load', adjustHeroSize);

    // フォームの入力チェックと送信ボタンの制御
    const contactForm = document.getElementById('contact-form');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const submitButton = contactForm.querySelector('button[type="submit"]');

    function validateForm() {
        const isValid = emailInput.value.trim() !== '' && messageInput.value.trim() !== '';
        submitButton.disabled = !isValid;
    }

    emailInput.addEventListener('input', validateForm);
    messageInput.addEventListener('input', validateForm);

    // 初期状態で送信ボタンを無効にする
    submitButton.disabled = true;

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

    // ページ読み込み時にアニメーションをセットアップ
    setupBadgeAnimation();

    // ウィンドウリサイズ時にアニメーションを再セットアップ
    window.addEventListener('resize', setupBadgeAnimation);

    // 既存のコードの後に以下を追加

    function setupFadeInEffect() {
        const sections = document.querySelectorAll('section');
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
            // パフォーマンス最適化のためにオプションを追加
            trackVisibility: true,
            delay: 100
        };

        const observer = new IntersectionObserver((entries) => {
            // requestAnimationFrameを使用してアニメーションを最適化
            requestAnimationFrame(() => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in');
                        // 一度表示されたら監視を解除
                        observer.unobserve(entry.target);
                    }
                });
            });
        }, options);

        sections.forEach(section => {
            // 初期状態で非表示
            section.classList.add('fade-out');
            observer.observe(section);
        });
    }

    // DOMContentLoadedイベントリスナー内で以下の行を追加
    setupFadeInEffect();
});
