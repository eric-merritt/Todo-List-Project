import { format } from 'date-fns'

export const userProfile = () => {

  const user = {
  firstName: 'Eric',
  lastName: 'Merritt',
  email: 'ericm2009@gmail.com',
  hireDate: format(new Date(2019, 1, 1), 'MMM dd, yyyy'),
  };

  return user;
}