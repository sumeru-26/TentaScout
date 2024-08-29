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
                inter[split.at(-1)] = fixType(getFromStorage(input.id), input.type)
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
                entry[input.id] = fixType(getFromStorage(input.id), input.type)
            }
        }
        console.log(entry)
        return entry
    }

    function fixType(value, type) {
        if (type === 'num') {
            return parseInt(value)
        } 
        else {
            return value
        }
    }

</script>


<template>
    <ul v-for="input in TEST_SCHEMA.inputs" :key="input">
        <NumEntry v-if="input.type === 'num'" :name="input.id" :label="input.label" />
    </ul>
    <Button @click.stop.prevent="test=getEntryJson()">test</Button>
    <p>{{ test }}</p>
</template>