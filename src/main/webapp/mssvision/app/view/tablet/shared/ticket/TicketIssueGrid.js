	Ext.define('MssPhoenix.view.tablet.shared.ticket.TicketIssueGrid', {
		extend: 'MssPhoenix.view.widgets.Table',
		xtype: 'ticketissuegrid',

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
				docked: 'top',
				defaults: {
					ui: 'action',
				},
				items: [
					{
					xtype: 'button',
                    name: 'addTicketIssue',
					text: 'Add Ticket Issue',
					iconCls: 'x-fa fa-plus',
					handler: 'addTicketIssueButtonClick'
					},
					{
					xtype: 'button',
                    name: 'deleteTicketIssue',
					text: 'Delete Ticket Issue',
					iconCls: 'x-fa fa-ban',
					handler: 'deleteTicketIssueButtonClick'
					},
					{
						xtype: 'searchfield',
						name: 'ticketissueIdSearch',
						reference: 'searchId',
						placeholder: 'ticket issue id to search',
						width: 200,
						listeners: {
							specialkey: 'onIdSearchEnterKey'
						}
		
					},
					,
					  '->'
					,
					{
						iconCls:'fa fa-redo',
						name: 'reloadTicketIssueGrid',
						handler: 'reloadTicketIssueGrid',
						ui: 'action'
					}
					]
			},
		],
		columns: [
			{ text: 'Ticket Issue Id', dataIndex: 'id', flex: 1 },
			{ text: 'Issue', dataIndex: 'issue', flex: 2 },
			{ text: 'Ticket handler', dataIndex: 'profileName', flex: 3 }
			
		]


	});
