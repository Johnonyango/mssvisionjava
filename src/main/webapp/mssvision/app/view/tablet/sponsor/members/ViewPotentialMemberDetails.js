Ext.define('MssPhoenix.view.tablet.sponsor.members.ViewPotentialMemberDetails', {
    extend: 'MssPhoenix.view.widgets.Window',
    xtype: 'sponsorviewmemberdetails',
    width:"90%",
    scrollable: true,
    height: "90%",
    controller: 'sponsorpotentialmembercontroller',
    padding: 15,
    closable: true,
    title: 'Potential Member Details',
    items: [
        {
            xtype: 'formpanel',
            margin: '0 10 0 10',
            layout: 'hbox',
            reference: 'potentialmemberform',
            items: [
                {
                    xtype: 'container',
                    layout: 'vbox',
                    items: [
                        {
                            xtype: 'fieldset',
                            title: 'Member details',

                            layout: {
                                type: 'vbox',
                                align: 'stretch',
                            },
                            defaults: {
                                width: '100%',
                                xtype: 'container',
                                layout: {
                                    type: 'hbox',
                                    align: 'stretch',
                                }
                            },
                            items: [
                                {
                                    items: [
                                        {
                                            xtype: 'mitextfield',
                                            label: 'Member id',
                                            name: 'id',
                                            readOnly: true,
                                            hidden:true,
                                            margin: '10 0 0 0',
                                        },
                                        {
                                            xtype: 'mitextfield',
                                            label: 'Member Name',
                                            name: 'name',
                                            readOnly: true,
                                            margin: '10 0 0 0',
                                        }
                                    ]
                                },
                                {
                                    items: [
                                        {
                                            xtype: 'mitextfield',
                                            label: 'Cell Phone',
                                            name: 'cellPhone',
                                            readOnly: true,
                                            margin: '10 0 0 0',
                                        },
                                    
                                        

                                    ]
                                },
                                {
                                    items: [
                                        {
                                            hidden:true,
                                            xtype: 'selectbox',
                                            store: {
                                                type: 'sponsorpotentialmemberaction'
                                            },
                                            queryMode: 'local',
                                            label:'Choose An Action',
                                            displayField: 'name',
                                            name:'action',
                                            valueField: 'name',
                                            value:'SPONSOR_APPROVE',
                                            bind:{
                                                value: 'SPONSOR_APPROVE',
                
                                            },
                                            flex: 1,
                                            minWidth: 200,
                                            required:true,
                                        },
                                    ]
                                },
                            ],
                        },
                    ]
                },

                {
                    xtype: 'container',
                    layout: 'vbox',
                    items: [
                        {
                            xtype: 'fieldset',
                            title: 'Other Details',
                            layout: {
                                type: 'vbox',
                                align: 'stretch',
                            },
                            defaults: {
                                width: '100%',
                                xtype: 'container',
                                layout: {
                                    type: 'hbox',
                                    align: 'stretch',
                                }
                            },
                            items: [
                                {
                                    items: [
                                        {
                                            xtype: 'mitextfield',
                                            label: 'Salary',
                                            margin: '10 0 0 0',
                                            name: 'salary',
                                            readOnly: true,
                                        },
                                        {
                                            xtype: 'mitextfield',
                                            label: 'Id/Passport Number',
                                            name: 'idNo',
                                            readOnly: true,
                                            margin: '10 0 0 6',
                                        },
                                    ]
                                },
                                {
                                    items: [
                                        {
                                            xtype: 'mitextfield',
                                            label: 'Ssnit Number',
                                            margin: '10 0 0 0',
                                            name: 'ssnit',
                                            readOnly: true,
                                        },
                                        {
                                            xtype: 'mitextfield',
                                            label: 'Maiden Name',
                                            name: 'maidenName',
                                            readOnly: true,
                                            margin: '10 0 0 6',
                                        },
                                    ]
                                },
                                {
                                    items: [
                                        {
                                            xtype: 'mitextfield',
                                            label: 'Father',
                                            margin: '10 0 0 0',
                                            name: 'fatherName',
                                            readOnly: true,
                                        },
                                        {
                                            xtype: 'mitextfield',
                                            label: 'Mother',
                                            name: 'motherName',
                                            readOnly: true,
                                            margin: '10 0 0 6',
                                        },
                                    ]
                                },
                                {
                                    items: [
                                        {
                                            xtype: 'mitextfield',
                                            label: 'Father Address',
                                            margin: '10 0 0 0',
                                            name: 'fatherAddress',
                                            readOnly: true,
                                        },
                                        {
                                            xtype: 'mitextfield',
                                            label: 'Mother Address',
                                            name: 'motherAddress',
                                            readOnly: true,
                                            margin: '10 0 0 6',
                                        },
                                    ]
                                },
                                {
                                    items: [
                                        {
                                            xtype: 'mitextfield',
                                            label: 'Employer Name',
                                            margin: '10 0 0 0',
                                            name: 'employerName',
                                            readOnly: true,
                                        },
                                        {
                                            xtype: 'mitextfield',
                                            label: 'Employer No',
                                            name: 'employerNo',
                                            readOnly: true,
                                            margin: '10 0 0 6',
                                        },
                                    ]
                                },
                                {
                                    items: [
                                        {
                                            xtype: 'mitextfield',
                                            label: 'Employer Address',
                                            margin: '10 0 0 0',
                                            name: 'employerAddress',
                                            readOnly: true,
                                        },
                                        {
                                            xtype: 'mitextfield',
                                            label: 'Scheme Type',
                                            name: 'schemeType',
                                            readOnly: true,
                                            margin: '10 0 0 6',
                                        },
                                    ]
                                },  
                                {
                                    items: [
                                        {
                                            xtype: 'mitextfield',
                                            label: 'Scheme Type',
                                            margin: '10 0 0 0',
                                            name: 'schemeType',
                                            readOnly: true,
                                        },
                                        {
                                            xtype: 'mitextfield',
                                            label: 'Qualify For Tier 3',
                                            name: 'tier3',
                                            readOnly: true,
                                            margin: '10 0 0 6',
                                        },
                                    ]
                                },  
                            ],
                        },
                    ]
                },

                {
                    xtype: 'container',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'fieldset',
                            title: 'Beneficiaries',
                            layout: {
                                type: 'vbox',
                                align: 'stretch',
                            },
                            defaults: {
                                width: '100%',
                                xtype: 'container',
                                layout: {
                                    type: 'hbox',
                                    align: 'stretch',
                                }
                            },
                            items: [
                                {
                                    items: [
                                        {
                                            xtype: 'memberbeneficiarygrid',
                                        },
                                       
                                    ]
                                },
                              
                            ],
                        },
                    ]
                },
            ]
        },
    ],
    bbar: [
        {
            text: 'Approve',
            ui: 'action',
            handler: 'onApproveBtnClick',
            iconCls: 'fa fa-save',
        },
        {
            text: 'Decline',
            ui: ' decline',
            handler: 'onDeclineBtnClick',
            iconCls: 'fa fa-ban',

        },
        '->',
        {
            text: 'Save/Update Details',
            ui: 'action',
            // scale: 'small',
            handler: 'onUpdateBtnClick',
            iconCls: 'fa fa-save',
        },

    ],
});