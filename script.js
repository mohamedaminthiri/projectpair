              
			 var students=[{
			 	fullname:"yosef",
			 	email:"tay@gmail.com",
			 	password:12435,
			 	tel:21365478,
			 	inscriptionnumber:147258


			 },
             {
              fullname:"mohamed amine kthiri",
			 	email:"medaminkth@gmail.com",
			 	password:12345,
			 	tel:23461170,
			 	inscriptionnumber:147257


             }

			 ]

var projects= [{
		name:"project bootsrap",
		taskes:[{
				name: "Planning",
				datestart:03/10/2020,
				datefinish: 07/10/2020
				
			},
			{
				name: "Design and Prototyping",
				datestart:03/10/2020,
				datefinish: 07/10/2020
				
			},
			{
				
				name: "Evaluation Meeting",
				datestart:03/10/2020,
				datefinish: 07/10/2020
				
			},
			{
				name: "Application Development",
				datestart:03/10/2020,
				datefinish: 07/10/2020
				
			},
			{	
				name: "Testing",
				datestart:03/10/2020,
				datefinish: 07/10/2020
				
			},
			{
				name: "Deployment",
				datestart:03/10/2020,
				datefinish: 07/10/2020		
			},
			{
				name: "Maintenance",
				datestart:03/10/2020,
				datefinish: 07/10/2020

			}
		]
	}]
    

localStorage.setItem("fullname","mohamed amine kthiri");
var transcripts=[{fullname:"mohamed amine kthiri",courses:[{title:"javascript",note:12.5,coef:1.5},
{title:"data base",note:12.5,coef:1.5},{title:"Angular",note:12.5,coef:1.5},
{title:"Mango DB",note:12.5,coef:1.5},{title:"C++",note:12.5,coef:3},{title:"JAVA",note:19,coef:1.5},
{title:"programmation OOP",note:16,coef:1.5},
{title:"Network",note:12.5,coef:1.5},
{title:"security",note:12.5,coef:1.5},
{title:"algorithm",note:12.5,coef:3}]}]
var chekpoints=[{fullname:"yosef",email:"tay@gmail.com",response:['ok','ok','ok'],date:'20/10/2020'}]
function makeExam(fullname,email,response,date){
	return {

fullname:fullname,
email:email,
response:response,
date:date
}
	
}

function makeTaskes(nametaske,dateestart,dateefinish){
	var storage = {};
	storage.name=nametaske;
	storage.datestart=dateestart;
	storage.datefinish=dateefinish;
	return storage

}

function makeProject(title,taskes){
	var obj={}
	obj.title=title
	obj.taskes=taskes
	return obj
}
var taskes=[]


$("#sabtask").click(function(){
if($("#user1").val() === "" || $("#user2").val() === "" || $("#user3").val() === "" || $("#user4").val() === "" || $("#user5").val() === "" || $("#user6").val() === "" || $("#user7").val() === ""
	|| $("#user8").val() === "" || $("#user9").val() === "" || $("#user10").val() === "" || $("#user11").val() === "" || $("#user12").val() === "" || $("#user13").val() === "" || $("#user14").val() === ""){
	window.alert("empty, please enter your info")
}else{

var task1=makeTaskes("Planning",$("#user1").val(),$("#user2").val());
var task2=makeTaskes("Design and Prototyping",$("#user3").val(),$("#user4").val());
var task3=makeTaskes("Evaluation Meeting",$("#user5").val(),$("#user6").val());
var task4=makeTaskes("Application Development",$("#user7").val(),$("#user8").val());
var task5=makeTaskes("Testing",$("#user9").val(),$("#user10").val());
var task6=makeTaskes("Deployment",$("#user11").val(),$("#user12").val());
var task7=makeTaskes("Maintenance",$("#user13").val(),$("#user14").val());
taskes.push(task1,task2,task3,task4,task5,task6,task7)
var project=makeProject($("#user").val(),taskes)
projects.push(project)
	window.alert("submit done")
	
}

})

			
$("#bchekpoint").click(function(){
if($("#emailexam").val() === "" || $("#fullnameexam").val() === ""){
	window.alert("empty, please enter your info")
}else{
	var rep=[]
	rep.push($('input:radio[name=question1]:checked').val(),$('input:radio[name=question2]:checked').val(),$('input:radio[name=question3]:checked').val())
	$('input:radio[name=question1]:checked').val();
	var date=new Date().toDateString()
var chek=makeExam($("#fullnameexam").val(),$("#emailexam").val(),rep,date)
	chekpoints.push(chek)
	window.alert("submit done")
}

})

			var lecture=[{NameofTeacher:"amin",module:"developpement",url:".\src\1.mp4"},
			{NameofTeacher:"amin",module:"developpement",url:".\src\1.mp4",date:"20/10/2020"},
			{NameofTeacher:"amin",module:"developpement",url:".\src\1.mp4",date:"20/10/2020"},
			{NameofTeacher:"amin",module:"developpement",url:".\src\1.mp4",date:"20/10/2020"},
			{NameofTeacher:"amin",module:"developpement",url:".\src\1.mp4",date:"20/10/2020"},
			{NameofTeacher:"amin",module:"developpement",url:".\src\1.mp4",date:"20/10/2020"},
			{NameofTeacher:"amin",module:"developpement",url:".\src\1.mp4",date:"20/10/2020"},
			{NameofTeacher:"amin",module:"developpement",url:".\src\1.pdf",date:"20/10/2020"},
			{NameofTeacher:"amin",module:"developpement",url:".\src\1.pdf",date:"20/10/2020"},
			{NameofTeacher:"amin",module:"developpement",url:".\src\1.pdf",date:"20/10/2020"},
			{NameofTeacher:"amin",module:"developpement",url:".\src\1.pdf",date:"20/10/2020"},
			{NameofTeacher:"amin",module:"developpement",url:".\src\1.pdf",date:"20/10/2020"}
			];
function makestudent(namestudent,email,password,phone,inscriptionnumber){
	return {
		fullname:namestudent,
			 	email:email,
			 	password:password,
			 	tel:phone,
			 	inscriptionnumber:inscriptionnumber

	}
}
			    $(".spinner").click(function(){
			    window.close()
			     window.open("index.html")
			    })

			    $("#btn1").click(function(){
			    if(($("#user").val() === "") || ($("#pass").val() === "")){
			      window.alert("empty, please enter your info")
			} else{
			    	var count=0; 
			    for(var i=0;i<students.length;i++){
		
			 if(students[i]["email"] === $("#user").val() && students[i]["password"] === Number($("#pass").val())){
			          count++;

}	
			}
			if(count>0){
				window.close()
				window.open("courses.html")

				
             
			}else{
				window.alert("wrong information!!!!")
			}
		}
			    })

 $("#regis").click(function(){
if($("#full").val() === "" || $("#poste").val() === "" || $("#mot").val() === "" ||
 $("#mot2").val() === "" || $("#num").val() === ""|| $("#numinscrit").val() === ""){
			      window.alert("empty, please enter your info")
			} else{
		
			 if(($("#mot").val()) !== ($("#mot2").val())){
			   window.alert("wrong password")
      	             
}else{
		var student=makestudent($("#full").val(),$("#poste").val(),Number($("#mot").val()),Number($("#num").val()),Number($("#numinscrit").val()))
        students.push(student)
        window.alert("registration done")     
			
   	}
}


   })


			 

			


