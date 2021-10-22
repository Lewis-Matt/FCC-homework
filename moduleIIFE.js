/*
An immediately invoked function expression (IIFE) is often used to group related functionality into a single object or module. 
Note that you have an immediately invoked function expression (IIFE) that returns an object funModule. This returned object contains all of the mixin 
behaviors as properties of the object. The advantage of the module pattern is that all of the behaviors can be packaged into a single object 
that can then be used by other parts of your code.
*/


let funModule = (function() {
  return {
    isCuteMixin : function(obj) {
      obj.isCute = function() {
        return true;
      };
    },
    singMixin : function(obj) {
      obj.sing = function() {
        console.log("Singing to an awesome tune");
      };
    }
  }
})();

// How this would be used:
funModule.singMixin(elvis);   // lets say elvis is some instanceof Person constructor and we want him to be able to sing
elvis.sing();
