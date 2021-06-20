Ext.define('MssPhoenix.view.tablet.crm.member.CrmContributionSummary', {
    extend: 'MssPhoenix.view.widgets.Module',

    xtype: 'crmmembercontributionsummary',

    margin: '40 0 0 0',
    items: [

        {
            xtype: 'component',
            cls: 'module-head',
            bind:{
                html: '<h3>Contribution Summary ({currency})</h3>'
            }
        },

        {
            xtype: 'container',
            cls: 'module-body',
            items: [
                {
                    xtype: 'crmmembercontributionsummarygrid'
                }
            ]
        }

    ]
});