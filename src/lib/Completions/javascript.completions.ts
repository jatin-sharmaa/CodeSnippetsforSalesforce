import * as vscode from 'vscode';

export function loadJavascriptSnippets( context:vscode.ExtensionContext ) {

    let jsSnippets = [
        {
            label: "console.log",
            insertText: new vscode.SnippetString(
                "console.log('${1:variable}:', ${1:variable});",
            ),
            detail: "Console Log (Code Snippets for Salesforce)",
            kind: vscode.CompletionItemKind.Method,
        },
        {
            label: "json:stringify-and-parse",
            insertText: new vscode.SnippetString(
                "JSON.parse(JSON.stringify(${1:variable}));",
            ),
            detail: "JSON.parse(JSON.stringify(data)) (Code Snippets for Salesforce)",
            kind: vscode.CompletionItemKind.Method,
        },
        {
            label: "json:parse",
            insertText: new vscode.SnippetString(
                "JSON.parse(${1:variable});",
            ),
            detail: "JSON.parse(data) (Code Snippets for Salesforce)",
            kind: vscode.CompletionItemKind.Method,
        },
        {
            label: "json:stringify",
            insertText: new vscode.SnippetString(
                "JSON.stringify(${1:variable});",
            ),
            detail: "JSON.stringify(data) (Code Snippets for Salesforce)",
            kind: vscode.CompletionItemKind.Method,
        },
        {
            label: "evt:dataSet",
            insertText: new vscode.SnippetString(
                "event.currentTarget.dataset;",
            ),
            detail: "dataSet (Code Snippets for Salesforce)",
            kind: vscode.CompletionItemKind.Method,
        },
        {
            label: "promise",
            insertText: new vscode.SnippetString(
                "return new Promise((resolve, reject) => {\n\t${1}\n});",
            ),
            detail: "Creates and returns a new Promise in the standard ES6 syntax (Code Snippets for Salesforce)",
            kind: vscode.CompletionItemKind.Method,
        },
        {
            label: "thencatch",
            insertText: new vscode.SnippetString(
                ".then((${1:result}) => {\n\t${2}\n}).catch((${3:err}) => {\n\t${4}\n});",
            ),
            detail: "Add the .then and .catch methods to handle promises (Code Snippets for Salesforce)",
            kind: vscode.CompletionItemKind.Method,
        },
        {
            label: "forEach",
            insertText: new vscode.SnippetString(
                "${1:variable}.forEach(function(${2:variable}){\n\t${3:code}\n});",
            ),
            detail: "for each (Code Snippets for Salesforce)",
            kind: vscode.CompletionItemKind.Method,
        },
        {
            label: "component:set",
            insertText: new vscode.SnippetString(
                "component.set(\"v.${1:variable}\", ${2:value});",
            ),
            detail: "Component setter (Code Snippets for Salesforce)",
            kind: vscode.CompletionItemKind.Method,
        },
        {
            label: "component:get",
            insertText: new vscode.SnippetString(
                "component.get(\"v.${1:variable}\");",
            ),
            detail: "Component getter (Code Snippets for Salesforce)",
            kind: vscode.CompletionItemKind.Method,
        },
        {
            label: "component:find",
            insertText: new vscode.SnippetString(
                "component.find(\"${1:auraId}\").get(\"v.${2:variable}\");",
            ),
            detail: "Component finder (Code Snippets for Salesforce)",
            kind: vscode.CompletionItemKind.Method,
        },
        {
            label: "function:controller",
            insertText: new vscode.SnippetString(
                "${1:functionName} : function (component, event, helper) {\n\thelper.${1:functionName}Helper(component, event);\n},",
            ),
            detail: "New Controller Function (Code Snippets for Salesforce)",
            kind: vscode.CompletionItemKind.Function,
        },
        {
            label: "function:helper",
            insertText: new vscode.SnippetString(
                "${1:functionName} : function (component, event) {\n\t${2:Code}\n},",
            ),
            detail: "New Helper Function (Code Snippets for Salesforce)",
            kind: vscode.CompletionItemKind.Function,
        },
        {
            label: "action:Callback",
            insertText: new vscode.SnippetString(
                "var action = component.get(\"${1:name}\");\naction.setParams({${2:parameters}});\naction.setCallback(this, function (response) {\n\tvar state = response.getState();\n\tif (state === this.MESSAGES.SUCCESS) {\n\t\tvar result = response.getReturnValue();\n\t\t// Code when Success\n\t} else if (state === this.MESSAGES.INCOMPLETE) {\n\t\t// Code when Imcomplete\n\t} else if (state === this.MESSAGES.ERROR) {\n\t\tvar errors = response.getError();\n\t\tif (errors) {\n\t\t\tif (errors[0] && errors[0].message) {\n\t\t\t\tconsole.log(\"Error message: \" + errors[0].message);\n\t\t\t}\n\t\t} else {\n\t\t\t\tconsole.log(\"Unknown error\");\n\t\t}\n\t}\n});\n$A.enqueueAction(action);",
            ),
            detail: "Callback Action (Code Snippets for Salesforce)",
            kind: vscode.CompletionItemKind.Method,
        },
        {
            label: "filter",
            insertText: new vscode.SnippetString(
                "${1:varibale}.filter(function(${2:varibale}) {\n\t${3:Code}\n});",
            ),
            detail: "Filter (Code Snippets for Salesforce)",
            kind: vscode.CompletionItemKind.Method,
        },
        {
            label: "splice",
            insertText: new vscode.SnippetString(
                "${1:varibale}.splice(${2:varibale}, ${2:position});",
            ),
            detail: "splice (Code Snippets for Salesforce)",
            kind: vscode.CompletionItemKind.Method,
        },
        {
            label: "action:event",
            insertText: new vscode.SnippetString(
                "var ${1:variable} = component.getEvent(\"${2:event}\");\n${1:variable}.setParams({${3:parameters}});\n${1:variable}.fire();",
            ),
            detail: "Event (Code Snippets for Salesforce)",
            kind: vscode.CompletionItemKind.Method,
        },
    ];

    return vscode.languages.registerCompletionItemProvider('javascript', {
        provideCompletionItems(doc, pos, token, context) {
            return jsSnippets;
        }
    });
    
}