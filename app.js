const increment = document.querySelector("#increment");
const reset = document.querySelector("#reset");
const decrement = document.querySelector("#decrement")
const text = document.querySelector("#text");
let count = 0;


increment.addEventListener("click", () => {
    count++;
    text.innerHTML = count
});

reset.addEventListener("click", () => {
    count = 0;
    text.innerHTML = count;
});

decrement.addEventListener("click",() => {
    if(count > 0) {
        count--;
        text.innerHTML = count;
    }
})
