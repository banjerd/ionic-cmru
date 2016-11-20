angular.module('app.services', ['ngResource'])

.factory('userService', ['$resource', function ($resource) {
  // return  {
  //   user: $resource('/ngdemo/web/posts', {}, {
  //       add: {method: 'POST',params: {username: 'test',password:'test',firstname:'test'} },
  //       get: {method: 'GET',isArray: true ,}
  //   }),
  // }
}])

.service('userService',function($http){
  $http.defaults.headers.post["Content-Type"] = "application/json";
  var users = [];
    return {
      addUser: function(data){
        return $http.post("http://10.252.242.17:8088/cmru-web/app/api/addUser",data)
        .then(function(response){

        });

      },
      getUsers:function(){
        return $http.get("http://10.252.242.17:8088/cmru-web/app/api/getUsers")
        .then(function(response){
              users = response;
              return users;
        });
      }

    }
});
