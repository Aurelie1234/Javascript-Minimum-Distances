function minimumDistances(a) {
    // Write your code here


    let array = [];


//for loop to find pairs 


    for (let i = 0; i < a.length; i++) {
        for (let j = i + 1; j < a.length; j++) {
            if (a[i] == a[j]) {
                array.push(Math.abs(i - j))
            }
        }
    }


    if (array.length == 0) {
        return -1
    }
    else {
        return Math.min(...array)
    }
}
