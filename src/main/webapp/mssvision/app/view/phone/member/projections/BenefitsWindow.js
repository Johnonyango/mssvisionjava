Ext.define('MssPhoenix.view.phone.member.projections.BenefitsWindow', {
    extend: 'MssPhoenix.view.widgets.Window',
    xtype: 'benefitswindow',
    width: '80%',
    maxHeight: "90%",
    padding: 15,
    closable: true,
    title: 'Calculated Results',
    viewModel: 'memberprojectionsviewmodel',
    controller: 'memberprojectionscontroller',
    items: [
        {
            xtype: 'fieldset',
            title: 'Fill in details',
            margin: '0 0 0 0',
            flex: 1,
            items: [
                {
                    xtype: 'formpanel',
                    reference: 'benefitsprojectionform',
                    items: [
                        {
                            xtype: 'container',
                            items: [
                                {
                                    xtype: 'minumberfield',
                                    label: 'Age at Exit',
                                    name: 'age',
                                    textAlign: 'right',
                                },
                                {
                                    xtype: 'selectbox',
                                    label: 'Reasons For Exit',
                                    margin: '0 0 0 0',
                                    name: 'reasonId',
                                    store: {
                                        type: 'memberreasonsforexit'
                                    },
                                    displayField: 'reason',
                                    valueField: 'id',
                                    allowBlank: false,
                                    required: true,
                                },
                            ]
                        }
                    ],
                },
            ]
        },
    ],
    bbar: [
        '->',
        {
            text: 'Show Results',
            ui: 'action',
            handler: 'calculateBenefitRequests'
        }
    ]
});