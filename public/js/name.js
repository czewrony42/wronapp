document.getElementById("wyslij").onclick(()=>{
    let name = document.getElementById("name").innerText
    window.location = "/user/" + name
})