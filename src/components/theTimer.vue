<script setup lang="ts">
import { useTimerStore } from '@/stores/timer'
import { computed } from 'vue'

const timerStore = useTimerStore()

/* CSS timer logic using CSS animations mostly comes
   from https://dev.to/madsstoumann/clocks-countdowns-timing-in-css-and-javascript-554n
*/
const cssProps = computed(() => {
  const remaining = timerStore.duration * 1000 // in milliseconds

  // Periods to seconds
  const MINUTE = 60
  const HOUR = 3600
  const DAY = 86400

  // We use seconds only
  // Split the remaining time to each time part we need to display, in the displayed unit
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
    '--play-state': timerStore.isRunning ? 'running' : 'paused',
  }
})
</script>

<template>
  <ol class="clock" :style="cssProps">
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
  --delay-hours: '0s';
  --delay-minutes: '0s';
  --delay-seconds: '0s';
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

    &.hours {
      animation: hours 86400s steps(24, jump-none) infinite;
      animation-delay: var(--delay-hours, 0s);
      animation-play-state: var(--play-state);
      counter-reset: hours var(--hours);
      &::after {
        content: counter(hours, decimal-leading-zero) ' ';
      }
    }
    &.minutes {
      animation: minutes 3600s steps(60, jump-none) infinite;
      animation-delay: var(--delay-minutes, 0s);
      animation-play-state: var(--play-state);
      counter-reset: minutes var(--minutes);
      &::after {
        content: counter(minutes, decimal-leading-zero) ' ';
      }
    }
    &.seconds {
      animation: seconds 60s steps(60, jump-none) infinite;
      animation-delay: var(--delay-seconds, 0s);
      animation-play-state: var(--play-state);
      counter-reset: seconds var(--seconds);
      &::after {
        content: counter(seconds, decimal-leading-zero) ' ';
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
