Ext.define('MssPhoenix.view.tablet.crm.member.CrmMemberDetails', {
    extend: 'Ext.form.Panel',

    xtype: 'crmmemberdetails',
    itemId: 'crmmemberdetails',
    reference: 'crmmemberdetails',


    items: [
        {
            xtype: 'container',
            layout: {
                type: 'hbox',
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