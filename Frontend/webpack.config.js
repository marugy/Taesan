module.exports = {
    context: __dirname,
    entry: './app.js',
    devServer: {
        port: 3000,
        liveReload: true,
        // host 지정
        host: "0.0.0.0",
        allowedHosts: "all",
        open: true,
        client: {
          overlay: true,
          // 웹소켓 설정
          webSocketURL: { hostname: undefined, pathname: undefined, port: '0' },
        },
        compress: true,
      },
};