Ext.define('MssPhoenix.view.phone.sponsor.personalinfo.PersonalInfo', {
    extend: 'Ext.form.Panel',
    
    xtype: 'sponsorpersonalinfophone',

    reference: 'sponsorpersonalinfo',
    itemId: 'sponsorpersonalinfo',

    padding:'15px',

    items: [
        {
            xtype: 'container',
            width: '100%',
            layout: {
                type: 'vbox',
                align: 'stretch',
            },
            items: [
                {
                    xtype: 'sponsorphonepersonaldetails',
                    flex: 1,
                },
                {
                    xtype: 'sponsorphonecontactdetails',
                    margin: '0 0 0 0',
                    flex: 1,
                }
            ]
        }
    ],

});