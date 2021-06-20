Ext.define('MssPhoenix.view.tablet.admin.manage.ManageAccount', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',
    controller: 'adminmanageaccountcontroller',
    xtype:'admin-manageaccount',
    viewModel:'adminmanageaccountviewmodel',
    items: [{
        xtype: 'container',
        scrollable: true,
        padding:15,
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
        items: [

            {
                xtype: 'container',
                cls:'module-head',
                height:400,
                flex:1,
                layout:{
                    type:'vbox',
                    align:'center',
                },
                items: [
                    {
                        xtype: 'image',
                        cls: 'roundedCorner',
                        alt: 'Current user image',
                        src: '<shared>/images/avatar.jpg',
                        height: 189,
                        width:189,
                        style:{
                            'border-radius':'50%'
                        }
                    },
                    {
                        maxWidth:356,
                        xtype: 'container',
                        layout:{
                            type:'vbox'
                        },
                        alignSelf:'center',
                        padding: 20,
                        flex: 1,
                        margin: '10 0 0 0',
                        items: [
                           
                             {
                                xtype: 'component',
                                bind:{
                                    html: '{userInfo}'
                                }
                            },
                        //    {  html:`<blockquote style="border-left: 3px solid #eee;padding-left: 15px;">
                        //         <h3>Newton K</h3>
                        //         Member since: <strong>Feb 20,2020</strong><br/>                                
                        //         Membership Status: <strong>Active</strong><br/>
                        //         Member NO: <b>5522281</b> <a href="#" style="margin-left:10px"><i class="fa fa-pen"></i></a><br/>
                        //      </blockquote>`
                        //     },
                            // {
                            //     xtype:'button',
                            //     text:'Member Certificate',
                            //     ui:'action'
                            // }
                        ]
                    }

                ]
            },

            {
                height: 320,
                margin: '0 30 0 20',
                flex: 1,
                xtype: 'changepwd',
            }

        ]
    }]
});