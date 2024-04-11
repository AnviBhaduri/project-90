function newPage(){
    name1 = document.getElementById("user1").value;
    name2 = document.getElementById("user2").value;
    localStorage.setItem("name1" , name1);
    localStorage.setItem("name2" , name2);
    window.location = "page2.html";  
}