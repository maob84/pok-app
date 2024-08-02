(globalThis["webpackChunkpok"] = globalThis["webpackChunkpok"] || []).push([[996],{

/***/ 6166:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $r: () => (/* binding */ toggleInstrumentMute),
/* harmony export */   Bz: () => (/* binding */ turnTunerOn),
/* harmony export */   Cl: () => (/* binding */ updateInstrumentPanorama),
/* harmony export */   GY: () => (/* binding */ getRoomPresetCollections),
/* harmony export */   LO: () => (/* binding */ selectInstrumentPreset),
/* harmony export */   O8: () => (/* binding */ getCurrentRoomPresetCollection),
/* harmony export */   Qy: () => (/* binding */ getInstrumentById),
/* harmony export */   RV: () => (/* binding */ updateInstrumentVolume),
/* harmony export */   U8: () => (/* binding */ selectCurrentRoomPresetCollection),
/* harmony export */   Zr: () => (/* binding */ resetRoom),
/* harmony export */   mw: () => (/* binding */ getControlQrImage),
/* harmony export */   ok: () => (/* binding */ getWifiQrImage),
/* harmony export */   pB: () => (/* binding */ getInstruments),
/* harmony export */   uB: () => (/* binding */ getTuning),
/* harmony export */   uJ: () => (/* binding */ getRoomStatus),
/* harmony export */   xr: () => (/* binding */ turnTunerOff)
/* harmony export */ });
/* unused harmony exports apiClient, getTunerState */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2303);


//const apiUrl = process.env.VUE_APP_API_URL || 'http://192.168.1.9:8000';
//const apiUrl = 'https://room.proben-ohne-krach.de:443';
const apiUrl = 'http://192.168.2.111:8000';
const apiClient = axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json'
  }
});

// General room services
const getRoomPresetCollections = () => apiClient.get('/room/presetcollections');
const getCurrentRoomPresetCollection = () => apiClient.get('/room/presetcollections/current');
const selectCurrentRoomPresetCollection = id => apiClient.put('/room/presetcollections/current', null, {
  params: {
    id: id
  }
});
const resetRoom = () => apiClient.post('/room/reset');
const getWifiQrImage = () => apiClient.get('/room/wifi-qr-code', {
  responseType: 'blob'
});
const getControlQrImage = () => apiClient.get('/room/control-qr-code', {
  responseType: 'blob'
});
const getRoomStatus = () => apiClient.get('/room');

// Instrument services
const getInstruments = () => apiClient.get('/instruments');
const getInstrumentById = id => apiClient.get(`/instruments/${id}`);
const updateInstrumentVolume = (id, volume) => apiClient.patch(`/instruments/${id}/volume`, null, {
  params: {
    volume: volume
  }
});
const updateInstrumentPanorama = (id, panorama) => apiClient.patch(`/instruments/${id}/panorama`, null, {
  params: {
    panorama: panorama
  }
});
const selectInstrumentPreset = (id, preset_id) => apiClient.patch(`/instruments/${id}/preset`, null, {
  params: {
    preset_id: preset_id
  }
});
const toggleInstrumentMute = id => apiClient.patch(`/instruments/${id}/mute`);

// Tuner services
const getTunerState = id => apiClient.get(`/instruments/${id}/tuner`);
const turnTunerOn = id => apiClient.post(`/instruments/${id}/tuner/on`);
const turnTunerOff = id => apiClient.post(`/instruments/${id}/tuner/off`);
const getTuning = id => apiClient.get(`/instruments/${id}/tuning`);

/***/ }),

/***/ 6394:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ useInstrumentStore)
/* harmony export */ });
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1555);
/* harmony import */ var _services_apiServices__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6166);
/* harmony import */ var _boot_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(660);



