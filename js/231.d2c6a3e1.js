"use strict";
(globalThis["webpackChunkpok"] = globalThis["webpackChunkpok"] || []).push([[231],{

/***/ 6166:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $r: () => (/* binding */ toggleInstrumentMute),
/* harmony export */   Bz: () => (/* binding */ turnTunerOn),
/* harmony export */   Cl: () => (/* binding */ updateInstrumentPanorama),
/* harmony export */   Eo: () => (/* binding */ getControlQrImage2),
/* harmony export */   GA: () => (/* binding */ api_getRecordings),
/* harmony export */   GY: () => (/* binding */ getRoomPresetCollections),
/* harmony export */   LO: () => (/* binding */ selectInstrumentPreset),
/* harmony export */   O8: () => (/* binding */ getCurrentRoomPresetCollection),
/* harmony export */   Qy: () => (/* binding */ getInstrumentById),
/* harmony export */   RV: () => (/* binding */ updateInstrumentVolume),
/* harmony export */   U8: () => (/* binding */ selectCurrentRoomPresetCollection),
/* harmony export */   Y0: () => (/* binding */ api_deleteRecording),
/* harmony export */   Zq: () => (/* binding */ api_stopPlayback),
/* harmony export */   Zr: () => (/* binding */ resetRoom),
/* harmony export */   dn: () => (/* binding */ api_stopRecording),
/* harmony export */   jo: () => (/* binding */ api_startRecording),
/* harmony export */   kR: () => (/* binding */ api_getRecorderStatus),
/* harmony export */   mw: () => (/* binding */ getControlQrImage),
/* harmony export */   ok: () => (/* binding */ getWifiQrImage),
/* harmony export */   pB: () => (/* binding */ getInstruments),
/* harmony export */   uB: () => (/* binding */ getTuning),
/* harmony export */   uJ: () => (/* binding */ getRoomStatus),
/* harmony export */   x_: () => (/* binding */ api_playRecording),
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
const getControlQrImage2 = () => apiClient.get('/room/control-qr-code2', {
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

// Recorder services
const api_startRecording = (name, start_time) => apiClient.post('/recorder/start', null, {
  params: {
    name: name,
    start_time: start_time
  }
});
const api_stopRecording = () => apiClient.post('/recorder/stop');
const api_playRecording = id => apiClient.post(`/recorder/play/${id}`);
const api_deleteRecording = id => apiClient.delete(`/recorder/delete/${id}`);
const api_getRecordings = id => apiClient.get('/recorder/list-recordings');
const api_getRecorderStatus = () => apiClient.get('/recorder/status');
const api_stopPlayback = () => apiClient.post('/recorder/stop-playback');

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
    isRecorderActive: false,
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
    },
    setRecorderActive(value) {
      console.log('Setting recorder active:', value);
      this.isRecorderActive = value;
    }
  },
  getters: {
    getSelectedPresetCollectionName: state => state.selectedPresetCollectionName,
    getSelectedInstrumentId: state => state.selectedInstrumentId,
    getSelectedInstrumentName: state => state.selectedInstrumentName,
    getSelectedInstrumentType: state => state.selectedInstrumentType,
    selectedInstrumentHasTuner: state => state.selectedInstrumentType === 'guitar',
    getRecorderActive: state => state.isRecorderActive
  }
});

/***/ }),

/***/ 5231:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ InstrumentSelect)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(1758);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/InstrumentSelect.vue?vue&type=template&id=46fb37de&scoped=true

const _withScopeId = n => (_pushScopeId("data-v-46fb37de"), n = n(), _popScopeId(), n);
const _hoisted_1 = {
  class: "column q-pa-md full-width"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_card_section = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-card-section");
  const _component_q_btn = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-btn");
  const _component_q_card = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-card");
  const _component_q_page = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-page");
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_q_page, {
    class: "q-pa-md"
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_card, {
      flat: ""
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_card_section, null, {
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
  });
}
;// CONCATENATED MODULE: ./src/pages/InstrumentSelect.vue?vue&type=template&id=46fb37de&scoped=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(239);
// EXTERNAL MODULE: ./src/stores/instruments-store.js
var instruments_store = __webpack_require__(6394);
// EXTERNAL MODULE: ./src/services/apiServices.js
var apiServices = __webpack_require__(6166);
// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.mjs
var vue_router = __webpack_require__(455);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/InstrumentSelect.vue?vue&type=script&lang=js




/* harmony default export */ const InstrumentSelectvue_type_script_lang_js = ({
  setup() {
    const store = (0,instruments_store/* useInstrumentStore */.Q)();
    const router = (0,vue_router/* useRouter */.rd)();
    const setInstrument = (id, name, type) => {
      store.setSelectedInstrument(id, name, type);
    };
    const goToInstrumentPage = () => {
      router.push('/instrument');
    };
    return {
      setInstrument,
      goToInstrumentPage
    };
  },
  data() {
    return {
      instruments: []
    };
  },
  mounted() {
    this.fetchInstruments();
  },
  methods: {
    fetchInstruments() {
      (0,apiServices/* getInstruments */.pB)().then(response => {
        this.instruments = response.data;
      }).catch(error => {
        console.error('Error fetching instruments:', error);
      });
    },
    selectInstrument(name, id, type) {
      const store = (0,instruments_store/* useInstrumentStore */.Q)();
      console.log(`Instrument selected! '${name}' '${id}' '${type}'`);
      this.setInstrument(id, name, type);
      this.goToInstrumentPage();
    }
  }
});
;// CONCATENATED MODULE: ./src/pages/InstrumentSelect.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(2807);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__(7716);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__(3316);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardSection.js
var QCardSection = __webpack_require__(4189);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__(6384);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(8582);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/pages/InstrumentSelect.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(InstrumentSelectvue_type_script_lang_js, [['render',render],['__scopeId',"data-v-46fb37de"]])

/* harmony default export */ const InstrumentSelect = (__exports__);
;




runtime_auto_import_default()(InstrumentSelectvue_type_script_lang_js, 'components', {QPage: QPage/* default */.A,QCard: QCard/* default */.A,QCardSection: QCardSection/* default */.A,QBtn: QBtn/* default */.A});


/***/ })

}]);
//# sourceMappingURL=231.d2c6a3e1.js.map