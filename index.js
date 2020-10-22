function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username == "admin" && password == "1234"){
        alert("Амжилттай нэвтэрч орлоо");
        //window.location="1.html";
        
        location="1.html";
    }
    else{
        alert("Хэрэглэгчийн нэр эсвэл нууц үг буруу байна");
    }
}

document.getElementById("d").innerHTML=gg;
