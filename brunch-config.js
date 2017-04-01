// See http://brunch.io for documentation.
exports.files = {
  javascripts: {
    joinTo: 'app.js'
  },
  stylesheets: {
    joinTo: 'app.css'
  }
};

exports.paths = {
  public: 'docs/'
};

exports.plugins = {
  babel: {
    presets: ['latest', 'react']
  },
  less: {
    modules: false
  }
};

exports.hot = true;
