Ext.define('MssPhoenix.profile.Tablet', {
    extend: 'Ext.app.Profile',

    views: {
        main: 'MssPhoenix.view.tablet.main.Main',

        //MEMBER
        memberhome: 'MssPhoenix.view.tablet.member.home.Home',
        memberetlhome: 'MssPhoenix.view.tablet.member.home.EtlHome',
        membermainpersonalinfo: 'MssPhoenix.view.tablet.member.personalinfo.MainPersonalInfo',
        allmemberdetails: 'MssPhoenix.view.tablet.member.personalinfo.AllMemberDetails',
        membercontributions: 'MssPhoenix.view.tablet.member.contributions.Contributions',
        memberbalances: 'MssPhoenix.view.tablet.member.balances.Balances',
        memberclaims: 'MssPhoenix.view.tablet.member.claims.Claims',
        memberprojections: 'MssPhoenix.view.tablet.member.projections.Projections',
        membermanageaccount: 'MssPhoenix.view.tablet.member.manage.ManageAccount',
        memberdocuments: 'MssPhoenix.view.tablet.member.documents.MemberDocuments',
        membermissingdocuments: 'MssPhoenix.view.tablet.member.documents.MemberMissingDocuments',

        //PO
        pohome: 'MssPhoenix.view.tablet.principalofficer.home.Home',
        poschemes: 'MssPhoenix.view.tablet.principalofficer.schemes.PoSchemes',
        pomainpersonalinfo: 'MssPhoenix.view.tablet.principalofficer.personalinfo.MainPersonalInfo',
        posponsors: 'MssPhoenix.view.tablet.principalofficer.sponsors.PoSponsors',
        podashboard: 'MssPhoenix.view.tablet.principalofficer.dashboard.home.Dashboard',
        pomembersdetails: 'MssPhoenix.view.tablet.principalofficer.dashboard.memberdetails.MemberDetails',
        pomanageaccount: 'MssPhoenix.view.tablet.principalofficer.manage.PoManageAccount',
        allclaims: 'MssPhoenix.view.tablet.principalofficer.personalinfo.claims.Allclaims',
        paidclaims: 'MssPhoenix.view.tablet.principalofficer.personalinfo.claims.PaidClaims',
        registeredmembers: 'MssPhoenix.view.tablet.principalofficer.registeredmembers.RegisteredMembers',
        registeredmemberdetails: 'MssPhoenix.view.tablet.principalofficer.registeredmembers.RegisteredMemberDetails',

        //Crm
        crmhome: 'MssPhoenix.view.tablet.crm.home.CrmHome',
        crmmanageaccount: 'MssPhoenix.view.tablet.crm.manage.CrmManageAccount',
        crmsponsor: 'MssPhoenix.view.tablet.crm.sponsor.CrmSponsor',
        crmmembers: 'MssPhoenix.view.tablet.crm.member.CrmMembers',
        crmmainmemberdetails: 'MssPhoenix.view.tablet.crm.member.CrmMainMemberDetails',
        crmscheme: 'MssPhoenix.view.tablet.crm.scheme.CrmScheme',
        crmclaims: 'MssPhoenix.view.tablet.crm.claims.CrmClaims',

        //cre
        crehome: 'MssPhoenix.view.tablet.cre.home.CreHome',
        crescheme: 'MssPhoenix.view.tablet.cre.scheme.CreScheme',
        cremanageaccount: 'MssPhoenix.view.tablet.cre.manage.CreManageAccount',
        cresponsor: 'MssPhoenix.view.tablet.cre.sponsor.CreSponsor',
        cremembers: 'MssPhoenix.view.tablet.cre.member.CreMembers',
        cremembersdetails: 'MssPhoenix.view.tablet.cre.memberdetails.MemberDetails',

        //shared
        userticketmessage: 'MssPhoenix.view.tablet.shared.ticket.UserTicketMessage',
        supportticketmessage: 'MssPhoenix.view.tablet.shared.ticket.SupportTicketMessage',
        mainticket: 'MssPhoenix.view.tablet.shared.ticket.MainTicket',
        adminmainticket: 'MssPhoenix.view.tablet.shared.ticket.AdminMainTicket',
        userticket: 'MssPhoenix.view.tablet.shared.ticket.UserTicket',
        multiuseractivitylogs: 'MssPhoenix.view.tablet.shared.activitylog.MultiUserActivityLogs',
        singleuseractivitylogs: 'MssPhoenix.view.tablet.shared.activitylog.SingleUserActivityLogs',
        maininbox: 'MssPhoenix.view.tablet.shared.notifications.MainInbox',

        //SPONSOR
        sponsorhome: 'MssPhoenix.view.tablet.sponsor.home.Home',
        mainsponsorpersonalinfo: 'MssPhoenix.view.tablet.sponsor.personalinfo.MainPersonalInfo',
        sponsormembers: 'MssPhoenix.view.tablet.sponsor.members.Members',
        sponsorclaims: 'MssPhoenix.view.tablet.sponsor.claims.Claims',
        sponsorbills: 'MssPhoenix.view.tablet.sponsor.bills.Bills',
        sponsorbillsetlview: 'MssPhoenix.view.tablet.sponsor.bills.ETLBills',
        sponsorstagedcontributions: 'MssPhoenix.view.tablet.sponsor.stagedcontributions.StagedContributions',
        sponsorreceipts: 'MssPhoenix.view.tablet.sponsor.receipt.Receipts',
        sponsordms: 'MssPhoenix.view.tablet.sponsor.documents.DMS',
        sponsorusers: 'MssPhoenix.view.tablet.sponsor.user.Users',
        sponsormanageaccount: 'MssPhoenix.view.tablet.sponsor.account.ManageAccount',
        sponsormembersdetails: 'MssPhoenix.view.tablet.sponsor.memberdetails.MemberDetails',
        sponsormemberall: 'MssPhoenix.view.tablet.sponsor.members.SponsorMemberAll',
        sponsortpfa:'MssPhoenix.view.tablet.sponsor.tpfa.TPFA',

        // Pensioner
        pensionerhome: 'MssPhoenix.view.tablet.pensioner.home.Home',
        pensionerpersonalinfo: 'MssPhoenix.view.tablet.pensioner.personalinfo.PersonalInfo',
        pensionermainpersonalinfo: 'MssPhoenix.view.tablet.pensioner.personalinfo.MainPersonalInfo',
        pensionerpayrolls: 'MssPhoenix.view.tablet.pensioner.payrolls.Payrolls',
        pensionerbeneficiary: 'MssPhoenix.view.tablet.pensioner.personalinfo.Beneficiary',
        pensioneraccountinfo: 'MssPhoenix.view.tablet.pensioner.accounts.Accounts',
        pensionerdeductions: 'MssPhoenix.view.tablet.pensioner.deductions.Deductions',
        pensionercertificate: 'MssPhoenix.view.actions.pensioner.certificates.Certificate',
        pensionermanageaccount: 'MssPhoenix.view.tablet.pensioner.manage.ManageAccount',

        //ADMIN
        adminusers: 'MssPhoenix.view.tablet.admin.User.Users',
        manageadmins: 'MssPhoenix.view.tablet.admin.ManageAdmin.Admins',
        manageaccount: 'MssPhoenix.view.tablet.admin.manage.ManageAccount',
        adminsessions: 'MssPhoenix.view.tablet.admin.Session.Sessions',
        adminhome: 'MssPhoenix.view.tablet.admin.home.AdminHome',
        modulepermissions: 'MssPhoenix.view.tablet.admin.permissions.Permissions',
        adminsettings: 'MssPhoenix.view.tablet.admin.Settings.Settings',
        landingpage: 'MssPhoenix.view.tablet.admin.LandingPageContent.ChangeLandingpage',
        faq: 'MssPhoenix.view.tablet.admin.faq.Faq',
        admindocs: 'MssPhoenix.view.tablet.admin.documents.AdminDocs',
    },


    isActive: function () {
        return !Ext.platformTags.phone;
    },

    launch: function () {
        // Add a class to the body el to identify the phone profile so we can
        // override CSS styles easily. The framework adds x-phone so we could
        // use it but this way the app controls a class that is always present
        // when this profile isActive, regardless of the actual device type.
        Ext.getBody().addCls('tablet-profile');
    }
});