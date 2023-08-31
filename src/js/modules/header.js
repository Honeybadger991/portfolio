import { gsap } from "gsap";

const header = () => {
    const burger = document.querySelector('.header-burger');
    const close = document.querySelector('.header-overlay-close');
    const overlay = document.querySelector('.header-overlay');

    burger.addEventListener('click', () => {
        overlay.classList.add('active')
        gsap.to(overlay, {
            xPercent: -100,
            duration: .5
        })
    })

    close.addEventListener('click', () => {
        gsap.to(overlay, {
            xPercent: 100,
            duration: .5
        })
        setTimeout(() => {
            overlay.classList.remove('active')
        }, 500)
    })

    overlay.addEventListener('click', () => {
        gsap.to(overlay, {
            xPercent: 100,
            duration: .5
        })
        setTimeout(() => {
            overlay.classList.remove('active')
        }, 500)
    })
}

export default header;