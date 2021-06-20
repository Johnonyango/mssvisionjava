Ext.define('MssPhoenix.model.MemberClaims', {
    extend: 'MssPhoenix.model.Base',

    fields: [
        { name: 'isPercentageOrAmount'},
        { name: 'totalAmount'},
        { name: 'amountPercentage'},
        { name: 'benefitReason'},
        { name: 'shortCreatedDate'},
        { name: 'status'},
    ]
});