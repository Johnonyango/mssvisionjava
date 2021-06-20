Ext.define('MssPhoenix.view.tablet.member.claims.processing.ClaimPersonalDetails', {
    extend: 'MssPhoenix.view.tablet.member.claims.processing.BaseClaimWin',

    xtype: 'memberclaimpersonaldetails',
    maxHeight: "80%",
    padding: 15,

    items: [{
        xtype: 'formpanel',
        reference: 'memberclaimpersonaldetailsForm',
        jsonSubmit:true,
        defaults: {
            xtype: 'mitextfield',
            readOnly: true,
            width: '100%'
        },
        items: [{
                xtype: 'component',
                cls: 'module-head',
                html: `<h3>Personal Details</h3>Confirm your details`
            },
            {
                label: 'Sponsor',
                name: 'sponsorId',
                bind: {
                    value: '{sponsorId}'
                },
                readOnly:true,
                hidden:true
            },
            {
                label: 'Scheme',
                name: 'schemeId',
                bind: {
                    value: '{schemeId}'
                },
                readOnly:true,
                hidden:true
            },{
                label: 'Name',
                name: 'name',
                bind: {
                    value: '{memberName}'
                },
                readOnly:true,
                
            },
            {
                label: 'Member Number',
                name: 'memberNo',
                bind: {
                    value: '{memberNo}'
                },
                readOnly:true,
                
            },
            {
                label: 'Date of Birth',
                name: 'dob',
                bind: {
                    value: '{dob}'
                },
                readOnly:true,
                
            },

            {
                label: 'Email',
                name: 'email',
                bind: {
                    value: '{memberEmail}'
                },
                readOnly:true,
                vtype:'email',
            },
        ],
    }],
    bbar: [
        '->',
        {
            text: 'Cancel',
            handler: 'onCancelBtnClick',
            ui: 'action'
        },
        {
            text: 'Next',
            formBind: true,
            handler: 'validateStepOne',
            ui: 'action',
            iconAlign: 'right',
            iconCls: 'x-fa fa-angle-right',
            id:'btnValidateStepOne'
        }
    ]
});