const pageviews = document.querySelector('.pageviews span');
const permonth = document.querySelector('.money span');
const input = document.querySelector('input#slider');
const checkbox = document.querySelector('.switch input');

const changeInfo = () => {
    if(checkbox.checked) {
        switch (input.value) {
            case '0':
                permonth.textContent = '6.00';
                break;
            case '1':
                permonth.textContent = '9.00';
                break;
            case '2':
                permonth.textContent = '12.00';
                break;
            case '3':
                permonth.textContent = '18.00';
                break;
            case '4':
                permonth.textContent = '27.00';
                break;
        }
    } else {
        switch (input.value) {
            case '0':
                permonth.textContent = '8.00';
                break;
            case '1':
                permonth.textContent = '12.00';
                break;
            case '2':
                permonth.textContent = '16.00';
                break;
            case '3':
                permonth.textContent = '24.00';
                break;
            case '4':
                permonth.textContent = '36.00';
                break;
        }
    }
    switch (input.value) {
        case '0':
            pageviews.textContent = '10k';
            break;
        case '1':
            pageviews.textContent = '50k';
            break;
        case '2':
            pageviews.textContent = '100k';
            break;
        case '3':
            pageviews.textContent = '500k';
            break;
        case '4':
            pageviews.textContent = '1m';
            break;
    }
}

input.addEventListener('input', changeInfo);