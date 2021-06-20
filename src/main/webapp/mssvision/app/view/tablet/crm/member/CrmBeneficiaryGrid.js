Ext.define('MssPhoenix.view.tablet.crm.member.CrmBeneficiaryGrid', {
    extend: 'MssPhoenix.view.widgets.Table',

    xtype: 'crmmemberbeneficiarygrid',

    // width: '65%',
    controller:'crmbeneficiarycontroller',

    store: {
        type: 'crmmemberbeneficiaries'
    },
    
    height:300,

    columns: [
        { text: 'FIRST NAME', dataIndex: 'firstname', flex: 1 },
        { text: 'SURNAME', dataIndex: 'surname', flex: 1 },
        { text: 'RELATIONSHIP', dataIndex: 'relationship', flex: 1 },
        { text: 'ENTITLEMENT', dataIndex: 'lumpsumEntitlement',align: 'center', flex: 1 },
        { text: 'DATE ADDED', dataIndex: 'dateOfAppointment', flex: 1 },
    ]
});