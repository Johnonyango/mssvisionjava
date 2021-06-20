Ext.define('MssPhoenix.view.tablet.admin.LandingPageContent.ChangeLandingpage', {
    extend: 'Ext.tab.Panel',
    xtype: 'basic-tabs',
    controller: 'tab-view',
    width: 500,
    height: 1800,
    // maxHeight:1800,
    defaults: {
        bodyPadding: 10,
        scrollable: true
    },
    tabBar: {
        layout: {
            pack: 'left'
        }
    },
    items: [
        {
            title: 'Change Landing Page Content',
            xtype: 'landingpageform',
        },

        {
            title: 'Configs',
            xtype: 'configs',
        },
        {
            title: 'MobileMoneyConfigs',
            xtype: 'mobilemoneyconfigs',
        },
        {
            title: 'MailConfigs',
            xtype: 'mailconfigs',
        }
    ]
});