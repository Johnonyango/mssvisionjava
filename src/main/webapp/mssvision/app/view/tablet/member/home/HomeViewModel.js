Ext.define('MssPhoenix.view.tablet.member.home.HomeViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.memberhomeviewmodel',

    data: {
        summary: null,
        currency: 'Ksh',
        isRequestStatement: "block",
        canViewContributions: 'block',
        etlClient: "none",
        otherClients: "none"
    },

    formulas: {
        totalEe: function (get) {
            // return numeral(get('summary.totalEe')).format('0,0.00');
            return get('currency') + ' ' + Ext.util.Format.number(get('summary.eeReg'), '0,0.00');
        },

        totalEr: function (get) {
            // return numeral(get('summary.totalEr')).format('0,0.00');
            return get('currency') + ' ' + Ext.util.Format.number(get('summary.erReg'), '0,0.00');
        },

        totalOfTotals: function (get) {
            // return numeral(get('summary.totalOfTotals')).format('0,0.00');
            return get('currency') + ' ' + Ext.util.Format.number(get('summary.totalBenefits'), '0,0.00');
        },

        //ETL

        totalContributions: function (get) {
            return get('currency') + ' ' + Ext.util.Format.number(get('summary.contributions'), '0,0.00');
        },

        totalReturns: function (get) {
            return get('currency') + ' ' + Ext.util.Format.number(get('summary.returns'), '0,0.00');
        },

        totalBalances: function (get) {
            return get('currency') + ' ' + Ext.util.Format.number(get('summary.balances'), '0,0.00');
        },

        totalWithdrawals: function (get) {
            return get('currency') + ' ' + Ext.util.Format.number(get('summary.withdrawals'), '0,0.00');
        }
    }
});