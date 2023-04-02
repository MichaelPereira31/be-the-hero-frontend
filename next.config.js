const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  pwa: {
    dest: 'public',
    disable: !isProd
  },
  env: {
  }
}
