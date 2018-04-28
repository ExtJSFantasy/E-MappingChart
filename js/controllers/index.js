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
                id: 'views/selectProcedure'
            })
        }
    }
})