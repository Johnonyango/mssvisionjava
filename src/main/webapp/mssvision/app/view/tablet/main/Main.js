Ext.define('MssPhoenix.view.tablet.main.Main', {
    extend: 'Ext.Panel',
    // xtype: 'main', -- set by profile

    controller: 'main',
    viewModel: 'main',


    layout: 'card',
    flex: 1,

    defaults: {
        header: {
            defaults: {
                ui: 'flat large'
            }
        }
    },
    tbar: {
        xtype: 'header',
    },

    lbar: {
        xtype: 'mainmenu',
        reference: 'mainmenu',
        ui: 'dark micro',
        zIndex: 4,

    },
    bbar: {
        xtype: 'label',
        margin: '10 0 0 10',
        alignSelf: 'center',
        html: '<strong style="text-align: center;"> ©️ Copyright Systech Ltd 2021</strong>'
    }

});