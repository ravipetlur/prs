angular.module('starter.controllers', [])

  .controller('DashCtrl', function ($scope) {
  })

  .controller('LokSabha-BillsForIntroCtrl', ['$scope', '$http', '$state',
    function ($scope, $http, $state) {
      $http.get('http://www.prsindia.org/api/parliamenttoday/loksabha/billsforintroduction').success(function (data) {
        $scope.todayDate = data.date;
        $scope.todayBillList = data.bills_list;
        angular.forEach($scope.todayBillList, function(bill){
          bill.link_of_bill_summary = bill.link_of_bill_summary.split("\"")[0];
          bill.link_to_legislative_brief = bill.link_to_legislative_brief.split("\"")[0];
          bill.link_to_standing_committee_report_summary = bill.link_to_standing_committee_report_summary.split("\"")[0];
        });
        $scope.billsforintroduction = 'active';
      });
    }])
  .controller('LokSabha-BillsCtrl', ['$scope', '$http', '$state',
    function ($scope, $http, $state) {
      $http.get('http://www.prsindia.org/api/parliamenttoday/loksabha/billsforintroduction').success(function (data) {
        $scope.todayDate = data.date;
        $scope.todayBillList = data.bills_list;
        angular.forEach($scope.todayBillList, function(bill){
          bill.link_of_bill_summary = bill.link_of_bill_summary.split("\"")[0];
          bill.link_to_legislative_brief = bill.link_to_legislative_brief.split("\"")[0];
          bill.link_to_standing_committee_report_summary = bill.link_to_standing_committee_report_summary.split("\"")[0];
        });
        $scope.bills = 'active';
      });
    }])
  .controller('LokSabha-DiscussionCtrl', ['$scope', '$http', '$state',
    function ($scope, $http, $state) {
      $http.get('http://www.prsindia.org/api/parliamenttoday/loksabha/shortdiscussion').success(function (data) {
        $scope.todayDate = data.date;
        $scope.short_discussion_list = data.short_discussion_list;
        $scope.shortdiscussion = 'active';
      });
    }])
  .controller('LokSabha-StatementsCtrl', ['$scope', '$http', '$state',
    function ($scope, $http, $state) {
      $http.get('http://www.prsindia.org/api/parliamenttoday/loksabha/statements').success(function (data) {
        $scope.todayDate = data.date;
        $scope.statements_list = data.statements_list;
        $scope.statement = 'active';
      });
    }])
  .controller('LokSabha-StarredQuestionCtrl', ['$scope', '$http', '$state', '$ionicModal',
    function ($scope, $http, $state, $ionicModal) {
      $http.get('http://www.prsindia.org/api/parliamenttoday/loksabha/starredquestions').success(function (data) {
        $scope.todayDate = data.date;
        $scope.questions_list = data.questions_list;
        $scope.starredquestions = 'active';
      });
      $scope.openModal = function (qno) {
        for (var i = 0; i < $scope.questions_list.length; i++) {
          if ($scope.questions_list[i].question_number == qno) {
            $scope.selectedQuestion = $scope.questions_list[i];
            if (!angular.isArray($scope.selectedQuestion.text_of_entire_question)) {
              $scope.selectedQuestion.text_of_entire_question = $scope.selectedQuestion.text_of_entire_question.split(/;/);
            }
          }
        }
        $scope.modal.show();
      }
      $scope.closeModal = function () {
        $scope.modal.hide();
      }
    }])
  .controller('LokSabha-PapersToBeTabledCtrl', ['$scope', '$http', '$state',
    function ($scope, $http, $state) {
      $http.get('http://www.prsindia.org/api/parliamenttoday/loksabha/paperstobetabled').success(function (data) {
        $scope.todayDate = data.date;
        $scope.papers_list = data.papers_list;
        $scope.paperstobetabled = 'active';
      });
    }])
  .controller('RajyaSabha-BillsForIntroCtrl', ['$scope', '$http', '$state',
    function ($scope, $http, $state) {
      $http.get('http://www.prsindia.org/api/parliamenttoday/rajyasabha/billsforintroduction').success(function (data) {
        $scope.todayDate = data.date;
        $scope.todayBillList = data.bills_list;
        angular.forEach($scope.todayBillList, function(bill){
          bill.link_of_bill_summary = bill.link_of_bill_summary.split("\"")[0];
          bill.link_to_legislative_brief = bill.link_to_legislative_brief.split("\"")[0];
          bill.link_to_standing_committee_report_summary = bill.link_to_standing_committee_report_summary.split("\"")[0];
        });
        $scope.billsforintroduction = 'active';
      });
    }])
  .controller('RajyaSabha-BillsCtrl', ['$scope', '$http', '$state',
    function ($scope, $http, $state) {
      $http.get('http://www.prsindia.org/api/parliamenttoday/rajyasabha/billsforpassing').success(function (data) {
        $scope.todayDate = data.date;
        $scope.todayBillList = data.bills_list;
        angular.forEach($scope.todayBillList, function(bill){
          bill.link_of_bill_summary = bill.link_of_bill_summary.split("\"")[0];
          bill.link_to_legislative_brief = bill.link_to_legislative_brief.split("\"")[0];
          bill.link_to_standing_committee_report_summary = bill.link_to_standing_committee_report_summary.split("\"")[0];
        });
        $scope.bills = 'active';
      });
    }])
  .controller('RajyaSabha-DiscussionCtrl', ['$scope', '$http', '$state',
    function ($scope, $http, $state) {
      $http.get('http://www.prsindia.org/api/parliamenttoday/rajyasabha/shortdiscussion').success(function (data) {
        $scope.todayDate = data.date;
        $scope.short_discussion_list = data.short_discussion_list;
        $scope.shortdiscussion = 'active';
      });
    }])
  .controller('RajyaSabha-StatementsCtrl', ['$scope', '$http', '$state',
    function ($scope, $http, $state) {
      $http.get('http://www.prsindia.org/api/parliamenttoday/rajyasabha/statements').success(function (data) {
        $scope.todayDate = data.date;
        $scope.statements_list = data.statements_list;
        $scope.statement = 'active';
      });
    }])
  .controller('RajyaSabha-StarredQuestionCtrl', ['$scope', '$http', '$state', '$ionicModal',
    function ($scope, $http, $state, $ionicModal) {
      $http.get('http://www.prsindia.org/api/parliamenttoday/rajyasabha/starredquestions').success(function (data) {
        $scope.todayDate = data.date;
        $scope.questions_list = data.questions_list;
        $scope.starredquestions = 'active';
      });
      $scope.openModal = function (qno) {
        for (var i = 0; i < $scope.questions_list.length; i++) {
          if ($scope.questions_list[i].question_number == qno) {
            $scope.selectedQuestion = $scope.questions_list[i];
            if (!angular.isArray($scope.selectedQuestion.text_of_entire_question)) {
              $scope.selectedQuestion.text_of_entire_question = $scope.selectedQuestion.text_of_entire_question.split(/;/);
            }
          }
        }
        $scope.modal.show();
      }
      $scope.closeModal = function () {
        $scope.modal.hide();
      }
    }])
  .controller('RajyaSabha-PapersToBeTabledCtrl', ['$scope', '$http', '$state',
    function ($scope, $http, $state) {
      $http.get('http://www.prsindia.org/api/parliamenttoday/rajyasabha/paperstobetabled').success(function (data) {
        $scope.todayDate = data.date;
        $scope.papers_list = data.papers_list;
        $scope.paperstobetabled = 'active';
      });
    }]);
