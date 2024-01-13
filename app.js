const items = document.querySelector("#items")
const toDoBox = document.querySelector("#to-do-box")

items.addEventListener(
    "keyup",
    function(event) {
        if (event.key == "Enter") {
            addToDo(this.value)
            this.value = " "
        }
    }
)

const addToDo = (items) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
         ${items}
        <i class="fa-solid fa-trash"></i> `;

    listItem.addEventListener(
        "click",
        function() {
            this.classList.toggle("done");
        }
    )
    listItem.querySelector("i").addEventListener(
        "click",
        function() {
            listItem.remove()
        }
    )
    toDoBox.appendChild(listItem)
}