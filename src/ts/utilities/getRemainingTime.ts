/**
 * Calculate the current remaining time from a start time and a given total duration
 *
 * @param startTime
 * @param duration
 */
export default (startTime: number, duration: number): number => {
  const current = Date.now()
  const elapsed = current - startTime
  const remaining = duration - elapsed

  // Do not return negative numbers
  return Math.max(remaining, 0)
}
