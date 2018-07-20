 $(function () {
  var strName = 'masahiko mori'
  var strProfile = 'From Yokogawa Sta, Hiroshima Japan.'
  var strTitle = 'masahikomori.github.io'
  var apiUrl = 'https://api.github.com/users/masahikomori'
  var dt = new Date();

  // Title
  var title = new Vue({
    el:'#title',
      data:{text:strTitle}
  })
  
  // Navigation bar
  var navbarElem = Vue.extend({
    template: '<nav class="navbar navbar-inverse navbar-fixed-top">' +
              '<div class="navbar-header"><a class="navbar-brand">' +
              '<div id="nav-title">' + strTitle + '</div></a></div></nav>'
  })

  Vue.component('elem', navbarElem)
  var navigation = new Vue({
    el: '#navigation',
  })

  // Footer
  var footerElem = Vue.extend({
    template: '<p class="text-muted text-center">&copy;&nbsp;'+ dt.getFullYear() + '&nbsp;' + strName + '</p>'
  })

  Vue.component('elem', footerElem)
  var footer = new Vue({
    el: '#footer'
  })

  var name = new Vue({
    el:'#name',
      data:{text:strName}
  })

  var profile = new Vue({
    el:'#profile',
      data:{text:strProfile}
  })
});
