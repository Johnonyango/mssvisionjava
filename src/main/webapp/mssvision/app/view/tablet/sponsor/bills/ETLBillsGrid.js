Ext.define('MssPhoenix.view.tablet.sponsor.bills.ETLBillsGrid', {
    extend: 'MssPhoenix.view.widgets.Table',

    xtype: 'sponsorbillsgridetl',

    viewModel: {
        type: 'billsgridvmodel'
    },

    height: 500,
    layout: 'fit',
    selectable: {
        columns: true,
        checkbox: true,
        extensible: 'y',
        mode: 'single'
    },


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

    items: [{
        xtype: 'toolbar',
        docked: 'top',
        items: [
            {
                iconCls: 'fa fa-redo',
                handler: 'reloadBillsGrid',
                ui: 'action'
            },
            {
                text: 'Actions',
                ui: 'action',
                menu: {
                    defaults: {},
                    items: [{
                        text: 'Validate Bill',
                        ui: 'action',
                        handler: 'ProcessBillActionBtnClick'
                    },
                        // {
                        //     text: 'Email Bill',
                        //     ui: 'action',
                        //     handler: 'EmailBillActionBtnClick'
                        // },
                        {
                            text: 'Cancel Bill',
                            ui: 'action',
                            handler: 'CancelBillActionBtnClick'
                        },],


                }
            },
            '->',
            {
                xtype: 'formpanel',
                reference: 'searchbills',
                itemId: 'searchbills',
                layout: {
                    type: 'hbox',
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
                        handler: 'searchBills'
                    },

                ]
            },

            {
                xtype: 'formpanel',
                reference: 'filterbills',
                itemId: 'filterbills',
                layout: {
                    type: 'hbox',
                },
                items: [

                    {
                        xtype: 'midatefield',
                        name: 'dateFrom',
                        placeholder: 'From Date',
                        tooltip: 'Specify start date',
                        maxDate: new Date(),
                    },
                    {
                        margin: '0 0 0 10',
                        xtype: 'midatefield',
                        // label: 'To',
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
                        handler: 'filterBills'
                    },
                ]
            },
            // {
            //     text: 'Book Contribution Bills',
            //     handler: 'onBookContributionBillClick',
            //     id: 'btnBookContribBills',
            //     ui:'action'
            // },

            {
                bind: {
                    style: {
                        'display': '{isBookBill}'
                    }
                },
                text: 'Book Contribution Bills',
                // scale: 'small',
                handler: 'onBookContributionBillClick',
                id: 'btnBookContribBills',
                ui: 'action'
            },


            {
                text: '',
                iconCls: 'x-fa fa-print',
                scale: 'small',
                ui: 'action',

            },
        ]
    }],
    columns: [
        {text: 'Booking', dataIndex: 'dateGenerated', flex: 1},
        {text: 'Expected Payment Date', dataIndex: 'dateDue', flex: 1},
        {text: 'Period', dataIndex: 'period', flex: 1},
        {text: 'Sponsor Name', dataIndex: 'sponsor', hidden: true, flex: 1},

        {text: 'Particulars', dataIndex: 'particulars', flex: 1},
       
        {
            text: 'Amount',
            dataIndex: 'total',
            cell: {
                encodeHtml: false,
                align: 'right'
            },
            align: 'center',
            flex: 1,
            renderer: 'renderMoneyColumnBold'
        },
        {text: 'Status', dataIndex: 'status', flex: 1},
        {
            text: 'Bill Document',
            dataIndex: 'documentUrl',
            flex: 1,
            renderer: function (v) {
                return `<a target="_blank" href="${MssPhoenix.model.Session.fileUploadPath}/bookBill?id=${v}">Download</a>`;
            },
            cell: {
                encodeHtml: false,

            },
        }
    ],

    // columns: [
    //     {text: 'Booking Invoice Date', dataIndex: 'billDate', flex: 1},
    //     {text: 'Expected Payment Date', dataIndex: 'expectedPaymentDate', flex: 1},
    //     {text: 'Period', dataIndex: 'contributionMonthYear', flex: 1},
    //     {text: 'Sponsor Name', dataIndex: 'sponsorName', hidden: true, flex: 1},
        

    //     {text: 'Bill Reference No', dataIndex: 'billRefNo', flex: 1},
    //     {
    //         text: 'Validated', dataIndex: 'validated',
    //         cell: {
    //             encodeHtml: false,
    //             align: 'center'
    //         },
    //         renderer: 'formatYesOrNoDisplay', flex: 1
    //     },

    //     {
    //         text: 'Certified', dataIndex: 'certified',
    //         cell: {
    //             encodeHtml: false,

    //         },
    //         renderer: 'formatYesOrNoDisplay', flex: 1
    //     },

    //     {
    //         text: 'Approved', dataIndex: 'approved',
    //         cell: {
    //             encodeHtml: false,

    //         },
    //         renderer: 'formatYesOrNoDisplay', flex: 1
    //     },

    //     {
    //         text: 'Amount',
    //         dataIndex: 'amount',
    //         cell: {
    //             encodeHtml: false,
    //             align: 'right'
    //         },
    //         align: 'center',
    //         flex: 1,
    //         renderer: 'renderMoneyColumnBold'
    //     },

    //     {
    //         text: 'Bill Document',
    //         dataIndex: 'fileName',
    //         flex: 1,
    //         renderer: function (v) {
    //             return `<a target="_blank" href="${MssPhoenix.model.Session.fileUploadPath}/bookBill?id=${v}">Download</a>`;
    //         },
    //         cell: {
    //             encodeHtml: false,

    //         },
    //     }
    // ],

    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        displayMsg: 'Display records {0} - {1} of {2}',
        emptyMsg: 'No Record to display'
    },


});


