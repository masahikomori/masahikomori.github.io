$(function () {
  var apiUrl = "https://api.github.com/users/masahikomori";
  var name = "masahikomori.github.io";
  var dt = new Date();

  var content = new Vue({
    el: '#content',
    data: {
      items: []
    },
    beforeCreate: function () {
      axios.get('./content/content.json')
          .then(function (response) {
            content.items = response.data;
          })
          .catch(function (error) {
              console.log(error);
          });
    }
  })

  var user = new Vue({
    el:"#user",
    data:{
      lists:[]
    }
  });

  // GitHub user info
  $.get(apiUrl).then(function (lists) {
    user.lists = lists;
  });

  // Title
  var title = new Vue({
    el:"#title",
      data:{text:name}
  });
  
  // Navigation bar
  var navbarElem = Vue.extend({
    template: "<nav class='navbar navbar-inverse navbar-fixed-top'>" +
              "<div class='navbar-header'><a class='navbar-brand'>" +
              "<div id='nav-title'>" +
              name +
              "</div></a></div></nav>"
  });

  Vue.component("elem", navbarElem)
  var navigation = new Vue({
    el: "#navigation",
  });

  // Footer
  var footerElem = Vue.extend({
    template: "<p class='text-center'>&copy;&nbsp;"+ dt.getFullYear() + "&nbsp;" + name + "</p>"
  });

  Vue.component("elem", footerElem)
  var footer = new Vue({
    el: "#footer"
  });
});
