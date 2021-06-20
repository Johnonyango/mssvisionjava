Ext.define('MssPhoenix.view.phone.admin.Session.ViewSession', {
    extend: 'MssPhoenix.view.widgets.Window',
    
    xtype: 'phoneviewsession',
    controller: 'sessionsController',
    width: 20,
    height: 556,
    title: 'Sessions',
    autoShow: true,
    modal: true,
    shadow: true, 
    scrollable: 'x',   
   // padding: 75,
    readOnly: true,

items: [

    {
        xtype: 'formpanel',
        layout: 'form',
        reference: 'form',
        jsonSubmit: true,
        
        defaults: {
            xtype: 'textfield',
            allowBlank: false,
            //padding: 75,
            
        },
       
        items: 
        [{
            xtype: 'numberfield',
            name: 'id',            
            label: 'Session Id',
            readOnly:true,

        },
        {
           
            name: 'userName',            
            label: 'Name',
            readOnly:true,

        },
        {
            
            name: 'profileName',            
            label: 'Role',
            readOnly:true,

        },
        {
            name: 'shortDateTime',
            label: 'Started At',
            readOnly:true,
        },
        {
            name: 'ipAddress',
            label: 'IP Address',
            readOnly:true,
        },
        {
            name: 'active',
            label: 'Status',
            readOnly:true,
        },
        
        


        ],
        buttons: [
        
        {
            text: 'Close',
            ui: 'action',
            handler: 'onCancelViewBtnClick'

        }
        ]
    }]
});