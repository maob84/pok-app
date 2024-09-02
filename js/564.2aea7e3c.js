"use strict";
(globalThis["webpackChunkpok"] = globalThis["webpackChunkpok"] || []).push([[564],{

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

/***/ 6006:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


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
// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinner.js
var QSpinner = __webpack_require__(8210);
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

/***/ 564:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RecorderPage)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(1758);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(8790);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/RecorderPage.vue?vue&type=template&id=99e50014&scoped=true

const _withScopeId = n => (_pushScopeId("data-v-99e50014"), n = n(), _popScopeId(), n);
const _hoisted_1 = {
  key: 0
};
const _hoisted_2 = {
  key: 1,
  class: "q-pa-md"
};
const _hoisted_3 = {
  key: 0,
  class: "q-mt-md"
};
const _hoisted_4 = {
  key: 0,
  class: "q-pa-none"
};
const _hoisted_5 = {
  class: "q-mb-md text-center"
};
const _hoisted_6 = {
  class: "row justify-center items-center"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_backend_status = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("backend-status");
  const _component_q_btn = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-btn");
  const _component_q_item_section = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-item-section");
  const _component_q_item_label = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-item-label");
  const _component_q_item = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-item");
  const _component_q_list = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-list");
  const _component_q_scroll_area = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-scroll-area");
  const _component_q_card_section = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-card-section");
  const _component_q_page = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-page");
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_q_page, null, {
    default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [!$setup.isBackendAvailable ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", _hoisted_1, [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_backend_status)])) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true), $setup.isBackendAvailable ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", _hoisted_2, [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_scroll_area, {
      style: {
        "height": "calc(100vh - 180px)"
      }
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [$data.recordings.length > 0 ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", _hoisted_3, [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_list, null, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [((0,runtime_core_esm_bundler/* openBlock */.uX)(true), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, null, (0,runtime_core_esm_bundler/* renderList */.pI)($options.reversedRecordings, recording => {
          return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_q_item, {
            key: recording.id
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_section, {
              side: ""
            }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_btn, {
                icon: $data.currentPlayingId === recording.id ? 'pause' : 'play_arrow',
                onClick: $event => $data.currentPlayingId === recording.id ? $options.stopPlayback() : $options.playRecording(recording.id)
              }, null, 8, ["icon", "onClick"])]),
              _: 2
            }, 1024), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_section, null, {
              default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_label, null, {
                default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)((0,shared_esm_bundler/* toDisplayString */.v_)(recording.name), 1)]),
                _: 2
              }, 1024), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_label, {
                caption: ""
              }, {
                default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)((0,shared_esm_bundler/* toDisplayString */.v_)($options.formatDate(recording.date)) + " - " + (0,shared_esm_bundler/* toDisplayString */.v_)($options.formatDuration(recording.duration)), 1)]),
                _: 2
              }, 1024)]),
              _: 2
            }, 1024), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_section, {
              side: ""
            }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_btn, {
                icon: "delete",
                color: "red",
                onClick: $event => $options.deleteRecording(recording.id)
              }, null, 8, ["onClick"])]),
              _: 2
            }, 1024)]),
            _: 2
          }, 1024);
        }), 128))]),
        _: 1
      })])) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true)]),
      _: 1
    }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_card_section, {
      class: "fixed-bottom q-pb-lg"
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [$data.isRecording ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", _hoisted_4, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_5, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", null, (0,shared_esm_bundler/* toDisplayString */.v_)($data.currentRecordingName), 1), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", null, (0,shared_esm_bundler/* toDisplayString */.v_)($options.displayDuration), 1)])])) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_6, [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_btn, {
        size: "xl",
        round: "",
        color: "primary",
        icon: $data.isRecording ? 'stop' : 'mic',
        onClick: $options.toggleRecording
      }, null, 8, ["icon", "onClick"])])]),
      _: 1
    })])) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true)]),
    _: 1
  });
}
;// CONCATENATED MODULE: ./src/pages/RecorderPage.vue?vue&type=template&id=99e50014&scoped=true

// EXTERNAL MODULE: ./src/stores/instruments-store.js
var instruments_store = __webpack_require__(6394);
// EXTERNAL MODULE: ./src/services/apiServices.js
var apiServices = __webpack_require__(6166);
// EXTERNAL MODULE: ./src/components/BackendStatus.vue + 3 modules
var BackendStatus = __webpack_require__(6006);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/RecorderPage.vue?vue&type=script&lang=js




