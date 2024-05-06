let sumbitButton = document.querySelector(".taste-button");
let button = document.querySelector(".button");
let ageNumber = document.querySelector("age");
let result = document.querySelector(".result");
let numberTwo = document.querySelector(".age");
//
button.onclick = function() {
    let taste = document.querySelector(".taste").value;
    let number = document.querySelector(".age").value;
    if (number < 50 && taste === "spicy") {
        result.innerHTML = "<img src=https://m.media-amazon.com/images/I/719xxva4LqL._AC_UF894,1000_QL80_.jpg> <br><em>You are Takis!</em>";
    } else if (number > 50 && taste === "spicy") {
        result.innerHTML = "<img src=https://target.scene7.com/is/image/Target/GUEST_9890f880-20fc-4f94-b325-c1c6875327ad?wid=488&hei=488&fmt=pjpeg> <br> <em> You are Hot cheetos!</em>";
    } else if (number < 50 && taste === "sour") {
        result.innerHTML = "<img src=https://target.scene7.com/is/image/Target/GUEST_f0a73791-4f47-4af4-9d80-3b5468d4eccb?wid=488&hei=488&fmt=pjpeg <br> <em> You are Lemon Lays! </em>";
    } else if (number > 50 && taste === "sour") {
        result.innerHTML = "<img src=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhQI28i2XIGxOBKvVcRt9QW_2ODeJQoSav31vQTK8no-pw9U2tGOCUOgnDLSo0LkCgMHk&usqp=CAU<br> <em> You are Lays! </em>";
    }

};