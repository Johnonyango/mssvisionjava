Ext.define('MssPhoenix.view.tablet.crm.member.CrmMemberPersonalInfo', {
    extend: 'MssPhoenix.view.widgets.Module',

    xtype: 'crmmemberpersonalinfo',
   
    items: [
        {
            cls: 'module-head',
            xtype: 'component',
            html: `<h3>Personal Information</h3>`,
        },
        {
            cls: 'module-body',
            xtype: 'container',
            layout: {
                type: 'vbox',
                align: 'stretch',
            },
            defaults: {
                width: '100%',
                xtype: 'container',
                layout:{
                    type:'hbox',
                    align: 'stretch',
                }
            },
            items: [
                {
                    items: [{
                        xtype: 'mitextfield',
                        label: 'First Name',
                        name: 'firstname',
                        margin: '10 0 0 0',
                        readOnly: true,
                    },
                    {
                        xtype: 'mitextfield',
                        label: 'Surname',
                        name: 'surname',
                        readOnly: true,
                        margin: '10 0 0 6',
                    },]
                },

                {
                    items: [
                        {
                            xtype: 'mitextfield',
                            label: 'Other Names',
                            name: 'othernames',
                            margin: '10 0 0 0',
                            readOnly: true,
                        },
                        {
                            xtype: 'mitextfield',
                            label: 'Status',
                            margin: '10 0 0 6',
                            name: 'mbshipStatus',
                            readOnly: true
                        }
                    ]
                },

                {
                    items: [
                        {
                            xtype: 'mitextfield',
                            label: 'D.O.B',
                            name: 'dob',
                            margin: '10 0 0 0',
                            readOnly: true,
                        },
                        {
                            xtype: 'mitextfield',
                            label: 'Gender',
                            margin: '10 0 0 6',
                            name: 'gender',
                            readOnly: true,
                        }
                    ]
                },

                {
                    items: [
                        {
                            xtype: 'mitextfield',
                            label: 'Marital Status',
                            name: 'maritalStatus',
                            margin: '10 0 0 0',
                            readOnly: true
                        },
                        {
                            xtype: 'mitextfield',
                            label: 'ID/Passport NO.',
                            margin: '10 0 0 6',
                            name: 'idNo',
                            readOnly: true
                        }
                    ]
                },

                {
                    items: [
                        {
                            xtype: 'mitextfield',
                            label: 'Retirement Age',
                            name: 'retirementAge',
                            margin: '10 0 0 0',
                            readOnly: true,
                        },
                        {
                            xtype: 'mitextfield',
                            label: 'Date of joining',
                            margin: '10 0 0 6',
                            name: 'dateJoinedScheme',
                            readOnly: true,
                        }
                    ]
                }
            ]
        }
    ]

});