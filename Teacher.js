//function getData() {
    //alert("Your annoucement has been sended");
//}

var i = 0
var	tGrade = [];
var tGender = [];
var tClubs = [];
var text = [];

function saveData(){  
    
    tGrade[i] = document.getElementById("tGrade").value;
    //var TeacherGrade = tGrade.options[tGrade.selectedIndex].value;
    tGender[i] = document.getElementById("tGender").value;
    //var TeacherGender = tGender.option[tGender.selectedIndex].value;
    tClubs[i] = document.getElementById("tClubs").value;
    //var TeacherClubs = tClubs.options[tClubs.selectedIndex].value;
    text[i] = document.getElementById("text").value;
    i++
    
    
    localStorage.setItem("StoreTeacherGrade", JSON.stringify (tGrade));
    localStorage.setItem("StoreTeacherGender", JSON.stringify (tGender));
    localStorage.setItem("StoreTeacherClubs", JSON.stringify (tClubs));
    localStorage.setItem("StoreText", JSON.stringify(text));
    //localStorage.clear()
    
    alert(tGrade + " " + tGender + " " + tClubs + " " + text);  
}

//function GetExistingAnnoucement(){
	//if(JSON.parse(localStorage.getItem("StoreTeacherGrade"))!=null){
		
		//text = JSON.parse(localStorage.getItem("StoreText"));
		//tClubs = JSON.parse(localStorage.getItem("StoreTeacherClubs"));
		//tGender = JSON.parse(localStorage.getItem("StoreTeacherGender"));
		//tGrade = JSON.parse(localStorage.getItem("StoreTeacherGrade"));
		
		//i=tGrade.length;

