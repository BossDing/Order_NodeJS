function Map() {

    var ks = [];
    var kvs = {};

    /**
     * 加入元素
     * @param key
     * @param value
     */
    Map.prototype.put = function (key, value) {
        ks.push(key);
        kvs[key] = value;
    };


    /**
     * 获取某元素
     * @param key
     * @returns {*}
     */
    Map.prototype.get = function(key) {
        console.log('key = ' + key);
        console.log('value = ' + JSON.stringify(kvs[key]));
        return kvs[key];
    };

    /**
     * 删除元素
     * @param key
     * @returns {*}
     */
    Map.prototype.remove = function (key) {
        var index = ks.indexOf(key);
        if (index >= 0) {
            ks.splice(index, 1);
            var result = kvs[key];
            kvs[key] = undefined;
            return result;
        }
        return undefined;
    };

    /**
     * 是否存在某键值
     * @param key
     * @returns {boolean}
     */
    Map.prototype.containsKey = function (key) {
        return kvs[key] ? true : false;
    };

    /**
     * 是否存在某值
     * @param value
     * @returns {boolean}
     */
    Map.prototype.containsValue = function (value) {
        for (var temp in kvs) {
            if (kvs[temp] == value) {
                return true;
            }
        }

        return false;
    };

    /**
     * 集合大小
     * @returns {number}
     */
    Map.prototype.size = function () {
        return ks.length;
    };

    /**
     * Key的集合
     * @returns {Array}
     */
    Map.prototype.keySet = function () {
        return ks;
    };

    /**
     *
     * @returns {{}}
     */
    Map.prototype.values = function () {
        return kvs;
    }
}

module.exports = Map;