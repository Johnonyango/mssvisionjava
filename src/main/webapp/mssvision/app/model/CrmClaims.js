Ext.define('MssPhoenix.model.CrmClaims', {
    extend: 'MssPhoenix.model.Base',
    fields: [
        'id',
        'memberNo',
        'memberName',
        'benefitReason',
        'totalAmount',
        'amountPercentage',
        'isPercentageOrAmount',
        'displayAmountOrPercentage',
        'approvedStatus',
        'certifiedStatus',
        'authorizedStatus',
        'status',
        'displayStatus'

    ]

});