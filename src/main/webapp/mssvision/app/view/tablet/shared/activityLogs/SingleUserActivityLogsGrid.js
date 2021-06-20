
Ext.define('MssPhoenix.view.tablet.crm.activityLog.SingleUserActivityLogsGrid', {
    extend: 'MssPhoenix.view.widgets.Table',
    xtype: 'singleuseractivitylogsgrid',

    controller: 'activitylogsgridcontroller',

    height: 456,
    //title:'Test',
    store: {
        type: 'activitylog'
    },
    items:[  {
        xtype: 'toolbar',
        docked:'top',
        items: [
            {
                iconCls:'fa fa-redo',
                handler: 'reloadActivitiesGrid',
                ui: 'action'
            }, 
            {
                xtype: 'formpanel',
                reference:'filterlogs',
                itemId: 'filterlogs',
                layout: {
                    type: 'hbox',
                },
                items: [
                 
                    {
                        xtype: 'midatefield',
                        name: 'dateFrom',
                        dateFormat:'d-m-Y',
                        placeholder: 'From Date',
                        tooltip: 'Specify start date',
                        maxDate: new Date(),
                    },
                    {
                        margin: '0 0 0 10',
                        xtype: 'midatefield',
                        dateFormat:'d-m-Y',
                        name: 'dateTo',
                        placeholder: 'End Date',
                        tooltip: 'Specify end date',
                        maxDate: new Date(),
                        value: new Date(),
                        flex: 1
                    },
                    {
                        margin: '0 0 0 5',
                        xtype: 'button',
                        scale: 'small',
                        iconCls: 'x-fa fa-search',
                        ui: 'action',
                        handler: 'filterLogs'
                    },
                ]
            }, 
            '->',
            {
                xtype: 'formpanel',
                reference:'searchlogs',
                itemId: 'searchlogs',
                fieldDefaults: {
                    labelWidth: 30
                },
                layout: {
                    type: 'hbox'
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
                        xtype: 'button',
                        scale: 'small',
                        iconCls: 'x-fa fa-search',
                        ui: 'action',
                        handler: 'searchLogs'
                    },
     
                ]
            },
            {
                text: '',
                iconCls: 'x-fa fa-print',
                scale: 'small',     
                ui:'action'
            },

        ]
    }],
    columns: [
        { text: 'Activity', dataIndex: 'description', flex: 1 },
        { text: 'Date', dataIndex: 'shortDateTime', flex: 1 },
    ],
    loadMask:true

});
