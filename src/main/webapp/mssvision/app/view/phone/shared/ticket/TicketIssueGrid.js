Ext.define('MssPhoenix.view.phone.shared.ticket.TicketIssueGrid', {
	extend: 'MssPhoenix.view.widgets.Table',
	xtype: 'phoneticketissuegrid',

	controller: 'ticketissuegridcontroller',
	store: {
		type: 'ticketissue'
	},

	height: 456,
	layout: 'fit',

	selectable: {
		columns: true,
		cells: true,
		checkbox: true,
		drag: true,
		mode: 'single',
		extensible: 'y'
	},

	items: [
		{
			xtype: 'toolbar',
			layout: 'vbox',
			docked: 'top',
			defaults: {
				ui: 'action',
			},
			items: [
				{
					xtype: 'container',
					layout: 'hbox',
					items: [
						{
							xtype: 'button',
							iconCls: 'x-fa fa-plus',
							handler: 'addTicketIssueButtonClick'
						},
						{
							xtype: 'button',
							margin: '0 0 0 6',
							iconCls: 'x-fa fa-ban',
							handler: 'deleteTicketIssueButtonClick'
						},
						{
							xtype: 'button',
							margin: '0 0 0 6',
							iconCls: 'fa fa-redo',
							handler: 'reloadTicketIssueGrid',
							ui: 'action'
						}
					]
				},
				{
					xtype: 'searchfield',
					reference: 'searchId',
					placeholder: 'ticket issue id to search',
					width: 200,
					listeners: {
						specialkey: 'onIdSearchEnterKey'
					}

				}

			]
		},
	],
	columns: [
		{ text: 'Ticket Issue Id', dataIndex: 'id', flex: 1, hidden: true },
		{ text: 'Issue', dataIndex: 'issue', flex: 2 },
		{ text: 'Profile Id', dataIndex: 'profileId', flex: 3 }

	]


});
