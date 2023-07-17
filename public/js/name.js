document.getElementById("wyslij").onclick = () => {
    var nameElement = document.getElementById("name");
    var nameText = nameElement.value;
    window.location = `/user/${nameText}`
}