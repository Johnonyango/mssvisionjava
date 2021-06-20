Ext.define('MssPhoenix.view.tablet.member.home.SwitchSchemeWin', {
    extend: 'MssPhoenix.view.widgets.Window',
    xtype: 'memberswitchschemewin',
    controller: 'memberswitchschemecontroller',

    width: '80%',
    closable: true,
    title: 'Switch Scheme',
    items: [{
        xtype: 'module',
        items: [
            {
                xtype: 'container',
                cls: 'module-body',
                items: [
                    {
                        xtype: 'selectbox',
                        label: 'Select Scheme',
                        name: 'memberschemesbox',
                        store: {
                            type: 'memberschemes'
                        },
                        displayField: 'schemeName',
                        valueField: 'id',
                        value: 'Select scheme',
                        listeners: {
                            change: 'onSwitchScheme'
                        },
                    },
                ]
            }
        ]
    }],
});