<template>
    <div id="app">
        <component :is="layout">
            <router-view/>
        </component>
    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                // init layout
                layout: this.$router.currentRoute.meta.layout || 'PlainLayout',
            }
        },
        watch: {
            // update layout whenever the Router object changes
            $route() {
                // avoid reloading layout if the same layout is already set
                if (this.layout !== this.$router.currentRoute.meta.layout) {
                    this.layout = this.$router.currentRoute.meta.layout || 'PlainLayout';
                }
            }
        }
    }
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
