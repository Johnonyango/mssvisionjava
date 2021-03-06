Ext.define('MssPhoenix.Application', {
    extend: 'Ext.app.Application',

    name: 'MssPhoenix',

    // Since all the files in the ./app folder should be included in the final build, let's
    // require all application classes (MssPhoenix.*) and avoid redundant 'requires' in each files.
    requires: [
        'Ext.*',
        'MssPhoenix.*',
        'Ext.MessageBox',
        'Ext.form.Panel',
        'Ext.field.Password'
    ],

    profiles: [
        'Phone',
        'Tablet'
    ],

    stores: [
        'Menu' // creates one global instance of the Menu store (Ext.getStore('Menu'))
    ],

    viewport: {
        controller: 'viewport',
        viewModel: 'viewport'
    },

    defaultToken: 'home',

    launch: function (profile) {
        // The viewport controller requires xtype defined by profiles, so let's perform extra
        // initialization when the application and its dependencies are fully accessible.
        Ext.Viewport.getController().onLaunch();
        Ext.getBody().removeCls('launching');
        this.callParent([profile]);
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    },

    function() {
        //  BaseUrl=`${MssPhoenix.model.Session.baseUrl}/api/`;
    }
});