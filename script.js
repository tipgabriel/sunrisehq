document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    const overlay = document.querySelector('.menu-overlay');

    const closeMenu = () => {
        mobileMenu.classList.remove('active');
        hamburger.classList.remove('open');
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    };

    hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        hamburger.classList.toggle('open');
        overlay.classList.toggle('active');

        if (mobileMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    });

    document.querySelectorAll('.mobile-menu a, .menu-overlay').forEach(item => {
        item.addEventListener('click', () => {
            closeMenu();
        });
    });

    const comicPages = document.querySelectorAll('.comic-page');
    const prevButton = document.getElementById('prev-page');
    const nextButton = document.getElementById('next-page');
    let currentPageIndex = 0;

    const showPage = (index) => {
        comicPages.forEach(page => page.classList.remove('active'));
        if (comicPages[index]) {
            comicPages[index].classList.add('active');
            currentPageIndex = index;
        }
        updateButtons();
    };

    const updateButtons = () => {
        prevButton.disabled = currentPageIndex === 0;
        nextButton.disabled = currentPageIndex === comicPages.length - 1;
    };

    prevButton.addEventListener('click', () => {
        if (currentPageIndex > 0) {
            showPage(currentPageIndex - 1);
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentPageIndex < comicPages.length - 1) {
            showPage(currentPageIndex + 1);
        }
    });

    // === NOVO CÓDIGO PARA NAVEGAÇÃO PELO TECLADO ===
    document.addEventListener('keydown', (event) => {
        // Ignora a função se o usuário estiver em um campo de texto para não atrapalhar
        if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') {
            return;
        }

        // Verifica qual tecla foi pressionada
        if (event.key === 'ArrowRight') {
            // Avança a página se o botão "Próxima" não estiver desabilitado
            if (!nextButton.disabled) {
                nextButton.click();
            }
        } else if (event.key === 'ArrowLeft') {
            // Volta a página se o botão "Anterior" não estiver desabilitado
            if (!prevButton.disabled) {
                prevButton.click();
            }
        }
    });
    // === FIM DO NOVO CÓDIGO ===

    showPage(currentPageIndex);
});
