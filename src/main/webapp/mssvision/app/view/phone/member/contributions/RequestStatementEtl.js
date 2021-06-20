Ext.define('MssPhoenix.view.phone.member.contributions.RequestStatementEtl', {
    extend: 'MssPhoenix.view.widgets.Window',

    viewModel: 'memberhomeviewmodel',
    xtype: 'memberrequeststatementetlphone',
    width: '80%',
    closable: true,
    controller: 'memberrequeststatementcontroller',
    title: 'Request Statement',

    items: [
        {
            xtype: 'container',
            cls: 'module-body',
            items: [{
                xtype: 'formpanel',
                itemId: 'memberrequeststatementformetl',
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
                        label: 'From',
                        placeholder: 'Select Date',
                        tooltip: 'Select Date',
                        name: 'fromDate',
                        // dateFormat: 'm/d/Y',
                        validators: 'date',
                        maxDate: new Date(),
                        required: true,

                    },

                    {
                        label: 'To',
                        margin: '0 0 0 10',
                        value: new Date(),
                        maxDate: new Date(),
                        validators: 'date',
                        name: 'toDate',
                        // dateFormat: 'm/d/Y',
                        tooltip: 'Select Date',
                        placeholder: 'Select Date',
                        required: true,
                        
                    }
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
            handler: 'requestStatementBtnClickEtl',
            validators: 'date'
        }
    ],
})