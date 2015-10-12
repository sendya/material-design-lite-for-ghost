var _       = require('lodash'),
    mdlUtils;

mdlUtils = {
    assetTemplate: _.template('<%= source %>?v=<%= version %>'),
    linkTemplate: _.template('<a href="<%= url %>" title="<%= text %> Tag" class="mdl-button mdl-js-button mdl-js-ripple-effect"><%= text %></a>'),
    scriptTemplate: _.template('<script src="<%= source %>?v=<%= version %>"></script>'),
    inputTemplate: _.template('<input class="<%= className %>" type="<%= type %>" name="<%= name %>" <%= extras %> />'),
    isProduction: process.env.NODE_ENV === 'production'
};

module.exports = mdlUtils;
