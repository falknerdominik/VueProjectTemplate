<template>
    <div class="wrapper">
        <LoginForm />
    </div>
</template>

<script>
    // @ is an alias to /src
    import LoginForm from '@/components/LoginForm.vue';

    export default {
        name: 'Login',
        components: {
            LoginForm
        }
    }
</script>

<style scoped>
    div.wrapper {
        width: 100%;
        height: 100%;
    }
</style>
