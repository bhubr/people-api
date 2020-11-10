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
}) => ({
  firstName: first,
  lastName: last,
  gender,
  location: { city, country },
  email,
  picture: picture.large,
  nationality: nationalities[nat]
})

const users = results.map(mapUserFields);
const filePath = path.resolve(__dirname, '../db.json');
fs.writeFileSync(filePath, JSON.stringify({ users }, null, 2));