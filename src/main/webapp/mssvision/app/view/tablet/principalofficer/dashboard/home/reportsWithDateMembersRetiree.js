Ext.define('MssPhoenix.view.tablet.principalofficer.dashboard.home.MembersRetiree', {
    extend: 'MssPhoenix.view.widgets.Window',

    xtype: 'reportswithdatemembersretiree',
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
                itemId: 'membersToretire',
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
                        minDate: new Date(),
                        required: true
                    },

                    {
                        label: 'To',
                        margin: '0 0 0 10',
                        value: new Date(),
                        minDate: new Date(),
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
            text: 'View report',
            ui: 'action',
            handler: 'membersToretire',
            validators: 'date'
        }
    ],
})