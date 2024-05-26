setTimeout(()=>{
    console.log(1);
},0);

Promise.resolve().then(()=>{
    console.log(2);
})

queueMicrotask(()=>{
    console.log(3);
})

console.log(4);

//The order of console is 4,2,3,1




//In javascript , the callback set in setTimeOut() goes into MacroTaskQueue and waits for its execution

//in promise , the then() callback gets added in microtaskqueue () and waits for its execution

//queuemicrotask() also gets added to microtask queue and waits for its execution

//console.log is executed because it is Synchronus so prints "4" first

//Firstly within the queue of micro and macro , tasks in Microtaskqueue are executed first . In microtask queue the first added will be first executed 
//therefore promise.then() is executed and prints "2" second

//then queueMicrotask() that was added second is executed and prints "3" third
//then the tasks in macrotaskQueue are executed and prints "1" 
//Promise , mutation,observer , callback are added to microtasks whereas 










// Microtasks are tasks that are executed immediately after the currently executing script completes, but before any rendering or UI updates.
// Examples of tasks that are added to the microtask queue include promises (resolved or rejected), mutation observer callbacks, and process.nextTick() in Node.js.


// Macrotasks are tasks that are executed after the microtask queue has been cleared and typically include I/O operations, setTimeout, setInterval callbacks, and user interaction events.
// Examples of tasks that are added to the macrotask queue include setTimeout, setInterval, I/O operations (such as reading from disk or making an HTTP request), and DOM events (such as click or keypress events).