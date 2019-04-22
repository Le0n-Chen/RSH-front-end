function firstToUpperCase(lowerName) {
  let resultName = lowerName;
  resultName = resultName.replace(resultName[0], resultName.toUpperCase());
  return resultName;
}

function moduleName2moduleUrl(moduleName) {
  let moduleUrl = moduleName.toLowerCase(); 
  moduleUrl = moduleUrl.replace(/\s*/g, ''); // delete blank space
  return moduleUrl;
}
export{ firstToUpperCase, moduleName2moduleUrl };