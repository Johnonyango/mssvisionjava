Ext.define('MssPhoenix.view.tablet.shared.activitylog.MultiUserActivityLogsGrid', {
    extend: 'MssPhoenix.view.widgets.Table',
    xtype: 'multiuseractivitylogsgrid',

    controller:'activitylogsgridcontroller',
    
    store: {
        type: 'multiuseractivitylogs'
    },
    requires: [
        'Ext.grid.plugin.PagingToolbar'
    ],
    plugins: {
        gridpagingtoolbar: true
    },
    height:500, 
 
    items:[  {
        xtype: 'toolbar',
        docked:'top',
        items: [
            {
                iconCls:'fa fa-redo',
                handler: 'multiReloadActivitiesGrid',
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
                        handler: 'multiFilterLogs'
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
                        handler: 'multiSearchLogs'
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
       // { text: 'User Name',  dataIndex: 'userName', flex: 1 },
       { text: 'User Name', dataIndex: 'userName', flex: 1 },
       { text: 'Profile', dataIndex: 'profile', flex: 1 },
        { text: 'Activity',  dataIndex: 'description', flex: 1 },
        { text: 'TimeStamp',  dataIndex: 'shortDateTime', flex: 1 },
      //  { text: 'Ip Address',  dataIndex: 'ipaddress' , flex: 1},
     
        

    ],
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        displayMsg: 'Display records {0} - {1} of {2}',
        emptyMsg: 'No Record to display'
    },

    listeners: {
        select: 'onItemSelected'
    }
});
