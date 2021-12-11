const navLinks = Array.from(document.querySelectorAll('.links'))
const content = document.querySelector('main')
const sections = Array.from(document.querySelectorAll('section'))

navLinks.forEach(link => {
    link.addEventListener('click', event => {
        const target = link.dataset.target
        const section = content.querySelector('#' + target)
        navLinks.forEach(nav => nav.classList.remove('is-selected'))
        link.classList.add('is-selected')
        sections.forEach(sec => sec.classList.remove('is-selected'))
        section.classList.add('is-selected')
    })
})