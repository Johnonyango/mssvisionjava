Ext.define('MssPhoenix.view.tablet.sponsor.tpfa.TPFAGrid', {
    extend: 'MssPhoenix.view.widgets.Table',

    xtype: 'tpfagrid',
    height:500,
    layout:'fit',
    controller:'tpfagridcontroller',
  
     selectable: {
        columns: true,
        cells: true,
        checkbox: true,
        drag: true,
        extensible: 'y',
        mode:'single'
    },
    requires: [
        'Ext.grid.plugin.PagingToolbar'
    ],
    plugins: {
        gridpagingtoolbar: true
    },
    store: {
        type: 'sponsormembertpfa'
    },
 
    

    items:[  {
        xtype: 'toolbar',
        docked:'top',
        items: [
            {
                iconCls:'fa fa-redo',
                handler: 'reloadTpfaGrid',
                ui: 'action'
            }, 
            '->',
            {
                text: 'Status',
                ui: 'action',
                menu: {
                    defaults: {},
                    items: [
                        {
                            text: 'RECEIVED',
                            ui: 'action',
                            handler: 'ReceivedBtnClick'
                        },
                        {
                            text: 'REQUESTED',
                            ui: 'action',
                            handler: 'RequestedBtnClick'
                        },
                        {
                            text: 'UNQUALIFIED',
                            ui: 'action',
                            handler: 'UnqualifiedBtnClick'
                        },
                    ],
                }
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
        { text: 'Id',  dataIndex: 'id' , flex:1, hidden:true},
        { text: 'Member Id',  dataIndex: 'memberId' , flex:1, hidden:true},
        { text: 'Membership No',  dataIndex: 'membershipNo' , flex:1},
        { text: 'Name',  dataIndex: 'name' , flex:1},
        { text: 'Requested Date',  dataIndex: 'requestedDate', flex:1},
        { text: 'Received Date',  dataIndex: 'receivedDate', flex:1 },
        { text: 'Receipt Status',  dataIndex: 'receiptStatus', flex:1},
        { text: 'EE', dataIndex: 'ee', flex:1, 
        cell: {
            encodeHtml: false,  
            align: 'right'
        },
        renderer: 'renderMoneyColumnBold'},
        { text: 'ER', dataIndex: 'er', flex:1,
        cell: {
            encodeHtml: false,
            align: 'right'
        },
        renderer: 'renderMoneyColumnBold'},

        { text: 'AVC', dataIndex: 'avc', flex:1,
        cell: {
            encodeHtml: false,
            align: 'right'
        },
        renderer: 'renderMoneyColumnBold'},

        { text: 'AVCER', dataIndex: 'avcer', flex:1,
        cell: {
            encodeHtml: false,
            align: 'right'
        },
        renderer: 'renderMoneyColumnBold'},
        { text: 'Exception', dataIndex: 'exception', flex:1, hidden:true}
        

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
