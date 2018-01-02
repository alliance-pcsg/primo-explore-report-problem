describe('prmActionListAfter component', function () {

  var $componentController
  var $location

  beforeEach(module('reportProblem'))

  beforeEach(inject(function(_$componentController_, _$location_, _$httpParamSerializer_) {
    $componentController = _$componentController_
    $location = _$location_
    $httpParamSerializer = _$httpParamSerializer_
  }))

  it('should set the message text if it is provided', function() {
    var bindings = { messageText: 'new text' }
    var ctrl = $componentController('ocaReportProblem', null, bindings)
    expect(ctrl.messageText).toBe(bindings.messageText)
  })

  it('should set the button text if it is provided', function() {
    var bindings = { buttonText: 'new text' }
    var ctrl = $componentController('ocaReportProblem', null, bindings)
    expect(ctrl.buttonText).toBe(bindings.buttonText)
  })

  it('should use the default message text if none is provided', function() {
    var ctrl = $componentController('ocaReportProblem')
    expect(ctrl.messageText).toBe('See something that doesn\'t look right?')
  })

  it('should use the default button text if none is provided', function() {
    var ctrl = $componentController('ocaReportProblem')
    expect(ctrl.buttonText).toBe('Report a Problem')
  })

  it('should generate a link using all the parameters from the url', function () {
    var bindings = { reportUrl: 'http://my.library.edu/reportproblem.php?' }
    var params = {
      docid: 'CP71196983610001451',
      context: 'L',
      vid: 'LCC'
    }
    spyOn($location, 'path').and.returnValue('/fulldisplay')
    spyOn($location, 'search').and.returnValue(params)
    var ctrl = $componentController('ocaReportProblem', null, bindings)
    ctrl.$onInit()
    expect(ctrl.targetUrl).toBe(bindings.reportUrl + $httpParamSerializer(params))
  })

  it('should show up on a fulldisplay page', function () {
    spyOn($location, 'path').and.returnValue('/fulldisplay')
    var ctrl = $componentController('ocaReportProblem')
    ctrl.$onInit()
    expect(ctrl.show).toBe(true)
  })

  it('should show up on a services page', function () {
    spyOn($location, 'path').and.returnValue('/openurl')
    var ctrl = $componentController('ocaReportProblem')
    ctrl.$onInit()
    expect(ctrl.show).toBe(true)
  })

  it('should not show up if on the brief result page', function () {
    spyOn($location, 'path').and.returnValue('/search')
    var ctrl = $componentController('ocaReportProblem')
    ctrl.$onInit()
    expect(ctrl.show).toBe(false)
  })
})
