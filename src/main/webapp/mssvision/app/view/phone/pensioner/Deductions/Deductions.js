Ext.define('MssPhoenix.view.phone.pensioner.Deductions.Deductions', {
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
                            html: '<span style="color: #002c65; font-weight: 700">A record of active deductions.</span>'
                        },
                        {
                            xtype: 'list',
                            grouped: false,
                            emptyText: 'loading...',
                            height: "95%",
                            scrollable: true,
                            store: {
                                type: 'pensionerdeductions'
                            },
                            itemTpl: [
                                '<div><b>Deduction Type : </b><span>{typeName}</span></div>',
                                '<div><b>Start Date : </b><span>{startDate}</span></div>',
                                '<div><b>Stop Date : </b><span>{stopDate}</span></div>',
                                '<div><b>Amount : </b><span>{amount}</span></div>',
                                '<div><b>Stopped : </b><span>{stopped}</span></div>',
                            ],
                        }
                    ]
                },
            ]
        }
    ]
});