<template>
    <div class="flex justify-center h-48">
        <form action="">
            <div class="grid grid-cols-5 gap-24 mt-8">
                <div class="flex flex-col gap-5">
                    <label class="text-white text-center text-2xl"> Country 1 </label>
                    <input type="file" class="hidden" ref="fileInput">
                    <div class="flex justify-center">
                        <Button :text="'Country'" @click.prevent="$refs.fileInput.click()"/>
                    </div>
                </div>
                <div class="flex flex-col gap-5">
                    <label class="text-white text-center text-2xl"> Player 1 </label>
                    <input type="text" class="p-2 rounded-xl">
                    <div class="flex justify-center">
                        <Button :text="'Insert'"/>
                    </div>
                </div>
                <div class="flex flex-col gap-5">
                    <label class="text-white text-center text-2xl"> Match Type </label>
                    <input type="text" class="p-2 rounded-xl">
                    <div class="flex justify-center">
                        <Button :text="'Insert'"/>
                    </div>
                </div>
                <div class="flex flex-col gap-5">
                    <label class="text-white text-center text-2xl"> Player 2 </label>
                    <input type="text" class="p-2 rounded-xl">
                    <div class="flex justify-center">
                        <Button :text="'Insert'"/>
                    </div>
                </div>
                <div class="flex flex-col gap-5">
                    <label class="text-white text-center text-2xl"> Country 2 </label>
                    <input type="file" class="hidden">
                    <div class="flex justify-center">
                        <Button :text="'Country'"/>
                    </div>
                </div> 
            </div>
        </form>
    </div>
</template>

<script>
import Button from './widgets/Button.vue';

    export default {
        components: {
            Button
        }
    }
</script>