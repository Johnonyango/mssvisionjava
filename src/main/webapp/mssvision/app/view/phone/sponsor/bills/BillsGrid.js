
Ext.define('MssPhoenix.view.phone.sponsor.bills.BillsGrid', {
    extend: 'MssPhoenix.view.widgets.Table',

    xtype: 'sponsorbillsphonegrid',

    height:500,
    selectable: {
        columns: true,
        checkbox: true,
        extensible: 'y',
        mode:'single'
    },

    scrollable:true,
    

    store: {
        type: 'sponsorbills'
    },
    controller: 'bookbillsgridcontroller',
    
    requires: [
        'Ext.grid.plugin.PagingToolbar'
    ],
    plugins: {
        gridpagingtoolbar: true
    },

    items:[  {
        xtype: 'toolbar',
        docked:'top',
        layout: {
            type: 'vbox',
        },
        items: [
            {
                iconCls:'fa fa-redo',
                handler: 'reloadBillsGrid',
                ui: 'action'
            },  
            {
                text: 'Actions',
                ui: 'action',
                menu: {
                    defaults: {
                       
                    },
                    items: [{
                        text: 'Validate Bill',
                        ui: 'action',
                        handler: 'ProcessBillActionBtnClick'
                    },
                    {
                        text: 'Cancel Bill',
                        ui: 'action',
                        handler: 'CancelBillActionBtnClick'
                    },],
               
                    
    
                }
            },
        {
            text: 'Book Contribution Bills',
            handler: 'onBookContributionBillClick',
            ui:'action'
        },
        // {
        //     text: '',
        //     iconCls: 'x-fa fa-print',
        //     scale: 'small',     
        //     ui:'action',

        // },
        ]
    }],

    columns: [
        { text: 'Booking Invoice Date',  dataIndex: 'billDate', flex:2,hidden:true},
        { text: 'Expected Payment Date',  dataIndex: 'expectedPaymentDate', flex:2,hidden:true},
        { text: 'Period',  dataIndex: 'contributionMonthYear', flex:2,hidden:true},
        { text: 'Sponsor Name',  dataIndex: 'sponsorName' ,hidden:true, flex:2},
       
         { text: 'Bill Reference No',  dataIndex: 'billRefNo',flex:3},
        { text: 'Validated',  dataIndex: 'validated',
        cell: {
            encodeHtml: false,
            align: 'center'
        },
        renderer: 'formatYesOrNoDisplay',  flex:2,hidden:true},
    
        { text: 'Certified',  dataIndex: 'certified',
        cell: {
            encodeHtml: false,
            
        },
        renderer: 'formatYesOrNoDisplay',  flex:2,hidden:true},

        { text: 'Approved',  dataIndex: 'approved',
        cell: {
            encodeHtml: false,
           
        },
        renderer: 'formatYesOrNoDisplay',  flex:2,hidden:true},

        { text: 'Amount',  
        dataIndex: 'amount',
        cell: {
            encodeHtml: false,
            align: 'right'
        },
        align: 'center',
        flex:2,
        renderer: 'renderMoneyColumnBold',hidden:true},
       
        {
            text: 'Bill Document',
            dataIndex: 'fileName',
            flex:1,
            renderer: function (v) {
                return `<a target="_blank" href="${MssPhoenix.model.Session.fileUploadPath}/bookBill?id=${v}">Download</a>`;
            },
            cell: {
                encodeHtml: false,
               
            },
        }  
     ], 

    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        displayMsg: 'Display records {0} - {1} of {2}',
        emptyMsg: 'No Record to display'
    },

  
});


