/**
 * This view is an example list of people.
 */
Ext.define('Collect.view.grid.Nodes', {
    extend: 'Ext.grid.Panel',
    xtype: 'collect-grid-nodes',

    requires: [
        'Collect.store.tree.Nodes'
    ],

    columns: [
        { text: 'Name', dataIndex: 'name', flex: 1},
        { text: 'Default', dataIndex: 'default'},
        { text: 'Publish?', dataIndex: 'publish' },
        { text: 'Required?', dataIndex: 'required' },
        { text: 'Actions', dataIndex: 'actions' }
    ],

    // dockedItems: [{
    //     xtype: 'toolbar',
    //     dock: 'top',
    //     style: 'background-color:rgb(95, 162, 221);',
    //     items: [
    //         { xtype: 'button', text: 'Actions' },
    //         { xtype: 'button', text: 'Controls' }
    //     ]
    // }],

    initComponent: function() {
        var me = this;
        this.callParent();
    }
});