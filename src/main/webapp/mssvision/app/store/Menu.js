Ext.define('MssPhoenix.store.Menu', {
    extend: 'Ext.data.Store',
    alias: 'store.menu',

    data: [

        // // ////////Start Member
        // // {
        // //     id: 'home',
        // //     xtype: 'memberhome',
        // //     text: 'Home',
        // //     icon: 'home'
        // // }, {
        // //     id: 'membermainpersonalinfo',
        // //     xtype: 'membermainpersonalinfo',
        // //     text: 'Personal Info',
        // //     icon: 'user'
        // // }, {
        // //     id: 'membercontributions',
        // //     xtype: 'membercontributions',
        // //     text: 'Contributions',
        // //     icon: 'sitemap'
        // // }, {
        // //     id: 'memberbalances',
        // //     xtype: 'memberbalances',
        // //     text: 'Balances',
        // //     icon: 'money-bill'
        // // },
        // // {
        // //     id: 'memberclaims',
        // //     xtype: 'memberclaims',
        // //     text: 'Claims',
        // //     icon: 'leaf'
        // // },
        // // {
        // //     id: 'memberprojections',
        // //     xtype: 'memberprojections',
        // //     text: 'Projections',
        // //     icon: 'cog'
        // // },
        // // {
        // //     id: 'memberhome',
        // //     xtype: 'memberhome',
        // //     text: 'Tickets',
        // //     icon: 'list'
        // // },  {
        // //     id: 'membermanageaccount',
        // //     xtype: 'membermanageaccount',
        // //     text: 'Manage Account',
        // //         icon:'cogs'
        // // },
        // // {
        // //     id: 'memberaudittral',
        // //     xtype: 'memberaudittral',
        // //     text: 'Activity Log',
        // //     icon: 'rss'
        // // },
        // // ////////<---End Member-->

        // // ////sponsor

        // {
        //     id: 'home',
        //     xtype: 'sponsorhome',
        //     text: 'Home',
        //     icon: 'home'
            
        // },
        // {
        //     id: 'sponsorpersonalinfo',
        //     xtype: 'sponsorpersonalinfo',
        //     text: 'Sponsor Information',
        //     icon: 'user'
        // }, {
        //     id: 'sponsormembers',
        //     xtype: 'sponsormembers',
        //     text: 'Members',
        //     icon: 'sitemap'
        // }, {
        //     id: 'sponsorclaims',
        //     xtype: 'sponsorclaims',
        //     text: 'Claims',
        //     icon: 'leaf'
        // },
        // {
        //     id: 'sponsorbills',
        //     xtype: 'sponsorbills',
        //     text: 'Billing',
        //     icon: 'money-bill'
        // }, {
        //     id: 'sponsorreceipts',
        //     xtype: 'sponsorreceipts',
        //     text: 'Receipts',
        //     icon: 'money-bill'
        // }, {
        //     id: 'sponsortickets',
        //     xtype: 'sponsortickets',
        //     text: 'Tickets',
        //     icon: 'list'
        // },
        // {
        //     id: 'sponsorusers',
        //     xtype: 'sponsorusers',
        //     text: 'Users',
        //     icon: 'cogs'
        // },
        // {
        //     id: 'sponsormanageaccount',
        //     xtype: 'sponsormanageaccount',
        //     text: 'Manage Account',
        //     icon: 'cog'
        // },
        // {
        //     id: 'sponsoractivitylogs',
        //     xtype: 'sponsoractivitylogs',
        //     text: 'Activity Logs',
        //     icon: 'rss'
        // },

        // // //////End Sponsor

        // // //////Pensioner

        // {
        //     id: 'home',
        //     xtype: 'pensionerhome',
        //     text: 'PENSIONER',
        //     icon: 'home'
        // },
        // {
        //     id: 'pensionerpersonalinfo',
        //     xtype: 'pensionerpersonalinfo',
        //     text: 'Personal Info',
        //     icon: 'user'
        // },
        //  {
        //     id: 'pensionerpayrolls',
        //     xtype: 'pensionerpayrolls',
        //     text: 'Payrolls',
        //     icon: 'sitemap'
        // }, 
        // {
        //     id: 'pensionerbeneficiary',
        //     xtype: 'pensionerbeneficiary',
        //     text: 'Beneficiaries',
        //     icon: 'user'
        // },
        // {
        //     id: 'pensioneraccountinfo',
        //     xtype: 'pensioneraccountinfo',
        //     text: 'Account Info',
        //     icon: 'leaf'
        // },
        //  {
        //     id: 'pensionercertificate',
        //     xtype: 'pensionercertificate',
        //     text: 'C.O.E',
        //     icon: 'cog'
        // },
    
     
        //  {
        //     id: 'manageaccount',
        //     xtype: 'manageaccount',
        //     text: 'C.O.E',
        //     icon: 'cogs'
        // },
        // {
        //     id: 'pensioneraudittrail',
        //     xtype: 'pensioneraudittrail',
        //     text: 'Activity Log',
        //     icon: 'rss'
        // },

        // // //////End Pensioner

        // // //////Admin

        // // //////End Admin

        // // //////CRM

        // // {
        // //     id: 'home',                               
        // //     text: 'Dashboard',
        // //     xtype:'crmhome',
        // //     icon: 'home',

        // // }, {
        // //     id: 'crmmaindetails',
        // //     xtype: 'crmmaindetails',
        // //     text: 'Personal Information',
        // //     icon: 'user'
        // // }, {
        // //     id: 'crmsponsor',
        // //     xtype: 'crmsponsor',
        // //     text: 'Sponsors',
        // //     icon: 'sitemap'
        // // },
        // // {
        // //     id: 'crmmembers',
        // //     xtype: 'crmmembers',
        // //     text: 'crmmembers',
        // //     icon: 'leaf'
        // // }, {
        // //     id: 'crmmainmemberdetails',
        // //     xtype: 'crmmainmemberdetails',
        // //     text: 'crmmainmemberdetails',
        // //     icon: 'list',
        // // },
        // // {
        // //     id: 'crmscheme',
        // //     xtype: 'crmscheme',
        // //     text: 'crmscheme',
        // //     icon: 'cog'
        // // },
        // // {
        // //     id: 'crmactivitylog',
        // //     xtype: 'crmactivitylog',
        // //     text: 'Activity Log',
        // //     icon: 'cog'
        // // },

        // // //////End CRM

    ]
});