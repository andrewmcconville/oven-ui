import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        theme: 'dark',
        upperOvenButtonIsPressed: false,
        lowerOvenButtonIsPressed: false,
        bakeButtonIsPressed: false,
        convectButtonIsPressed: false,
        broilButtonIsPressed: false,
        upperOvenTemp: "",
        lowerOvenTemp: "",
    },
    mutations: {
        SetTheme(state: IOvenStore, data: string) {
            state.theme = data;
        },
        SetUpperOvenButtonIsPressed(state: IOvenStore, data: boolean) {
            state.upperOvenButtonIsPressed = data;
        },
        SetLowerOvenButtonIsPressed(state: IOvenStore, data: boolean) {
            state.lowerOvenButtonIsPressed = data;
        },
        SetBakeButtonIsPressed(state: IOvenStore, data: boolean) {
            state.bakeButtonIsPressed = data;
        },
        SetConvectButtonIsPressed(state: IOvenStore, data: boolean) {
            state.convectButtonIsPressed = data;
        },
        SetBroilButtonIsPressed(state: IOvenStore, data: boolean) {
            state.broilButtonIsPressed = data;
        },
        SetUpperOvenTemp(state: IOvenStore, data: string) {
            state.upperOvenTemp = data;
        },
        SetLowerOvenTemp(state: IOvenStore, data: string) {
            state.lowerOvenTemp = data;
        },
    },
    getters: {
        theme: state => {
            return state.theme
        },
        upperOvenButtonIsPressed: state => {
            return state.upperOvenButtonIsPressed
        },
        lowerOvenButtonIsPressed: state => {
            return state.lowerOvenButtonIsPressed
        },
        bakeButtonIsPressed: state => {
            return state.bakeButtonIsPressed
        },
        convectButtonIsPressed: state => {
            return state.convectButtonIsPressed
        },
        broilButtonIsPressed: state => {
            return state.broilButtonIsPressed
        },
        upperOvenTemp: state => {
            return state.upperOvenTemp
        },
        lowerOvenTemp: state => {
            return state.lowerOvenTemp
        }
    },
})

export interface IOvenStore {
    theme: string,
    upperOvenButtonIsPressed: boolean,
    lowerOvenButtonIsPressed: boolean,
    bakeButtonIsPressed: boolean,
    convectButtonIsPressed: boolean,
    broilButtonIsPressed: boolean,
    upperOvenTemp: string,
    lowerOvenTemp: string,
}

export default store;
