Ext.define('MssPhoenix.view.tablet.pensioner.accounts.AccountInfo', {
    extend: 'MssPhoenix.view.widgets.Module',

    controller: 'pensionerdetailscontroller',

    
    xtype: 'accountinfo',

    // width: '100%',

    items: [
        {
            cls: 'module-head',
            xtype: 'component',
            html: `<h3>Pensioner Account Info</h3>`,
        },
        {
            cls: 'module-body',
            xtype: 'container',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            defaults: {
                width: '100%',
                xtype: 'container',
                layout: {
                    type: 'hbox',
                    align: 'stretch',
                    flex: 1,
                },
                margin:'5 0',
            },
            items: [
                {
                    items: [{
                        xtype: 'mitextfield',
                        label: 'BANK',
                        name: 'bankName',
                        readOnly: true,
                        bind: {
                            value: '{bankName}'
                        }
                    },]
                },
                {
                    items: [
                        {
                            xtype: 'mitextfield',
                            label: 'Account No',
                            name: 'accountNo',
                            bind: {
                                value: '{accountNo}'
                            },
                            readOnly: true,
                        },

                    ]
                },

                {
                    items: [
                        {
                            xtype: 'mitextfield',
                            label: 'ACCOUNT NAME',
                            name: 'ACCOUNT NAME',
                            value: '5,000',
                            readOnly: true,
                        },

                    ]
                },

                {
                    items: [
                        {
                            xtype: 'mitextfield',
                            label: 'ACCOUNT NUMBER',
                            name: 'ACCOUNT NUMBER',
                            value: '65,000',
                            readOnly: true,
                        },

                    ]
                },

            ],
        }
    ]

});