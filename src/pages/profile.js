import { userProfile } from '../modules/userProfile.js';


export const profile = () => {

  let user = userProfile();

  return (
    `<div>
      <h1>Employee Profile</h1>
      <p>
        Name: {user.firstName} {user.lastName}
      </p>
      <p>Email: {user.email}</p>
      <p>Hire Date: {user.hireDate}</p>
    </div>`
  );
}