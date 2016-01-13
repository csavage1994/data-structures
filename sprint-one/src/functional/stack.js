var Stack = function(){
  var count = 0;
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    storage[count] = value;
    count++;
  };

  someInstance.pop = function(){
    count--;
    if(count < 0){
      count = 0;
    }
    var temp = storage[count];
    delete storage[count];
    return temp;
  };

  someInstance.size = function(){
    return count;
  };

  return someInstance;
};
