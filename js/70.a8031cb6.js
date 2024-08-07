"use strict";
(globalThis["webpackChunkpok"] = globalThis["webpackChunkpok"] || []).push([[70],{

/***/ 3045:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ InstrumentsPage)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(1758);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/desktop/InstrumentsPage.vue?vue&type=template&id=5f0d91b2

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_instrument_control_fixed = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("instrument-control-fixed");
  const _component_q_card_section = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-card-section");
  const _component_q_card = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-card");
  const _component_q_page = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-page");
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_q_page, {
    nopadding: ""
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_card, {
      flat: "",
      class: "bg-white text-black"
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_card_section, {
        style: {
          "margin-top": "120px"
        },
        horizontal: ""
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [((0,runtime_core_esm_bundler/* openBlock */.uX)(true), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, null, (0,runtime_core_esm_bundler/* renderList */.pI)($data.instruments, instrument => {
          return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_instrument_control_fixed, {
            key: instrument.id,
            selectedInstrumentName: instrument.name,
            selectedInstrumentId: instrument.id,
            selectedInstrumentHasTuner: instrument.type === "guitar"
          }, null, 8, ["selectedInstrumentName", "selectedInstrumentId", "selectedInstrumentHasTuner"]);
        }), 128))]),
        _: 1
      })]),
      _: 1
    })]),
    _: 1
  });
}
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(8790);
// EXTERNAL MODULE: ./src/assets/icons/tuning-fork.png
var tuning_fork = __webpack_require__(9394);
var tuning_fork_default = /*#__PURE__*/__webpack_require__.n(tuning_fork);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/InstrumentControlFixed.vue?vue&type=template&id=326a500c&scoped=true


const _withScopeId = n => ((0,runtime_core_esm_bundler/* pushScopeId */.Qi)("data-v-326a500c"), n = n(), (0,runtime_core_esm_bundler/* popScopeId */.jt)(), n);
const _hoisted_1 = {
  class: "text-h6"
};
const _hoisted_2 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("img", {
  class: "icon-img",
  src: (tuning_fork_default())
}, null, -1));
const _hoisted_3 = {
  class: "col-5"
};
const _hoisted_4 = {
  class: "full-width q-mb-md flex flex-center"
};
const _hoisted_5 = {
  class: "full-width flex flex-center"
};
const _hoisted_6 = {
  class: "full-width q-mt-md q-mb-xl flex flex-center"
};
const _hoisted_7 = {
  class: "full-width flex flex-center"
};
const _hoisted_8 = {
  class: "col-7"
};
const _hoisted_9 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
  class: "q-mt-lg"
}, " Instrument ist stummgeschaltet ", -1));
function InstrumentControlFixedvue_type_template_id_326a500c_scoped_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_tuner_dialog = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("tuner-dialog");
  const _component_panorama_dialog = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("panorama-dialog");
  const _component_q_fab_action = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-fab-action");
  const _component_q_fab = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-fab");
  const _component_q_card_section = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-card-section");
  const _component_q_btn = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-btn");
  const _component_q_slider = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-slider");
  const _component_q_card = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-card");
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, null, [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_tuner_dialog, {
    ref: "tunerDialog"
  }, null, 512), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_panorama_dialog, {
    ref: "panoramaDialog"
  }, null, 512), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_card, {
    flat: "",
    class: "fixed-width q-mr-xl"
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_card_section, {
      class: "q-pb-lg row items-center justify-between"
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_1, (0,shared_esm_bundler/* toDisplayString */.v_)($props.selectedInstrumentName), 1), !$data.isMuted ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_q_fab, {
        key: 0,
        class: "float-right",
        color: "primary",
        icon: "keyboard_arrow_left",
        direction: "left"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_fab_action, {
          onClick: $options.toggleMute,
          icon: "volume_off"
        }, null, 8, ["onClick"]), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_fab_action, {
          onClick: $options.openPanoramaSelect,
          icon: "panorama_horizontal"
        }, null, 8, ["onClick"]), $props.selectedInstrumentHasTuner ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_q_fab_action, {
          key: 0,
          onClick: $options.openTuner
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [_hoisted_2]),
          _: 1
        }, 8, ["onClick"])) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true)]),
        _: 1
      })) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true)]),
      _: 1
    }), !$data.isMuted ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_q_card_section, {
      key: 0,
      flat: "",
      class: "full-width q-pa-none row no-wrap items-start q-pa-none"
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_3, [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_card, {
        flat: ""
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_card_section, {
          class: "q-mr-sm"
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_4, [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_btn, {
            disable: $data.isMuted,
            round: "",
            icon: "volume_up",
            color: "primary",
            onClick: _cache[0] || (_cache[0] = $event => $options.changeVolume(1)),
            size: "lg"
          }, null, 8, ["disable"])]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_5, [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_slider, {
            disable: $data.isMuted,
            class: "vertical-slider",
            modelValue: $options.intVolume,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $options.intVolume = $event),
            "track-size": "40px",
            "thumb-size": "0px",
            color: "grey-6",
            reverse: "",
            min: 0,
            max: 100,
            vertical: ""
          }, null, 8, ["disable", "modelValue"])]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_6, [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_btn, {
            disable: $data.isMuted,
            round: "",
            icon: "volume_down",
            color: "primary",
            onClick: _cache[2] || (_cache[2] = $event => $options.changeVolume(-1)),
            size: "lg"
          }, null, 8, ["disable"])]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_7, (0,shared_esm_bundler/* toDisplayString */.v_)($options.displayVolume), 1)]),
          _: 1
        })]),
        _: 1
      })]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_8, [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_card, {
        flat: ""
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_card_section, {
          class: "q-pl-xs q-pr-md"
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [((0,runtime_core_esm_bundler/* openBlock */.uX)(true), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, null, (0,runtime_core_esm_bundler/* renderList */.pI)($data.presets, (preset, index) => {
            return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_q_btn, {
              padding: "",
              disable: $data.isMuted,
              dense: "",
              "no-wrap": "",
              "no-caps": "",
              size: "md",
              class: (0,shared_esm_bundler/* normalizeClass */.C4)(["full-width q-mb-md q-pa-md", $options.getPresetButtonClass(index + 1)]),
              label: $data.presets[index],
              key: index,
              onClick: $event => $options.selectPreset(index + 1)
            }, null, 8, ["disable", "class", "label", "onClick"]);
          }), 128))]),
          _: 1
        })]),
        _: 1
      })])]),
      _: 1
    })) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true), $data.isMuted ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_q_card_section, {
      key: 1,
      flat: "",
      class: "column items-center",
      style: {
        "margin-top": "100px"
      }
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_btn, {
        round: "",
        icon: "volume_off",
        color: "primary",
        onClick: $options.toggleMute,
        size: "xl"
      }, null, 8, ["onClick"]), _hoisted_9]),
      _: 1
    })) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true)]),
    _: 1
  })], 64);
}
;// CONCATENATED MODULE: ./src/components/InstrumentControlFixed.vue?vue&type=template&id=326a500c&scoped=true

