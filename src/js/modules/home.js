
const home = () => {
    const moreBtn = document.querySelector('.home-more');

    moreBtn.addEventListener('click', () => {
        window.scrollTo({top: window.innerHeight, behavior: "smooth"})
    })

}

export default home;