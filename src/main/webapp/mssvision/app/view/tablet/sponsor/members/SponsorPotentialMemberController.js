Ext.define('MssPhoenix.view.tablet.sponsor.members.SponsorPotentialMemberController', {
    extend: 'MssPhoenix.view.tablet.shared.BaseController',
    alias: 'controller.sponsorpotentialmembercontroller',
    /**
     * Called when the view is created
     */
    init: function () {
    },

    onApproveBtnClick: function () {
        let me = this;
        Ext.Msg.confirm('Confirmation', 'Are you sure you want to approve this potential member?',
            function (answer) {
                if (answer == "yes") {
                    let id = me.getItem('memberId');
                    let sponsorId = me.getItem('sponsorId'),
                        view = me.getView(),

                        form = me.lookup('potentialmemberform');
                    let record = me.getGridSelectedRecord("sponsorpotentialmembersgrid");
                    let fields = form.getFields();
                    let actionValue = (fields.action).getInputValue();
                    let params = {
                        'id': id,
                        'sponsorId': sponsorId,
                        'action': actionValue,

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


    onDeclineBtnClick: function () {
        let winContainer = Ext.widget('sponsorpotentialmemberdecline');
        winContainer.show();
    },
    onUpdateBtnClick: function () {
        let me = this,
            view = me.getView(),
            form = view.lookupReference('potentialmemberform');
        if (form && form.validate()) {
            let fields = form.getFields();
            let formData = form.getValues();
            memberIdFormData = (fields.id).getInputValue();
            me.maskView(view, 'Submitting...')
            let
                memberId = memberIdFormData;
                endpoint = `${MssPhoenix.model.Session.baseUrl}/api/register/new/ETL`;

            me.urlPost(endpoint, formData, function (obj) {
                me.unMaskView(view);
                me.showAlert('Success', 'Sent, Member details successfully updated');
            }, function (err) {
                me.unMaskView(view);
                me.showAlert('Sorry', err.msg);
            })
            return;
        }
        me.showToast("Provide all required fields")
    }
});