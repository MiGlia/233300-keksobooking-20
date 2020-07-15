'use strict';
(function () {

  var OFFER_TITLES = ['Большая уютная квартира', 'Маленькая неуютная квартира', 'Огромный прекрасный дворец', 'Маленький ужасный дворец', 'Красивый гостевой домик', 'Некрасивый негостеприимный домик', 'Уютное бунгало далеко от моря', 'Неуютное бунгало по колено в воде'];
  var OFFER_TYPES = ['flat', 'house', 'bungalo'];
  var OFFER_FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
  var OFFER_CHECKIN = ['12:00', '13:00', '14:00'];
  var OFFER_CHECKOUT = ['12:00', '13:00', '14:00'];
  var OFFER_PHOTOS = [];
  var NUMBER_IMG = [];

  var mapParamSearch = document.querySelector('.map');
  mapParamSearch.classList.remove('map--faded');

    // Объявляем мвссив с данными
    var nearbyOffers = [];


  // создадим функцию для создания массива из чисел 01,02 и тд

  function createArrNumber(countNumber, arr) {

    for (var i = 1; i <= countNumber; i++) {
      arr.push (
        '0' + i
      )
    }
    // arr.forEach(function(item) {
    //   item = Number(item);
    // })
    return arr;
  };

  createArrNumber(8, NUMBER_IMG);

  function createArrNumber2(countNumber, arr) {

    for (var i = 1; i <= countNumber; i++) {
      arr.push (
        'http://o0.github.io/assets/images/tokyo/hotel' + i + '.jpg'
      )
    }
    // arr.forEach(function(item) {
    //   item = Number(item);
    // })
    return arr;
  };
  createArrNumber2(8, OFFER_PHOTOS);



    // возвращает произвольный элемент массива и сразу удаляет его из массива
    // в данном случае находит случайный элемент в массиве и возвращает массив с длиной 1 начиная с этого элемента
    function getNoRepeatItemArr(arr) {
      return arr.splice(window.util.getRandomArrayIndex(arr), 1)
    }

    function getRandomLengthArr(arr) {
      var arr1 = arr.slice();
      arr1.length = window.util.getRandomValue(1, arr.length);
      return arr1
    }

    function createadsNearbyAdsArr(count, arr) {

      var coordinates = {
        x: {
          min: 300,
          max: 901
        },
        y: {
          min: 100,
          max: 501
        }
      };

      var numberOfrooms = {
        min: 1,
        max: 6
      };

      var numberOfguests = {
        min: 1,
        max: 4
      };

      var priceForRooms = {
        min: 1000,
        max: 1000001
      };


      for (var i = 0; i  <= count; i++) {

        // Случайные координаты
      var locationX = window.util.getRandomValue(coordinates.x.min, coordinates.x.max);
      var locationY = window.util.getRandomValue(coordinates.y.min, coordinates.y.max);
        arr.push ({
        author: {
            avatar: 'img/avatars/user' + getNoRepeatItemArr(arr) + '.png'
        },

        offer: {
            title: 'hhhhh',
            address: locationX + ', ' + locationY,
            price: 'hhhhh',
            type: window.util.getRandomArrayItem(OFFER_TYPES),
            rooms: window.util.getRandomValue(1, 6),
            guests: window.util.getRandomValue(1, 6),
            checkin: window.util.getRandomArrayItem(OFFER_CHECKIN),
            checkout: window.util.getRandomArrayItem(OFFER_CHECKOUT),
            features: getRandomLengthArr(OFFER_FEATURES),
            description: '1',
            photos: getRandomLengthArr(OFFER_PHOTOS)
        },
        location: {
            x: locationX,

            y: locationY
        }
      }
      );
    }
  }

    createadsNearbyAdsArr(8, nearbyOffers);

// находим пин в разметке
var mapPinElement = document.querySelector('.map__pin');
var mapPinTemplate = document.querySelector('#pin').content.querySelector('.map__pin');

function renderMapPin(arr) {

  var pinHalfWidth = 23;
  var pinHeight = 64;

  var pinElement = mapPinTemplate.cloneNode(true);

  pinElement.querySelector('img').src = arr.author.avatar;
  pinElement.style.left =  (arr.location.x - pinHalfWidth) + 'px'
  pinElement.style.top =  (arr.location.y - pinHeight) + 'px'

  return pinElement;
}


function getRenderMapPin(arr) {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < arr.length; i++) {
    fragment.appendChild(renderMapPin(arr[i]));
  }
  mapPinElement.appendChild(fragment);
}
getRenderMapPin(nearbyOffers);


})();
