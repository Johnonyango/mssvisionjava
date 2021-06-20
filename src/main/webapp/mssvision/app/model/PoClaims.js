Ext.define('MssPhoenix.model.PoClaims', {    
    extend: 'MssPhoenix.model.Base',

    fields: [
        'id',
        'memberNo',
        'member',
        'paymentType',
        'exitCategory',
        'dateOfCalc',
        'dateApproved',
        'dateProcessed',
        'servicePeriod',
        'preparedBy',
        'certifiedBy',
        'approvedBy',
        'processedBy'
    ]

});