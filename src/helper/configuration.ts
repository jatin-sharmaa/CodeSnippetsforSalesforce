import * as vscode from 'vscode';

export default class Configurations {

    public configurationSection: string;
    public enableApexSnippets: boolean;
    public enableJavascriptSnippets: boolean;
    public enableAuraSnippets: boolean;
    public enableLWCSnippets: boolean;
    public isAdvancedMode: boolean;
    public enableSLDSClass: boolean;
    public hideFeedbackDialog: boolean;
    private context: vscode.ExtensionContext;

    constructor( context: vscode.ExtensionContext ) {
        this.configurationSection        = 'salesforcecodesnippets';
        let configs                      = vscode.workspace.getConfiguration(this.configurationSection);
        this.enableApexSnippets          = configs.get("enableApexSnippets", true);
        this.enableJavascriptSnippets    = configs.get("enableJavascriptSnippets", true);
        this.enableAuraSnippets          = configs.get("enableAuraSnippets", true);
        this.enableLWCSnippets           = configs.get("enableLWCSnippets", true);
        this.isAdvancedMode              = configs.get("enableAdvancedMode", false);
        this.enableSLDSClass             = configs.get("enableSLDSClass", false);
        this.hideFeedbackDialog          = configs.get("hideFeedbackDialog", false);
        this.context                     = context;
    }

    public loadConfigurations() {
        return {
            enableApexSnippets : this.enableApexSnippets,
            enableJavascriptSnippets : this.enableJavascriptSnippets,
            enableAuraSnippets : this.enableAuraSnippets,
            enableLWCSnippets : this.enableLWCSnippets,
            isAdvancedMode : this.isAdvancedMode,
            enableSLDSClass : this.enableSLDSClass,
            hideFeedbackDialog : this.hideFeedbackDialog
        };
    }

    public setConfig( name:string, flagString:string ){
        
        var flag = flagString == "on" ? true : false;

        if ( name === "enableApexSnippets") {
            
            this.enableApexSnippets = flag;
            vscode.workspace.getConfiguration("salesforcecodesnippets").update("enableApexSnippets", flag);
            
        } else if ( name === "enableJavascriptSnippets" ) {
            
            this.enableJavascriptSnippets = flag;
            vscode.workspace.getConfiguration("salesforcecodesnippets").update("enableJavascriptSnippets", flag);

        } else if ( name === "hideFeedbackDialog" ) {
            
            this.hideFeedbackDialog = flag;
            vscode.workspace.getConfiguration("salesforcecodesnippets").update("hideFeedbackDialog", flag);

        }
    }

}