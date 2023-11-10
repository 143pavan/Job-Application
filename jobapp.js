document.getElementById("name").onkeypress=function(fna){
  let ch=fna.which;
  console.log(ch);
if(!((ch>=65&&ch<=90)||(ch>=97&&ch<=122)||(ch===32)))
   fna.preventDefault();
}
document.getElementById("sname").onkeypress=function(sna){
  let ch=sna.which;
  console.log(ch);
if(!((ch>=65&&ch<=90)||(ch>=97&&ch<=122)||(ch===32)))
   sna.preventDefault();
}
document.getElementById("email").onkeypress=function(em){
  let ch=em.which;
  console.log(ch);
if(!((ch>=65&&ch<=90)||(ch>=97&&ch<=122)||(ch===32)||(ch>=48&&ch<=57)))
   fna.preventDefault();
}
document.getElementById("state").onkeypress=function(state){
  let ch=state.which;
  console.log(ch);
if(!((ch>=65&&ch<=90)||(ch>=97&&ch<=122)||(ch===32)))
   state.preventDefault();
}
document.getElementById("phone").onkeypress=function(phone){
  let ch=phone.which;
  console.log(ch);
  if(!(ch>=48&&ch<=57)){
    phone.preventDefault();
  }
}