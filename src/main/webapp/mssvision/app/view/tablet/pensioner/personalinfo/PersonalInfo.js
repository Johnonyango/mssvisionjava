Ext.define('MssPhoenix.view.tablet.pensioner.personalinfo.PersonalInfo', {
    extend: 'Ext.form.Panel',
    
    xtype: 'pensionerpersonalinfo',

    reference: 'pensionerpersonalinfo',
    itemId: 'pensionerpersonalinfo',

    padding:'15px',

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
                    xtype: 'pensionerpersonaldetails',
                    margin: '0 0 0 30',
                    flex: 1,
                },
                {
                    xtype: 'pensionercontactdetails',
                    margin: '0 0 0 30',
                    flex: 1,
                }
            ]
        }
    ],

});