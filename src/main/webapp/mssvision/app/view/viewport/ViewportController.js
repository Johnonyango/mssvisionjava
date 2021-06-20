Ext.define('MssPhoenix.view.viewport.ViewportController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.viewport',

    listen: {
        controller: {
            '*': {
                login: 'onLogin',
                logout: 'onLogout',
                unmatchedroute: 'handleUnmatchedRoute'
            }
        }
    },

    routes: {
        'login': 'handleLoginRoute',
        'reset-password': 'handleResetPwdRoute',
    },

    onLaunch: function() {
        this.originalRoute = MssPhoenix.getApplication().getDefaultToken();
        this.restoreSession();
    },

    showView: function(xtype) {
        var view = this.lookup(xtype),
            viewport = this.getView();

        if (!view) {
            viewport.removeAll(true);
            view = viewport.add({
                xtype: xtype,
                reference: xtype
            });
        }

        viewport.setActiveItem(view);
    },

    showAuth: function() {
        this.showView('authlogin');
    },

    showMain: function() {
        this.showView('main');
    },

    // ROUTING

    handleLoginRoute: function() {
        var session = this.session;
        if (session && session.isValid()) {
            this.redirectTo('', { replace: true });
            return;
        }

        this.showAuth();
    },

    handleResetPwdRoute: function() {
        let me=this,
            session = me.session;
        if (session && session.isValid()) {
            this.redirectTo('', { replace: true });
            return;
        }
        me.showView('resetpassword');
    },

    handleUnmatchedRoute: function(route) {
        var me = this;

        if (!me.session || !me.session.isValid()) {
            // There is no authenticated user, let's redirect to the login page but keep track
            // of the original route to restore the requested route after user authentication.
            me.originalRoute = route;
            me.redirectTo('login', { replace: true });
            return;
        }

        // There is an authenticated user, so let's simply redirect to the default token.
        var target = MssPhoenix.getApplication().getDefaultToken();
        Ext.log.warn('Route unknown: ', route);
        if (route !== target) {
            me.redirectTo(target, { replace: true });
        }
    },

    // SESSION MANAGEMENT

    restoreSession: function() {
        var data = MssPhoenix.util.State.get('session'),
            session = data ? MssPhoenix.model.Session.loadData(data) : null;

        if (session && session.isValid()) {
            this.initiateSession(session);
        } else {
            this.terminateSession();
        }

        return session;
    },

    initiateSession: function(session) {
        this.saveSession(session);
        this.showMain();
    },

    terminateSession: function() {
        this.saveSession(null);
        this.showAuth();
    },

    saveSession: function(session) {
        MssPhoenix.util.State.set('session', session && session.getData(true));
        this.getViewModel().set('user', session && session.getUser());
        this.session = session;
    },

    // AUTHENTICATION

    onLogin: function(session) {
        if (!session || !session.isValid()) {
            return false;
        }

        this.initiateSession(session);
        this.redirectTo(this.originalRoute, { replace: true });
    },

    onLogout: function() {
        var me = this,
            view = me.getView(),
            session = me.session;
        if (!session || !session.isValid()) {
            return false;
        }
        view.setMasked({ xtype: 'loadmask' });
        session.logout().catch(function() {
            // TODO handle errors
        }).then(function() {
            me.sessionLogout();

            me.originalRoute = Ext.History.getToken();
            me.terminateSession();
            view.setMasked(false);
            // me.redirectTo('login', { replace: true });
            localStorage.clear();
            window.location.replace('../');
        });

    },

    sessionLogout: function(){
        let sessionId = localStorage.getItem("sessionId")
        Ext.Ajax.request({
            method: 'GET',
            url: `${MssPhoenix.model.Session.baseUrl}/api/sessionLogout/${sessionId}`,
            
            success: function (response, opts) {
              
            },
            failure: function (response, opts) {
            }
        })
    }

});