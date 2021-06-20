Ext.define('MssPhoenix.view.forgotpwd.ResetPassword', {
    extend: 'Ext.Container',
    xtype: 'resetpassword',

    controller: 'resetpasswordcontroller',

    cls: 'resetpwd',

    layout: {
        type: 'vbox',
        align: 'center',
        pack: 'center'
    },

    items: [{
        cls: 'auth-header',
        html: '<span class="logo x-fa fa-circle-o-notch"></span>' +
            '<div class="title">Self Service Portal</div>' +
            '<div class="caption">Reset Password</div>'
    },
        {
            xtype: 'formpanel',
            reference: 'form',
            layout: 'vbox',
            ui: 'auth',
            jsonSubmit: true,

            items: [{
                xtype: 'passwordfield',
                name: 'newpassword',
                placeholder: 'New Password',
                required: true
            }, {
                xtype: 'passwordfield',
                name: 'confirmpassword',
                placeholder: 'Confirm Password',
                required: true
            },
                {
                    xtype: 'button',
                    text: 'Submit',
                    iconAlign: 'right',
                    iconCls: 'x-fa fa-angle-right',
                    handler: 'onResetPasswordTap',
                    ui: 'action'
                }
            ]
        }, {
            cls: 'auth-footer',
            html: '<div></div>' +
                '<a href="http://www.systechafrica.com" target="_blank">' +
                // '<span class="logo ext ext-sencha"></span>' +
                '<span class="label">&COPY;2021</span>' +
                '</a>'
        }
    ]
});