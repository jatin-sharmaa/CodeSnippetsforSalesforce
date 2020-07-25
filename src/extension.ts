import * as vscode from 'vscode';
import Configuration from './helper/configuration';
import Completions from "./helper/Completions/completions";

const disposables: vscode.Disposable[] = [];
let Configs: Configuration;
let Completion: Completions;

export function activate( context: vscode.ExtensionContext ) {

    Configs = new Configuration(context);
    Completion = new Completions(context);

    // Whenever the configuration changes and affects the extension, reload everything
    vscode.workspace.onDidChangeConfiguration(e => {
        if (e.affectsConfiguration(Configs.configurationSection)) {
            unregisterProviders( context );
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

function unregisterProviders(context: vscode.ExtensionContext) {
    // If the providers are about to be registered again, remove previous instances first
    for (const disposable of disposables) {
        const existingIndex = context.subscriptions.indexOf(disposable);
        if (existingIndex !== -1) {
            context.subscriptions.splice(existingIndex, 1);
        }
        disposable.dispose();
    }
}

export function deactivate() {}