<script setup lang="ts">
import { useTimerStore } from '@/stores/timer'
import { computed, ref, watch } from 'vue'
import { storeToRefs } from 'pinia'

const clockElement = ref<HTMLOListElement | null>(null)

const timerStore = useTimerStore()
const { duration } = storeToRefs(timerStore)

/**
 * Watch duration so that we can reset animation when updated
 */
watch(duration, () => {
  // Remove animation class
  clockElement.value?.classList.remove('animated')
  // The actual magic to reset the animation -> triggering reflow
  // without this it wouldn't work.
  void clockElement.value?.offsetWidth

  // Add animation class back
  clockElement.value?.classList.add('animated')
})

/**
 * CSS timer logic using CSS animations mostly comes
 *  from https://dev.to/madsstoumann/clocks-countdowns-timing-in-css-and-javascript-554n
 */
const cssProps = computed(() => {
  const remaining = timerStore.duration * 1000 // FIXME use seconds directly in milliseconds

  // Periods to seconds
  const MINUTE = 60
  const HOUR = 3600
  const DAY = 86400

  // We use seconds only
  // Split the remaining time to each time part we need to display, in the displayed unit
  const remainingTotal = Math.floor(remaining / 1000)
  const remainingSeconds = Math.floor((remaining / 1000) % 60)
  const remainingMinutes = Math.floor((remaining / (60 * 1000)) % 60) * MINUTE
  const remainingHours = Math.floor((remaining / (HOUR * 1000)) % 24) * HOUR

  // Calculate the delays of our animations so that we do not start from "from" number but somewhere in between
  const delaySeconds = Math.abs(59 - remainingSeconds)
  const delayMinutes = Math.abs(HOUR - remainingMinutes - 60 + delaySeconds)
  const delayHours = Math.abs(DAY - remainingHours - 3600 + delayMinutes)

  return {
    '--delay-seconds': -delaySeconds + 's',
    '--delay-minutes': -delayMinutes + 's',
    '--delay-hours': -delayHours + 's',
    // one iteration covers 60s / one minute
    '--iterations-seconds': Math.ceil(remainingTotal / MINUTE) + 1,
    // one iteration covers 60m / one hour
    '--iterations-minutes': Math.ceil(remainingTotal / HOUR) + 1,
    // one iteration covers 24h / one day
    '--iterations-hours': Math.ceil(remainingTotal / DAY) + 1,
    '--play-state': timerStore.isRunning ? 'running' : 'paused',
  }
})
</script>

<template>
  <ol class="clock animated" :style="cssProps" ref="clockElement">
    <li v-if="timerStore.showHours" class="time-part hours"></li>
    <li class="time-part minutes"></li>
    <li class="time-part seconds"></li>
  </ol>
</template>

<style scoped>
@property --hours {
  syntax: '<integer>';
  initial-value: 0;
  inherits: false;
}
@property --minutes {
  syntax: '<integer>';
  initial-value: 0;
  inherits: false;
}
@property --seconds {
  syntax: '<integer>';
  initial-value: 0;
  inherits: false;
}

.clock {
  /* Declare variables that will be overridden on mount */
  --delay-seconds: '0s';
  --delay-minutes: '0s';
  --delay-hours: '0s';
  --iterations-seconds: '0';
  --iterations-minutes: '0';
  --iterations-hours: '0';
  --play-state: paused;

  all: unset;
  background: #5e5e5e;
  border-radius: 0.5rem;
  display: grid;
  font-size: 3rem;
  font-variant-numeric: tabular-nums;
  font-weight: bold;
  gap: 10px;
  grid-auto-flow: column;
  padding: 10px;
  transform: translateZ(0);

  & li {
    list-style: none;
    background: #333333;
    border-radius: 0.5rem;
    display: grid;
    padding: 0 10px;
    text-align: center;
    width: auto;
  }

  &.animated {
    & li {
      &.seconds {
        animation-name: seconds;
        animation-duration: 60s;
        animation-timing-function: steps(60, jump-none);
        /* ensure it starts at the correct frame */
        animation-delay: var(--delay-seconds, 0s);
        /* play/pause */
        animation-play-state: var(--play-state);
        /* stop when all iterations are done */
        animation-iteration-count: var(--iterations-seconds, 1);
        /* get and display the value */
        counter-reset: seconds var(--seconds);
        &::after {
          content: counter(seconds, decimal-leading-zero) ' ';
        }
      }
      &.minutes {
        animation-name: minutes;
        animation-duration: 3600s;
        animation-timing-function: steps(60, jump-none);
        /* ensure it starts at the correct frame */
        animation-delay: var(--delay-minutes, 0s);
        /* play/pause */
        animation-play-state: var(--play-state);
        /* stop when all iterations are done */
        animation-iteration-count: var(--iterations-minutes, 1);
        /* get and display the value */
        counter-reset: minutes var(--minutes);
        &::after {
          content: counter(minutes, decimal-leading-zero) ' ';
        }
      }
      &.hours {
        animation-name: hours;
        animation-duration: 86400s;
        animation-timing-function: steps(24, jump-none);
        /* ensure it starts at the correct frame */
        animation-delay: var(--delay-hours, 0s);
        /* play/pause */
        animation-play-state: var(--play-state);
        /* stop when all iterations are done */
        animation-iteration-count: var(--iterations-hours, 1);
        /* get and display the value */
        counter-reset: hours var(--hours);
        &::after {
          content: counter(hours, decimal-leading-zero) ' ';
        }
      }
    }
  }
}

@keyframes hours {
  from {
    --hours: 23;
  }
  to {
    --hours: 0;
  }
}
@keyframes minutes {
  from {
    --minutes: 59;
  }
  to {
    --minutes: 0;
  }
}
@keyframes seconds {
  from {
    --seconds: 59;
  }
  to {
    --seconds: 0;
  }
}
</style>
