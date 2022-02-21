const app = new Vue({
    el: '#app',
    data: {
        title: 'Notes with Vue.js',
        excercise: [],
        newExc: '',
    },
    methods: {
        addExcercise: function () {
            this.excercise.push({
                name: this.newExc,
                state: false,
            });
            this.newExc = '';
            localStorage.setItem('gym-vue', JSON.stringify(this.excercise));
        },
        editState: function (index) {
            this.excercise[index].state = false;
            localStorage.setItem('gym-vue', JSON.stringify(this.excercise));
        },
        changeState: function (index) {
            this.excercise[index].state = true;
            localStorage.setItem('gym-vue', JSON.stringify(this.excercise));
        },
        deleteExc: function (index) {
            this.excercise.splice(index, 1);
            localStorage.setItem('gym-vue', JSON.stringify(this.excercise));
        },
        filterDone: function (excercise) {
            const filteredDone = excercise.filter(el => el.state === true)
            const dones = filteredDone.length
            return dones
        }
    },
    created: function () {
        let dbData = JSON.parse(localStorage.getItem('gym-vue'));
        if (dbData === null) {
            this.excercise = [];
        } else {
            this.excercise = dbData;
        }
    }
});