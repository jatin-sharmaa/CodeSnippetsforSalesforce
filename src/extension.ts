import * as vscode from 'vscode';
import Configuration from './helper/configuration';
import Completions from "./lib/completions";

let Configs: Configuration;
let Completion: Completions;

export function activate( context: vscode.ExtensionContext ) {

    Configs = new Configuration(context);
    Completion = new Completions(context);

    vscode.workspace.onDidChangeConfiguration(e => {
        if (e.affectsConfiguration(Configs.configurationSection)) {
            Completion.unregisterCompletions( context );
            initializeTool(context);
        }
    });

    initializeTool(context);
}

function initializeTool( context: vscode.ExtensionContext){
    Configs.loadConfigurations();
    Completion.initCompletions( context );
    vscode.window.showInformationMessage('Audibene Code Snippet is loaded');
}

export function deactivate( context: vscode.ExtensionContext ) {
    Completion.unregisterCompletions( context );
}