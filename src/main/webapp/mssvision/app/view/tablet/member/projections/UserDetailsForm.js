Ext.define('MssPhoenix.view.tablet.member.projections.UserDetailsForm', {
    extend: 'Ext.form.Panel',
    xtype: 'memberprojectionsuserdetailsform',

    cls: 'module-body',
    width: '100%',

    reference: 'memberprojectionsuserdetailsform',
    itemId: 'memberprojectionsuserdetailsform',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    defaults: {
        width: '100%',
        xtype: 'container',
        layout: {
            type: 'hbox',
            align: 'stretch',
            flex: 1,
        },
        margin: '5 0',
    },
    items: [
        {
            items: [{
                xtype: 'mitextfield',
                label: 'Member Number',
                name: 'memberNo',
                readOnly: true,
                textAlign: 'right',
            },
                {
                    xtype: 'mitextfield',
                    label: 'Gender',
                    name: 'gender',
                    margin: '0 0 0 6',
                    readOnly: true,
                },
                {
                    xtype: 'mitextfield',
                    label: 'Current Age',
                    name: 'age',
                    margin: '0 0 0 6',
                    readOnly: true,
                    textAlign: 'right'
                },
            ]
        }, {
            items: [{
                xtype: 'mitextfield',
                label: 'Retirement Age',
                name: 'retirementAge',
                readOnly: true,
                textAlign: 'right'
            },
                {
                    xtype: 'mitextfield',
                    label: 'Current Credit Fund',
                    margin: '0 0 0 6',
                    // name: 'currentAnnualPensionableSalary',
                    name: 'totalBenefits',
                    readOnly: true,
                    textAlign: 'right',
                    listeners:{
                        change:'textFieldTextChanged'
                    }
                },
                {
                    xtype: 'mitextfield',
                    label: 'Annual Salary',
                    margin: '0 0 0 6',
                    name: 'annualBasicSalary',
                    readOnly: true,
                    textAlign: 'right',
                    listeners:{
                        change:'textFieldTextChanged'
                    }
                }
            ]
        },
        {
            items: [
                {
                    xtype: 'mitextfield',
                    label: 'Employer Contribution Rate(%)',
                    margin: '0 0 0 6',
                    name: 'erContrRate',
                    readOnly: true,
                    textAlign: 'right'
                },
                {
                    xtype: 'mitextfield',
                    label: 'Employee Contribution Rate(%)',
                    margin: '0 0 0 6',
                    name: 'eeContrRate',
                    readOnly: true,
                    textAlign: 'right'
                },
            ]
        },
    ],
});