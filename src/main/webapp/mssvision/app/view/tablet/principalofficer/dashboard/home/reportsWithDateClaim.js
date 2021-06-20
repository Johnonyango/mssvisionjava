Ext.define('MssPhoenix.view.tablet.principalofficer.dashboard.home.reportsWithdateClaim', {
    extend: 'MssPhoenix.view.widgets.Window',

    xtype: 'reportswithdateclaim',
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
                itemId: 'viewClaims',
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
            text: 'View report',
            ui: 'action',
            handler: 'viewClaims',
            validators: 'date'
        }
    ],
})