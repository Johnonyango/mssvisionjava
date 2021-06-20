Ext.define('MssPhoenix.view.main.MainController', {
    extend: 'MssPhoenix.view.tablet.shared.BaseController',
    alias: 'controller.main',
    id: 'maincontroller',

    routes: {
        ':type(/:args)?': {
            action: 'handleNavigationRoute',
            conditions: {
                // NOTE(SB): how to build this list automatically from the Menu store?
                ':type': '(' +
                    //member
                    'personnel|home|membermainpersonalinfo|allmemberdetails|membercontributions|memberbalances|memberclaims|' +
                    'membermanageaccount|memberprojections|memberdocuments|membermissingdocuments|membersubmitteddocs|' +
                    'memberreceiveddocs|memberuploadeddocs|memberetlhome' +
                    //admin
                    '|adminusers|manageadmins|manageaccount|adminsessions|adminhome|landingpage|modulepermissions|faq|' +
                    'adminsettings|admindocs'
                    // Pensioner
                    + '|pensionerhome|pensionerpersonalinfo|pensionerpayrolls|pensionerbeneficiary|pensioneraccountinfo|' +
                    'pensionercertificate|pensionerdeductions|pensionermanageaccount|pensionermainpersonalinfo' +
                    //sponsor
                    '|sponsorhome|mainsponsorpersonalinfo|sponsormembers|sponsorclaims|sponsorbills|sponsorreceipts|' +
                    'sponsormanageaccount|sponsorusers|sponsordms|sponsorstagedcontributions|sponsormembersdetails|sponsortpfa|sponsorbillsetlview|'+
                    'sponsormemberall'
                    //crm
                    + '|crmhome|crmsponsor|crmscheme|crmmembers|crmmainmemberdetails|crmclaims|crmmanageaccount|' +
                    'userticketmessage|mainticket|supportticketmessage|userticket|adminmainticket|crmphonemembers|' +
                    'crmphonemainmemberdetails|multiuseractivitylogs|singleuseractivitylogs'
                    //PO
                    + '|pohome|popersonalinfo|poschemes|posponsors|podashboard|pomanageaccount|pomainpersonalinfo|' +
                    'pomembersdetails|paidclaims|allclaims|registeredmembers|registeredmemberdetails'
                    //CRE
                    + '|crehome|crescheme|cremanageaccount|cresponsor|cremembers|cremembersdetails'
                    //shared
                    + '|maininbox' +
                    ')'
                ,

                ':args': '(.*)'
            }
        },
        ':type/:id(/:args)?': {
            action: 'handleDataRoute',
            conditions: {
                ':type': '(' +
                    'sponsorhome|sponsorpersonalinfo|sponsormembers|sponsorclaims|sponsorbills|sponsorreceipts|' +
                    'sponsormanageaccount|sponsorusers|sponsoractivitylogs|userticketmessage|supportticketmessage|crmmembers|crmmainmemberdetails|cresponsor|' +
                    'cremembers|crmphonemembers|crmphonemainmemberdetails|sponsormembersdetails|allclaims|paidclaims|' +
                    'pomembersdetails|posponsors|podashboard|registeredmemberdetails|maininbox|sponsormemberall' +
                    ')',
                ':id': '([0-9]+)',
                ':args': '(.*)'
            }
        }
    },

    listen: {
        global: {
            togglemainmenu: 'onToggleMainMenu',
            navigationback: 'onNavigationBack'
        }
    },

    init: function () {
        let me = this;
        // let store = Ext.getStore('Menu'),
        //     data = store.getData(),
        //     entry = store.getById('home'),
        //     role = me.getRole();
        me.setPage()
    },

    /**
     * @param {String} ref Component reference, MUST be valid.
     * @protected
     */
    activate: function (ref) {
        let view = ref.isComponent ? ref : this.lookup(ref),
            child = view,
            parent;

        while (parent = child.getParent()) {
            parent.setActiveItem(child);
            child = parent;
        }

        return view;
    },

    getContainerForViewId: function () {
        return this.getView();
    },

    ensureView: function (id, config, route) {
        let container = this.getContainerForViewId(id),
            item = container.child('component[viewId=' + id + ']'),
            reset = !!item;

        if (!item) {
            item = container.add(Ext.apply({viewId: id}, config));
        }

        if (Ext.isDefined(item.config.route)) {
            item.setRoute(route);
        }

        // Reset the component (form?) only if previously instantiated (i.e. with outdated data).
        if (reset && Ext.isFunction(item.reset)) {
            item.reset();
        }

        return item;
    },

    handleNavigationRoute: function (type, args) {
        let me = this,
            store = Ext.getStore('Menu'),
            role = me.getRole();

        me.saveItem('dataRoute', type);
        switch (role) {
            case 'ADMIN':
                store.add(
                    {
                        id: 'home',
                        xtype: 'adminhome',
                        text: 'Admin Home',
                        icon: 'home',
                    },
                    {
                        id: 'landingpage',
                        xtype: 'landingpage',
                        text: 'System Config Files',
                        icon: 'file-import'
                    },
                    {
                        id: 'manageadmins',
                        xtype: 'manageadmins',
                        text: 'Manage Admins',
                        icon: 'user-shield'
                    },
                    {
                        id: 'adminusers',
                        xtype: 'adminusers',
                        text: ' Users',
                        icon: 'user-friends'
                    },
                    // {
                    //     id: 'adminsessions',
                    //     xtype: 'adminsessions',
                    //     text: 'Monitor Sessions',
                    //     icon: 'hourglass'
                    // },
                    {
                        id: 'admindocs',
                        xtype: 'admindocs',
                        text: 'Files',
                        icon: 'file-alt',
                    },
                    {
                        id: 'faq',
                        xtype: 'faq',
                        text: 'FAQs',
                        icon: 'question',
                    },
                    {
                        id: 'adminmainticket',
                        xtype: 'adminmainticket',
                        text: 'Manage Tickets',
                        icon: 'ticket-alt'
                    },
                    {
                        id: 'adminsettings',
                        xtype: 'adminsettings',
                        text: 'Settings',
                        icon: 'cog',
                    },
                    {
                        id: 'multiuseractivitylogs',
                        xtype: 'multiuseractivitylogs',
                        text: 'Activity Logs',
                        icon: 'calendar-times'
                    },
                    {
                        id: 'manageaccount',
                        xtype: 'manageaccount',
                        text: 'Manage Account',
                        icon: 'address-card'
                    },
                );
                break;


            default:
                me.loadProfilePermissions(role, function (perms) {
                    if (perms == null)
                        return;

                    me.saveItem('perms', me.encodeJson(perms))

                    switch (role) {
                        case "MEMBER":
                            if (perms.homeMenuActivated)
                                if (MssPhoenix.model.Session.getMssClient() === "ETL") {
                                    store.add({
                                        id: 'home',
                                        xtype: 'memberetlhome',
                                        text: 'Home',
                                        icon: 'home',
                                    });
                                } else {
                                    store.add({
                                        id: 'home',
                                        xtype: 'memberhome',
                                        text: 'Home',
                                        icon: 'home',
                                    })
                                }
                            if (perms.personalInfoMenuActivated)
                                store.add(
                                    {
                                        id: 'membermainpersonalinfo',
                                        xtype: 'membermainpersonalinfo',
                                        text: 'Personal Info',
                                        icon: 'user',

                                    })
                            if (perms.contributionsMenuActivated)
                                store.add(
                                    {
                                        id: 'membercontributions',
                                        xtype: 'membercontributions',
                                        text: 'Contributions',
                                        icon: 'money-bill',

                                    })
                            if (perms.balancesMenuActivated)
                                store.add(
                                    {
                                        id: 'memberbalances',
                                        xtype: 'memberbalances',
                                        text: 'Balances',
                                        icon: 'coins',
                                    })
                            if (perms.claimsMenuActivated)
                                store.add(
                                    {
                                        id: 'memberclaims',
                                        xtype: 'memberclaims',
                                        text: 'Claims',
                                        icon: 'comment-dollar',

                                    })
                            if (perms.projectionsMenuActivated)
                                store.add(
                                    {
                                        id: 'memberprojections',
                                        xtype: 'memberprojections',
                                        text: 'Projections',
                                        icon: 'chart-bar',

                                    })
                            if (perms.documentsMenuActivated)
                                store.add(
                                    {
                                        id: 'memberdocuments',
                                        xtype: 'memberdocuments',
                                        text: 'Documents',
                                        icon: 'book',
                                    })
                            // store.add(
                            //     {
                            //         id: 'modulepermissions',
                            //         xtype: 'modulepermissions',
                            //         text: 'Permissions',
                            //         icon: 'circle',
                            //     })
                            if (perms.ticketsMenuActivated)
                                store.add({
                                    id: 'userticket',
                                    xtype: 'userticket',
                                    text: 'Tickets',
                                    icon: 'ticket-alt'
                                })
                            if (perms.manageAccountMenuActivated)
                                store.add(
                                    {
                                        id: 'membermanageaccount',
                                        xtype: 'membermanageaccount',
                                        text: 'Manage Account',
                                        icon: 'cogs',

                                    })
                            if (perms.auditTrailMenuActivated)
                                store.add(
                                    {
                                        id: 'singleuseractivitylogs',
                                        xtype: 'singleuseractivitylogs',
                                        text: 'Activity Logs',
                                        icon: 'calendar-times',

                                    });

                            me.saveItem('isStkPush', perms.allowStkPush);
                            me.saveItem('canViewContributions', perms.contributionsMenuActivated);
                            me.saveItem('isContributions', perms.allowMakeContributions);
                            me.saveItem('isInitiateClaim', perms.allowInitiateClaim);
                            me.saveItem('isRequestStatement', perms.allowRequestStatement);
                            me.onMemberLoggedIn();
                            break;

                        case "SPONSOR":

                            if (perms.homeMenuActivated)
                                store.add({
                                    id: 'home',
                                    xtype: 'sponsorhome',
                                    text: 'Home',
                                    icon: 'home',

                                });
                            if (perms.personalInfoMenuActivated)
                                store.add({
                                    id: 'mainsponsorpersonalinfo',
                                    xtype: 'mainsponsorpersonalinfo',
                                    text: 'Sponsor Information',
                                    icon: 'user'
                                });
                            if (perms.membersMenuActivated)
                                store.add({
                                    id: 'sponsormemberall',
                                    xtype: 'sponsormemberall',
                                    text: 'Members',
                                    icon: 'user-friends'
                                });
                            if (perms.claimsMenuActivated)
                                store.add({
                                    id: 'sponsorclaims',
                                    xtype: 'sponsorclaims',
                                    text: 'Claims',
                                    icon: 'comment-dollar'
                                });
                            if (perms.stagedContributionsMenuActivated)
                                store.add({
                                    id: 'sponsorstagedcontributions',
                                    xtype: 'sponsorstagedcontributions',
                                    text: 'Staged Contributions',
                                    icon: 'hand-holding-usd'
                                });
                            if (perms.billsMenuActivated)
                                if (MssPhoenix.model.Session.getMssClient() === "ETL") {
                                    store.add({
                                        id: 'sponsorbillsetlview',
                                        xtype: 'sponsorbillsetlview',
                                        text: 'Billing',
                                        icon: 'money-bill'
                                    });
                                } else {
                                    store.add({
                                        id: 'sponsorbills',
                                        xtype: 'sponsorbills',
                                        text: 'Billing',
                                        icon: 'money-bill'
                                    });
                                }
                                if (perms.tpfaMenuActivated)
                                store.add({
                                    id: 'sponsortpfa',
                                    xtype: 'sponsortpfa',
                                    text: 'TPFA',
                                    icon: 'receipt'
                                });

                            if (perms.receiptsMenuActivated)
                                store.add({
                                    id: 'sponsorreceipts',
                                    xtype: 'sponsorreceipts',
                                    text: 'Receipts',
                                    icon: 'receipt'
                                });
                            if (perms.dmsMenuActivated)
                                store.add({
                                    id: 'sponsordms',
                                    xtype: 'sponsordms',
                                    text: 'Documents',
                                    icon: 'book',
                                });
                            if (perms.ticketsMenuActivated)
                                store.add({
                                    id: 'mainticket',
                                    xtype: 'mainticket',
                                    text: 'Tickets',
                                    icon: 'ticket-alt'
                                });
                            if (perms.usersAccountMenuActivated)
                                store.add({
                                    id: 'sponsorusers',
                                    xtype: 'sponsorusers',
                                    text: 'Users',
                                    icon: 'user-friends'
                                });
                            if (perms.manageAccountMenuActivated)
                                store.add({
                                    id: 'sponsormanageaccount',
                                    xtype: 'sponsormanageaccount',
                                    text: 'Manage Account',
                                    icon: 'cog'
                                });
                            if (perms.auditTrailMenuActivated)
                                store.add({
                                    id: 'singleuseractivitylogs',
                                    xtype: 'singleuseractivitylogs',
                                    text: 'Activity Logs',
                                    icon: 'calendar-times'
                                });
                            localStorage.setItem('isBookBill', perms.allowBookBill);
                            localStorage.setItem('isSendToFm', perms.allowStageContributions);
                            localStorage.setItem('isAddSingleMember', perms.allowAddSingleUser);
                            localStorage.setItem('isAddBatchMember', perms.allowAddBatchUser);
                            localStorage.setItem('isApproveDocument', perms.allowApproveDocuments);
                            me.onSponsorLoggedIn();
                            break;

                            case "BILLING OFFICER":

                                if (perms.homeMenuActivated)
                                    store.add({
                                        id: 'home',
                                        xtype: 'sponsorhome',
                                        text: 'Home',
                                        icon: 'home',
    
                                    });
                                if (perms.personalInfoMenuActivated)
                                    store.add({
                                        id: 'mainsponsorpersonalinfo',
                                        xtype: 'mainsponsorpersonalinfo',
                                        text: 'Sponsor Information',
                                        icon: 'user'
                                    });
                                if (perms.membersMenuActivated)
                                    store.add({
                                        id: 'sponsormemberall',
                                        xtype: 'sponsormemberall',
                                        text: 'Members',
                                        icon: 'user-friends'
                                    });
                                if (perms.claimsMenuActivated)
                                    store.add({
                                        id: 'sponsorclaims',
                                        xtype: 'sponsorclaims',
                                        text: 'Claims',
                                        icon: 'comment-dollar'
                                    });
                                if (perms.stagedContributionsMenuActivated)
                                    store.add({
                                        id: 'sponsorstagedcontributions',
                                        xtype: 'sponsorstagedcontributions',
                                        text: 'Staged Contributions',
                                        icon: 'hand-holding-usd'
                                    });
                                if (perms.billsMenuActivated)
                                    if (MssPhoenix.model.Session.getMssClient() === "ETL") {
                                        store.add({
                                            id: 'sponsorbillsetlview',
                                            xtype: 'sponsorbillsetlview',
                                            text: 'Billing',
                                            icon: 'money-bill'
                                        });
                                    } else {
                                        store.add({
                                            id: 'sponsorbills',
                                            xtype: 'sponsorbills',
                                            text: 'Billing',
                                            icon: 'money-bill'
                                        });
                                    }
                                    if (perms.tpfaMenuActivated)
                                    store.add({
                                        id: 'sponsortpfa',
                                        xtype: 'sponsortpfa',
                                        text: 'TPFA',
                                        icon: 'receipt'
                                    });
    
                                if (perms.receiptsMenuActivated)
                                    store.add({
                                        id: 'sponsorreceipts',
                                        xtype: 'sponsorreceipts',
                                        text: 'Receipts',
                                        icon: 'receipt'
                                    });
                                if (perms.dmsMenuActivated)
                                    store.add({
                                        id: 'sponsordms',
                                        xtype: 'sponsordms',
                                        text: 'Documents',
                                        icon: 'book',
                                    });
                                if (perms.ticketsMenuActivated)
                                    store.add({
                                        id: 'mainticket',
                                        xtype: 'mainticket',
                                        text: 'Tickets',
                                        icon: 'ticket-alt'
                                    });
                                if (perms.usersAccountMenuActivated)
                                    store.add({
                                        id: 'sponsorusers',
                                        xtype: 'sponsorusers',
                                        text: 'Users',
                                        icon: 'user-friends'
                                    });
                                if (perms.manageAccountMenuActivated)
                                    store.add({
                                        id: 'sponsormanageaccount',
                                        xtype: 'sponsormanageaccount',
                                        text: 'Manage Account',
                                        icon: 'cog'
                                    });
                                if (perms.auditTrailMenuActivated)
                                    store.add({
                                        id: 'singleuseractivitylogs',
                                        xtype: 'singleuseractivitylogs',
                                        text: 'Activity Logs',
                                        icon: 'calendar-times'
                                    });
                                localStorage.setItem('isBookBill', perms.allowBookBill);
                                localStorage.setItem('isSendToFm', perms.allowStageContributions);
                                localStorage.setItem('isAddSingleMember', perms.allowAddSingleUser);
                                localStorage.setItem('isAddBatchMember', perms.allowAddBatchUser);
                                localStorage.setItem('isApproveDocument', perms.allowApproveDocuments);
                                me.onSponsorLoggedIn();
                                break;

                                case "CLAIMS OFFICER":

                                    if (perms.homeMenuActivated)
                                        store.add({
                                            id: 'home',
                                            xtype: 'sponsorhome',
                                            text: 'Home',
                                            icon: 'home',
        
                                        });
                                    if (perms.personalInfoMenuActivated)
                                        store.add({
                                            id: 'mainsponsorpersonalinfo',
                                            xtype: 'mainsponsorpersonalinfo',
                                            text: 'Sponsor Information',
                                            icon: 'user'
                                        });
                                    if (perms.membersMenuActivated)
                                        store.add({
                                            id: 'sponsormemberall',
                                            xtype: 'sponsormemberall',
                                            text: 'Members',
                                            icon: 'user-friends'
                                        });
                                    if (perms.claimsMenuActivated)
                                        store.add({
                                            id: 'sponsorclaims',
                                            xtype: 'sponsorclaims',
                                            text: 'Claims',
                                            icon: 'comment-dollar'
                                        });
                                    if (perms.stagedContributionsMenuActivated)
                                        store.add({
                                            id: 'sponsorstagedcontributions',
                                            xtype: 'sponsorstagedcontributions',
                                            text: 'Staged Contributions',
                                            icon: 'hand-holding-usd'
                                        });
                                    if (perms.billsMenuActivated)
                                        if (MssPhoenix.model.Session.getMssClient() === "ETL") {
                                            store.add({
                                                id: 'sponsorbillsetlview',
                                                xtype: 'sponsorbillsetlview',
                                                text: 'Billing',
                                                icon: 'money-bill'
                                            });
                                        } else {
                                            store.add({
                                                id: 'sponsorbills',
                                                xtype: 'sponsorbills',
                                                text: 'Billing',
                                                icon: 'money-bill'
                                            });
                                        }
                                        if (perms.tpfaMenuActivated)
                                        store.add({
                                            id: 'sponsortpfa',
                                            xtype: 'sponsortpfa',
                                            text: 'TPFA',
                                            icon: 'receipt'
                                        });
        
                                    if (perms.receiptsMenuActivated)
                                        store.add({
                                            id: 'sponsorreceipts',
                                            xtype: 'sponsorreceipts',
                                            text: 'Receipts',
                                            icon: 'receipt'
                                        });
                                    if (perms.dmsMenuActivated)
                                        store.add({
                                            id: 'sponsordms',
                                            xtype: 'sponsordms',
                                            text: 'Documents',
                                            icon: 'book',
                                        });
                                    if (perms.ticketsMenuActivated)
                                        store.add({
                                            id: 'mainticket',
                                            xtype: 'mainticket',
                                            text: 'Tickets',
                                            icon: 'ticket-alt'
                                        });
                                    if (perms.usersAccountMenuActivated)
                                        store.add({
                                            id: 'sponsorusers',
                                            xtype: 'sponsorusers',
                                            text: 'Users',
                                            icon: 'user-friends'
                                        });
                                    if (perms.manageAccountMenuActivated)
                                        store.add({
                                            id: 'sponsormanageaccount',
                                            xtype: 'sponsormanageaccount',
                                            text: 'Manage Account',
                                            icon: 'cog'
                                        });
                                    if (perms.auditTrailMenuActivated)
                                        store.add({
                                            id: 'singleuseractivitylogs',
                                            xtype: 'singleuseractivitylogs',
                                            text: 'Activity Logs',
                                            icon: 'calendar-times'
                                        });
                                    localStorage.setItem('isBookBill', perms.allowBookBill);
                                    localStorage.setItem('isSendToFm', perms.allowStageContributions);
                                    localStorage.setItem('isAddSingleMember', perms.allowAddSingleUser);
                                    localStorage.setItem('isAddBatchMember', perms.allowAddBatchUser);
                                    localStorage.setItem('isApproveDocument', perms.allowApproveDocuments);
                                    me.onSponsorLoggedIn();
                                    break;

                                    case "CLAIMS REVIEWER":

                                        if (perms.homeMenuActivated)
                                            store.add({
                                                id: 'home',
                                                xtype: 'sponsorhome',
                                                text: 'Home',
                                                icon: 'home',
            
                                            });
                                        if (perms.personalInfoMenuActivated)
                                            store.add({
                                                id: 'mainsponsorpersonalinfo',
                                                xtype: 'mainsponsorpersonalinfo',
                                                text: 'Sponsor Information',
                                                icon: 'user'
                                            });
                                        if (perms.membersMenuActivated)
                                            store.add({
                                                id: 'sponsormemberall',
                                                xtype: 'sponsormemberall',
                                                text: 'Members',
                                                icon: 'user-friends'
                                            });
                                        if (perms.claimsMenuActivated)
                                            store.add({
                                                id: 'sponsorclaims',
                                                xtype: 'sponsorclaims',
                                                text: 'Claims',
                                                icon: 'comment-dollar'
                                            });
                                        if (perms.stagedContributionsMenuActivated)
                                            store.add({
                                                id: 'sponsorstagedcontributions',
                                                xtype: 'sponsorstagedcontributions',
                                                text: 'Staged Contributions',
                                                icon: 'hand-holding-usd'
                                            });
                                        if (perms.billsMenuActivated)
                                            if (MssPhoenix.model.Session.getMssClient() === "ETL") {
                                                store.add({
                                                    id: 'sponsorbillsetlview',
                                                    xtype: 'sponsorbillsetlview',
                                                    text: 'Billing',
                                                    icon: 'money-bill'
                                                });
                                            } else {
                                                store.add({
                                                    id: 'sponsorbills',
                                                    xtype: 'sponsorbills',
                                                    text: 'Billing',
                                                    icon: 'money-bill'
                                                });
                                            }
                                            if (perms.tpfaMenuActivated)
                                            store.add({
                                                id: 'sponsortpfa',
                                                xtype: 'sponsortpfa',
                                                text: 'TPFA',
                                                icon: 'receipt'
                                            });
            
                                        if (perms.receiptsMenuActivated)
                                            store.add({
                                                id: 'sponsorreceipts',
                                                xtype: 'sponsorreceipts',
                                                text: 'Receipts',
                                                icon: 'receipt'
                                            });
                                        if (perms.dmsMenuActivated)
                                            store.add({
                                                id: 'sponsordms',
                                                xtype: 'sponsordms',
                                                text: 'Documents',
                                                icon: 'book',
                                            });
                                        if (perms.ticketsMenuActivated)
                                            store.add({
                                                id: 'mainticket',
                                                xtype: 'mainticket',
                                                text: 'Tickets',
                                                icon: 'ticket-alt'
                                            });
                                        if (perms.usersAccountMenuActivated)
                                            store.add({
                                                id: 'sponsorusers',
                                                xtype: 'sponsorusers',
                                                text: 'Users',
                                                icon: 'user-friends'
                                            });
                                        if (perms.manageAccountMenuActivated)
                                            store.add({
                                                id: 'sponsormanageaccount',
                                                xtype: 'sponsormanageaccount',
                                                text: 'Manage Account',
                                                icon: 'cog'
                                            });
                                        if (perms.auditTrailMenuActivated)
                                            store.add({
                                                id: 'singleuseractivitylogs',
                                                xtype: 'singleuseractivitylogs',
                                                text: 'Activity Logs',
                                                icon: 'calendar-times'
                                            });
                                        localStorage.setItem('isBookBill', perms.allowBookBill);
                                        localStorage.setItem('isSendToFm', perms.allowStageContributions);
                                        localStorage.setItem('isAddSingleMember', perms.allowAddSingleUser);
                                        localStorage.setItem('isAddBatchMember', perms.allowAddBatchUser);
                                        localStorage.setItem('isApproveDocument', perms.allowApproveDocuments);
                                        me.onSponsorLoggedIn();
                                        break;

                    

                        case "PENSIONER":
                            if (perms.homeMenuActivated)
                                store.add({
                                    id: 'home',
                                    xtype: 'pensionerhome',
                                    text: 'Home',
                                    icon: 'home'
                                });
                            if (perms.personalInfoMenuActivated)
                                store.add({
                                    id: 'pensionermainpersonalinfo',
                                    xtype: 'pensionermainpersonalinfo',
                                    text: 'Personal Info',
                                    icon: 'user'
                                });
                            if (perms.payrollsMenuActivated)
                                store.add({
                                    id: 'pensionerpayrolls',
                                    xtype: 'pensionerpayrolls',
                                    text: 'Payrolls',
                                    icon: 'money-bill'
                                });
                            if (perms.deductionsMenuActivated)
                                store.add({
                                    id: 'pensionerdeductions',
                                    xtype: 'pensionerdeductions',
                                    text: 'Payroll Deductions',
                                    icon: 'business-time'
                                });
                            if (perms.coeMenuActivated)
                                store.add({
                                    id: 'pensionercertificate',
                                    xtype: 'pensionercertificate',
                                    text: 'C.O.E',
                                    icon: 'book'
                                });
                            if (perms.ticketsMenuActivated)
                                store.add({
                                    id: 'userticket',
                                    xtype: 'userticket',
                                    text: 'Tickets',
                                    icon: 'ticket-alt'
                                });
                            if (perms.auditTrailMenuActivated)
                                store.add({
                                    id: 'singleuseractivitylogs',
                                    xtype: 'singleuseractivitylogs',
                                    text: 'Activity Logs',
                                    icon: 'calendar-times'
                                });
                            if (perms.manageAccountMenuActivated)
                                store.add({
                                    id: 'pensionermanageaccount',
                                    xtype: 'pensionermanageaccount',
                                    text: 'Manage Account',
                                    icon: 'cog'
                                });
                            me.onPensionerLoggedIn();
                            break;

                        case "CRM":
                            if (perms.homeMenuActivated)
                                store.add({
                                    id: 'home',
                                    text: 'Dashboard',
                                    xtype: 'crmhome',
                                    icon: 'home',

                                });
                            if (perms.sponsorMenuActivated)
                                store.add({
                                    id: 'crmsponsor',
                                    xtype: 'crmsponsor',
                                    text: 'Sponsors',
                                    icon: 'sitemap'
                                });
                            if (perms.claimsMenuActivated)
                                store.add({
                                    id: 'crmclaims',
                                    xtype: 'crmclaims',
                                    text: 'Claims',
                                    icon: 'money-bill'
                                });
                            if (perms.ticketsMenuActivated)
                                store.add({
                                    id: 'mainticket',
                                    xtype: 'mainticket',
                                    text: 'Tickets',
                                    icon: 'ticket-alt',
                                });
                            if (perms.manageAccountMenuActivated)
                                store.add({
                                    id: 'crmmanageaccount',
                                    xtype: 'crmmanageaccount',
                                    text: 'Manage Account',
                                    icon: 'user'
                                });
                            if (perms.auditTrailMenuActivated)
                                store.add({
                                    id: 'singleuseractivitylogs',
                                    xtype: 'singleuseractivitylogs',
                                    text: 'Activity Logs',
                                    icon: 'calendar-times'
                                });
                            break;

                        case "CRE":
                            if (perms.homeMenuActivated)
                                store.add({
                                    id: 'home',
                                    xtype: 'crehome',
                                    text: 'DashBoard',
                                    icon: 'home',
                                });
                            if (perms.schemesMenuActivated)
                                store.add({
                                    id: 'crescheme',
                                    xtype: 'crescheme',
                                    text: 'Schemes',
                                    icon: 'sitemap',
                                });
                            if (perms.ticketsMenuActivated)
                                store.add({
                                    id: 'mainticket',
                                    xtype: 'mainticket',
                                    text: 'Tickets',
                                    icon: 'ticket-alt'
                                });
                            if (perms.manageAccountMenuActivated)
                                store.add({
                                    id: 'cremanageaccount',
                                    xtype: 'cremanageaccount',
                                    text: 'Manage Account',
                                    icon: 'user'
                                });
                            if (perms.auditTrailMenuActivated)
                                store.add({
                                    id: 'singleuseractivitylogs',
                                    xtype: 'singleuseractivitylogs',
                                    text: 'Activity Logs',
                                    icon: 'calendar-times',
                                });

                            localStorage.setItem('allowInitiateClaims', perms.allowInitiateClaims);
                            localStorage.setItem('allowUploadDocs', perms.allowUploadDocs);
                            break;

                        case 'PRINCIPAL OFFICER':
                            if (perms.homeMenuActivated)
                                store.add({
                                    id: 'home',
                                    xtype: 'pohome',
                                    text: 'Home',
                                    icon: 'home',

                                })
                            if (perms.personalInfoMenuActivated)
                                store.add({
                                    id: 'pomainpersonalinfo',
                                    xtype: 'pomainpersonalinfo',
                                    text: 'Personal Information',
                                    icon: 'user',

                                });
                            if (perms.schemesMenuActivated)
                                store.add({
                                    id: 'poschemes',
                                    xtype: 'poschemes',
                                    text: 'Schemes',
                                    icon: 'sitemap'
                                });

                            store.add({
                                id: 'registeredmembers',
                                xtype: 'registeredmembers',
                                text: 'Members Operations',
                                icon: 'users'
                            });

                            store.add({
                                id: 'sponsorclaims',
                                xtype: 'sponsorclaims',
                                text: 'Claims',
                                icon: 'comment-dollar'
                            });

                            if (perms.ticketsMenuActivated)
                                store.add({
                                    id: 'mainticket',
                                    xtype: 'mainticket',
                                    text: 'Tickets',
                                    icon: 'ticket-alt'
                                });
                            if (perms.manageAccountMenuActivated)
                                store.add({
                                    id: 'pomanageaccount',
                                    xtype: 'pomanageaccount',
                                    text: 'Manage Account',
                                    icon: 'cog'
                                });
                            if (perms.auditTrailMenuActivated)
                                store.add({
                                    id: 'singleuseractivitylogs',
                                    xtype: 'singleuseractivitylogs',
                                    text: 'Activity Logs',
                                    icon: 'calendar-times'
                                });
                            break;

                        default:
                    }

                    me.afterLoadPermissions(store, type, args)
                });
                return;  //DO NOT REMOVE

        }
        me.afterLoadPermissions(store, type, args);
    },

    afterLoadPermissions: function (store, type, args) {
        let me = this,
            entry = store.getById(type);

        if (entry != null) {
            me.lookup('mainmenu').setSelection(entry);
            me.activate(
                me.ensureView(type, {
                    xtype: entry.get('xtype'),
                    title: entry.get('text')
                }, args));
        } else {
            me.activate(
                me.ensureView(type, {
                    xtype: type,
                    title: '',
                }, args));
        }

    },

    handleDataRoute: function (type, id, args) {
        var me = this,
            action, xtype, view;
        args = Ext.Array.clean((args || '').split('/'));
        // determine the requested action for the given "type":
        // - #{type}/create: create a new "type"
        // - #{type}/{id}: show record with "id"
        // - #{type}/{id}/edit: edit record with "id"

        if (id === 'create') {
            action = 'create';
            id = null;
        } else if (args[0] === 'edit') {
            action = 'edit';
            args.shift();
        } else {
            action = 'show';
        }
        xtype = type;
        // leave a developer message in case of new types addition
        if (!Ext.ClassManager.getNameByAlias('widget.' + xtype)) {
            Ext.log.error('Invalid route: no view for xtype: ' + xtype);
        }
        view = me.ensureView(xtype, {xtype: xtype});

        let messageStore = null;
        me.saveItem('dataRoute', xtype);
        switch (type) {
            case 'userticketmessage':
                messageStore = Ext.getStore('ticketmessage');
                messageStore.getProxy().url = `${MssPhoenix.model.Session.baseUrl}/api/ticket/${id}/message`;
                messageStore.reload();
                break;
            case 'supportticketmessage':
                messageStore = Ext.getStore('ticketmessage');
                messageStore.getProxy().url = `${MssPhoenix.model.Session.baseUrl}/api/ticket/${id}/message`;
                messageStore.reload();
                break;
            case 'crmmembers':
                messageStore = Ext.getStore('crmmember');
                messageStore.getProxy().url = `${MssPhoenix.model.Session.baseUrl}/api/sponsor/getMemberListing/${id}/${args[0]}/${args[1]}`;
                messageStore.reload();
                break;
            case 'crmphonemembers':
                console.log("crm phone members")
                messageStore = Ext.getStore('crmmember');
                messageStore.getProxy().url = `${MssPhoenix.model.Session.baseUrl}/api/sponsor/getMemberListing/${id}/${args[0]}/${args[1]}`;
                messageStore.reload();
                break;
            case 'cremembers':
                messageStore = Ext.getStore('crmmember');
                messageStore.getProxy().url = `${MssPhoenix.model.Session.baseUrl}/api/sponsor/getMemberListing/${id}/${args[0]}/${args[1]}`;
                messageStore.reload();
                break;
            case 'sponsormembers':
                messageStore = Ext.getStore('sponsormemberid');
                messageStore.getProxy().url = `${MssPhoenix.model.Session.baseUrl}/api/sponsor/getMemberListing/${id}/${args[0]}/${args[1]}`;
                messageStore.reload();
                break;
            case 'cresponsor':
                messageStore = Ext.getStore('crmsponsor');
                messageStore.getProxy().url = `${MssPhoenix.model.Session.baseUrl}/api/scheme/getSchemeSponsors/${MssPhoenix.model.Session.getUserId()}/${id}`;
                messageStore.reload();
                break;
            case 'posponsors':
                messageStore = Ext.getStore('crmsponsor');
                messageStore.getProxy().url = `${MssPhoenix.model.Session.baseUrl}/api/getPrincipalOfficerEmployers/${MssPhoenix.model.Session.getUserId()}/${MssPhoenix.model.Session.getMemberId()}/${id}`;
                messageStore.reload();
                break;
            case 'sponsorbills':
                messageStore = Ext.getStore('sponsorbillsid');
                messageStore.getProxy().url = `${MssPhoenix.model.Session.baseUrl}/api/get-contribution-bills-per-sponsor/${MssPhoenix.model.Session.getUserId()}/${args[0]}/${id}`;
                messageStore.reload();
                break;
            case 'sponsorreceipts':
                messageStore = Ext.getStore('sponsorreceipt');
                messageStore.getProxy().url = `${MssPhoenix.model.Session.baseUrl}/api/get-sponsor-contributions-receipts/${MssPhoenix.model.Session.getUserId()}/${id}/${args[0]}/0/10`;
                messageStore.reload();
                break;
            case 'paidclaims':
                messageStore = Ext.getStore('paidclaims');
                messageStore.getProxy().url = `${MssPhoenix.model.Session.baseUrl}/api/getPaidClaims/${MssPhoenix.model.Session.getUserId()}/${args[0]}/${id}?start=0&size=10`;
                messageStore.reload();
                break;
            case 'allclaims':
                messageStore = Ext.getStore('allclaims');
                messageStore.getProxy().url = `${MssPhoenix.model.Session.baseUrl}/api/getAllClaims/${MssPhoenix.model.Session.getUserId()}/${args[0]}/${id}?start=0&size=10`;
                messageStore.reload();
                break;
            case 'crmmainmemberdetails':
                me.getView().mask('Please wait...');
                Ext.Ajax.request({
                    url: `${MssPhoenix.model.Session.baseUrl}/api/getMemberDetailsSingle/${MssPhoenix.model.Session.getUserId()}/${id}`,
                    success: function (response, opts) {
                        me.getView().unmask();
                        let obj = Ext.decode(response.responseText);
                        let form = Ext.ComponentQuery.query('crmmemberdetails')[0];
                        if (form) {
                            form.setValues(obj.data)
                        }
                        localStorage.setItem("crmmemberInfo", me.encodeJson(obj.data));
                        localStorage.setItem("memberId", id);
                    },
                    failure: function (response, opts) {
                        me.getView().unmask();
                        console.log('server-side failure with status code ' + response.status);
                    }
                });

                messageStore = Ext.getStore('crmmemberbeneficiaries');
                messageStore.getProxy().url = `${MssPhoenix.model.Session.baseUrl}/api/getBeneficiaries/${MssPhoenix.model.Session.getUserId()}/${id}`;
                messageStore.reload();

                messageStore = Ext.getStore('crmcontributionsummary');
                messageStore.getProxy().url = `${MssPhoenix.model.Session.baseUrl}/api/getMemberCumulativeStatement/${id}/${args[0]}`;
                messageStore.reload();


                messageStore = Ext.getStore('memberbeneficiarychart');
                messageStore.getProxy().url = `${MssPhoenix.model.Session.baseUrl}/api/getBeneficiariesChart/${MssPhoenix.model.Session.getUserId()}/${id}`;
                messageStore.reload();
                break;
            case 'sponsormembersdetails':
                me.getView().mask('Please wait...');
                Ext.Ajax.request({
                    url: `${MssPhoenix.model.Session.baseUrl}/api/getMemberDetailsSingle/${MssPhoenix.model.Session.getUserId()}/${id}`,
                    success: function (response, opts) {
                        me.getView().unmask();
                        let obj = Ext.decode(response.responseText);
                        let form = Ext.ComponentQuery.query('memberpersonalinfo')[0];
                        if (form) {
                            form.setValues(obj.data)
                        }
                        localStorage.setItem("sponsorMemberInfo", me.encodeJson(obj.data));
                        localStorage.setItem("memberId", id);
                    },
                    failure: function (response, opts) {
                        me.getView().unmask();
                        console.log('server-side failure with status code ' + response.status);
                    }
                });

                messageStore = Ext.getStore('crmmemberbeneficiaries');
                messageStore.getProxy().url = `${MssPhoenix.model.Session.baseUrl}/api/getBeneficiaries/${MssPhoenix.model.Session.getUserId()}/${id}`;
                messageStore.reload();

                messageStore = Ext.getStore('crmcontributionsummary');
                messageStore.getProxy().url = `${MssPhoenix.model.Session.baseUrl}/api/getMemberCumulativeStatement/${id}/${args[0]}`;
                messageStore.reload();
                break;
            case 'crmphonemainmemberdetails':
                me.getView().mask('Please wait...');
                Ext.Ajax.request({
                    url: `${MssPhoenix.model.Session.baseUrl}/api/getMemberDetailsSingle/${MssPhoenix.model.Session.getUserId()}/${id}`,
                    success: function (response, opts) {
                        me.getView().unmask();
                        let obj = Ext.decode(response.responseText);
                        let form = Ext.ComponentQuery.query('crmphonememberdetails')[0];
                        if (form) {
                            form.setValues(obj.data)
                        }
                        localStorage.setItem("crmmemberInfo", me.encodeJson(obj.data));
                        localStorage.setItem("memberId", id);
                    },
                    failure: function (response, opts) {
                        me.getView().unmask();
                        console.log('server-side failure with status code ' + response.status);
                    }
                });

                messageStore = Ext.getStore('crmmemberbeneficiaries');
                messageStore.getProxy().url = `${MssPhoenix.model.Session.baseUrl}/api/getBeneficiaries/${MssPhoenix.model.Session.getUserId()}/${id}`;
                messageStore.reload();

                messageStore = Ext.getStore('crmcontributionsummary');
                messageStore.getProxy().url = `${MssPhoenix.model.Session.baseUrl}/api/getMemberCumulativeStatement/${id}/${args[0]}`;
                messageStore.reload();
                break;
            case 'pomembersdetails':
                messageStore = Ext.getStore('memberbeneficiary');
                messageStore.getProxy().url = `${MssPhoenix.model.Session.baseUrl}/api/getBeneficiaries/${MssPhoenix.model.Session.getUserId()}/${id}`;
                messageStore.reload();
                break;
            case 'registeredmemberdetails':
                me.fireEvent('loadRegMember', id, args)
                break
            default:
        }
    },


    onToggleMainMenu: function (expanded) {
        let menu = this.lookup('mainmenu');
        if (expanded === undefined) {
            expanded = !menu.getExpanded();
        }

        menu.setExpanded(expanded);
    },

    onNavigationBack: function () {
        Ext.util.History.back();
    },

    onLogoutTap: function () {
        let me = this;
        Ext.Msg.confirm('Logout Confirmation', 'Are you sure you want to Logout?',
            function (answer) {
                if (answer === "yes") {
                    me.fireEvent('logout')
                }
            });
    },

    getRole: function () {
        return MssPhoenix.model.Session.getUserRole();
    },

    onNotificationsMenuTap: function () {
        let me = this;
        me.redirectTo('maininbox');
    },

    onMyProfileMenuTap: function () {
        let me = this;
        let role = me.getRole();
        switch (role) {
            case 'MEMBER':
                me.redirectTo('membermanageaccount');
                break;
            case 'SPONSOR':
                me.redirectTo('sponsormanageaccount');
                break;
            case 'PENSIONER':
                me.redirectTo('pensionermanageaccount');
                break;
            case 'CRM':
                me.redirectTo('crmmaindetails');
                break;
            case 'ADMIN':
                me.redirectTo('manageaccount');
                break;
            default:
        }
    },

    // memberSwitchScheme: function () {
    //     let me = this;
    //     Ext.widget('memberswitchschemewin').show();
    // },
    memberSwitchScheme: function (v, newValue, oldValue, eOpts) {
        let me = this,
            view = me.getView(),
            memberId = MssPhoenix.model.Session.getMemberId(),
            phone = MssPhoenix.model.Session.getCellPhone(),
            schemeId = v.getValue();
        if (schemeId) {
            me.saveItem('activeSchemeId', schemeId);
            //load member products/sponsors
            console.log(newValue + ":" + me.getItem("schemeId"));
            let login = MssPhoenix.model.Session.getUserLogin(),
                prodUrl = `${MssPhoenix.model.Session.baseUrl}/api/getMemberProducts/${login}/${schemeId}`;

            me.maskView(view, "loading...");

            setTimeout(function () {
                me.urlGet(prodUrl, function (obj) {
                    let data = (obj.data)[0];
                    // console.log(data);
                    if (data) {
                        let sponsorId = data.id,
                            sponsorName = data.name,
                            employerRefNo = data.employerRefNo,
                            params = {
                                "sponsorRefNo": employerRefNo,
                                "sponsorId": sponsorId,
                                "schemeId": schemeId,
                                "login": login,
                                "memberId": memberId,
                                "phone": phone
                            };
                        // console.log(params)
                        me.saveItem('activeSponsorId', sponsorId);
                        me.searchMemberDetails(view, params);
                    }
                }, function (err) {
                    console.log(err)
                    me.unMaskView(view)
                    me.showAlert("Sorry", "Unable to find member products");
                })
            }, 500)
        }
    },

    memberSwitchProduct: function (v, newValue, oldValue, eOpts) {
        let me = this,
            view = me.getView(),
            memberId = MssPhoenix.model.Session.getMemberId(),
            phone = MssPhoenix.model.Session.getCellPhone(),
            schemeId = MssPhoenix.model.Session.getSchemeId(),
            sponsorId = v.getValue();
        if (sponsorId) {
            let login = MssPhoenix.model.Session.getUserLogin(),
                prodUrl = `${MssPhoenix.model.Session.baseUrl}/api/getMemberProducts/${login}/${schemeId}`;

            me.maskView(view, "loading...");

            setTimeout(function () {
                me.urlGet(prodUrl, function (obj) {
                    let data,
                        arrayData = (obj.data);
                    for (let i = 0; i < arrayData.length; i++) {
                        data = arrayData[i];
                        if (data.sponsorId === sponsorId) {
                            break;
                        }
                    }
                    console.log(data);
                    if (data) {
                        let sponsorId = data.id,
                            sponsorName = data.name,
                            employerRefNo = data.employerRefNo,
                            params = {
                                "sponsorRefNo": employerRefNo,
                                "sponsorId": sponsorId,
                                "schemeId": schemeId,
                                "login": login,
                                "memberId": memberId,
                                "phone": phone
                            };
                        console.log(params)
                        me.saveItem('activeSponsorId', sponsorId);
                        me.searchMemberDetails(view, params);
                    }
                }, function (err) {
                    console.log(err)
                    me.unMaskView(view)
                    me.showAlert("Sorry", "Unable to find member products");
                })
            }, 500);
        }
    },

    searchMemberDetails: function (view, params) {
        let me = this;
        let memberDetailsUrl = `${MssPhoenix.model.Session.baseUrl}/api/searchMemberDetails`;
        me.urlPost(memberDetailsUrl, params, function (obj) {
            // console.log(obj)
            me.unMaskView(view)
            let data = obj.data;
            me.saveItem('activeMemberId', data.id);
            window.location.reload();
        }, function (err) {
            // console.log(err)
            me.unMaskView(view)
            me.showAlert("Sorry", "Unable to find member details");
        })
    },

    loadProfilePermissions: function (profileName, callBack) {
        let me = this,
            view = me.getView();

        view.mask("please wait...")
        Ext.Ajax.request({
            headers: {
                'Content-Type': 'application/json'
            },
            url: `${MssPhoenix.model.Session.baseUrl}/api/perms/${profileName}`,
            success: function (response, opts) {
                view.unmask()
                let obj = me.decodeJson(response.responseText);
                if (obj.success) {
                    let data = obj.data;
                    callBack(data);
                }
            },
            failure: function (response, opts) {
                view.unmask()
                callBack(null);
            }
        });
    },

    onMemberLoggedIn: function () {
        if (!MssPhoenix.model.Session.getMemberId()) {
            window.location.reload();
            return;
        }
        //load member schemes
        let me = this,
            view = me.getView(),
            memberHeaderSponsorsBox = Ext.ComponentQuery.query('memberheader #memberHeaderSponsorsBox')[0],
            memberHeaderSchemeBox = Ext.ComponentQuery.query('memberheader #memberHeaderSchemeBox')[0];

        if (memberHeaderSchemeBox) {
            me.urlGet(
                `${MssPhoenix.model.Session.baseUrl}/api/schemes/getSchemeById/${MssPhoenix.model.Session.getSchemeId()}`,
                function (obj) {
                    if (obj.success) {
                        let schemeName = obj.data.scheme.schemeName;
                        memberHeaderSchemeBox.setInputValue(schemeName);
                        memberHeaderSchemeBox.setTooltip('Scheme : ' + schemeName);

                        //load member products
                        let prodUrl = `${MssPhoenix.model.Session.baseUrl}/api/getMemberProducts/${MssPhoenix.model.Session.getUserLogin()}/${MssPhoenix.model.Session.getSchemeId()}`;
                        me.urlGet(prodUrl, function (obj1) {
                            if (obj1.success) {
                                let data = (obj1.data)[0];
                                if (data) {
                                    let sponsorId = data.id,
                                        sponsorName = data.name;
                                    memberHeaderSponsorsBox.setInputValue(sponsorName);
                                    memberHeaderSponsorsBox.setTooltip('Employer : ' + sponsorName);
                                }
                            }
                        }, function (err) {

                        })
                    }
                },
                function (err) {
                }
            );
        }
    },

    onPensionerLoggedIn: function () {
        if (!MssPhoenix.model.Session.getMemberId()) {
            window.location.reload();
            return;
        }
        //load header scheme
        let me = this,
            view = me.getView(),
            pensionerHeaderSchemeBox = Ext.ComponentQuery.query('pensionerheader #pensionerheaderSchemeBox')[0];

        if (pensionerHeaderSchemeBox) {
            Ext.Ajax.request({
                url: `${MssPhoenix.model.Session.baseUrl}/api/schemes/getSchemeById/${MssPhoenix.model.Session.getSchemeId()}`,
                success: function (res, opts) {
                    let obj = Ext.util.JSON.decode(res.responseText);
                    if (obj.success) {
                        // pensionerHeaderSchemeBox.setInputValue(
                        //     obj.data.scheme.schemeName
                        // )
                        pensionerHeaderSchemeBox.setText(
                            obj.data.scheme.schemeName
                        )
                    }
                },
                failure: function (res, opts) {

                }
            })
        }

        me.checkBeneficiariesEntitlementIfFull();
    },

    checkBeneficiariesEntitlementIfFull: function () {
        let me = this;
        let view = me.getView();
        me.maskView(view, "please wait...")
        Ext.Ajax.request({
            url: `${MssPhoenix.model.Session.baseUrl}/api/checkIfCanAddBeneficiaries/${MssPhoenix.model.Session.getUserId()}/${MssPhoenix.model.Session.getPensionerId()}`,
            success: function (response, opts) {
                let obj = Ext.util.JSON.decode(response.responseText);
                me.unMaskView(view)
                if (obj.data.canAdd) {
                    Ext.Msg.confirm('Beneficiaries Entitlements', 'You have not fully allocated beneficiaries entitlements, Update now?',
                        function (choice) {
                            if (choice === 'yes') {
                                //do redirection
                                me.redirectTo('pensionermainpersonalinfo');
                            }
                        }
                    );
                } else {

                }
            },
            error: function (response, opts) {

            }
        })
    },

    pensionerSwitchScheme: function (view, newValue, oldValue, eOpts) {
        let me = this;
        Ext.widget('pensionerswitchschemewin').show();
    },

    sponsorSwitchScheme: function (combo, newValue, oldValue, eOpts) {
        let me = this,
            view = me.getView(),
           
            email = MssPhoenix.model.Session.getUserEmail(),
            phone = MssPhoenix.model.Session.getCellPhone(),
            schemeId = combo.getValue();
            console.log("Scheme Id in use is:>>" +schemeId)
        if (schemeId) {
            me.saveItem('activeSchemeId', schemeId);

            let memberDetailsUrl = `${MssPhoenix.model.Session.baseUrl}/api/searchSponsorDetails`,
                params = {
                    "email": email,
                    "schemeId": schemeId,
                    "phone": phone
                };
            me.urlPost(memberDetailsUrl, params, function (obj) {
                // console.log(obj)
                me.unMaskView(view)
                let data = (obj.data)[0];
                console.log("SponsorData: "+data)
                me.saveItem('activeSponsorRefNo', data.sponsorProdNo);
                me.saveItem('activeSponsorId', data.sponsorId);
                window.location.reload();
            }, function (err) {
                // console.log(err)
                me.unMaskView(view)
                console.log("Unable to find sponsor details");
                window.location.reload();
            })
        }
    },

    onSponsorLoggedIn: function () {
        if (!MssPhoenix.model.Session.getSponsorId()) {
            window.location.reload();
            return;
        }
        let me = this,
            view = me.getView(),
            main = Ext.ComponentQuery.query('main')[0],
            sponsorHeaderSchemeBox = Ext.ComponentQuery.query('sponsorheader #sponsorHeaderSchemeBox')[0],
            sponsorHeaderNameBox = Ext.ComponentQuery.query('sponsorheader #sponsorHeaderNameBox')[0];
        if (sponsorHeaderSchemeBox) {
            Ext.Ajax.request({
                url: `${MssPhoenix.model.Session.baseUrl}/api/schemes/getSchemeById/${MssPhoenix.model.Session.getSchemeId()}`,
                success: function (res, opts) {
                    let obj = Ext.util.JSON.decode(res.responseText);
                    if (obj.success) {
                        sponsorHeaderSchemeBox.setInputValue(
                            obj.data.scheme.schemeName
                        )
                    }
                },
                failure: function (res, opts) {

                }
            })
        }

        if (sponsorHeaderNameBox) {
            let mainViewModel = main.getViewModel(),
                data = mainViewModel.getData().sponsorInfo
            Ext.Ajax.request({
                url: `${MssPhoenix.model.Session.baseUrl}/api/get-sponsor-details/${MssPhoenix.model.Session.getUserId()}/${MssPhoenix.model.Session.getSponsorId()}`,
                success: function (res, opts) {
                    let obj = Ext.util.JSON.decode(res.responseText);
                    if (obj.success) {
                        sponsorHeaderNameBox.setText(
                            obj.data.name
                        )
                    }
                },
                failure: function (res, opts) {

                }
            })
        }
    },

    poGoToSchemes: function () {
        let me = this;
        me.redirectTo('poschemes');
    },

    poGoToTickets: function () {
        let me = this;
        me.redirectTo('mainticket');
    }
});
