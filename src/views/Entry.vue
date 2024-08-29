<script setup>

    import { ref } from 'vue'

    import { setToStorage, getFromStorage, removeFromStorage } from '@/utils/localStorage';

    import NumEntry from '@/components/NumEntry.vue';

    import { Button } from '@/components/ui/button';
    
    const TEST_SCHEMA = {
        'inputs': [
            {
                'type': 'num',
                'id': 'auto.test.speaker',
                'label': 'Speaker',
            },
            {
                'type': 'num',
                'id': 'amp',
                'label': 'Amp',
            },
        ]
    }

    const test = ref({})

    function getEntryJson() {
        var entry = {}
        for (var input of TEST_SCHEMA.inputs) {
            if (input.id.includes('.')) {
                var split = input.id.split('.')
                var inter = {}
                inter[split.at(-1)] = getFromStorage(input.id)
                split.pop()
                while (split.length > 1) {
                    let temp = {}
                    Object.assign(temp, inter)
                    inter = {}
                    inter[split.at(-1)] = temp
                    split.pop()
                }
                entry[split[0]] = inter
            } else {
                entry[input.id] = getFromStorage(input.id)
            }
        }
        console.log(entry)
        return entry
    }

</script>


<template>
    <ul v-for="input in TEST_SCHEMA.inputs" :key="input">
        <NumEntry v-if="input.type === 'num'" :name="input.id" :label="input.label" />
    </ul>
    <Button @click.stop.prevent="test=getEntryJson()">test</Button>
    <p>{{ test }}</p>
</template>