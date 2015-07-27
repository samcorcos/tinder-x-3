DummyData = new Mongo.Collection('dummyData');

if (Meteor.isServer) {
  Meteor.publish('dummyData', function() {
    return DummyData.find();
  })
}