// EXTERNAL MODULE: ./src/services/apiServices.js
var apiServices = __webpack_require__(6166);
// EXTERNAL MODULE: ./src/components/TunerDialog.vue + 4 modules
var TunerDialog = __webpack_require__(9627);
// EXTERNAL MODULE: ./src/components/PanoramaDialog.vue + 3 modules
var PanoramaDialog = __webpack_require__(2649);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/InstrumentControlFixed.vue?vue&type=script&lang=js



/* harmony default export */ const InstrumentControlFixedvue_type_script_lang_js = ({
  setup() {},
  name: 'InstrumentControlFixed',
  data() {
    return {
      volume: 30,
      isMuted: false,
      currentPreset: null,
      // we start with index 0, in the REST api the first element is 1
      presets: [],
      intervalId: null
    };
  },
  components: {
    TunerDialog: TunerDialog/* default */.A,
    PanoramaDialog: PanoramaDialog/* default */.A
  },
  mounted() {
    this.updateInstrumentState(this.selectedInstrumentId);
    this.intervalId = setInterval(this.fetchData, 2000);
  },
  unmounted() {
    clearInterval(this.intervalId);
  },
  props: {
    selectedInstrumentName: {
      type: String
    },
    selectedInstrumentId: {
      type: Number
    },
    selectedInstrumentHasTuner: {
      type: Boolean
    }
  },
  computed: {
    intVolume: {
      get() {
        return this.volume;
      },
      set(value) {
        let volume = parseInt(value, 10);
        this.changeVolume(volume - this.volume);
      }
    },
    displayVolume: {
      get() {
        return "Lautstärke " + this.volume + ' %';
      }
    }
  },
  methods: {
    getPresetButtonClass(index) {
      return {
        'bg-primary text-white': index === this.currentPreset
      };
    },
    getMuteButtonClass() {
      return {
        'bg-primary text-white': this.isMuted
      };
    },
    openPanoramaSelect() {
      this.$refs.panoramaDialog.show(this.selectedInstrumentId);
    },
    openTuner() {
      this.$refs.tunerDialog.show(this.selectedInstrumentId);
    },
    fetchData() {
      this.updateInstrumentState(this.selectedInstrumentId);
    },
    updateInstrumentState(selectedInstrumentId) {
      if (!selectedInstrumentId) return;
      (0,apiServices/* getInstrumentById */.Qy)(selectedInstrumentId).then(response => {
        this.isMuted = response.data.is_muted;
        this.volume = response.data.volume;
        this.currentPreset = response.data.selected_preset.id;

        // retrieve reported presets and store names in local array
        this.presets = response.data.presets.slice(0, 6).map(preset => preset.name);
      }).catch(error => {
        console.error('Error fetching instrument state:', error);
      });
    },
    toggleMute() {
      (0,apiServices/* toggleInstrumentMute */.$r)(this.selectedInstrumentId).then(response => {
        this.isMuted = response.data.is_muted;
      }).catch(error => {
        console.error('Error toggling mute:', error);
      });
    },
    changeVolume(amount) {
      this.volume = Math.max(0, Math.min(100, this.volume + amount));

      // perform REST api call and update state with response
      (0,apiServices/* updateInstrumentVolume */.RV)(this.selectedInstrumentId, this.volume).then(response => {
        this.volume = response.data.volume;
      }).catch(error => {
        console.error('Error setting volume:', error);
      });
    },
    selectPreset(presetId) {
      this.currentPreset = presetId;
      (0,apiServices/* selectInstrumentPreset */.LO)(this.selectedInstrumentId, presetId).then(response => {
        this.currentPreset = response.data.selected_preset.id;
      }).catch(error => {
        console.error('Error setting preset:', error);
      });
    }
  }
});
;// CONCATENATED MODULE: ./src/components/InstrumentControlFixed.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(2807);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__(3316);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardSection.js
var QCardSection = __webpack_require__(4189);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/fab/QFab.js
var QFab = __webpack_require__(4782);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/fab/QFabAction.js
var QFabAction = __webpack_require__(284);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__(6384);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/slider/QSlider.js + 1 modules
var QSlider = __webpack_require__(1444);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(8582);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/components/InstrumentControlFixed.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(InstrumentControlFixedvue_type_script_lang_js, [['render',InstrumentControlFixedvue_type_template_id_326a500c_scoped_true_render],['__scopeId',"data-v-326a500c"]])

