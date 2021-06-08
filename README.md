# Frontend Mentor - Calculator app solution

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [Process](#process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathmatical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference

### Screenshot

<div style="display: flex; align-items: center; justify-content: space-between">
  <img src="https://calculator-app-nu.vercel.app/Desktop-preview.png" width="75%">
  <img src="https://calculator-app-nu.vercel.app/Mobile-preview.png" width="24%">
</div>

### Links

- [Live Demo](https://calculator.apps.grimfeld.tech)

## Process

### Built with

- [React](https://reactjs.org/) - JS Library
- [TypeScript](https://www.typescriptlang.org/) - Typed JS Language
- [Sass](https://sass-lang.com) - CSS Preprocessor
- [Jest](https://jestjs.io/) - JS Testing Library

### What I learned

```sass
.wrapper
  width: clamp(calc(500px - 2em), calc(100% - 2em), 750px)
  // A useful function that allows to set the min, preferred and max value of a property
```

### Useful resources

- [A complete guide to CSS Grid - CSS-Tricks](https://css-tricks.com/snippets/css/complete-guide-grid/) - A great guide to learn or recall how to use CSS Grid.

## Author

- Website - [Grimfeld](https://grimfeld.tech)
- Frontend Mentor - [@GrimGraysamas](https://www.frontendmentor.io/profile/GrimGraysamas)
