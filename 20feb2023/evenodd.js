function checknum (number){
    if (number  === 0){
        return 'Invalid Number'
    }
    if (number % 2 == 0){
        return 'Even Number'
    }else{
        return 'Odd Number'
    }
}
console.log(checknum(9));