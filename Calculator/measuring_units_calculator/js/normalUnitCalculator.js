function convertNormal() {
    const value = parseFloat(document.getElementById('value').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
    const resultToDisplay = document.getElementById('result');
    const formula = document.getElementById('formula');

    const unitFactors = {
        'mm': 1,
        'cm': 10,
        'dm': 100,
        'm': 1000,
        'km': 1000000,
        'ft': 304.8,
        'in': 25.4,
    };

    if (fromUnit === toUnit) {
        resultToDisplay.innerHTML = value;
        formula.innerHTML = `${fromUnit} = ${toUnit}`;
    } else if (unitFactors[fromUnit] && unitFactors[toUnit]) {
        const result = (value * unitFactors[fromUnit]) / unitFactors[toUnit];
        resultToDisplay.innerHTML = result;
        const operation = unitFactors[fromUnit] > unitFactors[toUnit] ? ' ÷ ' : ' × ';
        
        formula.innerHTML = `${value}${fromUnit} ${operation} ${unitFactors[toUnit]}0 = ${result}`
    } else {
        resultToDisplay.innerHTML = 'Invalid units';
        formula.innerHTML = '';
    }
}

document.getElementById('value').addEventListener('input', convert);
document.getElementById('fromUnit').addEventListener('change', convert);
document.getElementById('toUnit').addEventListener('change', convert);
