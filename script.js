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
        });
    });

    // ハンバーガーメニューの開閉
    const menuToggle = document.querySelector('.hamburger-menu');
    const navLinksContainer = document.querySelector('.nav-links');
    menuToggle.addEventListener('click', () => {
        navLinksContainer.classList.toggle('nav-active');
    });

    // ここに追加の機能を実装できます

    function adjustVideoSize() {
        const header = document.getElementById('header');
        const videoContainer = document.getElementById('video-container');
        const windowHeight = window.innerHeight;
        const headerHeight = header.offsetHeight;
        
        videoContainer.style.height = `${windowHeight - headerHeight}px`;
    }

    // ページ読み込み時に実行
    window.addEventListener('load', adjustVideoSize);

    // ウィンドウサイズ変更時に実行
    window.addEventListener('resize', adjustVideoSize);
});