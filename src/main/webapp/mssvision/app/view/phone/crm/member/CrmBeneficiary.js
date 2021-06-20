Ext.define('MssPhoenix.view.phone.crm.member.CrmBeneficiary', {
    extend: 'MssPhoenix.view.widgets.Module',

    xtype: 'crmphonememberbeneficiary',
    layout: 'vbox',

    margin: '60 0 0 0',
    items: [
        {
            margin:'50 0 0 0',
            xtype: 'container',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [

                //beneficiary chart
                {
                    xtype: 'crmmemberbeneficiarychart',
                    flex: 1,
                    margin:'0 0 0 20',
                },
                //beneficiary grid
                {
                    margin:'0 0 0 0',
                    xtype: 'phonecrmmemberbeneficiarygrid',
                    flex: 1,
                    height:300,
                }
            ]
        },

    ]
    
});