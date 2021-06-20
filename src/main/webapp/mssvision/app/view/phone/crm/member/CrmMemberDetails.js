Ext.define('MssPhoenix.view.phone.crm.member.CrmMemberDetails', {
    extend: 'Ext.form.Panel',

    xtype: 'crmphonememberdetails',
    itemId: 'crmphonememberdetails',
    reference: 'crmphonememberdetails',


    // layout:'vbox',
    // cls: 'butoncss',
    items: [
        {
            xtype: 'container',
            layout: {
                type: 'vbox',
                // width: '100%',
            },
            items: [
                //left column
                {
                    margin: '20 20 0 20',
                    flex: 1,
                    xtype: 'crmmemberpersonalinfo'
                },

                //Right column
                {
                    xtype: 'crmmembercontactdetails',
                    flex: 1,
                    margin: '20 20 0 0'
                }
            ]
        },
    ],
    bbar: [
        '->',
        {
            ui: 'action',
            text: 'Employment Details',
            margin: '0 20 0 0',
            handler: 'showMemberEmploymentDetailsWin'
        }

    ]
});