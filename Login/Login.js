var Username,Password;

//Values for the Username and Password and the info

function Login(){
    Username = document.getElementById("Username").value;  
    Password = document.getElementById("Password").value;  

    if (Username == "Teacherlogin" && Password == "12345"){
		document.location.href = "TeacherAnncement.html"; 
    } else {
        alert("Sorry incorrect Password, Please try again ");
    }

}
