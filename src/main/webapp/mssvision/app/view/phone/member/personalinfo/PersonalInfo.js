Ext.define('MssPhoenix.view.phone.member.personalinfo.PersonalInfo', {
    extend: 'Ext.form.Panel',

    xtype: 'memberphone-personalinfo',
    reference: 'memberpersonalinfo',
    itemId: 'memberpersonalinfo',

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
                    xtype: 'memberphone-personaldetails',
                    flex: 1,
                },

                //Right column
                {
                    xtype: 'memberphone-contactdetails',
                    margin: '0 0 0 0',
                    flex: 1,
                }
            ]
        }
    ],

    bbar: [
        '->',
        {
            text: 'Employment Details',
            handler: 'showEmploymentDetailsWin',
            ui: 'action'
        },
        {
            text: 'All Details',
            handler: 'showAllMemberDetails',
            ui: 'action'
        },
    ]
});