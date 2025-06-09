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

---

## 📁 File Structure

tut1_groupA/
├── index.html        # HTML scaffold with p5.js + scripts
├── sketch.js         # Canvas setup and wheel update/draw loop
├── wheel.js          # Wheel class with animated states
└── README.md         # Project description (this file)

---

## 🎓 Course Info

IDEA9103 – Creative Coding  
The University of Sydney, 2025  
**Student Name**: Shixuan Li  
**SID**: 550224617

---

## 🖌️ Credits

- Inspired by: *Wheels of Fortune* by [Pacita Abad](https://www.pacitaabad.com/)  
- Framework: [p5.js](https://p5js.org/)  
- Code: Shixuan Li  
- Group: Tutorial 1, Group A

---

> “Everything in the universe spins.” – *Pacita Abad*