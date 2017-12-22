var app = new Vue({
    el: '#app',
    data: {
        login: '',
        birthdate: '',
        drawn: false
    },
    methods: {
        formatBirthdate: function(e) {
            if (this.birthdate.length == 2 || this.birthdate.length == 7) {
                this.birthdate += ' / '
            }
            if (this.birthdate.length < 5 && this.birthdate.length > 2) {
                this.birthdate = this.birthdate.substr(0,1);
            }
            if (this.birthdate.length < 10 && this.birthdate.length > 7) {
                this.birthdate = this.birthdate.substr(0,6);
            }
        },
        draw: function() {
            this.drawn = true
        }
    }
});