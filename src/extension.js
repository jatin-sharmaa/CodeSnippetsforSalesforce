const vscode = require('vscode');
const TelemetryReporter = require('vscode-extension-telemetry');

const extensionId = 'ADBNCodeSnippet';
var thisExt = vscode.extensions.getExtension('UIUXTeamAudibene.audibenecodesnippets');
const extensionVersion = "v"+thisExt.packageJSON.version;
const key = '03b9b83b-55d1-4146-bd0a-d135c07dd0bf';
let reporter;

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

    vscode.window.showInformationMessage('Audibene Code Snippet is loaded');
    
    reporter = new TelemetryReporter.default(extensionId, extensionVersion, key);
    context.subscriptions.push(reporter);
    
    let configs = vscode.workspace.getConfiguration('audibenecodesnippets');
    let enableApexSnippets          = configs.get("enableApexSnippets", true);
    let enableJavascriptSnippets    = configs.get("enableJavascriptSnippets", true);
    let enableAuraSnippets          = configs.get("enableAuraSnippets", true);
    let enableLWCSnippets           = configs.get("enableLWCSnippets", true);
    let isAdvancedMode              = configs.get("enableAdvancedMode", false);
    let enableSLDSClass             = configs.get("enableSLDSClass", false);
    
    sendTeleEventforConfigs( configs );

    if (enableApexSnippets) {
        vscode.languages.registerCompletionItemProvider('apex', {
            provideCompletionItems(doc, pos, token, context) {
                return apexSnippets();
            },
            resolveCompletionItem(item, token) {
                reporter.sendTelemetryEvent('lang_usage', {"language": "Apex"}, { 'lang_count': 1});
                reporter.sendTelemetryEvent('apex', {"Apex": item.label}, { 'count': 1});
            }
        });
    } else {
        vscode.window.showWarningMessage('Audibene Code Snippets is disabled for Apex', "Enable").then(()=>{
            enableApexSnippetsFlag();
        }) 
    }

    if (enableJavascriptSnippets) {
        vscode.languages.registerCompletionItemProvider('javascript', {
            provideCompletionItems(doc, pos, token, context) {
                return jsSnippets();
            },
            resolveCompletionItem(item, token) {
                reporter.sendTelemetryEvent('lang_usage', {"language": "JavaScript"}, { 'lang_count': 1});
                reporter.sendTelemetryEvent('javascript', {"JavaScript": item.label}, { 'count': 1});
            }
        });
    } else {
        vscode.window.showWarningMessage('Audibene Code Snippets is disabled for Javascript', "Enable").then(()=>{
            enableJavascriptSnippetsFlag();
        }) 
    }

    if (isAdvancedMode) {
        vscode.languages.registerCompletionItemProvider('html', {
            provideCompletionItems(doc, pos, token, context) {
                return advancedHtmlSnippets();
            },
            resolveCompletionItem(item, token) {
                reporter.sendTelemetryEvent('lang_usage', {"language": "Advanced Mode"}, { 'lang_count': 1});
                reporter.sendTelemetryEvent('advancedMode', {"Advanced Mode": item.label}, { 'count': 1});
            }
        });
    }

    if (enableSLDSClass) {
        vscode.languages.registerCompletionItemProvider("html", {
            provideCompletionItems(document, position, token) {

                var start = new vscode.Position(position.line, 0);
                var range = new vscode.Range(start, position);
                var text = document.getText(range);

                var rawClasses = text.match(/class=["|']([\w- ]*$)/);
                if (rawClasses === null) {
                    return [];
                } else {
                    return sldsClasses();
                }
            },
            resolveCompletionItem(item, token) {
                reporter.sendTelemetryEvent('lang_usage', {"language": "Classes"}, { 'lang_count': 1});
                reporter.sendTelemetryEvent('htmlClasses', {"classes": item.label}, { 'count': 1});
            }
        });
    }

    if (enableAuraSnippets) {
        vscode.languages.registerCompletionItemProvider('html', {
            provideCompletionItems(doc, pos, token, context) {
                return auraSnippets();
            },
            resolveCompletionItem(item, token) {
                reporter.sendTelemetryEvent('lang_usage', {"language": "Aura"}, { 'lang_count': 1});
                reporter.sendTelemetryEvent('htmlAura', {"Aura": item.label}, { 'count': 1});
            }
        });
    }
    
    if (enableLWCSnippets) {
        vscode.languages.registerCompletionItemProvider('html', {
            provideCompletionItems(doc, pos, token, context) {
                return lwcSnippets();
            },
            resolveCompletionItem(item, token) {
                reporter.sendTelemetryEvent('lang_usage', {"language": "LWC"}, { 'lang_count': 1});
                reporter.sendTelemetryEvent('htmlLWC', {"LWC": item.label}, { 'count': 1});
            }
        });
    }
    
    vscode.languages.registerCompletionItemProvider('html', {
        provideCompletionItems(doc, pos, token, context) {
            return htmlSnippets();
        },
        resolveCompletionItem(item, token) {
            reporter.sendTelemetryEvent('lang_usage', {"language": "HTML"}, { 'lang_count': 1});
            reporter.sendTelemetryEvent('html', {"html": item.label}, { 'count': 1});
        }
    });
}

/*
 * Flag Updators
 */
    function enableApexSnippetsFlag() {
        
        reporter.sendTelemetryEvent('actions', {"Setting Update": "Apex"}, { 'flag': 1});
        var configs = vscode.workspace.getConfiguration('audibenecodesnippets');
        configs.update("enableApexSnippets", true, vscode.ConfigurationTarget.Global).then(() => {
            vscode.window.showInformationMessage('Audibene Code Snippets is actiavted for Apex');
        });
    }

    function enableJavascriptSnippetsFlag() {
        
        reporter.sendTelemetryEvent('actions', {"Setting Update": "Javascript"}, { 'flag': 1});
        var configs = vscode.workspace.getConfiguration('audibenecodesnippets');
        configs.update("enableJavascriptSnippets", true, vscode.ConfigurationTarget.Global).then(() => {
            vscode.window.showInformationMessage('Audibene Code Snippets is actiavted for Javascript');
        });
    }

/*
 * Telemetry
 */
    function sendTeleEventforConfigs( configs ) {

        let enableApexSnippets          = configs.get("enableApexSnippets", true);
        let enableJavascriptSnippets    = configs.get("enableJavascriptSnippets", true);
        let enableAuraSnippets          = configs.get("enableAuraSnippets", true);
        let enableLWCSnippets           = configs.get("enableLWCSnippets", true);
        let isAdvancedMode              = configs.get("enableAdvancedMode", false);
        let enableSLDSClass             = configs.get("enableSLDSClass", false);

        if(enableApexSnippets){
            reporter.sendTelemetryEvent('settings', {"Config": "Apex"}, { 'switch': 1});
        } else {
            reporter.sendTelemetryEvent('settings', {"Config": "Apex"}, { 'switch': 0});
        }

        if(enableJavascriptSnippets){
            reporter.sendTelemetryEvent('settings', {"Config": "JavaScript"}, { 'switch': 1});
        } else {
            reporter.sendTelemetryEvent('settings', {"Config": "JavaScript"}, { 'switch': 0});
        }

        if(enableAuraSnippets){
            reporter.sendTelemetryEvent('settings', {"Config": "Aura"}, { 'switch': 1});
        } else {
            reporter.sendTelemetryEvent('settings', {"Config": "Aura"}, { 'switch': 0});
        }

        if(enableLWCSnippets){
            reporter.sendTelemetryEvent('settings', {"Config": "LWC"}, { 'switch': 1});
        } else {
            reporter.sendTelemetryEvent('settings', {"Config": "LWC"}, { 'switch': 0});
        }

        if(isAdvancedMode){
            reporter.sendTelemetryEvent('settings', {"Config": "Advanced Mode"}, { 'switch': 1});
        } else {
            reporter.sendTelemetryEvent('settings', {"Config": "Advanced Mode"}, { 'switch': 0});
        }

        if(enableSLDSClass){
            reporter.sendTelemetryEvent('settings', {"Config": "SLDS Classes"}, { 'switch': 1});
        } else {
            reporter.sendTelemetryEvent('settings', {"Config": "SLDS Classes"}, { 'switch': 0});
        }

    }

/*
 * Snippets
 */
    function htmlSnippets() {
        return [
            {
                label: "bold",
                insertText: new vscode.SnippetString(
                    "<strong>${1:Text}</strong>"
                ),
                detail: "Make a text bold",
                kind: vscode.CompletionItemKind.Property,
            },
            {
                label: "grid:1 Column",
                insertText: new vscode.SnippetString(
                    "<div class=\"slds-grid\">\n\t<div class=\"slds-col\"> ${1:<!-- Code -->} </div>\n</div>",
                ),
                detail: "Default Grid with 1 column",
                kind: vscode.CompletionItemKind.Snippet,
            },
            {
                label: "grid:2 Columns",
                insertText: new vscode.SnippetString(
                    "<div class=\"slds-grid\">\n\t<div class=\"slds-col slds-size_6-of-12\">${1:<!-- Code -->}</div>\n\t<div class=\"slds-col slds-size_6-of-12\"><!-- Code --></div>\n</div>",
                ),
                detail: "Default Grid with 2 columns",
                kind: vscode.CompletionItemKind.Snippet,
            },
            {
                label: "grid:3 Columns",
                insertText: new vscode.SnippetString(
                    "<div class=\"slds-grid\">\n\t<div class=\"slds-col slds-size_4-of-12\">${1:<!-- Code -->}</div>\n\t<div class=\"slds-col slds-size_4-of-12\"><!-- Code --></div>\n\t<div class=\"slds-col slds-size_4-of-12\"><!-- Code --></div>\n</div>",
                ),
                detail: "Default Grid with 3 columns",
                kind: vscode.CompletionItemKind.Snippet,
            },
            {
                label: "column",
                insertText: new vscode.SnippetString(
                    "<div class=\"slds-col slds-size_${1|1,2,3,4,5,6,7,8,9,10,11,12|}-of-${1|1,2,3,4,5,6,7,8,9,10,11,12|}\">\n\t$2\n</div>",
                ),
                detail: "Grid Column",
                kind: vscode.CompletionItemKind.Snippet,
            },
            {
                label: "Modal Layer",
                insertText: new vscode.SnippetString(
                    "<!--  ====== Paste below function in controller ====== -->\n\tcloseModal : function(component, event, helper) {\n\t\thelper.closeModal(component);\n\t}\n<!-- ====== Paste below function in helper ====== -->\n\tcloseModal : function(component) {\n\t\tvar currentValue = component.get(\"v.displayModal\");\n\t\tcomponent.set(\"v.displayModal\", !currentValue);\n\t}\n\n<aura:attribute name=\"displayModal\" type=\"Boolean\" default=\"true\" description=\"boolean flag to control modal visibility\" />\n\n<aura:if isTrue=\"{!v.displayModal}\">\n\t<div role=\"dialog\" tabindex=\"-1\" aria-labelledby=\"Modal\" class=\"slds-modal slds-fade-in-open slds-modal_small\">\n\t\t<div class=\"slds-modal__container c__modalContainer\">\n\t\t\t<div class=\"slds-modal__header\">\n\t\t\t\t<button class=\"slds-button slds-button--icon-inverse slds-modal__close\" onclick=\"{!c.closeModal}\">\n\t\t\t\t\t<lightning:icon iconName=\"utility:close\" size=\"medium\" variant=\"bare\" />\n\t\t\t\t\t<span class=\"slds-assistive-text\"><!-- FIX {Label.c.Close} --> </span>\n\t\t\t\t</button>\n\t\t\t\t<h1 class=\"slds-text-heading--medium c__fontWeightTitle\">${1:Modal Title}</h1>\n\t\t\t</div>\n\t\t\t<div class=\"slds-modal__content slds-p-around--medium c__modalContent\">\n\t\t\t\t<div class=\"c_tableWrapper\">\n\t\t\t\t\t${2:Modal Body}\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"slds-modal__footer c__modalFooter\">\n\t\t\t\t<div class=\"slds-grid\">\n\t\t\t\t\t<div class=\"slds-col slds-size_6-of-12\">\n\t\t\t\t\t\t<!-- Code -->\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"slds-col slds-size_6-of-12 slds-text-align_right\">\n\t\t\t\t\t\t<lightning:button class=\"slds-p-horizontal_xx-large\" variant=\"neutral\" label=\"Back\" title=\"Back\" />\n\t\t\t\t\t\t<lightning:button class=\"slds-p-horizontal_xx-large\" variant=\"brand\" label=\"Next\" title=\"Next\" />\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"slds-backdrop slds-backdrop_open\" aura:id=\"modalBackground\"></div>\n</aura:if>",
                ),
                detail: "Audibene Modal Layer",
                kind: vscode.CompletionItemKind.Snippet,
            },
            {
                label: "absolute:center",
                insertText: new vscode.SnippetString(
                    "<div class=\"slds-align_absolute-center\">$1</div>",
                ),
                detail: "Absolute Center",
                kind: vscode.CompletionItemKind.Snippet,
            },
            {
                label: "heading",
                insertText: new vscode.SnippetString(
                    "<div class=\"slds-text-${1|heading_large,heading_medium,heading_small|}\">$2</div>",
                ),
                detail: "Heading",
                kind: vscode.CompletionItemKind.Snippet,
            },
            {
                label: "text",
                insertText: new vscode.SnippetString(
                    "<div class=\"slds-text-${1|align_left,align_center,align_right,color_default,color_success,color_weak,color_error,color_inverse,color_inverse-weak|}\">$2</div>",
                ),
                detail: "Text",
                kind: vscode.CompletionItemKind.Snippet,
            },
            {
                label: "text:left",
                insertText: new vscode.SnippetString(
                    "<div class=\"slds-text-align_left\">$1</div>",
                ),
                detail: "Text Left",
                kind: vscode.CompletionItemKind.Snippet,
            },
            {
                label: "text:center",
                insertText: new vscode.SnippetString(
                    "<div class=\"slds-text-align_center\">$1</div>",
                ),
                detail: "Text Center",
                kind: vscode.CompletionItemKind.Snippet,
            },
            {
                label: "text:right",
                insertText: new vscode.SnippetString(
                    "<div class=\"slds-text-align_right\">$1</div>",
                ),
                detail: "Text Right",
                kind: vscode.CompletionItemKind.Snippet,
            },
        ];
    }

    function advancedHtmlSnippets() {
        return [
            {
                label: "grid:gutters",
                insertText: new vscode.SnippetString(
                    "<div class=\"slds-grid slds-gutters\">\n\t$1\n</div>",
                ),
                detail: "Grid Gutters",
                kind: vscode.CompletionItemKind.Snippet,
            },
            {
                label: "grid:wrap",
                insertText: new vscode.SnippetString(
                    "<div class=\"slds-grid slds-wrap\">\n\t$1\n</div>",
                ),
                detail: "Grid Wrap",
                kind: vscode.CompletionItemKind.Snippet,
            },
            {
                label: "grid:vertical",
                insertText: new vscode.SnippetString(
                    "<div class=\"slds-grid slds-grid_vertical\">\n\t$1\n</div>",
                ),
                detail: "Grid Vertical",
                kind: vscode.CompletionItemKind.Snippet,
            },
            {
                label: "grid:centered",
                insertText: new vscode.SnippetString(
                    "<div class=\"slds-grid slds-grid_align-center\">\n\t$1\n</div>",
                ),
                detail: "Grid centered",
                kind: vscode.CompletionItemKind.Snippet,
            },
            {
                label: "grid:spaced",
                insertText: new vscode.SnippetString(
                    "<div class=\"slds-grid slds-grid_align-space\">\n\t$1\n</div>",
                ),
                detail: "Grid evenly spaced",
                kind: vscode.CompletionItemKind.Snippet,
            },
            {
                label: "grid:spread",
                insertText: new vscode.SnippetString(
                    "<div class=\"slds-grid slds-grid_align-spread\">\n\t$1\n</div>",
                ),
                detail: "Grid evenly spread",
                kind: vscode.CompletionItemKind.Snippet,
            },
            {
                label: "grid:right",
                insertText: new vscode.SnippetString(
                    "<div class=\"slds-grid slds-grid_align-end\">\n\t$1\n</div>",
                ),
                detail: "Grid Right",
                kind: vscode.CompletionItemKind.Snippet,
            },
            {
                label: "grid:vertical_top",
                insertText: new vscode.SnippetString(
                    "<div class=\"slds-grid slds-grid_vertical-align-start\">\n\t$1\n</div>",
                ),
                detail: "Vertical Top",
                kind: vscode.CompletionItemKind.Snippet,
            },
            {
                label: "grid:vertical_center",
                insertText: new vscode.SnippetString(
                    "<div class=\"slds-grid slds-grid_vertical-align-center\">\n\t$1\n</div>",
                ),
                detail: "Vertical Center",
                kind: vscode.CompletionItemKind.Snippet,
            },
            {
                label: "grid:vertical_bottom",
                insertText: new vscode.SnippetString(
                    "<div class=\"slds-grid slds-grid_vertical-align-end\">\n\t$1\n</div>",
                ),
                detail: "Vertical Bottom",
                kind: vscode.CompletionItemKind.Snippet,
            },
            {
                label: "heading:large",
                insertText: new vscode.SnippetString(
                    "<div class=\"slds-text-heading_large\">$1</div>",
                ),
                detail: "Large Heading",
                kind: vscode.CompletionItemKind.Snippet,
            },
            {
                label: "heading:medium",
                insertText: new vscode.SnippetString(
                    "<div class=\"slds-text-heading_medium\">$1</div>",
                ),
                detail: "Medium Heading",
                kind: vscode.CompletionItemKind.Snippet,
            },
            {
                label: "heading:small",
                insertText: new vscode.SnippetString(
                    "<div class=\"slds-text-heading_small\">$1</div>",
                ),
                detail: "Small Heading",
                kind: vscode.CompletionItemKind.Snippet,
            },
            {
                label: "textColor:default",
                insertText: new vscode.SnippetString(
                    "<div class=\"slds-text-color_default\">$1</div>",
                ),
                detail: "Default Text Color",
                kind: vscode.CompletionItemKind.Snippet,
            },
            {
                label: "textColor:green",
                insertText: new vscode.SnippetString(
                    "<div class=\"slds-text-color_success\">$1</div>",
                ),
                detail: "Green Text Color",
                kind: vscode.CompletionItemKind.Snippet,
            },
            {
                label: "textColor:weak",
                insertText: new vscode.SnippetString(
                    "<div class=\"slds-text-color_weak\">$1</div>",
                ),
                detail: "Weak Text Color",
                kind: vscode.CompletionItemKind.Snippet,
            },
            {
                label: "textColor:red",
                insertText: new vscode.SnippetString(
                    "<div class=\"slds-text-color_error\">$1</div>",
                ),
                detail: "Red Text Color",
                kind: vscode.CompletionItemKind.Snippet,
            },
            {
                label: "textColor:inverse",
                insertText: new vscode.SnippetString(
                    "<div class=\"slds-text-color_inverse\">$1</div>",
                ),
                detail: "Inverse Text Color",
                kind: vscode.CompletionItemKind.Snippet,
            },
            {
                label: "textColor:inverse-weak",
                insertText: new vscode.SnippetString(
                    "<div class=\"slds-text-color_inverse-weak\">$1</div>",
                ),
                detail: "Inverse Weak Text Color",
                kind: vscode.CompletionItemKind.Snippet,
            },
            {
                label: "assistive-text",
                insertText: new vscode.SnippetString(
                    "slds-assistive-text",
                ),
                detail: "Hides an element yet enables a screen reader to read the element that is hidden",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "show_inline-block",
                insertText: new vscode.SnippetString(
                    "slds-show_inline-block",
                ),
                detail: "Shows the element by setting display to inline-block",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "show_inline",
                insertText: new vscode.SnippetString(
                    "slds-show_inline",
                ),
                detail: "Shows the element by setting display to inline",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "transition-hide",
                insertText: new vscode.SnippetString(
                    "transition-hide",
                ),
                detail: "Hides an element from the page by setting the opacity property set to 0",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "transition-show",
                insertText: new vscode.SnippetString(
                    "transition-show",
                ),
                detail: "Shows the element using the opacity property set to 1",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "hide_x-small",
                insertText: new vscode.SnippetString(
                    "slds-hide_x-small",
                ),
                detail: "Hides content above 320px screen",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "hide_small",
                insertText: new vscode.SnippetString(
                    "slds-hide_small",
                ),
                detail: "Hides content above 480px screen",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "hide_medium",
                insertText: new vscode.SnippetString(
                    "slds-hide_medium",
                ),
                detail: "Hides content above 768px screen",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "hide_large",
                insertText: new vscode.SnippetString(
                    "slds-hide_large",
                ),
                detail: "Hides content above 1024px screen",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "hide_x-large",
                insertText: new vscode.SnippetString(
                    "slds-hide_x-large",
                ),
                detail: "Hides content above 1280px screen",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "show_x-small",
                insertText: new vscode.SnippetString(
                    "slds-show_x-small",
                ),
                detail: "Shows content above 320px screen",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "show_small",
                insertText: new vscode.SnippetString(
                    "slds-show_small",
                ),
                detail: "Shows content above 480px screen, hides for below",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "show_medium",
                insertText: new vscode.SnippetString(
                    "slds-show_medium",
                ),
                detail: "Shows content above 768px screen, hides for below",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "show_large",
                insertText: new vscode.SnippetString(
                    "slds-show_large",
                ),
                detail: "Shows content above 1024px screen, hides for below",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "show_x-large",
                insertText: new vscode.SnippetString(
                    "slds-show_x-large",
                ),
                detail: "Shows content above 1280px screen, hides for below",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "bottom-magnet",
                insertText: new vscode.SnippetString(
                    "slds-has-bottom-magnet",
                ),
                detail: "Assumes element below is connected",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "top-magnet",
                insertText: new vscode.SnippetString(
                    "slds-has-top-magnet",
                ),
                detail: "Assumes element above is connected",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin-vd:around_xxx-small",
                insertText: new vscode.SnippetString(
                    "slds-var-m-around_xxx-small",
                ),
                detail: "Adds margin of 0.125rem in Comfy view and 0.125rem in Compact view",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin-vd:around_xx-small",
                insertText: new vscode.SnippetString(
                    "slds-var-m-around_xx-small",
                ),
                detail: "Adds margin of 0.25rem in Comfy view and 0.125rem in Compact view",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin-vd:around_x-small",
                insertText: new vscode.SnippetString(
                    "slds-var-m-around_x-small",
                ),
                detail: "Adds margin of 0.5rem in Comfy view and 0.125rem in Compact view",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin-vd:around_small",
                insertText: new vscode.SnippetString(
                    "slds-var-m-around_small",
                ),
                detail: "Adds margin of 0.75rem in Comfy view and 0.25rem in Compact view",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin-vd:around_medium",
                insertText: new vscode.SnippetString(
                    "slds-var-m-around_medium",
                ),
                detail: "Adds margin of 1rem in Comfy view and 0.5rem in Compact view",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin-vd:around_large",
                insertText: new vscode.SnippetString(
                    "slds-var-m-around_large",
                ),
                detail: "Adds margin of 1.5rem in Comfy view and 0.75rem in Compact view",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin-vd:around_x-large",
                insertText: new vscode.SnippetString(
                    "slds-var-m-around_x-large",
                ),
                detail: "Adds margin of 2rem in Comfy view and 1rem in Compact view",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin-vd:around_xx-large",
                insertText: new vscode.SnippetString(
                    "slds-var-m-around_xx-large",
                ),
                detail: "Adds margin of 3rem in Comfy view and 1.5rem in Compact view",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin-vd:top_xxx-small",
                insertText: new vscode.SnippetString(
                    "slds-var-m-top_xxx-small",
                ),
                detail: "Adds margin of 0.125rem in Comfy view and 0.125rem in Compact view",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin-vd:top_xx-small",
                insertText: new vscode.SnippetString(
                    "slds-var-m-top_xx-small",
                ),
                detail: "Adds margin of 0.25rem in Comfy view and 0.125rem in Compact view",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin-vd:top_x-small",
                insertText: new vscode.SnippetString(
                    "slds-var-m-top_x-small",
                ),
                detail: "Adds margin of 0.5rem in Comfy view and 0.125rem in Compact view",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin-vd:top_small",
                insertText: new vscode.SnippetString(
                    "slds-var-m-top_small",
                ),
                detail: "Adds margin of 0.75rem in Comfy view and 0.25rem in Compact view",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin-vd:top_medium",
                insertText: new vscode.SnippetString(
                    "slds-var-m-top_medium",
                ),
                detail: "Adds margin of 1rem in Comfy view and 0.5rem in Compact view",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin-vd:top_large",
                insertText: new vscode.SnippetString(
                    "slds-var-m-top_large",
                ),
                detail: "Adds margin of 1.5rem in Comfy view and 0.75rem in Compact view",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin-vd:top_x-large",
                insertText: new vscode.SnippetString(
                    "slds-var-m-top_x-large",
                ),
                detail: "Adds margin of 2rem in Comfy view and 1rem in Compact view",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin-vd:top_xx-large",
                insertText: new vscode.SnippetString(
                    "slds-var-m-top_xx-large",
                ),
                detail: "Adds margin of 3rem in Comfy view and 1.5rem in Compact view",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin-vd:left_xxx-small",
                insertText: new vscode.SnippetString(
                    "slds-var-m-left_xxx-small",
                ),
                detail: "Adds margin of 0.125rem in Comfy view and 0.125rem in Compact view",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin-vd:left_xx-small",
                insertText: new vscode.SnippetString(
                    "slds-var-m-left_xx-small",
                ),
                detail: "Adds margin of 0.25rem in Comfy view and 0.125rem in Compact view",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin-vd:left_x-small",
                insertText: new vscode.SnippetString(
                    "slds-var-m-left_x-small",
                ),
                detail: "Adds margin of 0.5rem in Comfy view and 0.125rem in Compact view",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin-vd:left_small",
                insertText: new vscode.SnippetString(
                    "slds-var-m-left_small",
                ),
                detail: "Adds margin of 0.75rem in Comfy view and 0.25rem in Compact view",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin-vd:left_medium",
                insertText: new vscode.SnippetString(
                    "slds-var-m-left_medium",
                ),
                detail: "Adds margin of 1rem in Comfy view and 0.5rem in Compact view",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin-vd:left_large",
                insertText: new vscode.SnippetString(
                    "slds-var-m-left_large",
                ),
                detail: "Adds margin of 1.5rem in Comfy view and 0.75rem in Compact view",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin-vd:left_x-large",
                insertText: new vscode.SnippetString(
                    "slds-var-m-left_x-large",
                ),
                detail: "Adds margin of 2rem in Comfy view and 1rem in Compact view",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin-vd:left_xx-large",
                insertText: new vscode.SnippetString(
                    "slds-var-m-left_xx-large",
                ),
                detail: "Adds margin of 3rem in Comfy view and 1.5rem in Compact view",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin-vd:right_xxx-small",
                insertText: new vscode.SnippetString(
                    "slds-var-m-right_xxx-small",
                ),
                detail: "Adds margin of 0.125rem in Comfy view and 0.125rem in Compact view",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin-vd:right_xx-small",
                insertText: new vscode.SnippetString(
                    "slds-var-m-right_xx-small",
                ),
                detail: "Adds margin of 0.25rem in Comfy view and 0.125rem in Compact view",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin-vd:right_x-small",
                insertText: new vscode.SnippetString(
                    "slds-var-m-right_x-small",
                ),
                detail: "Adds margin of 0.5rem in Comfy view and 0.125rem in Compact view",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin-vd:right_small",
                insertText: new vscode.SnippetString(
                    "slds-var-m-right_small",
                ),
                detail: "Adds margin of 0.75rem in Comfy view and 0.25rem in Compact view",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin-vd:right_medium",
                insertText: new vscode.SnippetString(
                    "slds-var-m-right_medium",
                ),
                detail: "Adds margin of 1rem in Comfy view and 0.5rem in Compact view",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin-vd:right_large",
                insertText: new vscode.SnippetString(
                    "slds-var-m-right_large",
                ),
                detail: "Adds margin of 1.5rem in Comfy view and 0.75rem in Compact view",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin-vd:right_x-large",
                insertText: new vscode.SnippetString(
                    "slds-var-m-right_x-large",
                ),
                detail: "Adds margin of 2rem in Comfy view and 1rem in Compact view",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin-vd:right_xx-large",
                insertText: new vscode.SnippetString(
                    "slds-var-m-right_xx-large",
                ),
                detail: "Adds margin of 3rem in Comfy view and 1.5rem in Compact view",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin-vd:bottom_xxx-small",
                insertText: new vscode.SnippetString(
                    "slds-var-m-bottom_xxx-small",
                ),
                detail: "Adds margin of 0.125rem in Comfy view and 0.125rem in Compact view",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin-vd:bottom_xx-small",
                insertText: new vscode.SnippetString(
                    "slds-var-m-bottom_xx-small",
                ),
                detail: "Adds margin of 0.25rem in Comfy view and 0.125rem in Compact view",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin-vd:bottom_x-small",
                insertText: new vscode.SnippetString(
                    "slds-var-m-bottom_x-small",
                ),
                detail: "Adds margin of 0.5rem in Comfy view and 0.125rem in Compact view",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin-vd:bottom_small",
                insertText: new vscode.SnippetString(
                    "slds-var-m-bottom_small",
                ),
                detail: "Adds margin of 0.75rem in Comfy view and 0.25rem in Compact view",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin-vd:bottom_medium",
                insertText: new vscode.SnippetString(
                    "slds-var-m-bottom_medium",
                ),
                detail: "Adds margin of 1rem in Comfy view and 0.5rem in Compact view",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin-vd:bottom_large",
                insertText: new vscode.SnippetString(
                    "slds-var-m-bottom_large",
                ),
                detail: "Adds margin of 1.5rem in Comfy view and 0.75rem in Compact view",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin-vd:bottom_x-large",
                insertText: new vscode.SnippetString(
                    "slds-var-m-bottom_x-large",
                ),
                detail: "Adds margin of 2rem in Comfy view and 1rem in Compact view",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin-vd:bottom_xx-large",
                insertText: new vscode.SnippetString(
                    "slds-var-m-bottom_xx-large",
                ),
                detail: "Adds margin of 3rem in Comfy view and 1.5rem in Compact view",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding-vd:around_xxx-small",
                insertText: new vscode.SnippetString(
                    "slds-var-p-around_xxx-small",
                ),
                detail: "Adds padding of 0.125rem in Comfy view and 0.125rem in Compact view",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding-vd:around_xx-small",
                insertText: new vscode.SnippetString(
                    "slds-var-p-around_xx-small",
                ),
                detail: "Adds padding of 0.25rem in Comfy view and 0.125rem in Compact view",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding-vd:around_x-small",
                insertText: new vscode.SnippetString(
                    "slds-var-p-around_x-small",
                ),
                detail: "Adds padding of 0.5rem in Comfy view and 0.125rem in Compact view",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding-vd:around_small",
                insertText: new vscode.SnippetString(
                    "slds-var-p-around_small",
                ),
                detail: "Adds padding of 0.75rem in Comfy view and 0.25rem in Compact view",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding-vd:around_medium",
                insertText: new vscode.SnippetString(
                    "slds-var-p-around_medium",
                ),
                detail: "Adds padding of 1rem in Comfy view and 0.5rem in Compact view",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding-vd:around_large",
                insertText: new vscode.SnippetString(
                    "slds-var-p-around_large",
                ),
                detail: "Adds padding of 1.5rem in Comfy view and 0.75rem in Compact view",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding-vd:around_x-large",
                insertText: new vscode.SnippetString(
                    "slds-var-p-around_x-large",
                ),
                detail: "Adds padding of 2rem in Comfy view and 1rem in Compact view",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding-vd:around_xx-large",
                insertText: new vscode.SnippetString(
                    "slds-var-p-around_xx-large",
                ),
                detail: "Adds padding of 3rem in Comfy view and 1.5rem in Compact view",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding-vd:top_xxx-small",
                insertText: new vscode.SnippetString(
                    "slds-var-p-top_xxx-small",
                ),
                detail: "Adds padding of 0.125rem in Comfy view and 0.125rem in Compact view",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding-vd:top_xx-small",
                insertText: new vscode.SnippetString(
                    "slds-var-p-top_xx-small",
                ),
                detail: "Adds padding of 0.25rem in Comfy view and 0.125rem in Compact view",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding-vd:top_x-small",
                insertText: new vscode.SnippetString(
                    "slds-var-p-top_x-small",
                ),
                detail: "Adds padding of 0.5rem in Comfy view and 0.125rem in Compact view",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding-vd:top_small",
                insertText: new vscode.SnippetString(
                    "slds-var-p-top_small",
                ),
                detail: "Adds padding of 0.75rem in Comfy view and 0.25rem in Compact view",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding-vd:top_medium",
                insertText: new vscode.SnippetString(
                    "slds-var-p-top_medium",
                ),
                detail: "Adds padding of 1rem in Comfy view and 0.5rem in Compact view",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding-vd:top_large",
                insertText: new vscode.SnippetString(
                    "slds-var-p-top_large",
                ),
                detail: "Adds padding of 1.5rem in Comfy view and 0.75rem in Compact view",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding-vd:top_x-large",
                insertText: new vscode.SnippetString(
                    "slds-var-p-top_x-large",
                ),
                detail: "Adds padding of 2rem in Comfy view and 1rem in Compact view",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding-vd:top_xx-large",
                insertText: new vscode.SnippetString(
                    "slds-var-p-top_xx-large",
                ),
                detail: "Adds padding of 3rem in Comfy view and 1.5rem in Compact view",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding-vd:left_xxx-small",
                insertText: new vscode.SnippetString(
                    "slds-var-p-left_xxx-small",
                ),
                detail: "Adds padding of 0.125rem in Comfy view and 0.125rem in Compact view",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding-vd:left_xx-small",
                insertText: new vscode.SnippetString(
                    "slds-var-p-left_xx-small",
                ),
                detail: "Adds padding of 0.25rem in Comfy view and 0.125rem in Compact view",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding-vd:left_x-small",
                insertText: new vscode.SnippetString(
                    "slds-var-p-left_x-small",
                ),
                detail: "Adds padding of 0.5rem in Comfy view and 0.125rem in Compact view",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding-vd:left_small",
                insertText: new vscode.SnippetString(
                    "slds-var-p-left_small",
                ),
                detail: "Adds padding of 0.75rem in Comfy view and 0.25rem in Compact view",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding-vd:left_medium",
                insertText: new vscode.SnippetString(
                    "slds-var-p-left_medium",
                ),
                detail: "Adds padding of 1rem in Comfy view and 0.5rem in Compact view",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding-vd:left_large",
                insertText: new vscode.SnippetString(
                    "slds-var-p-left_large",
                ),
                detail: "Adds padding of 1.5rem in Comfy view and 0.75rem in Compact view",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding-vd:left_x-large",
                insertText: new vscode.SnippetString(
                    "slds-var-p-left_x-large",
                ),
                detail: "Adds padding of 2rem in Comfy view and 1rem in Compact view",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding-vd:left_xx-large",
                insertText: new vscode.SnippetString(
                    "slds-var-p-left_xx-large",
                ),
                detail: "Adds padding of 3rem in Comfy view and 1.5rem in Compact view",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding-vd:right_xxx-small",
                insertText: new vscode.SnippetString(
                    "slds-var-p-right_xxx-small",
                ),
                detail: "Adds padding of 0.125rem in Comfy view and 0.125rem in Compact view",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding-vd:right_xx-small",
                insertText: new vscode.SnippetString(
                    "slds-var-p-right_xx-small",
                ),
                detail: "Adds padding of 0.25rem in Comfy view and 0.125rem in Compact view",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding-vd:right_x-small",
                insertText: new vscode.SnippetString(
                    "slds-var-p-right_x-small",
                ),
                detail: "Adds padding of 0.5rem in Comfy view and 0.125rem in Compact view",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding-vd:right_small",
                insertText: new vscode.SnippetString(
                    "slds-var-p-right_small",
                ),
                detail: "Adds padding of 0.75rem in Comfy view and 0.25rem in Compact view",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding-vd:right_medium",
                insertText: new vscode.SnippetString(
                    "slds-var-p-right_medium",
                ),
                detail: "Adds padding of 1rem in Comfy view and 0.5rem in Compact view",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding-vd:right_large",
                insertText: new vscode.SnippetString(
                    "slds-var-p-right_large",
                ),
                detail: "Adds padding of 1.5rem in Comfy view and 0.75rem in Compact view",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding-vd:right_x-large",
                insertText: new vscode.SnippetString(
                    "slds-var-p-right_x-large",
                ),
                detail: "Adds padding of 2rem in Comfy view and 1rem in Compact view",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding-vd:right_xx-large",
                insertText: new vscode.SnippetString(
                    "slds-var-p-right_xx-large",
                ),
                detail: "Adds padding of 3rem in Comfy view and 1.5rem in Compact view",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding-vd:bottom_xxx-small",
                insertText: new vscode.SnippetString(
                    "slds-var-p-bottom_xxx-small",
                ),
                detail: "Adds padding of 0.125rem in Comfy view and 0.125rem in Compact view",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding-vd:bottom_xx-small",
                insertText: new vscode.SnippetString(
                    "slds-var-p-bottom_xx-small",
                ),
                detail: "Adds padding of 0.25rem in Comfy view and 0.125rem in Compact view",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding-vd:bottom_x-small",
                insertText: new vscode.SnippetString(
                    "slds-var-p-bottom_x-small",
                ),
                detail: "Adds padding of 0.5rem in Comfy view and 0.125rem in Compact view",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding-vd:bottom_small",
                insertText: new vscode.SnippetString(
                    "slds-var-p-bottom_small",
                ),
                detail: "Adds padding of 0.75rem in Comfy view and 0.25rem in Compact view",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding-vd:bottom_medium",
                insertText: new vscode.SnippetString(
                    "slds-var-p-bottom_medium",
                ),
                detail: "Adds padding of 1rem in Comfy view and 0.5rem in Compact view",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding-vd:bottom_large",
                insertText: new vscode.SnippetString(
                    "slds-var-p-bottom_large",
                ),
                detail: "Adds padding of 1.5rem in Comfy view and 0.75rem in Compact view",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding-vd:bottom_x-large",
                insertText: new vscode.SnippetString(
                    "slds-var-p-bottom_x-large",
                ),
                detail: "Adds padding of 2rem in Comfy view and 1rem in Compact view",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding-vd:bottom_xx-large",
                insertText: new vscode.SnippetString(
                    "slds-var-p-bottom_xx-large",
                ),
                detail: "Adds padding of 3rem in Comfy view and 1.5rem in Compact view",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "slds-scrollable:auto",
                insertText: new vscode.SnippetString(
                    "slds-scrollable",
                ),
                detail: "Forces element to scroll horizontally and vertically when content exceeds element's width and height",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "slds-scrollable:none",
                insertText: new vscode.SnippetString(
                    "slds-scrollable_none",
                ),
                detail: "Forces overflow items to not scroll within element's width and height",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "slds-scrollable:yAxis",
                insertText: new vscode.SnippetString(
                    "slds-scrollable_y",
                ),
                detail: "Forces element to scroll vertically when content exceeds element's height",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "slds-scrollable:xAxis",
                insertText: new vscode.SnippetString(
                    "slds-scrollable_x",
                ),
                detail: "Forces element to scroll vertically when content exceeds element's width",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "slds-truncate:25%",
                insertText: new vscode.SnippetString(
                    "slds-truncate_container_25",
                ),
                detail: "Truncates text at 25% of its parent container",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "slds-truncate:33%",
                insertText: new vscode.SnippetString(
                    "slds-truncate_container_33",
                ),
                detail: "Truncates text at 33% of its parent container",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "slds-truncate:50%",
                insertText: new vscode.SnippetString(
                    "slds-truncate_container_50",
                ),
                detail: "Truncates text at 50% of its parent container",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "slds-truncate:66%",
                insertText: new vscode.SnippetString(
                    "slds-truncate_container_66",
                ),
                detail: "Truncates text at 66% of its parent container",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "slds-truncate:75%",
                insertText: new vscode.SnippetString(
                    "slds-truncate_container_75",
                ),
                detail: "Truncates text at 75% of its parent container",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "card:narrow-lwc",
                insertText: new vscode.SnippetString(
                    "<lightning-card title=\"${1:title}\" variant=\"Narrow\">\n\t<p class=\"slds-p-horizontal_small\">\n\t\t${2:Card Body}\n\t</p>\n\t<p slot=\"footer\">\n\t\t${3:Card Footer}\n\t</p>\n</lightning-card>",
                ),
                detail: "LWC Narrow Card",
                kind: vscode.CompletionItemKind.Snippet,
            },
            {
                label: "card:narrow-aura",
                insertText: new vscode.SnippetString(
                    "<lightning:card variant=\"Narrow\">\n\t<aura:set attribute=\"title\">\n\t\t${1:Title}\n\t</aura:set>\n\t<aura:set attribute=\"footer\">\n\t\t${2:Footer}\n\t</aura:set>\n\t${3:Card Body}\n</lightning:card>",
                ),
                detail: "Aura Narrow Card",
                kind: vscode.CompletionItemKind.Snippet,
            },
            {
                label: "button:group-dropdown-lwc",
                insertText: new vscode.SnippetString(
                    "<lightning-button-group>\n\t<lightning-button variant=\"${1|base,default,brand,brand-outline,destructive,destructive-text,success|}\" label=\"${2:Label}\" onclick=\"{!c.${3:Function}}\" />\n\t<lightning-button variant=\"${4|base,default,brand,brand-outline,destructive,destructive-text,success|}\" label=\"${5:Label}\" onclick=\"{!c.${6:Function}}\" />\n\t<lightning-button variant=\"${7|base,default,brand,brand-outline,destructive,destructive-text,success|}\" label=\"${8:Label}\" onclick=\"{!c.${9:Function}}\" />\n\t<lightning-button-menu alternativeText=\"${10:Text}\" class=\"slds-button_last\" variant=\"border-filled\">\n\t\t<lightning-menu-item label=\"${11:Label}\" value=\"${12:Value}\" onclick=\"{!c.${13:Function}}\"></lightning-menu-item>\n\t\t<lightning-menu-item label=\"${14:Label}\" value=\"${15:Value}\" onclick=\"{!c.${16:Function}}\"></lightning-menu-item>\n\t\t<lightning-menu-item label=\"${17:Label}\" value=\"${18:Value}\" onclick=\"{!c.${19:Function}}\"></lightning-menu-item>\n\t</lightning-button-menu>\n</lightning-button-group>"
                ),
                detail: "Button Group Dropdown LWC",
                kind: vscode.CompletionItemKind.Snippet,
            },
            {
                label: "button:group-dropdown-aura",
                insertText: new vscode.SnippetString(
                    "<lightning:buttonGroup>\n\t<lightning:button variant=\"${1|base,default,brand,brand-outline,destructive,destructive-text,success|}\" label=\"${2:Label}\" onclick=\"{!c.${3:Function}}\" />\n\t<lightning:button variant=\"${4|base,default,brand,brand-outline,destructive,destructive-text,success|}\" label=\"${5:Label}\" onclick=\"{!c.${6:Function}}\" />\n\t<lightning:button variant=\"${7|base,default,brand,brand-outline,destructive,destructive-text,success|}\" label=\"${8:Label}\" onclick=\"{!c.${9:Function}}\" />\n\t<lightning:buttonMenu alternativeText=\"${10:Text}\" class=\"slds-button_last\">\n\t\t<lightning:menuItem label=\"${11:Label}\" value=\"${12:Value}\" onclick=\"{!c.${13:Function}}\" />\n\t\t<lightning:menuItem label=\"${14:Label}\" value=\"${15:Value}\" onclick=\"{!c.${16:Function}}\" />\n\t\t<lightning:menuItem label=\"${17:Label}\" value=\"${18:Value}\" onclick=\"{!c.${19:Function}}\" />\n\t</lightning:buttonMenu>\n</lightning:buttonGroup>"
                ),
                detail: "Button Group Aura Dropdown ",
                kind: vscode.CompletionItemKind.Snippet,
            },
        ];
    }

    function apexSnippets() {
        return [
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

    function jsSnippets() {
        return [
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
    }

    function sldsClasses() {
        return [
            {
                label: "align_absolute-center",
                insertText: new vscode.SnippetString(
                    "slds-align_absolute-center" ,
                ),
                detail: "Class will absolutely center children content",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "text-left",
                insertText: new vscode.SnippetString(
                    "slds-text-align_left",
                ),
                detail: "Text Left",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "text-center",
                insertText: new vscode.SnippetString(
                    "slds-text-align_center",
                ),
                detail: "Text Center",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "text-right",
                insertText: new vscode.SnippetString(
                    "slds-text-align_right",
                ),
                detail: "Text Right",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "border_bottom",
                insertText: new vscode.SnippetString(
                    "slds-border_bottom",
                ),
                detail: "Adds a bottom border to an element",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "border_left",
                insertText: new vscode.SnippetString(
                    "slds-border_left",
                ),
                detail: "Adds a left border to an element",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "border_right",
                insertText: new vscode.SnippetString(
                    "slds-border_right",
                ),
                detail: "Adds a right border to an element",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "border_top",
                insertText: new vscode.SnippetString(
                    "slds-border_top",
                ),
                detail: "Adds a top border to an element",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "box",
                insertText: new vscode.SnippetString(
                    "slds-box",
                ),
                detail: "Provides 1rem base padding and borders",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "box_x_small",
                insertText: new vscode.SnippetString(
                    "slds-box slds-box_x-small",
                ),
                detail: "Provides .5rem base padding and borders",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "box_xx_small",
                insertText: new vscode.SnippetString(
                    "slds-box slds-box_xx-small",
                ),
                detail: "Provides .25rem base padding and borders",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "box_shade",
                insertText: new vscode.SnippetString(
                    "slds-box slds-theme_shade",
                ),
                detail: "Sets the background color to gray",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "box_inverse",
                insertText: new vscode.SnippetString(
                    "slds-box slds-theme_inverse",
                ),
                detail: "Sets the background color to dark blue",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "box_alt-inverse",
                insertText: new vscode.SnippetString(
                    "slds-box slds-theme_alt-inverse",
                ),
                detail: "Sets the background color to darker blue",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "box_success",
                insertText: new vscode.SnippetString(
                    "slds-box slds-theme_success",
                ),
                detail: "Sets the background color to green",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "box_info",
                insertText: new vscode.SnippetString(
                    "slds-box slds-theme_info",
                ),
                detail: "Sets the background color to gray-ish blue",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "box_warning",
                insertText: new vscode.SnippetString(
                    "slds-box slds-theme_warning",
                ),
                detail: "Sets the background color to yellow",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "box_error",
                insertText: new vscode.SnippetString(
                    "slds-box slds-theme_error",
                ),
                detail: "Sets the background color to red",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "box_offline",
                insertText: new vscode.SnippetString(
                    "slds-box slds-theme_offline",
                ),
                detail: "Sets the background color to black",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "box_texture",
                insertText: new vscode.SnippetString(
                    "slds-box slds-theme_alert-texture",
                ),
                detail: "Adds striped background",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "float_left",
                insertText: new vscode.SnippetString(
                    "slds-float_left",
                ),
                detail: "Pulls element from document flow and floats left. Text and other elements wrap around it.",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "float_none",
                insertText: new vscode.SnippetString(
                    "slds-float_none",
                ),
                detail: "Removes float from an element that has attribute already",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "float_right",
                insertText: new vscode.SnippetString(
                    "slds-float_right",
                ),
                detail: "Pulls element from document flow and floats right. Text and other elements wrap around it.",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "hide",
                insertText: new vscode.SnippetString(
                    "slds-hide",
                ),
                detail: "Hides an element from the page by setting display propery to none",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "show",
                insertText: new vscode.SnippetString(
                    "slds-show",
                ),
                detail: "Shows the element by setting display property to block",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "hidden",
                insertText: new vscode.SnippetString(
                    "slds-hidden",
                ),
                detail: "Hides an element but reserve the space on the page",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "visible",
                insertText: new vscode.SnippetString(
                    "slds-visible",
                ),
                detail: "Shows an element which was hidden by slds-hidden",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin:around_none",
                insertText: new vscode.SnippetString(
                    "slds-m-around_none",
                ),
                detail: "Removes margin from all sides",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin:around_xxx-small",
                insertText: new vscode.SnippetString(
                    "slds-m-around_xxx-small",
                ),
                detail: "Adds .125rem margin to all sides",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin:around_xx-small",
                insertText: new vscode.SnippetString(
                    "slds-m-around_xx-small",
                ),
                detail: "Adds .25rem margin to all sides",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin:around_x-small",
                insertText: new vscode.SnippetString(
                    "slds-m-around_x-small",
                ),
                detail: "Adds .5rem margin to all sides",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin:around_small",
                insertText: new vscode.SnippetString(
                    "slds-m-around_small",
                ),
                detail: "Adds .75rem margin to all sides",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin:around_medium",
                insertText: new vscode.SnippetString(
                    "slds-m-around_medium",
                ),
                detail: "Adds 1rem margin to all sides",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin:around_large",
                insertText: new vscode.SnippetString(
                    "slds-m-around_large",
                ),
                detail: "Adds 1.5rem margin to all sides",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin:around_x-large",
                insertText: new vscode.SnippetString(
                    "slds-m-around_x-large",
                ),
                detail: "Adds 2rem margin to all sides",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin:around_xx-large",
                insertText: new vscode.SnippetString(
                    "slds-m-around_xx-large",
                ),
                detail: "Adds 3rem margin to all sides",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin:top_none",
                insertText: new vscode.SnippetString(
                    "slds-m-top_none",
                ),
                detail: "Removes margin from top",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin:top_xxx-small",
                insertText: new vscode.SnippetString(
                    "slds-m-top_xxx-small",
                ),
                detail: "Adds .125rem margin to top",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin:top_xx-small",
                insertText: new vscode.SnippetString(
                    "slds-m-top_xx-small",
                ),
                detail: "Adds .25rem margin to top",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin:top_x-small",
                insertText: new vscode.SnippetString(
                    "slds-m-top_x-small",
                ),
                detail: "Adds .5rem margin to top",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin:top_small",
                insertText: new vscode.SnippetString(
                    "slds-m-top_small",
                ),
                detail: "Adds .75rem margin to top",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin:top_medium",
                insertText: new vscode.SnippetString(
                    "slds-m-top_medium",
                ),
                detail: "Adds 1rem margin to top",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin:top_large",
                insertText: new vscode.SnippetString(
                    "slds-m-top_large",
                ),
                detail: "Adds 1.5rem margin to top",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin:top_x-large",
                insertText: new vscode.SnippetString(
                    "slds-m-top_x-large",
                ),
                detail: "Adds 2rem margin to top",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin:top_xx-large",
                insertText: new vscode.SnippetString(
                    "slds-m-top_xx-large",
                ),
                detail: "Adds 3rem margin to top",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin:left_none",
                insertText: new vscode.SnippetString(
                    "slds-m-left_none",
                ),
                detail: "Removes margin from left",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin:left_xxx-small",
                insertText: new vscode.SnippetString(
                    "slds-m-left_xxx-small",
                ),
                detail: "Adds .125rem margin to left",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin:left_xx-small",
                insertText: new vscode.SnippetString(
                    "slds-m-left_xx-small",
                ),
                detail: "Adds .25rem margin to left",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin:left_x-small",
                insertText: new vscode.SnippetString(
                    "slds-m-left_x-small",
                ),
                detail: "Adds .5rem margin to left",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin:left_small",
                insertText: new vscode.SnippetString(
                    "slds-m-left_small",
                ),
                detail: "Adds .75rem margin to left",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin:left_medium",
                insertText: new vscode.SnippetString(
                    "slds-m-left_medium",
                ),
                detail: "Adds 1rem margin to left",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin:left_large",
                insertText: new vscode.SnippetString(
                    "slds-m-left_large",
                ),
                detail: "Adds 1.5rem margin to left",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin:left_x-large",
                insertText: new vscode.SnippetString(
                    "slds-m-left_x-large",
                ),
                detail: "Adds 2rem margin to left",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin:left_xx-large",
                insertText: new vscode.SnippetString(
                    "slds-m-left_xx-large",
                ),
                detail: "Adds 3rem margin to left",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin:right_none",
                insertText: new vscode.SnippetString(
                    "slds-m-right_none",
                ),
                detail: "Removes margin from right",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin:right_xxx-small",
                insertText: new vscode.SnippetString(
                    "slds-m-right_xxx-small",
                ),
                detail: "Adds .125rem margin to right",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin:right_xx-small",
                insertText: new vscode.SnippetString(
                    "slds-m-right_xx-small",
                ),
                detail: "Adds .25rem margin to right",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin:right_x-small",
                insertText: new vscode.SnippetString(
                    "slds-m-right_x-small",
                ),
                detail: "Adds .5rem margin to right",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin:right_small",
                insertText: new vscode.SnippetString(
                    "slds-m-right_small",
                ),
                detail: "Adds .75rem margin to right",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin:right_medium",
                insertText: new vscode.SnippetString(
                    "slds-m-right_medium",
                ),
                detail: "Adds 1rem margin to right",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin:right_large",
                insertText: new vscode.SnippetString(
                    "slds-m-right_large",
                ),
                detail: "Adds 1.5rem margin to right",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin:right_x-large",
                insertText: new vscode.SnippetString(
                    "slds-m-right_x-large",
                ),
                detail: "Adds 2rem margin to right",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin:right_xx-large",
                insertText: new vscode.SnippetString(
                    "slds-m-right_xx-large",
                ),
                detail: "Adds 3rem margin to right",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin:bottom_none",
                insertText: new vscode.SnippetString(
                    "slds-m-bottom_none",
                ),
                detail: "Removes margin from bottom",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin:bottom_xxx-small",
                insertText: new vscode.SnippetString(
                    "slds-m-bottom_xxx-small",
                ),
                detail: "Adds .125rem margin to bottom",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin:bottom_xx-small",
                insertText: new vscode.SnippetString(
                    "slds-m-bottom_xx-small",
                ),
                detail: "Adds .25rem margin to bottom",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin:bottom_x-small",
                insertText: new vscode.SnippetString(
                    "slds-m-bottom_x-small",
                ),
                detail: "Adds .5rem margin to bottom",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin:bottom_small",
                insertText: new vscode.SnippetString(
                    "slds-m-bottom_small",
                ),
                detail: "Adds .75rem margin to bottom",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin:bottom_medium",
                insertText: new vscode.SnippetString(
                    "slds-m-bottom_medium",
                ),
                detail: "Adds 1rem margin to bottom",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin:bottom_large",
                insertText: new vscode.SnippetString(
                    "slds-m-bottom_large",
                ),
                detail: "Adds 1.5rem margin to bottom",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin:bottom_x-large",
                insertText: new vscode.SnippetString(
                    "slds-m-bottom_x-large",
                ),
                detail: "Adds 2rem margin to bottom",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin:bottom_xx-large",
                insertText: new vscode.SnippetString(
                    "slds-m-bottom_xx-large",
                ),
                detail: "Adds 3rem margin to bottom",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin:vertical_none",
                insertText: new vscode.SnippetString(
                    "slds-m-vertical_none",
                ),
                detail: "Removes margin from top and bottom",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin:vertical_xxx-small",
                insertText: new vscode.SnippetString(
                    "slds-m-vertical_xxx-small",
                ),
                detail: "Adds .125rem margin to top and bottom",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin:vertical_xx-small",
                insertText: new vscode.SnippetString(
                    "slds-m-vertical_xx-small",
                ),
                detail: "Adds .25rem margin to top and bottom",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin:vertical_x-small",
                insertText: new vscode.SnippetString(
                    "slds-m-vertical_x-small",
                ),
                detail: "Adds .5rem margin to top and bottom",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin:vertical_small",
                insertText: new vscode.SnippetString(
                    "slds-m-vertical_small",
                ),
                detail: "Adds .75rem margin to top and bottom",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin:vertical_medium",
                insertText: new vscode.SnippetString(
                    "slds-m-vertical_medium",
                ),
                detail: "Adds 1rem margin to top and bottom",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin:vertical_large",
                insertText: new vscode.SnippetString(
                    "slds-m-vertical_large",
                ),
                detail: "Adds 1.5rem margin to top and bottom",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin:vertical_x-large",
                insertText: new vscode.SnippetString(
                    "slds-m-vertical_x-large",
                ),
                detail: "Adds 2rem margin to top and bottom",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin:vertical_xx-large",
                insertText: new vscode.SnippetString(
                    "slds-m-vertical_xx-large",
                ),
                detail: "Adds 3rem margin to top and bottom",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin:horizontal_none",
                insertText: new vscode.SnippetString(
                    "slds-m-horizontal_none",
                ),
                detail: "Removes margin from left and right",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin:horizontal_xxx-small",
                insertText: new vscode.SnippetString(
                    "slds-m-horizontal_xxx-small",
                ),
                detail: "Adds .125rem margin to left and right",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin:horizontal_xx-small",
                insertText: new vscode.SnippetString(
                    "slds-m-horizontal_xx-small",
                ),
                detail: "Adds .25rem margin to left and right",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin:horizontal_x-small",
                insertText: new vscode.SnippetString(
                    "slds-m-horizontal_x-small",
                ),
                detail: "Adds .5rem margin to left and right",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin:horizontal_small",
                insertText: new vscode.SnippetString(
                    "slds-m-horizontal_small",
                ),
                detail: "Adds .75rem margin to left and right",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin:horizontal_medium",
                insertText: new vscode.SnippetString(
                    "slds-m-horizontal_medium",
                ),
                detail: "Adds 1rem margin to left and right",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin:horizontal_large",
                insertText: new vscode.SnippetString(
                    "slds-m-horizontal_large",
                ),
                detail: "Adds 1.5rem margin to left and right",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin:horizontal_x-large",
                insertText: new vscode.SnippetString(
                    "slds-m-horizontal_x-large",
                ),
                detail: "Adds 2rem margin to left and right",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "margin:horizontal_xx-large",
                insertText: new vscode.SnippetString(
                    "slds-m-horizontal_xx-large",
                ),
                detail: "Adds 3rem margin to left and right",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding:around_none",
                insertText: new vscode.SnippetString(
                    "slds-p-around_none",
                ),
                detail: "Removes padding from all sides",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding:around_xxx-small",
                insertText: new vscode.SnippetString(
                    "slds-p-around_xxx-small",
                ),
                detail: "Adds .125rem padding to all sides",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding:around_xx-small",
                insertText: new vscode.SnippetString(
                    "slds-p-around_xx-small",
                ),
                detail: "Adds .25rem padding to all sides",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding:around_x-small",
                insertText: new vscode.SnippetString(
                    "slds-p-around_x-small",
                ),
                detail: "Adds .5rem padding to all sides",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding:around_small",
                insertText: new vscode.SnippetString(
                    "slds-p-around_small",
                ),
                detail: "Adds .75rem padding to all sides",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding:around_medium",
                insertText: new vscode.SnippetString(
                    "slds-p-around_medium",
                ),
                detail: "Adds 1rem padding to all sides",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding:around_large",
                insertText: new vscode.SnippetString(
                    "slds-p-around_large",
                ),
                detail: "Adds 1.5rem padding to all sides",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding:around_x-large",
                insertText: new vscode.SnippetString(
                    "slds-p-around_x-large",
                ),
                detail: "Adds 2rem padding to all sides",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding:around_xx-large",
                insertText: new vscode.SnippetString(
                    "slds-p-around_xx-large",
                ),
                detail: "Adds 3rem padding to all sides",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding:top_none",
                insertText: new vscode.SnippetString(
                    "slds-p-top_none",
                ),
                detail: "Removes padding from top",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding:top_xxx-small",
                insertText: new vscode.SnippetString(
                    "slds-p-top_xxx-small",
                ),
                detail: "Adds .125rem padding to top",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding:top_xx-small",
                insertText: new vscode.SnippetString(
                    "slds-p-top_xx-small",
                ),
                detail: "Adds .25rem padding to top",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding:top_x-small",
                insertText: new vscode.SnippetString(
                    "slds-p-top_x-small",
                ),
                detail: "Adds .5rem padding to top",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding:top_small",
                insertText: new vscode.SnippetString(
                    "slds-p-top_small",
                ),
                detail: "Adds .75rem padding to top",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding:top_medium",
                insertText: new vscode.SnippetString(
                    "slds-p-top_medium",
                ),
                detail: "Adds 1rem padding to top",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding:top_large",
                insertText: new vscode.SnippetString(
                    "slds-p-top_large",
                ),
                detail: "Adds 1.5rem padding to top",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding:top_x-large",
                insertText: new vscode.SnippetString(
                    "slds-p-top_x-large",
                ),
                detail: "Adds 2rem padding to top",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding:top_xx-large",
                insertText: new vscode.SnippetString(
                    "slds-p-top_xx-large",
                ),
                detail: "Adds 3rem padding to top",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding:left_none",
                insertText: new vscode.SnippetString(
                    "slds-p-left_none",
                ),
                detail: "Removes padding from left",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding:left_xxx-small",
                insertText: new vscode.SnippetString(
                    "slds-p-left_xxx-small",
                ),
                detail: "Adds .125rem padding to left",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding:left_xx-small",
                insertText: new vscode.SnippetString(
                    "slds-p-left_xx-small",
                ),
                detail: "Adds .25rem padding to left",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding:left_x-small",
                insertText: new vscode.SnippetString(
                    "slds-p-left_x-small",
                ),
                detail: "Adds .5rem padding to left",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding:left_small",
                insertText: new vscode.SnippetString(
                    "slds-p-left_small",
                ),
                detail: "Adds .75rem padding to left",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding:left_medium",
                insertText: new vscode.SnippetString(
                    "slds-p-left_medium",
                ),
                detail: "Adds 1rem padding to left",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding:left_large",
                insertText: new vscode.SnippetString(
                    "slds-p-left_large",
                ),
                detail: "Adds 1.5rem padding to left",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding:left_x-large",
                insertText: new vscode.SnippetString(
                    "slds-p-left_x-large",
                ),
                detail: "Adds 2rem padding to left",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding:left_xx-large",
                insertText: new vscode.SnippetString(
                    "slds-p-left_xx-large",
                ),
                detail: "Adds 3rem padding to left",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding:right_none",
                insertText: new vscode.SnippetString(
                    "slds-p-right_none",
                ),
                detail: "Removes padding from right",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding:right_xxx-small",
                insertText: new vscode.SnippetString(
                    "slds-p-right_xxx-small",
                ),
                detail: "Adds .125rem padding to right",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding:right_xx-small",
                insertText: new vscode.SnippetString(
                    "slds-p-right_xx-small",
                ),
                detail: "Adds .25rem padding to right",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding:right_x-small",
                insertText: new vscode.SnippetString(
                    "slds-p-right_x-small",
                ),
                detail: "Adds .5rem padding to right",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding:right_small",
                insertText: new vscode.SnippetString(
                    "slds-p-right_small",
                ),
                detail: "Adds .75rem padding to right",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding:right_medium",
                insertText: new vscode.SnippetString(
                    "slds-p-right_medium",
                ),
                detail: "Adds 1rem padding to right",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding:right_large",
                insertText: new vscode.SnippetString(
                    "slds-p-right_large",
                ),
                detail: "Adds 1.5rem padding to right",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding:right_x-large",
                insertText: new vscode.SnippetString(
                    "slds-p-right_x-large",
                ),
                detail: "Adds 2rem padding to right",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding:right_xx-large",
                insertText: new vscode.SnippetString(
                    "slds-p-right_xx-large",
                ),
                detail: "Adds 3rem padding to right",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding:bottom_none",
                insertText: new vscode.SnippetString(
                    "slds-p-bottom_none",
                ),
                detail: "Removes padding from bottom",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding:bottom_xxx-small",
                insertText: new vscode.SnippetString(
                    "slds-p-bottom_xxx-small",
                ),
                detail: "Adds .125rem padding to bottom",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding:bottom_xx-small",
                insertText: new vscode.SnippetString(
                    "slds-p-bottom_xx-small",
                ),
                detail: "Adds .25rem padding to bottom",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding:bottom_x-small",
                insertText: new vscode.SnippetString(
                    "slds-p-bottom_x-small",
                ),
                detail: "Adds .5rem padding to bottom",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding:bottom_small",
                insertText: new vscode.SnippetString(
                    "slds-p-bottom_small",
                ),
                detail: "Adds .75rem padding to bottom",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding:bottom_medium",
                insertText: new vscode.SnippetString(
                    "slds-p-bottom_medium",
                ),
                detail: "Adds 1rem padding to bottom",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding:bottom_large",
                insertText: new vscode.SnippetString(
                    "slds-p-bottom_large",
                ),
                detail: "Adds 1.5rem padding to bottom",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding:bottom_x-large",
                insertText: new vscode.SnippetString(
                    "slds-p-bottom_x-large",
                ),
                detail: "Adds 2rem padding to bottom",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding:bottom_xx-large",
                insertText: new vscode.SnippetString(
                    "slds-p-bottom_xx-large",
                ),
                detail: "Adds 3rem padding to bottom",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding:vertical_none",
                insertText: new vscode.SnippetString(
                    "slds-p-vertical_none",
                ),
                detail: "Removes padding from top and bottom",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding:vertical_xxx-small",
                insertText: new vscode.SnippetString(
                    "slds-p-vertical_xxx-small",
                ),
                detail: "Adds .125rem padding to top and bottom",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding:vertical_xx-small",
                insertText: new vscode.SnippetString(
                    "slds-p-vertical_xx-small",
                ),
                detail: "Adds .25rem padding to top and bottom",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding:vertical_x-small",
                insertText: new vscode.SnippetString(
                    "slds-p-vertical_x-small",
                ),
                detail: "Adds .5rem padding to top and bottom",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding:vertical_small",
                insertText: new vscode.SnippetString(
                    "slds-p-vertical_small",
                ),
                detail: "Adds .75rem padding to top and bottom",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding:vertical_medium",
                insertText: new vscode.SnippetString(
                    "slds-p-vertical_medium",
                ),
                detail: "Adds 1rem padding to top and bottom",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding:vertical_large",
                insertText: new vscode.SnippetString(
                    "slds-p-vertical_large",
                ),
                detail: "Adds 1.5rem padding to top and bottom",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding:vertical_x-large",
                insertText: new vscode.SnippetString(
                    "slds-p-vertical_x-large",
                ),
                detail: "Adds 2rem padding to top and bottom",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding:vertical_xx-large",
                insertText: new vscode.SnippetString(
                    "slds-p-vertical_xx-large",
                ),
                detail: "Adds 3rem padding to top and bottom",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding:horizontal_none",
                insertText: new vscode.SnippetString(
                    "slds-p-horizontal_none",
                ),
                detail: "Removes padding from left and right",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding:horizontal_xxx-small",
                insertText: new vscode.SnippetString(
                    "slds-p-horizontal_xxx-small",
                ),
                detail: "Adds .125rem padding to left and right",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding:horizontal_xx-small",
                insertText: new vscode.SnippetString(
                    "slds-p-horizontal_xx-small",
                ),
                detail: "Adds .25rem padding to left and right",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding:horizontal_x-small",
                insertText: new vscode.SnippetString(
                    "slds-p-horizontal_x-small",
                ),
                detail: "Adds .5rem padding to left and right",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding:horizontal_small",
                insertText: new vscode.SnippetString(
                    "slds-p-horizontal_small",
                ),
                detail: "Adds .75rem padding to left and right",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding:horizontal_medium",
                insertText: new vscode.SnippetString(
                    "slds-p-horizontal_medium",
                ),
                detail: "Adds 1rem padding to left and right",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding:horizontal_large",
                insertText: new vscode.SnippetString(
                    "slds-p-horizontal_large",
                ),
                detail: "Adds 1.5rem padding to left and right",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding:horizontal_x-large",
                insertText: new vscode.SnippetString(
                    "slds-p-horizontal_x-large",
                ),
                detail: "Adds 2rem padding to left and right",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "padding:horizontal_xx-large",
                insertText: new vscode.SnippetString(
                    "slds-p-horizontal_xx-large",
                ),
                detail: "Adds 3rem padding to left and right",
                kind: vscode.CompletionItemKind.Class,
            },
            {
                label: "truncate",
                insertText: new vscode.SnippetString(
                    "slds-truncate",
                ),
                detail: "Truncates text",
                kind: vscode.CompletionItemKind.Class,
            },
        ];
    }

    function auraSnippets() {
        return [
            {
                label: "input:text-aura",
                insertText: new vscode.SnippetString(
                    "<lightning:input name=\"${1:input1}\" label=\"${2:Input}\" value=\"${3:value}\" placeholder=\"${4:type here...}\"/>"
                ),
                detail: "Text input fields are for entering single-line text.",
                kind: vscode.CompletionItemKind.Snippet,
            },
            {
                label: "input:number-aura",
                insertText: new vscode.SnippetString(
                    "<lightning:input type=\"number\" name=\"${1:input1}\" label=\"${2:Number}\" placeholder=\"${3:type here...}\"/>"
                ),
                detail: "Number input fields support decimal, percentage, and currency values.",
                kind: vscode.CompletionItemKind.Snippet,
            },
            {
                label: "input:search-aura",
                insertText: new vscode.SnippetString(
                    "<div onkeyup=\"{! c.handleKeyUp }\">\n\t<lightning:input\n\t\ttype=\"search\"\n\t\taura:id=\"${1:enter-search}\"\n\t\tname=\"${2:input1}\"\n\t\tlabel=\"${3:Search when user hits the 'enter' key}\"\n\t/>\n</div>"
                ),
                detail: "Search input fields enable search queries",
                kind: vscode.CompletionItemKind.Snippet,
            },
            {
                label: "input:date-aura",
                insertText: new vscode.SnippetString(
                    "<lightning:input type=\"date\" name=\"${1:input1}\" label=\"${2:Date}\" value=\"${3:2020-12-31}\" placeholder=\"${4:enter date...}\"/>"
                ),
                detail: "Date input fields provide a date picker for entering a date.",
                kind: vscode.CompletionItemKind.Snippet,
            },
            {
                label: "input:time-aura",
                insertText: new vscode.SnippetString(
                    "<lightning:input type=\"time\" name=\"${1:input1}\" label=\"${2:Time}\" value=\"${3:23:59:59.000Z} placeholder=\"${4:enter time...}\"/>"
                ),
                detail: "Time input fields provide a dropdown list of time values",
                kind: vscode.CompletionItemKind.Snippet,
            },
            {
                label: "input:datetime-aura",
                insertText: new vscode.SnippetString(
                    "<lightning:input type=\"datetime\" name=\"${1:input1}\" label=\"${2:Date Time}\" value=\"${3:2000-12-31T23:59:59Z}\"/>"
                ),
                detail: "Date/Time input fields provide a date and time picker for entering a date and time.",
                kind: vscode.CompletionItemKind.Snippet,
            },
            {
                label: "input:file-aura",
                insertText: new vscode.SnippetString(
                    "<lightning:input type=\"file\" name=\"${1:input1}\"  label=\"${2:Attachment}\" multiple=\"${3|true,false|}\" accept=\"${4:}\" onchange=\"{! c.${5:handleFilesChange} }\"/>"
                ),
                detail: "File input fields support upload of single or multiple files and can restrict the accepted file types",
                kind: vscode.CompletionItemKind.Snippet,
            },
            {
                label: "input:email-aura",
                insertText: new vscode.SnippetString(
                    "<lightning:input type=\"email\" name=\"${1:input1}\" label=\"${2:Email}\" value=\"${3:abc@domain.com}\"  placeholder=\"${4:youraddress@company.com}\"/>"
                ),
                detail: "Email input fields are for entering email addresses",
                kind: vscode.CompletionItemKind.Snippet,
            },
            {
                label: "input:password-aura",
                insertText: new vscode.SnippetString(
                    "<lightning:input type=\"password\" name=\"${1:input1}\" label=\"${2:label}\" placeholder=\"Enter Password...\"/>"
                ),
                detail: "Password input fields obscure your text input",
                kind: vscode.CompletionItemKind.Snippet,
            },
            {
                label: "combobox-aura",
                insertText: new vscode.SnippetString(
                    "<aura:attribute name=\"${1:Options}\" type=\"List\" description=\"${2:description}\"/>\n<lightning:combobox name=\"${3:name}\" label=\"${4:label}\" placeholder=\"${5:placeholder}\" options=\"{! v.${1:Options} }\" onchange=\"{! c.${6:function} }\"/>"
                ),
                detail: "A combobox enables you to select only one option",
                kind: vscode.CompletionItemKind.Snippet,
            },
            {
                label: "card:basic-aura",
                insertText: new vscode.SnippetString(
                    "<lightning:card>\n\t<aura:set attribute=\"title\">\n\t\t${1:Title}\n\t</aura:set>\n\t<aura:set attribute=\"footer\">\n\t\t${2:Footer}\n\t</aura:set>\n\t${3:Card Body}\n</lightning:card>",
                ),
                detail: "Aura Basic Card",
                kind: vscode.CompletionItemKind.Snippet,
            },
            {
                label: "icon:aura",
                insertText: new vscode.SnippetString(
                    "<lightning:icon iconName=\"${1|utility:activity, utility:ad_set, utility:add, utility:adduser, utility:advanced_function, utility:advertising, utility:agent_session, utility:alert, utility:all, utility:anchor, utility:animal_and_nature, utility:announcement, utility:answer, utility:answered_twice, utility:apex_plugin, utility:apex, utility:approval, utility:apps, utility:archive, utility:arrowdown, utility:arrowup, utility:assignment, utility:attach, utility:automate, utility:away, utility:back, utility:ban, utility:block_visitor, utility:bold, utility:bookmark, utility:breadcrumbs, utility:broadcast, utility:brush, utility:bucket, utility:builder, utility:button_choice, utility:call, utility:campaign, utility:cancel_file_request, utility:cancel_transfer, utility:capslock, utility:cart, utility:case, utility:cases, utility:center_align_text, utility:change_owner, utility:change_record_type, utility:chart, utility:chat, utility:check, utility:checkin, utility:chevrondown, utility:chevronleft, utility:chevronright, utility:chevronup, utility:choice, utility:classic_interface, utility:clear, utility:clock, utility:close, utility:collapse_all, utility:collection_variable, utility:color_swatch, utility:comments, utility:company, utility:component_customization, utility:connected_apps, utility:constant, utility:contact_request, utility:contract_alt, utility:contract, utility:copy_to_clipboard, utility:copy, utility:crossfilter, utility:currency_input, utility:currency, utility:custom_apps, utility:cut, utility:dash, utility:database, utility:datadotcom, utility:date_input, utility:date_time, utility:dayview, utility:delete, utility:deprecate, utility:description, utility:desktop_and_phone, utility:desktop_console, utility:desktop, utility:dialing, utility:diamond, utility:dislike, utility:display_rich_text, utility:display_text, utility:dock_panel, utility:down, utility:download, utility:drag_and_drop, utility:drag, utility:dynamic_record_choice, utility:edit_form, utility:edit, utility:education, utility:einstein, utility:email_open, utility:email, utility:emoji, utility:end_call, utility:end_chat, utility:end_messaging_session, utility:engage, utility:enter, utility:erect_window, utility:error, utility:event, utility:events, utility:expand_all, utility:expand_alt, utility:expand, utility:fallback, utility:favorite, utility:feed, utility:file, utility:filter, utility:filterList, utility:flow_alt, utility:flow, utility:food_and_drink, utility:formula, utility:forward_up, utility:forward, utility:frozen, utility:fulfillment_order, utility:full_width_view, utility:global_constant, utility:graph, utility:groups, utility:help_center, utility:help, utility:hide_mobile, utility:hide, utility:hierarchy, utility:high_velocity_sales, utility:home, utility:identity, utility:image, utility:in_app_assistant, utility:inbox, utility:incoming_call, utility:info_alt, utility:info, utility:insert_tag_field, utility:insert_template, utility:inspector_panel, utility:internal_share, utility:italic, utility:jump_to_bottom, utility:jump_to_top, utility:justify_text, utility:kanban, utility:keyboard_dismiss, utility:knowledge_base, utility:layers, utility:layout, utility:leave_conference, utility:left_align_text, utility:left, utility:level_down, utility:level_up, utility:light_bulb, utility:lightning_extension, utility:lightning_inspector, utility:like, utility:link, utility:linked, utility:list, utility:listen, utility:live_message, utility:location, utility:lock, utility:locker_service_api_viewer, utility:locker_service_console, utility:log_a_call, utility:logout, utility:loop, utility:lower_flag, utility:macros, utility:magicwand, utility:mark_all_as_read, utility:matrix, utility:merge_field, utility:merge, utility:metrics, utility:minimize_window, utility:missed_call, utility:money, utility:moneybag, utility:monthlyview, utility:move, utility:multi_picklist, utility:multi_select_checkbox, utility:muted, utility:new_direct_message, utility:new_window, utility:new, utility:news, utility:note, utility:notebook, utility:notification, utility:number_input, utility:office365, utility:offline_cached, utility:offline, utility:omni_channel, utility:open_folder, utility:open, utility:opened_folder, utility:outbound_call, utility:outcome, utility:overflow, utility:package_org_beta, utility:package_org, utility:package, utility:page, utility:palette, utility:password, utility:paste, utility:pause, utility:people, utility:phone_landscape, utility:phone_portrait, utility:photo, utility:picklist_choice, utility:picklist_type, utility:picklist, utility:pin, utility:pinned, utility:play, utility:podcast_webinar, utility:pop_in, utility:power, utility:preview, utility:print, utility:priority, utility:privately_shared, utility:process, utility:prompt_edit, utility:prompt, utility:push, utility:puzzle, utility:question_mark, utility:question, utility:questions_and_answers, utility:quick_text, utility:quip, utility:quotation_marks, utility:quote, utility:radio_button, utility:rating, utility:reassign, utility:record_create, utility:record_delete, utility:record_lookup, utility:record_update, utility:record, utility:recurring_exception, utility:recycle_bin_empty, utility:recycle_bin_full, utility:redo, utility:refresh, utility:relate, utility:reminder, utility:remove_formatting, utility:remove_link, utility:replace, utility:reply_all, utility:reply, utility:report_issue, utility:reset_password, utility:resource_absence, utility:resource_capacity, utility:resource_territory, utility:retail_execution, utility:retweet, utility:ribbon, utility:richtextbulletedlist, utility:richtextindent, utility:richtextnumberedlist, utility:richtextoutdent, utility:right_align_text, utility:right, utility:rotate, utility:routing_offline, utility:rows, utility:rules, utility:salesforce1, utility:save, utility:screen, utility:search, utility:section, utility:send, utility:sentiment_negative, utility:sentiment_neutral, utility:settings, utility:setup_assistant_guide, utility:setup_modal, utility:setup, utility:share_file, utility:share_mobile, utility:share_post, utility:share, utility:shield, utility:shift_ui, utility:shopping_bag, utility:shortcuts, utility:side_list, utility:signpost, utility:skip_back, utility:skip_forward, utility:skip, utility:slider, utility:smiley_and_people, utility:sms, utility:snippet, utility:sobject_collection, utility:sobject, utility:socialshare, utility:sort, utility:spinner, utility:stage_collection, utility:stage, utility:standard_objects, utility:steps, utility:stop, utility:store, utility:strategy, utility:strikethrough, utility:success, utility:summary, utility:summarydetail, utility:survey, utility:switch, utility:symbols, utility:sync, utility:system_and_global_variable, utility:table_settings, utility:table, utility:tablet_landscape, utility:tablet_portrait, utility:tabset, utility:target, utility:task, utility:text_background_color, utility:text_color, utility:text_template, utility:text, utility:textarea, utility:textbox, utility:threedots_vertical, utility:threedots, utility:thunder, utility:tile_card_list, utility:toggle_panel_bottom, utility:toggle_panel_left, utility:toggle_panel_right, utility:toggle_panel_top, utility:toggle, utility:topic, utility:topic2, utility:touch_action, utility:tracker, utility:trail, utility:trailhead, utility:travel_and_places, utility:trending, utility:turn_off_notifications, utility:type_tool, utility:type, utility:undelete, utility:undeprecate, utility:underline, utility:undo, utility:unlinked, utility:unlock, utility:unmuted, utility:up, utility:upload, utility:user_role, utility:user, utility:variable, utility:video, utility:voicemail_drop, utility:volume_high, utility:volume_low, utility:volume_off, utility:waits, utility:warning, utility:watchlist, utility:weeklyview, utility:wifi, utility:work_order_type, utility:world, utility:yubi_key, utility:zoomin, utility:zoomout|}\" alternativeText=\"${2:Title}\" title=\"${2:Title}\" />",
                ),
                detail: "Aura Icon",
                kind: vscode.CompletionItemKind.Snippet,
            },
            {
                label: "button:basic-aura",
                insertText: new vscode.SnippetString(
                    "<lightning:button variant=\"${1|base,default,brand,brand-outline,destructive,destructive-text,success|}\" label=\"${2:label}\" title=\"${2:Title}\" onclick=\"{!c.${3:Function Name}}\"/>",
                ),
                detail: "Basic Button Aura",
                kind: vscode.CompletionItemKind.Snippet,
            },
            {
                label: "button:icon-aura",
                insertText: new vscode.SnippetString(
                    "<lightning:button variant=\"${1|base,default,brand,brand-outline,destructive,destructive-text,success|}\" label=\"${2:label}\" title=\"${2:Title}\" onclick={!c.${3:Function Name}} iconName=\"${4|utility:activity, utility:ad_set, utility:add, utility:adduser, utility:advanced_function, utility:advertising, utility:agent_session, utility:alert, utility:all, utility:anchor, utility:animal_and_nature, utility:announcement, utility:answer, utility:answered_twice, utility:apex_plugin, utility:apex, utility:approval, utility:apps, utility:archive, utility:arrowdown, utility:arrowup, utility:assignment, utility:attach, utility:automate, utility:away, utility:back, utility:ban, utility:block_visitor, utility:bold, utility:bookmark, utility:breadcrumbs, utility:broadcast, utility:brush, utility:bucket, utility:builder, utility:button_choice, utility:call, utility:campaign, utility:cancel_file_request, utility:cancel_transfer, utility:capslock, utility:cart, utility:case, utility:cases, utility:center_align_text, utility:change_owner, utility:change_record_type, utility:chart, utility:chat, utility:check, utility:checkin, utility:chevrondown, utility:chevronleft, utility:chevronright, utility:chevronup, utility:choice, utility:classic_interface, utility:clear, utility:clock, utility:close, utility:collapse_all, utility:collection_variable, utility:color_swatch, utility:comments, utility:company, utility:component_customization, utility:connected_apps, utility:constant, utility:contact_request, utility:contract_alt, utility:contract, utility:copy_to_clipboard, utility:copy, utility:crossfilter, utility:currency_input, utility:currency, utility:custom_apps, utility:cut, utility:dash, utility:database, utility:datadotcom, utility:date_input, utility:date_time, utility:dayview, utility:delete, utility:deprecate, utility:description, utility:desktop_and_phone, utility:desktop_console, utility:desktop, utility:dialing, utility:diamond, utility:dislike, utility:display_rich_text, utility:display_text, utility:dock_panel, utility:down, utility:download, utility:drag_and_drop, utility:drag, utility:dynamic_record_choice, utility:edit_form, utility:edit, utility:education, utility:einstein, utility:email_open, utility:email, utility:emoji, utility:end_call, utility:end_chat, utility:end_messaging_session, utility:engage, utility:enter, utility:erect_window, utility:error, utility:event, utility:events, utility:expand_all, utility:expand_alt, utility:expand, utility:fallback, utility:favorite, utility:feed, utility:file, utility:filter, utility:filterList, utility:flow_alt, utility:flow, utility:food_and_drink, utility:formula, utility:forward_up, utility:forward, utility:frozen, utility:fulfillment_order, utility:full_width_view, utility:global_constant, utility:graph, utility:groups, utility:help_center, utility:help, utility:hide_mobile, utility:hide, utility:hierarchy, utility:high_velocity_sales, utility:home, utility:identity, utility:image, utility:in_app_assistant, utility:inbox, utility:incoming_call, utility:info_alt, utility:info, utility:insert_tag_field, utility:insert_template, utility:inspector_panel, utility:internal_share, utility:italic, utility:jump_to_bottom, utility:jump_to_top, utility:justify_text, utility:kanban, utility:keyboard_dismiss, utility:knowledge_base, utility:layers, utility:layout, utility:leave_conference, utility:left_align_text, utility:left, utility:level_down, utility:level_up, utility:light_bulb, utility:lightning_extension, utility:lightning_inspector, utility:like, utility:link, utility:linked, utility:list, utility:listen, utility:live_message, utility:location, utility:lock, utility:locker_service_api_viewer, utility:locker_service_console, utility:log_a_call, utility:logout, utility:loop, utility:lower_flag, utility:macros, utility:magicwand, utility:mark_all_as_read, utility:matrix, utility:merge_field, utility:merge, utility:metrics, utility:minimize_window, utility:missed_call, utility:money, utility:moneybag, utility:monthlyview, utility:move, utility:multi_picklist, utility:multi_select_checkbox, utility:muted, utility:new_direct_message, utility:new_window, utility:new, utility:news, utility:note, utility:notebook, utility:notification, utility:number_input, utility:office365, utility:offline_cached, utility:offline, utility:omni_channel, utility:open_folder, utility:open, utility:opened_folder, utility:outbound_call, utility:outcome, utility:overflow, utility:package_org_beta, utility:package_org, utility:package, utility:page, utility:palette, utility:password, utility:paste, utility:pause, utility:people, utility:phone_landscape, utility:phone_portrait, utility:photo, utility:picklist_choice, utility:picklist_type, utility:picklist, utility:pin, utility:pinned, utility:play, utility:podcast_webinar, utility:pop_in, utility:power, utility:preview, utility:print, utility:priority, utility:privately_shared, utility:process, utility:prompt_edit, utility:prompt, utility:push, utility:puzzle, utility:question_mark, utility:question, utility:questions_and_answers, utility:quick_text, utility:quip, utility:quotation_marks, utility:quote, utility:radio_button, utility:rating, utility:reassign, utility:record_create, utility:record_delete, utility:record_lookup, utility:record_update, utility:record, utility:recurring_exception, utility:recycle_bin_empty, utility:recycle_bin_full, utility:redo, utility:refresh, utility:relate, utility:reminder, utility:remove_formatting, utility:remove_link, utility:replace, utility:reply_all, utility:reply, utility:report_issue, utility:reset_password, utility:resource_absence, utility:resource_capacity, utility:resource_territory, utility:retail_execution, utility:retweet, utility:ribbon, utility:richtextbulletedlist, utility:richtextindent, utility:richtextnumberedlist, utility:richtextoutdent, utility:right_align_text, utility:right, utility:rotate, utility:routing_offline, utility:rows, utility:rules, utility:salesforce1, utility:save, utility:screen, utility:search, utility:section, utility:send, utility:sentiment_negative, utility:sentiment_neutral, utility:settings, utility:setup_assistant_guide, utility:setup_modal, utility:setup, utility:share_file, utility:share_mobile, utility:share_post, utility:share, utility:shield, utility:shift_ui, utility:shopping_bag, utility:shortcuts, utility:side_list, utility:signpost, utility:skip_back, utility:skip_forward, utility:skip, utility:slider, utility:smiley_and_people, utility:sms, utility:snippet, utility:sobject_collection, utility:sobject, utility:socialshare, utility:sort, utility:spinner, utility:stage_collection, utility:stage, utility:standard_objects, utility:steps, utility:stop, utility:store, utility:strategy, utility:strikethrough, utility:success, utility:summary, utility:summarydetail, utility:survey, utility:switch, utility:symbols, utility:sync, utility:system_and_global_variable, utility:table_settings, utility:table, utility:tablet_landscape, utility:tablet_portrait, utility:tabset, utility:target, utility:task, utility:text_background_color, utility:text_color, utility:text_template, utility:text, utility:textarea, utility:textbox, utility:threedots_vertical, utility:threedots, utility:thunder, utility:tile_card_list, utility:toggle_panel_bottom, utility:toggle_panel_left, utility:toggle_panel_right, utility:toggle_panel_top, utility:toggle, utility:topic, utility:topic2, utility:touch_action, utility:tracker, utility:trail, utility:trailhead, utility:travel_and_places, utility:trending, utility:turn_off_notifications, utility:type_tool, utility:type, utility:undelete, utility:undeprecate, utility:underline, utility:undo, utility:unlinked, utility:unlock, utility:unmuted, utility:up, utility:upload, utility:user_role, utility:user, utility:variable, utility:video, utility:voicemail_drop, utility:volume_high, utility:volume_low, utility:volume_off, utility:waits, utility:warning, utility:watchlist, utility:weeklyview, utility:wifi, utility:work_order_type, utility:world, utility:yubi_key, utility:zoomin, utility:zoomout|}\" iconPosition=\"${5|left,right|}\"/>",
                ),
                detail: "Basic Button Aura",
                kind: vscode.CompletionItemKind.Snippet,
            },
            {
                label: "button:group-aura",
                insertText: new vscode.SnippetString(
                    "<lightning:buttonGroup>\n\t<lightning:button variant=\"${1|base,default,brand,brand-outline,destructive,destructive-text,success|}\" label=\"${2:Label}\" onclick=\"{!c.${3:Function}}\"/>\n\t<lightning:button variant=\"${4|base,default,brand,brand-outline,destructive,destructive-text,success|}\" label=\"${5:Label}\" onclick=\"{!c.${6:Function}}\"/>\n\t<lightning:button variant=\"${7|base,default,brand,brand-outline,destructive,destructive-text,success|}\" label=\"${8:Label}\" onclick=\"{!c.${9:Function}}\"/>\n</lightning:buttonGroup>",
                ),
                detail: "Button Group Aura",
                kind: vscode.CompletionItemKind.Snippet,
            },            
            {
                label: "if",
                insertText: new vscode.SnippetString(
                    "<aura:if isTrue=\"{!v.${1:bar}}\">\n\t${2:ifBody}\n\t<aura:set attribute=\"else\">\n\t\t${3:elseBody}\n\t</aura:set>\n</aura:if>",
                    ),
                detail: "Conditionally instantiates and renders either the body or the components in the else attribute.",
                kind: vscode.CompletionItemKind.Method,
            },
            {
                label: "iteration",
                insertText: new vscode.SnippetString(
                    "<aura:iteration items=\"{!v.${1:items}}\" var=\"${2:item}\">\n\t${3:iterationBody}\n</aura:iteration>",
                    ),
                detail: "Renders a view of a collection of items. Supports iterations containing components that can be created exclusively on the client-side.",
                kind: vscode.CompletionItemKind.Method,
            },
            {
                label: "attribute",
                insertText: new vscode.SnippetString(
                    "<aura:attribute name=\"${1:input1}\" type=\"${2|Boolean,Date,DateTime,Decimal,Double,Integer,Long,String,Function,Object,Array,List,Map,Set,Id|}\" description=\"${3:description}\" default=\"${4:optionalDefault}\" />",
                    ),
                detail: "",
                kind: vscode.CompletionItemKind.Method,
            },
            {
                label: "hasRecordId",
                insertText: new vscode.SnippetString(
                    "force:hasRecordId",
                ),
                detail: "Add the force:hasRecordId interface to a Lightning component to enable the component to be assigned the ID of the current record",
                kind: vscode.CompletionItemKind.Text,
            },
            {
                label: "appHostable",
                insertText: new vscode.SnippetString(
                    "force:appHostable",
                ),
                detail: "Add the force:appHostable interface to a Lightning component to allow it to be used as a custom tab in Lightning Experience or the Salesforce mobile app. Attribute name recordId, type String",
                kind: vscode.CompletionItemKind.Text,
            },
            {
                label: "hasSObjectName",
                insertText: new vscode.SnippetString(
                    "force:hasSObjectName",
                ),
                detail: "Add the force:hasSObjectName interface to a Lightning component to enable the component to be assigned the API name of current record’s sObject type. Attribute name sObjectName, type String",
                kind: vscode.CompletionItemKind.Text,
            },
            {
                label: "lightningQuickAction",
                insertText: new vscode.SnippetString(
                    "force:lightningQuickAction",
                ),
                detail: "Add the force:lightningQuickAction interface to a Lightning component to allow it to be used as a custom action in Lightning Experience or the Salesforce mobile app",
                kind: vscode.CompletionItemKind.Text,
            },
            {
                label: "lightningQuickActionWithoutHeader",
                insertText: new vscode.SnippetString(
                    "force:lightningQuickActionWithoutHeader",
                ),
                detail: "Add the force:lightningQuickActionWithoutHeader interface to a Lightning component to allow it to be used as a custom action in Lightning Experience or the Salesforce mobile app",
                kind: vscode.CompletionItemKind.Text,
            },
            {
                label: "availableForAllPageTypes",
                insertText: new vscode.SnippetString(
                    "flexipage:availableForAllPageTypes",
                ),
                detail: "To make your component available for record pages and any other type of page, implement the flexipage:availableForAllPageTypes interface",
                kind: vscode.CompletionItemKind.Text,
            },
            {
                label: "availableForRecordHome",
                insertText: new vscode.SnippetString(
                    "flexipage:availableForRecordHome",
                ),
                detail: "To make your component available for record pages only, implement the flexipage:availableForRecordHome interface.",
                kind: vscode.CompletionItemKind.Text,
            },
            {
                label: "init",
                insertText: new vscode.SnippetString(
                    "<aura:handler name='init' value='{!this}' action='{!c.doInit}' />",
                ),
                detail: "This event is automatically fired when an app or component is initialized, prior to rendering.",
                kind: vscode.CompletionItemKind.Method,
            },
        ];
    }

    function lwcSnippets() {
        return [
            {
                label: "input:text-lwc",
                insertText: new vscode.SnippetString(
                    "<lightning-input type=\"text\" name=\"${1:input1}\" label=\"${2:label}\" placeholder=\"${3:type here...} \"></lightning-input>"
                ),
                detail: "Text input fields are for entering single-line text.",
                kind: vscode.CompletionItemKind.Snippet,
            },
            {
                label: "input:number-lwc",
                insertText: new vscode.SnippetString(
                    "<lightning-input type=\"number\" name=\"${1:input1}\" label=\"${2:label}\" placeholder=\"${3:enter number...} \"></lightning-input>"
                ),
                detail: "Number input fields support decimal, percentage, and currency values.",
                kind: vscode.CompletionItemKind.Snippet,
            },
            {
                label: "input:search-lwc",
                insertText: new vscode.SnippetString(
                    "<div onkeyup={handleKeyUp}>\n\t<lightning-input\n\t\tname=\"${1:fieldName}\"\n\t\tlabel=\"${2:Search}\"\n\t\ttype=\"search\">\n\t</lightning-input>\n</div>"
                ),
                detail: "Search input fields enable search queries",
                kind: vscode.CompletionItemKind.Snippet,
            },
            {
                label: "input:date-lwc",
                insertText: new vscode.SnippetString(
                    "<lightning-input type=\"date\" name=\"${1:input1}\" label=\"${2:Date}\" value=\"${3:2020-12-31}\"></lightning-input>"
                ),
                detail: "Date input fields provide a date picker for entering a date.",
                kind: vscode.CompletionItemKind.Snippet,
            },
            {
                label: "input:time-lwc",
                insertText: new vscode.SnippetString(
                    "<lightning-input type=\"time\" name=\"${1:input1}\" label=\"${2:Time}\" value=\"${3:2020-12-31}\"></lightning-input>"
                ),
                detail: "Time input fields provide a dropdown list of time values",
                kind: vscode.CompletionItemKind.Snippet,
            },
            {
                label: "input:datetime-lwc",
                insertText: new vscode.SnippetString(
                    "<lightning-input type=\"datetime\" name=\"${1:input1}\" label=\"${2:Date Time}\" value=\"${3:2000-12-31T23:59:59Z}\"></lightning-input>"
                ),
                detail: "Date/Time input fields provide a date and time picker for entering a date and time.",
                kind: vscode.CompletionItemKind.Snippet,
            },
            {
                label: "input:file-lwc",
                insertText: new vscode.SnippetString(
                    "<lightning-input type=\"file\" name=\"${1:input1}\"  label=\"${2:Attachment}\" multiple=\"${3|true,false|}\" accept=\"${4:}\" onchange=\"{! c.${5:handleFilesChange} }\"/></lightning-input>"
                ),
                detail: "File input fields support upload of single or multiple files and can restrict the accepted file types",
                kind: vscode.CompletionItemKind.Snippet,
            },
            {
                label: "input:email-lwc",
                insertText: new vscode.SnippetString(
                    "<lightning-input type=\"email\" name=\"${1:input1}\" label=\"${2:Email}\" value=\"${3:abc@domain.com}\"  placeholder=\"${4:youraddress@company.com}\"></lightning-input>"
                ),
                detail: "Email input fields are for entering email addresses",
                kind: vscode.CompletionItemKind.Snippet,
            },
            {
                label: "input:password-lwc",
                insertText: new vscode.SnippetString(
                    "<lightning-input type=\"password\" name=\"${1:input1}\" label=\"${2:label}\" placeholder=\"${3:Enter Password...} \"></lightning-input>"
                ),
                detail: "Password input fields obscure your text input",
                kind: vscode.CompletionItemKind.Snippet,
            },
            {
                label: "combobox-lwc",
                insertText: new vscode.SnippetString(
                    "<lightning-combobox\n\tname=\"${1:name}\"\n\tlabel=\"${2:label}\"\n\tvalue=\"\"\n\tplaceholder=\"${3:placeholder}\"\n\toptions={options}\n\tonchange={handleChange}\n\trequired\n></lightning-combobox>"
                ),
                detail: "A combobox enables you to select only one option",
                kind: vscode.CompletionItemKind.Snippet,
            },
            {
                label: "card:basic-lwc",
                insertText: new vscode.SnippetString(
                    "<lightning-card title=\"${1:title}\">\n\t<p class=\"slds-p-horizontal_small\">\n\t\t${2:Card Body}\n\t</p>\n\t<p slot=\"footer\">\n\t\t${3:Card Footer}\n\t</p>\n</lightning-card>",
                ),
                detail: "LWC Basic Card",
                kind: vscode.CompletionItemKind.Snippet,
            },
            {
                label: "icon:lwc",
                insertText: new vscode.SnippetString(
                    "<lightning-icon icon-name=\"${1|utility:activity, utility:ad_set, utility:add, utility:adduser, utility:advanced_function, utility:advertising, utility:agent_session, utility:alert, utility:all, utility:anchor, utility:animal_and_nature, utility:announcement, utility:answer, utility:answered_twice, utility:apex_plugin, utility:apex, utility:approval, utility:apps, utility:archive, utility:arrowdown, utility:arrowup, utility:assignment, utility:attach, utility:automate, utility:away, utility:back, utility:ban, utility:block_visitor, utility:bold, utility:bookmark, utility:breadcrumbs, utility:broadcast, utility:brush, utility:bucket, utility:builder, utility:button_choice, utility:call, utility:campaign, utility:cancel_file_request, utility:cancel_transfer, utility:capslock, utility:cart, utility:case, utility:cases, utility:center_align_text, utility:change_owner, utility:change_record_type, utility:chart, utility:chat, utility:check, utility:checkin, utility:chevrondown, utility:chevronleft, utility:chevronright, utility:chevronup, utility:choice, utility:classic_interface, utility:clear, utility:clock, utility:close, utility:collapse_all, utility:collection_variable, utility:color_swatch, utility:comments, utility:company, utility:component_customization, utility:connected_apps, utility:constant, utility:contact_request, utility:contract_alt, utility:contract, utility:copy_to_clipboard, utility:copy, utility:crossfilter, utility:currency_input, utility:currency, utility:custom_apps, utility:cut, utility:dash, utility:database, utility:datadotcom, utility:date_input, utility:date_time, utility:dayview, utility:delete, utility:deprecate, utility:description, utility:desktop_and_phone, utility:desktop_console, utility:desktop, utility:dialing, utility:diamond, utility:dislike, utility:display_rich_text, utility:display_text, utility:dock_panel, utility:down, utility:download, utility:drag_and_drop, utility:drag, utility:dynamic_record_choice, utility:edit_form, utility:edit, utility:education, utility:einstein, utility:email_open, utility:email, utility:emoji, utility:end_call, utility:end_chat, utility:end_messaging_session, utility:engage, utility:enter, utility:erect_window, utility:error, utility:event, utility:events, utility:expand_all, utility:expand_alt, utility:expand, utility:fallback, utility:favorite, utility:feed, utility:file, utility:filter, utility:filterList, utility:flow_alt, utility:flow, utility:food_and_drink, utility:formula, utility:forward_up, utility:forward, utility:frozen, utility:fulfillment_order, utility:full_width_view, utility:global_constant, utility:graph, utility:groups, utility:help_center, utility:help, utility:hide_mobile, utility:hide, utility:hierarchy, utility:high_velocity_sales, utility:home, utility:identity, utility:image, utility:in_app_assistant, utility:inbox, utility:incoming_call, utility:info_alt, utility:info, utility:insert_tag_field, utility:insert_template, utility:inspector_panel, utility:internal_share, utility:italic, utility:jump_to_bottom, utility:jump_to_top, utility:justify_text, utility:kanban, utility:keyboard_dismiss, utility:knowledge_base, utility:layers, utility:layout, utility:leave_conference, utility:left_align_text, utility:left, utility:level_down, utility:level_up, utility:light_bulb, utility:lightning_extension, utility:lightning_inspector, utility:like, utility:link, utility:linked, utility:list, utility:listen, utility:live_message, utility:location, utility:lock, utility:locker_service_api_viewer, utility:locker_service_console, utility:log_a_call, utility:logout, utility:loop, utility:lower_flag, utility:macros, utility:magicwand, utility:mark_all_as_read, utility:matrix, utility:merge_field, utility:merge, utility:metrics, utility:minimize_window, utility:missed_call, utility:money, utility:moneybag, utility:monthlyview, utility:move, utility:multi_picklist, utility:multi_select_checkbox, utility:muted, utility:new_direct_message, utility:new_window, utility:new, utility:news, utility:note, utility:notebook, utility:notification, utility:number_input, utility:office365, utility:offline_cached, utility:offline, utility:omni_channel, utility:open_folder, utility:open, utility:opened_folder, utility:outbound_call, utility:outcome, utility:overflow, utility:package_org_beta, utility:package_org, utility:package, utility:page, utility:palette, utility:password, utility:paste, utility:pause, utility:people, utility:phone_landscape, utility:phone_portrait, utility:photo, utility:picklist_choice, utility:picklist_type, utility:picklist, utility:pin, utility:pinned, utility:play, utility:podcast_webinar, utility:pop_in, utility:power, utility:preview, utility:print, utility:priority, utility:privately_shared, utility:process, utility:prompt_edit, utility:prompt, utility:push, utility:puzzle, utility:question_mark, utility:question, utility:questions_and_answers, utility:quick_text, utility:quip, utility:quotation_marks, utility:quote, utility:radio_button, utility:rating, utility:reassign, utility:record_create, utility:record_delete, utility:record_lookup, utility:record_update, utility:record, utility:recurring_exception, utility:recycle_bin_empty, utility:recycle_bin_full, utility:redo, utility:refresh, utility:relate, utility:reminder, utility:remove_formatting, utility:remove_link, utility:replace, utility:reply_all, utility:reply, utility:report_issue, utility:reset_password, utility:resource_absence, utility:resource_capacity, utility:resource_territory, utility:retail_execution, utility:retweet, utility:ribbon, utility:richtextbulletedlist, utility:richtextindent, utility:richtextnumberedlist, utility:richtextoutdent, utility:right_align_text, utility:right, utility:rotate, utility:routing_offline, utility:rows, utility:rules, utility:salesforce1, utility:save, utility:screen, utility:search, utility:section, utility:send, utility:sentiment_negative, utility:sentiment_neutral, utility:settings, utility:setup_assistant_guide, utility:setup_modal, utility:setup, utility:share_file, utility:share_mobile, utility:share_post, utility:share, utility:shield, utility:shift_ui, utility:shopping_bag, utility:shortcuts, utility:side_list, utility:signpost, utility:skip_back, utility:skip_forward, utility:skip, utility:slider, utility:smiley_and_people, utility:sms, utility:snippet, utility:sobject_collection, utility:sobject, utility:socialshare, utility:sort, utility:spinner, utility:stage_collection, utility:stage, utility:standard_objects, utility:steps, utility:stop, utility:store, utility:strategy, utility:strikethrough, utility:success, utility:summary, utility:summarydetail, utility:survey, utility:switch, utility:symbols, utility:sync, utility:system_and_global_variable, utility:table_settings, utility:table, utility:tablet_landscape, utility:tablet_portrait, utility:tabset, utility:target, utility:task, utility:text_background_color, utility:text_color, utility:text_template, utility:text, utility:textarea, utility:textbox, utility:threedots_vertical, utility:threedots, utility:thunder, utility:tile_card_list, utility:toggle_panel_bottom, utility:toggle_panel_left, utility:toggle_panel_right, utility:toggle_panel_top, utility:toggle, utility:topic, utility:topic2, utility:touch_action, utility:tracker, utility:trail, utility:trailhead, utility:travel_and_places, utility:trending, utility:turn_off_notifications, utility:type_tool, utility:type, utility:undelete, utility:undeprecate, utility:underline, utility:undo, utility:unlinked, utility:unlock, utility:unmuted, utility:up, utility:upload, utility:user_role, utility:user, utility:variable, utility:video, utility:voicemail_drop, utility:volume_high, utility:volume_low, utility:volume_off, utility:waits, utility:warning, utility:watchlist, utility:weeklyview, utility:wifi, utility:work_order_type, utility:world, utility:yubi_key, utility:zoomin, utility:zoomout|}\" alternative-text=\"${2:Title}\" title=\"${2:Title}\"></lightning-icon>",
                ),
                detail: "LWC Icon",
                kind: vscode.CompletionItemKind.Snippet,
            },
            {
                label: "button:basic-lwc",
                insertText: new vscode.SnippetString(
                    "<lightning-button variant=\"${1|base,default,brand,brand-outline,destructive,destructive-text,success|}\" label=\"${2:label}\" title=\"${2:Title}\" onclick={${3:Function Name}}></lightning-button>",
                ),
                detail: "Basic Button LWC",
                kind: vscode.CompletionItemKind.Snippet,
            },
            {
                label: "button:icon-lwc",
                insertText: new vscode.SnippetString(
                    "<lightning-button variant=\"${1|base,default,brand,brand-outline,destructive,destructive-text,success|}\" label=\"${2:label}\" title=\"${2:Title}\" onclick={${3:Function Name}} icon-name=\"${4|utility:activity, utility:ad_set, utility:add, utility:adduser, utility:advanced_function, utility:advertising, utility:agent_session, utility:alert, utility:all, utility:anchor, utility:animal_and_nature, utility:announcement, utility:answer, utility:answered_twice, utility:apex_plugin, utility:apex, utility:approval, utility:apps, utility:archive, utility:arrowdown, utility:arrowup, utility:assignment, utility:attach, utility:automate, utility:away, utility:back, utility:ban, utility:block_visitor, utility:bold, utility:bookmark, utility:breadcrumbs, utility:broadcast, utility:brush, utility:bucket, utility:builder, utility:button_choice, utility:call, utility:campaign, utility:cancel_file_request, utility:cancel_transfer, utility:capslock, utility:cart, utility:case, utility:cases, utility:center_align_text, utility:change_owner, utility:change_record_type, utility:chart, utility:chat, utility:check, utility:checkin, utility:chevrondown, utility:chevronleft, utility:chevronright, utility:chevronup, utility:choice, utility:classic_interface, utility:clear, utility:clock, utility:close, utility:collapse_all, utility:collection_variable, utility:color_swatch, utility:comments, utility:company, utility:component_customization, utility:connected_apps, utility:constant, utility:contact_request, utility:contract_alt, utility:contract, utility:copy_to_clipboard, utility:copy, utility:crossfilter, utility:currency_input, utility:currency, utility:custom_apps, utility:cut, utility:dash, utility:database, utility:datadotcom, utility:date_input, utility:date_time, utility:dayview, utility:delete, utility:deprecate, utility:description, utility:desktop_and_phone, utility:desktop_console, utility:desktop, utility:dialing, utility:diamond, utility:dislike, utility:display_rich_text, utility:display_text, utility:dock_panel, utility:down, utility:download, utility:drag_and_drop, utility:drag, utility:dynamic_record_choice, utility:edit_form, utility:edit, utility:education, utility:einstein, utility:email_open, utility:email, utility:emoji, utility:end_call, utility:end_chat, utility:end_messaging_session, utility:engage, utility:enter, utility:erect_window, utility:error, utility:event, utility:events, utility:expand_all, utility:expand_alt, utility:expand, utility:fallback, utility:favorite, utility:feed, utility:file, utility:filter, utility:filterList, utility:flow_alt, utility:flow, utility:food_and_drink, utility:formula, utility:forward_up, utility:forward, utility:frozen, utility:fulfillment_order, utility:full_width_view, utility:global_constant, utility:graph, utility:groups, utility:help_center, utility:help, utility:hide_mobile, utility:hide, utility:hierarchy, utility:high_velocity_sales, utility:home, utility:identity, utility:image, utility:in_app_assistant, utility:inbox, utility:incoming_call, utility:info_alt, utility:info, utility:insert_tag_field, utility:insert_template, utility:inspector_panel, utility:internal_share, utility:italic, utility:jump_to_bottom, utility:jump_to_top, utility:justify_text, utility:kanban, utility:keyboard_dismiss, utility:knowledge_base, utility:layers, utility:layout, utility:leave_conference, utility:left_align_text, utility:left, utility:level_down, utility:level_up, utility:light_bulb, utility:lightning_extension, utility:lightning_inspector, utility:like, utility:link, utility:linked, utility:list, utility:listen, utility:live_message, utility:location, utility:lock, utility:locker_service_api_viewer, utility:locker_service_console, utility:log_a_call, utility:logout, utility:loop, utility:lower_flag, utility:macros, utility:magicwand, utility:mark_all_as_read, utility:matrix, utility:merge_field, utility:merge, utility:metrics, utility:minimize_window, utility:missed_call, utility:money, utility:moneybag, utility:monthlyview, utility:move, utility:multi_picklist, utility:multi_select_checkbox, utility:muted, utility:new_direct_message, utility:new_window, utility:new, utility:news, utility:note, utility:notebook, utility:notification, utility:number_input, utility:office365, utility:offline_cached, utility:offline, utility:omni_channel, utility:open_folder, utility:open, utility:opened_folder, utility:outbound_call, utility:outcome, utility:overflow, utility:package_org_beta, utility:package_org, utility:package, utility:page, utility:palette, utility:password, utility:paste, utility:pause, utility:people, utility:phone_landscape, utility:phone_portrait, utility:photo, utility:picklist_choice, utility:picklist_type, utility:picklist, utility:pin, utility:pinned, utility:play, utility:podcast_webinar, utility:pop_in, utility:power, utility:preview, utility:print, utility:priority, utility:privately_shared, utility:process, utility:prompt_edit, utility:prompt, utility:push, utility:puzzle, utility:question_mark, utility:question, utility:questions_and_answers, utility:quick_text, utility:quip, utility:quotation_marks, utility:quote, utility:radio_button, utility:rating, utility:reassign, utility:record_create, utility:record_delete, utility:record_lookup, utility:record_update, utility:record, utility:recurring_exception, utility:recycle_bin_empty, utility:recycle_bin_full, utility:redo, utility:refresh, utility:relate, utility:reminder, utility:remove_formatting, utility:remove_link, utility:replace, utility:reply_all, utility:reply, utility:report_issue, utility:reset_password, utility:resource_absence, utility:resource_capacity, utility:resource_territory, utility:retail_execution, utility:retweet, utility:ribbon, utility:richtextbulletedlist, utility:richtextindent, utility:richtextnumberedlist, utility:richtextoutdent, utility:right_align_text, utility:right, utility:rotate, utility:routing_offline, utility:rows, utility:rules, utility:salesforce1, utility:save, utility:screen, utility:search, utility:section, utility:send, utility:sentiment_negative, utility:sentiment_neutral, utility:settings, utility:setup_assistant_guide, utility:setup_modal, utility:setup, utility:share_file, utility:share_mobile, utility:share_post, utility:share, utility:shield, utility:shift_ui, utility:shopping_bag, utility:shortcuts, utility:side_list, utility:signpost, utility:skip_back, utility:skip_forward, utility:skip, utility:slider, utility:smiley_and_people, utility:sms, utility:snippet, utility:sobject_collection, utility:sobject, utility:socialshare, utility:sort, utility:spinner, utility:stage_collection, utility:stage, utility:standard_objects, utility:steps, utility:stop, utility:store, utility:strategy, utility:strikethrough, utility:success, utility:summary, utility:summarydetail, utility:survey, utility:switch, utility:symbols, utility:sync, utility:system_and_global_variable, utility:table_settings, utility:table, utility:tablet_landscape, utility:tablet_portrait, utility:tabset, utility:target, utility:task, utility:text_background_color, utility:text_color, utility:text_template, utility:text, utility:textarea, utility:textbox, utility:threedots_vertical, utility:threedots, utility:thunder, utility:tile_card_list, utility:toggle_panel_bottom, utility:toggle_panel_left, utility:toggle_panel_right, utility:toggle_panel_top, utility:toggle, utility:topic, utility:topic2, utility:touch_action, utility:tracker, utility:trail, utility:trailhead, utility:travel_and_places, utility:trending, utility:turn_off_notifications, utility:type_tool, utility:type, utility:undelete, utility:undeprecate, utility:underline, utility:undo, utility:unlinked, utility:unlock, utility:unmuted, utility:up, utility:upload, utility:user_role, utility:user, utility:variable, utility:video, utility:voicemail_drop, utility:volume_high, utility:volume_low, utility:volume_off, utility:waits, utility:warning, utility:watchlist, utility:weeklyview, utility:wifi, utility:work_order_type, utility:world, utility:yubi_key, utility:zoomin, utility:zoomout|}\" icon-position=\"${5|left,right|}\"></lightning-button>",
                ),
                detail: "Basic Button LWC",
                kind: vscode.CompletionItemKind.Snippet,
            },
            {
                label: "button:group-lwc",
                insertText: new vscode.SnippetString(
                    "fghj",
                ),
                detail: "Button Group LWC",
                kind: vscode.CompletionItemKind.Snippet,
            },
        ];
    }


exports.activate = activate;
exports.deactivate = deactivate;

function deactivate() {
    reporter.dispose();
}

module.exports = {
	activate,
    deactivate,
    htmlSnippets,
    advancedHtmlSnippets,
    apexSnippets,
    jsSnippets,
    sldsClasses,
    auraSnippets,
    lwcSnippets,
    enableApexSnippetsFlag,
    enableJavascriptSnippetsFlag,
    sendTeleEventforConfigs
}



// "Aura Checkbox": {
//     "prefix": "adbn:checkbox-aura",
//     "body": "",
//     "description": ""
// },

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