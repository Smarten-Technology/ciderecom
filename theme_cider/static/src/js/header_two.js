/** @odoo-module **/

import publicWidget from "@web/legacy/js/public/public_widget"

let Dynamic = publicWidget.Widget.extend({
  selector: ".ciderheader_two",
  init() {
    this._super(...arguments)
    // this.rpc = this
  },


  // updateIndex(ev) {},
  start: function () {

const wrap = document.getElementById("wrapwrap");
let lastScroll = 0;
const header = document.querySelector(".topheader");
const preheader = document.querySelector(".pre_header");
const preheaderbtn = document.querySelector(".pre_header_hbtn");
const left_icons_down = document.querySelector(".left_icons_down");
// navone.classList.remove("hideandshow")
// navtwo.classList.remove("hideandshow")
left_icons_down.classList.remove("slideup");


wrap.addEventListener('scroll', () => {
    const currentScroll = wrap.scrollTop; 
    // console.log("window.scrollY", window.scrollY);  
  
    // console.log(currentScroll)
    if (currentScroll <= 0) {
        header.classList.remove("scroll-up");
    }
    if(currentScroll >= 126){
        preheader.style.display ="none";
        if (currentScroll > lastScroll) {
            header.classList.add("scroll-up");
            left_icons_down.classList.add("slideup");
            header.classList.remove("scroll-down");
          
    
        } else {
            header.classList.remove("scroll-up");
            header.classList.add("scroll-down");
            left_icons_down.classList.remove("slideup");
        }
    }
    if(currentScroll <= 5){
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



s