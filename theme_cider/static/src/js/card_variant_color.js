/** @odoo-module **/

import publicWidget from "@web/legacy/js/public/public_widget";

let Dynamic = publicWidget.Widget.extend({
  selector: ".product_color_variant, .card",

  events: {
    "click .color_item": "colorVariantChange",
    "mouseover .color_item": "colorVariantChange",
  },

  async colorVariantChange(ev) {
    const colorItem = ev.currentTarget;
    const colorImage = colorItem.getAttribute('data-img');
    const mainImage = this.el.querySelector(".card .card_image img");

    if (mainImage && colorImage) {
      mainImage.src = colorImage;
    }
  },

  start: function () {
    let self = this;
  },

  destroy: function () {
  },
});

publicWidget.registry.card_variant_color = Dynamic;

export default Dynamic;
