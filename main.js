var start = 0;
function postFunction()
{

  if(start==0)
  {
    var topic1 = document.getElementById("text1").value;
    document.getElementById("topic1").innerHTML = topic1;
    start++;
  }
  else if (start == 1)
  {  var topic1 = document.getElementById("text1").value;
     document.getElementById("comment1").innerHTML = topic1;
     start++;
  }
  else if (start == 2)
  {
     var topic1 = document.getElementById("text1").value;
     document.getElementById("comment2").innerHTML = topic1;
     start++
  }


if(!topic1)
{
    alert("please insert comment");
    return;
}

}


function clearFunction()
{
  if(start == 3)
  {
   document.getElementById("text1").innerHTML = "";
   document.getElementById("topic1").innerHTML = "";
   document.getElementById("comment1").innerHTML = "";
   document.getElementById("comment2").innerHTML = "";
  }
 
}