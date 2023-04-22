<template>
    <div class="flex justify-center h-48">
        <form>
            <div class="grid grid-cols-5 gap-24 mt-8">
                <div class="flex flex-col gap-5">
                    <label class="text-white text-center text-2xl"> Country 1 </label>
                    <select class="rounded-xl p-2.5">
                        <option selected>Choose a country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                    </select>
                    <div class="flex justify-center">
                        <Button :text="'Insert'"/>
                    </div>
                </div>
                <div class="flex flex-col gap-5">
                    <label class="text-white text-center text-2xl"> Player 1 </label>
                    <input type="text" class="p-2 rounded-xl" v-model="player1">
                    <div class="flex justify-center">
                        <Button :text="'Insert'" @click.prevent="insertPlayer1(player1)" />
                    </div>
                </div>
                <div class="flex flex-col gap-5">
                    <label class="text-white text-center text-2xl"> Match Type </label>
                    <input type="text" class="p-2 rounded-xl" v-model="match">
                    <div class="flex justify-center">
                        <Button :text="'Insert'" @click.prevent="insertMatchName(match)" />
                    </div>
                </div>
                <div class="flex flex-col gap-5">
                    <label class="text-white text-center text-2xl"> Player 2 </label>
                    <input type="text" class="p-2 rounded-xl" v-model="player2">
                    <div class="flex justify-center">
                        <Button :text="'Insert'" @click.prevent="insertPlayer2(player2)" />
                    </div>
                </div>
                <div class="flex flex-col gap-5">
                    <label class="text-white text-center text-2xl"> Country 2 </label>
                    <select class="rounded-xl p-2.5">
                        <option selected>Choose a country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                    </select>
                    <div class="flex justify-center">
                        <Button :text="'Insert'" />
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
    },
    data() {
        return {
            player1: null,
            player2: null,
            match: null
        }
    },
    methods: {
        insertPlayer1(player1) {
            this.player1 = player1
            this.$emit('insertPlayer1', this.player1)
        },
        insertPlayer2(player2) {
            this.player2 = player2
            this.$emit('insertPlayer2', this.player2)
        },
        insertMatchName(match) {
            this.match = match
            this.$emit('insertMatchName', this.match)
        }
    }
}
</script>