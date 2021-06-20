Ext.define('MssPhoenix.view.actions.pensioner.certificates.Certificate', {
    extend: 'MssPhoenix.view.widgets.Module',

    height: 456,
    items: [
        {
            xtype: 'container',
            padding: '15px',
            scrollable: true,
            items: [
                {
                    xtype: 'module',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },

                    defaults: {
                        width: '100%'
                    },

                    viewModel: {
                        // type: 'certificatevmodel'
                    },

                    // controller: 'certificatecontroller',

                    items: [
                        {
                            xtype: 'toolbar',
                            cls: 'module-head',
                            items: [
                                // '',
                                {
                                    xtype: 'component',
                                    bind: {
                                        html: '<h3>Certificate Of Existence</h3>'
                                    }
                                },
                                '->',
                                
                                {
                                    text: '',
                                    iconCls: 'x-fa fa-print',
                                    scale: 'small',
                                    ui: 'action'
                                },
                                // ''
                            ]
                        },

                        {
                            xtype: 'container',
                            cls: 'module-body',
                            items: [
                                {
                                    xtype: 'pensionercertificategrid',
                                    margin: '10 0 0 0'
                                }
                            ]
                        },
                    ]
                }
            ]
        }
    ]

    
});