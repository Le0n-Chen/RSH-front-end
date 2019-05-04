function calculateCharNum(str, symbol) {
  return str.split(symbol).length;
}
function isNumber(val){

  var regPos = /^\d+(\.\d+)?$/; //非负浮点数
  var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
  if(regPos.test(val) || regNeg.test(val)){
      return true;
  }else{
      return false;
  }

}
export {calculateCharNum, isNumber};