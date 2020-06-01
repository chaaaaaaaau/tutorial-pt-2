module.exports = {
  apps : [{
    name: 'tutorial-2',
    script: 'index.js',
    watch: '.'
  }, {
    script: './service-worker/',
    watch: ['./service-worker']
  }],

  deploy : {
    production : {
      user : 'ubuntu',
      host : 'ec2-52-209-166-225.eu-west-1.compute.amazonaws.com',
      key : '~/.ssh/tutorial.pem',
      ref  : 'origin/master',
      repo : 'https://github.com/chaaaaaaaau/tutorial-pt-2.git',
      path : '/home/ubuntu/tutorial-2',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
