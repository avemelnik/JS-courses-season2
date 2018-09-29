function amountArray() {
    var n = Math.floor(Math.random() * 21);
    var array = [];
    var amount = 0;
    for(var i = 0; i <= n; i++){
        array[i] = Math.floor(Math.random() * 101);
        amount += array[i];
    }
    console.log('First Task:' + '\nArray: ' + array + '; ' + '\nSum of elements of the array' + ' = ' + amount);
}

amountArray();
