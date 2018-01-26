import Vue from 'vue';

const capitalize = function(value, nome, cognome) {
    if (!value) return '';
    value = value.toString();
    return value.toUpperCase() + " " + nome + " " + cognome;
}

Vue.filter('capitalize', capitalize);