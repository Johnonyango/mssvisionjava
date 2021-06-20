Ext.define('MssPhoenix.view.tablet.sponsor.members.Members', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',
    xtype : 'sponsormembers', 
    
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
  
    
    defaults:{
        width:'100%'
    },
    viewModel: {
        type: 'membersgridvmodel'
    },

    controller:'membersponsorgridcontroller',

    items: [{
        xtype: 'container',
        scrollable: true,
        height:'100%',
        
        items: [{
                xtype: 'module',
                margin: '10 10 10 10',
                items: [
                    {
                        xtype: 'component',
                        cls: 'module-head',
                        html: '<h3>Members</h3>'
                    },
                    {
                        xtype: 'toolbar',
                        items: [
                            {
                                bind: {
                                    style: {
                                        'display': '{isAddSingleMember}'
                                    }
                                },
                                text: 'Add Single Member',
                                // scale: 'small',
                                handler: 'onAddSingleUserButtonClick',
                                id: 'btnAddSingleMember',
                                ui:'action',
                            },

                            {
                                bind: {
                                    style: {
                                        'display': '{isAddBatchMember}'
                                    }
                                },
                                text: 'Add /Update Members in Batch',
                                // scale: 'small',
                                handler: 'onAddMembersInBatchButtonClick',
                                id: 'addMembersInBatch',
                                ui:'action',
                            },


                            //     {
                            //     text: 'Add Single Member',
                            //     handler: 'onAddSingleUserButtonClick',
                            //     id: 'btnAddSingleMember',
                            //     ui:'action',
                            // },
                            // {
                            //     text: 'Add /Update Members in Batch',
                            //     handler: 'onAddMembersInBatchButtonClick',
                            //     id: 'addMembersInBach',
                            //     ui:'action'
                            // },
                            // {
                            //     text: 'Update Members in Batch / Download Template',
                            //     handler: 'onUpdateMembersInBatchButtonClick',
                            //     ui:'action'
                            // },

                            '->',
                            {
                                iconCls:'fa fa-redo',
                                handler: 'reloadMemberGrid',
                                ui: 'action'
                            },

                            {
                                xtype: 'formpanel',
                                reference: 'searchMember',
                                itemId: 'searchMember',
                                layout: {
                                    type: 'hbox',
                                },
                                items: [
                                    {
                                        xtype: 'mitextfield',
                                        name: 'searchValue',
                                        placeholder: 'Enter search key',
                                        tooltip: 'Enter search key',
                                        allowBlank: false,
                                    },
                                    {
                                        xtype: 'selectbox',
                                        // label: 'Gender',
                                        margin: '0 0 0 6',
                                        placeholder: 'Select Identifier',
                                        tooltip: 'Select Search Indentifier',
                                        name: 'searchIndentifier',
                                        store: {
                                            fields: ['value', 'name'],
                                            data: [

                                                {
                                                    "value": "EMAIL",
                                                    "name": "Email"
                                                },
                                                {
                                                    "value": "FIRST_NAME",
                                                    "name": "First Name"
                                                },
                                                {
                                                    "value": "SURNAME",
                                                    "name": "Sur-Name"
                                                },
                                                {
                                                    "value": "OTHER_NAMES",
                                                    "name": "Other Names"
                                                },
                                                {
                                                    "value": "MEMBER_NO",
                                                    "name": "Member Number"
                                                },
                                                {
                                                    "value": "MEMBERSHIP_NO",
                                                    "name": "Membership Number"
                                                },
                                                {
                                                    "value": "MEMBER_ID",
                                                    "name": "Member Id"
                                                },
                                                {
                                                    "value": "PHONE",
                                                    "name": "Phone Number"
                                                },
                                                {
                                                    "value": "STAFF",
                                                    "name": "Staff Number"
                                                }
                                            ]
                                        },
                                        displayField: 'name',
                                        valueField: 'value',
                                        allowBlank: false,
                                    }
                                ]
                            },
                            {
                                xtype: 'button',
                                scale: 'small',
                                iconCls: 'x-fa fa-search',
                                ui: 'action',
                                handler: 'searchSponsorMember'
                            },
                            {
                                xtype: 'button',
                                ui: 'action',
                                text: 'reset search',
                                handler: 'resetSearch'
                            },
                        ],
                    },
                    {
                        xtype: 'sponsormembersgrid',
                        cls: 'module-body',

                    },

                ]
            }, 
        ]

    }]
});