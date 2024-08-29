<script setup>
    import { ref, watch } from 'vue'
    
    import { setToStorage, getFromStorage, removeFromStorage } from '@/utils/localStorage';

    import {
        NumberField,
        NumberFieldContent,
        NumberFieldDecrement,
        NumberFieldIncrement,
        NumberFieldInput,
    } from '@/components/ui/number-field'
    import { Label } from '@/components/ui/label'

    const count = ref(0)
    
    watch(count, (newCount, oldCount) => {
        setToStorage('count', newCount)
    })

</script>

<template>
    <NumberField id="count" :model-value="count" @update:model-value="(v) => count = v">
    <Label for="count">Count</Label>
    <NumberFieldContent>
      <NumberFieldDecrement />
      <NumberFieldInput />
      <NumberFieldIncrement />
    </NumberFieldContent>
  </NumberField>
</template>