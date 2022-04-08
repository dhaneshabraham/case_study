
function home(){
    location.href="./main.html"

}
function eval(uname,psd,callback){
// alert(uname+'  '+psd)
var y=document.querySelector("#errlabel"); 
if(uname=="" ||psd=="") 
    {
        y.innerHTML="fields cannot left empty";
    }       
    else
    {   
        if (!(uname=='admin'))
        {            
            y.innerHTML="Invalid Username";
            document.getElementById('user_hint').hidden=false;
        }   
        else if(!(psd=='12345'))
        {
            y.innerHTML="Invalid password ";
            document.getElementById('pass_hint').hidden=false;
        }   
        else    callback();
    }

}
document.getElementById("loginbtn").addEventListener("click",function ()
{
    var input1=document.getElementsByClassName("input1");
    var un=input1[0].value;
    var ps=input1[1].value;
    eval(un,ps,home);    
})

// clear error label
function hideLabel()
    {
        document.getElementById('errlabel').innerHTML= "";
        document.getElementById('pass_hint').hidden=true;
        document.getElementById('user_hint').hidden=true;

    }
