Ext.define('MssPhoenix.view.tablet.admin.faq.Faq', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',

    xtype: 'faq',
    layout: {
        type: 'vbox'
    },
    defaults: {
        width: '100%',
        height: '100%',
    },
    controller: 'faqcontroller',

    items: [
        {
            xtype: 'container',
            padding: '15px',
            items: [

                {
                    xtype: 'toolbar',
                    cls: 'module-subhead',
                    items: [
                        '->',
                        {
                            xtype: 'button',
                            iconCls: 'fa fa-redo',
                            margin: '0 6 0 6',
                            handler: 'reloadFaqs',
                            ui: 'action'
                        },
                        {
                            text: 'Add FAQ',
                            ui: 'action',
                            handler: 'addFAQ'
                        },
                    ]
                },

                {
                    xtype: 'faqgrid',
                    margin: '10 0 0 0'
                }

            ]
        }
    ]
});