Ext.define('MssPhoenix.view.tablet.cre.home.CreStatusTiles', {
    extend: 'Ext.container.Container',

    xtype: 'cre-statustiles',


    bodyStyle: { "background-color": "transparent" },
    layout: {
        type: 'hbox',
        align: 'stretch'
    },

    width: '100%',
    defaults: {
        flex: 1,
    },

    // controller: 'memberpersonalinfocontroller',



    items: [

        {
            // columnWidth: 0.25,
            cls: 'btn-box col-12 col-sm-6 col-md-4',
            margin: '0 0 0 20',
            xtype: 'widget-4tabs',
            containerColor: 'magenta',
            userCls: 'big-33 small-50',
            // bind:{  
                data: {
                    icon: 'suitcase',
                    amount: 10,
                    type: 'Scheme'
                }
            // }
        },
        {
            // columnWidth: 0.25,
            cls: 'btn-box col-12 col-sm-6 col-md-4',
            margin: '0 0 0 20',
            xtype: 'widget-4tabs',
            containerColor: 'magenta',
            userCls: 'big-33 small-50',
            // bind:{  
                data: {
                    icon: 'suitcase',
                    amount: 15,
                    type: 'sponsors'
                }
            // }
        },
        {
            // columnWidth: 0.25,
            cls: 'btn-box col-12 col-sm-6 col-md-4',
            margin: '0 0 0 20',
            xtype: 'widget-4tabs',
            containerColor: 'magenta',
            userCls: 'big-33 small-50',
            // bind:{                
                data: {
                    icon: 'list',
                    amount: 200,
                    type: 'members'
                }
            // }
        }
    ]
});