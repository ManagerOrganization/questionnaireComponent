Vue.component('question-page', {
    props: ['questionlist'],
    data: function(){
        return {
            answers: [],
            index: 0,
            maxIndex: 0,
            questionList: this.questionlist
        }
    },
    template: `
        <div class="container">
            <div class="question_box"> {{ index+1 }}.{{ questionList[index].question }}: </div>
            <div class="chooses_box">
                <div v-if="questionList[index].type == 0">
                    <single-select ref="single" :chooses="questionList[index].chooses" :key="questionList[index].id"></single-select>
                </div>
                <div v-else-if="questionList[index].type == 1">
                    <multiply-select ref="mul" :chooses="questionList[index].chooses" :key="questionList[index].id"></multiply-select>
                </div>
                <div v-else-if="questionList[index].type == 2">
                    <simple-writebox ref="simple" :key="questionList[index].id"></simple-writebox>
                </div>
            </div>
            <div v-show="questionList.length" class="operation_box">
                <button v-show="index != 0" @click="last">上一个</button>
                <button v-show="index < questionList.length - 1" @click="next">下一个</button>
                <button @click="submit">提交</button>
                <button @click="reset">重置</button>
            </div>
        </div>
    `,
    methods: {
        last(){
            this.callSonFun('getResult');
            this.index--;
            var index = this.isComtaint(this.questionList[this.index].id);
            var answer = this.answers[index] ? this.answers[index].answer : [];
            this.$nextTick(function(){
                this.callSonFun('setResult', answer);
            })
        },
        next(){
            this.callSonFun('getResult');

            this.index++;
            var index = this.isComtaint(this.questionList[this.index].id);
            answer = this.answers[index] ? this.answers[index].answer : [];
            this.$nextTick(function(){
                this.callSonFun('setResult', answer);
            })
            if(this.index > this.maxIndex){
                this.maxIndex = this.index;
            }
        },
        submit(){
            this.callSonFun('getResult');
            var length = this.questionList.length;
            if(this.maxIndex < length){
                for(var i = this.maxIndex + 1; i < length; i++){
                    var result = {
                        'id': this.questionList[i].id,
                        'answer': ''
                    }
                    this.answers.push(result);
                }
            }
            console.log(this.answers);
        },
        reset(){
            this.callSonFun('reset');
        },
        setResult(answer){
            var index = this.isComtaint(this.questionList[this.index].id);
            if(index == -1){
                var result = {
                    'id': this.questionList[this.index].id,
                    'answer': answer
                }
                this.answers.push(result);
            }else{
                this.answers[index].answer = answer;
            }
        },
        isComtaint(id){
            var length = this.answers.length;
            for(var i = 0; i < length; i++){
                if(this.answers[i].id == id){
                    return i;
                }
            }
            return -1;
        },
        callSonFun(fun,arg){
            if(this.questionList[this.index].type == 0){
                this.$refs.single[fun](arg);
            }else  if(this.questionList[this.index].type == 1){
                this.$refs.mul[fun](arg);
            }else if(this.questionList[this.index].type == 2){
                this.$refs.simple[fun](arg);
            }
        }
    }

})