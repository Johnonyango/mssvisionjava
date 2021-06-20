Ext.define('MssPhoenix.view.tablet.member.contributions.RequestStatement', {
    extend: 'MssPhoenix.view.widgets.Window',

    viewModel: 'memberhomeviewmodel',


    xtype: 'memberrequeststatement',
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
                itemId: 'memberrequeststatementform',
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
                        xtype: 'selectbox',
                        label: 'accounting period',
                        name: 'accountingPeriod',
                        required: true,
                        editable: true,
                        errorTarget: 'under',
                        store: {
                            type: 'accountingperiods'
                        },
                        displayField: 'name',
                        valueField: 'id'
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
            handler: 'requestStatementBtnClick',
            validators: 'date'
        }
    ],
})