const path = require('path');
function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:9090',
                changeOrigin: true
            }
        }
    },
    chainWebpack: config => {
        config.resolve.alias
        .set('@', resolve('src'))
        .set('@common', resolve('src/common'))
    }
}