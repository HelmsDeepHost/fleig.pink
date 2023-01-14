document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.chatlog__sticker--media[data-source]').forEach(e => {
        const anim = lottie.loadAnimation({container: e, renderer: 'svg', loop: true, autoplay: true, path: e.getAttribute('data-source')});
        anim.addEventListener('data_failed', () => e.innerHTML = '<strong>[Sticker cannot be rendered]</strong>');
    });
});