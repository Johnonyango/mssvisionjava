Ext.define('MssPhoenix.view.tablet.admin.ManageAdmin.CreateAdmin', {
    extend: 'MssPhoenix.view.widgets.Window',
    xtype: 'createadmin',
    width: 600,
    controller: 'createadmincontroller',
    padding: 15,
    defaults: {
        scrollable: true
    },
    items: [
        {
            maxHeight: 550,
            flex: 1,
            xtype: 'module',
            items: [
                {
                    xtype: 'formpanel',
                    reference: 'form',
                    jsonSubmit: true,
                    items: [
                        {
                            cls: 'module-head',
                            xtype: 'component',
                            html: `<h3>Create Admin</h3>`,
                        },
                        {
                            cls: 'module-body',
                            xtype: 'container',
                            layout: {
                                type: 'vbox',
                                align: 'stretch',
                            },
                            defaults: {
                                width: '100%',
                                maxHeight: 150,
                                xtype: 'container',
                                scrollable: true,
                                layout: {
                                    type: 'hbox',
                                    align: 'stretch',
                                },
                            },
                            items: [
                                {
                                    xtype: 'mitextfield',
                                    label: 'Email',
                                    labelTextAlign: 'left',
                                    name: 'email',
                                    placeholder: 'Enter your email',
                                    validators: 'email',
                                },

                                {
                                    xtype: 'mitextfield',
                                    label: 'User Id',
                                    labelTextAlign: 'left',
                                    name: 'userId',
                                    bind: {
                                        value: `${MssPhoenix.model.Session.getUserId()}`,
                                    },
                                    hidden: true,
                                },

                            ],
                        }
                    ],
                    bbar: [
                        '->',
                        {
                            minWidth: 200,
                            iconCls: 'fa fa-save',
                            text: 'Save',
                            ui: 'action',
                            id: 'saveCreateAdminBtn',
                            handler: 'onSaveBtnClick'

                        }, {
                            minWidth: 200,
                            iconCls: 'fa fa-ban',
                            text: 'close',
                            ui: 'action',
                            id: 'closeCreateAdminBtn',
                            handler: 'onCancelBtnClick'
                        }
                    ]
                }],

        }

    ]

});