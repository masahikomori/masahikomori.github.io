$(function () {
  // Account
  var account = "masahikomori";
  // GitHub API
  var apiUrl = "https://api.github.com/users/";
  // Form
  var formUrl = "https://" + account + ".wufoo.com/forms/contact/";
  // GitHub user info
  $.get(apiUrl + account).then(function (lists) {
    about.lists = lists;
  });
  // About
  var about = new Vue({
    el:"#about",
    data:{
      lists:[]
    }
  });
   // Social
   var social = new Vue({
    el: "#social",
    data: {
      head:"SNS",
      description:"SNS",
      items: []
    },
    beforeCreate: function () {
      axios.get("./content/social.json")
          .then(function (response) {
            social.items = response.data;
          })
          .catch(function (error) {
              console.log(error);
          });
    }
  })
});
