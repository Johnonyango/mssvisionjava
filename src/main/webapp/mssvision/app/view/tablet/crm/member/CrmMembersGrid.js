/**
 * This view is an example list of people.
 */
Ext.define('MssPhoenix.view.tablet.crm.member.CrmMembersGrid', {
    extend: 'MssPhoenix.view.widgets.Table',
    xtype: 'crmmembersgrid',
    height: 456,
    // viewModel:'crmmembervmodel',
    layout: 'fit',
    plugins: {
        gridpagingtoolbar: true
    },

    selectable: {
        // Disables sorting by header click, though it will be still available via menu
        columns: true,
        cells: true,
        checkbox: true,
        drag: true,
        mode: 'single',
        extensible: 'y'
    },

    //title:'Test',

    store: {
        type: 'crmmember'
    },

    controller: 'crmmembergridcontroller',
    scrollable: true,


    items: [
        {
            xtype: 'toolbar',
            docked: 'top',
            default: {
                ui: 'action'
            },

            items: [
                {
                    xtype: 'button',
                    ui: 'action',
                    text: 'View Member Details',
                    handler: 'onviewMemberdetailsButtonClick'
                },

                '->',
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
                            placeholder: 'select indentifier',
                            tooltip: 'select search indentifier',
                            name: 'searchIndentifier',
                            store: {
                                fields: ['value', 'name'],
                                data: [{
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
                                // {
                                //     "value": "MEMBERSHIP_NO",
                                //     "name": "Member No"
                                // },
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
                    handler: 'searchMember'
                },
                {
                    xtype: 'button',
                    ui: 'action',
                    text: 'reset search',
                    handler: 'resetSearch'
                }
            ],
        }
    ],

    columns: [
        { text: 'Member Number', dataIndex: 'memberNo', flex: 1 },
        { text: 'Member Name', dataIndex: 'name', flex: 1 },
        { text: 'Id Number', dataIndex: 'idNo', flex: 1 },
        { text: 'Date Of Birth', dataIndex: 'dob', flex: 1 },
        { text: 'Date Of Joining', dataIndex: 'dateJoinedScheme', flex: 1 },
        { text: 'Status', dataIndex: 'mbshipStatus', flex: 1 }
    ]
});
