angular.module('Account',[])
  .controller('AccountCtrl',function ($scope,$http) {
    var url="http://47.93.192.69:3000/wy?myUrl=";


      $http.get(url+"http://iu.snssdk.com/2/essay/discovery/v3/?iid=11251932292&device_id=35032440147&ac=wifi&channel=xiaomi&aid=7&app_name=joke_essay&version_code=642&version_name=6.4.2&device_platform=android&ssmix=a&device_type=Redmi+4&device_brand=Xiaomi&os_api=23&os_version=6.0.1&uuid=861316039814577&openudid=24ecc71f9a3a0a3a&manifest_version_code=642&resolution=1080*1920&dpi=480&update_version_code=6422"
      ).then(function (res) {
        console.log(res);
        $scope.bannerList=res.data.data.rotate_banner.banners;
        $scope.items=res.data.data.categories.category_list;
           console.log(res.data.data.categories.category_list)
        if($scope.bannerList.length >= 1) {
          var oneItem = $scope.bannerList[0];
          var height = oneItem.banner_url.height;
          console.log(height);


          document.getElementById("xxx").style.height = height + "px";

        }

      },function (err) {
        console.log(err);
      });
      $scope.options= {
        loop:true,
        effect:'fade',
        speed:1000
      };

    $scope.$on("$ionicSlides.sliderInitialized", function(event, data){
      // data.slider is the instance of Swiper
      $scope.slider = data.slider;
    });

    $scope.$on("$ionicSlides.slideChangeStart", function(event, data){
      console.log('Slide change is beginning');
    });

    $scope.$on("$ionicSlides.slideChangeEnd", function(event, data){
      // note: the indexes are 0-based
      $scope.activeIndex = data.slider.activeIndex;
      $scope.previousIndex = data.slider.previousIndex;
    });

  });
  // .controller('AccountCtrl', function($ionicScrollDelegate , $ionicBackdrop , $scope , $ionicActionSheet , $timeout,$ionicSlideBoxDelegate,$http) {
  //
  //   $http()
  //   // $scope.$on("$ionicSlides.sliderInitialized",function (event,data) {
  //   //   $scope.slider=data.slider;
  //   // })
  //   // $scope.$on("$ionicSlides.slideChangeStart",function (event,data) {
  //   //  console.log('slide change is begining');
  //   // });
  //   // $scope.$on('$ionicSlides.slideChangeEnd',function (event,data) {
  //   //   $scope.activeIndex=data.slider.activeIndex;
  //   //   $scope.previousIndex=data.slider.previousIndex;
  //   // });
  //
  //
  //   // $scope.settings = {
  //   //   enableFriends: true
  //   // };
  //   //
  //   // $scope.myScrollView = $ionicScrollDelegate.$getByHandle("xxx");
  //   //
  //   // $scope.actionSheet = "";
  //   //
  //   //
  //   // $scope.onScroll = function () {
  //   //   console.log("正在滚动.....");
  //   //   // console.log(content.y);
  //   //
  //   //   var a = $scope.myScrollView.getScrollPosition();
  //   //   console.log(a);
  //   //
  //   // }
  //   //
  //   // $scope.backToTop = function () {
  //   //   $scope.myScrollView.scrollTop(false);
  //   // }
  //
  //
  //   // actionSheet
  //   /*
  //    $scope.btnAciton = function () {
  //    $scope.actionSheet = $ionicActionSheet.show({
  //    buttons: [
  //    { text: '<b>Share</b> This' },
  //    { text: 'Move' }
  //    ],
  //    destructiveText: 'Delete',
  //    titleText: 'Modify your album',
  //    cancelText: 'Cancel',
  //    cancel: function() {
  //    // add cancel code..
  //    },
  //    buttonClicked: function(index) {
  //    return true;
  //    }
  //    });
  //    }
  //    */
  //
  //   // backDrop
  //   // $scope.btnAciton = function () {
  //   //   console.log("dianjishijian.....");
  //   //   console.log($ionicBackdrop);
  //   //
  //   //   $ionicBackdrop.retain();
  //   //   $timeout(function() {
  //   //     $ionicBackdrop.release();
  //   //   }, 1000);
  //   // };
  //
  //
  //
  //
  //   // $timeout(function() {
  //   //   $scope.actionSheet();
  //   // }, 2000);
  //
  //
  //
  //
  // });
