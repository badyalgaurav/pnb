angular.module('chatApp').directive('messageItem', function (MessageService) {
  return {
    restrict: "E",
    templateUrl: 'components/message-item/message-item.html',
    scope: {
      senderUuid: "@",
      content: "@",
      date: "@"
    }
  };
});