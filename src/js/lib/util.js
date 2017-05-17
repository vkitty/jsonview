var toString = {}.toString;

var Util = {
    isFunction: function (it) {
        return toString.call(it) === "[object Function]";
    },

    isString: function (it) {
        return toString.call(it) === "[object String]";
    },

    isNumber:function(it){
        return toString.call(it) === "[object Number]";
    },

    isBoolean:function(it){
        return toString.call(it) === "[object Boolean]";
    },

    isNull:function(it){
        return (it === null);
    },

    isArray: function (it) {
        return toString.call(it) === "[object Array]";
    },

    isObject: function (it) {
        return toString.call(it) === "[object Object]";
    },

    isBaseType:function(it){
        return (!this.isArray(it) && !this.isObject(it));
    },

    isUrl:function(it){
        return (/^https{0,1}:\/\//i.test(it));
    },

    isgImgUrl:function(it){
        it = it.trim();
        return /\.(jpeg|jpg|gif|png|bmp|webp|ico)(\?.*)*$/i.test(it);
    },

    isJsonP:function(it){
        return /^[^\(]+\([\[\{].*[\}\]]\)$/.test(it);
    },

    isJson:function(it){
        return /^[\{\[].*[\}\]]$/.test(it);
    },
    /**
     * 获取数据类型 小写
     * @param it
     * @returns {*}
     */
    getType:function(it){
        var type = toString.call(it);
        var m = type.match(/\s(\w+)\]$/i);
        type = m[1].toLowerCase().trim();
        return type;
    },
    /**
     * 获取对象长度
     */
    getObjectLength:function(obj){
        var len = Object.keys(obj).length;
        return len;
    }
};

module.exports = Util;