'use strict';
module.exports = {
  apps: [
    {
      name: 'website',
      script: './node_modules/@react-router/serve/bin.js',
      args: './build/server/index.js',
      interpreter: 'bun',
      env: {
        PORT: 8604,
      },
      max_memory_restart: '8000M',
      node_args: ['--max_old_space_size=8000'],
    },
  ],
};
