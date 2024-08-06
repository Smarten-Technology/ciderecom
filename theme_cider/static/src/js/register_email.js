/** @odoo-module **/

import publicWidget from "@web/legacy/js/public/public_widget"

let Dynamic = publicWidget.Widget.extend({
  selector: ".register_email",
  init() {
    this._super(...arguments)
    // this.rpc = this
  },
  // updateIndex(ev) {},
  start: function () {
   const self = this
   const register = document.querySelectorAll(".register_email");
   register.forEach((ev)=>{

    const register_email = self.el.querySelector(".register_email_input");
    const register_btn = self.el.querySelector(".register_email_btn");

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    register_email.addEventListener('input', () => {
        if (emailPattern.test(register_email.value)) {
            console.log("match");
            register_btn.removeAttribute("disabled");
        } else {
            console.log("didn't match");
            register_btn.setAttribute("disabled", "disabled");
        }
    });
   })

  
  
  },
  destroy:function(){

  }
})
publicWidget.registry.register_email = Dynamic

return Dynamic



