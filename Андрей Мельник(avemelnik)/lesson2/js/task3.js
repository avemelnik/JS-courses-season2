function delRep() {
    var array = [3, 5, 5, 5, 12, 243, 1, 132, 1, 1, 1, 2, 4, 3, 1, 0, 0, 32, 5];
    var newArray = [];
    array.sort(function (a, b) {
        return a - b;
    });
    for(var j = 0; j <= array.length; j++){
        if(array[j] !== array[j+1]){
            newArray.push(array[j]);
        }
    }
    console.log('Third Task:' + '\nOriginal array: ' + array + '\nSorted array: ' + newArray);
}
delRep();