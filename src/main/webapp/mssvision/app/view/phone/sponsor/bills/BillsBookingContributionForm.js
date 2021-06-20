Ext.define('MssPhoenix.view.phone.sponsor.bills.BillsBookingContributionForm', {
    extend: 'MssPhoenix.view.widgets.Window',
    xtype: 'bookcontributionbillphoneform',
    padding: 15,
    scrollable:true,
    height:500,
    closable:true,

    controller:'billsbookingcontributionformcontroller',    

    items: [
        {
            xtype: 'module',
            items: [
                {
                    xtype: 'container',
                    cls: 'module-body',
                    layout: {
                        type: 'vbox',
                        align: 'stretch',
                    },
                    defaults: {
                        width: '100%',
                        xtype: 'container',
                        layout: {
                            type: 'vbox',
                            align: 'stretch',
                        }
                    },
                    items: [
                        {
                            xtype: 'toolbar',
                            cls:'module-head',
                            items: [
                             
                                {
                                    xtype: 'component',
                                    
                                    html:'<h3>Book Contribution Bills</h3>'
                                },
                            ]
                        },    
                        
                        {
                            items: [{
                                xtype:'formpanel',
                                reference: 'form',
                                jsonSubmit: true,
                                layout: {
                                    type: 'vbox',
                                    align: 'stretch',
                                },
                                items:[
                                    {
                                        xtype: 'numberfield',
                                        hidden:true,
                                        name: 'schemeId',
                                        bind:{
                                            value:`${MssPhoenix.model.Session.getSchemeId()}`,
                                        }
                                      
                                        
                                    },
                                    {
                                        xtype: 'numberfield',
                                        hidden:true,
                                        name: 'sponsorId',
                                        bind:{
                                            value:`${MssPhoenix.model.Session.getSponsorIdField()}`,
                                        }
                                    }, 
                                    {
                                        xtype: 'midatefield',
                                        label: 'Booking Invoice Date',
                                        name: 'bookingDate',
                                        maxDate:new Date(),
                                        margin:'10 0 0 5',  
                                        id:'bookdateid',
                                        reference: 'datefieldpickone',
                                        itemId:'bookingDateId',
                                        listeners: {
                                            'change': function () {
                                                let bookdate = Ext.getCmp('bookdateid').getValue();
                                                let dated = new Date(bookdate);
                                                       
                                                let day = 14;
                                                if(dated.getMonth()==12){
                                                    let newDueDate = new Date();
                                                    newDueDate.setFullYear(dated.getFullYear()+1,dated.getMonth()+1,day);
                                                    
                                                   
                                                    Ext.getCmp('duedateid').setValue(newDueDate);
                                                    Ext.getCmp('yearid').setValue(newDueDate.getFullYear());

                                                    Ext.getCmp('monthid').setValue(monthNames[newDueDate.getMonth()]);
                                                }
                                                else{
                                                    let newDueDate = new Date();
                                                    newDueDate.setFullYear(dated.getFullYear(),dated.getMonth()+1,day);

                                                    Ext.getCmp('duedateid').setValue(newDueDate);
                                                    Ext.getCmp('yearid').setValue(dated.getFullYear());

                                                    const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
                                                    "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
                                                    ];;
                                                    Ext.getCmp('monthid').setValue(monthNames[newDueDate.getMonth()]);
                                                   
                                                    
                                                }
                                            }
                                        },
                                        
                                      
                                    },
                                    {
                                        xtype: 'midatefield',
                                        label: 'Payment Expected Date',
                                        name: 'dueDate',
                                        id:'duedateid',
                                        margin:'10 0 0 5',
                                        reference: 'datefieldpicktwo',
                                        itemId:'dueDateId',
                                        readOnly:true,
                                        handler:'dueDateHandler'
                                        
                               
                                    }, 
                                    {
                                        xtype: 'textfield',
                                        label: 'Path',
                                        hidden:true,
                                        name: 'finalPath',
                                        margin:'10 0 0 5',
                                        value:'/home/opc/servers/johnteServer/wildfly/XI_Fundmaster_scheme_docs'
                
                               
                                    },              
                                    {
                                        xtype: 'minumberfield',
                                        label: 'Year',
                                        name: 'year',
                                        id:'yearid',
                                        readOnly:true,
                                        margin:'10 0 0 5',
                                    }, 
                                    {
                                        xtype: 'micombobox',
                                        label: 'Month',
                                        queryMode: 'local',
                                        id:'monthid',
                                        displayField: 'name',
                                        name: 'month',
                                        valueField: 'abbr',
                                        readOnly:true,
                                        margin:'10 0 0 5',

                                        store: [
                                            { abbr: 'JAN', name: 'January' },
                                            { abbr: 'FEB', name: 'February' },
                                            { abbr: 'MAR', name: 'March' },
                                            { abbr: 'APR', name: 'April' },
                                            { abbr: 'MAY', name: 'May' },
                                            { abbr: 'JUN', name: 'June' },
                                            { abbr: 'JUL', name: 'July' },
                                            { abbr: 'AUG', name: 'August' },
                                            { abbr: 'SEP', name: 'September' },
                                            { abbr: 'OCT', name: 'October' },
                                            { abbr: 'NOV', name: 'November' },
                                            { abbr: 'DEC', name: 'December' }
                                        ]
                                    },  
                                   
                                   
                                ]
                            }
                               
                            
                         ],
                        
                        }
                       
                    ],
                }
            ]
        }
    ],
    buttons: [
        {
            text: 'Process',
            formBind: true,
            handler: 'onProcessBtnClick'
        },
        {
            text: 'Cancel',
            handler: 'onCancelBtnClick'
        }
    ]

});

