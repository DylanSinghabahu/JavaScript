
let todos = 
[{
  title:'Get Groceries',
  date:'2022-07-22',
  id:"1"
}, {
  title:'Wash Car',
  date:'2022-08-25',
  id:"2"
}, {
  title: 'Make Dinner',
  date:'2022-09-24',
  id:"3"
}];


render();

function clickAction() {
    const textbox = document.getElementById('todo-title');
    const theTitle = textbox.value;

    const datePicker = document.getElementById('date');
    const theDate = datePicker.value;
    
    const theId = new Date().getTime();

    todos.push({
      title: theTitle,
      date: theDate,
      id: theId,
    });
    console.log(todos);

    render();
}

function deleteFunction(event) {
  console.log(event);
  const buttonClicked = event.target;
  const idToDelete = buttonClicked.id;
  todos = todos.filter(function (todos) {
    if (todos.id + '' === idToDelete) {
      return false;
    }
    else {
      return true;
    }
  })
  render();
}

function render() {
    document.getElementById("todo-list").innerHTML="";

    todos.forEach(function(object) {

        let element = document.createElement('div');
        element.innerText = object.title + ' ' + object.date;
        const todoList = document.getElementById('todo-list');
        todoList.appendChild(element);
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.style = 'margin-left:12px;'
        deleteButton.onclick= deleteFunction;
        deleteButton.id = object.id;
        element.appendChild(deleteButton);
    });
}

function reset() {
  document.getElementById('todo-list').innerHTML="";
  for (let i = todos.length; i >= 0; i--) {
    todos.pop();
  }
  render();
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
//
//                      SECTION 10
//
// let cartArray = [
//   { name: 'Apple', price: 4, quantity: 2 },
//   { name: 'Orange', price: 3, quantity: 3 }
// ];

//   const receipt = document.getElementById('receipt');

//     receipt.innerHTML = '';

//     cartArray.forEach(function (item) {
//       const receiptLine = document.createElement('div');
//       receiptLine.innerText = item.name + ' $' + item.price + ' * ' + item.quantity;
//       receipt.appendChild(receiptLine);
//     });

//     // You can also calculate the total using just the loop above, but I like
//     // to separate them out so each loop does one thing.
//     let cartTotal = 0;
//     cartArray.forEach(function (item) {
//       cartTotal = cartTotal + item.price * item.quantity;
//     });

//     const totalLine = document.createElement('div');
//     totalLine.innerText = 'Cart total = $' + cartTotal;
//     receipt.appendChild(totalLine);
