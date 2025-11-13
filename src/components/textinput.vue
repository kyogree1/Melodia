<template>
  <div class="flex flex-col gap-1 w-full">
    <label class="text-sm font-medium text-gray-800">
      {{ label }}
    </label>

    <input
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"

      class="w-full border border-gray-300 rounded-md px-3 py-2 
             text-sm text-gray-800 bg-white
             focus:outline-none focus:ring-1 focus:ring-emerald-400"
    />
  </div>
</template>

<script setup>
defineProps({
  label: String,
  modelValue: [String, Number],
  placeholder: String,
  type: { type: String, default: "text" }
});
</script>
