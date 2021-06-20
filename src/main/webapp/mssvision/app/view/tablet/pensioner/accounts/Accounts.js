Ext.define('MssPhoenix.view.tablet.pensioner.accounts.Accounts', {
    extend: 'Ext.form.Panel',
    
    xtype: 'pensioneraccountinfo',

    items: [
        {
            xtype: 'container',
            width: '100%',
            layout: {
                type: 'hbox',
                align: 'stretch',
            },
            items: [
                //left column
                {
                    xtype: 'accountinfo',
                    flex: 1,
                },

                //Right column
                {
                    xtype: 'pensiondetails',
                    margin: '0 0 0 30',
                    flex: 1,
                }
            ]
        }
    ],
    buttons: [
        '->',
        {
            text: 'Pensioner Details',
            handler: 'showEmploymentDetailsWin'
        },
        {
            text: 'Save',
            formBind: true
        },
    ]
});