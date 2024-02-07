<script setup lang="ts">
import { useTimerStore } from '@/stores/timer'
import { computed, onBeforeUnmount, ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import getRemainingTime from '@/ts/utilities/getRemainingTime'

let timerInterval = 0

const timerStore = useTimerStore()
const { isRunning, resetTime } = storeToRefs(timerStore)

/**
 * This component has no controls, it responds to shared state changes
 * triggered by ControlTimer component, all controls are there
 *
 * We avoid updating state here to prevent any state update loops issue
 * We therefore need a local ref to keep track of the remaining time.
 *
 * This ref is initialised either with total duration or with remaining time,
 * if the timer is already started (running or paused) when this component is mounted
 */
const remainingTime = ref(timerStore.remaining || timerStore.duration)

/**
 * Update hours in display from remaining time
 */
const hours = computed(() => {
  const date = new Date(remainingTime.value)

  return padNumber(date.getHours())
})
/**
 * Update minutes in display from remaining time
 */
const minutes = computed(() => {
  const date = new Date(remainingTime.value)

  return padNumber(date.getMinutes())
})
/**
 * Update seconds in display from remaining time
 */
const seconds = computed(() => {
  const date = new Date(remainingTime.value)

  return padNumber(date.getSeconds())
})

/**
 * Helper to pad a number with leading 0
 *
 * @param value
 */
const padNumber = (value: number): string => String(value).padStart(2, '0')

/**
 * This is where most of the magic happens.
 *
 * Remaining time is calculated and updated
 * Display is updated with correct values for hours/minutes/seconds
 *
 * React to missing data (e.g. startTime or remaining)
 */
function tick() {
  // Ref update will trigger update of display, so that's it for this function already
  remainingTime.value = getRemainingTime(timerStore.startTime, timerStore.remaining)
}

/**
 * Helper to get things moving
 */
function startInterval() {
  // Do not wait 500ms to start the first iteration
  tick()
  // Update frequently according to the browser clock
  // every 500ms so that if we have some processing delay we avoid jumping numbers
  timerInterval = setInterval(() => {
    tick()
  }, 500)
}

/**
 * Helper to freeze timer
 */
function stopInterval() {
  clearInterval(timerInterval)
}

/**
 * Watching running state to respond to commands from control panel
 * Start watching immediately to properly initialise if already started
 */
watch(
  isRunning,
  (isRunning) => {
    if (isRunning) {
      // Respond to start : define interval
      startInterval()
    } else {
      // Respond to pause/stop : clear interval
      stopInterval()
    }
  },
  { immediate: true }
)

/**
 * Watching resetTime state to respond to timer configuration update
 * We need resetTime to ensure each form submission will trigger
 * a visual update, even if the duration does not change from initial value
 */
watch(resetTime, () => {
  // When resetTime is updated it means we hit the reset button;
  // We need to reset timer to currently configured duration
  remainingTime.value = timerStore.duration
})

/**
 * Clean up when leaving
 */
onBeforeUnmount(() => {
  stopInterval()
})
</script>

<template>
  <ol class="clock animated" ref="clockElement">
    <li v-if="timerStore.showHours" class="time-part hours">{{ hours }}</li>
    <li class="time-part minutes">{{ minutes }}</li>
    <li class="time-part seconds">{{ seconds }}</li>
  </ol>
</template>

<style scoped>
.clock {
  background: #5e5e5e;
  border-radius: 4px;
  display: grid;
  font-size: 3rem;
  font-variant-numeric: tabular-nums;
  font-weight: bold;
  gap: 10px;
  grid-auto-flow: column;
  padding: 5px;

  & li {
    list-style: none;
    background: #333333;
    border-radius: 4px;
    display: grid;
    padding: 0 5px;
    text-align: center;
    width: auto;
  }
}
</style>
