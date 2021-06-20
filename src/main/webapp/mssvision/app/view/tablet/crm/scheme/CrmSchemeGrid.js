/**
 * This view is an example list of people.
 */
Ext.define('MssPhoenix.view.tablet.crm.scheme.CrmSchemeGrid', {
    extend: 'MssPhoenix.view.widgets.Table',
    xtype: 'crmschemegrid',
    maxHeight: 300,
    layout: 'fit',

    selectable: {
        // Disables sorting by header click, though it will be still available via menu
        columns: true,
        cells: true,
        checkbox: true,
        drag: true,
        mode: 'single',
        extensible: 'y'
    },
    controller: 'crmschemegridcontroller',
    plugins: {
        gridpagingtoolbar: true
    },
    //title:'Test',

    store: {
        type: 'crmscheme'
    },

    maxHeight: 380,
    scrollable: true,
    items: [
        {
            xtype: 'toolbar',
            docked: 'top',
            defaults: {
                ui: 'action'
            },

            items: [{
                xtype: 'button',
                text: 'View Members',
                handler: 'onViewMembersButtonClick'
            }
            ]
        }
    ],

    columns: [
        { text: 'Sheme Id', dataIndex: 'schemeId', flex: 1 },
        { text: 'Scheme Name', dataIndex: 'name', flex: 2 }


    ]
});
