'use strict';
(function () {
      // Возвращаем ислучайное число между min (включительно) и max (не включая max)
      function getRandomValue(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }

      // возвращает рандомный элемент массива
      function getRandomArrayItem(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
      }

      // возвращает рандомный индекс массива
      function getRandomArrayIndex(arr) {
        return Math.floor(Math.random() * arr.length);
      }

    window.util = {
      getRandomValue: getRandomValue,
      getRandomArrayItem: getRandomArrayItem,
      getRandomArrayIndex : getRandomArrayIndex
    }


})();
