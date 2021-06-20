Ext.define('MssPhoenix.view.header.Header', {
    extend: 'Ext.Container',
    xtype: 'header',
    height: 70,

    items:[
        {
            xtype: MssPhoenix.model.Session.getHeaderXtype()
        }
    ]
   
});