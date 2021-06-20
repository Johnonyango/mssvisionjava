Ext.define('MssPhoenix.view.tablet.pensioner.deductions.Deductions', {
    extend: 'MssPhoenix.view.widgets.Module',

    // xtype: 'pensionerdeductions',

    listeners: {
        documentsave: 'onDocumentSave',
        beforedocumentsave: 'onBeforeDocumentSave',
    },
    viewModel:{
        type:'deductionsvmodel'
    },
    height: 456,
    controller:'pensionerdeductionsgridcontroller',
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
                            xtype: 'component',
                            maxWidth: 256,
                            margin: '0 0 0 20',
                            bind: {
                                html: '{iconInfo} <span style="color: #002c65; font-weight: 700">A record of Payroll Deductions ({currency}).</span>'
                            }
                        },
                        '->',
                        // {
                        //     xtype: 'formpanel',
                        //     reference: 'filterDeductions',
                        //     itemId: 'filterDeductions',
                        //     layout: {
                        //         type: 'hbox',
                        //     },
                        //     items: [
                        //         {
                        //             xtype: 'midatefield',
                        //             // label: 'From',
                        //             name: 'fromDate',
                        //             placeholder: 'From Date',
                        //             tooltip: 'Specify start date',
                        //             maxDate: new Date(),
                        //         },
                        //         {
                        //             margin: '0 0 0 10',
                        //             xtype: 'midatefield',
                        //             // label: 'To',
                        //             name: 'toDate',
                        //             placeholder: 'End Date',
                        //             tooltip: 'Specify end date',
                        //             maxDate: new Date(),
                        //             value: new Date(),
                        //             flex: 1
                        //         },
                        //     ]
                        // },
                        // {
                        //     xtype: 'button',
                        //     scale: 'small',
                        //     iconCls: 'x-fa fa-search',
                        //     ui: 'action',
                        //     handler: 'filterDeductions'
                        // },
                        {
                            iconCls: 'fa fa-redo',
                            handler: 'reloadDeductionsGrid',
                            ui: 'action'
                        },
                        // {
                        //     text: '',
                        //     iconCls: 'x-fa fa-print',
                        //     scale: 'small',
                        //     ui: 'action',
                        //     handler: 'exportDocument',
                        //     hidden: true
                        // },
                        // ''
                    ]
                },
                {
                    cls: 'module-body',
                    xtype: 'container',

                    items: [{
                        xtype: 'pensionerdeductionsgrid',
                        margin: '10 0 0 0'
                    }]
                }
            ]
        },]
    }]

});