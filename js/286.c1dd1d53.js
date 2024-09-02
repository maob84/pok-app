"use strict";
(globalThis["webpackChunkpok"] = globalThis["webpackChunkpok"] || []).push([[286],{

/***/ 8286:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ BookingCalendar)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(1758);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(8790);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/BookingCalendar.vue?vue&type=template&id=2924093b

const _hoisted_1 = {
  class: "row items-center justify-between q-mb-md"
};
const _hoisted_2 = {
  class: "row items-center q-mb-md"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_space = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-space");
  const _component_q_btn = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-btn");
  const _component_q_date = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-date");
  const _component_q_card_section = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-card-section");
  const _component_q_card_actions = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-card-actions");
  const _component_q_card = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-card");
  const _component_q_dialog = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-dialog");
  const _component_q_checkbox = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-checkbox");
  const _component_q_badge = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-badge");
  const _component_q_td = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-td");
  const _component_q_tr = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-tr");
  const _component_q_table = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-table");
  const _component_q_page = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-page");
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_q_page, {
    padding: ""
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_1, [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_space), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_btn, {
      dense: "",
      color: "secondary",
      icon: "chevron_left",
      onClick: $options.selectPreviousDay
    }, null, 8, ["onClick"]), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_btn, {
      class: "q-mx-sm q-px-lg",
      style: {
        "width": "220px"
      },
      dense: "",
      "no-caps": "",
      color: "primary",
      label: $options.selectedDayDisplayName,
      onClick: _cache[0] || (_cache[0] = $event => $data.showDatePicker = true)
    }, null, 8, ["label"]), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_btn, {
      dense: "",
      color: "secondary",
      icon: "chevron_right",
      onClick: $options.selectNextDay
    }, null, 8, ["onClick"]), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_space)]), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_dialog, {
      modelValue: $data.showDatePicker,
      "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => $data.showDatePicker = $event)
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_card, null, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_card_section, null, {
          default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_date, {
            modelValue: $data.selectedDate,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $data.selectedDate = $event),
            mask: "YYYY-MM-DD",
            "first-day-of-week": "1",
            minimal: "",
            onInput: _cache[2] || (_cache[2] = $event => $data.showDatePicker = false)
          }, null, 8, ["modelValue"])]),
          _: 1
        }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_card_actions, {
          align: "right"
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_btn, {
            label: "OK",
            color: "primary",
            onClick: _cache[3] || (_cache[3] = $event => $data.showDatePicker = false)
          })]),
          _: 1
        })]),
        _: 1
      })]),
      _: 1
    }, 8, ["modelValue"]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_2, [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_checkbox, {
      modelValue: $data.isSingleBooker,
      "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => $data.isSingleBooker = $event),
      label: "Rabatt für Einzelbucher:innen",
      onClick: $options.fetchBookingSchedule
    }, null, 8, ["modelValue", "onClick"])]), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_table, {
      ref: "bookingTable",
      rows: $options.tableRows,
      columns: $options.columns,
      "row-key": "hour",
      flat: "",
      class: "booking-table",
      style: {
        "height": "70vh"
      },
      dense: "",
      bordered: "",
      "hide-pagination": "",
      "rows-per-page-options": [0]
    }, {
      body: (0,runtime_core_esm_bundler/* withCtx */.k6)(props => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_tr, {
        props: props
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [((0,runtime_core_esm_bundler/* openBlock */.uX)(true), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, null, (0,runtime_core_esm_bundler/* renderList */.pI)(props.cols, col => {
          return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_q_td, {
            key: col.name,
            props: props
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [col.field !== 'hour' ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, {
              key: 0
            }, [col.value !== 'belegt' ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_q_btn, {
              key: 0,
              size: "sm",
              dense: "",
              color: "blue",
              onClick: $event => $options.openBookingRequest(props.row, col.name),
              label: col.value,
              style: {
                "width": "50px"
              }
            }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [col.value == '19,00€' ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_q_badge, {
                key: 0,
                rounded: "",
                color: "orange",
                floating: "",
                transparent: ""
              }, {
                default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("%")]),
                _: 1
              })) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true)]),
              _: 2
            }, 1032, ["onClick", "label"])) : ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_q_badge, {
              key: 1,
              color: "grey",
              label: col.value
            }, null, 8, ["label"]))], 64)) : ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, {
              key: 1
            }, [(0,runtime_core_esm_bundler/* createTextVNode */.eW)((0,shared_esm_bundler/* toDisplayString */.v_)(col.value), 1)], 64))]),
            _: 2
          }, 1032, ["props"]);
        }), 128))]),
        _: 2
      }, 1032, ["props"])]),
      _: 1
    }, 8, ["rows", "columns"])]),
    _: 1
  });
}
;// CONCATENATED MODULE: ./src/pages/BookingCalendar.vue?vue&type=template&id=2924093b

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(239);
// EXTERNAL MODULE: ./node_modules/quasar/src/utils/date/date.js
var date = __webpack_require__(6246);
// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 48 modules
var axios = __webpack_require__(2303);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/BookingCalendar.vue?vue&type=script&lang=js



