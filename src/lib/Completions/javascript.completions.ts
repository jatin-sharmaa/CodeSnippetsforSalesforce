import * as vscode from 'vscode';
import ADBNTelemetry from '../../helper/telemetry';

export function loadJavascriptSnippets( context:vscode.ExtensionContext ) {

    let jsSnippets = [
        {
            label: "console.log",
            insertText: new vscode.SnippetString(
                "console.log('${1:variable}:', ${1:variable});",
            ),
            detail: "Console Log",
            kind: vscode.CompletionItemKind.Method,
        },
        {
            label: "json:stringify-and-parse",
            insertText: new vscode.SnippetString(
                "JSON.parse(JSON.stringify(${1:variable}));",
            ),
            detail: "JSON.parse(JSON.stringify(data))",
            kind: vscode.CompletionItemKind.Method,
        },
        {
            label: "json:parse",
            insertText: new vscode.SnippetString(
                "JSON.parse(${1:variable});",
            ),
            detail: "JSON.parse(data)",
            kind: vscode.CompletionItemKind.Method,
        },
        {
            label: "json:stringify",
            insertText: new vscode.SnippetString(
                "JSON.stringify(${1:variable});",
            ),
            detail: "JSON.stringify(data)",
            kind: vscode.CompletionItemKind.Method,
        },
        {
            label: "evt:dataSet",
            insertText: new vscode.SnippetString(
                "event.currentTarget.dataset;",
            ),
            detail: "dataSet",
            kind: vscode.CompletionItemKind.Method,
        },
        {
            label: "promise",
            insertText: new vscode.SnippetString(
                "return new Promise((resolve, reject) => {\n\t${1}\n});",
            ),
            detail: "Creates and returns a new Promise in the standard ES6 syntax",
            kind: vscode.CompletionItemKind.Method,
        },
        {
            label: "thencatch",
            insertText: new vscode.SnippetString(
                ".then((${1:result}) => {\n\t${2}\n}).catch((${3:err}) => {\n\t${4}\n});",
            ),
            detail: "Add the .then and .catch methods to handle promises",
            kind: vscode.CompletionItemKind.Method,
        },
        {
            label: "forEach",
            insertText: new vscode.SnippetString(
                "${1:variable}.forEach(function(${2:variable}){\n\t${3:code}\n});",
            ),
            detail: "for each",
            kind: vscode.CompletionItemKind.Method,
        },
        {
            label: "component:set",
            insertText: new vscode.SnippetString(
                "component.set(\"v.${1:variable}\", ${2:value});",
            ),
            detail: "Component setter",
            kind: vscode.CompletionItemKind.Method,
        },
        {
            label: "component:get",
            insertText: new vscode.SnippetString(
                "component.get(\"v.${1:variable}\");",
            ),
            detail: "Component getter",
            kind: vscode.CompletionItemKind.Method,
        },
        {
            label: "component:find",
            insertText: new vscode.SnippetString(
                "component.find(\"${1:auraId}\").get(\"v.${2:variable}\");",
            ),
            detail: "Component finder",
            kind: vscode.CompletionItemKind.Method,
        },
        {
            label: "function:controller",
            insertText: new vscode.SnippetString(
                "${1:functionName} : function (component, event, helper) {\n\thelper.${1:functionName}Helper(component, event);\n},",
            ),
            detail: "New Controller Function",
            kind: vscode.CompletionItemKind.Function,
        },
        {
            label: "function:helper",
            insertText: new vscode.SnippetString(
                "${1:functionName} : function (component, event) {\n\t${2:Code}\n},",
            ),
            detail: "New Helper Function",
            kind: vscode.CompletionItemKind.Function,
        },
        {
            label: "action:Callback",
            insertText: new vscode.SnippetString(
                "var action = component.get(\"${1:name}\");\naction.setParams({${2:parameters}});\naction.setCallback(this, function (response) {\n\tvar state = response.getState();\n\tif (state === this.MESSAGES.SUCCESS) {\n\t\tvar result = response.getReturnValue();\n\t\t// Code when Success\n\t} else if (state === this.MESSAGES.INCOMPLETE) {\n\t\t// Code when Imcomplete\n\t} else if (state === this.MESSAGES.ERROR) {\n\t\tvar errors = response.getError();\n\t\tif (errors) {\n\t\t\tif (errors[0] && errors[0].message) {\n\t\t\t\tconsole.log(\"Error message: \" + errors[0].message);\n\t\t\t}\n\t\t} else {\n\t\t\t\tconsole.log(\"Unknown error\");\n\t\t}\n\t}\n});\n$A.enqueueAction(action);",
            ),
            detail: "Callback Action",
            kind: vscode.CompletionItemKind.Method,
        },
        {
            label: "filter",
            insertText: new vscode.SnippetString(
                "${1:varibale}.filter(function(${2:varibale}) {\n\t${3:Code}\n});",
            ),
            detail: "Filter",
            kind: vscode.CompletionItemKind.Method,
        },
        {
            label: "splice",
            insertText: new vscode.SnippetString(
                "${1:varibale}.splice(${2:varibale}, ${2:position});",
            ),
            detail: "splice",
            kind: vscode.CompletionItemKind.Method,
        },
        {
            label: "action:event",
            insertText: new vscode.SnippetString(
                "var ${1:variable} = component.getEvent(\"${2:event}\");\n${1:variable}.setParams({${3:parameters}});\n${1:variable}.fire();",
            ),
            detail: "Event",
            kind: vscode.CompletionItemKind.Method,
        },
    ];

    return vscode.languages.registerCompletionItemProvider('javascript', {
        provideCompletionItems(doc, pos, token, context) {
            return jsSnippets;
        },
        resolveCompletionItem(item) {
            let tele = new ADBNTelemetry( context );
            tele.sendAdbnTelementry('lang_usage', {"language": "JavaScript"}, { 'lang_count': 1});
            tele.sendAdbnTelementry('javascript', {"JavaScript": item.label}, { 'count': 1});
            return item;
        }
    });
    
}