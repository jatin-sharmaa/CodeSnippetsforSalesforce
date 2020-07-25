import * as vscode from 'vscode';
import ADBNTelemetry from '../../helper/telemetry';

export function loadApexSnippets( context:vscode.ExtensionContext ) {

    vscode.languages.registerCompletionItemProvider('apex', {
        provideCompletionItems(doc, pos, token, context) {
            return apexSnippets;
        },
        resolveCompletionItem(item) {
            let tele = new ADBNTelemetry( context );
            tele.sendAdbnTelementry('lang_usage', {"language": "Apex"}, { 'lang_count': 1});
            tele.sendAdbnTelementry('apex', {"Apex": item.label}, { 'count': 1});
            return item;
        }
    });

    let apexSnippets = [
        {
            label: "sysDebug",
            insertText: new vscode.SnippetString(
                "System.debug('${1:variable}: ' + ${1:variable});"
            ),
            detail: "System Debug | Audibene Code Snippets",
            kind: vscode.CompletionItemKind.Method,
        },
        {
            label: "function",
            insertText: new vscode.SnippetString(
                "${1|public,static,private|} void ${2:FunctionName} (${3:parameters}){\n\t${4:body}\n}"
            ),
            detail: "New Function | Audibene Code Snippets",
            kind: vscode.CompletionItemKind.Function,
        },
        {
            label: "testFunction",
            insertText: new vscode.SnippetString(
                "@isTest\n${1|public,static,private|} void ${2:FunctionName}_Test (${3:parameters}){\n\ttest.startTest();\n\t${4:body}\n\ttest.stopTest();\n}"
            ),
            detail: "New Test Function | Audibene Code Snippets",
            kind: vscode.CompletionItemKind.Function,
        },
        {
            label: "tryCatch",
            insertText: new vscode.SnippetString(
                "try {\n\t${1:data}\n} catch(Exception e) {\n\tSystem.debug(e.getMessage());\n}"
            ),
            detail: "Try Catch | Audibene Code Snippets",
            kind: vscode.CompletionItemKind.Method,
        },
        {
            label: "getset",
            insertText: new vscode.SnippetString(
                "${1|public,static,private|} ${2:FunctionName} {\n\tget {\n\t\t${3:code}\n\t\treturn // variable\n\t} set;\n}"
            ),
            detail: "Getter Setter | Audibene Code Snippets",
            kind: vscode.CompletionItemKind.Method,
        },
        {
            label: "assert",
            insertText: new vscode.SnippetString(
                "system.assert(${1:variable 1}, ${2:variable 2});"
            ),
            detail: "System Assert | Audibene Code Snippets",
            kind: vscode.CompletionItemKind.Method,
        },
        {
            label: "assertEqual",
            insertText: new vscode.SnippetString(
                "system.assertEquals(${1:variable 1}, ${2:variable 2});"
            ),
            detail: "System Assert Equal | Audibene Code Snippets",
            kind: vscode.CompletionItemKind.Method,
        },
    ];
}