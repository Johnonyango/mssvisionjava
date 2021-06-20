Ext.define('MssPhoenix.view.tablet.principalofficer.personalinfo.PersonalInfo', {
    extend: 'Ext.form.Panel',
    
    xtype: 'popersonalinfo',

    reference: 'popersonalinfo',
    itemId: 'popersonalinfo',

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
                {
                    xtype: 'popersonaldetails',
                    margin: '0 0 0 30',
                    flex: 1,
                },
                {
                    xtype: 'pocontactdetails',
                    margin: '0 0 0 30',
                    flex: 1,
                }
            ]
        }
    ],

});