# React Image Carousel Project

## Objectives

- **Develop a React SPA with a Clear Component Structure:** Organize your project with a well-defined component structure to enhance maintainability.
- **Demonstrate Effective Planning of State and Props Across Components:** Plan and manage the state and props for each component by thoroughly outlining your component tree before coding.
- **Implement a Component-by-Component Development Approach:** Develop each component incrementally, focusing on its props, state, and JSX, ensuring a systematic and organized development process.

## Development Rules

- **Planning Before Coding:** Outline your component tree, specifying the state and props for each component. Think through the logic for each function, considering inputs, outputs, and overall logic.
- **Problem Solving Before Coding:** The goal is to solve problems before coding in JavaScript/React/JSX. Approach coding as the translation of a well-thought-out plan into syntax the computer understands.

## Technical Requirements

- **Programming Language:** JavaScript (React.js).
- **Environment:** Web Browser.
- **UI:** JSX/React Components.

## Milestones

1. **Initial Planning:**
   - Draft a comprehensive component tree.
   - Identify components, their state, and props.

2. **Develop Core Components:**
   - Focus on props, state, and JSX for each component.

3. **Build Functionality:**
   - Implement functions with a clear understanding of inputs, outputs, and logic.

4. **Stretch Goals, Testing & Debugging:**
   - Address additional features and refine the application.
   - Test and debug for a robust application.



### The Project

The image carousel allows the user to navigate through images using backward or forward buttons. It also allows the user to selecr an image clicking the indicator. When an image is clicked, this displayed an interesting fact about the image.

- **Implementation Steps:**
  - Use the `useState` hook to store and update the current image state.
  - Allow the user to navigate to the previous or next image using buttons.
  - Implement logic to cycle through images when the user reaches the end of the array.
  - Add transition using CSS to animate the image changes.
    Use the `userEffect` hook to enable effects on the components.

- **Components**

App

├── Header

├── Carousel

│   └── to be implemented

└── to be implemented

- App component = Just target the other components to reflect them on the UI
- Header = Title
- Carousel = Array of images + Functions that makes the buttons work --> Image carousel
