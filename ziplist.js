const listA = [1, 2, 3];
const listB = ['a', 'b', 'c'];
const listC = [];

function ziplist(list1, list2) {
  if (list1.length !== list2.length) {
    console.log('Not equal length');
  }
  while (list1.length !== 0 && list2.length !== 0) {
    listC.push(list2.pop());
    listC.push(list1.pop());
  }
  listC.reverse();
  return listC;
}
function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}
console.log(zipListTheSimpleWay(listA, listB));
console.log(ziplist(listA, listB));
