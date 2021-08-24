//配置文件路径别名
const path = require('path');//引入path模块

module.exports = {
    configurewbpac: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views'
            }
        }
    }
}

