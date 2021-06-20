Ext.define('MssPhoenix.view.phone.shared.activityLogs.MultiUserActivityLogs', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',

     viewmodel: {
        data: {
            iconInfo: `<i class="fa fa-info-circle" style="color: #f27f00"></i>`
        },
    },
    items: [
        {
            xtype: 'container',
            padding: '15px',
            items: [
                {
                    xtype: 'container',
                    cls: 'module-body',
                    scrollable: false,
                    height: "95%",
                    items: [
                        {
                            xtype: 'label',
                            margin: '0 0 0 0',
                            html: '<span style="color: #002c65; font-weight: 700">A record of activities you have recently performed.</span>'
                        },
                        {
                            xtype: 'list',
                            grouped: false,
                            emptyText: 'loading...',
                            height: "95%",
                            scrollable: true,
                            store: {
                                proxy: {
                                    type: 'ajax',
                                    url: `${MssPhoenix.model.Session.baseUrl}/api/activityTrail}`,
                                    reader: {
                                        type: 'json',
                                        rootProperty: 'data'
                                    }
                                },
                                autoLoad: true,
                            },
                            itemTpl: [
                                '<div><b>User Name : </b><span>{userName}</span></div>',
                                '<div><b>Profile : </b><span>{profile}</span></div>',
                                '<div><b>Activity : </b><span>{description}</span></div>',
                                '<div><b>Date : </b><span>{shortDateTime}</span></div>'
                            ],
                        }
                    ]
                },
            ]
        }
    ]
});