import * as vscode from 'vscode';

export default class Configurations {

    public configurationSection: string;
    public enableApexSnippets: boolean;
    public enableJavascriptSnippets: boolean;
    public enableAuraSnippets: boolean;
    public enableLWCSnippets: boolean;
    public isAdvancedMode: boolean;
    public enableSLDSClass: boolean;
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
        this.context                     = context;
    }

    public loadConfigurations() {
        return {
            enableApexSnippets : this.enableApexSnippets,
            enableJavascriptSnippets : this.enableJavascriptSnippets,
            enableAuraSnippets : this.enableAuraSnippets,
            enableLWCSnippets : this.enableLWCSnippets,
            isAdvancedMode : this.isAdvancedMode,
            enableSLDSClas : this.enableSLDSClass
        };
    }

    public setConfig( name:string, flag:boolean ){
        
        if ( name === "enableApexSnippets") {
            
            this.enableApexSnippets = flag;

        } else if ( name === "enableJavascriptSnippets" ) {
            
            this.enableJavascriptSnippets = flag;

        }
    }

}