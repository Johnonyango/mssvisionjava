Ext.define('MssPhoenix.view.phone.admin.faq.Faq', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',

    xtype: 'phonefaq',
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
                            text: 'Add FAQ',
                            ui: 'action',
                            handler: 'addPhoneFAQ'
                        },
                    ]
                },

                {
                    xtype: 'phonefaqgrid',
                    margin: '10 0 0 0'
                }

            ]
        }
    ]
});