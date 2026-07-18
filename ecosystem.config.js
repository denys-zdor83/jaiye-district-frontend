/** @type {import('pm2').StartOptions} */
module.exports = {
  apps: [
    {
      name: "jaiye-district-frontend",
      script: "node_modules/.bin/next",
      args: "start",
      cwd: "/home/deploy/apps/jaiye-district-frontend",
      env: {
        NODE_ENV: "production",
        PORT: 3001,
      },
      exec_mode: "fork",
      autorestart: true,
      watch: false,
      max_memory_restart: "500M",
      error_file: "/var/log/pm2/jaiye-frontend-error.log",
      out_file: "/var/log/pm2/jaiye-frontend-out.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss",
    },
  ],
};
