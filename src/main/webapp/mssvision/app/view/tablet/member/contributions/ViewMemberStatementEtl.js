Ext.define('MssPhoenix.view.tablet.member.contributions.ViewMemberStatementEtl', {
    extend: 'MssPhoenix.view.widgets.Window',

    viewModel: 'memberhomeviewmodel',


    xtype: 'viewmemberstatementetl',
    width: 400,
    closable: true,
    controller: 'memberrequeststatementcontroller',
    title: 'Request Statement',

    items: [
        {
            xtype: 'container',
            cls: 'module-body',
            items: [{
                xtype: 'formpanel',
                itemId: 'viewmemberrequeststatementformetl',
                layout: {
                    type: 'hbox',
                    align: 'stretch'
                },
                defaults: {
                    border: false,
                    xtype: 'midatefield',
                },
                items: [
                    {
                        label: 'Statement Request Date',
                        placeholder: 'Select Date',
                        tooltip: 'Select Date',
                        name: 'asAt',
                        dateFormat: 'd-M-Y',
                        validators: 'date',
                        maxDate: new Date(),
                        required: true,

                    },
                ],

            }]
        }
    ],
    bbar: [
        {
            xtype: 'button',
            text: 'Close',
            ui: 'action',
            handler: 'onCancelBtnClick',
            hidden: true
        },
        '->',
        {
            xtype: 'button',
            id: 'btnFirstRequeststatement',
            text: 'Request Statement',
            ui: 'action',
            handler: 'viewStatementBtnClick',
            validators: 'date'
        }
    ],
})