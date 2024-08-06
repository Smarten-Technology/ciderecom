/** @odoo-module **/

import publicWidget from "@web/legacy/js/public/public_widget";

    publicWidget.registry.productbodymeasurement = publicWidget.Widget.extend({
        selector: '#productbodymeasurement',
        start: function () {

            this._super.apply(this, arguments);
            this._bindEvents();
            const BMsubmit = document.querySelector(".body-measurement-submit-btn");
            if (BMsubmit) {
                BMsubmit.addEventListener("click", this._onBMSubmit);
            }

        },
        _bindEvents: function () {
            var self = this;
            self._cmkgToinchlbsPlaceholder();
            this.$el.find('.form-check-input').on('change', function () {
                var isChecked = $(this).is(':checked');
                if (isChecked) {
                    self._convertToCmAndKg();
                    self._inchlbsTocmkgPlaceholder();
                   
                } else {
                    self._convertToInchesAndLbs();
                 
                    self._cmkgToinchlbsPlaceholder();
                }
            });
        },
        _convertToInchesAndLbs: function () {
            this._convertInput('#details_height', 2.54, 'inch');
            this._convertInput('#details_weight', 0.453592, 'lbs');
            this._convertInput('#details_soulder', 2.54, 'inch');
            this._convertInput('#details_bust', 2.54, 'inch');
            this._convertInput('#details_underbust', 2.54, 'inch');
            this._convertInput('#details_waist', 2.54, 'inch');
            this._convertInput('#details_hips', 2.54, 'inch');
        },
        _convertToCmAndKg: function () {
            this._convertInput('#details_height', 1/2.54, 'cm');
            this._convertInput('#details_weight', 1/0.453592, 'kg');
            this._convertInput('#details_soulder', 1/2.54, 'cm');
            this._convertInput('#details_bust', 1/2.54, 'cm');
            this._convertInput('#details_underbust', 1/2.54, 'cm');
            this._convertInput('#details_waist', 1/2.54, 'cm');
            this._convertInput('#details_hips', 1/2.54, 'cm');
        },
        _convertInput: function (selector, conversionFactor, unit) {
            var input = this.$el.find(selector);
            var value = parseFloat(input.val());
            if (!isNaN(value)) {
                input.val((value * conversionFactor).toFixed(2));
                input.attr('placeholder', unit);
            }
        },
        _cmkgToinchlbsPlaceholder: function () {
            this.$el.find('#details_height').attr('placeholder', 'cm');
            this.$el.find('#details_weight').attr('placeholder', 'kg');
            this.$el.find('#details_soulder').attr('placeholder', 'cm');
            this.$el.find('#details_bust').attr('placeholder', 'cm');
            this.$el.find('#details_underbust').attr('placeholder', 'cm');
            this.$el.find('#details_waist').attr('placeholder', 'cm');
            this.$el.find('#details_hips').attr('placeholder', 'cm');
        },
        _inchlbsTocmkgPlaceholder: function () {
            this.$el.find('#details_height').attr('placeholder', 'inch');
            this.$el.find('#details_weight').attr('placeholder', 'lbs');
            this.$el.find('#details_soulder').attr('placeholder', 'inch');
            this.$el.find('#details_bust').attr('placeholder', 'inch');
            this.$el.find('#details_underbust').attr('placeholder', 'inch');
            this.$el.find('#details_waist').attr('placeholder', 'inch');
            this.$el.find('#details_hips').attr('placeholder', 'inch');
        },
        _onBMSubmit: function () {
            alert("Request has been submit");
        }
    });

    return publicWidget.registry.productbodymeasurement;