/* harmony default export */ const InstrumentControlFixed = (__exports__);
;






runtime_auto_import_default()(InstrumentControlFixedvue_type_script_lang_js, 'components', {QCard: QCard/* default */.A,QCardSection: QCardSection/* default */.A,QFab: QFab/* default */.A,QFabAction: QFabAction/* default */.A,QBtn: QBtn/* default */.A,QSlider: QSlider/* default */.A});

;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/desktop/InstrumentsPage.vue?vue&type=script&lang=js


/* harmony default export */ const InstrumentsPagevue_type_script_lang_js = ({
  components: {
    InstrumentControlFixed: InstrumentControlFixed
  },
  data() {
    return {
      instruments: [],
      instrumentFilter: []
    };
  },
  created() {
    this.loadRoutData();
    this.fetchInstruments();
  },
  watch: {
    $route() {
      this.loadRoutData();
      this.fetchInstruments();
    }
  },
  methods: {
    loadRoutData() {
      this.instrumentFilter = this.$route.params.filter.split('-and-');
    },
    fetchInstruments() {
      (0,apiServices/* getInstruments */.pB)().then(response => {
        this.instruments = response.data.filter(instrument => this.instrumentFilter.includes(instrument.type));
      }).catch(error => {
        console.error('Error fetching instruments:', error);
      });
    }
  }
});
;// CONCATENATED MODULE: ./src/pages/desktop/InstrumentsPage.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__(7716);
;// CONCATENATED MODULE: ./src/pages/desktop/InstrumentsPage.vue




;
const InstrumentsPage_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(InstrumentsPagevue_type_script_lang_js, [['render',render]])

/* harmony default export */ const InstrumentsPage = (InstrumentsPage_exports_);
;



runtime_auto_import_default()(InstrumentsPagevue_type_script_lang_js, 'components', {QPage: QPage/* default */.A,QCard: QCard/* default */.A,QCardSection: QCardSection/* default */.A});


/***/ })

}]);
//# sourceMappingURL=70.a8031cb6.js.map