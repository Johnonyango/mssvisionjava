Ext.define('MssPhoenix.view.phone.pensioner.personalinfo.Beneficiary', {

    extend: 'MssPhoenix.view.widgets.Module',

    xtype: 'phonepensionerbeneficiary',

    margin: '20 0 0 0',
    controller: 'pensionerbeneficiarycontoller',
    items: [

        {
            xtype: 'toolbar',
            cls: 'module-head',
            ui: 'tools',
            items: [
                {
                    xtype: 'component',
                    html: '<h3>Beneficiaries</h3>'
                },
                '->',
                {
                    iconCls:'fa fa-redo',
                    handler: 'reloadBeneficiaryGrid',
                    ui: 'action'
                },
                {
                    text: 'Add Beneficiary',
                    handler: 'checkAddBeneficiaryEligibility',
                    ui: 'action'
                }
            ]
        },

        {
            xtype: 'container',
            cls: 'module-body',
            items: [
                {
                    xtype: 'phonepensionerbeneficiarygrid'
                },
            ]
        }

    ]
});