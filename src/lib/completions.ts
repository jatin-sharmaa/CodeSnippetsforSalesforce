import * as vscode from 'vscode';
import Configuration from "../helper/configuration";
import { loadApexSnippets } from "./Completions/apex.completions";
import { loadHTMLSnippets } from "./Completions/html.completions";
import { loadAdvancedSnippets } from "./Completions/advanced.completions";
import { loadJavascriptSnippets } from "./Completions/javascript.completions";
import { loadAuraSnippets } from "./Completions/aura.completions";
import { loadLWCSnippets } from "./Completions/lwc.completions";
import { loadAdvancedClassesSnippets } from "./Completions/advancedClasses.completions";
import { loadClassesSnippets } from "./Completions/classes.completions";

const disposables: vscode.Disposable[] = [];

export default class Completions {
    
    constructor( context: vscode.ExtensionContext ){}

    public initCompletions( context: vscode.ExtensionContext ) {

        let Configs = new Configuration( context );

        disposables.push( loadHTMLSnippets(context) );

        if ( Configs.enableApexSnippets ) {
            disposables.push( loadApexSnippets(context) );
        } else {
            vscode.window.showWarningMessage('Salesforce Code Snippets is disabled for Apex', "Enable").then(()=>{
                Configs.setConfig("enableApexSnippets", true);
            });
        }

        if ( Configs.enableJavascriptSnippets ) {
            disposables.push( loadJavascriptSnippets(context) );
        } else {
            vscode.window.showWarningMessage('Salesforce Code Snippets is disabled for Javascript', "Enable").then(()=>{
                Configs.setConfig("enableJavascriptSnippets", true);
            });
        }

        if ( Configs.enableAuraSnippets ) {
            disposables.push( loadAuraSnippets(context) );
        }

        if ( Configs.enableLWCSnippets ) {
            disposables.push( loadLWCSnippets(context) );
        }

        if ( Configs.enableSLDSClass ) {
            disposables.push( loadClassesSnippets(context) );
        }

        if ( Configs.isAdvancedMode ) {
            disposables.push( loadAdvancedSnippets(context) );
            disposables.push( loadAdvancedClassesSnippets(context) );
        }

        context.subscriptions.push(...disposables);

    }

    public unregisterCompletions( context: vscode.ExtensionContext ){

        for (const disposable of disposables) {
            const existingIndex = context.subscriptions.indexOf(disposable);
            if (existingIndex !== -1) {
                context.subscriptions.splice(existingIndex, 1);
            }
    
            disposable.dispose();
        }
    }
}

// "LWC Checkbox":{
//     "prefix": "adbn:checkbox-lwc",
//     "body": "",
//     "description": ""
// },

// "Aura Checkbox Group":{
//     "prefix": "adbn:checkbox-group-aura",
//     "body": "",
//     "description": ""
// },
// "LWC Checkbox Group":{
//     "prefix": "adbn:checkbox-group-lwc",
//     "body": "",
//     "description": ""
// },

// "Aura Combobox (Select)":{
//     "prefix": "adbn:combobox-aura",
//     "body": "",
//     "description": ""
// },

// "LWC Combobox (Select)":{
//     "prefix": "adbn:combobox-lwc",
//     "body": "",
//     "description": ""
// },

// "Aura Toggle button":{
//     "prefix": "adbn:toggle-button-aura",
//     "body": "",
//     "description": ""
// },

// "LWC Toggle button":{
//     "prefix": "adbn:toggle-button-lwc",
//     "body": "",
//     "description": ""
// },

// "Aura Radio Button":{
//     "prefix": "adbn:radio-button-aura",
//     "body": "",
//     "description": ""
// },

// "LWC Radio button":{
//     "prefix": "adbn:radio-button-lwc",
//     "body": "",
//     "description": ""
// },

// "Aura Text Area":{
//     "prefix": "adbn:text-aread-aura",
//     "body": "",
//     "description": ""
// },

// "LWC Text Area":{
//     "prefix": "adbn:text-area-lwc",
//     "body": "",
//     "description": ""
// },
// "Aura Dual List Box":{
//     "prefix": "adbn:dual-list-box-aura",
//     "body": "",
//     "description": ""
// },
// "LWC Dual List Box":{
//     "prefix": "adbn:dual-list-box-lwc",
//     "body": "",
//     "description": ""
// },

// "Aura Data Table":{
//     "prefix": "adbn:data-table-aura",
//     "body": "",
//     "description": ""
// },

// "Aura Formatted Text":{
//     "prefix": "adbn:formatted-text-aura",
//     "body":""
// },
// "LWC Formatted Text":{
//     "prefix": "adbn:formatted-text-aura",
//     "body":"<lightning-formatted-text value=\"${1:test@domain.com}\" linkify=${2|true,false|}></lightning-formatted-text>"
// },