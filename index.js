// Code your solution here
function findMatching(drivers, str){
    const result = drivers.filter(element => element === str || element === str.toLowerCase());
    return result
}

function fuzzyMatch(drivers, str){
    const result = drivers.filter(element => element.startsWith(str));
    return result;
}

function matchName(driver, str){
    const result = driver.filter(element => element.name === str)
    return result;
}