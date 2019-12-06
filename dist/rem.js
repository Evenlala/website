(function (win, doc) {
    function setSize() {
        doc.documentElement.style.fontSize = 20 * doc.documentElement.clientWidth / 750 + 'px';
    }
    setSize();
    win.addEventListener('resize', setSize, false)
})(window, document)