angular.module('Account',[])
  .controller('AccountCtrl', function($ionicScrollDelegate , $ionicBackdrop , $scope , $ionicActionSheet , $timeout) {
    $scope.settings = {
      enableFriends: true
    };

    $scope.myScrollView = $ionicScrollDelegate.$getByHandle("xxx");

    $scope.actionSheet = "";


    $scope.onScroll = function () {
      console.log("正在滚动.....");
      // console.log(content.y);

      var a = $scope.myScrollView.getScrollPosition();
      console.log(a);

    }

    $scope.backToTop = function () {
      $scope.myScrollView.scrollTop(false);
    }


    // actionSheet
    /*
     $scope.btnAciton = function () {
     $scope.actionSheet = $ionicActionSheet.show({
     buttons: [
     { text: '<b>Share</b> This' },
     { text: 'Move' }
     ],
     destructiveText: 'Delete',
     titleText: 'Modify your album',
     cancelText: 'Cancel',
     cancel: function() {
     // add cancel code..
     },
     buttonClicked: function(index) {
     return true;
     }
     });
     }
     */

    // backDrop
    $scope.btnAciton = function () {
      console.log("dianjishijian.....");
      console.log($ionicBackdrop);

      $ionicBackdrop.retain();
      $timeout(function() {
        $ionicBackdrop.release();
      }, 1000);
    }




    // $timeout(function() {
    //   $scope.actionSheet();
    // }, 2000);




  });
