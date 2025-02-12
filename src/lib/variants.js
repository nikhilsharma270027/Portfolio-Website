// import { easeOut } from "framer-motion"

// export const fadeIn = (direction ,delay) => {
//     return {
//         hidden: {
//             y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
//             x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
//         },
//         show : {
//             y: 0,
//             x: 0,
//             opacity: 1,
//             transition: {
//                 type: 'tween',
//                 duration: 0.9,
//                 delay: delay,
//                 ease: [0.25, 0.25, 0.25, 0.25],
//             }
//         }
//     }
// }
import { easeOut } from "framer-motion";

export const fadeIn = (direction, delay, duration = 0.9, ease = [0.25, 0.25, 0.25, 0.25]) => {
  // Define initial offsets based on direction
  const offsets = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
    default: { y: 0, x: 0 }, // Fallback for invalid direction
  };

  // Get the initial offset based on the direction
  const initialOffset = offsets[direction] || offsets.default;

  return {
    hidden: {
      ...initialOffset, // Apply initial offset
      opacity: 0, // Start with 0 opacity
    },
    show: {
      y: 0, // Animate to 0 y-position
      x: 0, // Animate to 0 x-position
      opacity: 1, // Animate to full opacity
      transition: {
        type: "tween", // Use tween for smooth transitions
        duration, // Use the provided duration or default to 0.9
        delay, // Use the provided delay
        ease, // Use the provided easing function or default
      },
    },
  };
};