/* harmony default export */ const RecorderPagevue_type_script_lang_js = ({
  components: {
    BackendStatus: BackendStatus/* default */.A
  },
  setup() {
    const store = (0,instruments_store/* useInstrumentStore */.Q)();
    const isBackendAvailable = (0,runtime_core_esm_bundler/* computed */.EW)(() => store.isBackendAvailable);
    return {
      isBackendAvailable
    };
  },
  data() {
    return {
      isRecording: false,
      currentRecordingName: '',
      currentRecordingStartTime: null,
      currentPlayingId: null,
      recordings: [],
      recordingDuration: 0,
      recordingDurationInterval: null
    };
  },
  computed: {
    reversedRecordings() {
      return [...this.recordings].reverse();
    },
    displayDuration() {
      const minutes = Math.floor(this.recordingDuration / 60);
      const secs = Math.floor(this.recordingDuration % 60);
      const millis = Math.floor(this.recordingDuration % 1 * 10); // Use 10 instead of 1000 for one decimal place

      const formattedMinutes = String(minutes).padStart(2, '0');
      const formattedSeconds = String(secs).padStart(2, '0');
      return `${formattedMinutes}:${formattedSeconds},${millis}`;
    }
  },
  methods: {
    toggleRecording() {
      if (this.isRecording) {
        this.stopRecording();
      } else {
        this.startRecording();
      }
    },
    calculateDuration() {
      const now = Date.now() / 1000.0;
      this.recordingDuration = now - this.currentRecordingStartTime;
    },
    startDurationInterval() {
      this.recordingDurationInterval = setInterval(() => {
        this.calculateDuration();
      }, 500);
    },
    stopDurationInterval() {
      if (this.recordingDurationInterval) {
        clearInterval(this.recordingDurationInterval);
        this.recordingDurationInterval = null;
        this.recordingDuration = 0;
      }
    },
    setCurrentRecordingName() {
      const defaultName = "Aufnahme";
      let highestNumber = 0;
      for (let i = 0; i < this.recordings.length; i++) {
        const recordingName = this.recordings[i].name;
        if (!recordingName.startsWith(defaultName)) {
          continue;
        }
        const nameParts = recordingName.split(' ');
        const numberPart = nameParts[1];
        const recordingNumber = parseInt(numberPart);
        if (!isNaN(recordingNumber) && recordingNumber > highestNumber) {
          highestNumber = recordingNumber;
        }
      }
      this.currentRecordingName = `Aufnahme ${highestNumber + 1}`;
    },
    startRecording() {
      this.setCurrentRecordingName();
      this.currentRecordingStartTime = Date.now() / 1000.0;
      if (this.currentPlayingId) {
        this.stopPlayback();
      }
      (0,apiServices/* api_startRecording */.jo)(this.currentRecordingName, this.currentRecordingStartTime).then(response => {
        this.isRecording = true;
        const store = (0,instruments_store/* useInstrumentStore */.Q)();
        store.setRecorderActive(true);
        this.startDurationInterval();
      }).catch(error => {
        this.isRecording = false;
        console.error("Error starting recording:", error);
      });
    },
    stopRecording() {
      this.stopDurationInterval();
      (0,apiServices/* api_stopRecording */.dn)().then(() => {
        this.isRecording = false;
        setTimeout(() => {
          this.fetchRecordings();
        }, 400);
        const store = (0,instruments_store/* useInstrumentStore */.Q)();
        store.setRecorderActive(false);
      }).catch(error => {
        console.error("Error stopping recording:", error);
      });
    },
    playRecording(id) {
      if (this.isRecording) {
        this.stopRecording();
      }
      (0,apiServices/* api_playRecording */.x_)(id).then(() => {
        this.currentPlayingId = id;
      }).catch(error => {
        console.error("Error playing recording:", error);
      });
    },
    stopPlayback() {
      (0,apiServices/* api_stopPlayback */.Zq)().then(() => {
        this.currentPlayingId = null;
      }).catch(error => {
        console.error("Error stopping playback:", error);
      });
    },
    deleteRecording(id) {
      (0,apiServices/* api_deleteRecording */.Y0)(id).then(() => {
        this.fetchRecordings();
      }).catch(error => {
        console.error("Error deleting recording:", error);
      });
    },
    fetchRecordings() {
      (0,apiServices/* api_getRecordings */.GA)().then(response => {
        this.recordings = response.data;
      }).catch(error => {
        console.error("Error fetching recordings:", error);
      });
    },
    fetchStatus() {
      (0,apiServices/* api_getRecorderStatus */.kR)().then(response => {
        this.isRecording = response.data.isRecording;
        this.currentPlayingId = response.data.currentPlayingId;
        if (this.isRecording) {
          this.currentRecordingName = response.data.currentRecordingName;
          this.currentRecordingStartTime = response.data.currentRecordingStartTime;
          if (!this.recordingDurationInterval) {
            this.calculateDuration();
            this.startDurationInterval();
          }
        } else {
          const store = (0,instruments_store/* useInstrumentStore */.Q)();
          store.setRecorderActive(false);
        }
      }).catch(error => {
        console.error("Error fetching status:", error);
      });
    },
    formatDate(date) {
      const recordingDate = new Date(date);
      const now = new Date();
      const diffMs = now - recordingDate;
      const diffMins = Math.floor(diffMs / 60000);
      if (diffMins <= 15) {
        return `vor ${diffMins} Minuten`;
      }
      return recordingDate.toLocaleTimeString();
    },
    formatDuration(seconds) {
      const minutes = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return `${minutes}m ${secs}s`;
    }
  },
  mounted() {
    this.fetchRecordings();
    this.fetchStatus();
  },
  unmounted() {
    this.stopDurationInterval();
  }
});
;// CONCATENATED MODULE: ./src/pages/RecorderPage.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(2807);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__(7716);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/scroll-area/QScrollArea.js
var QScrollArea = __webpack_require__(9383);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QList.js
var QList = __webpack_require__(3999);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItem.js
var QItem = __webpack_require__(124);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemSection.js
var QItemSection = __webpack_require__(5173);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__(6384);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemLabel.js
var QItemLabel = __webpack_require__(3796);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardSection.js
var QCardSection = __webpack_require__(4189);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(8582);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/pages/RecorderPage.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(RecorderPagevue_type_script_lang_js, [['render',render],['__scopeId',"data-v-99e50014"]])

/* harmony default export */ const RecorderPage = (__exports__);
;








runtime_auto_import_default()(RecorderPagevue_type_script_lang_js, 'components', {QPage: QPage/* default */.A,QScrollArea: QScrollArea/* default */.A,QList: QList/* default */.A,QItem: QItem/* default */.A,QItemSection: QItemSection/* default */.A,QBtn: QBtn/* default */.A,QItemLabel: QItemLabel/* default */.A,QCardSection: QCardSection/* default */.A});


/***/ })

}]);
//# sourceMappingURL=564.2aea7e3c.js.map