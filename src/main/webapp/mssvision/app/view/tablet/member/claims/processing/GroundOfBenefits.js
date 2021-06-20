Ext.define('MssPhoenix.view.tablet.member.claims.processing.GroundOfBenefits', {
    extend: 'MssPhoenix.view.tablet.member.claims.processing.BaseClaimWin',

    xtype: 'membergroundofbenefits',
    padding: 15,

    items: [
        {
            xtype: 'formpanel',
            reference: 'membergroundofbenefitsForm',
            defaults: {
                width: '100%'
            },
            items: [

                {
                    xtype: 'component',
                    cls: 'module-head',
                    html: `<h3>Ground Of Benefits</h3>`
                },

                {
                    xtype: 'selectbox',
                    label: 'Reasons For Exit',
                    margin: '0 0 0 0',
                    name: 'benefitReason',
                    store: {
                        type: 'memberreasonsforexit'
                    },
                    displayField: 'reason',
                    valueField: 'id',
                    allowBlank: false,
                    required: true,
                    editable: false
                },
            ],
        },
    ],
    bbar: [

        {
            text: 'Cancel',
            handler: 'onCancelBtnClick',
            ui: 'action'
        },

        '->',

        {
            text: 'Previous',
            handler: 'showStep_One_Form',
            ui: 'action'
        },

        {
            text: 'Next',
            formBind: true,
            handler: 'validateStepTwo',
            ui: 'action',
            iconAlign: 'right',
            iconCls: 'x-fa fa-angle-right',
            id: 'btnValidateStepTwo'
        }

    ]
});