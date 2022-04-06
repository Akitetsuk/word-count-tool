Vue.createApp({
    data() {
        return {
            // Estado de la app
            test: '<strong>Hola!</strong>',
            nuevoId: 6,
            textInput: '',
            showTextLength: '',
        }
    },
    methods: {
        saludar(nombre) {
            return 'Alo!!!!!' + nombre;
        },
        calculate() {
            this.showTextLength = this.textInput;
        },

    },
    computed: {
        setColorNumber() {
            // una función que está calculando un estado a partir de otro
            if (this.showTextLength.length % 2 == 0) {
                return 'purple';
            }

            return 'yellow';
        },
        getTextLength() {
            return this.showTextLength.length;
        }
    }

}).mount('#app')