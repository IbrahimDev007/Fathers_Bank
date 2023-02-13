document.getElementById("btn-submit").addEventListener('click',function (event) {
   mail=document.getElementById('emailField').value;
   pass=document.getElementById('passField').value;
   if(mail ==="sons@mail.com" && pass === "1234"){

   }
   else if(mail === " "&& mail ===""){
    alert("dont use empty string")
   }
   else {
    alert("your varification faild")
   }
})