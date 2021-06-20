Ext.define('MssPhoenix.view.tablet.sponsor.members.DeclinePotentialMemberController', {
    extend: 'MssPhoenix.view.tablet.shared.BaseController',
    alias: 'controller.declinepotentialmembercontroller',
    /**
     * Called when the view is created
     */
    init: function () {
    },

    onSubmitBtnClick: function () {
        let me = this;
        Ext.Msg.confirm('Confirmation', 'Are you sure you want to decline this potential member?',
            function (answer) {
                if (answer == "yes") {
                    let id = me.getItem('memberId');
                    let sponsorId = me.getItem('sponsorId'),
                        view = me.getView(),
                        form = me.lookup('declinepotentialmemberform');
                    let record = me.getGridSelectedRecord("sponsorpotentialmembersgrid");
                    let fields = form.getFields();
                    let actionValue = 'DECLINE';
                    let message = (fields.message).getValue();

                    let params = {
                        'id': id,
                        'sponsorId': sponsorId,
                        'action': actionValue,
                        'message': message,
                    }
                    me.maskView(view, 'Loading...')
                    Ext.Ajax.request({
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        url: `${MssPhoenix.model.Session.baseUrl}/api/approveOrDissaproveSponsorPotentialMember`,
                        method: 'POST',
                        params: Ext.util.JSON.encode(params),
                        success: function (response, opts) {
                            me.unMaskView(view)
                            let obj = Ext.util.JSON.decode(response.responseText);
                            me.showAlert('Success', obj.msg)
                            let store = Ext.getStore('sponsorpotentialmemberid');
                            store.reload();
                        },
                        failure: function (response, opts) {
                            me.unMaskView(view)
                            let obj = Ext.util.JSON.decode(response.responseText);
                            Ext.Msg.alert('Failure', obj.msg);
                        }
                    }
                    )
                }
            });

    },

    onCancelBtnClick: function () {
        let me = this;
        me.getView().destroy();
    }
});