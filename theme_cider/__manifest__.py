# -*- coding: utf-8 -*-
{
    'name': "theme_cider",

    'summary': "Cider",

    'description': """
Long description of module's purpose
    """,

    'author': "My Company",
    'website': "https://www.yourcompany.com",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/15.0/odoo/addons/base/data/ir_module_category_data.xml
    # for the full list
    'category': 'Theme/',
    'version': '0.1',

    # any module necessary for this one to work correctly
    'depends': ['base','web_editor','website','website_sale'],

    # always loaded
    'data': [
        # 'security/ir.model.access.csv',
        # 'views/snippets/cider_product_variant.xml', 
         'views/allheaders.xml',
         'views/ciderheader.xml',
         'views/ciderheadertwo.xml',
         'views/ciderheadermobile.xml',
         'views/snippets/mega_menu_one.xml',
         'views/mega_menu.xml',
         'views/snippets/snippets.xml',
         'views/snippets/hp_banner.xml',
         'views/snippets/hp_promo_banner.xml',
         'views/snippets/hp_pickamood.xml',
         'views/snippets/hp_text_carousel.xml',
         'views/snippets/hp_gallery.xml',
         'views/snippets/cidergangcarousel.xml',
         'views/snippets/hp_aboutcider.xml',
         'views/snippets/hp_future.xml',
         'views/snippets/hp_scoop.xml',
         'views/footer.xml',
         'views/ciderfooter.xml',
         'views/snippets/bottommodalnav.xml',
         'views/snippets/test_product_page.xml',
        #  'views/snippets/cider_products_page.xml',
         'views/snippets/cider_product_item.xml',
         'views/snippets/cider_categories_lists.xml',
                
    ],
         "assets": {
        "web.assets_frontend": [
             "theme_cider/static/src/scss/primary.scss",
             "theme_cider/static/src/scss/footer.scss",
             "theme_cider/static/src/scss/cider_product.scss",
             "theme_cider/static/src/scss/cider_products.scss",
             "theme_cider/static/src/scss/product_item.scss",
         

             "theme_cider/static/src/css/owl.carousel.css",
             "theme_cider/static/src/css/owl.theme.default.css",
             "theme_cider/static/src/css/bottommodalnav.css",
             "theme_cider/static/src/css/style.css",
            #  "theme_cider/static/src/css/header.css",
             "theme_cider/static/src/css/header_two.css",
             "theme_cider/static/src/scss/cider_mega_menu_one.scss",
             "theme_cider/static/src/scss/cider_categories_lists.scss",
           
             
             "theme_cider/static/src/js/owl.carousel.js",
            #  "theme_cider/static/src/js/header.js",
             "theme_cider/static/src/js/header_two.js",
             "theme_cider/static/src/js/cidergangcarousel.js",
             "theme_cider/static/src/js/footer.js",
             "theme_cider/static/src/js/register_email.js",
             "theme_cider/static/src/js/bottommodalnav.js",
             "theme_cider/static/src/js/cider_products.js",
             "theme_cider/static/src/js/add_to_cart_btn.js",
             "theme_cider/static/src/js/card_variant_color.js",
             "theme_cider/static/src/js/productSizeModel.js",
             "theme_cider/static/src/js/productbodymeasurement.js",
           
        ]
    },
  
 
}

