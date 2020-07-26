import * as vscode from 'vscode';
import ADBNTelemetry from '../../helper/telemetry';

export function loadAdvancedSnippets( context:vscode.ExtensionContext ) {

    let advancedSnippets = [
        {
            label: "grid:gutters",
            insertText: new vscode.SnippetString(
                "<div class=\"slds-grid slds-gutters\">\n\t$1\n</div>",
            ),
            detail: "Grid Gutters",
            kind: vscode.CompletionItemKind.Property,
        },
        {
            label: "grid:wrap",
            insertText: new vscode.SnippetString(
                "<div class=\"slds-grid slds-wrap\">\n\t$1\n</div>",
            ),
            detail: "Grid Wrap",
            kind: vscode.CompletionItemKind.Property,
        },
        {
            label: "grid:vertical",
            insertText: new vscode.SnippetString(
                "<div class=\"slds-grid slds-grid_vertical\">\n\t$1\n</div>",
            ),
            detail: "Grid Vertical",
            kind: vscode.CompletionItemKind.Property,
        },
        {
            label: "grid:centered",
            insertText: new vscode.SnippetString(
                "<div class=\"slds-grid slds-grid_align-center\">\n\t$1\n</div>",
            ),
            detail: "Grid centered",
            kind: vscode.CompletionItemKind.Property,
        },
        {
            label: "grid:spaced",
            insertText: new vscode.SnippetString(
                "<div class=\"slds-grid slds-grid_align-space\">\n\t$1\n</div>",
            ),
            detail: "Grid evenly spaced",
            kind: vscode.CompletionItemKind.Property,
        },
        {
            label: "grid:spread",
            insertText: new vscode.SnippetString(
                "<div class=\"slds-grid slds-grid_align-spread\">\n\t$1\n</div>",
            ),
            detail: "Grid evenly spread",
            kind: vscode.CompletionItemKind.Property,
        },
        {
            label: "grid:right",
            insertText: new vscode.SnippetString(
                "<div class=\"slds-grid slds-grid_align-end\">\n\t$1\n</div>",
            ),
            detail: "Grid Right",
            kind: vscode.CompletionItemKind.Property,
        },
        {
            label: "grid:vertical_top",
            insertText: new vscode.SnippetString(
                "<div class=\"slds-grid slds-grid_vertical-align-start\">\n\t$1\n</div>",
            ),
            detail: "Vertical Top",
            kind: vscode.CompletionItemKind.Property,
        },
        {
            label: "grid:vertical_center",
            insertText: new vscode.SnippetString(
                "<div class=\"slds-grid slds-grid_vertical-align-center\">\n\t$1\n</div>",
            ),
            detail: "Vertical Center",
            kind: vscode.CompletionItemKind.Property,
        },
        {
            label: "grid:vertical_bottom",
            insertText: new vscode.SnippetString(
                "<div class=\"slds-grid slds-grid_vertical-align-end\">\n\t$1\n</div>",
            ),
            detail: "Vertical Bottom",
            kind: vscode.CompletionItemKind.Property,
        },
        {
            label: "heading:large",
            insertText: new vscode.SnippetString(
                "<div class=\"slds-text-heading_large\">$1</div>",
            ),
            detail: "Large Heading",
            kind: vscode.CompletionItemKind.Property,
        },
        {
            label: "heading:medium",
            insertText: new vscode.SnippetString(
                "<div class=\"slds-text-heading_medium\">$1</div>",
            ),
            detail: "Medium Heading",
            kind: vscode.CompletionItemKind.Property,
        },
        {
            label: "heading:small",
            insertText: new vscode.SnippetString(
                "<div class=\"slds-text-heading_small\">$1</div>",
            ),
            detail: "Small Heading",
            kind: vscode.CompletionItemKind.Property,
        },
        {
            label: "textColor:default",
            insertText: new vscode.SnippetString(
                "<div class=\"slds-text-color_default\">$1</div>",
            ),
            detail: "Default Text Color",
            kind: vscode.CompletionItemKind.Property,
        },
        {
            label: "textColor:green",
            insertText: new vscode.SnippetString(
                "<div class=\"slds-text-color_success\">$1</div>",
            ),
            detail: "Green Text Color",
            kind: vscode.CompletionItemKind.Property,
        },
        {
            label: "textColor:weak",
            insertText: new vscode.SnippetString(
                "<div class=\"slds-text-color_weak\">$1</div>",
            ),
            detail: "Weak Text Color",
            kind: vscode.CompletionItemKind.Property,
        },
        {
            label: "textColor:red",
            insertText: new vscode.SnippetString(
                "<div class=\"slds-text-color_error\">$1</div>",
            ),
            detail: "Red Text Color",
            kind: vscode.CompletionItemKind.Property,
        },
        {
            label: "textColor:inverse",
            insertText: new vscode.SnippetString(
                "<div class=\"slds-text-color_inverse\">$1</div>",
            ),
            detail: "Inverse Text Color",
            kind: vscode.CompletionItemKind.Property,
        },
        {
            label: "textColor:inverse-weak",
            insertText: new vscode.SnippetString(
                "<div class=\"slds-text-color_inverse-weak\">$1</div>",
            ),
            detail: "Inverse Weak Text Color",
            kind: vscode.CompletionItemKind.Property,
        },
        {
            label: "card:narrow-lwc",
            insertText: new vscode.SnippetString(
                "<lightning-card title=\"${1:title}\" variant=\"Narrow\">\n\t<p class=\"slds-p-horizontal_small\">\n\t\t${2:Card Body}\n\t</p>\n\t<p slot=\"footer\">\n\t\t${3:Card Footer}\n\t</p>\n</lightning-card>",
            ),
            detail: "LWC Narrow Card",
            kind: vscode.CompletionItemKind.Property,
        },
        {
            label: "card:narrow-aura",
            insertText: new vscode.SnippetString(
                "<lightning:card variant=\"Narrow\">\n\t<aura:set attribute=\"title\">\n\t\t${1:Title}\n\t</aura:set>\n\t<aura:set attribute=\"footer\">\n\t\t${2:Footer}\n\t</aura:set>\n\t${3:Card Body}\n</lightning:card>",
            ),
            detail: "Aura Narrow Card",
            kind: vscode.CompletionItemKind.Property,
        },
        {
            label: "button:group-dropdown-lwc",
            insertText: new vscode.SnippetString(
                "<lightning-button-group>\n\t<lightning-button variant=\"${1|base,default,brand,brand-outline,destructive,destructive-text,success|}\" label=\"${2:Label}\" onclick=\"{!c.${3:Function}}\" />\n\t<lightning-button variant=\"${4|base,default,brand,brand-outline,destructive,destructive-text,success|}\" label=\"${5:Label}\" onclick=\"{!c.${6:Function}}\" />\n\t<lightning-button variant=\"${7|base,default,brand,brand-outline,destructive,destructive-text,success|}\" label=\"${8:Label}\" onclick=\"{!c.${9:Function}}\" />\n\t<lightning-button-menu alternativeText=\"${10:Text}\" class=\"slds-button_last\" variant=\"border-filled\">\n\t\t<lightning-menu-item label=\"${11:Label}\" value=\"${12:Value}\" onclick=\"{!c.${13:Function}}\"></lightning-menu-item>\n\t\t<lightning-menu-item label=\"${14:Label}\" value=\"${15:Value}\" onclick=\"{!c.${16:Function}}\"></lightning-menu-item>\n\t\t<lightning-menu-item label=\"${17:Label}\" value=\"${18:Value}\" onclick=\"{!c.${19:Function}}\"></lightning-menu-item>\n\t</lightning-button-menu>\n</lightning-button-group>"
            ),
            detail: "Button Group Dropdown LWC",
            kind: vscode.CompletionItemKind.Property,
        },
        {
            label: "button:group-dropdown-aura",
            insertText: new vscode.SnippetString(
                "<lightning:buttonGroup>\n\t<lightning:button variant=\"${1|base,default,brand,brand-outline,destructive,destructive-text,success|}\" label=\"${2:Label}\" onclick=\"{!c.${3:Function}}\" />\n\t<lightning:button variant=\"${4|base,default,brand,brand-outline,destructive,destructive-text,success|}\" label=\"${5:Label}\" onclick=\"{!c.${6:Function}}\" />\n\t<lightning:button variant=\"${7|base,default,brand,brand-outline,destructive,destructive-text,success|}\" label=\"${8:Label}\" onclick=\"{!c.${9:Function}}\" />\n\t<lightning:buttonMenu alternativeText=\"${10:Text}\" class=\"slds-button_last\">\n\t\t<lightning:menuItem label=\"${11:Label}\" value=\"${12:Value}\" onclick=\"{!c.${13:Function}}\" />\n\t\t<lightning:menuItem label=\"${14:Label}\" value=\"${15:Value}\" onclick=\"{!c.${16:Function}}\" />\n\t\t<lightning:menuItem label=\"${17:Label}\" value=\"${18:Value}\" onclick=\"{!c.${19:Function}}\" />\n\t</lightning:buttonMenu>\n</lightning:buttonGroup>"
            ),
            detail: "Button Group Aura Dropdown ",
            kind: vscode.CompletionItemKind.Property,
        },
    ];

    return vscode.languages.registerCompletionItemProvider('html', {
        provideCompletionItems(doc, pos, token, context) {
            var start = new vscode.Position(pos.line, 0);
            var range = new vscode.Range(start, pos);
            var text = doc.getText(range);

            var rawClasses = text.match(/class=["|']([\w- ]*$)/);
            if (rawClasses === null) {
                return advancedSnippets;
            }
        },
        resolveCompletionItem(item) {
            let tele = new ADBNTelemetry( context );
            tele.sendAdbnTelementry('lang_usage', {"language": "Advanced Mode"}, { 'lang_count': 1});
            tele.sendAdbnTelementry('advancedMode', {"Advanced Mode": item.label}, { 'count': 1});
            return item;
        }
    });

}