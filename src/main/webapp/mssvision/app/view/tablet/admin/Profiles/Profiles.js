Ext.define('MssPhoenix.view.tablet.admin.Profiles.Profiles', {
    extend: 'Ext.Container',

    // Uncomment to give this component an xtype 
    xtype: 'adminprofiles',
    controller: 'profilescontroller',

    items: [{
        xtype: 'module',
        margin: '30 0 0 0',
        layout: {
            type: 'hbox'
        },
        items: [
            {
                xtype: 'fieldset',
                title: 'Profiles',
                width: '40%',
                items: [
                    {
                        xtype: 'formpanel',
                        reference: 'adminprofilesform',
                        jsonSubmit: true,
                        items: [
                            {
                                xtype: 'selectbox',
                                label: 'Profile',
                                name: 'name',
                                store: {
                                    type: 'profile'
                                },
                                displayField: 'name',
                                valueField: 'name',
                                editable: false,
                                required: true
                            },
                            {
                                xtype: 'selectbox',
                                label: 'Login Identifier',
                                name: 'loginIdentifierName',
                                store: {
                                    type: 'LoginIdentifiers'
                                },
                                displayField: 'loginIdentifierName',
                                valueField: 'loginIdentifierName',
                                editable: false,
                                required: true,
                            }
                        ],
                        bbar: [
                            '->',
                            {
                                text: 'Save',
                                ui: 'action',
                                handler: 'saveProfile'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'table',
                width: '55%',
                store: {
                    type: 'profile'
                },
                columns: [
                    {text: 'Name', dataIndex: 'name', flex: 1,},
                    {text: 'Login Identifier', dataIndex: 'loginIdentifierName', flex: 1,}
                ]
            },
        ]
    }]
});