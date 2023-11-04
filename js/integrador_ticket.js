let selectedBox = null;

function selectBox(boxNumber) {
    if (boxNumber === null) {
        resetBox()
    } else {
        const box = document.getElementById(`box${boxNumber}`);
        const color = getColorForBox(boxNumber);

        if (selectedBox) {
            selectedBox.style.backgroundColor = '';
        }

        selectedBox = box;
        selectedBox.style.backgroundColor = color;

        const selectElement = document.getElementById('validationCustom04');
        selectElement.value = boxNumber;
    }
}

function getColorForBox(boxNumber) {
    const colors = {
        1: '#5399f1',
        2: '#00bcd4',
        3: '#ffc107'
    };

    return colors[boxNumber] || '';
}

const selectElement = document.getElementById('validationCustom04');
selectElement.addEventListener('change', function() {
    const selectedOption = selectElement.value;
    selectBox(selectedOption);
});

function resetBox(){
    if (selectedBox) {
        selectedBox.style.backgroundColor = '';
        selectedBox = null;
    }
}

function resetForm() {
    resetBox()
    document.getElementById('total-box').textContent = 'Total a Pagar: $';
}

function getDiscount(number) {
    const discount = {
        1: 0.8,
        2: 0.5,
        3: 0.15
    };

    return discount[number] || 0;
}

function calculateTotal() {
    const quantity = parseFloat(document.getElementById('validationCustom03').value);
    const selectedOption = document.getElementById('validationCustom04').value;
    const discount = getDiscount(selectedOption);
    const ticketPrice = 200;
    const total = (quantity * ticketPrice) - (quantity * ticketPrice * discount);
    document.getElementById('total-box').textContent = `Total a Pagar: $${total}`;
}

(() => {
    'use strict';
    const form = document.getElementById('myForm');
    form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }
        form.classList.add('was-validated');
    });

    document.getElementById('resumen-button').addEventListener('click', function (event) {
        event.preventDefault();
        if (form.checkValidity()) {
            calculateTotal();
        }
        form.classList.add('was-validated');
    });
})();