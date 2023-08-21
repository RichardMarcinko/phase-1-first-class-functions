const spy = []
const chai = []

function receivesAFunction(spy) {
   return spy();
    }

console.log(receivesAFunction(callback))

function returnsANamedFunction() {
    return function dog(spy) {
        return spy()
    } 
    }
function returnsAnAnonymousFunction() {
    return function () {
        return 2*2
    }
}