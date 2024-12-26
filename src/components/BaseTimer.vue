<script setup lang="ts">
import { useTimerStore } from '@/stores/timer'
import { computed, onBeforeUnmount, ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import getRemainingTime from '@/ts/utilities/getRemainingTime'

let timerInterval = 0

const { inControl = false } = defineProps<{
  inControl?: boolean
}>()

const timerStore = useTimerStore()
const { isRunning, isVisible, resetTime } = storeToRefs(timerStore)

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
  // Use UTCHours to bypass any timezone issue
  return padNumber(date.getUTCHours())
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
  <ol class="clock animated" ref="clockElement" :class="{ hidden: !isVisible, control: inControl }">
    <li v-if="timerStore.showHours" class="time-part hours">
      <span>{{ hours }}</span>
    </li>
    <li v-if="timerStore.showHours" class="colon">:</li>
    <li class="time-part minutes">
      <span>{{ minutes }}</span>
    </li>
    <li class="colon">:</li>
    <li class="time-part seconds">
      <span>{{ seconds }}</span>
    </li>
  </ol>
</template>

<style scoped>
.clock {
  font-family: 'E1234', sans-serif;

  background: #4b4b4b;
  border-radius: 4px;
  font-size: 5vh;
  font-variant-numeric: tabular-nums;
  font-weight: bold;
  padding: 3px;
  display: flex;
  visibility: visible;
  opacity: 1;
  transition:
    visibility 1s ease-in-out,
    opacity 2s ease-in-out;

  &.hidden {
    /* On public display we want it to be completely invisible */
    /* But we do not want it to flicker when enabled/disabled */
    visibility: hidden;
    opacity: 0;
    transition:
      visibility 1s ease-in-out,
      opacity 1s ease-in-out;
    &.control {
      /* In admin we want the timer to be visible but "hidden" */
      visibility: visible;
      opacity: 0.4;
    }
  }

  & li {
    list-style: none;
    border-radius: 4px;
    text-align: center;
    width: auto;

    &.time-part {
      padding: 0 5px;
      background: #333333;
      position: relative;

      span {
        /* Make numbers appears before the 88 background */
        position: relative;
        z-index: 2;
      }

      &:after {
        content: '88';
        color: #4b4b4b;
        /* Place 88 as the background of numbers */
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;
      }
    }
    &.colon {
      padding: 0;
      margin: 0 -5px;
      color: #333333;
    }
  }
}
</style>
