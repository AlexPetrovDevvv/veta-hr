function checkSafari() {
    let ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf("safari") != -1) {
        return ua.indexOf("chrome") > -1 ? false : true;
    }
}

const select = document.querySelector('.form__select')
const selectField = document.querySelector('.form__select-field')


select.addEventListener('change', function() {
    // Здесь можно выполнить нужные действия при изменении выбранной опции
    selectField.textContent = select.value
  });

