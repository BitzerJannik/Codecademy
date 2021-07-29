const _ = {clamp(num, low, up){
    return Math.min(Math.max(num, low), up);
        }, inRange(num, start, end){
            if(!end) {
                end = start;
                start = 0;
            }
            if(start>end){
                let temp = end;
                end = start;
                start = temp;
            }
            if(num < start || num >= end){
                return false;
            }else{
                return true;
            }
        }, words(string){
            let stringArray = "";
            stringArray =  string.split(" ");
            return stringArray;
        }, pad(string, newLength){
            if(newLength < string.length){
                return string;
            }else{
                let startPadding = Math.floor((newLength-string.length) /2);
                let endPadding = newLength - startPadding - string.length;
                let paddedString = " ".repeat(startPadding) + string + " ".repeat(endPadding);
                return paddedString;
            }
        }, has(object, path){
            let hasValue = object[path];
            return Boolean(hasValue);
        }, invert(object){
            let newObject = {};
            for (var key in object){
                newObject.object[key] = key;
            }
            return newObject;
        }, findKey(object, func){
            for( var key in object){
                if (func(object[key])){
                    return key;
                }
            }
            return undefined;
        }, drop(array, number=1){
            let newArray = array.slice(number);
            return newArray;
        }, dropWhile(array, predicate){
            let dropNumber = array.findIndex((element, index) => !predicate(element, index));
            let dropArray = this.drop(array, dropNumber);
            return dropArray;
        },chunk(array, size=1){
            let arrayChunks = [];
            for (let i = 0; i < array.length; i+=size){
                arrayChunks.push(array.slice(i, size+i));
            }
            return arrayChunks;
        }
};




// Do not write or modify code below this line.
module.exports = _;