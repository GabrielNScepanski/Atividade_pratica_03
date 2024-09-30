document.getElementById('btnObjeto').addEventListener('click', spreadObject);
document.getElementById('btnArray').addEventListener('click', spreadArray);

function spreadObject() {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { ...obj1, c: 3 };
    document.getElementById('resultadoObjeto').innerText = 'Resultado do Spread em Objeto: ' + JSON.stringify(obj2);
}

function spreadArray() {
    const arr1 = [1, 2, 3];
    const arr2 = [...arr1, 4, 5];
    document.getElementById('resultadoArray').innerText = 'Resultado do Spread em Array: ' + JSON.stringify(arr2);
}
