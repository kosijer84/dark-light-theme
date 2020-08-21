const inputStatus = document.getElementById('switch').children[0]
const bodyElem = document.body;

let page = {
    theme: localStorage.getItem('theme') ? localStorage.getItem('theme') : "light",

    isLight: function () {
        return this.theme == 'light';
    },
    getNext: function () {
        if (this.theme == 'light')
            return 'dark';
        else
            return 'light';
    },
    doLoadTheme: function () {
        this.isLight() ? inputStatus.checked = false : inputStatus.checked = true;
        !this.isLight() ? bodyElem.classList.add('dark-theme') : bodyElem.classList.remove('dark-theme');
    },
    doSwitchTheme: function () {
        this.theme = this.getNext();
        this.doLoadTheme();
        localStorage.setItem('theme', this.theme);
    },
}

page.doLoadTheme();

inputStatus.addEventListener('change', () => {
    page.doSwitchTheme()
})

//automatic theme change depends on the time of day
let time = new Date().getHours();

if (localStorage.getItem('theme') === null) {
    (time >= 7 && time <= 21) ? bodyElem.classList.remove('dark-theme') : bodyElem.classList.add('dark-theme')
}