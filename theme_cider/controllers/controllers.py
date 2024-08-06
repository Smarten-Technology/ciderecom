# -*- coding: utf-8 -*-
# from odoo import http


# class ThemeCider(http.Controller):
#     @http.route('/theme_cider/theme_cider', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/theme_cider/theme_cider/objects', auth='public')
#     def list(self, **kw):
#         return http.request.render('theme_cider.listing', {
#             'root': '/theme_cider/theme_cider',
#             'objects': http.request.env['theme_cider.theme_cider'].search([]),
#         })

#     @http.route('/theme_cider/theme_cider/objects/<model("theme_cider.theme_cider"):obj>', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('theme_cider.object', {
#             'object': obj
#         })

