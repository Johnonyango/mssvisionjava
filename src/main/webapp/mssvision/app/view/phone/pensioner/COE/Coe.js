Ext.define('MssPhoenix.view.phone.pensioner.COE.Coe', {
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
                            html: '<span style="color: #002c65; font-weight: 700">A record of certificates of existence.</span>'
                        },
                        {
                            xtype: 'list',
                            grouped: false,
                            emptyText: 'loading...',
                            height: "95%",
                            scrollable: true,
                            store: {
                                type: 'pensionercertificate'
                            },
                            itemTpl: [
                                '<div><b>Cycle : </b><span>{cycle}</span></div>',
                                '<div><b>Start date : </b><span>{startDate}</span></div>',
                                '<div><b>Stop date : </b><span>{stopDate}</span></div>',
                                '<div><b>Center : </b><span>{center}</span></div>',
                                '<div><b>Details : </b><span>{daysRemaining}</span></div>',
                                '<div><b>Status : </b><span>{status}</span></div>',
                            ],
                        }
                    ]
                },
            ]
        }
    ]
});