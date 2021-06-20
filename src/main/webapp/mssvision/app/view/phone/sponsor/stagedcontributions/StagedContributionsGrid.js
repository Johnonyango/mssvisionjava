
Ext.define('MssPhoenix.view.phone.sponsor.stagedcontributions.StagedContributionsGrid', {
    extend: 'MssPhoenix.view.widgets.Table',

    xtype: 'stagedcontributionsphonegrid',
    viewModel: {
        type: 'stagedcontributionsgridvmodel'
    },

    height:500,
    layout:'fit',
    selectable: {
        columns: true,
        checkbox: true,
        extensible: 'y',
        mode:'single'
    },
    

    store: {
        type: 'stagedcontributions'
    },
    controller: 'stagedcontributionsgridcontroller',
    
    requires: [
        'Ext.grid.plugin.PagingToolbar'
    ],
    plugins: {
        gridpagingtoolbar: true
    },

    items:[  {
        xtype: 'toolbar',
        docked:'top',
        items: [
            {
                iconCls:'fa fa-redo',
                handler: 'reloadStagedContributionsGrid',
                ui: 'action'
            },  
            {
                bind: {
                    style: {
                        'display': '{isSendToFm}'
                    }
                },
                text: 'Send to FundMaster',
                handler: 'onSendToFMbtnClick',
                id: 'btnSendToFM',
                ui:'action'
            },
        ]
    }],

    columns: [
        { text: 'Member Id',  dataIndex: 'memberId', flex:1,hidden:true},
        { text: 'Member Name',  dataIndex: 'memberName', flex:1},
        { text: 'Phone Number',  dataIndex: 'phoneNumber', flex:1,hidden:true},
        { text: 'Amount',  
        dataIndex: 'amount',
        cell: {
            encodeHtml: false,
            align: 'right'
        },
        align: 'center',
        flex:1,
        renderer: 'renderMoneyColumnBold'},
        { text: 'Date Contributed',  dataIndex: 'shortCreatedDate', flex:1,hidden:true},
       //{ text: 'Request Id',  dataIndex: 'requestId',flex:1},
        { text: 'Status',  dataIndex: 'sendToXi', flex:1,
        renderer: 'formatStagedContributionStatus',
        cell: {
            encodeHtml: false
        }},
     ], 

    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        displayMsg: 'Display records {0} - {1} of {2}',
        emptyMsg: 'No Record to display'
    },

  
});


