//var firebase=firebase.database();
//console.log(firebase);
var counter=0;

$(document).ready(()=>{
   accessCounter();
   accessData();
  $('#searchForm').on('submit',(e)=>
{
  var name=$('#sname').val();
  var msg=$('#smsg').val();
  e.preventDefault();
  if(name!=''&&msg!='')
  {
     submitOnline(name,msg);

  }
  else
    alert("Fucker type some value");

})
});

function accessCounter()
{
  var y=firebase.database().ref('shubham-with-udaan');
  y.on('value',getdata,error);

}
function getdata(data)
{

  var alldata=data.val();
  if (alldata==null)
     counter=0;
  else{
  var keys=Object.keys(alldata);

  counter=keys.length;
  console.log("Counter=",counter);
}
}
function error(err)
{
  console.log(err);
}
function submitOnline(name,msg)
{
  console.log(name);
  console.log(msg);
  var x=firebase.database().ref('shubham-with-udaan');
  console.log(x);
  var data = {
    name : name,
    message : msg,
  }
  console.log("Access counter started");
   accessCounter();
   console.log("Access counter started");
  x.child(counter).set(data);
  console.log(counter);
  accessData();
}

function accessData()
{
    var x=firebase.database().ref('shubham-with-udaan');
    x.on('value',show,error);
}
function show(data)
{
  console.log(data.val());
  if(data.val()==null)
      counter=0;
  else
  {
      var alldata=data.val();
      var keys=Object.keys(alldata);
      var op=``;
      for(var i=0;i<keys.length;i++)
      {
        op+=`<h4 style="color:black;text-align:left"><b>${alldata[i].name} :</b> <h4><h2 style="color:blue;text-align:right">${alldata[i].message}</h3> <hr /> `;
      }
  }
  $('#id').html(op);
}
function error(err)
{
  console.log(err);
}
