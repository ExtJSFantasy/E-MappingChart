new Vue({
    el: '#procedure',
    data: {
        isCall: true,
        isChecked: false,
        pHolder: '请选择程序',
        serialNumbers:[
            {id:1,serverReturn:'SGM258',procedure:'SGM258 程序'},
            {id:2,serverReturn:'SGM258',procedure:'SGM258 程序'},
            {id:3,serverReturn:'SGM258',procedure:'SGM258 程序'},
            {id:4,serverReturn:'SGM258',procedure:'SGM258 程序'},
            {id:5,serverReturn:'SGM258',procedure:'SGM258 程序'},
            {id:6,serverReturn:'SGM258',procedure:'SGM258 程序'},
            {id:7,serverReturn:'SGM258',procedure:'SGM258 程序'},
            {id:8,serverReturn:'SGM258',procedure:'SGM258 程序'}
        ]
    },
    mounted: function() {
    },
    methods: {
        checkedOne() {
            this.isCall = !this.isCall
            this.isChecked = !this.isChecked
            if(this.isChecked) {
                this.pHolder = '请扫描产品序列号';
                setTimeout(function() {
                    mui('#ppNum')[0].focus();
                }, 0);
            } else {
                this.pHolder = '请选择程序'
            }
        },
        onClickOver() {
            mui.back();
            console.log(1122);
        },
        onClickSelectItem(){
            mui.openWindow({
                url: 'main.html',
                id: 'main'
            })
        }
    }
})