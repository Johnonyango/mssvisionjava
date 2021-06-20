Ext.define('MssPhoenix.view.tablet.pensioner.home.RecentPayrolls', {
    extend: 'Ext.Container',
    
    xtype:'recentpayrolls',

    viewModel: {
        type: 'payrollvmodel'
    },
    controller: 'recentpayrollscontroller',

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
                                html: '{iconInfo} <span style="color: #002c65; font-weight: 700">A record of payrolls. ({currency})</span>'
                            }
                        },
                        '->',
                        {
                            xtype: 'formpanel',
                            reference: 'filterPayrolls',
                            itemId: 'filterPayrolls',
                            layout: {
                                type: 'hbox',
                            },
                            items: [
                                {
                                    xtype: 'micombobox',
                                    queryMode: 'local',
                                    id: 'monthId',
                                    displayField: 'name',
                                    name: 'monthId',
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
                                    name: 'yearId',
                                    margin: '0 0 0 6',
                                    id: 'yearId',
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
                        xtype: 'recentpayrollsgrid',
                        margin: '10 0 0 0'
                    }]
                }
            ]
        },]
    }]

});