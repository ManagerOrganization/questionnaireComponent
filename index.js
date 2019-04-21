var app = new Vue({
    el: '#app',
    data: {
        questionLists: [
            {
                id: 0,
                type: '0',
                question: '你的年级',
                chooses: ['大一', '大二', '大三', '大四']
            },
            {
                id: 1,
                type: '1',
                question: '你喜欢吃啥',
                chooses: ['苹果', '香蕉', '葡萄', '石榴', '芒果']
            },
            {
                id: 2,
                type: '1',
                question: '你喜欢干啥',
                chooses: ['旅游', '跑步', '看电影', '吃美食', '学习']
            },
            {
                id: 3,
                type: '2',
                question: '描述一下你自己'
            },
            {
                id: 4,
                type: '0',
                question: '你的住址',
                chooses: ['大陆', '台湾', '迪拜', '马来西亚']
            }
        ]
    }

})