"use strict";
(globalThis["webpackChunkpok"] = globalThis["webpackChunkpok"] || []).push([[309],{

/***/ 309:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ConnectionStatus)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(1758);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(8790);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/ConnectionStatus.vue?vue&type=template&id=177a40da

const _hoisted_1 = {
  class: "q-pa-md"
};
const _hoisted_2 = {
  key: 0
};
const _hoisted_3 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("p", null, "Checking connection...", -1);
const _hoisted_4 = {
  key: 1
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_card_section = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-card-section");
  const _component_q_spinner_dots = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-spinner-dots");
  const _component_q_banner = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-banner");
  const _component_q_card = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-card");
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", _hoisted_1, [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_card, {
    flat: ""
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_card_section, null, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)(" API Url: " + (0,shared_esm_bundler/* toDisplayString */.v_)($setup.apiURL), 1)]),
      _: 1
    }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_card_section, null, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [$setup.isLoading ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", _hoisted_2, [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_spinner_dots, {
        color: "primary",
        size: "50px"
      }), _hoisted_3])) : ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", _hoisted_4, [$setup.isConnected ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_q_banner, {
        key: 0,
        class: "bg-green text-white",
        icon: "check_circle"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)(" API ist verfügbar")]),
        _: 1
      })) : ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_q_banner, {
        key: 1,
        class: "bg-red text-white",
        icon: "error"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)(" API ist nicht verfügbar: " + (0,shared_esm_bundler/* toDisplayString */.v_)($setup.errorMessage), 1)]),
        _: 1
      }))]))]),
      _: 1
    })]),
    _: 1
  })]);
}
;// CONCATENATED MODULE: ./src/pages/ConnectionStatus.vue?vue&type=template&id=177a40da

// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(8734);
// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 48 modules
var axios = __webpack_require__(2303);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/ConnectionStatus.vue?vue&type=script&lang=js



// Expected error mode:
//
// - network error  (e.g., not internet connection at all, port error, DNS error, SSL protocol error)
// - timeout (e.g., destination IP not responding)
// - API error (not the expected REST API answer)

/* harmony default export */ const ConnectionStatusvue_type_script_lang_js = ({
  setup() {
    const isConnected = (0,reactivity_esm_bundler/* ref */.KR)(false);
    const errorMessage = (0,reactivity_esm_bundler/* ref */.KR)('');
    const isLoading = (0,reactivity_esm_bundler/* ref */.KR)(true);
    const apiURL = "http://192.168.0.102:8000" + '/room';
    const checkConnection = async () => {
      isLoading.value = true;
      try {
        const response = await axios/* default */.A.get(apiURL, {
          timeout: 2000
        }); // Replace with your API endpoint

        if (response.status === 200) {
          isConnected.value = true;
        } else {
          isConnected.value = false;
          errorMessage.value = `Invalid response from API ${response.statusText}`;
        }
      } catch (error) {
        // Note: Although we see more details about the error in the java script
        // console, I did not find any way to access them here?
        isConnected.value = false;
        errorMessage.value = `${error.message} - ${error.code}`;
        console.error(error);
      } finally {
        isLoading.value = false;
      }
    };
    checkConnection();
    return {
      isConnected,
      isLoading,
      checkConnection,
      apiURL,
      errorMessage
    };
  }
});
;// CONCATENATED MODULE: ./src/pages/ConnectionStatus.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(2807);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__(3316);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardSection.js
var QCardSection = __webpack_require__(4189);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinnerDots.js
var QSpinnerDots = __webpack_require__(9198);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/banner/QBanner.js
var QBanner = __webpack_require__(6868);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(8582);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/pages/ConnectionStatus.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(ConnectionStatusvue_type_script_lang_js, [['render',render]])

/* harmony default export */ const ConnectionStatus = (__exports__);
;




runtime_auto_import_default()(ConnectionStatusvue_type_script_lang_js, 'components', {QCard: QCard/* default */.A,QCardSection: QCardSection/* default */.A,QSpinnerDots: QSpinnerDots/* default */.A,QBanner: QBanner/* default */.A});


/***/ })

}]);
//# sourceMappingURL=309.e9c87dfd.js.map