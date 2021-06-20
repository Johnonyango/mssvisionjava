Ext.define('MssPhoenix.view.tablet.admin.user.UserForm', {
    extend: 'MssPhoenix.view.widgets.Window',

    xtype: 'adminuserform',
    width: 600,
    scrollable: true,
    closable: true,
    controller: 'adminuserformcontroller',
    title: 'Add User',
    padding: 15,
    items: [

        {
            maxHeight: 600,
            margin: '0 0 0 0',
            flex: 1,
            xtype: 'module',
            items: [{
                xtype: 'formpanel',
                reference: 'form',
                jsonSubmit: true,
                items: [{
                    cls: 'module-head',
                    xtype: 'component',
                    html: `<h3>Add A User</h3>`,
                },
                    {
                        cls: 'module-body',


                        layout: {
                            type: 'vbox',
                            align: 'stretch',
                        },
                        defaults: {
                            width: '100%',
                            xtype: 'container',
                            layout: {
                                type: 'vbox',
                                align: 'stretch',
                            },
                        },
                        items: [
                            {
                                items: [
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
                                    {
                                        xtype: 'selectbox',
                                        store: {
                                            type: 'permissions'
                                        },
                                        label: 'Choose A Role',
                                        displayField: 'name',
                                        name: 'profileId',
                                        valueField: 'id',
                                        flex: 1,
                                        minWidth: 200,
                                        required: true,
                                    },
                                    {
                                        xtype: 'mitextfield',
                                        label: 'Email',
                                        margin: '10 0 0 0',
                                        name: 'email',
                                        validators: 'email',
                                        inputType: 'email',
                                        required: true,

                                    },

                                ]
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
                        formBind: true,
                        ui: 'action',
                        handler: 'onSaveBtnClick'

                    }, {
                        minWidth: 200,
                        iconCls: 'fa fa-ban',
                        text: 'close',
                        ui: 'action',
                        handler: 'onCancelBtnClick'
                    }
                ]
            }],

        }

    ]
});