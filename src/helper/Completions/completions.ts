import * as vscode from 'vscode';
import Configuration from "../configuration";
import { loadApexSnippets } from "./apex.completions";
import { loadHTMLSnippets } from "./html.completions";
import { loadAdvancedSnippets } from "./advanced.completions";
import { loadJavascriptSnippets } from "./javascript.completions";
import { loadAuraSnippets } from "./aura.completions";
import { loadLWCSnippets } from "./lwc.completions";
import { loadAdvancedClassesSnippets } from "./advancedClasses.completions";
import { loadClassesSnippets } from "./classes.completions";


export default class Completions {
    
    constructor( context: vscode.ExtensionContext ){}

    public initCompletions( context: vscode.ExtensionContext ) {

        let Configs = new Configuration( context );

        loadHTMLSnippets(context);

        if ( Configs.enableApexSnippets ) {
            loadApexSnippets(context);
        } else {
            vscode.window.showWarningMessage('Audibene Code Snippets is disabled for Apex', "Enable").then(()=>{
                Configs.setConfig("enableApexSnippets", true);
            });
        }

        if ( Configs.enableJavascriptSnippets ) {
            loadJavascriptSnippets(context);
        } else {
            vscode.window.showWarningMessage('Audibene Code Snippets is disabled for Javascript', "Enable").then(()=>{
                Configs.setConfig("enableJavascriptSnippets", true);
            });
        }

        if ( Configs.enableAuraSnippets ) {
            loadAuraSnippets(context);
        }

        if ( Configs.enableLWCSnippets ) {
            loadLWCSnippets(context);
        }

        if ( Configs.enableSLDSClass ) {
            loadClassesSnippets(context);
        }

        if ( Configs.isAdvancedMode ) {
            loadAdvancedSnippets(context);
            loadAdvancedClassesSnippets(context);
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