/** @odoo-module **/

import publicWidget from "@web/legacy/js/public/public_widget"

let Dynamic = publicWidget.Widget.extend({
  selector: ".cidergang_carousel",
  init() {
    this._super(...arguments)
    // this.rpc = this
  },


  // updateIndex(ev) {},
  start: function () {

    $('.owl-carousel-cidergang').owlCarousel({
        loop: true,
        nav:false,
        margin: 10,
        responsive: {
  
          0: {
            items: 2,
            slideBy: 2
  
          },
  
          786: {
            items: 3,
            slideBy: 3,
  
          },
  
          992: {
            items: 5,
            slideBy: 5
          }
        },
        

      })
  
  },
  destroy:function(){

  }
})
publicWidget.registry.cidergangcarousel = Dynamic

return Dynamic

