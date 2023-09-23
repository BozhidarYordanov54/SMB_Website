document.getElementById("n").addEventListener("input", updateCalculation);
document.getElementById("k").addEventListener("input", updateCalculation);

const resultDisplay = document.getElementById("result");


function updateCalculation() {
    const n = parseInt(document.getElementById("n").value);
    const k = parseInt(document.getElementById("k").value);

    if (isNaN(n) || isNaN(k)) {
        
    } 
    else if(n < 0 )
    {
        resultDisplay.textContent = "Числото n трябва да е по голямо или равно на 0";
        resultDisplay.style.color = 'red';
        resultDisplay.style.fontSize = '20px';
    }
    else if(k < 0)
    {
        resultDisplay.textContent = "Числото k трябва да е по голямо или равно на 0";
        resultDisplay.style.color = 'red';
        resultDisplay.style.fontSize = '20px'
    }
    else if(k > n)
    {
        resultDisplay.textContent = "Числото n трябва да е по голямо или равно на k";
        resultDisplay.style.fontSize = "20px"
        resultDisplay.style.color = 'red';
    }
    else 
    {
        const result = binomialCoefficient(n, k);
        resultDisplay.textContent = result;
        resultDisplay.style.color = 'black';
    }
}

// Function to calculate the binomial coefficient
function binomialCoefficient(n, k) {
    if (k === 0 || k === n) {
        return 1;
    }

    let result = 1;
    for (let i = 1; i <= k; i++) {
        result *= (n - i + 1) / i;
    }

    return Math.round(result);
}
