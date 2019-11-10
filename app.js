function closePopup() {
    document.querySelector('.overlay').classList.remove('open');
    document.querySelector('.mask').style.display = 'none';
}

window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    this.document.querySelector('.overlay').style.top = currentScrollPos + 100 + 'px';
    this.document.querySelector('.stadiums_popup').style.top = currentScrollPos + 55 + 'px';
};