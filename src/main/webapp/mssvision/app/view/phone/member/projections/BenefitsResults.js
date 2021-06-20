Ext.define('MssPhoenix.view.phone.member.projections.BenefitsResults', {
    extend: 'MssPhoenix.view.widgets.Window',
    xtype: 'benefitsresults',
    width: '80%',
    maxHeight: "90%",
    padding: 15,
    closable: true,
    title: 'Benefit Results',
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
                                html: '{benefit}'
                            }
                        },
                    ]
                },
            ]
        }
    ]
});