Vue.component('multiply-select', {
    props: ['chooses'],
    template: `
    <ul>
        <li v-for="(content,index) in chooses">
            <input type="checkbox" v-model="result" :id="index" :value="getChar(index)"/>
            <label :for="index">{{ content }}</label>
        </li>
    </ul>
    `,
    data: function(){
        return{
            result: []
        }
    },
    methods: {
        getChar(index){
            return String.fromCharCode(65 + index);
        },
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