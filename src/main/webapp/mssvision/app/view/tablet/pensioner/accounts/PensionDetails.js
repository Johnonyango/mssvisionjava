Ext.define('MssPhoenix.view.tablet.pensioner.accounts.PensionDetails', {

    extend: 'MssPhoenix.view.widgets.Module',
    controller: 'pensionerdetailscontroller',

    xtype: 'pensiondetails',

    items: [
        {
            cls: 'module-head',
            xtype: 'component',
            html: `<h3>Pensioner Details</h3>`,
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
                        label: 'GROSS PENSION',
                        name: 'GROSS PENSION',
                        value: '71,000',
                        readOnly: true,
                    },]
                },
                {
                    items: [
                        {
                            xtype: 'mitextfield',
                            label: 'TAX',
                            name: 'TAX',
                            value: '11,000',
                            readOnly: true,
                        },

                    ]
                },

                {
                    items: [
                        {
                            xtype: 'mitextfield',
                            label: 'DEDUCTIONS',
                            name: 'DEDUCTIONS',
                            value: '5,000',
                            readOnly: true,
                        },

                    ]
                },

                {
                    items: [
                        {
                            xtype: 'mitextfield',
                            label: 'NET PENSION',
                            name: 'NET PENSION',
                            value: '65,000',
                            readOnly: true,
                        },

                    ]
                },

            ],
        }
    ]
});