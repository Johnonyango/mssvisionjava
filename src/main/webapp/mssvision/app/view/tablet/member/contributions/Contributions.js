Ext.define('MssPhoenix.view.tablet.member.contributions.Contributions', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',

    // xtype: 'membercontributions',
    controller: 'membercontributionscontroller',

    listeners: {
        documentsave: 'onDocumentSave',
        beforedocumentsave: 'onBeforeDocumentSave',
    },

    viewModel: {
        data: {
            allowMakeContribution: 'none'
        }
    },

    items: [{
        xtype: 'container',
        padding: '15px',
        scrollable: true,
        items: [{
            xtype: 'module',
            items: [
                {
                    xtype: 'toolbar',
                    // ui: 'tools',
                    items: [
                        {
                            bind: {
                                style: {
                                    'display': '{allowMakeContribution}'
                                },
                            },
                            text: 'Make contribution',
                            ui: 'action',
                            // hidden: true,
                            menu: {
                                defaults: {
                                    handler: 'makeContributionBtnClick'
                                },
                                items: [{
                                    text: 'Mobile money',
                                    ui: 'action'
                                }]
                            }
                        },
                        {
                            xtype: 'component',
                            maxWidth: 256,
                            margin: '0 0 0 20',
                            bind: {
                                html: '{iconInfo} <span style="color: #002c65; font-weight: 700">A record of contributions you have made.</span>'
                            }
                        },
                        '->',
                        {
                            xtype: 'formpanel',
                            reference: 'filtercontributions',
                            itemId: 'filtercontributions',
                            layout: {
                                type: 'hbox',
                            },
                            items: [
                                {
                                    xtype: 'midatefield',
                                    // label: 'From',
                                    name: 'fromDate',
                                    placeholder: 'From Date',
                                    tooltip: 'Specify start date',
                                    maxDate: new Date(),
                                    validators: 'date'
                                },
                                {
                                    margin: '0 0 0 10',
                                    xtype: 'midatefield',
                                    // label: 'To',
                                    name: 'toDate',
                                    placeholder: 'End Date',
                                    tooltip: 'Specify end date',
                                    maxDate: new Date(),
                                    value: new Date(),
                                    flex: 1,
                                    validators: 'date'
                                },
                            ]
                        },
                        {
                            xtype: 'button',
                            scale: 'small',
                            iconCls: 'x-fa fa-search',
                            ui: 'action',
                            handler: 'filterContributions'
                        },
                        {
                            iconCls: 'fa fa-redo',
                            handler: 'reloadContributionsGrid',
                            ui: 'action'
                        },
                        {
                            text: '',
                            iconCls: 'x-fa fa-print',
                            scale: 'small',
                            ui: 'action',
                            handler: 'exportDocument',
                            hidden: true
                        },
                        // ''
                    ]
                },
                {
                    cls: 'module-body',
                    xtype: 'container',

                    items: [{
                        xtype: 'membercontributionsgrid',
                        margin: '10 0 0 0'
                    }]
                }
            ]
        },]
    }]
});