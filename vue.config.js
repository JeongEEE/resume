module.exports = {
  lintOnSave: false,
  publicPath: '/resume',
  outputDir: 'docs',
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
		port: 8091
	},
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'development') {
      config
        .output
        .filename('[name].[hash].js') 
        .end() 
    }  
  }
}
