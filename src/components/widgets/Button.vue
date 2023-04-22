<template>
    <button class="cursor-pointer text-white text-xl w-36 h-16 border-3 border-white rounded-45 duration-500 hover:text-2xl hover:text-black hover:bg-white">
        {{ text }}
    </button>
</template>

<script>
    export default {
        props: {
            text: {
                type: String,
                required: true
            }
        }
    }
</script>