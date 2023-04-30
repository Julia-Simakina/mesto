module.exports = {
  presets: [
    [
      '@babel/preset-env', //пресет позволяет указать, в каких версиях браузеров должен работать код
      {
        useBuiltIns: 'entry',
        corejs: 3, //указываем версию
        targets: {
          // какие версии браузеров поддерживать
          edge: '17',
          ie: '11',
          firefox: '50',
          chrome: '64',
          safari: '11.1'
        }
      }
    ]
  ]
};
