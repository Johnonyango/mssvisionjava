Ext.define('MssPhoenix.view.phone.sponsor.home.Home', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',
    xtype: 'sponsorhome',
    reference: 'sponsorhome',
    controller:'sponsorhomecontroller',
    viewModel: 'sponsorhomevmodel',
    layout: {
        type:'vbox',
        align: 'stretch'
    },
    margin: '0 10 0 0',
    defaults: {
        border: false
    },
    cls: 'mainpanel',
    //scrollable:'x',
    scrollable:true,
    
    items: [
      

        {
            xtype: 'sponsorstatustilesphone'
        }, 
        {
            xtype: 'sponsorcontributionschartphone'
        },
       
        {
           xtype: 'sponsorbillsphone',
        },
     
    ]

});