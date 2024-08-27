"use strict";
(globalThis["webpackChunkpok"] = globalThis["webpackChunkpok"] || []).push([[664],{

/***/ 6166:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
//const apiUrl = 'http://192.168.2.111:8000';

const apiUrl = "http://192.168.0.102:8000";
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
    isPreventScreenDimming: false,
    roomStatus: null
  }),
  actions: {
    togglePreventScreenDimming() {
      this.isPreventScreenDimming = !this.isPreventScreenDimming;
    },
    setPreventScreenDimming(value) {
      this.isPreventScreenDimming = value;
    },
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
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(8790);
// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.mjs
var vue_router = __webpack_require__(455);
// EXTERNAL MODULE: ./src/stores/instruments-store.js
var instruments_store = __webpack_require__(6394);
// EXTERNAL MODULE: ./node_modules/quasar/src/composables/use-quasar/use-quasar.js
var use_quasar = __webpack_require__(4907);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/layouts/DesktopLayout.vue?vue&type=script&setup=true&lang=js






// Switch to light mode for wall display

/* harmony default export */ const DesktopLayoutvue_type_script_setup_true_lang_js = ({
  __name: 'DesktopLayout',
  setup(__props) {
    const $q = (0,use_quasar/* default */.A)();
    $q.dark.set(false);
    const store = (0,instruments_store/* useInstrumentStore */.Q)();
    store.checkBackendAvailability();
    const router = (0,vue_router/* useRouter */.rd)();
    function navigateTo(route) {
      router.push(route);
    }
    function goBack() {
      router.go(-1);
    }
    return (_ctx, _cache) => {
      const _component_q_btn = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-btn");
      const _component_q_toolbar_title = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-toolbar-title");
      const _component_q_toolbar = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-toolbar");
      const _component_q_header = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-header");
      const _component_router_view = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("router-view");
      const _component_q_page_container = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-page-container");
      const _component_q_layout = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-layout");
      return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_q_layout, {
        view: "hhh Lpr lFf"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [_ctx.$route.meta.showBackArrow ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_q_toolbar, {
          key: 0
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_btn, {
            flat: "",
            round: "",
            dense: "",
            icon: "arrow_back",
            onClick: goBack
          }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_toolbar_title, {
            class: "text-center"
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)((0,shared_esm_bundler/* toDisplayString */.v_)(_ctx.$route.meta.title), 1)]),
            _: 1
          })]),
          _: 1
        })) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true), _ctx.$route.meta.showBackArrow === undefined ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_q_header, {
          key: 1,
          class: "bg-white q-ml-md q-mt-md"
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_btn, {
            color: "primary",
            class: "q-mr-sm shadow-10",
            "no-caps": "",
            label: "Gitarre | Bass",
            onClick: _cache[0] || (_cache[0] = $event => navigateTo('/desktop/instruments/guitar'))
          }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_btn, {
            color: "primary",
            class: "q-mr-sm shadow-10",
            "no-caps": "",
            label: "Schlagzeug | Piano",
            onClick: _cache[1] || (_cache[1] = $event => navigateTo('/desktop/instruments/piano-and-drums'))
          }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_btn, {
            color: "primary",
            class: "q-mr-sm shadow-10",
            "no-caps": "",
            label: "Proberaum",
            onClick: _cache[2] || (_cache[2] = $event => navigateTo('/desktop'))
          }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_btn, {
            color: "primary",
            class: "q-mr-sm shadow-10",
            "no-caps": "",
            label: "Einstellungen",
            onClick: _cache[3] || (_cache[3] = $event => navigateTo('/desktop/room'))
          })]),
          _: 1
        })) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_page_container, null, {
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
// EXTERNAL MODULE: ./node_modules/quasar/src/components/toolbar/QToolbar.js
var QToolbar = __webpack_require__(6914);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__(6384);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/toolbar/QToolbarTitle.js
var QToolbarTitle = __webpack_require__(9150);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/header/QHeader.js
var QHeader = __webpack_require__(8416);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPageContainer.js
var QPageContainer = __webpack_require__(5205);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(8582);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/layouts/DesktopLayout.vue



const __exports__ = DesktopLayoutvue_type_script_setup_true_lang_js;

/* harmony default export */ const DesktopLayout = (__exports__);
;






runtime_auto_import_default()(DesktopLayoutvue_type_script_setup_true_lang_js, 'components', {QLayout: QLayout/* default */.A,QToolbar: QToolbar/* default */.A,QBtn: QBtn/* default */.A,QToolbarTitle: QToolbarTitle/* default */.A,QHeader: QHeader/* default */.A,QPageContainer: QPageContainer/* default */.A});


/***/ })

}]);
//# sourceMappingURL=664.685a840a.js.map