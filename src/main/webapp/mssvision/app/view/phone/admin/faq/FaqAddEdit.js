Ext.define('MssPhoenix.view.phone.admin.faq.FaqAddEdit', {
    extend: 'MssPhoenix.view.widgets.Window',

    xtype: 'phonefaqaddedit',
    width: 60,
    height: 480,
    padding: 15,
    title: 'FAQ',
    closable: true,
    controller: 'faqcontroller',
    viewModel: {
        data: {
            id: -1,
            profileId: '',
            title: '',
            subtitle: '',
            body: ''
        }
    },
    items: [
        {
            xtype: 'formpanel',
            reference: 'faqaddeditform',
            jsonSubmit: true,
            defaults: {
                width: '100%'
            },
            items: [
                {
                    xtype: 'mitextfield',
                    name: 'id',
                    hidden: true,
                    bind: {
                        value: '{id}'
                    }
                }, {
                    xtype: 'mitextfield',
                    label: 'Title',
                    margin: '0 0 0 0',
                    name: 'title',
                    bind: {
                        value: '{title}'
                    }
                },
                {
                    xtype: 'mitextfield',
                    label: 'Subtitle (text, url...)',
                    margin: '0 0 0 0',
                    name: 'subtitle',
                    bind: {
                        value: '{subtitle}'
                    }
                },
                {
                    xtype: 'selectbox',
                    label: 'Profile',
                    margin: '0 0 0 0',
                    name: 'profileId',
                    store: {
                        type: 'profile'
                    },
                    displayField: 'name',
                    valueField: 'id',
                    bind: {
                        value: '{id}'
                    }
                },

                {
                    xtype: 'mitextarea',
                    label: 'Explanation',
                    name: 'body',
                    bind: {
                        value: '{body}'
                    }
                },
            ],
            bbar: [
                '->',
                {
                    iconCls: 'fa fa-save',
                    text: 'Save',
                    formBind: true,
                    handler: 'saveFAQ',
                    iconAlign: 'right',
                    ui: 'action',
                    id: 'btnSaveFAQ'
                }
            ]
        }
    ]
});