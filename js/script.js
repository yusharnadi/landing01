window.onload = function () {
    toggleBtn = document.querySelector('#primary-navigation .toggle-btn');
    collapseEl = document.querySelector('#primary-navigation .collapse');

    toggleBtn.addEventListener('click', function (e) {
        collapseEl.classList.toggle('active');
        // console.log(collapseEl);
    });

    // MASONRY
    let imgWrap = document.querySelector('.recent-work .recent-work__images-wrapper');

    let msnry = new Masonry(imgWrap, {
        itemSelector: '.recent-work .recent-work__images-wrapper .image_item',
        // fitWidth: true,
        // percentPosition: true,
        gutter: 100,
    });
};

let relax = new Rellax('.relax', {
    center: true,
});
