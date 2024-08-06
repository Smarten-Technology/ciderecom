from odoo import models, fields


class ProductTemplate(models.Model):
    _inherit = 'product.template'

    dr_ptav_ids = fields.One2many('product.template.attribute.value', 'product_tmpl_id')


    def _get_product_preview_swatches(self, limit=4):
        swatches = []
        for ptav in self.dr_ptav_ids:
            if ptav.ptav_active and ptav.ptav_product_variant_ids:
                vals = {'id': ptav.id, 'name': ptav.name, 'preview_image': '/web/image/product.product/%s/image_512' % ptav.ptav_product_variant_ids.ids[0]}
                if ptav.html_color:
                    vals.update({'type': 'color', 'value': ptav.html_color})
                    swatches.append(vals)
        return swatches[:limit]