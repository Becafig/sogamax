document.addEventListener('DOMContentLoaded', function () {
    const placeholders = document.querySelectorAll('.youtube-placeholder');

    placeholders.forEach(placeholder => {
        placeholder.addEventListener('click', function () {
            const videoId = placeholder.getAttribute('data-video-id');
            const iframe = document.createElement('iframe');
            iframe.setAttribute('src', `https://www.youtube.com/embed/${videoId}?autoplay=1`);
            iframe.setAttribute('frameborder', '0');
            iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
            iframe.setAttribute('allowfullscreen', true);
            iframe.style.width = '100%';
            iframe.style.height = '100%';

            placeholder.innerHTML = ''; 
            placeholder.appendChild(iframe);
        });
    });
});
