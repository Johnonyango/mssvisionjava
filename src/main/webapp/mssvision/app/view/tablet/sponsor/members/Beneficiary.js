Ext.define('MssPhoenix.view.tablet.sponsor.members.Beneficiary', {
    extend: 'MssPhoenix.view.widgets.Module',

    xtype: 'sponsor-member-beneficiary',

    margin: '60 0 0 0',
    items: [

        {
            xtype: 'component',
            cls: 'module-head',
            html: '<h3>Beneficiaries</h3>'
        },

        {
            xtype: 'container',
            cls: 'module-body',
            items: [
                {
                    xtype: 'sponsormemberbeneficiarygrid'
                }
            ]
        }

    ]
});