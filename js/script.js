window.onload = function () {
    toggleBtn = document.querySelector('#primary-navigation .toggle-btn');
    collapseEl = document.querySelector('#primary-navigation .collapse');

    toggleBtn.addEventListener('click', function (e) {
        collapseEl.classList.toggle('active');
        // console.log(collapseEl);
    });
};
