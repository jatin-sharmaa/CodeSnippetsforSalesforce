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
    if( !Configs.hideFeedbackDialogOnStartup ) {
        showFeedbackPage();
        Configs.setConfig("hideFeedbackDialogOnStartup", "on");
    }
}

function initializeTool( context: vscode.ExtensionContext){
    Configs.loadConfigurations();
    Completion.initCompletions( context );

    if (Configs.hideFeedbackDialogPrompt) {

        vscode.window.showInformationMessage('Code Snippets for Salesforce is loaded');

    } else {

        vscode.window.showInformationMessage('Code Snippets for Salesforce is loaded', "Don't show Again", "Send Feedback").then((option)=>{
            if ( option === "Send Feedback" ) {
                showFeedbackPage();
            }
            if ( option === "Don't show Again") {
                Configs.setConfig("hideFeedbackDialogPrompt", "on");
            }
        });

    }
}

function showFeedbackPage() {
    const panel = vscode.window.createWebviewPanel(
        'feedBack',
        'Feedback: Code Snippets for Salesforce',
        vscode.ViewColumn.One,
        {}
    );
    panel.webview.html = getFeedbackPage();
}

function getFeedbackPage() {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title></title>
        <link href='https://fonts.googleapis.com/css?family=Lato:300,400|Montserrat:400,700' rel='stylesheet'
            type='text/css'>
        <style>
            *{box-sizing:border-box}html{background:#007cce;background:linear-gradient(155deg,#007cce 0,#072d82 100%);height:100vh;margin:auto}body{text-align:center;font-family:Montserrat,sans-serif;background-color:transparent;color:#fff;margin:0}h1{padding-top:50px;font-size:6.25rem;margin-bottom:15px}.imgBlock{background:#1e1e1e;box-shadow:0 0 5px rgba(255,255,255,.55);margin-bottom:25px}.container{max-width:900px;margin:auto}p{font-size:1.25rem;line-height:30px}p a{color:#fff;font-weight:700}
        </style>
    </head>
    <body>
        <h1>THANK YOU!</h1>
        <div class="imgBlock">
            <img src="https://raw.githubusercontent.com/jatinsharmaa/CodeSnippetsforSalesforce/master/images/conffeti.png" />
        </div>
        <div class="container">
            <p>
                Thanks a bunch for installing our extension.<br>It is a great pleasure to announce that we have reached our milestone of and it would not have been
                possible without you. It means a lot to us. <br><br>We would really appreciate you giving us a moment of
                your time <br> to fill our <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=WECDUZvVykaNEOht6e6JLYKqvqdLL1hDkwRU5_8OjIRUOFpFSkYxQjZZVDZZWDNORjZVOFUwREVaSi4u">Feedback Form</a>
                <br><br> Happy Coding! <br><br> With regards from 
                <a href="https://www.linkedin.com/company/audibene/">Audibene</a>/
                <a href="https://www.linkedin.com/company/hear-com-india/">Hear.com</a>
            </p>
        </div>
    </body>
    </html>`;
}

export function deactivate( context: vscode.ExtensionContext ) {
    Completion.unregisterCompletions( context );
}