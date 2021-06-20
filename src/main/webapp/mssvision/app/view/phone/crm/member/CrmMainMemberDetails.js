Ext.define('MssPhoenix.view.phone.crm.member.CrmMainMemberDetails', {
    extend: 'MssPhoenix.view.widgets.Module',

    xtype: 'crmphonemainmemberdetails',
    // viewModel:'crmmembervmodel',



    layout: {
        type: 'vbox'
    },

    width: '100%',

    defaults: {
        width: '100%'
    },
    scrollable: true,

    controller: 'crmmemberdetailscontroller',
    viewModel: {
        type: 'crmmembervmodel'
    },
    padding: '15px',
    items: [
        {
            xtype: 'toolbar',
            cls: 'module-head',
            items: [
                {
                    xtype: 'component',

                    html: '<h3>Member Details</h3>'
                },
                '->',
                {
                    text: 'back',
                    ui: 'action',
                    cls: 'icon-print',
                    iconCls: 'x-fa fa-reply',
                    scale: 'small',
                    handler: 'goBackToMembers'
                },
                '->',
                // {
                //     text: '',
                //     ui: 'action',
                //     cls: 'icon-print',
                //     iconCls: 'x-fa fa-print',
                //     scale: 'small'
                // }
            ]
        },

        {
            xtype: 'container',
            cls: 'module-body   ',
            items: [
                //details
                {
                    xtype: 'crmphonememberdetails'
                },

                //contribution summary
                // {
                //     xtype: 'crmmembercontributionsummary'
                // },

                //beneficiary chart
                // {
                //     // xtype: 'crmmemberbeneficiarychart'
                // },

                // //beneficiary grid
                {
                    xtype: 'crmphonememberbeneficiary'
                }
            ]
        }
    ]

});