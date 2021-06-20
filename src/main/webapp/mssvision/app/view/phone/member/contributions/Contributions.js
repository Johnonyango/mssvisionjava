Ext.define('MssPhoenix.view.phone.member.contributions.Contributions', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',

    controller: 'membercontributionscontroller',

    listeners: {
        documentsave: 'onDocumentSave',
        beforedocumentsave: 'onBeforeDocumentSave',
    },
    viewModel:{
        data:{
            allowMakeContribution :'none'
        }
    },
    items: [{
        xtype: 'container',
        padding: '15px',
        scrollable: true,
        items: [
            {
                xtype: 'button',
                width: '99%',
                text: 'Make contribution',
                ui: 'action',
                bind:{
                    style:{
                        'display':'{allowMakeContribution}'
                    },
                },
                menu: {
                    items: [{
                        text: 'Mobile money',
                        ui: 'action',
                        handler: 'makeContributionBtnClick'
                    }]
                },
            },

            {
                xtype: 'fieldset',
                title: 'Filter',
                margin: '10 0 0 0',
                items: [
                    {
                        xtype: 'formpanel',
                        reference: 'filtercontributions',
                        itemId: 'filtercontributions',
                        layout: {
                            type: 'vbox',
                        },
                        items: [
                            {
                                xtype: 'midatefield',
                                label: 'From',
                                name: 'fromDate',
                                labelAlign: 'left',
                                placeholder: 'From Date',
                                tooltip: 'Specify start date',
                                maxDate: new Date(),
                            },
                            {
                                margin: '0 0 0 0',
                                xtype: 'midatefield',
                                label: 'To',
                                labelAlign: 'left',
                                name: 'toDate',
                                placeholder: 'End Date',
                                tooltip: 'Specify end date',
                                maxDate: new Date(),
                                value: new Date(),
                                flex: 1
                            },
                        ],
                        bbar: [
                            '->',
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
                        ]
                    },
                ]
            },

            {
                cls: 'module-body',
                xtype: 'container',

                items: [{
                    xtype: 'memberphone-contributionsgrid',
                    margin: '10 0 0 0'
                }]
            }
        ]
    }]
});