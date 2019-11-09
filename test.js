function closePopup() {
    document.querySelector('.overlay').classList.remove('open');
    console.log('qwe');
    document.querySelector('.mask').style.display = 'none';
}


window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    this.document.querySelector('.overlay').style.top = currentScrollPos + 100 + 'px';
};