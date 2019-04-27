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

function formatDate(d) {
  let month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

export{ firstToUpperCase, moduleName2moduleUrl, formatDate};