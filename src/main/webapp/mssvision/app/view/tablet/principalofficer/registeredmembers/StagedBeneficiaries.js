Ext.define('MssPhoenix.view.tablet.principalofficer.registeredmembers.StagedBeneficiaries', {
    extend: 'Ext.Container',
    
    // Uncomment to give this component an xtype 
    xtype : 'stagedbeneficiaries',
    
    items: [
        {
            xtype: 'toolbar',
            cls: 'module-subhead',
            items: [
                {
                    xtype: 'component',
                    maxWidth: "35%",
                    margin: '0 0 0 20',
                    bind: {
                        html: '{iconInfo} <span style="color: #002c65; font-weight: 700">A list of beneficiaries both new and those who details have been updated by a member and waiting approval</span>'
                    }
                },
                '->',
                {
                    iconCls: 'fa fa-redo',
                    handler: 'reloadStagedBeneficiariesGrid',
                    ui: 'action'
                },
            ]
        },
        {
            xtype: 'stagedbeneficiariesgrid'
        }
    ]
});