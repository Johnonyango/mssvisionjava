Ext.define('MssPhoenix.view.tablet.sponsor.stagedcontributions.StagedContributionsGridController', {
    extend: 'MssPhoenix.view.tablet.sponsor.baseController.SponsorBaseController',
    alias: 'controller.stagedcontributionsgridcontroller',
    isPhone: false,
    init: function () {
        let me = this;
        view = me.getView(),
        vm = view.getViewModel();
        if (vm) {
            vm.set("isSendToFm", me.canStageContributions() === "true" ? 'block' : 'none')
        }
        me.isPhone = MssPhoenix.profile.Phone.isPhone();
    },

    mixins: [
        'MssPhoenix.view.tablet.sponsor.mixins.GridMixin'
    ],

    onSendToFMbtnClick:function(){
        var me = this;
        view = me.getView();
       
        var record = me.getSelectedRecord();
        if (record) {
           
            Ext.Msg.confirm('Confirmation', 'Are you sure you want to Send this contribution to FundMaster?',
            function (answer) {
                if (answer == "yes") {
			var id = record.get('id');
			var method = 'GET';
			var url = `${MssPhoenix.model.Session.baseUrl}/api/pushContributionToXe/${MssPhoenix.model.Session.getUserId()}/` +id;
			//ajax request
            me.maskView(view, "Please wait...");
			Ext.Ajax.request({
				url: url,
				method: method,
               
				success: function (response, opts) {
                    me.unMaskView(view)
                    let obj = me.decodeJson(response.responseText)
                    me.showAlert('Success', obj.data)
					var store = Ext.getStore('stagedcontributionid');
                    store.reload()
				},
				failure: function (response, opts) {
                    me.unMaskView(view)
                    let obj = me.decodeJson(response.responseText)
                    me.showAlert('Failure', obj.data)
					
				}
			});
        }

        });
            
		} 
    },
    reloadStagedContributionsGrid:function(){
        var me = this;
        let url = `${MssPhoenix.model.Session.baseUrl}/api/getStagedContributions/${MssPhoenix.model.Session.getUserId()}`;
        let grid = Ext.ComponentQuery.query(me.isPhone ? 'stagedcontributionsphonegrid' : 'stagedcontributionsgrid')[0];
        if (grid) {
            let store = grid.getStore();
            if (store) {
                let proxy = store.getProxy();
                if (proxy) {
                    proxy.setUrl(url);
                    store.setProxy(proxy)
                    store.reload();
                }
            }
        }
    },
    formatStagedContributionStatus: function (text, metaData) {
        switch (text) {
            case 'true':
                return `<span style="color:#005e18">Sent To FundMaster</span>`;
            case 'false':
                return `<span style="color:#f21900">Not Sent To FundMaster</span>`;
        
            default:
                return text;
        }
    },

});