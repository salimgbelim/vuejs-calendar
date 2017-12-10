import Vue from 'vue';
import Vuex from 'vuex';
import moment from 'moment-timezone';


Vue.use(Vuex);
moment.tz.setDefault('UTC');

import Axios from 'axios';

export default new Vuex.Store({
    state: {
        currentYear: 2017,
        currentMonth: 12,
        eventFormPosX: 0,
        eventFormPosY: 0,
        eventFormActive: false,
        events: [
            {description: 'Random event', date: moment('2017-12-06', 'YYYY-MM-DD')},
            {description: 'Random event1', date: moment('2017-12-07', 'YYYY-MM-DD')},
            {description: 'Random event2', date: moment('2017-11-06', 'YYYY-MM-DD')}
        ],
        eventFormDate: moment()
    },
    mutations: {
        setCurrentMonth(state, payload) {
            state.currentMonth = payload;
        },
        setCurrentYear(state, payload) {
            state.currentYear = payload;
        },
        eventFormPos(state, payload) {
            state.eventFormPosX = payload.x;
            state.eventFormPosY = payload.y;
        },
        eventFormActive(state, payload) {
            state.eventFormActive = payload;
        },
        addEvent(state, payload) {

            let obj = {
                description: payload,
                date: state.eventFormDate
            };

            state.events.push(obj);
            Axios.post('/add_event', obj);
        },
        eventFormDate(state, payload) {
            state.eventFormDate = payload;
        }
    }
});
