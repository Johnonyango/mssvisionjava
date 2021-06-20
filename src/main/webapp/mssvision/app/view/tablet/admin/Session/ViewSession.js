Ext.define('MssPhoenix.view.tablet.admin.Session.ViewSession', {
    extend: 'MssPhoenix.view.widgets.Window',
    
    xtype: 'viewsession',
    controller: 'sessionsController',
    width: 900,
    height: 556,
    title: 'Sessions',
    autoShow: true,
    modal: true,
    shadow: true,    
    padding: 15,
    readOnly: true,

items: [

    {
        xtype: 'formpanel',
        layout: 'form',
        reference: 'form',
        jsonSubmit: true,
        defaults: {
            xtype: 'textfield',
            allowBlank: false
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
            name: 'stoppedShortDateTime',
            label: 'Stopped At',
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
            id: 'closeViewSessionsBtn',
            handler: 'onCancelViewBtnClick'

        }
        ]
    }]
});