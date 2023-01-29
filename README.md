# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam).


### Links

- Live Site URL: [FAQ-accordion-card](https://mermory-alloc.github.io/FAQ-accordion-card/)

## My process

For this challenge, i used a layout of two columns using a grid in the desktop mode, the first column contains the images of the women and the flor shadow  positioned in the top of each other but the box is created using the ::before selector of the parent container because it is positioned outside of it in the design.


In the second column, we can find all the text, the heading and a list of elements that each of them contains two divs one for the question with the arrow icon that is clickable and the other for the answer that get hidden and showed when the question got clicked.


For the clickable behavior, JS was needed. at first the script did look for every element with a class question and add an event listener to them so when it is triggered it will change the style of element itself and will look for the arrow element to rotate it and for the sibling element which is the answer to hide it but before that, the script will go through all the other elements in the list to check if there is another answer is displayed  so it will hide it. and the reason for doing this is to not let the text overflow down the container and it will keep the text just inside the container.


In the mobile env, i did used a grid of two rows and one column, in the first row, i did removed all the images that made specifically for the desktop and kept it empty just to add som white space above the container then i used ::before and ::after selectors of the parent container to add the images that made specific to the mobile.

### What I learned

This challenge did help in improving my CSS and working with positions and layouts, it did also help me improve in the  DOM manipulation using JS.
