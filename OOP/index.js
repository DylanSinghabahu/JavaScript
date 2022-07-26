let array = ["Hello"];
array.push("How", "Are");
console.log(array);
array.pop();
console.log(array);

var myObj = {
    name:"Dylan"
};

function checkObj(checkProp) {
    if (myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp];
    } 
    
    else {
        return "not found"
    }
}
console.log(myObj.name);
console.log(myObj("hi"));