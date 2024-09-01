<script setup>

    import { ref } from 'vue'

    import { useRouter } from 'vue-router';

    import { setToStorage, getFromStorage, removeFromStorage } from '@/utils/localStorage';

    import NumEntry from '@/components/NumEntry.vue';
    import TextEntry from '@/components/TextEntry.vue';

    import { Button } from '@/components/ui/button';

    const router = useRouter()
    
    const TEST_SCHEMA = {
        'inputs': [
            {
                'type': 'num',
                'id': 'speaker',
                'label': 'Speaker',
            },
            {
                'type': 'num',
                'id': 'amp',
                'label': 'Amp',
            },
            {
                'type': 'text',
                'id': 'other.notes',
                'label': 'Notes'
            }
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

    function logout() {
        localStorage.clear()
        router.push({ path: '/login' })
    }

</script>


<template>
    <div class="mx-5 flex justify-end">
        <Button variant="outline" @click.stop.prevent="logout()">Logout</Button>
    </div>
    <ul v-for="input in TEST_SCHEMA.inputs" :key="input">
        <NumEntry v-if="input.type === 'num'" :name="input.id" :label="input.label" />
        <TextEntry v-if="input.type === 'text'" :name="input.id" :label="input.label" />
    </ul>
    <!-- <Button @click.stop.prevent="test=getEntryJson()">test</Button>
    <p>{{ test }}</p> -->
</template>