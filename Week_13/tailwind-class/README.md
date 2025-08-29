# Tailwind CSS Cheat Sheet

## 1. Tailwind Property vs. Normal CSS
| Tailwind Class | Equivalent CSS |
|---------------|---------------|
| `text-left` | `text-align: left;` |
| `text-center` | `text-align: center;` |
| `text-right` | `text-align: right;` |
| `text-justify` | `text-align: justify;` |
| `text-red-500` | `color: #ef4444;` |
| `text-green-600` | `color: #16a34a;` |
| `text-blue-700` | `color: #1d4ed8;` |
| `bg-blue-600` | `background-color: #2563eb;` |
| `bg-gradient-to-r from-blue-500 to-green-500` | `background: linear-gradient(to right, #3b82f6, #10b981);` |
| `p-4` | `padding: 1rem;` |
| `p-6` | `padding: 1.5rem;` |
| `m-2` | `margin: 0.5rem;` |
| `m-8` | `margin: 2rem;` |
| `w-1/2` | `width: 50%;` |
| `w-1/3` | `width: 33.3333%;` |
| `h-screen` | `height: 100vh;` |
| `h-full` | `height: 100%;` |
| `flex` | `display: flex;` |
| `inline-flex` | `display: inline-flex;` |
| `grid` | `display: grid;` |
| `gap-4` | `grid-gap: 1rem;` |
| `gap-x-6` | `column-gap: 1.5rem;` |
| `gap-y-2` | `row-gap: 0.5rem;` |
| `rounded-lg` | `border-radius: 0.5rem;` |
| `rounded-full` | `border-radius: 9999px;` |
| `border-2 border-dashed border-red-500` | `border: 2px dashed #ef4444;` |
| `shadow-md` | `box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);` |
| `shadow-lg` | `box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);` |
| `hover:bg-green-500` | `:hover { background-color: #22c55e; }` |
| `focus:ring-2 focus:ring-blue-500` | `:focus { outline: 2px solid #3b82f6; }` |

---

## 2. Tailwind Animation Classes
| Tailwind Class | Effect |
|---------------|--------|
| `animate-bounce` | Bounces up and down |
| `animate-spin` | Rotates infinitely |
| `animate-pulse` | Pulses between opacity levels |
| `animate-ping` | Expands and fades like a radar ping |
| `motion-reduce:animate-none` | Disables animation for reduced motion users |
| `transition ease-in-out duration-300` | Smooth transition with 300ms duration |
| `transition-all` | Applies transition to all properties |
| `duration-500` | 500ms animation duration |
| `ease-linear` | Linear animation timing |
| `hover:scale-110` | Scales element to 110% on hover |
| `hover:rotate-6` | Rotates element 6 degrees on hover |
| `hover:translate-x-2` | Moves element 2px to the right on hover |
| `hover:translate-y-4` | Moves element 4px down on hover |

---

## 3. Tailwind Utilities with Visual Representation
```
.bg-gradient-to-r from-purple-400 to-pink-600
/* Linear gradient from purple to pink */

.border-4 border-double border-yellow-500
/* 4px double yellow border */

.text-5xl font-extrabold italic underline
/* Extra large, bold, italicized, underlined text */

.flex justify-between items-center h-screen
/* Horizontally space items and center them vertically */

.shadow-xl hover:shadow-2xl transition-all duration-300
/* Smoothly increase shadow on hover */

.translate-x-10 translate-y-5
/* Moves element 10px right and 5px down */

.scale-150
/* Scales element to 150% */

.rotate-12
/* Rotates element 12 degrees */

.skew-x-6
/* Skews element 6 degrees along the X-axis */

.backdrop-blur-lg
/* Applies a large blur effect to the background */

.mix-blend-multiply
/* Blends elements using multiply effect */

.opacity-75 hover:opacity-100
/* Semi-transparent until hovered */

.select-none
/* Prevents text selection */

.cursor-pointer
/* Changes cursor to pointer */
```

---

This cheat sheet now provides an even deeper dive into Tailwind CSS properties, covering more variations and including additional examples for a comprehensive reference.
