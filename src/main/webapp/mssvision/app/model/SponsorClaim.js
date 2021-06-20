Ext.define('MssPhoenix.model.SponsorClaim', {
    extend: 'MssPhoenix.model.Base',

    fields: [
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
        'status'

    ]

});
