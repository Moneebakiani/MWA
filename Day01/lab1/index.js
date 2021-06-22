const child_process=require("child_process");
console.log("1.Get a File");
const newProcess=child_process.spawn("node",["computation/fib"],{stdio:"inherit"})
console.log("3.End App");