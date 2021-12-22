window.addEventListener('DOMContentLoaded', () => {

    const tabs = document.querySelectorAll('.tab__item'),
        tabsContent = document.querySelectorAll('.tab__content'),
        tabsParent = document.querySelector('.tab__items');

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show');

        });

        tabs.forEach(item => {
            item.classList.remove('tab__active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tab__active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tab__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
});