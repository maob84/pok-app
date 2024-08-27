"use strict";
(globalThis["webpackChunkpok"] = globalThis["webpackChunkpok"] || []).push([[650],{

/***/ 650:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ DebugInfo)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(1758);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(8790);
// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(8734);
// EXTERNAL MODULE: ./node_modules/quasar/src/composables/use-quasar/use-quasar.js
var use_quasar = __webpack_require__(4907);
// EXTERNAL MODULE: ./node_modules/quasar/src/plugins/platform/Platform.js
var Platform = __webpack_require__(1597);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/DebugInfo.vue?vue&type=script&setup=true&lang=js

const _hoisted_1 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
  class: "text-h6"
}, "Debugging Information", -1);


/* harmony default export */ const DebugInfovue_type_script_setup_true_lang_js = ({
  __name: 'DebugInfo',
  setup(__props) {
    const quasar = (0,use_quasar/* default */.A)();
    const quasarVersion = (0,reactivity_esm_bundler/* ref */.KR)('');
    const hostingAddress = (0,reactivity_esm_bundler/* ref */.KR)(window.location.host);
    const gitBranch = (0,reactivity_esm_bundler/* ref */.KR)("\"v2\"" || 0);
    const gitHash = (0,reactivity_esm_bundler/* ref */.KR)("\"3e7ca4e9ac0fc156105a29c06bdc9711bd60acde\"" || 0);
    const buildTimestamp = (0,reactivity_esm_bundler/* ref */.KR)("Tue, 27 Aug 2024 09:03:59 GMT" || 0);
    const clientPlatform = (0,reactivity_esm_bundler/* ref */.KR)('');
    const isFullscreen = (0,reactivity_esm_bundler/* ref */.KR)(false);
    const appMode = (0,reactivity_esm_bundler/* ref */.KR)('');
    const releaseMode = (0,reactivity_esm_bundler/* ref */.KR)('');
    const browserInfo = (0,reactivity_esm_bundler/* ref */.KR)('');
    const wakeLockActive = (0,reactivity_esm_bundler/* ref */.KR)(false);
    const debugState = (0,reactivity_esm_bundler/* ref */.KR)(true);
    const apiURL = (0,reactivity_esm_bundler/* ref */.KR)("http://192.168.0.102:8000");
    const srvApiURL = (0,reactivity_esm_bundler/* ref */.KR)("http://srv.proben-ohne-krach.de:8001");
    (0,runtime_core_esm_bundler/* onMounted */.sV)(() => {
      quasarVersion.value = quasar.version;
      clientPlatform.value = Platform/* default */.Ay.is;
      isFullscreen.value = 'N/A';
      browserInfo.value = `${navigator.userAgent}`;
      if (false) {} else {
        releaseMode.value = 'Production';
      }
      appMode.value = "pwa";

      // Check for Wake Lock status
      if ('wakeLock' in navigator) {
        wakeLockActive.value = true; // Assuming that if the API exists, the wake lock might be active
        navigator.wakeLock.request('screen').catch(() => {
          wakeLockActive.value = false; // If it fails, assume it's not active
        });
      } else {
        wakeLockActive.value = false;
      }
    });
    return (_ctx, _cache) => {
      const _component_q_card_section = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-card-section");
      const _component_q_item_label = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-item-label");
      const _component_q_card = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-card");
      const _component_q_expansion_item = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-expansion-item");
      const _component_q_list = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-list");
      const _component_q_scroll_area = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-scroll-area");
      const _component_q_page = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-page");
      return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_q_page, {
        class: "q-pa-md"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_scroll_area, {
          style: {
            "height": "85vh",
            "max-width": "90vw"
          }
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_card, {
            flat: ""
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_card_section, null, {
              default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [_hoisted_1]),
              _: 1
            }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_list, null, {
              default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_expansion_item, {
                icon: "info",
                label: "Application Information",
                "expand-separator": "",
                "switch-toggle-side": ""
              }, {
                default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_card, null, {
                  default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_card_section, null, {
                    default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_label, null, {
                      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("Quasar Version: " + (0,shared_esm_bundler/* toDisplayString */.v_)(quasarVersion.value), 1)]),
                      _: 1
                    }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_label, null, {
                      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("Hosting Address: " + (0,shared_esm_bundler/* toDisplayString */.v_)(hostingAddress.value), 1)]),
                      _: 1
                    }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_label, null, {
                      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("App Mode: " + (0,shared_esm_bundler/* toDisplayString */.v_)(appMode.value), 1)]),
                      _: 1
                    }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_label, null, {
                      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("Release Mode: " + (0,shared_esm_bundler/* toDisplayString */.v_)(releaseMode.value), 1)]),
                      _: 1
                    }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_label, null, {
                      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("Debugging enabled: " + (0,shared_esm_bundler/* toDisplayString */.v_)(debugState.value), 1)]),
                      _: 1
                    }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_label, null, {
                      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("room API url: " + (0,shared_esm_bundler/* toDisplayString */.v_)(apiURL.value), 1)]),
                      _: 1
                    }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_label, null, {
                      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("service API url: " + (0,shared_esm_bundler/* toDisplayString */.v_)(srvApiURL.value), 1)]),
                      _: 1
                    })]),
                    _: 1
                  })]),
                  _: 1
                })]),
                _: 1
              }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_expansion_item, {
                icon: "code",
                label: "Build Information",
                "expand-separator": "",
                "switch-toggle-side": ""
              }, {
                default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_card, null, {
                  default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_card_section, null, {
                    default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_label, null, {
                      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("Git Branch: " + (0,shared_esm_bundler/* toDisplayString */.v_)(gitBranch.value), 1)]),
                      _: 1
                    }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_label, null, {
                      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("Git Hash: " + (0,shared_esm_bundler/* toDisplayString */.v_)(gitHash.value), 1)]),
                      _: 1
                    }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_label, null, {
                      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("Build Timestamp: " + (0,shared_esm_bundler/* toDisplayString */.v_)(buildTimestamp.value), 1)]),
                      _: 1
                    })]),
                    _: 1
                  })]),
                  _: 1
                })]),
                _: 1
              }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_expansion_item, {
                icon: "computer",
                label: "Client Information",
                "expand-separator": "",
                "switch-toggle-side": ""
              }, {
                default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_card, null, {
                  default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_card_section, null, {
                    default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_label, null, {
                      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("Client Platform: " + (0,shared_esm_bundler/* toDisplayString */.v_)(clientPlatform.value), 1)]),
                      _: 1
                    }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_label, null, {
                      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("Browser Info: " + (0,shared_esm_bundler/* toDisplayString */.v_)(browserInfo.value), 1)]),
                      _: 1
                    }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_label, null, {
                      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("Fullscreen: " + (0,shared_esm_bundler/* toDisplayString */.v_)(isFullscreen.value), 1)]),
                      _: 1
                    }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_label, null, {
                      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("Wake Lock Active: " + (0,shared_esm_bundler/* toDisplayString */.v_)(wakeLockActive.value), 1)]),
                      _: 1
                    })]),
                    _: 1
                  })]),
                  _: 1
                })]),
                _: 1
              })]),
              _: 1
            })]),
            _: 1
          })]),
          _: 1
        })]),
        _: 1
      });
    };
  }
});
;// CONCATENATED MODULE: ./src/pages/DebugInfo.vue?vue&type=script&setup=true&lang=js
 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__(7716);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/scroll-area/QScrollArea.js
var QScrollArea = __webpack_require__(9383);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__(3316);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardSection.js
var QCardSection = __webpack_require__(4189);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QList.js
var QList = __webpack_require__(3999);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/expansion-item/QExpansionItem.js + 1 modules
var QExpansionItem = __webpack_require__(9459);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemLabel.js
var QItemLabel = __webpack_require__(3796);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(8582);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/pages/DebugInfo.vue



const __exports__ = DebugInfovue_type_script_setup_true_lang_js;

/* harmony default export */ const DebugInfo = (__exports__);
;







runtime_auto_import_default()(DebugInfovue_type_script_setup_true_lang_js, 'components', {QPage: QPage/* default */.A,QScrollArea: QScrollArea/* default */.A,QCard: QCard/* default */.A,QCardSection: QCardSection/* default */.A,QList: QList/* default */.A,QExpansionItem: QExpansionItem/* default */.A,QItemLabel: QItemLabel/* default */.A});


/***/ })

}]);
//# sourceMappingURL=650.3cac4666.js.map