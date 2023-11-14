import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function User() {
  const { isAuthenticated, isLoading, user } = useAuth0();
  if(!isLoading && isAuthenticated)
  {
  return <p>Name: {user.name}! <p>Email: {user.email}</p><p><img src={user.picture}></img></p><p>{console.log(user.email_verified)}</p></p>;
  }
  else
  return <p>Name: </p>;
}
export default User;