import Vue from 'vue';
import TimeFormatter from "./filterMethod/timeFormatter"
import NullDataIndicate from "./filterMethod/nullDataIndicate"
import TimeAgoDesc from "./filterMethod/timeAgoDesc"

Vue.filter('timeFormatter',TimeFormatter);
Vue.filter("nullDataIndicate",NullDataIndicate);
Vue.filter("timeAgoDesc",TimeAgoDesc)

