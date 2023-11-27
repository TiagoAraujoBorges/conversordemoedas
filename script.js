const form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);

const inputValue = document.getElementById("value-real");
const selectedCurrency = document.getElementById("currency");
const result = document.getElementById("result");
let valueConverted = 0;

function handleSubmit(e) {
  e.preventDefault();

  if (!inputValue.value || inputValue.value < 0) {
    alert("Informe um valor válido!");
    return;
  } else if (!selectedCurrency.value) {
    alert("Escolha uma moeda!");
    return;
  }

  converter();

};

function converter() {
    if(selectedCurrency.value === 'eur') {
    valueConverted = inputValue.value / 5.35;
    result.innerHTML = valueFormatter('pt-BR', 'EUR');
    animateResult()

    } else if(selectedCurrency.value === 'dol') {
    valueConverted = inputValue.value / 4.89;
    result.innerHTML = valueFormatter('pt-BR' ,'USD');
    animateResult()

    } else if(selectedCurrency.value === 'lib') {
    valueConverted = inputValue.value / 6.12;
    result.innerHTML = valueFormatter('pt-BR', 'GBP');
    animateResult()

    } else if(selectedCurrency.value === 'ien') {
    valueConverted = inputValue.value * 30,564454 ;
    result.innerHTML = valueFormatter('pt-BR', 'JPY');
    animateResult()
    
    } else if(selectedCurrency.value === 'yua') {
    valueConverted = inputValue.value / 1.69;
    result.innerHTML = valueFormatter('pt-BR' , 'CNY' );
    animateResult()
}
    inputValue.value ='';
    selectedCurrency.value ='';

};

function valueFormatter(locale, currency){

    const value = valueConverted.toLocaleString(`${locale}`, { style: 'currency', currency:`${currency}`});
    return `${value}`;
};

function animateResult() {
    return result.animate([
        {transform: 'translateY(-150px)'},
        {transform: 'translateY(0px)'},
        ],{duration:600});
};

