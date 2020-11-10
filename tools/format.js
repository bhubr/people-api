const fs = require('fs');
const path = require('path');
const res = require('../original-data/randomuser.me.json');

const { results } = res;

const nationalities = {
  FR: 'French',
  GB: 'British',
  ES: 'Spanish',
  DE: 'German'
}

const mapUserFields = ({
  name: { first, last },
  gender,
  location: {
    city, country
  },
  email,
  picture,
  nat
}, idx) => ({
  id: idx + 1,
  firstName: first,
  lastName: last,
  gender,
  loc: { city, country },
  email,
  picture: picture.large,
  nat: nationalities[nat]
})

const people = results.map(mapUserFields);
const filePath = path.resolve(__dirname, '../db.json');
fs.writeFileSync(filePath, JSON.stringify({ people }, null, 2));