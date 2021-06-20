Ext.define('MssPhoenix.view.auth.Login', {
    extend: 'Ext.Container',
    xtype: 'authlogin',

    controller: 'authlogin',

    cls: 'auth-login',

    layout: {
        type: 'vbox',
        align: 'center',
        pack: 'center'
    },

    items: [{
            cls: 'auth-header',
            html: '<span class="logo x-fa fa-circle-o-notch"></span>' +
                '<div class="title">Self Service Portal</div>' +
                '<div class="caption">Account Login</div>'
        },
        {
            xtype: 'formpanel',
            reference: 'form',
            layout: 'vbox',
            ui: 'auth',
            jsonSubmit: true,

            items: [{
                    xtype: 'textfield',
                    name: 'username',
                    placeholder: 'Username/Email',
                    required: true
                }, {
                    xtype: 'passwordfield',
                    name: 'password',
                    placeholder: 'Password',
                    required: true
                },
                {
                    xtype: 'checkboxfield',
                    name: 'rememberMe',
                    label: 'Remember Me',
                    value: true,
                    checked: true
                },
                {
                    xtype: 'button',
                    text: 'LOG IN',
                    iconAlign: 'right',
                    iconCls: 'x-fa fa-angle-right',
                    handler: 'onLoginTap',
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