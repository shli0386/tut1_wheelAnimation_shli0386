# tut1_groupA  
## Time-Based Animated Interpretation of *Wheels of Fortune*

---

## 🎨 Project Overview

This personal project builds upon our group’s visual reconstruction of Pacita Abad’s *Wheels of Fortune*. While the group focused on accurate geometric simulation, this individual extension introduces **time-based animation**, **interactive rhythms**, and a **visual narrative** to reinterpret the artwork dynamically.

---

## 🌀 Concept & Design

Each wheel now functions like a living organism—emerging, spinning, transforming, fading. The animation is driven by time-based state transitions, highlighting cycles of vitality, decay, and reactivation.

### 🧠 Creative Additions
- **Phase-driven narrative**: Each wheel enters three visual states—appearance, active rhythm, and decay.
- **Interfering rhythms**: Wheels pulse, rotate, and deform over time, each with its own rhythm.
- **Responsive awakening**: Wheels in decay can be "revived" when hovered over, briefly regaining motion and clarity.
- **Deformation-based symbolism**: Horizontal stretch and reduced opacity visually express dissipation and entropy.

---

## ⏱️ Technical Implementation

This project is built using **p5.js**, and implements a custom `Wheel` class encapsulating dynamic, time-based behaviors. Key technical features include:

| Feature                | Description |
|------------------------|-------------|
| `millis()`-based timing | Drives animation states and transitions |
| `sin()` and `lerp()`   | Creates rhythmic scale changes and smooth interpolation |
| `state` machine        | Controls life cycle stages: `0 = hidden`, `1 = active`, `2 = fading` |
| `scale()` & `tint()`   | Enables shape deformation and visual fading over time |

### ⚠️ External Techniques Not Taught in Class:
- `tint(255, this.opacity)`: Used to apply dynamic transparency.  
  → *// Not taught in class: `tint()` applies transparency to the full drawing context.*

- `Array.from({ length: 7 }, () => randomColor())`: JS syntax for generating array of random colors.  
  → *// JS array constructor: generates 7 random colors for the concentric rings.*

This code was assisted using ChatGPT to support structural planning and code optimization.

---

## 📁 File Structure

tut1_groupA/
├── index.html        # HTML scaffold with p5.js + scripts
├── sketch.js         # Canvas setup and wheel update/draw loop
├── wheel.js          # Wheel class with animated states
└── README.md         # Project description (this file)

---


## 🔄 Code Modifications from Group Version
- Replaced static rendering with time-controlled state machine
- Added `update()` method to the Wheel class with phase logic (`state = 0/1/2`)
- Hover detection restores decaying wheels (`dist()` + mouse proximity)
- Central animation logic entirely rewritten while preserving group visual style

### 🎓 Course Info

IDEA9103 – Creative Coding  
The University of Sydney, 2025  
**Student Name**: Shixuan Li  
**SID**: 550224617
**GitHub Repo**: [https://github.com/shli0386/tut1_wheelAnimation_shli0386](https://github.com/shli0386/tut1_wheelAnimation_shli0386)

---

## 🖌️ Credits

- Inspired by: *Wheels of Fortune* by [Pacita Abad](https://www.pacitaabad.com/)  
- Framework: [p5.js](https://p5js.org/)  
- Code: Shixuan Li  
- Group: Tutorial 1, Group A

---

> “Everything in the universe spins.” – *Pacita Abad*