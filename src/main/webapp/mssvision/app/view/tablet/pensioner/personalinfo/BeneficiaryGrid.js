Ext.define('MssPhoenix.view.tablet.pensioner.personalinfo.BeneficiaryGrid', {
    extend: 'MssPhoenix.view.widgets.Table',

    xtype: 'pensionerbeneficiarygrid',
    maxHeight: 250,
    controller:'basecontroller',

    // width: '65%',

    store: {
        type: 'pensionerbeneficiary'
    },
    scrollable: true,
    minHeight: 200,

    columns: [
        {text: 'FIRST NAME', dataIndex: 'firstname', flex: 1},
        {text: 'SURNAME', dataIndex: 'surname', flex: 1},
        {text: 'RELATIONSHIP', dataIndex: 'relationship', flex: 1},
        {text: 'ENTITLEMENT', dataIndex: 'lumpsumEntitlement', flex: 1},
        {text: 'STATUS', dataIndex: 'status', flex: 1},
        {
            text: ':::', flex: 1, renderer: function (v) {
                return `<a href="javascript:void(0)">View / Edit</a>`;
            },
            cell: {
                encodeHtml: false
            },
        },
    ],
    listeners: {
        click: {
            element: 'element', //bind to the underlying el property on the panel
            fn: 'onGridSelection'
        },
        // dblclick: {
        //     element: 'element', //bind to the underlying body property on the panel
        //     fn: 'onGridSelection'
        // }
    }
});