Ext.define('MssPhoenix.view.phone.admin.manage.ManageAccount', {
    extend: 'MssPhoenix.view.widgets.ModuleContainer',
    controller: 'membermanageaccountcontroller',
    xtype:'admin-manageaccount',
    height:900,
    scrollable: true,
    items: [{
        xtype: 'container',
       
        padding:15,
        layout: {
            type: 'vbox',
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
                        height: 89,
                        width:89,
                        style:{
                            'border-radius':'50%'
                        }
                    },
                    {
                        maxWidth:486,
                        xtype: 'container',
                        layout:{
                            type:'vbox'
                        },
                        alignSelf:'center',
                        padding: 20,
                        flex: 1,
                        margin: '10 0 0 0',
                        items: [
                           
                            //  {
                            //     xtype: 'component',
                            //     bind:{
                            //         html: '{userInfo}'
                            //     }
                            // },
                           {  html:`<blockquote style="border-left: 3px solid #eee;padding-left: 15px;">
                                <h3>Newton K</h3>
                                Member since: <strong>Feb 20,2020</strong><br/>                                
                                Membership Status: <strong>Active</strong><br/>
                                Member NO: <b>5522281</b> <a href="#" style="margin-left:10px"><i class="fa fa-pen"></i></a><br/>
                             </blockquote>`
                            },
                            // {
                            //     xtype:'button',
                            //     text:'Member Certificate',
                            //     ui:'action'
                            // }
                        ]
                    }

                ]
            },
{height:30},
            {
                height: 320,
                margin: '0 30 0 20',
                flex: 1,
                xtype: 'phone-changepwd',
                // changepwd
            }

        ]
    }]
});