let header = document.querySelector('header');

document.addEventListener('scroll', () => {
    if(document.documentElement.scrollTop > header.clientHeight) {
        header.classList.add('nav-fix');
    } else {
        header.classList.remove('nav-fix');
    }
}
)
