Ext.define('MssPhoenix.view.tablet.member.claims.processing.BankDetails', {
    extend: 'MssPhoenix.view.tablet.member.claims.processing.BaseClaimWin',

    xtype: 'memberclaimbankdetails',
    padding: 15,

    viewModel: {
        data: {
            bankName: '',
            bankBranch: '',
            accountName: '',
            accountNumber: '',
        }
    },

    items: [
        {
            xtype: 'formpanel',
            reference: 'memberclaimbankdetailsform',
            jsonSubmit: true,
            defaults: {
                width: '100%'
            },
            items: [
                {
                    xtype: 'component',
                    cls: 'module-head',
                    html: `<h3>Bank Details</h3>`
                },
                {
                    xtype: 'selectbox',
                    label: 'Bank',
                    margin: '0 0 0 0',
                    name: 'bankName',
                    store: {
                        type: 'bank'
                    },
                    displayField: 'name',
                    valueField: 'id',
                    bind: {
                        value: '{bankName}'
                    },
                    listeners: {
                        select: 'getBankBranches'
                    },
                    editable: false,
                    required:true
                },
                {
                    xtype: 'selectbox',
                    label: 'Bank Branch',
                    margin: '0 0 0 0',
                    name: 'bankBranch',
                    itemId: 'bankBranch',
                    displayField: 'name',
                    valueField: 'name',
                    bind: {
                        value: '{bankBranch}'
                    },
                    required:true
                },
                {
                    xtype: 'mitextfield',
                    label: 'Account Name',
                    name: 'accountName',
                    bind: {
                        value: '{accountName}'
                    },
                    required:true
                },
                {
                    xtype: 'mitextfield',
                    label: 'Account Number',
                    name: 'accountNumber',
                    bind: {
                        value: '{accountNumber}'
                    },
                    required:true
                },
            ],
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
            handler: 'showStepFourForm',
            ui: 'action'
        },
        {
            iconCls: 'fa fa-save',
            text: 'Finish',
            formBind: true,
            handler: 'finish',
            iconAlign: 'right',
            ui: 'action',
            id: 'btnFinish'
        }
    ]
});