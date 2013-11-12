var User = DS.Model.extend({
  name: DS.attr('string'),
});

User.reopenClass({
  FIXTURES: [
  {
    id: "1",
    name: 'Mike',
  } 
]});

export default User;
