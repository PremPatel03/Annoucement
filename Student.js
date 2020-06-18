var tGrade=[];
var tGender=[];
var tClubs=[]; 
var tDetails=[];
var text=[];

function DisplayAnnoucements(){
	// teacher data from local storage and JSON parse the data
 var tGrade = JSON.parse(localStorage.getItem("StoreTeacherGrade");
 var tGender = JSON.parse(localStorage.getItem("StoreTeacherGender");
 var tClubs = JSON.parse(localStorage.getItem("StoreTeacherClubs");
						 
	// Student Data from local Storage
 var sGender = localStorage.getItem("StoreStudentGender");
var sGrade = localStorage.getItem("StoreStudentGrade");
 var sClubs = localStorage.getItem("StoreStudentClubs");
	var announcementTextHolder = ""
	


//loop to have multiple annoucements
for(i=0;i<Tdetails.length;i++){
if (TGrade[i] == SGrade && TGender[i] == SGender && TClubs[i] == SClubs){
    
       announcementTextHolder += text[i];
} 
	else{
		document.location.href= "NoAnnce.html";
	
}
    document.getElementById("Details").innerHTML = announcementTextHolder
}}



//((tGrade[i] == Sgrade || Tgrade[i] == "All") && (Tgender[i] == Sgender || Tgender[i] == "All") && (Tclubs[i] == Sclubs || Tclubs[i] == "All")) {
   //textHolder += tTitle[i] + '<br>' + tDetails[i] + '<br>' + '<br>';
