<template>
    <div class="scroller-wrap" ref="scroll" :style="wrapStyle">
        <div class="scroller-content">
            <slot/>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name: "scroller",
    props:{
        width: Number,
        height: Number,
        top: Number,
        bottom: Number
    },
    computed: {
        wrapStyle() {
            if(this.top && this.bottom){
                return{
                    position: 'absolute',
                    top: this.top + 'rem',
                    bottom: this.bottom + 'rem'
                }
            }else{
                // 普通调用滚动视图
                return{
                    width: this.width + 'rem',
                    height: this.height + 'rem'
                }
            }
        }
    },
    mounted() {
        const scroll = new BScroll(this.$refs.scroll, {
            click: true
        })
    }
}
</script>

<style lang="scss" scoped>
.scroller-wrap{
    overflow: hidden;
    width: 100%
}
</style>

