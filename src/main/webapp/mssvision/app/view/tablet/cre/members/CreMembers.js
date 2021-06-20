Ext.define('MssPhoenix.view.tablet.cre.member.CreMembers', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',

    controller: 'cremembercontroller',

    minHeight: 456,
    layout: {
        type: 'vbox'
    },
    defaults: {
        width: '100%'
    },

    viewModel: {
        data: {
            schemeName: null,
            sponsorName: null,
        }
    },

    items: [
        {
            xtype: 'container',
            padding: '15px',
            items: [
                {
                    xtype: 'toolbar',
                    cls: 'module-subhead',
                    items: [
                        {
                            iconCls: 'fa fa-arrow-left',
                            text: 'Back',
                            handler: 'goBack',
                            ui: 'action'
                        },
                        {
                            xtype: 'component',
                            margin: '0 0 0 20',
                            bind: {
                                html: '<h3><span style="color: darkgreen">{schemeName} / {sponsorName} / </span>Members</h3>'
                            }
                        },
                        '->',
                        {
                            iconCls: 'fa fa-redo',
                            handler: 'reloadMembersGridCRE',
                            ui: 'action'
                        },
                    ]
                },

                {
                    margin: '10 0 0 0',
                    xtype: 'container',
                    cls: 'module-body   ',
                    items: [
                        {
                            xtype: 'toolbar',
                            docked: 'top',
                            default: {
                                ui: 'action'
                            },

                            items: [
                                '->',
                                {
                                    xtype: 'formpanel',
                                    reference: 'searchMember',
                                    itemId: 'searchMember',
                                    layout: {
                                        type: 'hbox',
                                    },
                                    items: [{
                                        xtype: 'mitextfield',
                                        name: 'searchValue',
                                        placeholder: 'Enter search key',
                                        tooltip: 'Enter search key',
                                        allowBlank: false,
                                    },
                                        {
                                            xtype: 'selectbox',
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
                                            editable: false,
                                        }
                                    ]
                                },
                                {
                                    xtype: 'button',
                                    scale: 'small',
                                    iconCls: 'x-fa fa-search',
                                    ui: 'action',
                                    handler: 'creSearchMember'
                                },
                                {
                                    xtype: 'button',
                                    ui: 'action',
                                    text: 'reset search',
                                    handler: 'creResetSearch'
                                }
                            ],
                        },
                        {
                            xtype: 'cremembersgrid',
                            margin: '10 0 0 0',
                        }
                    ]
                },
            ]
        }
    ]
});