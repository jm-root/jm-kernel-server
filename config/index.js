require('log4js').configure(require('path').join(__dirname, 'log4js.json'))
let config = {
  development: {
    debug: true,
    lng: 'zh_CN',
    port: 3000,
    modules: {
      'jm-sso': {
        prefix: '/sso'
      },
      'jm-user': {
        prefix: '/user'
      },
      'jm-wechat': {
        prefix: '/wechat'
      },
      'jm-miniapp': {
        prefix: '/miniapp'
      },
      'jm-passport': {
        prefix: '/passport'
      }
    }
  },
  production: {
    lng: 'zh_CN',
    port: 80,
    modules: {
      'jm-sso': {
        prefix: '/sso'
      },
      'jm-user': {
        prefix: '/user'
      },
      'jm-wechat': {
        prefix: '/wechat'
      },
      'jm-miniapp': {
        prefix: '/miniapp'
      },
      'jm-passport': {
        prefix: '/passport'
      }
    }
  }
}

let env = process.env.NODE_ENV || 'development'
config = config[env] || config['development']
config.env = env

module.exports = config
