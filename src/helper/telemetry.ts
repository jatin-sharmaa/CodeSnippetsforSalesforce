import * as vscode from 'vscode';
import TelemetryReporter from 'vscode-extension-telemetry';

export default class ADBNTelemetry {
    
    private extensionId: string;
    private thisExt: any;
    private extensionVersion: string;
    private key: string;
    private reporter: TelemetryReporter;
    
    constructor( context: vscode.ExtensionContext ) {
        
        this.extensionId = 'ADBNCodeSnippet';
        this.thisExt = vscode.extensions.getExtension('UIUXTeamAudibene.audibenecodesnippets');
        this.extensionVersion = "v"+this.thisExt.packageJSON.version;
        // this.key = '03b9b83b-55d1-4146-bd0a-d135c07dd0bf';
        this.key = '03b9b83b-55d1-4146-bd0a-d135c07dd0bf-TEST';
        
        this.reporter = new TelemetryReporter(this.extensionId, this.extensionVersion, this.key);
        context.subscriptions.push(this.reporter);
    }

    public sendAdbnTelementry(
        eventName:string, 
        properties:{[key: string]: string; }, 
        measurements:{[key: string]: number;}
        )
    {
        this.reporter.sendTelemetryEvent(eventName, properties, measurements);
    } 
}

// "vscode:prepublish": "npm install vscode-extension-telemetry && webpack --mode production",

// "vscode:prepublish": "npm run compile",
// "compile": "tsc -p ./",
// "lint": "eslint src --ext ts",
// "watch": "tsc -watch -p ./",
// "pretest": "npm run compile && npm run lint",
// "test": "node ./out/test/runTest.js"


// "lint": "eslint src --ext ts",
// "watch": "tsc -watch -p ./",
// "pretest": "npm run compile && npm run lint",
// "test": "node ./out/test/runTest.js",
// "devMode": "npm run install_webpack",
// "install_webpack": "npm i --save-dev webpack webpack-cli && npm run install_ts_loader",
// "install_ts_loader": "npm i --save-dev ts-loader",
// "install-telemetry": "npm install vscode-extension-telemetry"