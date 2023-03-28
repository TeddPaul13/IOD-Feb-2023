const employee1 ={
    name: 'Teddy',
    country: 'US',
    occupation: 'Data Scientist',
    age: '30'
}
const employee2 ={
    name: 'Tom',
    country: 'US',
    occupation: 'Scientist',
    age: '32'
}
const objectCountry1 = employee1 ?.country ?? 'Not Available'
const objectCountry2 = employee2 ?.country ?? 'Not Available'


const isSameCountry = (object1, object2) => {
    if ( objectCountry1 === 'Not Avaliable' && objectCountry2 === 'Not Availbale'){
        return 'Employees are from different country'

    }else{
        return 'Employees are from same country'
    }
}
console.log(isSameCountry(employee1, employee2))