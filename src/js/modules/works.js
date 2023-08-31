const works = () => {
    const updateBtnsArrows = () => {
        const deviceWidth = window.innerWidth;
        const btnsR = document.querySelectorAll('.works-btn-r');
        const btnsL = document.querySelectorAll('.works-btn-l');
        btnsR.forEach(item => {
            if (deviceWidth < 768){
                item.innerHTML = '&darr;&nbsp;&nbsp;Visit'
            } else {
                item.innerHTML = 'Visit&nbsp;&nbsp;&rarr;'
            }
        })
        btnsL.forEach(item => {
            if (deviceWidth < 768){
                item.innerHTML = '&darr;&nbsp;&nbsp;Visit'
            } else {
                item.innerHTML = '&larr;&nbsp;&nbsp;Visit'
            }
        })
    }
    updateBtnsArrows();
    window.addEventListener('resize', updateBtnsArrows);
}

export default works;