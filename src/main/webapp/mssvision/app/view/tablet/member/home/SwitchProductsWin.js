Ext.define('MssPhoenix.view.tablet.member.home.SwitchProductsWin', {
    extend: 'MssPhoenix.view.widgets.Window',
    xtype: 'switchproductswin',
    controller: 'memberswitchschemecontroller',
    width: '80%',
    closable: true,
    title: 'Switch Product',
    items: [
        {
            xtype: 'module',
            items: [
                {
                    xtype: 'container',
                    cls: 'module-body',
                    items: [
                        {
                            xtype: 'combobox',
                            store: {
                                type: 'memberproducts'
                            },
                            displayField: 'name',
                            valueField: 'id',
                            value: 'Select product',
                            flex: 1,
                            listeners: {
                                change: 'onSwitchProduct'
                            },
                        },
                    ]
                }
            ]
        }],
});