'use strict';
module.exports = {
  apps: [
    {
      name: 'website',
      script: './node_modules/@react-router/serve/bin.js',
      args: './build/server/index.js',
      interpreter: 'bun',
      env: {
        PORT: 9092,
      },
      max_memory_restart: '4000M',
      node_args: ['--max_old_space_size=4000'],
    },
  ],
};
