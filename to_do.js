var toDoList = [];
var startButton = document.getElementById("startApp");


function toDoApp() {
    while (input !== "quit") {
        var input = prompt ("What action would you like to take?"); 
        if (input === "list") {
            console.log("----------")
            toDoList.forEach(function(todo, i) {
                console.log(i + ": " + todo);
            });
            console.log("----------")
        } else if (input === "new") {
        var newToDo = prompt("Enter a new Task");
        toDoList.push(newToDo);
        console.log(toDoList);
        console.log("Item added")
        } else if (input === "delete") {
              var index = prompt("Enter index of item to delete");
              toDoList.splice(index, 1);
              console.log("Item deleted")
          }; 
    };
    console.log("See you next time!")
    return;
};

startButton.addEventListener("click", toDoApp);

