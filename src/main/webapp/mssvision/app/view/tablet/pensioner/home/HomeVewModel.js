Ext.define('MssPhoenix.view.tablet.pensioner.home.HomeVewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.pensionerhomevewmodel',

    
    data: {
        homeSummary: null,
    },

    formulas: {
        totalPayrolls: function (get) {
            // return (get('homeSummary.payrolls'));
            return (get('homeSummary.payrolls'));
        },
        
        totalPay: function (get) {
            // return numeral(get('homeSummary.totaPay')).format('0,0.00');
            return Ext.util.Format.number(get('homeSummary.totaPay'),'0,0.00');
        },

        openTickets: function (get) {
            // return numeral(get('homeSummary.openTickets'));
            return Ext.util.Format.number(get('homeSummary.openTickets'),'0,0.00');
        },
        pendingCOE: function (get) {
            // return numeral(get('homeSummary.pendingCOE'));
            return Ext.util.Format.number(get('homeSummary.pendingCOE'),'0,0.00');
        }
    }
});