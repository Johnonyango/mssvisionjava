Ext.define('MssPhoenix.model.pensioner.Payrolls', {
    extend: 'MssPhoenix.model.Base',
    fields: [
            
        // The fields for this model. This is an Array of Ext.data.field.Field definition objects or simply the field name.
        // If just a name is given, the field type defaults to auto.  For example:
            { name: 'Month',     type: 'string' },
            { name: 'Year',  type: 'string'},
            { name: 'Gross',},
            { name: 'Deductions',},
            { name: 'Tax', },
            { name: 'NetPension',},
            { name: 'Arrears',},
            { name: 'TaxOnArrears',},
            { name: 'Paid Pension',}

        
    ]
});