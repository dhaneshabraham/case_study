function call(){   
    // alert('c start')
    var c=5
    // var inputElems = document.getElementsByTagName("input");
    // for (var i = 0; i < inputElems.length; i++)
    // {
    //     c= inputElems[i].addEventListener("click",fn);
    // }
   
    
    // alert('c end'+c)
    return c;
}

function fn()
{   
    alert('count start')
    // var cnt=1;
    // // alert(this.id)
    // for (var i = 0; inputElems[i].id!=this.id; i++)
    // {       
    //     if(inputElems[i].checked==true)
    //     {
    //         cnt++;
    //     }        
    // } 
    // alert('count end')
    // console.log(cnt)
    // return cnt;  
}

function ajaxcall(){
   
    // alert('cb start')
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4 &&this.status==200)
        {
            var resp=JSON.parse(this.responseText);
            var c=''
            for(var i=0;i<resp.length;i++)
            {
                var uid=resp[i].userId
                var ide=resp[i].id
                var tle=resp[i].title
                var cmp=resp[i].completed

                var f=`    User Id : ${uid} Id : ${ide} Title : ${tle}`
                // c+='<li>'+uid+'  '+ide+'  '+cmp+'</li>'


                // dynamic checkboxes
                var checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = 'cb'+i;
                checkbox.className = 'cb';
                if (cmp==true)  checkbox.checked=true
                // if(i==1)    checkbox.checked=true
            
                var label = document.createElement('label')
                // label.htmlFor = 'car '+i;
                label.appendChild(document.createTextNode(f));
            
                var br = document.createElement('br');
            
                var container = document.getElementById('container');
                
                container.appendChild(checkbox);
                container.appendChild(label);
                container.appendChild(br);




                
            }
            
            // document.getElementById('demo').innerHTML=c
        }
    }
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();    
    // setTimeout(function() { count() }, 1000);
    const myPromise = new Promise(function(myResolve, myReject) {
        timer=setTimeout(function(){ myResolve(count()); },1000);
      });
      myPromise.then(function() {
        //  alert('completed')
          });
   
}

function count()
{   var c;
    var inputElems = document.getElementsByTagName("input");
    for (var i = 0; i < inputElems.length; i++)
    {
        c= inputElems[i].addEventListener("click",fn);
    }
    
}
function fn()
{
    var cnt=1;
    // var inputElems = document.getElementsByTagName("input").length;
    var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    // alert(checkboxes.length)
    // for (var i = 0; inputElems[i].id!=this.id; i++)
    // {       
    //     if(inputElems[i].checked==true)
    //     {
    //         cnt++;
    //     }        
    // } 
    if(checkboxes.length>=94)
    {
        alert('Congrats. 5 Tasks have been Successfully Completed')
    }
    
}







// const myPromise = new Promise(function(myResolve, myReject) {
//     timer=setTimeout(function(){ myResolve(print()); },1000);
//   });
  
//   myPromise.then(function(value) {
//     //   console.log('value '+value)
//     if(value>=5){
        
//         alert(' Congrats. 5 Tasks have been Successfully Completed')
//     }
   
//   });