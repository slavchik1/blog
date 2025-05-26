let posts = {
    "post-1": "QWERTY1",
    "post-2": "QWERTY2",
    "post-3": "QWERTY3"
}
const add_button = document.getElementById("add_button")
const add_post = document.getElementById("add_post")

console.log(posts)

fetch("http://localhost:8000").then((response) => {
    console.log(response)
})

add_post.addEventListener("submit", (e) => {
    e.preventDefault()
    posts["post-4"] = e.target.value
    console.log(e.target.textarea.value)
})
