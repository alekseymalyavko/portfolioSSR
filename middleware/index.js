function debounceEvent(callback, time) {
  let interval;
  return () => {
    clearTimeout(interval);
    interval = setTimeout(() => {
      interval = null;
      callback(arguments);
    }, time);
  };
}
function onWaypoint(e) {
  if (e.going === this.$waypointMap.GOING_IN) {
    this.isActive = true;
    console.log(5555)
  }
}
export {debounceEvent, onWaypoint}; 