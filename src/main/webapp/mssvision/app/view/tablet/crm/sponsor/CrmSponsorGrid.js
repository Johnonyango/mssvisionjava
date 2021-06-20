/**
 * This view is an example list of people.
 */
Ext.define('MssPhoenix.view.tablet.crm.sponsor.CrmSponsorGrid', {
    extend: 'MssPhoenix.view.widgets.Table',
    xtype: 'crmsponsorgrid',

    plugins: {
        gridpagingtoolbar: true
    },

    height: 456,
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
    controller: 'crmsponsorsgridcontroller',

    //title:'Test',

    store: {
        type: 'crmsponsor'
    },


    scrollable: true,

    items: [
        {
            xtype: 'toolbar',
            docked: 'top',
            defaults: {
                ui: 'action',
            },
            items: [{
                xtype: 'button',
                text: 'View Members',
                handler: 'onViewMembersButtonClick'
            },

            ]
        },
    ]
    ,

    columns: [
        { text: 'Sponsor Id', dataIndex: 'id', flex: 1 },
        { text: 'Sponsor Name', dataIndex: 'name', flex: 3 },
        { text: 'Scheme ID', dataIndex: 'schemeId', flex: 1 },
        { text: 'Sponsor No', dataIndex: 'sponsorNo', flex: 1 },
        { text: 'Email', dataIndex: 'email', flex: 1 },


    ],
});
