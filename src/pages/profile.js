import { userProfile } from '../modules/userProfile.js';


export const profile = () => {

  let user = userProfile();

  let profileDiv = document.createElement('div');
  profileDiv.classList.add('profile');

  const profileTitle = document.createElement('h2');
  profileTitle.classList.add('profile-title');
  profileTitle.textContent = 'Employee Profile';

  const profileName = document.createElement('p');
  profileName.classList.add('profile-name');
  profileName.textContent = `Name: ${user.firstName} ${user.lastName}`;

  const profileEmail = document.createElement('p');
  profileEmail.classList.add('profile-email');
  profileEmail.innerHTML = `Email: <a href="mailto:${user.email}">${user.email}</a>`;

  const profileHireDate = document.createElement('p');
  profileHireDate.classList.add('profile-hire-date');
  profileHireDate.textContent = `Hire Date: ${user.hireDate}`;

  // const profilePosition = document.createElement('p');
  // profilePosition.classList.add('profile-position');
  // profilePosition.textContent = `Position: ${user.position}`;

  // const profileDepartment = document.createElement('p');
  // profileDepartment.classList.add('profile-department');
  // profileDepartment.textContent = `Department: ${user.department}`;

  profileDiv.appendChild(profileTitle);
  profileDiv.appendChild(profileName);
  profileDiv.appendChild(profileEmail);
  profileDiv.appendChild(profileHireDate);
  // profileDiv.appendChild(profilePosition);
  // profileDiv.appendChild(profileDepartment);

  profileDiv.id = 'profile';
  

  return (
    profileDiv
  );
}