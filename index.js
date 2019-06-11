var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var obj = { prop: 1 };
  return new Object({}, key, value);
}
updateObjectWithKeyAndValue(obj, prop2, 2); 

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  var obj = { prop: 1};
  
  return obj;
}
destructivelyUpdateObjectWithKeyAndValue(obj, prop2, 2);