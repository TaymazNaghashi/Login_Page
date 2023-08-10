function myfunction(){
    // If both are missing
    if(document.getElementById("user").value==""&&document.getElementById("pass").value==""){
        alert("Pls Enter Your UserName And Password")
        document.getElementById("user").style.backgroundColor="white"
        document.getElementById("pass").style.backgroundColor="white" 
    }
    else{
    // If user and pass are correct
    if(document.getElementById("user").value=="taymaz"&&document.getElementById("pass").value=="1234"){
        document.getElementById("user").style.backgroundColor="#02fe34"
        document.getElementById("pass").style.backgroundColor="#02fe34"
        alert("Welcome!")
    }
    else{
    // If one is missing
    // If user is missing
    if(document.getElementById("user").value==""){
        document.getElementById("pass").style.backgroundColor="white" 
        document.getElementById("user").style.backgroundColor="white"
        alert("Pls Enter Your UserName")
    }
    else{
    // If pass is missing
    if(document.getElementById("pass").value==""){
        document.getElementById("user").style.backgroundColor="white"
        document.getElementById("pass").style.backgroundColor="white" 
        alert("Pls Enter Your Password")   
    }
    else{    
        if(document.getElementById("pass").value=="1234"){
            document.getElementById("pass").style.backgroundColor="#02fe34"
        }
        else{
            document.getElementById("pass").style.backgroundColor="#e80000"
            alert("Your Password is Wrong")
            
        }   
    }
    if(document.getElementById("user").value=="taymaz"){
        document.getElementById("user").style.backgroundColor="#02fe34"  
    }
    else{
    document.getElementById("user").style.backgroundColor="#e80000"
    alert("Your Username is Wrong")   
    }
    }
    }
    }
}  