Ext.define('MssPhoenix.view.tablet.member.personalinfo.PersonalInfo', {
    extend: 'Ext.form.Panel',

    xtype: 'memberpersonalinfo',
    reference: 'memberpersonalinfo',
    itemId: 'memberpersonalinfo',

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
                    xtype: 'memberpersonaldetails',
                    flex: 1,
                    height: 456,
                },

                //Right column
                {
                    xtype: 'membercontactdetails',
                    margin: '0 0 0 30',
                    flex: 1,
                    height: 456,
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
            text: 'View All Details',
            handler: 'showAllMemberDetails',
            ui: 'action'
        },
    ]
});