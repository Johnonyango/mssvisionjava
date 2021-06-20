Ext.define('MssPhoenix.view.phone.admin.LandingPageContent.ChangeLandingpage', {
    extend: 'Ext.tab.Panel',
    xtype: 'basic-tabs',
    controller: 'tab-view',

    width: 500,
    height: 1800,
   // maxHeight:1800,
   
    defaults: {
        bodyPadding: 10,
        scrollable: true
    },
    tabBar: {
        layout: {
            pack: 'left',
            
        }
    },
    items: [
        {
            
       title: 'LPC',
        xtype: 'phonelandingpage',
      
       
    },
    {
        
        title: 'UF',
        xtype: 'phoneadminuploadeddocuments',
    },            
            
    {
        title: 'CS',
        xtype: 'phoneconfigs',
    },
    {
        title: 'MS',
        xtype: 'phonemailconfigs',
    },
    {
        title: 'MMS',
        xtype: 'phonemobilemoneyconfigs',
    },
   
]
});