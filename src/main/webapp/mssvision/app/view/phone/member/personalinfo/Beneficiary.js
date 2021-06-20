Ext.define('MssPhoenix.view.phone.member.personalinfo.Beneficiary', {
    extend: 'MssPhoenix.view.widgets.Module',

    xtype: 'memberphone-beneficiary',

    margin: '20 0 0 0',
    controller: 'memberbeneficiarycontoller',
    items: [

        {
            xtype: 'toolbar',
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
                    handler: 'checkIfCanAddBeneficiaries',
                    ui: 'action'
                }
            ]
        },

        {
            xtype: 'container',
            cls: 'module-body',
            items: [
                {
                    xtype: 'memberphone-beneficiarygrid'
                },
            ]
        }

    ]
});