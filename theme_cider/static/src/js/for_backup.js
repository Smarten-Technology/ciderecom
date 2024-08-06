/* @odoo-module */

import publicWidget from "@web/legacy/js/public/public_widget"
import { renderToElement } from "@web/core/utils/render"
import { markup } from "@odoo/owl"
import { _t } from "@web/core/l10n/translation"
import wSaleUtils from "@website_sale/js/website_sale_utils"
import VariantMixin from "@website_sale/js/sale_variant_mixin"

// import ProductComparison from "@website_sale_comparison/js/website_sale_comparison"

const TPProductGrids = publicWidget.Widget.extend(VariantMixin, {
  selector: ".oe_sider_product_item",
  template: "s_d_products_grid_tmpl",
  disabledInEditableMode: false,
  noDataTemplate: "droggol_default_no_data_templ",
  noDataTemplateImg: "/theme_smarten_ecom/static/src/img/no_data.svg",
  displayAllProductsBtn: true,
  noDataTemplateString: _t("No product found"),
  noDataTemplateSubString: _t("Sorry, this product is not available right now"),
  events: {
    "click .js_add_cart": "_onClickAddToCartButton",
    // "click .js_add_wishlist": "_onClickAddWishList",
  },
  init() {
    this._super(...arguments)
    this.rpc = this.bindService("rpc")
    this.notification = this.bindService("notification")
    this.data = []
  },

  _isActionEnabled: function (actionName, actions) {
    let allActions = actions || this.uiConfigInfo.activeActions
    return allActions.includes(actionName)
  },

  async _onClickAddToCartButton(ev) {
    const $card = $(ev.currentTarget)
    // console.log($card.data())
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

  async _onClickAddWishList(ev) {
    this._addNewProducts($(ev.currentTarget))
  },

  willStart: async function () {
    // await this._super.apply(this, arguments)
    // const res = await $.get("/shop/wishlist", { count: 1 })
    // this.wishlistProductIDs = JSON.parse(res)
    // sessionStorage.setItem("website_sale_wishlist_product_ids", res)
  },

  async start() {
    let data = []

    try {
      data = JSON.parse(this.el.dataset.productIds)
    } catch (error) {
      data = []
    }

    data = data.map((product) => product.id)
    const result = await this.rpc("/theme_smarten_ecom/get_products_data", {
      domain: [["id", "in", data]],
      fields: ["name", "rating"],
    })

    this.uiConfigInfo = {
      style: "s_card_style_1",
      mode: "grid",
      tabStyle: "tp-droggol-dynamic-snippet-tab-1",
      bestseller: true,
      newArrived: true,
      discount: true,
      activeActions: ["rating", "add_to_cart"],
      model: "product.template",
      ppr: 4,
      limit: 6,
      mobileConfig: { style: "default", mode: "default" },
    }

    this._render_content(
      result.products.map((item) => ({
        ...item,
        price: markup(item.price),
        rating: markup(item.rating),
        compare_list_price: markup(item.compare_list_price),
      }))
    )
  },
  destroy() {
    this.$target.find(".s_d_products_grids").html(`
    <div class="d-flex justify-content-center">  
    <div class="spinner-grow text-primary" role="status">
</div>
      `)

    this._super.apply(this, arguments)
  },

  _addNewProducts: function ($el) {
    var self = this
    var productID = $el.data("product-product-id")
    if ($el.hasClass("o_add_wishlist_dyn")) {
      productID = parseInt(
        $el.closest(".js_product").find(".product_id:checked").val()
      )
    }
    var $form = $el.closest("form")
    var templateId = $form.find(".product_template_id").val()
    // when adding from /shop instead of the product page, need another selector
    if (!templateId) {
      templateId = $el.data("product-template-id")
    }
    $el.prop("disabled", true).addClass("disabled")
    var productReady = this.selectOrCreateProduct(
      $el.closest("form"),
      productID,
      templateId,
      false
    )

    productReady
      .then(function (productId) {
        productId = parseInt(productId, 10)
        if (self.wishlistProductIDs.includes(productId)) {
          return self.notification.add("Item already in wishlist!!")
        }

        if (productId && !self.wishlistProductIDs.includes(productId)) {
          return self
            .rpc("/shop/wishlist/add", {
              product_id: productId,
            })
            .then(function () {
              self.wishlistProductIDs.push(productId)
              sessionStorage.setItem(
                "website_sale_wishlist_product_ids",
                JSON.stringify(self.wishlistProductIDs)
              )
              self._updateWishlistView()
              self.notification.add("Item added to wishlist", {
                type: "success",
              })
              // wSaleUtils.animateClone($navButton, $el.closest("div"), 25, 40)
              // It might happen that onChangeVariant is called at the same time as this function.
              // In this case we need to set the button to disabled again.
              // Do this only if the productID is still the same.
              let currentProductId = $el.data("product-product-id")
              if ($el.hasClass("o_add_wishlist_dyn")) {
                currentProductId = parseInt(
                  $el.closest(".js_product").find(".product_id:checked").val()
                )
              }

              if (productId === currentProductId) {
                $el.prop("disabled", true).addClass("disabled")
              }
            })
            .catch(function (e) {
              $el.prop("disabled", false).removeClass("disabled")
            })
        }
      })
      .catch(function (e) {
        $el.prop("disabled", false).removeClass("disabled")
      })
  },
  _updateWishlistView() {
    const $wishButton = $(".o_wsale_my_wish")
    if ($wishButton.hasClass("o_wsale_my_wish_hide_empty")) {
      $wishButton.toggleClass("d-none", !this.wishlistProductIDs.length)
    }
    $wishButton.find(".my_wish_quantity").text(this.wishlistProductIDs.length)
  },
  _render_content: function (data) {
    const content = renderToElement(this.template, {
      widget: this,
      data: data,
    })
    this.$target.find(".s_d_products_grids").html(content)
  },
})

publicWidget.registry.add_to_cart_btn = TPProductGrids

export default TPProductGrids