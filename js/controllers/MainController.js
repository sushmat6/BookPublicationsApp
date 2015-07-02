app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'Top Sellers in Books'; 
  $scope.promo='Hallmark Publications';
  $scope.plusOne=function(index){
  	$scope.products[index].likes+=1;
  };
  $scope.minusOne=function(index){
  	$scope.products[index].dislikes+=1;
  };
 	$scope.products=[
          {
          name: 'The Book of Trees', 
          price: 19, 
          pubdate: new Date('2014', '03', '08'), 
          cover: 'img/book1.jpg' ,
           likes: 0,
           dislikes: 0
        }, 
        { 
          name: 'Program or be Programmed', 
          price: 8, 
          pubdate: new Date('2013', '08', '01'), 
          cover: 'img/book2.jpg' ,
           likes: 0,
           dislikes: 0
        }, 
    		{ 
          name: 'Harry Potter-Prisoner of Azkaban', 
          price:12, 
          pubdate: new Date('2007', '08', '01'), 
          cover: 'img/book3.jpg' ,
           likes: 0,
           dislikes: 0
        },
    	{ 
          name: 'Twilight', 
          price: 3, 
          pubdate: new Date('2011', '05', '01'), 
          cover: 'img/book4.jpg' ,
           likes: 0,
           dislikes: 0
        } 
  ]
}]);