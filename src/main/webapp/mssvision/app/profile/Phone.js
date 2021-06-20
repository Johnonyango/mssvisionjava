Ext.define('MssPhoenix.profile.Phone', {
    extend: 'Ext.app.Profile',

    views: {
        main: 'MssPhoenix.view.phone.main.Main',
        

        //sponsor
        sponsorhome: 'MssPhoenix.view.phone.sponsor.home.Home',
        mainsponsorpersonalinfo: 'MssPhoenix.view.phone.sponsor.personalinfo.MainPersonalInfo',
        sponsorbills: 'MssPhoenix.view.phone.sponsor.bills.Bills',
        sponsormanageaccount: 'MssPhoenix.view.phone.sponsor.account.ManageAccount',
        sponsorstagedcontributions: 'MssPhoenix.view.phone.sponsor.stagedcontributions.StagedContributions',
        sponsormembers: 'MssPhoenix.view.phone.sponsor.members.Members',
        sponsorclaims: 'MssPhoenix.view.phone.sponsor.claims.Claims',
        sponsordms: 'MssPhoenix.view.phone.sponsor.documents.DMS',
        sponsorusers: 'MssPhoenix.view.phone.sponsor.user.Users',
        sponsorreceipts: 'MssPhoenix.view.phone.sponsor.receipt.Receipts',

        //Crm
        crmhome:'MssPhoenix.view.phone.crm.home.CrmHome',
        crmclaims:'MssPhoenix.view.phone.crm.claims.CrmClaims',
        crmsponsor:'MssPhoenix.view.phone.crm.sponsor.CrmSponsor',
        crmmanageaccount:'MssPhoenix.view.phone.crm.manage.ManageAccount',
        crmphonemembers: 'MssPhoenix.view.phone.crm.member.CrmMembers',
        crmphonemainmemberdetails: 'MssPhoenix.view.phone.crm.member.CrmMainMemberDetails',

        //pensioner
        pensionerhome:'MssPhoenix.view.phone.pensioner.home.Home',
        pensionermanageaccount:'MssPhoenix.view.phone.pensioner.manage.ManageAccount',
        pensionermainpersonalinfo:'MssPhoenix.view.phone.pensioner.personalinfo.MainPersonalInfo',
        pensionercertificate:'MssPhoenix.view.phone.pensioner.COE.Coe',
        pensionerdeductions:'MssPhoenix.view.phone.pensioner.Deductions.Deductions',
        pensionerpayrolls: 'MssPhoenix.view.phone.pensioner.payrolls.Payrolls',

        //shared
        mainticket: 'MssPhoenix.view.phone.shared.ticket.MainTicket',
        adminmainticket: 'MssPhoenix.view.phone.shared.ticket.AdminMainTicket',
        userticket: 'MssPhoenix.view.phone.shared.ticket.UserTicket',
        supportticketmessage: 'MssPhoenix.view.phone.shared.ticket.SupportTicketMessage',
        userticketmessage: 'MssPhoenix.view.phone.shared.ticket.UserTicketMessage',
        multiuseractivitylogs:'MssPhoenix.view.phone.shared.activityLogs.MultiUserActivityLogs',
        singleuseractivitylogs:'MssPhoenix.view.phone.shared.activityLogs.SingleUserActivityLogs',
        maininbox: 'MssPhoenix.view.tablet.shared.notifications.MainInbox',

        memberhome: 'MssPhoenix.view.phone.member.home.Home',
        memberetlhome: 'MssPhoenix.view.phone.member.home.EtlHome',
        membermainpersonalinfo: 'MssPhoenix.view.phone.member.personalinfo.MainPersonalInfo',
        allmemberdetails: 'MssPhoenix.view.phone.member.personalinfo.AllMemberDetails',
        membercontributions: 'MssPhoenix.view.phone.member.contributions.Contributions',
        memberbalances: 'MssPhoenix.view.phone.member.balances.Balances',
        memberclaims: 'MssPhoenix.view.phone.member.claims.Claims',
        memberprojections: 'MssPhoenix.view.phone.member.projections.Projections',
        membermanageaccount: 'MssPhoenix.view.phone.member.manage.ManageAccount',
        memberdocuments: 'MssPhoenix.view.phone.member.documents.MemberDocuments',
        membermissingdocuments: 'MssPhoenix.view.phone.member.documents.MemberMissingDocuments',
        membersubmitteddocs: 'MssPhoenix.view.phone.member.documents.MemberSubmittedDocs',
        memberreceiveddocs: 'MssPhoenix.view.phone.member.documents.ReceivedDocuments',
        memberuploadeddocs: 'MssPhoenix.view.phone.member.documents.UploadedDocuments',


        //admin        
       adminusers:'MssPhoenix.view.phone.admin.User.Users',
       manageadmins:'MssPhoenix.view.phone.admin.ManageAdmin.Admins',
       manageaccount:'MssPhoenix.view.phone.admin.manage.ManageAccount',
       adminsessions: 'MssPhoenix.view.phone.admin.Session.Sessions',
       adminhome:'MssPhoenix.view.phone.admin.home.AdminHome',
       modulepermissions:'MssPhoenix.view.phone.admin.permissions.Permissions',    
       landingpage:'MssPhoenix.view.phone.admin.LandingPageContent.ChangeLandingpage',
       faq:'MssPhoenix.view.phone.admin.faq.Faq',
       logo: 'MssPhoenix.view.phone.admin.LandingPageContent.edits.Logo.Logo',
       
    },

    statics:{
        isPhone: function () {
            return Ext.platformTags.phone;
        }
    },

    isActive: function() {
        return Ext.platformTags.phone;
    },

    launch: function() {
        // Add a class to the body el to identify the phone profile so we can
        // override CSS styles easily. The framework adds x-phone so we could
        // use it but this way the app controls a class that is always present
        // when this profile isActive, regardless of the actual device type.
        Ext.getBody().addCls('phone-profile');
    }
});