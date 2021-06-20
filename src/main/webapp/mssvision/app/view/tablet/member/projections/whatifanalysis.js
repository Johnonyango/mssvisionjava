Ext.define('MssPhoenix.view.tablet.member.projections.whatifanalysis', {
    extend: 'Ext.Container',
    xtype: 'whatifanalysis',

    cls: 'module-body',
    scrollable: true,
    layout: {
        type: 'hbox',
        align: 'stretch'
    },
    items: [
        {
            xtype: 'fieldset',
            title: ' Member Details ',
            items: [
                {
                    xtype: 'memberprojectionsuserdetailsform'
                }
            ]
        },
        {
            xtype: 'fieldset',
            title: 'Financial Assumptions',
            flex: 2,
            items: [
                {
                    xtype: 'memberprojectform',
                    width: '100%',
                }
            ]
        }
    ]
});