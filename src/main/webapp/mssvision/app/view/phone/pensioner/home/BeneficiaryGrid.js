Ext.define('MssPhoenix.view.phone.pensioner.personalinfo.BeneficiaryGrid', {
    extend: 'MssPhoenix.view.widgets.Table',

    xtype: 'phonepensionerbeneficiarygrid',
    maxHeight: 250,
    controller:'basecontroller',

    // width: '65%',

    store: {
        type: 'pensionerbeneficiary'
    },
    scrollable: true,
    minHeight: 200,

    columns: [
        { text: 'FIRST NAME', dataIndex: 'firstname', flex: 1 },
        { text: 'SURNAME', dataIndex: 'surname', flex: 1 },
        { text: 'RELATIONSHIP', dataIndex: 'relationship', flex: 1 },
        { text: 'ENTITLEMENT', dataIndex: 'lumpsumEntitlement', align: 'center', flex: 1 },
        {
            text: 'DATE ADDED',
            dataIndex: 'dateOfAppointment',
            renderer:'formatBeneficiaryGrid',
            cell: {
                encodeHtml: false
            },
            flex: 1,
            hidden: true
        },
    ]
});