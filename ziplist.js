const testList1 = ['a','b','c'];
const testList2 = [1,2,3];

function zipList(list,list2){
  let zip = [];
  for(let i = 0; i < list.length || i < list2.length ; i++){
    zip.push(list[i],list2[i]);
  }
  return zip;
}

console.log(zipList(testList1,testList2));

function zipListTheSimpleWay(list,list2) {
  return _.flatten(_.zip(list,list2));
}

console.log(zipListTheSimpleWay(testList1,testList2));