Ext.define('MssPhoenix.view.tablet.sponsor.bills.BillsGrid', {
    extend: 'MssPhoenix.view.widgets.Table',

    xtype: 'sponsorbillsgrid',
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

    items: [
        {
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
                        items: [
                            {
                                text: 'Validate Bill',
                                ui: 'action',
                                handler: 'ProcessBillActionBtnClick'
                            },
                            {
                                text: 'Cancel Bill',
                                ui: 'action',
                                handler: 'CancelBillActionBtnClick'
                            },
                        ],
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
                {
                    bind: {
                        style: {
                            'display': '{isBookBill}'
                        }
                    },
                    text: 'Book Contribution Bills',
                    handler: 'onBookContributionBillClick',
                    ui: 'action'
                },

                {
                    text: '',
                    iconCls: 'x-fa fa-print',
                    scale: 'small',
                    ui: 'action',

                },
            ]
        }
    ],
    columns: [
        {text: 'Id', dataIndex: 'id', flex: 1, hidden:true},
        {text: 'Booking Invoice Date', dataIndex: 'billDate', flex: 1},
        {text: 'Expected Payment Date', dataIndex: 'expectedPaymentDate', flex: 1},
        {text: 'Period', dataIndex: 'contributionMonthYear', flex: 1},
        {text: 'Sponsor Name', dataIndex: 'sponsorName', hidden: true, flex: 1},
        {text: 'Bill Reference No', dataIndex: 'billRefNo', flex: 1},
        {
            text: 'Validated', dataIndex: 'validated',
            cell: {
                encodeHtml: false,
                align: 'center'
            },
            renderer: 'formatYesOrNoDisplay', flex: 1
        },
        {
            text: 'Certified', dataIndex: 'certified',
            cell: {
                encodeHtml: false,
            },
            renderer: 'formatYesOrNoDisplay', flex: 1
        },

        {
            text: 'Approved', dataIndex: 'approved',
            cell: {
                encodeHtml: false,

            },
            renderer: 'formatYesOrNoDisplay', flex: 1
        },

        {
            text: 'Amount',
            dataIndex: 'amount',
            cell: {
                encodeHtml: false,
                align: 'right'
            },
            align: 'center',
            flex: 1,
            renderer: 'renderMoneyColumnBold'
        },

        {
            text: 'Bill Document',
            dataIndex: 'fileName',
            flex: 1,
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


