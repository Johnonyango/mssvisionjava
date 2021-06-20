Ext.define('MssPhoenix.model.pensioner.PayrollDeductions', {
    extend: 'MssPhoenix.model.Base',

    fields: [
        {name: 'id'},
        {name: 'amount'},
        {name: 'caseNo'},
        {name: 'startDate'},
        {name: 'stopped'},
        {name: 'pensionerId'},
        {name: 'attachmentDate'},
        {name: 'attachmentMode'},
        {name: 'branchId'},
        {name: 'accountName'},
        {name: 'accountNumber'},
        {name: 'paywithP'},
        {name: 'percentage'},
        {name: 'stoppageReason'},
        {name: 'dayOfWeek'},
        {name: 'typeId'},
        {name: 'typeName'},
    ]
});