
const todos = 
[{
  title:'Get Groceries',
  date:'07-25-2022'
}, {
  title:'Wash Car',
  date:'08-25-2022'
}, {
  title: 'Make Dinner',
  date:'09-24-2022'
}];


render();

function clickAction() {
    const textbox = document.getElementById('todo-title');
    const theTitle = textbox.value;

    const datePicker = document.getElementById('date');
    const theDate = datePicker.value;
    todos.push({
      title: theTitle,
      date:theDate
    });
    console.log(todos);

    render();
}

function render() {
    document.getElementById("todo-list").innerHTML="";

    todos.forEach(function(object) {
        let element = document.createElement('div');
        element.innerText = object.title + ' ' + object.date;
        const todoList = document.getElementById('todo-list');
        todoList.appendChild(element);
    });
}


/////////////////////SECTION 8 EXERCISE/////////////////
//
//
// function secondAction() {
//     let button = document.getElementById('todo-button');
//     button.innerText = "done";
// }
//
// let value = 0;

// function increase() {
//     let number = document.getElementById('counter');
//     number.innerText=value++;
// }

// function decrease() {
//     let number = document.getElementById('counter');
//     number.innerText=value--;
// }
//
//
// function placer() {
//     let content = document.getElementById('textbox');
//     let spawn = content.value;
//     div = document.createElement('div');
//     div.innerText = spawn;
//     document.body.appendChild(div);
// }

/////////////////////////////////////////////////////////


/////////////////////SECTION 9 EXERCISE/////////////////
// const cart = document.getElementById('cart');
//
// function generator(food) {
//   let cartItem = document.createElement('div');
//   cartItem.innerText=food;
//   cart.appendChild(cartItem);
// }
//
//
// function cleared() {
//   cart.innerHTML="";
// }
//
//
/////////////////////////////////////////////////////////
//
//
// function capitalised(array) {
//     let arrays = [];
//     array.forEach(function (stuff) {
//         arrays.push(stuff.toUpperCase());
//     })
//     console.log(arrays);
// };
// capitalised(['i went','to the','store']);
//
//
// function toUpper(stringArr) {
//     let result = [];
//
//     stringArr.forEach(function (str) {
//       result.push(str.toUpperCase());
//     });
//    
//     console.log(result);
//   }
//
//   toUpper(['hello', 'world']);
//
//   function arraySum(numArray) {
//     let total = 0;
//  
//     numArray.forEach(function (num) {
//       total = total + num;
//     });
//
//     console.log(total);
//   }
//   arraySum([1, 2, 3]);
//   arraySum([5, -2, 7, 0]);
//
//////////////////////////////////////////////////////////
