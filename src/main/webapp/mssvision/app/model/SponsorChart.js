Ext.define('MssPhoenix.model.SponsorChart', {
    extend: 'MssPhoenix.model.Base',
    fields: [
     
        { name: 'id', type: 'integer' },
        { name: 'dateGenerated', type: 'string' },
        { name: 'dateDue', type: 'string' },
        { name: 'period', type: 'string' },
        { name: 'particulars', type: 'string' },
        { name: 'salary', type: 'string' },
        { name: 'ee', type: 'string'},
        { name: 'er', type: 'string'},
        { name: 'total', type: 'string'},
        { name: 'schemeDocument', type: 'string'},
        
    ]

});