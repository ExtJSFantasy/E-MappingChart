new Vue({
    el: '#procedure',
    data: {
        isCall: true,
        isChecked: false,
        pHolder: '请扫描产品序列号',
        ppValue:'',
        steps:[
            {id:1,name:'Step1',pic:'图片'},
            {id:2,name:'Step2',pic:'图片'},
            {id:3,name:'Step3',pic:'图片'},
            {id:4,name:'Step4',pic:'图片'},
            {id:5,name:'Step5',pic:'图片'}
        ]
    },
    mounted: function() {
        setTimeout(function() {
            mui('#pProcedure')[0].focus();
        }, 0);
    },
    methods: {
        checkedOne() {
            this.isCall = !this.isCall
            this.isChecked = !this.isChecked
            if(this.isChecked) {
                this.ppValue = '0008755425'
            } else {
                this.ppValue = ''
                this.pHolder = '请扫描产品序列号';
                setTimeout(function() {
                    mui('#pProcedure')[0].focus();
                }, 0);
            }
        },
        onClickOver() {
            mui.back();
            console.log(1122);
        },
        onClickSelectItem(){
            console.log(456);
        }
    }
})