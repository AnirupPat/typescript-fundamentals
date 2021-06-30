function doSomething() {
    // change var to let.. and it will trhow an error in ts file during compilation
    // but will transpile to var in main.js and will execute successfully in main.js
    for(var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log("Finally " +i);
}

doSomething();