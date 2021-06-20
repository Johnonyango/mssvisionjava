Ext.define('MssPhoenix.view.main.Menu', {
    extend: 'MssPhoenix.view.widgets.Sidebar',
    xtype: 'mainmenu',


    config: {
        selection: null
    },

    controller: 'mainmenu',

    cls: 'main-menu',
    layout: 'vbox',
    weighted: true,


    items: {
        trigger: {
            xtype: 'button',
            handler: 'onTriggerTap',
            iconCls: 'x-fa fa-bars',
            ui: 'large flat dark',
            docked: 'top'
        },
        navigator: {
            xtype: 'dataview',
            store: 'Menu',
            weight: 0,
            //height:'350',
            scrollable: {
                y: 'scroll'
            },
            maxHeight: 460,
            flex: 1,
            ui: 'dark large',
            selectable: {
                deselectable: false
            },

            itemTpl: [
                '<span class="icon x-fa fa-{icon}"></span>',
                '<span class="text">{text}</span>'
            ],
            listeners: {
                childtap: 'onMenuChildTap'
            }
        },
        logout: {
            xtype: 'button',
            margin: '0 0 0 0',
            handler: 'onLogoutTap',
            iconCls: 'x-fa fa-power-off',
            text: 'Log out',
            textAlign: 'left',
            ui: 'large flat dark',
            weight: 20,
        }
    },

    updateSelection: function (value) {
        this.child('#navigator').setSelection(value);
    }
});