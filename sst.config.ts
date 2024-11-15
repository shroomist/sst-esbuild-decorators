/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "sst-demo",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {

    const api = new sst.aws.ApiGatewayV1('sst-demo')
    api.route('GET /', {
      handler: 'src/demo.handler',
      nodejs: {
        plugins: "./plugins.mjs",
        esbuild: {
          footer: { ts: '// footer applied' },
        }
      }
    })

    api.deploy()

    return {
      api: api.url
    }
  },
});
