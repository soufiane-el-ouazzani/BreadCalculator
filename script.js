const calculat = document.getElementById('Calculat');
const showError = document.getElementById('show-error');
const result = document.getElementById('result');



// calculat The Total In Column
function calculatTheTotalInColumn(column, coef){
    let sum=0 ;

    for(let i=1; i<=7; i++){
        if(document.getElementById(`C${column}L${i}`).value < 0){
           showError.className="show";
           break;
        }
    }

    for(let i=1; i<=7; i++){
        sum = sum + parseFloat(document.getElementById(`C${column}L${i}`).value);
    }
    
    return sum*coef;
}

// event listener
calculat.addEventListener('click', function(e){
    
    
    const a = calculatTheTotalInColumn(1,0.5);
    const b = calculatTheTotalInColumn(2,0.7);
    const c = calculatTheTotalInColumn(3,1);
    const d = calculatTheTotalInColumn(4,1.5);
    
    const total = a+b+c+d;
    
    document.getElementById("culom_1").textContent = a;
    document.getElementById("culom_2").textContent = b;
    document.getElementById("culom_3").textContent = c;
    document.getElementById("culom_4").textContent = d;
    result.textContent = total;


    
    e.preventDefault();
})
