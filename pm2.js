import pm2 from 'pm2';
import pkg from './package.json';

pm2.start({
  name: pkg.name,
  exec_mode: 'fork',
  script: 'server.js',
  instances: 1,
  interpreter: 'babel-node',
  watch: process.env.NODE_ENV === 'development'
  ? [
    'next.config.js',
    'server.js',
    '.babelrc',
  ]
  : undefined,
  args: ['--colors'],
  autorestart: true,
}, (err) => {
  console.log(`STARTING NEXT.JS TO SERVE ${pkg.name.toUpperCase()}`, err);
  process.exit(0);
});
