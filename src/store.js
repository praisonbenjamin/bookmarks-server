const { v4: uuid } = require('uuid');

const bookmarks = [
  {
    id: uuid(),
    title: 'TThe Porch',
    url: 'https://www.theporch.live',
    description: 'Meet your friends here',
    rating: 5,
  },
  {
    id: uuid(),
    title: 'Google',
    url: 'https://www.google.com',
    description: 'Where we find everything else',
    rating: 4,
  },
  {
    id: uuid(),
    title: 'Thinkful',
    url: 'https://www.thinkful.com',
    description: 'Think outside the classroom',
    rating: 5,    
  },
  {
    id: uuid(),
    title: 'MDN',
    url: 'https://developer.mozilla.org',
    description: 'The only place to find web documentation',
    rating: 5,
  },
];

module.exports = { bookmarks };