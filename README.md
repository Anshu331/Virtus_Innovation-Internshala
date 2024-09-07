React-Three Car Survival Game

# Overview
This is a 3D survival game built using React-three libraries such as Fiber, Drei, and Rapier. The objective of the game is to control a car and navigate through a dynamic environment filled with randomly falling shapes, all while avoiding collisions.

# Features
Car Movement:
Use the W key to move the car forward in the direction of the cursor.
Use the S key to move the car backward.
The cursor will guide the direction for turns.

# Random Falling Shapes:
Various shapes (cubes, spheres, pyramids) will drop randomly from the sky.
Shapes will vary in mass and size, providing a different challenge every time.
Shapes exhibit physical properties when they hit the ground.

# Goal:
The aim is to survive by avoiding the falling shapes.
Touching any shape will result in game over.

# Technologies Used:
React: For building the user interface.
React Three Fiber: For rendering 3D components.
Drei: For additional helpers like controls and environment.
Rapier: For physics-based interactions and behaviors.

# How to Play
Press W to move the car forward and S to move backward.
Use your cursor to control the direction.
Avoid the falling shapes to survive.
Game ends when the car touches any falling shape.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
