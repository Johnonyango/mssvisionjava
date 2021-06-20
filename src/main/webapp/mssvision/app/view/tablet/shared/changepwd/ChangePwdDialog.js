Ext.define('MssPhoenix.view.tablet.shared.changepwd.ChangePwdDialog', {
    extend: 'MssPhoenix.view.widgets.Window',

    width: 480,
    height: 360,
    title: 'Change Account Password',

    xtype: 'changepwddialog',
    controller: 'changepwdcontroller',

    viewModel: {
        data: {
            userId: ''
        }
    },
    scrollable: true,

    items: [
        {
            xtype: 'formpanel',
            reference: 'changepwddialogform',
            jsonSubmit: true,
            items: [
                {
                    cls: 'module-body',
                    xtype: 'container',
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
                            xtype: 'mitextfield',
                            name: 'userId',
                            bind: {
                                value: '{userId}'
                            },
                            hidden: true
                        },
                        {
                            xtype: 'component',
                            margin: '0 0 0 20',
                            html: '<span style="color: #002c65; font-weight: 700;font-size: 11px">Secure your account. Change password now</span>',
                        },
                        {
                            flex: 1,
                            xtype: 'mitextfield',
                            label: 'New Password',
                            name: 'newPassword',
                            placeholder: 'New password',
                            inputType: 'password',
                            required: true,
                        },
                        {
                            flex: 1,
                            xtype: 'mitextfield',
                            label: 'Confirm Password',
                            name: 'confirmPassword',
                            placeholder: 'Confirm password',
                            inputType: 'password',
                            required: true,
                        }
                    ],
                }
            ]
        }
    ],
    bbar: [
        {
            text: 'Do later',
            handler: 'closeDg'
        },
        '->',
        {
            iconCls: 'fa fa-save',
            text: 'Save',
            ui: 'action',
            handler: 'changePwdNoCurrentPwd'
        }
    ]
});