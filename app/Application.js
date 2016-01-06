/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('Collect.Application', {
    extend: 'Ext.app.Application',
    
    name: 'Collect',

    stores: [
        // TODO: add global / shared stores here
    ],
    
    launch: function () {
        // TODO - Launch the application

        // https://docs.sencha.com/extjs/6.0/wh...de.html#Button
        Ext.enableAriaButtons = false;
        Ext.enableAriaPanels = false;
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
