var stats = document.querySelector("h5")
var addFriend = document.querySelector("#add")
var check = 0

addFriend.addEventListener("click", function(){
    if(check == 0) {
        stats.innerHTML = "Friend"
        stats.style.color = "green"
        addFriend.innerHTML = "Remove friend"
        addFriend.style.color = "#111"
        addFriend.style.backgroundColor = "#dadada"
        check = 1
    }
    else {
        stats.innerHTML = "Stranger"
        stats.style.color = "red"
        addFriend.innerHTML = "Add friend"
        addFriend.style.color = "white"
        addFriend.style.backgroundColor = "cadetblue"
        check = 0
    }

})