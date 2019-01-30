$(function () {
  // Account
  var account = "masahikomori";
  // GitHub API
  var apiUrl = "https://api.github.com/users/";
  // Repository
  var githubUrl = "https://github.com/";
  var githubRepoParam = "tab=repositories";
  var sort = "sort=updated";
  // Gists
  var gistUrl = "https://gist.github.com/";
  // Form
  var formUrl = "https://" + account + ".wufoo.com/forms/contact/";
  // Etc
  var dt = new Date();

  // GitHub user info
  $.get(apiUrl + account).then(function (lists) {
    about.lists = lists;
  });

  // About
  var about = new Vue({
    el:"#about",
    data:{
      head:"About",
      about:"Software engineer and Otaku. I mostly use .Net Framework.",
      lists:[]
    }
  });

  // Social
  var social = new Vue({
    el: '#social',
    data: {
      head:"SNS",
      description:"SNS",
      items: []
    },
    beforeCreate: function () {
      axios.get('./content/social.json')
          .then(function (response) {
            social.items = response.data;
          })
          .catch(function (error) {
              console.log(error);
          });
    }
  })

  // Activity
  var activity = new Vue({
    el: '#activity',
    data: {
      head:"Activity",
      description:"最近の活動",
      items: []
    },
    beforeCreate: function () {
      axios.get('./content/activity.json')
          .then(function (response) {
            activity.items = response.data;
          })
          .catch(function (error) {
              console.log(error);
          });
    }
  })

  // GitHub repository
  var repos = new Vue({
    el:"#repo",
    data:{
      head:"GitHub recent update",
      description:"リポジトリの更新情報",
      lists:[],
      more:githubUrl  + account + "?" + githubRepoParam + "&" + sort
    }
  });

  $.get(apiUrl + account + "/repos?" + sort).then(function (lists) {
    repos.lists = lists;
  });

  // GitHub Gists
  var gists = new Vue({
    el:"#gist",
    data:{
      head:"Gist recent update",
      description:"Gistの更新情報",
      lists:[],
      more:apiUrl + account + "/gists"
    }
  });

  $.get(apiUrl + account + "/gists").then(function (lists) {
    gist.lists = lists;
  });

  // Contact
  var contact = new Vue({
    el:"#contact",
    data:{
      head:"Contact",
      description:"お問い合わせ",
      about:"ご要望やメッセージなど、こちらのフォームにてご連絡ください。Emailによるご連絡をご希望される場合は、masahikomori[at]outlook.jp をご利用ください。",
      url:formUrl,
    }
  });
      
  // Navigation bar
  var navbarElem = Vue.extend({
    template: "<nav class='navbar navbar-inverse navbar-fixed-top'>" +
              "<div class='navbar-header'><a class='navbar-brand'>" +
              "<div id='nav-title'>" +
              account +
              "</div></a></div></nav>"
  });

  Vue.component("elem", navbarElem)
  var navigation = new Vue({
    el: "#navigation",
  });
  
  // Footer
  var footerElem = Vue.extend({
    template: "<p class='text-center'>&copy;&nbsp;"+ dt.getFullYear() + "&nbsp;" + account + "</p>"
  });

  Vue.component("elem", footerElem)
  var footer = new Vue({
    el: "#footer"
  });
});
