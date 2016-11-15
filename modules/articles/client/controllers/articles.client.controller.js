'use strict';

// Articles controller
angular.module('articles').controller('ArticlesController', ['$scope', '$stateParams', '$location', 'Authentication', 'medical_record',
  function ($scope, $stateParams, $location, Authentication, medical_record) {
    $scope.authentication = Authentication;

    // Create new Article
    $scope.create = function (isValid) {
      $scope.error = null;

      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'articleForm');

        return false;
      }

      // Create new Article object
      var medical_record = new medical_record({
        title: this.title,
        content: this.Description,
        address : this.address  
      });

      // Redirect after save
      medical_record.$save(function (response) {
        $location.path('medical_record/' + response._id);

        // Clear form fields
        $scope.title = '';
        $scope.content = '';
      }, function (errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };

    // Remove existing Article
    $scope.remove = function (article) {
      if (medical_record) {
        medical_record.$remove();

        for (var i in $scope.medical_record) {
          if ($scope.medical_record[i] === medical_record) {
            $scope.medical_record.splice(i, 1);
          }
        }
      } else {
        $scope.medical_record.$remove(function () {
          $location.path('medical_record');
        });
      }
    };

    // Update existing Article
    $scope.update = function (isValid) {
      $scope.error = null;

      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'articleForm');

        return false;
      }

      var medical_record = $scope.medical_record;

      medical_record.$update(function () {
        $location.path('medical_record/' + medical_record._id);
      }, function (errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };

    // Find a list of Articles
    $scope.find = function () {
      $scope.articles = medical_record.query();
    };

    // Find existing Article
    $scope.findOne = function () {
      $scope.medical_record = medical_record.get({
        medical_recordid: $stateParams.medical_recordid
      });
    };
  }
]);