const useInstrumentStore = (0,pinia__WEBPACK_IMPORTED_MODULE_2__/* .defineStore */ .nY)('instrumentStore', {
  state: () => ({
    isBackendAvailable: false,
    selectedInstrumentId: null,
    selectedInstrumentName: null,
    selectedInstrumentType: null,
    selectedPresetCollectionName: null,
    roomStatus: null
  }),
  actions: {
    checkBackendAvailability() {
      console.log('Checking backend availability...');
      const response = _boot_axios__WEBPACK_IMPORTED_MODULE_1__.api.get('room').then(response => {
        if (response.status === 200) {
          this.isBackendAvailable = true;
          this.roomStatus = response.data;
          this.updateStore();
        } else {
          this.isBackendAvailable = false;
        }
      }).catch(error => {
        console.log('Backend service is not available:', error);
        this.isBackendAvailable = false;
      });
    },
    setSelectedInstrument(id, name, type) {
      this.selectedInstrumentId = id;
      this.selectedInstrumentName = name;
      this.selectedInstrumentType = type;
    },
    setPresetCollection(name) {
      this.selectedPresetCollectionName = name;
    },
    updateStore() {
      (0,_services_apiServices__WEBPACK_IMPORTED_MODULE_0__/* .getCurrentRoomPresetCollection */ .O8)().then(response => {
        this.selectedPresetCollectionName = response.data.name;
      }).catch(error => {
        console.error('Error getting preset collection:', error);
      });
    }
  },
  getters: {
    getSelectedPresetCollectionName: state => state.selectedPresetCollectionName,
    getSelectedInstrumentId: state => state.selectedInstrumentId,
    getSelectedInstrumentName: state => state.selectedInstrumentName,
    getSelectedInstrumentType: state => state.selectedInstrumentType,
    selectedInstrumentHasTuner: state => state.selectedInstrumentType === 'guitar'
  }
});

/***/ }),

/***/ 6006:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ BackendStatus)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(1758);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/BackendStatus.vue?vue&type=template&id=0c0600b4

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_icon = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-icon");
  const _component_q_spinner = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-spinner");
  const _component_q_btn = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-btn");
  const _component_q_banner = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-banner");
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", null, [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_banner, {
    dense: "",
    class: "bg-primary text-white"
  }, {
    avatar: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_icon, {
      name: "signal_wifi_off"
    })]),
    action: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_btn, {
      flat: "",
      "no-caps": "",
      label: "Erneute versuchen",
      loading: $data.isLoading,
      icon: "refresh",
      color: "white",
      onClick: $options.retry
    }, {
      loading: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_spinner, {
        class: "on-left"
      })]),
      _: 1
    }, 8, ["loading", "onClick"])]),
    default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)(" Es besteht keine Verbindung zum Proberaum. Bitte überprüfe die Verbindung zum Proberaum-WLAN. ")]),
    _: 1
  })]);
}
// EXTERNAL MODULE: ./src/stores/instruments-store.js
var instruments_store = __webpack_require__(6394);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/BackendStatus.vue?vue&type=script&lang=js

/* harmony default export */ const BackendStatusvue_type_script_lang_js = ({
  data() {
    return {
      isLoading: false
    };
  },
  setup() {
    const store = (0,instruments_store/* useInstrumentStore */.Q)();
  },
  computed: {
    isAvailable() {
      const store = (0,instruments_store/* useInstrumentStore */.Q)();
      return store.isBackendAvailable;
    }
  },
  methods: {
    retry() {
      const store = (0,instruments_store/* useInstrumentStore */.Q)();
      this.isLoading = true;
      store.checkBackendAvailability();
      setTimeout(() => {
        this.isLoading = false;
      }, 1500);
    }
  }
});
;// CONCATENATED MODULE: ./src/components/BackendStatus.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(2807);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/banner/QBanner.js
var QBanner = __webpack_require__(6868);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__(492);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__(6384);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinner.js + 1 modules
var QSpinner = __webpack_require__(564);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(8582);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/components/BackendStatus.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(BackendStatusvue_type_script_lang_js, [['render',render]])

/* harmony default export */ const BackendStatus = (__exports__);
;




runtime_auto_import_default()(BackendStatusvue_type_script_lang_js, 'components', {QBanner: QBanner/* default */.A,QIcon: QIcon/* default */.A,QBtn: QBtn/* default */.A,QSpinner: QSpinner/* default */.A});


/***/ }),

/***/ 4477:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ InstrumentSelectorDialog)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(1758);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/InstrumentSelectorDialog.vue?vue&type=template&id=665d00b6&scoped=true

