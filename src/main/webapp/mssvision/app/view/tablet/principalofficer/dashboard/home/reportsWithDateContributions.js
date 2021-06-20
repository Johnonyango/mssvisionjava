Ext.define('MssPhoenix.view.tablet.principalofficer.dashboard.home.reportsWithdateContributions', {
    extend: 'MssPhoenix.view.widgets.Window',

    xtype: 'reportswithdatecontributions',
    width: 400,
    closable: true,
    controller: 'poDashboardcontroller',
    // title: 'Request Statement',

    items: [
        {
            xtype: 'container',
            cls: 'module-body',
            items: [{
                xtype: 'formpanel',
                itemId: 'viewContributions',
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
                        dateFormat: 'm/d/Y',
                        validators: 'date',
                        maxDate: new Date(),
                        required: true
                    },

                    {
                        label: 'To',
                        margin: '0 0 0 10',
                        value: new Date(),
                        maxDate: new Date(),
                        validators: 'date',
                        name: 'toDate',
                        dateFormat: 'm/d/Y',
                        tooltip: 'Select Date',
                        placeholder: 'Select Date',
                        required: true
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
            text: 'Request Statement',
            ui: 'action',
            handler: 'viewContributions',
            validators: 'date'
        }
    ],
})