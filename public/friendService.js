angular.module('userProfiles')
.service('friendService', function( $http ) {
  
    
    this.login = function( user ) {
      return $http.post('/api/users/login', { name: user.name, password: user.password });
    };

    this.getFriends = function() {
    	return $http.get('/api/profile/friends');
    };
  
});