const _withScopeId = n => (_pushScopeId("data-v-665d00b6"), n = n(), _popScopeId(), n);
const _hoisted_1 = {
  class: "column q-pa-md full-width"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_toolbar_title = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-toolbar-title");
  const _component_q_btn = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-btn");
  const _component_q_toolbar = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-toolbar");
  const _component_q_card_section = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-card-section");
  const _component_q_card = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-card");
  const _component_q_dialog = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-dialog");
  const _directive_close_popup = (0,runtime_core_esm_bundler/* resolveDirective */.gN)("close-popup");
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_q_dialog, {
    modelValue: $data.showDialog,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $data.showDialog = $event)
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_card, null, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_toolbar, null, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_toolbar_title, null, {
          default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("Instrumentauswahl")]),
          _: 1
        }), (0,runtime_core_esm_bundler/* withDirectives */.bo)((0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_btn, {
          flat: "",
          round: "",
          dense: "",
          icon: "close"
        }, null, 512), [[_directive_close_popup]])]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_card_section, null, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)(" Wähle aus, welches Instrument du gerne über die App steuern möchtest. ")]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_card_section, {
        class: "flex flex-center"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_1, [((0,runtime_core_esm_bundler/* openBlock */.uX)(true), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, null, (0,runtime_core_esm_bundler/* renderList */.pI)($data.instruments, instrument => {
          return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_q_btn, {
            padding: "sm lg",
            rounded: "",
            "no-caps": "",
            color: "primary",
            size: "lg",
            class: "full-width q-mb-md",
            label: instrument.name,
            key: instrument.id,
            onClick: $event => $options.selectInstrument(instrument.name, instrument.id, instrument.type)
          }, null, 8, ["label", "onClick"]);
        }), 128))])]),
        _: 1
      })]),
      _: 1
    })]),
    _: 1
  }, 8, ["modelValue"]);
}
;// CONCATENATED MODULE: ./src/components/InstrumentSelectorDialog.vue?vue&type=template&id=665d00b6&scoped=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(239);
// EXTERNAL MODULE: ./src/stores/instruments-store.js
var instruments_store = __webpack_require__(6394);
// EXTERNAL MODULE: ./src/services/apiServices.js
var apiServices = __webpack_require__(6166);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/InstrumentSelectorDialog.vue?vue&type=script&lang=js



/* harmony default export */ const InstrumentSelectorDialogvue_type_script_lang_js = ({
  setup() {
    const store = (0,instruments_store/* useInstrumentStore */.Q)();
    const setInstrument = (id, name, type) => {
      store.setSelectedInstrument(id, name, type);
    };
    return {
      setInstrument
    };
  },
  name: 'InstrumentSelectorDialog',
  data() {
    return {
      isOpen: false,
      instruments: [],
      loading: true,
      showDialog: false
    };
  },
  mounted() {
    this.fetchInstruments();
  },
  methods: {
    fetchInstruments() {
      (0,apiServices/* getInstruments */.pB)().then(response => {
        this.instruments = response.data;
        this.loading = false;
      }).catch(error => {
        console.error('Error fetching instruments:', error);
        this.loading = false;
      });
    },
    show() {
      this.showDialog = true;
    },
    close() {
      this.showDialog = false;
    },
    selectInstrument(name, id, type) {
      const store = (0,instruments_store/* useInstrumentStore */.Q)();
      console.log(`Instrument selected! '${name}' '${id}' '${type}'`);
      this.setInstrument(id, name, type);
      this.close();
      this.$router.push('/instrument');
    }
  }
});
;// CONCATENATED MODULE: ./src/components/InstrumentSelectorDialog.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(2807);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/dialog/QDialog.js + 5 modules
var QDialog = __webpack_require__(4937);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__(3316);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/toolbar/QToolbar.js
var QToolbar = __webpack_require__(6914);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/toolbar/QToolbarTitle.js
var QToolbarTitle = __webpack_require__(9150);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__(6384);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardSection.js
var QCardSection = __webpack_require__(4189);
// EXTERNAL MODULE: ./node_modules/quasar/src/directives/close-popup/ClosePopup.js
var ClosePopup = __webpack_require__(8672);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(8582);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/components/InstrumentSelectorDialog.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(InstrumentSelectorDialogvue_type_script_lang_js, [['render',render],['__scopeId',"data-v-665d00b6"]])

/* harmony default export */ const InstrumentSelectorDialog = (__exports__);
;






runtime_auto_import_default()(InstrumentSelectorDialogvue_type_script_lang_js, 'components', {QDialog: QDialog/* default */.A,QCard: QCard/* default */.A,QToolbar: QToolbar/* default */.A,QToolbarTitle: QToolbarTitle/* default */.A,QBtn: QBtn/* default */.A,QCardSection: QCardSection/* default */.A});runtime_auto_import_default()(InstrumentSelectorDialogvue_type_script_lang_js, 'directives', {ClosePopup: ClosePopup/* default */.A});


/***/ }),

