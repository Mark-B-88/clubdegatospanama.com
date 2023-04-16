module.exports = {
  apps: [
    {
      name: "clubdegatospanama-front-end",
      script: "npm",
          args: (process.env.NODE_ENV === "production") ? "run build && run preview" : "run dev",
      cwd: "./client",
      instances: "max",
      exec_mode: "cluster",
      watch: true,
      env: {
        NODE_ENV: "development",
        PORT: 9998,
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 9998,
      },
    },
    {
      name: "clubdegatospanama-back-end",
      script: "npm",
      args: "start",
      cwd: "./server",
      instances: "max",
      exec_mode: "cluster",
      watch: true,
      env: {
        NODE_ENV: "development",
        PORT: 9999,
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 9999,
      },
    },
  ],
};
