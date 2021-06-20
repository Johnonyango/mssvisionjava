Ext.define('MssPhoenix.view.tablet.cre.sponsor.CreSponsor', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',

    controller: 'cresponsorcontrller',
    viewModel: {
        data: {
            schemeName: null
        }
    },
    items: [{
        xtype: 'container',
        padding: '15px',
        scrollable: true,
        defaults: {
            width: '100%'
        },
        items: [
            {
                xtype: 'toolbar',
                cls: 'module-subhead',
                items: [
                    {
                        iconCls: 'fa fa-arrow-left',
                        text: 'Back',
                        handler: 'goBack',
                    },
                    '->',
                    {
                        xtype: 'component',
                        bind: {
                            html: '<h3>{schemeName}</h3>'
                        }
                    },
                    '->',
                    {
                        iconCls: 'fa fa-redo',
                        handler: 'reloadSponsorGrid',
                        ui: 'action'
                    },
                ]
            },
            {
                xtype: 'table',
                itemId: 'cresponsortb',
                plugins: {
                    gridpagingtoolbar: true
                },
                store: {
                    type: 'crmsponsor'
                },
                scrollable: true,
                minHeight: 100,
                maxHeight: 300,
                columns: [
                    {
                        text: 'SPONSOR ID',
                        dataIndex: 'id',
                        flex: 1
                    },
                    {
                        text: 'SCHEME ID',
                        dataIndex: 'schemeId',
                        flex: 1,
                        hidden: true
                    },
                    {
                        text: 'SPONSOR NO',
                        dataIndex: 'sponsorNo',
                        flex: 1
                    },
                    {
                        text: 'SPONSOR NAME',
                        dataIndex: 'name',
                        flex: 3
                    },
                    {
                        text: 'EMAIL',
                        dataIndex: 'email',
                        flex: 1
                    },
                ],
                listeners: {
                    click: {
                        element: 'element',
                        fn: 'creViewMembersButtonClick'
                    }
                }
            }
        ]
    }]
});