Ext.define('MssPhoenix.view.tablet.member.balances.BalancesController', {
    extend: 'MssPhoenix.view.tablet.member.base.BaseMemberController',
    alias: 'controller.memberbalancescontroller',
    /**
     * Called when the view is created
     */
    isPhone: false,
    init: function () {
        let me = this;
        me.isPhone = MssPhoenix.profile.Phone.isPhone();

        var role = MssPhoenix.model.Session.getUserRole();
        if (role === "PRINCIPAL OFFICER") {
            let id = localStorage.getItem("memberId");
            var messageStore = Ext.getStore('memberbalances');
            messageStore.getProxy().url = `${MssPhoenix.model.Session.baseUrl}/api/getBalances/${MssPhoenix.model.Session.getUserId()}/${id}/-1`;
            messageStore.reload();
        }
    },

    reloadBalancesGrid: function () {
        let me = this;
        // me.reloadGrid('memberbalancesgrid')
        let grid = Ext.ComponentQuery.query(me.isPhone ? 'memberphone-balancesgrid' : 'memberbalancesgrid')[0]
        if (grid) {
            let store = grid.getStore()
            if (store)
                store.reload()
        }
        // me.reloadStore('memberbalances')
    },

    employeeRenderer: function (val, rec) {
        // console.log(rec);
        var eeIntr = parseFloat(rec.get('eeIntr')),
            totalEE = parseFloat(rec.get('totalEE'));
        // return MssPhoenix.model.Session.moneyFormat((totalEE - eeIntr));
        return MssPhoenix.model.Session.moneyFormat((totalEE));
    },

    employerRenderer: function (val, rec) {
        var erIntr = parseFloat(rec.get('erIntr')),
            totalER = parseFloat(rec.get('totalER'));
        return MssPhoenix.model.Session.moneyFormat((totalER));
        // return MssPhoenix.model.Session.moneyFormat((totalER - erIntr));
    },
});