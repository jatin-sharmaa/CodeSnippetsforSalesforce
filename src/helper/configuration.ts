import * as vscode from 'vscode';
import ADBNTelemetry from '../helper/telemetry';

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
        this.configurationSection        = 'audibenecodesnippets';
        let configs                     = vscode.workspace.getConfiguration(this.configurationSection);
        this.enableApexSnippets          = configs.get("enableApexSnippets", true);
        this.enableJavascriptSnippets    = configs.get("enableJavascriptSnippets", true);
        this.enableAuraSnippets          = configs.get("enableAuraSnippets", true);
        this.enableLWCSnippets           = configs.get("enableLWCSnippets", true);
        this.isAdvancedMode              = configs.get("enableAdvancedMode", false);
        this.enableSLDSClass             = configs.get("enableSLDSClass", false);
        this.context                     = context;
    }

    private sendConfigTelemetry() {

        let reporter = new ADBNTelemetry( this.context );
    
        if(this.enableApexSnippets){
            reporter.sendAdbnTelementry('settings', {"Config": "Apex"}, { 'switch': 1});
        } else {
            reporter.sendAdbnTelementry('settings', {"Config": "Apex"}, { 'switch': 0});
        }
    
        if(this.enableJavascriptSnippets){
            reporter.sendAdbnTelementry('settings', {"Config": "JavaScript"}, { 'switch': 1});
        } else {
            reporter.sendAdbnTelementry('settings', {"Config": "JavaScript"}, { 'switch': 0});
        }
    
        if(this.enableAuraSnippets){
            reporter.sendAdbnTelementry('settings', {"Config": "Aura"}, { 'switch': 1});
        } else {
            reporter.sendAdbnTelementry('settings', {"Config": "Aura"}, { 'switch': 0});
        }
    
        if(this.enableLWCSnippets){
            reporter.sendAdbnTelementry('settings', {"Config": "LWC"}, { 'switch': 1});
        } else {
            reporter.sendAdbnTelementry('settings', {"Config": "LWC"}, { 'switch': 0});
        }
    
        if(this.isAdvancedMode){
            reporter.sendAdbnTelementry('settings', {"Config": "Advanced Mode"}, { 'switch': 1});
        } else {
            reporter.sendAdbnTelementry('settings', {"Config": "Advanced Mode"}, { 'switch': 0});
        }
    
        if(this.enableSLDSClass){
            reporter.sendAdbnTelementry('settings', {"Config": "SLDS Classes"}, { 'switch': 1});
        } else {
            reporter.sendAdbnTelementry('settings', {"Config": "SLDS Classes"}, { 'switch': 0});
        }
        
    }

    public loadConfigurations() {

        this.sendConfigTelemetry();

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
        let configs = new Configurations( this.context);
        
        if ( name === "enableApexSnippets") {
            
            this.enableApexSnippets = flag;

        } else if ( name === "enableJavascriptSnippets" ) {
            
            this.enableJavascriptSnippets = flag;

        }
    }

}