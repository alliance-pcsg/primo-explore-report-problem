describe('prmActionListAfter component', function () {

  var $componentController
  var $location
  var reportProblemOptions = {
    message: "See something that doesn't look right?",
    button: "Report a Problem",
    base: "http://my.library.edu/reportproblem/?permalink_path="
  }

  beforeEach(module('reportProblem'))

  beforeEach(module(function($provide) {
    $provide.constant('reportProblemOptions', reportProblemOptions)
  }))

  beforeEach(inject(function(_$componentController_, _$location_, _$httpParamSerializer_) {
    $componentController = _$componentController_
    $location = _$location_
    $httpParamSerializer = _$httpParamSerializer_
  }))

  it('should set the message text', function () {
    var $scope = {}
    var ctrl = $componentController('prmActionListAfter', { $scope: $scope })
    expect($scope.message).toBe(reportProblemOptions.message)
  })

  it('should set the button text', function () {
    var $scope = {}
    var ctrl = $componentController('prmActionListAfter', { $scope: $scope })
    expect($scope.button).toBe(reportProblemOptions.button)
  })

  it('should generate a link using all the parameters from the url', function () {
    var $scope = {}
    var params = {
      docid: 'CP71196983610001451',
      context: 'L',
      vid: 'LCC'
    }
    spyOn($location, 'search').and.returnValue(params)
    var ctrl = $componentController('prmActionListAfter', { $scope: $scope })
    expect($scope.link).toBe(reportProblemOptions.base + $httpParamSerializer(params))
  })

  it('should show up on a fulldisplay page', function () {
    var $scope = {}
    spyOn($location, 'path').and.returnValue('/fulldisplay')
    var ctrl = $componentController('prmActionListAfter', { $scope: $scope })
    expect($scope.show).toBe(true)
  })

  it('should show up on a services page', function () {
    var $scope = {}
    spyOn($location, 'path').and.returnValue('/openurl')
    var ctrl = $componentController('prmActionListAfter', { $scope: $scope })
    expect($scope.show).toBe(true)
  })

  it('should not show up if not on brief result page', function () {
    var $scope = {}
    spyOn($location, 'path').and.returnValue('/search')
    var ctrl = $componentController('prmActionListAfter', { $scope: $scope })
    expect($scope.show).toBe(false)
  })


})
