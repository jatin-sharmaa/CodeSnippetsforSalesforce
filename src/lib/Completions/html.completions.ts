import * as vscode from 'vscode';

export function loadHTMLSnippets( context:vscode.ExtensionContext ) {

    let htmlSnippets = [
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
            kind: vscode.CompletionItemKind.Property,
        },
        {
            label: "grid:2 Columns",
            insertText: new vscode.SnippetString(
                "<div class=\"slds-grid\">\n\t<div class=\"slds-col slds-size_6-of-12\">${1:<!-- Code -->}</div>\n\t<div class=\"slds-col slds-size_6-of-12\"><!-- Code --></div>\n</div>",
            ),
            detail: "Default Grid with 2 columns",
            kind: vscode.CompletionItemKind.Property,
        },
        {
            label: "grid:3 Columns",
            insertText: new vscode.SnippetString(
                "<div class=\"slds-grid\">\n\t<div class=\"slds-col slds-size_4-of-12\">${1:<!-- Code -->}</div>\n\t<div class=\"slds-col slds-size_4-of-12\"><!-- Code --></div>\n\t<div class=\"slds-col slds-size_4-of-12\"><!-- Code --></div>\n</div>",
            ),
            detail: "Default Grid with 3 columns",
            kind: vscode.CompletionItemKind.Property,
        },
        {
            label: "column",
            insertText: new vscode.SnippetString(
                "<div class=\"slds-col slds-size_${1|1,2,3,4,5,6,7,8,9,10,11,12|}-of-${1|1,2,3,4,5,6,7,8,9,10,11,12|}\">\n\t$2\n</div>",
            ),
            detail: "Grid Column",
            kind: vscode.CompletionItemKind.Property,
        },
        {
            label: "absolute:center",
            insertText: new vscode.SnippetString(
                "<div class=\"slds-align_absolute-center\">$1</div>",
            ),
            detail: "Class will absolutely center children content",
            kind: vscode.CompletionItemKind.Property,
        },
        {
            label: "heading",
            insertText: new vscode.SnippetString(
                "<div class=\"slds-text-${1|heading_large,heading_medium,heading_small|}\">$2</div>",
            ),
            detail: "Heading",
            kind: vscode.CompletionItemKind.Property,
        },
        {
            label: "text",
            insertText: new vscode.SnippetString(
                "<div class=\"slds-text-${1|align_left,align_center,align_right,color_default,color_success,color_weak,color_error,color_inverse,color_inverse-weak|}\">$2</div>",
            ),
            detail: "Text",
            kind: vscode.CompletionItemKind.Property,
        },
        {
            label: "text:left",
            insertText: new vscode.SnippetString(
                "<div class=\"slds-text-align_left\">$1</div>",
            ),
            detail: "Text Left",
            kind: vscode.CompletionItemKind.Property,
        },
        {
            label: "text:center",
            insertText: new vscode.SnippetString(
                "<div class=\"slds-text-align_center\">$1</div>",
            ),
            detail: "Text Center",
            kind: vscode.CompletionItemKind.Property,
        },
        {
            label: "text:right",
            insertText: new vscode.SnippetString(
                "<div class=\"slds-text-align_right\">$1</div>",
            ),
            detail: "Text Right",
            kind: vscode.CompletionItemKind.Property,
        },
        {
            label: "Theme Card: One Column",
            insertText: new vscode.SnippetString(
                "<div class=\"slds-card ${1|slds-theme_default,slds-theme_shade,slds-theme_inverse,slds-theme_alt-inverse,slds-theme_success,slds-theme_info,slds-theme_warning,slds-theme_error,slds-theme_offline,slds-theme_alert-texture slds-theme_shade|}\">\n\t<div class=\"slds-card__body slds-card__body_inner\">\n\t\t<div class=\"slds-grid slds-wrap slds-p-bottom_xx-small\">\n\t\t\t<div class=\"slds-col slds-size_12-of-12 slds-text-heading_small\">\n\t\t\t\t<strong>${2:Label 1}</strong>\n\t\t\t</div>\n\t\t\t<div class=\"slds-col slds-size_12-of-12\">\n\t\t\t\t<lightning-formatted-text class=\"slds-form-element__static\" data-aura-rendered-by=\"1554:0\">\n\t\t\t\t\t${3:Text 1}\n\t\t\t\t</lightning-formatted-text>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"slds-grid slds-wrap\">\n\t\t\t<div class=\"slds-col slds-size_12-of-12 slds-text-heading_small\">\n\t\t\t\t<strong>${4:Label 2}:</strong>\n\t\t\t</div>\n\t\t\t<div class=\"slds-col slds-size_12-of-12\">\n\t\t\t\t<lightning-formatted-rich-text class=\"slds-form-element__static slds-rich-text-editor__output\">\n\t\t\t\t\t${5:Text 2}\n\t\t\t\t</lightning-formatted-rich-text>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>",
            ),
            detail: "Use a color theme to apply color to the background and text. Some color themes apply a background image or texture.",
            kind: vscode.CompletionItemKind.Property,
        },
        {
            label: "Theme Card: Two Columns",
            insertText: new vscode.SnippetString(
                "<div class=\"slds-card ${1|slds-theme_default,slds-theme_shade,slds-theme_inverse,slds-theme_alt-inverse,slds-theme_success,slds-theme_info,slds-theme_warning,slds-theme_error,slds-theme_offline,slds-theme_alert-texture slds-theme_shade|}\">\n\t<div class=\"slds-card__body slds-card__body_inner\">\n\t\t<div class=\"slds-grid slds-wrap slds-p-bottom_xx-small\">\n\t\t\t<div class=\"slds-col slds-size_5-of-12 slds-text-heading_small\">\n\t\t\t\t<strong>${2:Label 1}</strong>\n\t\t\t</div>\n\t\t\t<div class=\"slds-col slds-size_7-of-12\">\n\t\t\t\t<lightning-formatted-text class=\"slds-form-element__static\" data-aura-rendered-by=\"1554:0\">\n\t\t\t\t\t${3:Text 1}\n\t\t\t\t</lightning-formatted-text>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"slds-grid slds-wrap\">\n\t\t\t<div class=\"slds-col slds-size_5-of-12 slds-text-heading_small\">\n\t\t\t\t<strong>${4:Label 2}:</strong>\n\t\t\t</div>\n\t\t\t<div class=\"slds-col slds-size_7-of-12\">\n\t\t\t\t<lightning-formatted-rich-text class=\"slds-form-element__static slds-rich-text-editor__output\">\n\t\t\t\t\t${:Text 2}\n\t\t\t\t</lightning-formatted-rich-text>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>",
            ),
            detail: "Use a color theme to apply color to the background and text. Some color themes apply a background image or texture.",
            kind: vscode.CompletionItemKind.Property,
        },
        {
            label: "Table:2-columns",
            insertText: new vscode.SnippetString(
                "<table class=\"slds-table slds-table_cell-buffer slds-table_bordered\">\n\t<thead>\n\t\t<tr>\n\t\t\t<th scope=\"col\">Column A</th>\n\t\t\t<th scope=\"col\">Column B</th>\n\t\t</tr>\n\t</thead>\n\t<tbody>\n\t\t<tr>\n\t\t\t<td class=\"slds-truncate\">A row 1</td>\n\t\t\t<td class=\"slds-truncate\">B row 1</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td class=\"slds-truncate\">A row 2</td>\n\t\t\t<td class=\"slds-truncate\">B row 2</td>\n\t\t</tr>\n\t</tbody>\n</table>",
            ),
            detail: "Table with 2 columns. Uses automatic column widths based on the content. May overflow from the parent container if it has too many columns",
            kind: vscode.CompletionItemKind.Property,
        },
        {
            label: "Table:3-columns",
            insertText: new vscode.SnippetString(
                "<table class=\"slds-table slds-table_cell-buffer slds-table_bordered\">\n\t<thead>\n\t\t<tr>\n\t\t\t<th scope=\"col\">Column A</th>\n\t\t\t<th scope=\"col\">Column B</th>\n\t\t\t<th scope=\"col\">Column C</th>\n\t\t</tr>\n\t</thead>\n\t<tbody>\n\t\t<tr>\n\t\t\t<td class=\"slds-truncate\">A row 1</td>\n\t\t\t<td class=\"slds-truncate\">B row 1</td>\n\t\t\t<td class=\"slds-truncate\">C row 1</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td class=\"slds-truncate\">A row 2</td>\n\t\t\t<td class=\"slds-truncate\">B row 2</td>\n\t\t\t<td class=\"slds-truncate\">C row 2</td>\n\t\t</tr>\n\t</tbody>\n</table>",
            ),
            detail: "Table with 2 columns. Uses automatic column widths based on the content. May overflow from the parent container if it has too many columns",
            kind: vscode.CompletionItemKind.Property,
        },
        {
            label: "Table:fixed-layout 2-columns",
            insertText: new vscode.SnippetString(
                "<table class=\"slds-table slds-table_cell-buffer slds-table_bordered slds-table-fixed_layout\">\n\t<thead>\n\t\t<tr>\n\t\t\t<th scope=\"col\">Column A</th>\n\t\t\t<th scope=\"col\">Column B</th>\n\t\t</tr>\n\t</thead>\n\t<tbody>\n\t\t<tr>\n\t\t\t<td class=\"slds-truncate\">A row 1</td>\n\t\t\t<td class=\"slds-truncate\">B row 1</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td class=\"slds-truncate\">A row 2</td>\n\t\t\t<td class=\"slds-truncate\">B row 2</td>\n\t\t</tr>\n\t</tbody>\n</table>",
            ),
            detail: "Table with 2 columns. Fixed layout makes sure table fits the parent, but all columns have equal width.",
            kind: vscode.CompletionItemKind.Property,
        },
        {
            label: "Table:fixed-layout 3-columns",
            insertText: new vscode.SnippetString(
                "<table class=\"slds-table slds-table_cell-buffer slds-table_bordered slds-table-fixed_layout\">\n\t<thead>\n\t\t<tr>\n\t\t\t<th scope=\"col\">Column A</th>\n\t\t\t<th scope=\"col\">Column B</th>\n\t\t\t<th scope=\"col\">Column C</th>\n\t\t</tr>\n\t</thead>\n\t<tbody>\n\t\t<tr>\n\t\t\t<td class=\"slds-truncate\">A row 1</td>\n\t\t\t<td class=\"slds-truncate\">B row 1</td>\n\t\t\t<td class=\"slds-truncate\">C row 1</td>\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td class=\"slds-truncate\">A row 2</td>\n\t\t\t<td class=\"slds-truncate\">B row 2</td>\n\t\t\t<td class=\"slds-truncate\">C row 2</td>\n\t\t</tr>\n\t</tbody>\n</table>",
            ),
            detail: "Table with 3 columns. Fixed layout makes sure table fits the parent, but all columns have equal width.",
            kind: vscode.CompletionItemKind.Property,
        }
    ];

    return vscode.languages.registerCompletionItemProvider('html', {
        provideCompletionItems(doc, pos, token, context) {

            var start = new vscode.Position(pos.line, 0);
            var range = new vscode.Range(start, pos);
            var text = doc.getText(range);

            var rawClasses = text.match(/class=["|']([\w- ]*$)/);
            if (rawClasses === null) {
                return htmlSnippets;
            }
        }
    });
    
}