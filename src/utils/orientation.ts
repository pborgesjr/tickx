export const getOrientation = () =>
  window.addEventListener(
    "orientationchange",
    () => {
      alert(window.orientation);
    },
    false
  );
