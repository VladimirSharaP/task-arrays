/*
  В функцию arraySorting() приходит строка чисел с разделительными запятыми вида "1,2,33,0,17".
  Преобразуте строку в массив чисел, отсортируйте их по возрастанию и верните строку с упорядоченными числами,
  разделенными запятыми.
*/
export function arraySorting(data) {
  let arr = JSON.parse("[" + data + "]");
  arr.sort((a,b) => a - b);
  data = JSON.stringify(arr);
  return data.slice(1,-1);
}

/*
  В функцию arrayFiltering() приходит массив целых чисел.
  Преобразуйте массив таким образом, чтобы все элементы массива, в которых содержатся числа более 100,
  были бы удалены из массива, и верните его в качестве результата функции.
*/
export function arrayFiltering(data) {
  return data.filter(i => i <= 100);
}

/*
  В функцию arrayPushing() приходят два массива целых чисел размерностью 5 элементов.
  Получите третий массив размерностью 10 элементов, в котором последовательно чередуются
  значения из первых двух массивов, и верните его в качестве результата функции.
*/
export function arrayPushing(array1, array2) {
  let arrayResult = [];
  for(let i = 0; array1[i] && array2[i]; i++) {
    if (array1[i])
      arrayResult.push(array1[i]);
    if (array2[i])
      arrayResult.push(array2[i]);
  }
  return arrayResult;
}
