new Vue({
    el: '#index',
    data: {
        inputV: ''
    },
    watch: {
        /*inputV: {
            handler: function(now, old) {
            },
            deep: true //对象内部的属性监听，也叫深度监听  
        }*/
    },
    mounted: function() {
        mui.init()
        setTimeout(function() {
            mui('#input')[0].focus();
        }, 0);
        document.addEventListener('click', function() {
            setTimeout(function() {
                mui('#input')[0].focus();
            }, 0);
        })
    },
    methods: {
        inputNew: function() {
            mui.openWindow({
                url: 'views/selectProcedure.html',
                id: 'views/selectProcedure',
                show:{
                    autoShow:true,//页面loaded事件发生后自动显示，默认为true
                    aniShow:'slide-in-right',//页面显示动画，默认为”slide-in-right“；
                    duration:100//页面动画持续时间，Android平台默认100毫秒，iOS平台默认200毫秒；
                }
            })
        }
    }
})