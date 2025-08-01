document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    const overlay = document.querySelector('.menu-overlay'); // NOVO: Seleciona o overlay

    // Função para fechar o menu
    const closeMenu = () => {
        mobileMenu.classList.remove('active');
        hamburger.classList.remove('open');
        overlay.classList.remove('active'); // Remove a classe 'active' do overlay
        document.body.style.overflow = 'auto'; // Reabilita o scroll
    };

    hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        hamburger.classList.toggle('open');
        overlay.classList.toggle('active'); // NOVO: Ativa o overlay

        if (mobileMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden'; // Impede o scroll do body
        } else {
            document.body.style.overflow = 'auto'; // Reabilita o scroll
        }
    });

    // Fecha o menu ao clicar em um link ou no overlay
    document.querySelectorAll('.mobile-menu a, .menu-overlay').forEach(item => {
        item.addEventListener('click', () => {
            closeMenu();
        });
    });

    // Lógica de navegação da HQ (mantida)
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

    showPage(currentPageIndex);
});
