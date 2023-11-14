const path = require('path');
export const API_URL = process.env.NODE_ENV === 'production' 
  ? 'https://react-email-confirm-server.now.sh'
  : 'http://localhost:8080'
  export var Book = 'Ігри'
export var Game = false
export var Movie = false
export var s = 0
export function change(n)
{
    if (n == 1)
    {
      console.log(Book)
      Book = true
    }
    else if(n == 2)
    {
      Movie = true
    }
    else if(n == 3)
    {
      Game = true
    }
}

