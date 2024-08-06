/* @odoo-module */

import publicWidget from "@web/legacy/js/public/public_widget"
import wSaleUtils from "@website_sale/js/website_sale_utils"
import VariantMixin from "@website_sale/js/sale_variant_mixin"

const TPProductGrids = publicWidget.Widget.extend(VariantMixin, {
  selector: ".oe_sider_product_item",
  events: {
    "click .js_add_cart": "_onClickAddToCartButton",
  },
  init() {
    this._super(...arguments)
    this.rpc = this.bindService("rpc")
    this.notification = this.bindService("notification")
  },
  async _onClickAddToCartButton(ev) {
    const $card = $(ev.currentTarget)
    const data = await this.rpc("/shop/cart/update_json", {
      product_id: $card.data("product"),
      add_qty: 1,
      display: false,
    })
    wSaleUtils.updateCartNavBar(data)
    wSaleUtils.showCartNotification(
      this.call.bind(this),
      data.notification_info
    )
    if (this.add2cartRerender) {
      this.trigger_up("widgets_start_request", {
        $target: this.$el.closest(".s_dynamic"),
      })
    }
  },
})

publicWidget.registry.add_to_cart_btn = TPProductGrids

export default TPProductGrids
