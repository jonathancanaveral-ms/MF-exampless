module.exports = {
  apps: [
    {
      name: "dashboard",
      exec_mode: "cluster",
      instances: "max",
      script: "./node_modules/nuxt/bin/nuxt.js",
      args: "start --config-file nuxt.dashboard.config.js -p=4000"
    },
    {
      name: "membership",
      exec_mode: "cluster",
      instances: "max",
      script: "./node_modules/nuxt/bin/nuxt.js",
      args: "start --config-file nuxt.membership.config.js -p=4001"
    }
  ]
}
