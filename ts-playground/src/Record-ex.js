var contactMap;
contactMap = {
    '8892636021': 'Nagendra',
    '7777777777': 'Ayushi',
    '8888888888': 'Kavitha',
};
console.log(contactMap);
//this find outs the key in map/object
for (var k in contactMap) {
    console.log(k); //this find out the key
    console.log(contactMap[k]); //this find out the value
}
function printId(item) {
    console.log(item);
}
var hasId = printId({ id: '12344', name: 'Nagendra' });