/***/ 2649:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ PanoramaDialog)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(1758);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/PanoramaDialog.vue?vue&type=template&id=0d108ca8

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_toolbar_title = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-toolbar-title");
  const _component_q_btn = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-btn");
  const _component_q_toolbar = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-toolbar");
  const _component_q_btn_toggle = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-btn-toggle");
  const _component_q_card_section = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-card-section");
  const _component_q_card = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-card");
  const _component_q_dialog = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-dialog");
  const _directive_close_popup = (0,runtime_core_esm_bundler/* resolveDirective */.gN)("close-popup");
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_q_dialog, {
    modelValue: $data.showDialog,
    "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => $data.showDialog = $event)
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_card, null, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_toolbar, null, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_toolbar_title, null, {
          default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("Panorama festlegen")]),
          _: 1
        }), (0,runtime_core_esm_bundler/* withDirectives */.bo)((0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_btn, {
          flat: "",
          round: "",
          dense: "",
          icon: "close"
        }, null, 512), [[_directive_close_popup]])]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_card_section, {
        class: "q-ma-lg"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_btn_toggle, {
          "no-caps": "",
          modelValue: $data.panorama,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $data.panorama = $event),
          rounded: "",
          onClick: _cache[1] || (_cache[1] = $event => $options.changePanoramaAbsolut(this.panorama)),
          "toggle-color": "primary",
          options: [{
            label: 'Halblinks',
            value: 25
          }, {
            label: 'Mitte',
            value: 63
          }, {
            label: 'Halbrechts',
            value: 102
          }]
        }, null, 8, ["modelValue"])]),
        _: 1
      })]),
      _: 1
    })]),
    _: 1
  }, 8, ["modelValue"]);
}
// EXTERNAL MODULE: ./src/stores/instruments-store.js
var instruments_store = __webpack_require__(6394);
// EXTERNAL MODULE: ./src/services/apiServices.js
var apiServices = __webpack_require__(6166);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/PanoramaDialog.vue?vue&type=script&lang=js



/* harmony default export */ const PanoramaDialogvue_type_script_lang_js = ({
  name: 'PanoramaDialog',
  setup() {},
  data() {
    return {
      showDialog: false,
      panorama: 0,
      panoramaToggle: 'center',
      data: null,
      instrumentId: null
    };
  },
  computed: {
    intPanorama: {
      get() {
        return this.panorama;
      },
      set(value) {
        let panorama = parseInt(value, 10);
        this.changePanorama(panorama - this.panorama);
      }
    }
  },
  methods: {
    updateInstrumentState(selectedInstrumentId) {
      if (!selectedInstrumentId) return;
      (0,apiServices/* getInstrumentById */.Qy)(selectedInstrumentId).then(response => {
        if (response.data.panorama <= 25) {
          this.panorama = 25;
        } else if (response.data.panorama >= 102) {
          this.panorama = 102;
        } else {
          this.panorama = 63;
        }
      }).catch(error => {
        console.error('Error fetching instrument state:', error);
      });
    },
    show(instrumentId) {
      this.instrumentId = instrumentId;
      this.updateInstrumentState(this.instrumentId);
      this.showDialog = true;
    },
    close() {
      this.showDialog = false;
    },
    changePanoramaAbsolut(panorama) {
      this.panorama = panorama;
      (0,apiServices/* updateInstrumentPanorama */.Cl)(this.instrumentId, panorama).then(response => {
        this.panorama = response.data.panorama;
      }).catch(error => {
        console.error('Error updating instrument panorama:', error);
      });
    },
    changePanorama(direction) {
      const newPanorma = Math.max(0, Math.min(127, this.panorama + direction));
      this.panorama = newPanorma;
      (0,apiServices/* updateInstrumentPanorama */.Cl)(this.instrumentId, newPanorma).then(response => {
        this.panorama = response.data.panorama;
      }).catch(error => {
        console.error('Error updating instrument panorama:', error);
      });
    }
  }
});
;// CONCATENATED MODULE: ./src/components/PanoramaDialog.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(2807);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/dialog/QDialog.js + 5 modules
var QDialog = __webpack_require__(4937);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__(3316);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/toolbar/QToolbar.js
var QToolbar = __webpack_require__(6914);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/toolbar/QToolbarTitle.js
var QToolbarTitle = __webpack_require__(9150);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__(6384);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardSection.js
var QCardSection = __webpack_require__(4189);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn-toggle/QBtnToggle.js + 1 modules
var QBtnToggle = __webpack_require__(6939);
// EXTERNAL MODULE: ./node_modules/quasar/src/directives/close-popup/ClosePopup.js
var ClosePopup = __webpack_require__(8672);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(8582);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/components/PanoramaDialog.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(PanoramaDialogvue_type_script_lang_js, [['render',render]])

