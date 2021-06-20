Ext.define('MssPhoenix.view.tablet.sponsor.user.UserGridController', {
    extend: 'MssPhoenix.view.tablet.sponsor.baseController.SponsorBaseController',
    alias: 'controller.usergridcontroller',

    mixins: [
        'MssPhoenix.view.tablet.sponsor.mixins.GridMixin'
    ],

    init: function () {
    
     },

    onAddAUserButtonClick: function () {
        if (MssPhoenix.profile.Phone.isPhone()) {
            Ext.create(
                {
                    xtype:'sponsoruserformphone',
                }
            ).show();
        } else {
            Ext.create(
                {
                    xtype:'sponsoruserform',
                }
            ).show();
        }
       
    },

    DropUserActionBtnClick: function () {
		var me = this;
      	var record = me.getSelectedRecord();
        if (record) {
			var id = record.get('id');
			var method = 'DELETE';
			var url = `${MssPhoenix.model.Session.baseUrl}/api/sponsorUsers/`+id;
			//ajax request
			Ext.Ajax.request({
				url: url,
				method: method,
               
				success: function (response, opts) {
					var store = Ext.getStore('sponsoruser');
                    store.reload()
				},
				failure: function (response, opts) {
					console.log("Failure");
				}
			});
		}
	},
    DropUserActionBtnPhoneClick: function (view, selected, eOpts) {
		let me = this;
        let data = selected.getData();
        if (data) {
			var id = data.id;
			var method = 'DELETE';
			var url = `${MssPhoenix.model.Session.baseUrl}/api/sponsorUsers/`+id;
			//ajax request
			Ext.Ajax.request({
				url: url,
				method: method,
               
				success: function (response, opts) {
					var store = Ext.getStore('sponsoruser');
                    store.reload()
				},
				failure: function (response, opts) {
					console.log("Failure");
				}
			});
		}
	},
    EditUserActionBtnClick: function () {
	    var me = this, winContainer;
        var record = me.getSelectedRecord();
        if (record) {
            var id = record.get('id');
            if (MssPhoenix.profile.Phone.isPhone()) {
                winContainer = Ext.widget('sponsoruserformphone');
            } else {
                winContainer = Ext.widget('sponsoruserform');
            }
            if(winContainer){
                winContainer.show();
                me.loadSponsorUserDetails(id, winContainer, function (dt) {
                me.bindDataToForm(winContainer,dt);
               }, function (err) {
          
               });
            }
            
        

        }
	},

    bindDataToForm: function (winContainer,data) {
        let form = winContainer.lookupReference('form');
        if (form)
            form.setValues(data);
        let main = Ext.ComponentQuery.query('main')[0];
        if (main) {
            let mainViewModel = main.getViewModel();
            if (mainViewModel) {
                mainViewModel.set('sponsorUsers', data)
            }
        }
    },
    reloadUsersGrid: function () {
        var me = this;
        if (MssPhoenix.profile.Phone.isPhone()) {
            me.reloadList("list");
        } else {
            me.reloadGrid("sponsorusersgrid");
        }
       
    },

    onPhoneViewClaimBtnClick: function (view, selected, eOpts) {
        let me = this;
        let data = selected.getData();
        if (data) {
            var id = data.id;
            let winContainer = Ext.widget('sponsoruserformphone');
            winContainer.show();
            // let view=me.getView();
            me.loadSponsorUserDetails(id, winContainer, function (dt) {
                me.bindDataToForm(winContainer, dt);

            }, function (err) {

            });
        }
    },

    ResetPasswordActionBtnClick: function () {


        let me = this;
        view = me.getView();
        let record = me.getSelectedRecord();
        if (record) {
            let id = record.get('id');
            let method = 'PUT';
            let url = `${MssPhoenix.model.Session.baseUrl}/api/resetUser/` + id;
            me.maskView(view, "Resetting User Credentials...")
            Ext.Ajax.request({
                url: url,
                method: method,

                success: function (response, opts) {
                    me.unMaskView(view)
                    me.showAlert("success", "Reset User Credentials Successfully. ")
                    let store = Ext.getStore('sponsoruser');
                    store.reload()
                },
                failure: function (response, opts) {
                    console.log("Failure");
                }
            });
        }

    }

});
