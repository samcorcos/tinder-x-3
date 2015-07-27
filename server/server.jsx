if (Meteor.users.find().count() === 0) {
  Accounts.createUser({
    username: 'Sam',
    password: 'password'
  });
  // Meteor.loginWithPassword('Sam', 'password')
}

if (DummyData.find().count() === 0) {
  let addDummyData = function() {
    let image = faker.image.imageUrl();
    let name = faker.name.findName();
    let description = faker.company.companyName();
    DummyData.insert({
      image: image,
      name: name,
      description: description
    })
    console.log("inserted");
  }
  R.forEach(addDummyData, R.range(1,100))
}
