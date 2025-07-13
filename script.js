document.addEventListener('DOMContentLoaded', function() {

    // スクロールでセクションをフェードイン
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // 画像モーダルの処理
    const imageModal = document.getElementById('imageModal');
    imageModal.addEventListener('show.bs.modal', function (event) {
        const button = event.relatedTarget;
        const imageSrc = button.getAttribute('data-image-src');
        const modalImage = imageModal.querySelector('#modalImage');
        modalImage.src = imageSrc;
    });

});