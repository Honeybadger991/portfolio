import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";
import { TextPlugin } from "gsap/TextPlugin.js";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

const animations = () => {
    const isMouseDevice = () => {
        return window.matchMedia('(pointer: fine)').matches
    }

    const tlCode = gsap.timeline()

    tlCode
    .to('.home-code-1', {
        opacity: 1,
        duration: 0.3,
        repeat: 3,
    })
    .to('.home-code-2', {
        opacity: 1,
        duration: 0.3,
        repeat: 3,
    }, '-=0.8')
    .to('.home-code-3', {
        opacity: 1,
        duration: 0.3,
        repeat: 3,
    }, '-=0.8')
    .to('.home-code-4', {
        opacity: 1,
        duration: 0.3,
        repeat: 3,
    }, '-=0.8')
    .to('.home-code-text', {
        opacity: 0,
        duration: 0.3,
        stagger: 0.15
    }, '+=0.3')
    .set('.home-code',{
        yPercent: -300
    })
    .fromTo('.cursor-1', {
        opacity: 1,
    }, {
        opacity: 0,
        duration: 0.2,
        repeat: 7,
    })
    .to('.home-greeting', {
        opacity: 1,
        duration: 1.5,
    }, '<')
    .to('.home-greeting-start', {
        text: "Hello, I'm",
        duration: 0.55,
    }, '-=1.4')
    .to('.home-greeting-name', {
        text: "Alexander Moroz.",
        duration: 0.85,
    }, '>')
    .to('.home-greeting-end', {
        text: "I'm front end developer from Ukraine.",
        duration: 1.8,
    }, '>')
    .fromTo('.cursor-2', {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 0.2,
        repeat: 7,
    }, '<')
    .to('.cursor-2', {
        opacity: 0,
        duration: 0.01
    })
    .from('.header-item', {
        scale: 0,
        duration: 0.2,
        stagger: 0.1
    }, '>')
    .from('.header-burger', {
        scale: 0,
        duration: 0.2,
    }, '>')
    .from('.home-bottom', {
        opacity: 0,
        yPercent: 500,
        duration: 1
    }, '<')
    .to('.home-bottom', {
        opacity: 1,
        duration: 1
    }, '<')
    .to('.home-robot', {
        yPercent: 500,
        duration: 1
    }, '>')
    .set('.home-robot', {
        opacity: 0
    })
    .to('.home-more', {
        scale: 1.3,
        yoyo: true,
        duration: 1,
        repeat: 3
    })
    .from('.logo-1', {
        opacity: 0,
        y: 100,
        x: -80,
        rotation: 360,
        duration: 2
    }, '-=6')
    .from('.logo-2', {
        opacity: 0,
        y: 100,
        x: -80,
        rotation: 360,
        duration: 2
    }, '<')
    .from('.logo-3', {
        opacity: 0,
        y: 100,
        x: -70,
        rotation: 360,
        duration: 2
    }, '<')
    .from('.logo-4', {
        opacity: 0,
        y: -100,
        x: -70,
        rotation: 360,
        duration: 2
    }, '<')
    .from('.logo-5', {
        opacity: 0,
        y: -100,
        x: -80,
        rotation: 360,
        duration: 2
    }, '<')
    .to('.header-logo-item', {
        scale: 0.85,
        duration: 0.4
    }, '-=3.5');






    gsap.to('.header', {
        scrollTrigger: {
            trigger: '.home-greeting',
            start: 'bottom center',
            scrub: true,
        },
        css:{
            backgroundColor: 'rgba(163,13,163,1)',
            borderBottom: '2px solid #c8fcf1',
        }
    })






    gsap.to('.about-advantages-img', {
        scrollTrigger: {
            trigger: '.about-advantages-img',
            start: '20px 85%',
        },
        scale: 1,
        duration: 0.5,
        stagger: 0.2
    })

    gsap.from('.about-advantages-name', {
        scrollTrigger: {
            trigger: '.about-advantages-name',
            start: '20px 85%',
        },
        opacity: 0,
        duration: 0.5,
        stagger: 0.2
    })
    
    gsap.from('.about-advantages-description', {
        scrollTrigger: {
            trigger: '.about-advantages-description',
            start: '20px 85%',
        },
        opacity: 0,
        duration: 0.5,
        stagger: 0.2
    })

    gsap.from('.about-bio-background', {
        scrollTrigger: {
            trigger: '.about-bio-background',
            start: '20px 85%',
        },
        opacity: 0,
        xPercent: -300,
        duration: 1,
    })

    gsap.from('.about-bio-text', {
        scrollTrigger: {
            trigger: '.about-bio-text',
            start: '20px 85%',
        },
        opacity: 0,
        xPercent: 300,
        duration: 1,
    })


    const tlAbout = gsap.timeline({
        scrollTrigger: {
            trigger: '.about-tree',
            start: 'center 95%'
        },
    })

    tlAbout
    .from('.about-tree', {
        opacity: 0,
        xPercent: -300,
        duration: 1,
    })
    .to('.about-robot',{
        xPercent: -5000,
        duration: 3,
    }, '>')
    .to('.about-robot',{
        opacity: 0,
        duration: 0.1,
    }, '>')
    .from('.about-tree-dot', {
        scale: 0.1,
        duration: 1,
        repeat: -1,
        yoyo: true,
    }, '-=3')



    gsap.from('.skills-grid-item', {
        scrollTrigger: {
            trigger: '.skills-grid',
            start: '20px 85%',
        },
        opacity: 0,
        yPercent: 25,
        duration: 1,
        stagger: 0.2
    })



    const skills = document.querySelectorAll('.skills-grid-item');

    skills.forEach(item => {
        const name = item.querySelector('.skills-grid-name');
        const descr = item.querySelector('.skills-grid-description');

        item.addEventListener('touchstart', () => {
            if(!item.classList.contains('active')){
                item.classList.add('active');

                gsap.to(name, {
                    opacity: 0.9,
                    y: 20,
                    duration: 0.5,
                })
                gsap.to(descr, {
                    opacity: 0.9,
                    y: -20,
                    duration: 0.5,
                })
            } else {
                gsap.to(name, {
                    opacity: 0,
                    y: -20,
                    duration: 0.5,
                })
                gsap.to(descr, {
                    opacity: 0,
                    y: 20,
                    duration: 0.5,
                })

                item.classList.remove('active')
            }
        })

        item.addEventListener('mouseenter', () => {
            const name = item.querySelector('.skills-grid-name');
            const descr = item.querySelector('.skills-grid-description');

            gsap.to(name, {
                opacity: 0.9,
                y: 20,
                duration: 0.5,
            })
            gsap.to(descr, {
                opacity: 0.9,
                y: -20,
                duration: 0.5,
            })
        })

        item.addEventListener('mouseleave', () => {
            const name = item.querySelector('.skills-grid-name');
            const descr = item.querySelector('.skills-grid-description');

            gsap.to(name, {
                opacity: 0,
                y: -20,
                duration: 0.5,
            })
            gsap.to(descr, {
                opacity: 0,
                y: 20,
                duration: 0.5,
            })
        })
    })


    gsap.to('.skills-text-smile', {
        scrollTrigger: {
            trigger: '.skills-text',
            start: 'center bottom',
            end: 'center top',
            toggleActions: 'restart none none none',
            scrub: true
        },
        rotation: 720,
    })


    const worksPics = document.querySelectorAll('.works-picture-img');
    worksPics.forEach(item => {
        item.addEventListener('touchstart', () => {
            if(!item.classList.contains('touched')){
                item.classList.add('touched');
            } else {
                item.classList.remove('touched');
            }
        })
        item.addEventListener('mouseenter', () => {
            item.classList.add('touched');
        })
        item.addEventListener('mouseleave', () => {
            item.classList.remove('touched');
        })
    })

    const worksBtns = document.querySelectorAll('.works-btn');
    worksBtns.forEach(item => {
        item.classList.contains('works-btn-l') ?
        item.addEventListener('mouseenter', () => {
        gsap.to(item, {
            backgroundPosition: "100% 0%",
            duration: 0.8,
            });
        }) :
        item.addEventListener('mouseenter', () => {
            gsap.to(item, {
                backgroundPosition: "0% 0%",
                duration: 0.8,
            });
        })
    })

    worksBtns.forEach(item => {
        item.classList.contains('works-btn-l') ?
        item.addEventListener('mouseleave', () => {
        gsap.to(item, {
            backgroundPosition: "0% 0%",
            duration: .5,
            });
        }) :
        item.addEventListener('mouseleave', () => {
            gsap.to(item, {
                backgroundPosition: "100% 0%",
                duration: .5,
            });
        })
    })




    const social = document.querySelector('.contact-social-items');
    const form = document.querySelector('.contact-form');

    social.addEventListener('mouseenter', () => {
        gsap.to('.contact-social-text', {
            color: 'rgba(163,13,163,1)',
            scale: 1.3,
            duration: 0.8,
        });
    })

    social.addEventListener('mouseleave', () => {
        gsap.to('.contact-social-text', {
            color: '#fff',
            scale: 1,
            duration: 0.8,
        });
    })

    form.addEventListener('mouseenter', () => {
        gsap.to('.contact-form-text', {
            color: 'rgba(163,13,163,1)',
            scale: 1.3,
            duration: 0.8,
        });
    })

    form.addEventListener('mouseleave', () => {
        gsap.to('.contact-form-text', {
            color: '#fff',
            scale: 1,
            duration: 0.8,
        });
    })




    const tlContact = gsap.timeline({
        scrollTrigger: {
            trigger: '.contact-subtitle',
            start: 'center 85%',
        },
    })

    tlContact
    .from('.contact-social-text',{
        opacity: 0,
        xPercent: -300,
        duration: 2,
        ease: 'back.out(2)'
    })
    .from('.contact-social-item', {
        opacity: 0,
        yPercent: 60,
        duration: 2,
        ease: "elastic.out(1, 0.3)",
        stagger: 0.2
    }, '-=1')
    .from('.contact-form-text', {
        opacity: 0,
        xPercent: 300,
        duration: 2,
        ease: 'back.out(2)'
    }, '-=2')
    .from('.contact-form-peace', {
        opacity: 0,
        scale: 0,
        duration: 2,
        stagger: 0.2
    }, '-=1.5')
    .from('.contact-resume', {
        opacity: 0,
        xPercent: -300,
        duration: 1,
    }, '-=1.2')
    .to('.contact-robot',{
        xPercent: -5000,
        duration: 3,
    }, '>')
    .to('.contact-robot',{
        opacity: 0,
        duration: 0.1,
    }, '>')


    const socialIcons = document.querySelectorAll('.contact-social-item');
    socialIcons.forEach(item => {
        item.addEventListener('mouseenter', () => {
            gsap.fromTo(item, {
                rotation: 0,
            },
            {
                rotation: 360,
                duration: .1,
            })
        })
    })

    const resume = document.querySelector('.contact-resume-link');
    resume.addEventListener('mouseenter', () => {
        gsap.to('.contact-resume-link', {
            scale: 1.1,
            duration: .5,
        })
    })

    resume.addEventListener('mouseleave', () => {
        gsap.to('.contact-resume-link', {
            scale: 1,
            duration: .5,
        })
    })
}

export default animations;