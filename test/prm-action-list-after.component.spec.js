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

  beforeEach(inject(function(_$componentController_, _$location_) {
    $componentController = _$componentController_
    $location = _$location_
  }))

  it('should set $scope.message to reportProblemOptions.message', function () {
    var $scope = {}
    var ctrl = $componentController('prmActionListAfter', { $scope: $scope })
    expect($scope.message).toBe(reportProblemOptions.message)
  })

  it('should set $scope.button to reportProblemOptions.button', function () {
    var $scope = {}
    var ctrl = $componentController('prmActionListAfter', { $scope: $scope })
    expect($scope.button).toBe(reportProblemOptions.button)
  })

  it('should generate $scope.link using the docid from $location', function () {
    var $scope = {}
    spyOn($location, 'search').and.returnValue({ docid: 'CP71196983610001451' })
    var ctrl = $componentController('prmActionListAfter', { $scope: $scope })
    expect($scope.link).toBe(reportProblemOptions.base + 'CP71196983610001451')
  })

  it('should set $scope.show to true if on fulldisplay page', function () {
    var $scope = {}
    spyOn($location, 'path').and.returnValue('/fulldisplay')
    var ctrl = $componentController('prmActionListAfter', { $scope: $scope })
    expect($scope.show).toBe(true)
  })

  it('should set $scope.show to false if not on fulldisplay page', function () {
    var $scope = {}
    spyOn($location, 'path').and.returnValue('/search')
    var ctrl = $componentController('prmActionListAfter', { $scope: $scope })
    expect($scope.show).toBe(false)
  })


})
