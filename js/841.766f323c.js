"use strict";
(globalThis["webpackChunkpok"] = globalThis["webpackChunkpok"] || []).push([[841],{

/***/ 841:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ HomePage)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(1758);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(8790);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/desktop/HomePage.vue?vue&type=template&id=2f29a201

const _hoisted_1 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
  class: "text-h5"
}, "Proben ohne Krach - Herzlich Willkommen und viel Spaß!", -1);
const _hoisted_2 = {
  key: 0
};
const _hoisted_3 = ["src"];
const _hoisted_4 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
  class: "text-weight-bold q-mt-md"
}, "Wifi-Zugang", -1);
const _hoisted_5 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("br", null, null, -1);
const _hoisted_6 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
  style: {
    "width": "200px"
  }
}, null, -1);
const _hoisted_7 = {
  key: 0
};
const _hoisted_8 = ["src"];
const _hoisted_9 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
  class: "text-weight-bold q-mt-md"
}, "Raumsteuerung", -1);
const _hoisted_10 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("ol", null, [/*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("li", null, "Verbinde dich zuerst über den linken QR-Code mit unserem Proberaum-Wifi."), /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("li", null, "Anschließend kannst du den rechten QR-Code nutzen, um die Instrumente über dein Telefon/Tablet vom Platz aus zu steuern.")], -1);
const _hoisted_11 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
  class: "text-h6"
}, "Du brauchst Hilfe?", -1);
const _hoisted_12 = {
  class: "text-weight-bold"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_card_section = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-card-section");
  const _component_backend_status = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("backend-status");
  const _component_q_card = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-card");
  const _component_q_page = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-page");
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_q_page, null, {
    default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_card, {
      flat: ""
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_card_section, null, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [_hoisted_1]),
        _: 1
      }), !$options.isBackendAvailable ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_q_card_section, {
        key: 0
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_backend_status)]),
        _: 1
      })) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_card_section, {
        horizontal: "",
        class: "q-ml-xl"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", null, [$data.wifi_qr_image_url ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", _hoisted_2, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("img", {
          src: $data.wifi_qr_image_url,
          alt: "Wifi QR code",
          class: "q-mt-md"
        }, null, 8, _hoisted_3)])) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true), _hoisted_4, (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", null, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("WLAN: " + (0,shared_esm_bundler/* toDisplayString */.v_)($data.wifi_sid) + " ", 1), _hoisted_5, (0,runtime_core_esm_bundler/* createTextVNode */.eW)("Passwort: " + (0,shared_esm_bundler/* toDisplayString */.v_)($data.wifi_password), 1)])]), _hoisted_6, (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", null, [$data.control_qr_image_url ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", _hoisted_7, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("img", {
          src: $data.control_qr_image_url,
          alt: "App QR code",
          class: "q-mt-md"
        }, null, 8, _hoisted_8)])) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true), _hoisted_9])]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_card_section, null, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [_hoisted_10]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_card_section, null, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [_hoisted_11, (0,runtime_core_esm_bundler/* createTextVNode */.eW)(" Bei Problemen bitte einfach unter "), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", _hoisted_12, (0,shared_esm_bundler/* toDisplayString */.v_)($data.contact_info), 1), (0,runtime_core_esm_bundler/* createTextVNode */.eW)(" melden. Wir helfen dann so schnell wie möglich weiter. ")]),
        _: 1
      })]),
      _: 1
    })]),
    _: 1
  });
}
;// CONCATENATED MODULE: ./src/pages/desktop/HomePage.vue?vue&type=template&id=2f29a201

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url-search-params.delete.js
var web_url_search_params_delete = __webpack_require__(7396);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url-search-params.has.js
var web_url_search_params_has = __webpack_require__(923);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url-search-params.size.js
var web_url_search_params_size = __webpack_require__(9502);
// EXTERNAL MODULE: ./src/components/BackendStatus.vue + 3 modules
var BackendStatus = __webpack_require__(6006);
// EXTERNAL MODULE: ./src/stores/instruments-store.js
var instruments_store = __webpack_require__(6394);
// EXTERNAL MODULE: ./src/services/apiServices.js
var apiServices = __webpack_require__(6166);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/desktop/HomePage.vue?vue&type=script&lang=js






/* harmony default export */ const HomePagevue_type_script_lang_js = ({
  setup() {},
  data() {
    return {
      wifi_qr_image_url: null,
      control_qr_image_url: null,
      wifi_sid: 'ProbenOhneKrach',
      wifi_password: '12345678',
      contact_info: '0151 12345678'
    };
  },
  components: {
    BackendStatus: BackendStatus/* default */.A
  },
  created() {
    this.fetchImages();
    this.fetchRoomStatus();
  },
  methods: {
    fetchRoomStatus() {
      (0,apiServices/* getRoomStatus */.uJ)().then(response => {
        this.wifi_sid = response.data.wifi_sid;
        this.wifi_password = response.data.wifi_password;
        this.contact_info = response.data.contact_info;
      }).catch(error => {
        console.error('Error fetching room status:', error);
      });
    },
    fetchImages() {
      (0,apiServices/* getWifiQrImage */.ok)().then(response => {
        this.wifi_qr_image_url = URL.createObjectURL(response.data);
      }).catch(error => {
        console.error('Error fetching wifi QR code:', error);
      });
      (0,apiServices/* getControlQrImage */.mw)().then(response => {
        this.control_qr_image_url = URL.createObjectURL(response.data);
      }).catch(error => {
        console.error('Error fetching control QR code:', error);
      });
    }
  },
  computed: {
    isBackendAvailable() {
      const store = (0,instruments_store/* useInstrumentStore */.Q)();
      return store.isBackendAvailable;
    }
  }
});
;// CONCATENATED MODULE: ./src/pages/desktop/HomePage.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(2807);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__(7716);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__(3316);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardSection.js
var QCardSection = __webpack_require__(4189);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(8582);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/pages/desktop/HomePage.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(HomePagevue_type_script_lang_js, [['render',render]])

/* harmony default export */ const HomePage = (__exports__);
;



runtime_auto_import_default()(HomePagevue_type_script_lang_js, 'components', {QPage: QPage/* default */.A,QCard: QCard/* default */.A,QCardSection: QCardSection/* default */.A});


/***/ })

}]);
//# sourceMappingURL=841.766f323c.js.map