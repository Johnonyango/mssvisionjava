Ext.define('MssPhoenix.view.phone.sponsor.members.Members', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',
    xtype : 'sponsormembersphone', 
    
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    
    controller:'membersponsorgridcontroller',
    
    defaults:{
        width:'100%'
    },
  
    items: [{
        xtype: 'container',
        scrollable: true,
        scrollable: 'y',
        height:'100%',
        
        items: [{
                xtype: 'module',
                margin: '10 10 10 10',
                items: [{
                        xtype: 'component',
                        cls: 'module-head',
                        html: '<h3>Members</h3>'
                    },
                ],
                items: [{
                    xtype: 'container',
                    padding: '15px',
                    scrollable: true,
                    items: [
                        {
                            xtype:'button',
                            text: 'Add Single Member',
                            handler: 'onAddSingleUserButtonClick',
                            ui:'action'
                        },  
                        {
                            xtype:'button',
                            text: 'Add /Update Members in Batch',
                            handler: 'onAddMembersInBatchButtonClick',
                            ui:'action',
                            margin: '5 0 0 0',
                        },
                        {
                            xtype: 'fieldset',
                            title: 'Search',
                            margin: '10 0 0 0',
                            items: [
                                {
                                    xtype: 'formpanel',
                                    reference: 'searchMember',
                                    itemId: 'searchMember',                
                                    layout: {
                                        type: 'vbox',
                                    },
                                    items: [
                                        {
                                            xtype: 'mitextfield',
                                            name: 'searchValue',
                                            placeholder: 'Enter search key',
                                            tooltip: 'Enter search key',
                                            allowBlank: false,
                                        },
                                        {
                                            xtype: 'selectbox',
                                            margin: '0 0 0 6',
                                            placeholder: 'Select Identifier',
                                            tooltip: 'Select Search Indentifier',
                                            name: 'searchIndentifier',
                                            store: {
                                                fields: ['value', 'name'],
                                                data: [
                                                {
                                                    "value": "FIRST_NAME",
                                                    "name": "First Name"
                                                },
                                                {
                                                    "value": "SURNAME",
                                                    "name": "Sur-Name"
                                                },
                                                ]
                                            },
                                            displayField: 'name',
                                            valueField: 'value',
                                            allowBlank: false,
                                        }
                                    ],
                                    bbar: [
                                        '->',
                                        {
                                            xtype: 'button',
                                            scale: 'small',
                                            iconCls: 'x-fa fa-search',
                                            ui: 'action',
                                            handler: 'searchMember'
                                        },
                                        {
                                            iconCls:'fa fa-redo',
                                            handler: 'reloadMemberGrid',
                                            ui: 'action'
                                        }, 
                                        {
                                            xtype: 'button',
                                            ui: 'action',
                                            text: 'reset search',
                                            handler: 'resetSearch'
                                        },
                                    ]
                                },
                            ]
                        },
            
                        {
                            xtype: 'container',
                            cls: 'module-body',
                            scrollable: false,
                            height: "95%",
                            items: [
                                // {
                                //     xtype: 'sponsorusersgridphone',
            
                                // },
                                {
                                    xtype: 'label',
                                    margin: '0 0 0 0',
                                    html: '<span style="color: #002c65; font-weight: 700">A record of Members under the Sponsor.</span>'
                                },
                                {
                                    xtype: 'list',
                                    grouped: false,
                                    emptyText: 'loading...',
                                    height: "95%",
                                    scrollable: true,
                                    store: {
                                        type: 'sponsormember'
                                    },
                                
                                    itemTpl: [
                                        '<div><b>Member Number: </b><span>{memberNo}</span></div>',
                                        '<div><b>Member Name : </b><span>{name}</span></div>',
                                        '<div><b>Email : </b><span>{email}</span></div>',
                                        '<div><b>Id Number: </b><span>{idNo}</span></div>',
                                        '<div><b>Cell Phone : </b><span>{cellPhone}</span></div>',
                                        '<div><b>Date Of Birth : </b><span>{dob}</span></div>',
                                        '<div><b>Date Of Joining : </b><span>{dateJoinedScheme}</span></div>',
                                        '<div><b>Status : </b><span>{mbshipStatus}</span></div>',
                                    ],
                
                                    listeners: {
                                        select: 'onviewMemberdetailsButtonClick',
                                        //select: 'DropUserActionBtnPhoneClick'
                                    }
                                }
                            ]
                        }
                    ]
                }]
            }, 
        ]

    }]
});