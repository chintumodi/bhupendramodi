
// Start now
// Navbar
let bar = document.getElementsByClassName('menubar')
let nav = document.getElementById('navbar')

if (bar) {
   function mybar() {
      nav.classList.toggle('activenow')

   }

}
// Form validation 
function validation(){
   var user = document.getElementById('username').value;
   var email = document.getElementById('email').value;
   var sub = document.getElementById('subject').value;
   var msg = document.getElementById('msg').value;
   
   var user = user.trim()
   var email = email.trim()
   var sub =  sub.trim()
   var msg = msg.trim()




// username validation

  if(user == ""){
   document.getElementById('userid').innerHTML = "** plz enter username"
   return false;
  }

  if((user.length<3) ||(user.length>20) ){
   document.getElementById('userid').innerHTML = "** plz fill the username between 3 to 20 "
   return false;
  }

if(!isNaN(user)){
   document.getElementById('userid').innerHTML = "** plz enter characther "
   return false;
}
  
//  email validation
if(email == ""){
   document.getElementById('emailid').innerHTML = "** plz enter email"
   return false;
}


if(email.indexOf('@')<=0){
document.getElementById('emailid').innerHTML = "** invalidate number"
return false;
}

if((email.charAt(email.length-4)!='.') && (email.charAt(email.length-3)!='.')) {
document.getElementById('emailid').innerHTML = "** invialid positon";
return false;
}

if(email == ""){
document.getElementById('emailid').innerHTML = "** plz enter email"
return false;
}
// subject validation

  if( sub == ""){
   document.getElementById('subjectid').innerHTML = "** plz enter your subject"
   return false;
  }

  if((sub.length<3) ||(sub.length>20) ){
   document.getElementById('subjectid').innerHTML = "** plz enter the subject under 3 to 20 "
   return false;
  }
  
// text area validation
if(msg == ""){
   document.getElementById('msgid').innerHTML = "** plz enter your message"
   return false;
}
if((msg.length<3) ||(msg.length>20) ){
   document.getElementById('subjectid').innerHTML = "** plz enter the messsage under 3 to 20 words "
   return false;
  }
  else{
   alert("your form successfully submited")
  }
}