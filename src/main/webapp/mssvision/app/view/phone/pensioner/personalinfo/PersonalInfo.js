Ext.define('MssPhoenix.view.phone.pensioner.personalinfo.PersonalInfo', {
    extend: 'Ext.form.Panel',
    
    xtype: 'phonepensionerpersonalinfo',

    reference: 'phonepensionerpersonalinfo',
    itemId: 'phonepensionerpersonalinfo',

    // padding:'5px',

    items: [
        {
            xtype: 'container',
            width: '100%',
            layout: {
                type: 'vbox',
                align: 'stretch',
            },
            items: [
                //left column
                {
                    xtype: 'pensionerpersonaldetails',
                    margin: '0 0 0 0',
                    flex: 1,
                },
                {
                    xtype: 'pensionercontactdetails',
                    margin: '0 0 0 0',
                    flex: 1,
                }
            ]
        }
    ],

});