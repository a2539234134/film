export function addClass(obj,cn){
    if(!hasClass(obj,cn)){
        obj.className += " "+cn;
    }
}

export function hasClass(obj,cn){
    var reg = new RegExp("\\b"+cn+"\\b");
    return reg.test(obj.className);
}

export function removeClass(obj,cn){
    var reg = new RegExp("\\b"+cn+"\\b");
    obj.className = obj.className.replace(reg,"");
}

export function removeClass2(obj,cn){
    if(hasClass(obj,cn)){
        var reg = new RegExp("\\b"+cn+"\\b");
        obj.className = obj.className.replace(reg,"");
    }
    
}

export function toggleClass(obj,cn){
    if(hasClass(obj,cn)){
        removeClass(obj,cn);
    }else{
        addClass(obj,cn);
    }
}

export function move(obj,attr,target,speed,callback){
    clearInterval(obj.timer);
    var current = parseInt(getStyle(obj,attr));
    if(current > target){
        speed = -speed;
    }
    obj.timer = setInterval(function(){
        var oldValue = parseInt(getStyle(obj,attr));
        var newValue = oldValue + speed;
        if((speed < 0 && newValue < target) || (speed > 0 && newValue > target)){
            newValue = target;
        }
        obj.style[attr] = newValue + "px";
        if(newValue == target){
            clearInterval(obj.timer);
            callback && callback();
        }
    },30);
}

export function getStyle(obj,name){
    return window.getComputedStyle ? getComputedStyle(obj,null)[name] : obj.currentStyle[name];
}