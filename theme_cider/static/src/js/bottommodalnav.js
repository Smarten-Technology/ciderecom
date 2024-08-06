/** @odoo-module **/

import publicWidget from "@web/legacy/js/public/public_widget";

let Dynamic = publicWidget.Widget.extend({
  selector: ".bottom_fixed",
  init() {
    this._super(...arguments);
    // this.rpc = this
  },

  start: function () {
    const wrapwrap = document.getElementById("wrapwrap");
    let lastScroll = 0;
    const footer = document.querySelector("#footer");
    const bottommodalnav = document.querySelector(".bottom_fixed");

    wrapwrap.addEventListener("scroll", () => {
      const screenheight = window.innerHeight;
      const currentScroll = wrapwrap.scrollTop;
     
      if (currentScroll > footer.offsetTop - screenheight) {
        bottommodalnav.classList.add("d-none");
   
      } else {
        bottommodalnav.classList.remove("d-none");
       }
      lastScroll = currentScroll;
    });
  },
  destroy: function () {},
});
publicWidget.registry.bottommodalnav = Dynamic;

return Dynamic;
