Ext.define('MssPhoenix.view.tablet.sponsor.members.BeneficiaryGrid', {
    extend: 'MssPhoenix.view.widgets.Table',

    xtype: 'sponsormemberbeneficiarygrid',

    // width: '65%',

    store: {
        type: 'sponsormemberbeneficiary'
    },

    columns: [
        { text: 'Name', dataIndex: 'Name', flex: 2 },
        { text: 'Relationship', dataIndex: 'Relationship', flex: 1 },
        { text: 'Entitlement', dataIndex: 'Entitlement', flex: 1 },
        { text: 'Action', flex: 1 }
    ]
});