import React, {useState} from "react";

function ContactModal(){
const [isActive, setActive] = useState(true);
let el1 = document.getElementById("open1");
let el2 = document.getElementById("close1");
let c1 = document.querySelector('.contact1');

function ToggleClass(){
console.log('gohar');

if(isActive === true){
  setActive(false);
  el1.style.display = "none";
  el2.style.display = "block";
  c1.classList.remove('contact1');
  c1.classList.add('contact2');
}else{
  setActive(true);
  el1.style.display = "block";
  el2.style.display = "none";
  c1.classList.remove('contact2');
  c1.classList.add('contact1');
}
}

return(
<div className={isActive ? "contact1" : "contact2"}>
  <div id="open1" onClick={ToggleClass}><i className="fa fa-pencil"></i></div>
  <div id="close1" onClick={ToggleClass}>
    <section>
    <div className="container">
    <div className="row">
    <div className="col-md-12">
    <form>
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="submit" value="SEND" />
    </form>
  </div>
  </div>
  </div>
  </section>
  <button><i className="fa fa-times"></i></button>
  </div>
</div>

);
}
export default ContactModal;