Ext.define('MssPhoenix.view.tablet.principalofficer.personalinfo.claims.PaidClaimsGrid', {
    extend: 'MssPhoenix.view.widgets.Table',
    xtype : 'paidclaimsgrid',     
    controller:'poclaimscontroller',
    plugins: {
        gridpagingtoolbar: true
    },
    store: {
        type: 'paidclaims'
    },
    scrollable: true,
    minHeight: 256,
    items: [{
        xtype: 'toolbar',
        docked: 'top',
        items: [
            '->',

            {
                xtype: 'formpanel',
                reference: 'filtepaidclaims',
                itemId: 'filterpaidclaims',
                layout: {
                    type: 'hbox',
                },
                items: [

                    {
                        xtype: 'midatefield',
                        name: 'dateFrom',
                        placeholder: 'Date From',
                        tooltip: 'Specify start date',
                        dateFormat:'d-m-Y',
                        maxDate: new Date(),
                    },
                    {
                        margin: '0 0 0 10',
                        xtype: 'midatefield',
                        name: 'dateTo',
                        placeholder: 'Date To',
                        tooltip: 'Specify end date',
                        dateFormat:'d-m-Y',
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
                        handler: 'filterPaidClaims'
                    },
                ]
            },
            {
                iconCls: 'fa fa-redo',
                handler: 'reloadPaidClaimsGrid',
                ui: 'action'
            },
        ]
    }],
    columns: [
        {
            text: 'Claim Id',
            dataIndex: 'id',
            flex: 1,
            hidden: true
        },
        {
            text: 'Member No',
            dataIndex: 'memberNo',
            flex: 1,
            hidden: true
        },
        {
            text: 'Member Name',
            dataIndex: 'member',
            flex: 2
        },
        {
            text: 'Payment Type',
            dataIndex: 'paymentType',
            flex: 1
        },
        {
            text: 'Exit Category',
            dataIndex: 'exitCategory',
            flex: 1
        },
        {
            text: 'Gross Pay',
            dataIndex: 'gross',
            renderer:'moneyFormatFunc',
            align: 'center',
            flex: 2
        },
        {
            text: 'Net Payment',
            dataIndex: 'netPayment',
            renderer:'moneyFormatFunc',
            align: 'center',
            flex: 2
        },
        {
            text: 'Date  Calculated',
            dataIndex: 'dateOfCalc',
            flex: 2,
            hidden: true
        },
        {
            text: 'Date  Approved',
            dataIndex: 'dateApproved',
            flex: 2, 
            hidden: true
        },
        {
            text: 'Date  Processed',
            dataIndex: 'dateProcessed',
            flex: 2,
            hidden: true
        },
        {
            text: 'Service period',
            dataIndex: 'servicePeriod',
            flex: 1,
            hidden: true
        },
        {
            text: 'Prepared By',
            dataIndex: 'preparedBy',
            flex: 1,
            hidden: true
        },
        {
            text: 'Certified By',
            dataIndex: 'certifiedBy',
            flex: 1,
            hidden: true
        },
        {
            text: 'Approved By',
            dataIndex: 'approvedBy',
            flex: 1,
            hidden: true
        },
        {
            text: 'Processed By',
            dataIndex: 'processedBy',
            flex: 1,
            hidden: true
        },
    ]
});