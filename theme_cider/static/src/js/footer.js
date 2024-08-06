/** @odoo-module **/

import publicWidget from "@web/legacy/js/public/public_widget"

let Dynamic = publicWidget.Widget.extend({
  selector: ".cider_topfooter",
  init() {
    this._super(...arguments)
    // this.rpc = this
  },
  
  // updateIndex(ev) {},
  start: function () {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    // const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
  
  },
  destroy:function(){

  }
})
publicWidget.registry.footer = Dynamic

return Dynamic

