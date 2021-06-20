Ext.define('MssPhoenix.view.tablet.admin.User.NewUsersOfDayAccrossProfiles', {
    extend: 'MssPhoenix.view.widgets.Window',

    xtype: 'newuserofdayacrossprofiles',
    width: 400,
    closable: true,
    controller: 'userscontroller',
    title: 'View Report',

    items: [
        {
            xtype: 'container',
            cls: 'module-body',
            items: [{
                xtype: 'formpanel',
                itemId: 'form',
                reference: 'form',
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                },
                defaults: {
                    border: false,
                    xtype: 'midatefield',
                },
                items: [
                    {
                        label: 'Select Date',
                        placeholder: 'Select From Date',
                        tooltip: 'Select Date',
                        name: 'asAt',
                        dateFormat: 'd-m-Y',
                        margin: '0 6 0 6',
                        validators: 'date',
                        maxDate: new Date(),
                        required: true,

                    },
                    {
                        label: 'Select Date',
                        placeholder: 'Select End Date',
                        tooltip: 'Select Date',
                        name: 'asTo',
                        dateFormat: 'd-m-Y',
                        margin: '0 6 0 6',
                        validators: 'date',
                        maxDate: new Date(),
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
            handler: 'viewreportOfUserInDayAcrossProfile',
            validators: 'date'
        }
    ],
})