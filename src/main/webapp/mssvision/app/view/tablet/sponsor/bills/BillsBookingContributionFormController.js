Ext.define('MssPhoenix.view.tablet.sponsor.bills.BillsBookingContributionFormController', {
    extend: 'MssPhoenix.view.tablet.shared.BaseController',
    alias: 'controller.billsbookingcontributionformcontroller',

    init: function () {
        let me = this,
            view = me.getView(),
            vm = view.getViewModel();
        me.loadDatesOfPayment(vm);

    },

    onProcessBtnClick: function () {
        let me = this,
            view = me.getView(),
            form = me.lookup('form');

        let fields = form.getFields();
        let monthValue = (fields.month).getValue();
        let dueDateValue = (fields.dueDate).getValue();
        let yearValue = (fields.year).getValue();
        let bookingDateValue = (fields.bookingDate).getValue();
        let sponsorIdValue = (fields.sponsorId).getValue();
        let schemeIdValue = (fields.schemeId).getValue();
        let finalPathValue = (fields.finalPath).getValue();

        const dated = new Date(bookingDateValue);
        const ye = new Intl.DateTimeFormat('en', {year: 'numeric'}).format(dated);
        const mo = new Intl.DateTimeFormat('en', {month: '2-digit'}).format(dated);
        const day = new Intl.DateTimeFormat('en', {day: '2-digit'}).format(dated);
        const finalBookingDateFormat = `${day}-${mo}-${ye}`;


        const date = new Date(dueDateValue);
        const year = new Intl.DateTimeFormat('en', {year: 'numeric'}).format(date);
        const month = new Intl.DateTimeFormat('en', {month: '2-digit'}).format(date);
        const da = new Intl.DateTimeFormat('en', {day: '2-digit'}).format(date);
        const finalDueDateFormat = `${da}-${month}-${year}`;

        var params = {
            'bookingDate': finalBookingDateFormat,
            'dueDate': finalDueDateFormat,
            'month': monthValue,
            'year': yearValue,
            'sponsorId': sponsorIdValue,
            'schemeId': schemeIdValue,
            'finalPath': finalPathValue


        }
        me.maskView(view, 'Loading...')
        Ext.Ajax.request({
                headers: {
                    'Content-Type': 'application/json'
                },
                url: `${MssPhoenix.model.Session.baseUrl}/api/bookContributionBill/${MssPhoenix.model.Session.getUserId()}`,
                method: 'POST',
                params: Ext.util.JSON.encode(params),
                success: function (response, opts) {
                    me.unMaskView(view)
                    me.getView().close();
                    let obj = Ext.util.JSON.decode(response.responseText);
                    me.showAlert('Success', obj.msg)
                    var store = Ext.getStore('sponsorbillsid');
                    store.reload();
                },
                failure: function (response, opts) {
                    me.unMaskView(view)
                    let obj = Ext.util.JSON.decode(response.responseText);
                    Ext.Msg.alert('Failure', obj.msg);
                }
            }
        )


    },

    dueDateHandler: function () {
        let me = this,
            view = me.getView(),
            main = Ext.ComponentQuery.query('main')[0],
            dueDateId = Ext.ComponentQuery.query('bookcontributionbillform #dueDateId')[0],
            bookingDateId = Ext.ComponentQuery.query('bookcontributionbillform #bookingDateId')[0];
        if (dueDateId) {
            dueDateId.setValue(
                Ext.date.add(bookingDateId, 10)
            )
        }
    },

    loadDatesOfPayment: function (vm) {
        let me = this,
            view = me.getView();

        view.mask("Please wait...")
        Ext.Ajax.request({
            headers: {
                'Content-Type': 'application/json'
            },
            url: `${MssPhoenix.model.Session.baseUrl}/api/dates`,
            success: function (response, opts) {
                view.unmask()
                let obj = me.decodeJson(response.responseText);
                if (obj.success) {
                    let data = (obj.data)[0];
                    me.saveItem('dateOfPayValue', data.dateNumber);
                    if (vm) {
                        vm.set("dateOfPayValue", obj.dateNumber)
                    }

                }
            },
            failure: function (response, opts) {
                view.unmask()

            }
        });
    },


    onCancelBtnClick: function () {
        let me = this;
        me.getView().destroy();
    }
});