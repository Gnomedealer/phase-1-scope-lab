var customerName = 'bob'
function testingScope(){
    
    const localVar = 'sting of local'
    function localFunction(){
        const moreLocalVar = 'more local'
        console.log(localVar)
    }
    // console.log(moreLocalVar)
    console.log(customerName)
}
testingScope()
// console.log(localVar)
function upperCaseCustomerName(){
    customerName = 'BOB'
}
function setBestCustomer(){
    bestCustomer = 'not bob'
}
function overwriteBestCustomer(){
    bestCustomer = 'maybe bob'
}
const leastFavoriteCustomer = 'matt'
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'tommy'
}
