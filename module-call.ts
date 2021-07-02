import { GetSet } from "./class-get-set";

let obj = new GetSet(10, 20);
obj.draw();
let x = obj.x;
obj.x = 100;
obj.draw();

// there is error while running this file..
// but thats fine
// this is about modules in TS
