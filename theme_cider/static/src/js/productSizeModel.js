/** @odoo-module **/

import publicWidget from "@web/legacy/js/public/public_widget";

   const productSizeModel = publicWidget.Widget.extend({
        selector: '#productSizeModel',
        start: function () {
            this._super.apply(this, arguments);
            this._bindEvents();
        },
        _bindEvents: function () {
            
            var self = this;

    
            this.$el.find('#flexSwitchCheckDefault').on('change', function () {
                var isChecked = $(this).is(':checked');
                if (isChecked) {
                    self._convertToInches();
                } else {
                    self._convertToCm();
                }
            });
        },
        _convertToInches: function () {
            this.$el.find('td').each(function () {
                var value = $(this).text();
                var cmValue = parseFloat(value);
                if (!isNaN(cmValue)) {
                    var inchValue = (cmValue / 2.54).toFixed(1);
                    $(this).text(inchValue);
                }
            });
        },
        _convertToCm: function () {
            this.$el.find('td').each(function () {
                var value = $(this).text();
                var inchValue = parseFloat(value);
                if (!isNaN(inchValue)) {
                    var cmValue = (inchValue * 2.54).toFixed(1);
                    $(this).text(cmValue);
                }
            });
        }
    });
    publicWidget.registry.productSizeModel = productSizeModel;

    return productSizeModel;

