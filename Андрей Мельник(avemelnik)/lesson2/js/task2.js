function arraySort() {
    var n = Math.floor(Math.random() * 11);
    var array = [];
    newArray = [];
    for (var i = 0; i <= n; i++) {
        array[i] = Math.floor(Math.random() * 101);
        newArray[i] = array[i];
    }
    newArray.sort(function (a, b) {
        return a - b;
    });
    console.log('Second Task, first part:' + '\nOriginal array: ' + array + '\nSorted array: ' + newArray);
}

function mySort() {
    var array = [3, 5, 12, 243, 132, 32, 1, 0, 32, 5];
    newArray = [];
    for (var k = 0; k < array.length; k++) {
        var min = array[k];
        var count = 0;
        for (var l = k; l < array.length; l++) {
            if (min > array[l]) {
                min = array[l];
                count = l;
            }
        }
        newArray[k] = min;
        array.splice(count, 1);
        array.unshift(min);
    }
    console.log('Second Task, second part:' + '\nOriginal array: ' + array + '\nSorted array: ' + newArray);

}

arraySort();
mySort();
