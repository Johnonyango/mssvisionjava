Ext.define('MssPhoenix.view.phone.pensioner.payrolls.Payrolls', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',

    xtype: "pensionerpayrolls",

    viewModel: {
        type: 'payrollvmodel'
    },
    controller: 'pensionerPayrollscontroller',

    height: 456,
    
    layout: {
        type: 'vbox'
    },

    defaults:{
        width:'100%'
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
                    layout: {
                        type: 'hbox',
                    },
                    // ui: 'tools',
                    items: [
                        {
                            xtype: 'formpanel',
                            reference: 'filterPayrolls',
                            itemId: 'filterPayrolls',
                            layout: {
                                type: 'vbox',
                            },
                            items: [
                                {
                                    xtype: 'micombobox',
                                    queryMode: 'local',
                                    id: 'month',
                                    displayField: 'name',
                                    name: 'month',
                                    placeholder: 'Pick Month',
                                    valueField: 'name',
                                    margin: '0 0 0 5',
                                    listeners: {
                                        specialkey: 'filterPayrolls'
                                    },
                                    store: [
                                        { name: 'January' },
                                        { name: 'February' },
                                        { name: 'March' },
                                        { name: 'April' },
                                        { name: 'May' },
                                        { name: 'June' },
                                        { name: 'July' },
                                        { name: 'August' },
                                        { name: 'September' },
                                        { name: 'October' },
                                        { name: 'November' },
                                        { name: 'December' }
                                    ]
                                },
                                {
                                    xtype: 'selectbox',
                                    store: {
                                        type: 'years'
                                    },

                                    displayField: 'years',
                                    name: 'year',
                                    margin: '0 0 0 6',
                                    id: 'year',
                                    placeholder: 'pick year',
                                    valueField: 'years',
                                    listeners: {
                                        specialkey: 'filterPayrolls'
                                    },
                                    flex: 1,
                                },
                            ]
                        },
                        {
                            xtype: 'button',
                            scale: 'small',
                            iconCls: 'x-fa fa-search',
                            ui: 'action',
                            handler: 'filterPayrolls'
                        },
                        {
                            iconCls: 'fa fa-redo',
                            handler: 'reloadPayrollsGrid',
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
                        xtype: 'phonepensionerpayrollgrid',
                        margin: '10 0 0 0'
                    }]
                }
            ]
        },]
    }]


});
