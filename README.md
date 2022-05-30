# Landing Page Project

1. Descriotion 

1. functions which i used 

1. what the progect do 
------------
## Description

Now, I will speak about my first project in the field of programming. the project uses methods of javascript for functionality, Html for structure, CSS for styling , it used Tactics in time management and, good patient to appear in this case hope  you like it.
-------

## functions used 
```
 1. the scroll function
scroll=(e)=>{
    e.preventDefault();
    seaction.scrollIntoView({behavior: 'smooth'
  });

//   // this function prevent the element from scrolling default 
and make the scrolling smoothly.  
```
```
 addClass = () => {
  seactions.forEach(seaction => {
    //this methode to get the dimnition of the seaction element
    const place = seaction.getBoundingClientRect().top;
    //here i removed all active  classes from the elemnt 
    seaction.classList.remove('your-active-class')
    //here a condition detrmine  to add or remove active class
    if (place >= 0 && place <= 300) {
      seaction.classList.add('your-active-class')

      const links = document.querySelectorAll('a')
      //loop over links to add active class
      links.forEach(link => {
        link.classList.remove('your-active-class')
        title = seaction.getAttribute('data-nav')
        // condation that detrmine the activeclass to linksF
        if (link.textContent === title) {
          link.classList.add('your-active-class')



        } else {
          link.classList.remove('your-active-class')
        }
      })
    } else {
      seaction.classList.remove('your-active-class')
    }

  })

// this function loop over the  array, and determine the points in the page which the active class should add or remove,and inside it links element witch add active class  to it if link text content equal seaction  data-nav. 
```
-----

## what is the project 
the project scrolls smoothly when you click on any element in the navbar and, gives you the information which the owner of the page want.


------
lastly, I hope  you like the project 









