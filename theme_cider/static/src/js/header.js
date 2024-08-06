/** @odoo-module **/

import publicWidget from "@web/legacy/js/public/public_widget"

let Dynamic = publicWidget.Widget.extend({
  selector: ".ciderheader",
  init() {
    this._super(...arguments)
    // this.rpc = this
  },


  // updateIndex(ev) {},
  start: function () {

const wrap = document.getElementById("wrapwrap");
let lastScroll = 0;
const header = document.querySelector(".topheader");
const navone = document.querySelector(".nav_show_one")
const navtwo = document.querySelector(".nav_show_two");
const preheader = document.querySelector(".pre_header");
const preheaderbtn = document.querySelector(".pre_header_hbtn");
// navone.classList.remove("hideandshow")
// navtwo.classList.remove("hideandshow")


wrap.addEventListener('scroll', () => {
    const currentScroll = wrap.scrollTop; 
    // console.log("window.scrollY", window.scrollY);  
  
    console.log(currentScroll)
    if (currentScroll <= 0) {
        header.classList.remove("scroll-up");
    }
    if(currentScroll >= 116){
        preheader.style.display ="none";
        if (currentScroll > lastScroll) {
            header.classList.add("scroll-up");
            header.classList.remove("scroll-down");
            console.log("scroll_up")
            navone.classList.add("hideandshow")
            navtwo.classList.add("hideandshow")
          
         
        } else {
            header.classList.remove("scroll-up");
            header.classList.add("scroll-down");
            navone.classList.remove("hideandshow")
            navtwo.classList.remove("hideandshow")
        }
    }
    if(currentScroll <= 10){
        preheader.style.display ="";
    }
    lastScroll = currentScroll; 
});
preheaderbtn.addEventListener('click', ()=>{
    preheader.style.height = "0px";
    preheader.style.display = "none";
    preheader.style.opacity = "0";
    preheader.style.visibility = "hidden";
})
  
  },
  destroy:function(){

  }
})
publicWidget.registry.ciderheader = Dynamic

return Dynamic



