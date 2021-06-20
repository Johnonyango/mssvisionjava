Ext.define('MssPhoenix.view.tablet.crm.member.CrmBeneficiary', {
    extend: 'MssPhoenix.view.widgets.Module',

    xtype: 'crmmemberbeneficiary',
    layout: 'vbox',

    margin: '60 0 0 0',
    items: [
        {
            margin:'50 0 0 0',
            xtype: 'container',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [

                // {
                //     xtype: 'component',
                //     cls: 'module-head',
                //     html: '<h3>Beneficiaries</h3>'
                // },
                //beneficiary grid
                {
                    margin:'0 0 0 0',
                    cls: 'module-body',
                    xtype: 'crmmemberbeneficiarygrid',
                    flex: 2
                },
                //beneficiary chart
                
                {
                    xtype: 'crmmemberbeneficiarychart',
                    flex: 1,
                    margin:'0 0 0 20',
                },
            ]
        },

    ]
    
});