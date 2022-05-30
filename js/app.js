const seactions = [...document.querySelectorAll("section")]; //now we should to change seactins into array to make them easy to loop over them..

// loop over seaction 
seactions.forEach(seaction => {
  //create li elements             
  const list = document.createElement('li');
  //create fragment for peformance 
  const fragment = document.createDocumentFragment();
  //append list to the fragment
  fragment.appendChild(list);
  //anchers created elements 
  const links = document.createElement('a');
  //append links to list elements
  list.appendChild(links);

  ul = document.getElementById("navbar__list");
  //href of elements depended on seaction id 
  const href = seaction.getAttribute('#id');

  links.href = `#${href}`;
  //links text content deppended on seaction attribute
  links.textContent = seaction.getAttribute('data-nav');

  ul.appendChild(fragment);
  //this function is prevent the element from default scroll when the click event happen and change it into smooth scroll.
  scroll = (e) => {
    e.preventDefault();
    seaction.scrollIntoView({
      behavior: 'smooth'

    });

  };
  links.addEventListener('click', scroll);
});

//here a loop for each to add active class to a section if the place of screen between 0 and 300 and  removeif not  the active class 
addClass = () => {
  seactions.forEach(seaction => {
    //this methode to get the dimnition of the seaction element
    const place = seaction.getBoundingClientRect().top;
    //here i removed all active  classes from the elemnt 
    seaction.classList.remove('your-active-class');
    //here a condition detrmine  to add or remove active class
    if (place >= 0 && place <= 300) {
      seaction.classList.add('your-active-class');

      const links = document.querySelectorAll('a');
      //loop over links to add active class
      links.forEach(link => {
        link.classList.remove('your-active-class');
        title = seaction.getAttribute('data-nav');
        // condation that detrmine the activeclass to linksF
        if (link.textContent === title) {
          link.classList.add('your-active-class');



        } else {
          link.classList.remove('your-active-class');
        }
      });
    } else {
      seaction.classList.remove('your-active-class');
    }

  });
};
window.addEventListener('scroll', addClass);