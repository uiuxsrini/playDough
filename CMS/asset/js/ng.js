var app = angular.module('my-app', [], function() {})

app.controller('loginPage', function($scope) {
  //  $scope.tenantsli = [1, 2, 3, 4, 5, 6, 7, 8];
    $scope.tenants = [{
            'name': 'BOA',
            'type': "Demo",
            'status': 'Active inactive demo less',
            'expiryDate': "02/23/16",
            'creationDate': "02/23/16",
            'salesOwner': "Jagrit"
        }, {
            'name': 'AOS',
            'type': "EVAL",
            'status': 'Inactive',
            'expiryDate': "02/23/16",
            'creationDate': "02/23/16",
            'salesOwner': "Srinivas"
        }, {
            'name': 'JPMC',
            'type': "LIVE",
            'status': 'Draft',
            'expiryDate': "02/23/16",
            'creationDate': "02/23/16",
            'salesOwner': "Jagrit"
        }

    ];

    $scope.clone = function(){
        $scope.tenants.push({
            'name': 'B0A-copy(1)',
            'type': "Demo",
            'status': 'Active inactive demo less',
            'expiryDate': "02/23/16",
            'creationDate': "02/23/16",
            'salesOwner': "Jagrit"
        });
    };

    $scope.addRow = function() {
        $scope.tenants.push({
            'name': $scope.name,
            'type': $scope.data.tenentType,
            'status': $scope.status,
            'expiryDate': $scope.expiryDate,
            'creationDate': $scope.creationDate,
            'salesOwner': $scope.salesOwner
        });
        $scope.name = '';
        $scope.type = '';
        $scope.status = '';
        $scope.expiryDate = '';
        $scope.creationDate = '';
        $scope.salesOwner = '';
    };

    $scope.removeRow = function(name) {
        var index = -1;
        var comArr = eval($scope.tenants);
        for (var i = 0; i < comArr.length; i++) {
            if (comArr[i].name === name) {
                index = i;
                break;
            }
        }
        if (index === -1) {
            alert("Something gone wrong");
        }
        $scope.tenants.splice(index, 1);
    };


    $scope.$watch('userName', function(value) {
        console.log(value);
        $scope.link = (value == 'sysAdmin') ? 'index.html' : 'tenantdashboard.html';
    });

});
