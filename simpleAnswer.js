Vue.component('simple-writebox', {
    template: `
    <textarea v-model='result' rows="20">
    </textarea>
    `,
    data: function(){
        return {
            result: ''
        }
    },
    methods: {
        getResult(){
            this.$parent.setResult(this.result);
        },
        reset(){
            this.result = '';
            this.$parent.setResult(this.result);
        },
        setResult(result){
            if(result.length == 0){
                this.$parent.setResult(this.result);
            }else{
                this.result = result;
                this.$parent.setResult(this.result);
            }
        }
    }
})