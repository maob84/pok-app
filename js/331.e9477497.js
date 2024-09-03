"use strict";
(globalThis["webpackChunkpok"] = globalThis["webpackChunkpok"] || []).push([[331],{

/***/ 6331:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ BookingRequest)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(1758);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(8790);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/BookingRequest.vue?vue&type=template&id=3346932b

const _hoisted_1 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", null, "Welche Instrumente sollen freigeschaltet werden?", -1);
const _hoisted_2 = {
  key: 1,
  class: "text-negative"
};
const _hoisted_3 = {
  key: 0,
  class: "text-negative"
};
const _hoisted_4 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("p", null, "Vielen Dank für Ihre Buchung!", -1);
const _hoisted_5 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("p", null, "Im nächsten Schritt erhalten Sie von uns eine E-Mail mit der Bestätigung und den Rechnungsdaten.", -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_icon = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-icon");
  const _component_q_item_section = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-item-section");
  const _component_q_item_label = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-item-label");
  const _component_q_item = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-item");
  const _component_q_card_section = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-card-section");
  const _component_q_card = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-card");
  const _component_q_input = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-input");
  const _component_q_select = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-select");
  const _component_q_btn = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-btn");
  const _component_q_stepper_navigation = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-stepper-navigation");
  const _component_q_form = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-form");
  const _component_q_step = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-step");
  const _component_q_checkbox = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-checkbox");
  const _component_q_stepper = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-stepper");
  const _component_q_scroll_area = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-scroll-area");
  const _component_q_page = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-page");
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_q_page, {
    padding: ""
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_scroll_area, {
      style: {
        "height": "85vh"
      }
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_card, null, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_card_section, null, {
          default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item, null, {
            default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_section, {
              avatar: ""
            }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_icon, {
                name: "event",
                color: "primary"
              })]),
              _: 1
            }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_section, null, {
              default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_label, null, {
                default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("Datum und Uhrzeit")]),
                _: 1
              }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_label, {
                caption: ""
              }, {
                default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)((0,shared_esm_bundler/* toDisplayString */.v_)($setup.formattedDate), 1)]),
                _: 1
              })]),
              _: 1
            })]),
            _: 1
          }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item, null, {
            default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_section, {
              avatar: ""
            }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_icon, {
                name: "location_on",
                color: "primary"
              })]),
              _: 1
            }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_section, null, {
              default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_label, null, {
                default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("Standort")]),
                _: 1
              }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_label, {
                caption: ""
              }, {
                default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)((0,shared_esm_bundler/* toDisplayString */.v_)($setup.location), 1)]),
                _: 1
              })]),
              _: 1
            })]),
            _: 1
          }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item, null, {
            default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_section, {
              avatar: ""
            }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_icon, {
                name: "info",
                color: "primary"
              })]),
              _: 1
            }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_section, null, {
              default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_label, null, {
                default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("Buchungstyp")]),
                _: 1
              }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_label, {
                caption: ""
              }, {
                default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)((0,shared_esm_bundler/* toDisplayString */.v_)($setup.bookingType), 1)]),
                _: 1
              })]),
              _: 1
            })]),
            _: 1
          })]),
          _: 1
        })]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_stepper, {
        modelValue: $setup.step,
        "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => $setup.step = $event),
        "header-nav": "",
        flat: "",
        vertical: "",
        animated: ""
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_step, {
          ref: "step1",
          name: 1,
          title: "Dauer auswählen",
          done: $setup.step > 1,
          "header-nav": $setup.step > 1
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_form, {
            ref: "cucumberForm",
            class: "q-gutter-md"
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_input, {
              standout: "",
              modelValue: $setup.cucumberId,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $setup.cucumberId = $event),
              label: "Cucumber ID",
              placeholder: "Cucumber ID eingeben",
              rules: [val => !!val || 'Cucumber ID ist notwendig', val => /^CC\d+[A-Z]$/.test(val) || 'Cucumber ID muss mit CC beginnen, gefolgt von Ziffern und einem Großbuchstaben']
            }, {
              prepend: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_icon, {
                name: "person"
              })]),
              _: 1
            }, 8, ["modelValue", "rules"]), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_select, {
              modelValue: $setup.hours,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $setup.hours = $event),
              dense: "",
              options: $setup.hoursOptions,
              label: "Wieviele Stunden soll der Raum gebucht werden?",
              rules: [val => !!val || 'Buchungsdauer ist notwendig']
            }, {
              option: (0,runtime_core_esm_bundler/* withCtx */.k6)(scope => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item, (0,shared_esm_bundler/* normalizeProps */._B)((0,runtime_core_esm_bundler/* guardReactiveProps */.Ng)(scope.itemProps)), {
                default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_section, null, {
                  default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_label, null, {
                    default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)((0,shared_esm_bundler/* toDisplayString */.v_)(scope.opt) + " Stunde" + (0,shared_esm_bundler/* toDisplayString */.v_)(scope.opt > 1 ? 'n' : ''), 1)]),
                    _: 2
                  }, 1024)]),
                  _: 2
                }, 1024), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_section, {
                  side: ""
                }, {
                  default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_label, {
                    caption: ""
                  }, {
                    default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)((0,shared_esm_bundler/* toDisplayString */.v_)($setup.getEndTime(scope.opt)), 1)]),
                    _: 2
                  }, 1024)]),
                  _: 2
                }, 1024)]),
                _: 2
              }, 1040)]),
              _: 1
            }, 8, ["modelValue", "options", "rules"]), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_stepper_navigation, null, {
              default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_btn, {
                "no-caps": "",
                onClick: $setup.nextStep,
                color: "primary",
                label: "Weiter"
              }, null, 8, ["onClick"])]),
              _: 1
            })]),
            _: 1
          }, 512)]),
          _: 1
        }, 8, ["done", "header-nav"]), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_step, {
          ref: "step2",
          name: 2,
          title: "Instrumente auswählen",
          done: $setup.step > 2,
          "header-nav": $setup.step > 2
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_form, {
            class: "q-gutter-md"
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [!$setup.isSingleBooker ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_q_select, {
              key: 0,
              modelValue: $setup.guests,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => $setup.guests = $event),
              options: $setup.guestsOptions,
              label: "Anzahl der Gastmusiker:innen",
              rules: [val => !!val || 'Anzahl der Gastmusiker:innen ist notwendig']
            }, null, 8, ["modelValue", "options", "rules"])) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true), _hoisted_1, ((0,runtime_core_esm_bundler/* openBlock */.uX)(true), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, null, (0,runtime_core_esm_bundler/* renderList */.pI)($setup.supportedInstruments, instrument => {
              return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_q_checkbox, {
                key: instrument,
                dense: "",
                onClick: $setup.resetInstrumentError,
                modelValue: $setup.instruments[instrument],
                "onUpdate:modelValue": $event => $setup.instruments[instrument] = $event,
                label: instrument
              }, null, 8, ["onClick", "modelValue", "onUpdate:modelValue", "label"]);
            }), 128)), $setup.showInstrumentError ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", _hoisted_2, "Bitte wählen Sie mindestens ein Instrument aus.")) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_stepper_navigation, null, {
              default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_btn, {
                "no-caps": "",
                onClick: $setup.nextStep,
                color: "primary",
                label: "Weiter"
              }, null, 8, ["onClick"]), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_btn, {
                "no-caps": "",
                flat: "",
                onClick: _cache[3] || (_cache[3] = $event => $setup.step = 1),
                color: "primary",
                label: "Zurück",
                class: "q-ml-sm"
              })]),
              _: 1
            })]),
            _: 1
          })]),
          _: 1
        }, 8, ["done", "header-nav"]), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_step, {
          ref: "step3",
          name: 3,
          title: "Überprüfen und Buchen",
          done: $setup.step > 3,
          "header-nav": $setup.step > 3
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_form, {
            class: "q-gutter-md"
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", null, [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item, null, {
              default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_section, null, {
                default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_label, null, {
                  default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("Cucumber ID:")]),
                  _: 1
                }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_label, {
                  caption: ""
                }, {
                  default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)((0,shared_esm_bundler/* toDisplayString */.v_)($setup.cucumberId), 1)]),
                  _: 1
                })]),
                _: 1
              })]),
              _: 1
            }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item, null, {
              default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_section, null, {
                default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_label, null, {
                  default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("Zeitraum:")]),
                  _: 1
                }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_label, {
                  caption: ""
                }, {
                  default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)((0,shared_esm_bundler/* toDisplayString */.v_)($setup.displayBookingSlot), 1)]),
                  _: 1
                })]),
                _: 1
              })]),
              _: 1
            }), !$setup.isSingleBooker ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_q_item, {
              key: 0
            }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_section, null, {
                default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_label, null, {
                  default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("Anzahl der Gastmusiker:innen:")]),
                  _: 1
                }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_label, {
                  caption: ""
                }, {
                  default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)((0,shared_esm_bundler/* toDisplayString */.v_)($setup.guests), 1)]),
                  _: 1
                })]),
                _: 1
              })]),
              _: 1
            })) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item, null, {
              default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_section, null, {
                default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_label, null, {
                  default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("Instrumente:")]),
                  _: 1
                }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_label, {
                  caption: ""
                }, {
                  default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)((0,shared_esm_bundler/* toDisplayString */.v_)($setup.selectedInstruments), 1)]),
                  _: 1
                })]),
                _: 1
              })]),
              _: 1
            }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item, null, {
              default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_section, null, {
                default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_label, null, {
                  default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("Preis:")]),
                  _: 1
                }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_label, {
                  caption: ""
                }, {
                  default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)((0,shared_esm_bundler/* toDisplayString */.v_)($setup.displayTotalPrice), 1)]),
                  _: 1
                })]),
                _: 1
              })]),
              _: 1
            })]), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_stepper_navigation, null, {
              default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_btn, {
                "no-caps": "",
                onClick: $setup.onSubmit,
                color: "primary",
                label: "Verbindlich buchen"
              }, null, 8, ["onClick"]), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_btn, {
                "no-caps": "",
                flat: "",
                onClick: _cache[4] || (_cache[4] = $event => $setup.step = 2),
                color: "primary",
                label: "Zurück",
                class: "q-ml-sm"
              })]),
              _: 1
            }), $setup.submissionError ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", _hoisted_3, (0,shared_esm_bundler/* toDisplayString */.v_)($setup.errorMessage), 1)) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true)]),
            _: 1
          })]),
          _: 1
        }, 8, ["done", "header-nav"]), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_step, {
          ref: "step4",
          name: 4,
          title: "Nächste Schritte",
          "header-nav": $setup.step > 4
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", null, [_hoisted_4, _hoisted_5, (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_btn, {
            "no-caps": "",
            label: "Zur Startseite",
            to: "/",
            color: "primary"
          })])]),
          _: 1
        }, 8, ["header-nav"])]),
        _: 1
      }, 8, ["modelValue"])]),
      _: 1
    })]),
    _: 1
  });
}
;// CONCATENATED MODULE: ./src/pages/BookingRequest.vue?vue&type=template&id=3346932b

// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(8734);
// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.mjs
var vue_router = __webpack_require__(455);
// EXTERNAL MODULE: ./src/boot/axios.js
var axios = __webpack_require__(660);
// EXTERNAL MODULE: ./node_modules/quasar/src/composables/use-quasar/use-quasar.js
var use_quasar = __webpack_require__(4907);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/BookingRequest.vue?vue&type=script&lang=js




/* harmony default export */ const BookingRequestvue_type_script_lang_js = ({
  name: 'BookingRequest',
  setup() {
    const $q = (0,use_quasar/* default */.A)();
    const cucumberForm = (0,reactivity_esm_bundler/* ref */.KR)(null);
    const step1 = (0,reactivity_esm_bundler/* ref */.KR)(null);
    const step2 = (0,reactivity_esm_bundler/* ref */.KR)(null);
    const step3 = (0,reactivity_esm_bundler/* ref */.KR)(null);
    const step4 = (0,reactivity_esm_bundler/* ref */.KR)(null);

    // get data from router
    const route = (0,vue_router/* useRoute */.lq)();
    const bookingDate = route.params.bookingDate;
    const bookingHour = parseInt(route.params.bookingHour);
    const isSingleBooker = (0,reactivity_esm_bundler/* ref */.KR)(route.params.isSingleBooker === 'true');

    // get data from rest api during preparation
    const maxAvailableHours = (0,reactivity_esm_bundler/* ref */.KR)(1);
    const location = (0,reactivity_esm_bundler/* ref */.KR)('');
    const maxCapacity = (0,reactivity_esm_bundler/* ref */.KR)(1);
    const hourlyRates = (0,reactivity_esm_bundler/* ref */.KR)([]);
    const dailyRate = (0,reactivity_esm_bundler/* ref */.KR)(9999);
    const supportedInstruments = (0,reactivity_esm_bundler/* ref */.KR)([]);
    const requestDate = (0,reactivity_esm_bundler/* ref */.KR)('');

    // form data
    const cucumberId = (0,reactivity_esm_bundler/* ref */.KR)('');
    const hours = (0,reactivity_esm_bundler/* ref */.KR)(1);
    const guests = (0,reactivity_esm_bundler/* ref */.KR)(isSingleBooker.value ? 0 : 1);
    const instruments = (0,reactivity_esm_bundler/* ref */.KR)({});

    // state variables
    const step = (0,reactivity_esm_bundler/* ref */.KR)(1);
    const invalidBookingRequest = (0,reactivity_esm_bundler/* ref */.KR)(false);
    const submissionError = (0,reactivity_esm_bundler/* ref */.KR)(false);
    const showInstrumentError = (0,reactivity_esm_bundler/* ref */.KR)(false);
    const errorMessage = (0,reactivity_esm_bundler/* ref */.KR)('');
    const formattedDate = (0,runtime_core_esm_bundler/* computed */.EW)(() => {
      // use date and time
      let date = new Date(bookingDate);
      date.setHours(bookingHour);
      const time = date.toLocaleTimeString('de-DE', {
        hour: '2-digit',
        minute: '2-digit'
      });
      // include weekday short name
      const weekday = date.toLocaleDateString('de-DE', {
        weekday: 'short'
      });
      return `${weekday}, ${date.toLocaleDateString('de-DE')} ${time} Uhr`;
    });
    const showErrorNotify = message => {
      $q.notify({
        color: 'negative',
        message: message,
        icon: 'report_problem'
      });
    };
    const showPositiveNotify = message => {
      $q.notify({
        color: 'positive',
        message: message,
        icon: 'check_circle'
      });
    };
    const bookingType = (0,runtime_core_esm_bundler/* computed */.EW)(() => {
      return isSingleBooker.value ? 'Einzelbucher:inn' : 'Band (2 - 5 Personen)';
    });
    const displayTotalPrice = (0,runtime_core_esm_bundler/* computed */.EW)(() => {
      const totalPrice = formatPrice(getTotalPrice(bookingHour, hours.value));
      return totalPrice;
    });
    const displayBookingSlot = (0,runtime_core_esm_bundler/* computed */.EW)(() => {
      const startHour = bookingHour;
      const duration = hours.value;
      const endHour = startHour + duration;
      const date = formattedDate.value;
      return `${date} - ${endHour} Uhr`;
    });
    const hoursOptions = (0,runtime_core_esm_bundler/* computed */.EW)(() => {
      return Array.from({
        length: maxAvailableHours.value
      }, (_, i) => i + 1);
    });
    const guestsOptions = (0,runtime_core_esm_bundler/* computed */.EW)(() => {
      const maxGuestCapacity = maxCapacity.value - 1;
      return Array.from({
        length: maxGuestCapacity
      }, (_, i) => i + 1);
    });
    const resetInstrumentError = () => {
      showInstrumentError.value = false;
    };
    const isFormValid = (0,runtime_core_esm_bundler/* computed */.EW)(() => {
      return cucumberId.value && hours.value && (isSingleBooker.value || guests.value) && Object.values(instruments.value).some(v => v);
    });
    const nextStep = async () => {
      if (step.value === 1) {
        if (cucumberForm.value) {
          const isValid = await cucumberForm.value.validate();
          if (!isValid) {
            return;
          }
        } else {
          if (!cucumberId.value) {
            return;
          }
        }
      }
      if (step.value === 2 && !isFormValid.value) {
        showInstrumentError.value = !Object.values(instruments.value).some(v => v);
        return;
      }

      // Scroll to the next step
      (0,runtime_core_esm_bundler/* nextTick */.dY)(() => {
        const nextStepRef = [step1, step2, step3, step4][step.value - 1];
        if (nextStepRef.value) {
          nextStepRef.value.$el.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
      step.value++;
    };
    const onSubmit = async () => {
      console.log('onSubmit', isFormValid.value);
      if (!isFormValid.value) {
        showInstrumentError.value = !Object.values(instruments.value).some(v => v);
        return;
      }
      try {
        const requestedPrice = getTotalPrice(bookingHour, hours.value);
        const response = await axios.srvApi.post('/api/v1/bookings', {
          cucumberId: cucumberId.value,
          hours: hours.value,
          guests: guests.value,
          instruments: instruments.value,
          date: bookingDate,
          hour: bookingHour,
          isSingleBooker: isSingleBooker.value,
          requestedPrice: requestedPrice,
          requestDate: requestDate.value
        });
        console.log('Booking submitted successfully', response.data);
        step.value++;
        submissionError.value = false;
        errorMessage.value = '';
        showPositiveNotify('Ihre Buchung wurde erfolgreich eingerichtet.');
      } catch (error) {
        submissionError.value = true;
        console.error('Error submitting booking', error);
        if (error.response) {
          console.log('Error response:', error.response);
          const status = error.response.status;
          const detail = error.response.data.detail;
          if (status === 403) {
            errorMessage.value = 'Ungültige Cucumber ID. Sie sind nicht berechtigt, eine Buchung vorzunehmen.';
          } else if (status === 400) {
            if (detail.includes("Booking already exists")) {
              errorMessage.value = 'Dieser Buchungsslot ist nicht mehr verfügbar. Bitte wählen Sie einen anderen Zeitraum.';
            } else {
              errorMessage.value = detail || 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.';
            }
          } else if (status === 500) {
            errorMessage.value = 'Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.';
          } else {
            errorMessage.value = `Fehler ${status}: ${detail || 'Unbekannter Fehler'}`;
          }
        } else {
          errorMessage.value = 'Ein Netzwerkfehler ist aufgetreten. Bitte überprüfen Sie Ihre Internetverbindung.';
        }
        showErrorNotify(errorMessage.value);
      }
    };
    const prepareBooking = async () => {
      try {
        const response = await axios.srvApi.get('/api/v1/bookings/prepare', {
          params: {
            date: bookingDate,
            hour: bookingHour,
            single_user: isSingleBooker.value
          }
        });
        maxAvailableHours.value = response.data.max_consecutive_hours;
        location.value = response.data.location;
        supportedInstruments.value = response.data.supported_instruments;
        maxCapacity.value = response.data.max_capacity;
        dailyRate.value = response.data.daily_rate;
        requestDate.value = response.data.request_date;
        instruments.value = Object.fromEntries(response.data.supported_instruments.map(instrument => [instrument, false]));
        hourlyRates.value = response.data.hourly_rates;
      } catch (error) {
        invalidBookingRequest.value = true;
        console.error('Error preparing booking', error);
      }
    };
    const getTotalPrice = (startHour, duration) => {
      let totalPrice = 0;
      for (let i = startHour; i <= startHour + duration - 1; i++) {
        const hourlyRate = hourlyRates.value.find(rate => rate.hour === i);
        totalPrice += hourlyRate.rate;
      }
      if (totalPrice > dailyRate.value) {
        totalPrice = dailyRate.value;
      }
      return totalPrice;
    };
    const getEndTime = hours => {
      const currentHour = bookingHour + hours - 1;
      const startDate = new Date(bookingDate);
      startDate.setHours(bookingHour);
      const endDate = new Date(startDate.getTime() + hours * 60 * 60 * 1000);
      const endDateString = endDate.toLocaleTimeString('de-DE', {
        hour: '2-digit',
        minute: '2-digit'
      });
      const totalPrice = formatPrice(getTotalPrice(bookingHour, hours));
      const endString = `für ${totalPrice} bis ${endDateString} Uhr`;
      return endString;
    };
    const formatPrice = price => {
      return price.toFixed(2).replace('.', ',') + ' €';
    };
    const resetForm = () => {
      step.value = 1;
      cucumberId.value = '';
      hours.value = 1;
      guests.value = isSingleBooker.value ? 0 : 1;
      instruments.value = {};
      showInstrumentError.value = false;
    };
    const selectedInstruments = (0,runtime_core_esm_bundler/* computed */.EW)(() => {
      return Object.keys(instruments.value).filter(key => instruments.value[key]).join(', ');
    });
    (0,runtime_core_esm_bundler/* onMounted */.sV)(prepareBooking);
    return {
      step,
      displayTotalPrice,
      displayBookingSlot,
      cucumberId,
      hours,
      guests,
      instruments,
      formattedDate,
      bookingType,
      hoursOptions,
      guestsOptions,
      onSubmit,
      submissionError,
      showPositiveNotify,
      isSingleBooker,
      showInstrumentError,
      resetInstrumentError,
      location,
      maxAvailableHours,
      getEndTime,
      invalidBookingRequest,
      showErrorNotify,
      supportedInstruments,
      formatPrice,
      dailyRate,
      nextStep,
      resetForm,
      getTotalPrice,
      requestDate,
      selectedInstruments,
      cucumberForm,
      step1,
      step2,
      step3,
      step4,
      errorMessage
    };
  }
});
;// CONCATENATED MODULE: ./src/pages/BookingRequest.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(2807);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__(7716);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/scroll-area/QScrollArea.js
var QScrollArea = __webpack_require__(9383);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__(3316);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardSection.js
var QCardSection = __webpack_require__(4189);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItem.js
var QItem = __webpack_require__(124);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemSection.js
var QItemSection = __webpack_require__(5173);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__(492);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemLabel.js
var QItemLabel = __webpack_require__(3796);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/stepper/QStepper.js
var QStepper = __webpack_require__(7222);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/stepper/QStep.js
var QStep = __webpack_require__(8577);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/form/QForm.js
var QForm = __webpack_require__(9200);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 2 modules
var QInput = __webpack_require__(9270);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/select/QSelect.js + 7 modules
var QSelect = __webpack_require__(8005);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/stepper/QStepperNavigation.js
var QStepperNavigation = __webpack_require__(14);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__(6384);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/checkbox/QCheckbox.js
var QCheckbox = __webpack_require__(460);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(8582);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/pages/BookingRequest.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(BookingRequestvue_type_script_lang_js, [['render',render]])

/* harmony default export */ const BookingRequest = (__exports__);
;
















runtime_auto_import_default()(BookingRequestvue_type_script_lang_js, 'components', {QPage: QPage/* default */.A,QScrollArea: QScrollArea/* default */.A,QCard: QCard/* default */.A,QCardSection: QCardSection/* default */.A,QItem: QItem/* default */.A,QItemSection: QItemSection/* default */.A,QIcon: QIcon/* default */.A,QItemLabel: QItemLabel/* default */.A,QStepper: QStepper/* default */.A,QStep: QStep/* default */.A,QForm: QForm/* default */.A,QInput: QInput/* default */.A,QSelect: QSelect/* default */.A,QStepperNavigation: QStepperNavigation/* default */.A,QBtn: QBtn/* default */.A,QCheckbox: QCheckbox/* default */.A});


/***/ })

}]);
//# sourceMappingURL=331.e9477497.js.map