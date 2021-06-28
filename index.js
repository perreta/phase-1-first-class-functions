function receivesAFunction(cb){
    console.log(cb()) 
}

function returnsANamedFunction(){
    return function add (num1, num2){num1+num2}
}

function returnsAnAnonymousFunction() {
    return function(){1+2}
}
