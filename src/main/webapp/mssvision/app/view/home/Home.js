Ext.define('MssPhoenix.view.home.Home', {
    extend: 'Ext.Panel',
    xtype: 'home',

    controller: 'home',
    viewModel: {
        type: 'home'
    },

    config: {
        route: null
    },

    eventedConfig: {
        /**
         * Make the config trigger an event on change to allow the controller to monitor it.
         * https://www.sencha.com/blog/using-sencha-ext-config/
         */
        route: null
    },

    platformConfig: {
        '!phone': {
            header: {
                hidden: true
            }
        }
    },
    cls: 'home',
    scrollable: 'y',
    items: []
});