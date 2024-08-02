"use strict";
(globalThis["webpackChunkpok"] = globalThis["webpackChunkpok"] || []).push([[664],{

/***/ 6664:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ DesktopLayout)
});

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(239);
// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(1758);
// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.mjs
var vue_router = __webpack_require__(455);
// EXTERNAL MODULE: ./src/stores/instruments-store.js
var instruments_store = __webpack_require__(6394);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/layouts/DesktopLayout.vue?vue&type=script&setup=true&lang=js




/* harmony default export */ const DesktopLayoutvue_type_script_setup_true_lang_js = ({
  __name: 'DesktopLayout',
  setup(__props) {
    const store = (0,instruments_store/* useInstrumentStore */.Q)();
    store.checkBackendAvailability();
    const router = (0,vue_router/* useRouter */.rd)();
    function navigateTo(route) {
      router.push(route);
    }
    return (_ctx, _cache) => {
      const _component_q_btn = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-btn");
      const _component_q_header = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-header");
      const _component_router_view = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("router-view");
      const _component_q_page_container = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-page-container");
      const _component_q_layout = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-layout");
      return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_q_layout, {
        view: "hhh Lpr lFf"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_header, {
          class: "bg-white text-black"
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_btn, {
            color: "primary",
            class: "q-mx-sm q-my-sm",
            "no-caps": "",
            label: "Start",
            onClick: _cache[0] || (_cache[0] = $event => navigateTo('/desktop'))
          }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_btn, {
            color: "primary",
            class: "q-mr-sm",
            "no-caps": "",
            label: "Gitarre | Bass",
            onClick: _cache[1] || (_cache[1] = $event => navigateTo('/desktop/instruments/guitar'))
          }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_btn, {
            color: "primary",
            class: "q-mr-sm",
            "no-caps": "",
            label: "Schlagzeug | Piano",
            onClick: _cache[2] || (_cache[2] = $event => navigateTo('/desktop/instruments/piano-and-drums'))
          }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_btn, {
            color: "primary",
            class: "q-mr-sm",
            "no-caps": "",
            label: "Einstellungen",
            onClick: _cache[3] || (_cache[3] = $event => navigateTo('/desktop/room'))
          })]),
          _: 1
        }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_page_container, null, {
          default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_router_view)]),
          _: 1
        })]),
        _: 1
      });
    };
  }
});
;// CONCATENATED MODULE: ./src/layouts/DesktopLayout.vue?vue&type=script&setup=true&lang=js
 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/layout/QLayout.js
var QLayout = __webpack_require__(2008);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/header/QHeader.js
var QHeader = __webpack_require__(8416);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__(6384);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPageContainer.js
var QPageContainer = __webpack_require__(5205);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(8582);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/layouts/DesktopLayout.vue



const __exports__ = DesktopLayoutvue_type_script_setup_true_lang_js;

/* harmony default export */ const DesktopLayout = (__exports__);
;




runtime_auto_import_default()(DesktopLayoutvue_type_script_setup_true_lang_js, 'components', {QLayout: QLayout/* default */.A,QHeader: QHeader/* default */.A,QBtn: QBtn/* default */.A,QPageContainer: QPageContainer/* default */.A});


/***/ })

}]);
//# sourceMappingURL=664.77654472.js.map