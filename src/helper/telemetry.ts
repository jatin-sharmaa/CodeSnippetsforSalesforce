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
        this.thisExt = vscode.extensions.getExtension('Audibene.salesforcecodesnippets');
        this.extensionVersion = "v"+this.thisExt.packageJSON.version;
        this.key = '03b9b83b-55d1-4146-bd0a-d135c07dd0bf';
        // this.key = '03b9b83b-55d1-4146-bd0a-d135c07dd0bf-TEST';
        
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