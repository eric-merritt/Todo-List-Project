import './about.css';

export const about = () => {

  const aboutDiv = document.createElement('div');
  aboutDiv.classList.add('about');

  aboutDiv.id = 'About';

  const aboutHeading = document.querySelector('.heading');
  aboutHeading.classList.add('about-heading');
  aboutHeading.textContent = 'About';

  const aboutDescription = document.createElement('p');
  aboutDescription.classList.add('about-description');
  aboutDescription.textContent = 'This is a simple todo list app. It uses localStorage to persist data across screens and the history API to allow for navigation between pages. I chose to use ES Modules to organize my code. I also used webpack to bundle my code. I used the Ionic Framework for the icons. I am completing this project along with the Odin Project curriculum. Feel free to play around and send constructive criticism to my email listed on the profile page.';

  aboutDiv.appendChild(aboutDescription);

  return aboutDiv;

};
