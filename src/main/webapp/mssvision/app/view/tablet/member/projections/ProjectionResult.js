Ext.define('MssPhoenix.view.tablet.member.projections.ProjectionResult', {
    extend: 'MssPhoenix.view.widgets.Window',
    xtype: 'memberprojectionresult',
    width: 480,
    minHeight: 400,
    padding: 15,
    closable: true,
    title: 'Calculated Results',
    viewModel: 'memberprojectionsviewmodel',

    items: [
        {
            xtype: 'container',
            items: [
                {
                    xtype: 'container',
                    scrollable: true,
                    height: 400,
                    items: [
                        {
                            xtype: 'component',
                            bind: {
                                html: '{projection}'
                            }
                        },
                    ]
                },
                {
                    xtype: 'component',
                    html: `NOTE: The information in this Benefits Statement is for guidance purposes only and are estimates of your entitlements. Assumptions have been made during calculation that salary increment and interest applied on your contributions will be based on the values you have provided . Your precise entitlements are governed by the Trust Deed and Rules of the Scheme and the Retirements Benefits Authority Regulations, as amended and nothing in this Benefits Statement can override those Rules `,
                    style: {
                        'margin-top': '20px'
                    },
                }
            ]
        }
    ]
});