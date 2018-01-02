/* eslint-disable max-len */
angular
  .module('reportProblem')
  .component('ocaReportProblem', {
    bindings: {
      messageText: '@',
      buttonText: '@',
      reportUrl: '@',
    },
    template: `
      <div ng-if="$ctrl.show" class="bar filter-bar layout-align-center-center layout-row margin-top-medium" layout="row" layout-align="center center">
          <span class="margin-right-small">{{$ctrl.messageText}}</span>
          <a ng-href="{{$ctrl.targetUrl}}" target="_blank">
              <button class="button-with-icon zero-margin md-button md-button-raised md-primoExplore-theme" type="button" aria-label="Report a Problem" style="color: #5c92bd;">
                  <prm-icon icon-type="svg" svg-icon-set="action" icon-definition="ic_report_problem_24px"></prm-icon>
                  <span style="text-transform: none;">{{$ctrl.buttonText}}</span>
              </button>
          </a>
      </div>`,
    controller: ['$location', '$httpParamSerializer', function($location, $httpParamSerializer) {
      this.messageText = this.messageText || 'See something that doesn\'t look right?'
      this.buttonText = this.buttonText || 'Report a Problem'
      this.showLocations = [
        '/fulldisplay', // details view
        '/openurl', // services page (link resolver)
      ]
      this.$onInit = function() {
        this.targetUrl = this.reportUrl + $httpParamSerializer($location.search())
        this.show = this.showLocations.includes($location.path())
      }
    }],
  })
