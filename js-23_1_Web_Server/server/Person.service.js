const { person } = require('./Person.data');

const getPersonData = (req, res) => {
  const data = req.params.personData;
  let filtrPersonData;
  if (data === 'address') {
    filtrPersonData = person.map(name => [name.city, name.street, name.postCode]);
  } else if (data === 'post') {
    filtrPersonData = person.map(name => [
      name.name,
      name.surname,
      name.city,
      name.street,
      name.postCode,
    ]);
  } else {
    filtrPersonData = person.map(name => name[data]);
  }
  console.log(filtrPersonData);
  res.send(JSON.stringify(filtrPersonData, null, '\t').replace(/[[\]{}"]/g, ''));
};

const getPerson = (req, res) => {
  let personParams = Object.keys(req.query);
  let personQery;

  if (personParams.length === 0) {
    personQery = person.map(person => person);
  } else {
    personQery = person.map(pers => personParams.map(newUser => pers[newUser]));
  }
  res.send(JSON.stringify(personQery, null, '\t').replace(/[[\]{}"]/g, ''));
};

module.exports = {
  getPerson,
  getPersonData,
};