/* harmony default export */ const PanoramaDialog = (__exports__);
;







runtime_auto_import_default()(PanoramaDialogvue_type_script_lang_js, 'components', {QDialog: QDialog/* default */.A,QCard: QCard/* default */.A,QToolbar: QToolbar/* default */.A,QToolbarTitle: QToolbarTitle/* default */.A,QBtn: QBtn/* default */.A,QCardSection: QCardSection/* default */.A,QBtnToggle: QBtnToggle/* default */.A});runtime_auto_import_default()(PanoramaDialogvue_type_script_lang_js, 'directives', {ClosePopup: ClosePopup/* default */.A});


/***/ }),

/***/ 9627:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ TunerDialog)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(1758);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(8790);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/TunerDialog.vue?vue&type=template&id=6d7ab4ee&scoped=true

const _withScopeId = n => ((0,runtime_core_esm_bundler/* pushScopeId */.Qi)("data-v-6d7ab4ee"), n = n(), (0,runtime_core_esm_bundler/* popScopeId */.jt)(), n);
const _hoisted_1 = {
  class: "tuner-device"
};
const _hoisted_2 = {
  class: "tuner-container"
};
const _hoisted_3 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
  class: "circle fixed-background-circle"
}, null, -1));
const _hoisted_4 = {
  class: "circle note-circle"
};
const _hoisted_5 = {
  class: "cents-container"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_toolbar_title = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-toolbar-title");
  const _component_q_btn = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-btn");
  const _component_q_toolbar = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-toolbar");
  const _component_q_card_section = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-card-section");
  const _component_q_card = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-card");
  const _component_q_dialog = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-dialog");
  const _directive_close_popup = (0,runtime_core_esm_bundler/* resolveDirective */.gN)("close-popup");
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_q_dialog, {
    modelValue: $data.showDialog,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $data.showDialog = $event),
    onHide: $options.close
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_card, null, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_toolbar, null, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_toolbar_title, null, {
          default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("Chromatisches Stimmgerät")]),
          _: 1
        }), (0,runtime_core_esm_bundler/* withDirectives */.bo)((0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_btn, {
          flat: "",
          round: "",
          dense: "",
          icon: "close"
        }, null, 512), [[_directive_close_popup]])]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_card_section, {
        class: "flex flex-center"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_1, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_2, [_hoisted_3, (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
          class: (0,shared_esm_bundler/* normalizeClass */.C4)(["circle moving-circle", $options.isInTune]),
          style: (0,shared_esm_bundler/* normalizeStyle */.Tr)({
            left: $options.centsToPosition
          })
        }, null, 6), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_4, (0,shared_esm_bundler/* toDisplayString */.v_)($data.note), 1), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
          class: "triangle left-triangle",
          style: (0,shared_esm_bundler/* normalizeStyle */.Tr)({
            display: $options.leftTriangleDisplayStyle
          })
        }, null, 4), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
          class: "triangle right-triangle",
          style: (0,shared_esm_bundler/* normalizeStyle */.Tr)({
            display: $options.rightTriangleDisplayStyle
          })
        }, null, 4)]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_5, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", null, (0,shared_esm_bundler/* toDisplayString */.v_)($options.displayCents), 1)])])]),
        _: 1
      })]),
      _: 1
    })]),
    _: 1
  }, 8, ["modelValue", "onHide"]);
}
;// CONCATENATED MODULE: ./src/components/TunerDialog.vue?vue&type=template&id=6d7ab4ee&scoped=true

// EXTERNAL MODULE: ./src/stores/instruments-store.js
var instruments_store = __webpack_require__(6394);
// EXTERNAL MODULE: ./src/services/apiServices.js
var apiServices = __webpack_require__(6166);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/TunerDialog.vue?vue&type=script&lang=js



