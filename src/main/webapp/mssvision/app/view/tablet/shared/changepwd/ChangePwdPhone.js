Ext.define('MssPhoenix.view.tablet.shared.changepwd.ChangePwdPhone', {
    extend: 'MssPhoenix.view.widgets.Module',
    
    xtype : 'phone-changepwd',
    controller:'changepwdcontroller',

    viewModel:{
        data:{
            userId:''
        }
    },
    scrollable: true,

    items: [{
        xtype: 'formpanel',
        reference:'changepwdform',
        // ui: 'auth',
        jsonSubmit: true,
        items: [{
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
                        bind:{
                            value:'{userId}'
                        },
                        hidden:true
                    },
                    {
                        xtype: 'mitextfield',
                        label: 'Current Password',
                        name: 'currentPassword',
                        placeholder: 'Current password',
                        inputType:'password',
                        required:true,
                    },

                    {
                        margin: '10 0 0 0',
                        xtype: 'container',
                        layout: {
                            type: 'vbox',
                            align: 'stretch'
                        },
                        items: [{
                                flex: 1,
                                xtype: 'mitextfield',
                                label: 'New Password',
                                name: 'newPassword',
                                placeholder: 'New password',
                                inputType:'password',
                                required:true,
                            },
                            {
                                flex: 1,
                                xtype: 'mitextfield',
                                label: 'Confirm Password',
                                name: 'confirmPassword',
                                margin: '0 0 0 5',
                                placeholder: 'Confirm password',
                                inputType:'password',
                                required:true,
                            }
                        ]
                    }
                ],
            }
        ],
        bbar: [
            '->',
            {
                iconCls: 'fa fa-save',
                text: 'Save',
                ui: 'action',
                handler:'changeAccountPwd'
            }
        ]
    }],
});