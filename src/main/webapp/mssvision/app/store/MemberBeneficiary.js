Ext.define('MssPhoenix.store.MemberBeneficiary', {
    extend: 'Ext.data.Store',

    alias: 'store.memberbeneficiary',

    fields: [{
            name: "firstname"
        },
        {
            name: "gender"
        },
        {
            name: "hasTrustFund"
        },
        {
            name: "monthlyEntitlement"
        },
        {
            name: "mstatus"
        },
        {
            name: "trustBalance"
        },
        {
            name: "taxpin"
        },
        {
            name: "idNo"
        },
        {
            name: "nominationFormNo"
        },
        {
            name: "lumpsumEntitlement"
        },
        {
            name: "attachment"
        },
        {
            name: "surname"
        },
        {
            name: "othernames"
        },
        {
            name: "beneficiaryNo"
        },
        {
            name: "id"
        },
        {
            name: "relationship"
        },
        {
            name: "birthCert"
        },
        {
            name: "physicalCondition"
        },
        {
            name: "memberId"
        },
        {
            name: "address"
        },
        {
            name: "lumpsumEntitlementTotal"
        },
        {
            name: "documentProvided"
        },
        {
            name: "memberNo"
        },
        {
            name: "partnerNumber"
        },
        {
            name: "dob"
        },
        {
            name: "name"
        },
        {
            name: "dateOfAppointment"
        },
        {
            name: "attachmentName"
        },
        {
            name: "category"
        },
        {
            name: "age"
        },
        {
            name: "status"
        },
        {
            name: "trustFund"
        },
    ],

    proxy: {
        type: 'ajax',
        url: `${MssPhoenix.model.Session.baseUrl}/api/getBeneficiaries/${MssPhoenix.model.Session.getUserId()}/${MssPhoenix.model.Session.getMemberId()}`,
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },

    storeId:'memberbeneficiary',
    autoLoad: true,
    pageSize: 10,
});