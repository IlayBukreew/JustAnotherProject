const btn_mob = document.querySelector('.menu-mobile'),
    black = document.querySelector('.black'),
    menu_right = document.querySelector('.menu-right'),
    acc = document.getElementsByClassName("accordion");
let menu_visible = true,
    l = 0;
for (l = 0; l < acc.length; l++) {
    acc[l].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
}

btn_mob.addEventListener('click', function () {
        if (menu_visible) {
            menu_right.classList.add('show');
            black.classList.add('show');
            document.body.style.overflow = 'hidden';
            menu_visible = false;
        }
    });
black.addEventListener('click', function () {
    if (!menu_visible) {
        menu_right.classList.remove('show');
        black.classList.remove('show');
        document.body.style.overflow = 'scroll';
        menu_visible = true;
    };
});