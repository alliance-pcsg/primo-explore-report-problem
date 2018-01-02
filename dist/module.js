'use strict';

angular.module('reportProblem', []);

angular.module('reportProblem').component('prmActionListAfter', {
  template: '<div ng-if=\'show\' class=\'bar filter-bar layout-align-center-center layout-row margin-top-medium\' layout=\'row\' layout-align=\'center center\'>\n        <span class=\'margin-right-small\'>{{ message }}</span>\n        <a ng-href=\'{{ link }}\' target=\'_blank\'>\n            <button class=\'button-with-icon zero-margin md-button md-button-raised md-primoExplore-theme md-ink-ripple\' type=\'button\' aria-label=\'Report a Problem\' style=\'color: #5c92bd;\'>\n                <prm-icon icon-type=\'svg\' svg-icon-set=\'primo-ui\' icon-definition=\'open-in-new\'></prm-icon>\n                <span style=\'text-transform: none;\'>{{ button }}</span>\n                <div class=\'md-ripple-container\'></div>\n            </button>\n        </a>\n    </div>',
  controller: ['$scope', '$location', '$httpParamSerializer', 'reportProblemOptions', function ($scope, $location, $httpParamSerializer, reportProblemOptions) {
    $scope.message = reportProblemOptions.message;
    $scope.button = reportProblemOptions.button;
    $scope.show = $location.path() === '/fulldisplay' || $location.path() === '/openurl';
    $scope.link = reportProblemOptions.base + $httpParamSerializer($location.search());
  }]
}).value('reportProblemOptions', {
  message: 'See something that doesn\'t look right?',
  button: 'Report a Problem',
  base: 'http://my.library.edu/reportproblem.php?'
});