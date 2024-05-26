async function check(){
    await Promise.resolve(console.log(1));
    console.log(2);
}

console.log(3);
check();
console.log(4);
//3 1 4 2


//Javascript first prints synchronous line that is 3 and then goes to check()
//where in check() we have promise function which goes into micro task but since await is used Javscript makes promise function synchronously and prints 1
//Async makes Javascript execute the function synchronously until await is found after await ,the code is treated to be promise as a function with prefix async is promise hence the next lines within check() goes into microtask and waits for synchronous code to be executed 
//then prints 4 as it is synchronous code and then 2




//check();: This line invokes the check function. The check function is an async function, so it returns a promise.So any code after await still remains to be in microtask queue since async makes code a promise where promise is considered to be microtask

//await Promise.resolve(console.log(1));: This line resolves a promise immediately with Promise.resolve(), then logs 1 to the console.
// Since await pauses the execution of the function until the promise is resolved, the execution of the check function is paused at this point.