/* harmony default export */ const BookingCalendarvue_type_script_lang_js = ({
  data() {
    return {
      bookingSchedule: {},
      selectedDate: null,
      weekDays: [],
      showDatePicker: false,
      isSingleBooker: false // Checkbox state
    };
  },
  computed: {
    selectedDayDisplayName() {
      return date/* default.formatDate */.Ay.formatDate(this.selectedDate, 'dddd, DD.MM.YYYY', {
        days: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag']
      });
    },
    columns() {
      const cols = [{
        name: 'hour',
        label: 'Zeit',
        align: 'left',
        field: 'hour',
        format: val => `${val} Uhr`
      }];
      this.weekDays.forEach(day => {
        cols.push({
          name: day,
          label: date/* default.formatDate */.Ay.formatDate(day, 'dd, DD.MM', {
            days: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa']
          }),
          align: 'center',
          format: val => {
            return val === null ? 'belegt' : `${val.toLocaleString('de-DE', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            })}€`;
          },
          field: day
        });
      });
      return cols;
    },
    tableRows() {
      const rows = [];
      for (let hour = 0; hour < 24; hour++) {
        const row = {
          hour: `${hour}:00`
        };
        this.weekDays.forEach(day => {
          if (this.bookingSchedule['days'][day] && this.bookingSchedule['days'][day]['schedule'][hour] !== undefined) {
            if (this.bookingSchedule['days'][day]['schedule'][hour] != null) {
              row[day] = this.bookingSchedule['days'][day]['schedule'][hour];
            } else {
              row[day] = null;
            }
          } else {
            row[day] = null;
          }
        });
        rows.push(row);
      }
      return rows;
    }
  },
  methods: {
    scrollToBottom() {
      this.$nextTick(() => {
        const tableBody = this.$refs.bookingTable.$el.querySelector('.q-table__middle');
        if (tableBody) {
          tableBody.scrollTop = tableBody.scrollHeight;
        }
      });
    },
    selectPreviousDay() {
      const newDate = date/* default.addToDate */.Ay.addToDate(this.selectedDate, {
        days: -1
      });
      this.selectedDate = date/* default.formatDate */.Ay.formatDate(newDate, 'YYYY-MM-DD');
    },
    selectNextDay() {
      const newDate = date/* default.addToDate */.Ay.addToDate(this.selectedDate, {
        days: 1
      });
      this.selectedDate = date/* default.formatDate */.Ay.formatDate(newDate, 'YYYY-MM-DD');
    },
    extractDatesFromResponse(response) {
      if (!response || !response.days) {
        throw new Error("Invalid response structure: 'days' property is missing.");
      }

      // Extract all dates from the 'days' object
      const datesArray = Object.keys(response.days);
      return datesArray;
    },
    async fetchBookingSchedule() {
      try {
        const url = `${"https://srv.proben-ohne-krach.de:8001"}/api/v1/bookings`;
        const response = await axios/* default */.A.get(url, {
          params: {
            start_date: this.selectedDate,
            num_days: 3,
            single_user: this.isSingleBooker
          }
        });
        this.weekDays = this.extractDatesFromResponse(response.data);
        this.bookingSchedule = response.data;
      } catch (error) {
        console.error("Error fetching booking schedule:", error);
      }
    },
    openBookingRequest(row, colName) {
      this.isSingleBooker;
      const date = colName;
      // get booking hour from first column of selected row
      const hour = row.hour.split(':')[0];
      this.$router.push({
        name: 'booking-request',
        params: {
          bookingDate: date,
          bookingHour: hour,
          isSingleBooker: this.isSingleBooker
        }
      });
    }
  },
  mounted() {
    this.scrollToBottom();
  },
  watch: {
    selectedDate(newDate) {
      this.fetchBookingSchedule(); // Fetch new data when date changes
    }
  },
  created() {
    this.selectedDate = date/* default.formatDate */.Ay.formatDate(new Date(), 'YYYY-MM-DD');
    this.fetchBookingSchedule(); // Initial data fetch
  }
});
;// CONCATENATED MODULE: ./src/pages/BookingCalendar.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(2807);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__(7716);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/space/QSpace.js
var QSpace = __webpack_require__(3676);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__(6384);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/dialog/QDialog.js
var QDialog = __webpack_require__(2156);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__(3316);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardSection.js
var QCardSection = __webpack_require__(4189);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/date/QDate.js + 1 modules
var QDate = __webpack_require__(8670);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardActions.js
var QCardActions = __webpack_require__(2669);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/checkbox/QCheckbox.js
var QCheckbox = __webpack_require__(460);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/table/QTable.js + 11 modules
var QTable = __webpack_require__(6254);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/table/QTr.js
var QTr = __webpack_require__(4488);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/table/QTd.js
var QTd = __webpack_require__(5262);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/badge/QBadge.js
var QBadge = __webpack_require__(3954);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(8582);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/pages/BookingCalendar.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(BookingCalendarvue_type_script_lang_js, [['render',render]])

/* harmony default export */ const BookingCalendar = (__exports__);
;













runtime_auto_import_default()(BookingCalendarvue_type_script_lang_js, 'components', {QPage: QPage/* default */.A,QSpace: QSpace/* default */.A,QBtn: QBtn/* default */.A,QDialog: QDialog/* default */.A,QCard: QCard/* default */.A,QCardSection: QCardSection/* default */.A,QDate: QDate/* default */.A,QCardActions: QCardActions/* default */.A,QCheckbox: QCheckbox/* default */.A,QTable: QTable/* default */.A,QTr: QTr/* default */.A,QTd: QTd/* default */.A,QBadge: QBadge/* default */.A});


/***/ })

}]);
//# sourceMappingURL=286.c1dd1d53.js.map