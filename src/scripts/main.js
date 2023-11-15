document.addEventListener("DOMContentLoaded", ()=>{
    const buttons = document.querySelectorAll('[data-tab-button]')



    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', (btn) => {
            const targetTab = btn.currentTarget.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id=${targetTab}]`);
            console.log('targetTab:', targetTab);
            console.log('tab:', tab);
            hideAllTabs();
            tab.classList.add('seasons__list--is-active');
            removeActiveBtn();
            btn.currentTarget.classList.add('seasons__tabs__button--is-active');
        });
    }
})



function removeActiveBtn(){
    const buttons = document.querySelectorAll('[data-tab-button]');

    for(let i = 0; i <  buttons.length; i++){
        buttons[i].classList.remove('seasons__tabs__button--is-active');
    }
}

function hideAllTabs(){
    const sectionTab = document.querySelectorAll('[data-tab-id]');

    for(let i = 0; i < sectionTab.length; i++){
        sectionTab[i].classList.remove('seasons__list--is-active');
    }
}