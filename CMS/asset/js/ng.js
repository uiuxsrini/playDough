var app = angular.module('my-app', [], function () {
})

app.controller('loginPage', function ($scope) {
  $scope.tenants = [
                    { 'name':'BOA',
                      'type': "Demo",
                      'status': 'Active',
                      'expiryDate': "02/23/16",
                      'creationDate': "02/23/16",
                      'salesOwner': "Bruce"
                    },
                    { 'name':'AOS',
                      'type': "EVAL",
                      'status': 'Inactive',
                      'expiryDate': "02/23/16",
                      'creationDate': "02/23/16",
                      'salesOwner': "Bruce"
                    },
                    { 'name':'JPMC',
                      'type': "LIVE",
                      'status': 'Draft',
                      'expiryDate': "02/23/16",
                      'creationDate': "02/23/16",
                      'salesOwner': "Bruce"
                    }

                    ];
  $scope.addRow = function(){
    $scope.tenants.push({ 'name': $scope.name,
    'type': $scope.type,
    'status': $scope.status,
    'expiryDate': $scope.expiryDate,
    'creationDate': $scope.creationDate,
    'salesOwner': $scope.salesOwner
  });
  $scope.name='';
  $scope.type='';
  $scope.status='';
  $scope.expiryDate='';
  $scope.creationDate='';
  $scope.salesOwner='';
  }
    $scope.$watch('userName', function(value){
      console.log(value);
        $scope.link = (value == 'srini') ? 'index.html': 'credits.html';
    });

    
});
