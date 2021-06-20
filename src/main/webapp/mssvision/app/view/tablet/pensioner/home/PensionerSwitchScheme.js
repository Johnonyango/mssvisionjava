Ext.define('MssPhoenix.view.tablet.pensioner.home.PensionerSwitchScheme', {
    extend: 'MssPhoenix.view.widgets.Window',
    xtype: 'pensionerswitchschemewin',
    controller: 'pensionerswitchschemecontroller',

    width: 320,
    minHeight: 200,
    closable: false,

    width: 320,
    closable: true,
    title:'Switch Scheme',
    items: [{
        xtype: 'module',
        items: [
            {
                xtype: 'container',
                cls: 'module-body',
                items: [
                    {
                        xtype: 'selectbox',
                        label: 'Select Scheme',
                        name: 'pensionerschemesbox',
                        store: {
                            type: 'pensionerschemes'
                        },
                        displayField: 'schemeName',
                        valueField: 'id',
                        value:'Select scheme',
                        listeners: {
                            change: 'onSwitchScheme'
                        }
                    },
                ]
            }
          
        ]
    }]
});