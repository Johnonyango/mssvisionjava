Ext.define('MssPhoenix.view.tablet.member.claims.processing.MedicalAndIllHealth', {
    extend: 'MssPhoenix.view.tablet.member.claims.processing.BaseClaimWin',
    xtype: 'medicalandillhealth',
    padding: 15,
    title: 'Medical & Ill Health',
    items: [
        {
            xtype: 'formpanel',
            reference: 'medicalandillhealthform',
            items: [
                {
                    xtype: 'selectbox',
                    label: 'Health Issue',
                    margin: '0 0 0 0',
                    name: 'medicalIssue',
                    store: {
                        fields: ['issue'],
                        data: [
                            {issue: 'Accident',},
                            {issue: 'Covid 19',},
                            {issue: 'Incapacitation',}
                        ]
                    },
                    displayField: 'issue',
                    valueField: 'issue',
                    required: true
                },

                {
                    xtype: 'mitextarea',
                    label: 'Explain medical condition',
                    placeHolder: 'Tell us about medical condition...',
                    maxRows: 8,
                    name: 'medicalExplanation',
                    required: true
                }

            ]
        }
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
            handler: 'showStepTwoForm',
            ui: 'action'
        },
        {
            iconAlign: 'right',
            iconCls: 'x-fa fa-angle-right',
            text: 'Next',
            formBind: true,
            handler: 'saveMedicalAndIllReasons',
            ui: 'action',
            id: 'btnSaveMedicalAndIllReasons'
        }
    ]
});