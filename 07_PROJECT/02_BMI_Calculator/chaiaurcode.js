const form = document.querySelector('form');


form.addEventListener('submit', function(e){
    e.preventDefault(); // prevent the form from submitting and refreshing the page   

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);

    const results = document.querySelector('#results');

    if(height === '' || height < 0 || isNaN(height)){ // isNaN -> is not a number 
        results.innerHTML = `Please enter a valid height ${height}`;
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please enter a valid weight ${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        //show the result
        results.innerHTML = `<span>${bmi}</span>`;
    }
})