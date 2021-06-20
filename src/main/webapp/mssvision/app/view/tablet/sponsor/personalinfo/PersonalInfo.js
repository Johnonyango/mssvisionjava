Ext.define('MssPhoenix.view.tablet.sponsor.personalinfo.PersonalInfo', {
    extend: 'Ext.form.Panel',
    
    xtype: 'sponsorpersonalinfo',

    reference: 'sponsorpersonalinfo',
    itemId: 'sponsorpersonalinfo',

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
                    xtype: 'sponsorpersonaldetails',
                    margin: '0 0 0 30',
                    flex: 1,
                },
                {
                    xtype: 'sponsorcontactdetails',
                    margin: '0 0 0 30',
                    flex: 1,
                }
            ]
        }
    ],

});