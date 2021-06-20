Ext.define('MssPhoenix.view.tablet.sponsor.members.MemberContactDetails', {
    extend: 'MssPhoenix.view.widgets.Module',

    xtype: 'memberscontactdetails',

  
    items: [
        {
            cls: 'module-head',
            xtype: 'component',
            html: `<h3>Contact Details</h3>`,
        },
        {
            cls: 'module-body',
            xtype: 'container',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            defaults: {
                width: '100%',
                xtype: 'container',
                layout:{
                    type:'hbox',
                    align: 'stretch',
                }
            },
            items: [
                {
                    items: [{
                        xtype: 'mitextfield',
                        label: 'Email',
                        name: 'EMAIL',
                        
                        vtype: 'email',
                        margin: '10 0 0 0',
                        cls:'readonly'
                    },]
                },
                {
                    items: [
                        {
                            xtype: 'mitextfield',
                            label: 'Primary Phone No.',
                            name: 'PHONE1',
                          
                            margin: '10 0 0 0',
                            cls:'readonly'
                        },
                        {
                            xtype: 'mitextfield',
                            label: 'Secondary Phone No.',
                            margin: '10 0 0 6',
                            cls:'readonly',
                            name: 'PHONE2',
                        }
                    ]
                },

                {
                    items: [
                        {
                            xtype: 'mitextfield',
                            label: 'Company',
                            margin: '10 0 0 0',
                            name: 'Systech',
                
                            cls:'readonly'
                        },
                    ]
                },

                {
                    items: [
                        
                        {
                            xtype: 'mitextfield',
                            label: 'Country',
                            name: 'COUNTRY',
                        
                            displayField: 'name',
                            margin: '10 0 0 0',
                            valueField: 'value',
                            cls:'readonly'      
                        },
                    ]
                }

            ]
        }
    ]

});
