document.addEventListener('DOMContentLoaded', () => {
    // Menu Hambúrguer
    const hamburger = document.querySelector('.hamburger-menu');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        hamburger.classList.toggle('open'); // Adiciona uma classe para animar o ícone
    });

    // Fechar o menu ao clicar em um link
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            hamburger.classList.remove('open');
        });
    });

    // Leitor de HQ
    const comicPages = document.querySelectorAll('.comic-page');
    const prevButton = document.getElementById('prev-page');
    const nextButton = document.getElementById('next-page');
    let currentPageIndex = 0;

    function showPage(index) {
        comicPages.forEach((page, i) => {
            page.classList.remove('active');
            if (i === index) {
                page.classList.add('active');
            }
        });

        // Habilita/desabilita botões
        prevButton.disabled = index === 0;
        nextButton.disabled = index === comicPages.length - 1;
    }

    prevButton.addEventListener('click', () => {
        if (currentPageIndex > 0) {
            currentPageIndex--;
            showPage(currentPageIndex);
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentPageIndex < comicPages.length - 1) {
            currentPageIndex++;
            showPage(currentPageIndex);
        }
    });

    // Exibe a primeira página ao carregar
    if (comicPages.length > 0) {
        showPage(currentPageIndex);
    }
});
