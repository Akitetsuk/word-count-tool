Vue.createApp({
    data() {
        return {
            // Estado de la app
            test: '<strong>Hola!</strong>',
            nuevoId: 6,
            textInput: '',
            showTextLength: ''
        }
    },
    methods: {
        saludar(nombre) {
            return 'Alo!!!!!' + nombre;
        },
        calculate() {
            this.showTextLength = this.textInput;
        },
        setColorNumber() {
            // una función que est
            if (this.showTextLength.length % 2 == 0) {
                return 'black';
            }

            return 'red';
        }
    }

}).mount('#app')