/* harmony default export */ const TunerDialogvue_type_script_lang_js = ({
  name: 'TemplateDialog',
  setup() {},
  data() {
    return {
      showDialog: false,
      note: 'E',
      cents: '0',
      intervalId: null,
      instrumentId: null
    };
  },
  computed: {
    isInTune() {
      return {
        'green-circle': this.cents >= -2 && this.cents <= 2
      };
    },
    displayCents: {
      get() {
        return this.cents + ' ct';
      }
    },
    centsToPosition: {
      get() {
        const deviation = Math.min(Math.max(parseInt(this.cents), -10), 10);
        return deviation * 5 + 75 + 'px';
      }
    },
    leftTriangleDisplayStyle: {
      get() {
        if (this.cents < -2) {
          return 'block';
        } else {
          return 'none';
        }
      }
    },
    rightTriangleDisplayStyle: {
      get() {
        if (this.cents > 2) {
          return 'block';
        } else {
          return 'none';
        }
      }
    }
  },
  methods: {
    startTuner() {
      if (!this.instrumentId) {
        return;
      }
      (0,apiServices/* turnTunerOn */.Bz)(this.instrumentId).catch(error => {
        console.error('Error starting tuner:', error);
      });
    },
    stopTuner() {
      if (!this.instrumentId) {
        return;
      }
      (0,apiServices/* turnTunerOff */.xr)(this.instrumentId).catch(error => {
        console.error('Error stopping tuner:', error);
      });
    },
    fetchTuning() {
      if (!this.instrumentId) {
        return;
      }
      (0,apiServices/* getTuning */.uB)(this.instrumentId).then(response => {
        this.note = response.data.note;
        this.cents = response.data.deviation;
      }).catch(error => {
        console.error('Error fetching tuning:', error);
      });
    },
    show(instrumentId) {
      this.instrumentId = instrumentId;
      this.showDialog = true;
      this.startTuner();
      this.fetchTuning();
      if (this.instrumentId) {
        this.intervalId = setInterval(this.fetchTuning, 500);
      }
    },
    close() {
      if (this.intervalId) {
        clearInterval(this.intervalId);
      }
      this.stopTuner();
      this.showDialog = false;
    }
  }
});
;// CONCATENATED MODULE: ./src/components/TunerDialog.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(2807);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/dialog/QDialog.js + 5 modules
var QDialog = __webpack_require__(4937);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__(3316);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/toolbar/QToolbar.js
var QToolbar = __webpack_require__(6914);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/toolbar/QToolbarTitle.js
var QToolbarTitle = __webpack_require__(9150);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__(6384);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardSection.js
var QCardSection = __webpack_require__(4189);
// EXTERNAL MODULE: ./node_modules/quasar/src/directives/close-popup/ClosePopup.js
var ClosePopup = __webpack_require__(8672);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(8582);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/components/TunerDialog.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(TunerDialogvue_type_script_lang_js, [['render',render],['__scopeId',"data-v-6d7ab4ee"]])

/* harmony default export */ const TunerDialog = (__exports__);
;






runtime_auto_import_default()(TunerDialogvue_type_script_lang_js, 'components', {QDialog: QDialog/* default */.A,QCard: QCard/* default */.A,QToolbar: QToolbar/* default */.A,QToolbarTitle: QToolbarTitle/* default */.A,QBtn: QBtn/* default */.A,QCardSection: QCardSection/* default */.A});runtime_auto_import_default()(TunerDialogvue_type_script_lang_js, 'directives', {ClosePopup: ClosePopup/* default */.A});


/***/ }),

/***/ 9394:
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABZ0lEQVR4nO2VvUoDQRSFPzWohVGxSKUvYBpL0VZQH8D30EJfIYJikYCViK1WgpJCVBAFsdQ0EpImdqLiT6MgrgwcYVhwd4dhlxR7YGDOneF+u7Nz70KueN0A15a/1EhdgcZ/PgcnVg+wDdwCQx5HbfJcAMdAfxLwmhK9ACMe4F6gpbVaHLQEfAA/wLxi5mkHHMAFYFjzKeAT+AbKUeAVJTmUNwmawL0D+AR4Bsblq1rfigLXtWlJflP+zAG8K38gPy3fiAI3tKkc8rMO4An5N/mi/LsL+M4D/OoCroeOekP+3AG8J7/vctTLoctVVEk0HcCnwJN1uWpJLldJR2LKacEqp0EHsL3flNOXymmSGK1aDWTMo4H0AW2tVUkg0+p2VLujnp3rCjhK2jK79rf4KNCMyixQLHWtW2/5N0wsdRWAigWtKJaZgqy+bVeA5yywmWemtgU288z0YIE7WYIXBe9YPT0XUfoFc7KpuH2v/QcAAAAASUVORK5CYII="

/***/ })

}]);
//# sourceMappingURL=chunk-common.c68f141a.js.map