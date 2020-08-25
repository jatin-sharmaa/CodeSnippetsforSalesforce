import * as vscode from 'vscode';
import ADBNTelemetry from '../../helper/telemetry';

export function loadClassesSnippets( context:vscode.ExtensionContext ) {

    let sldsClasses = [
        {
            label: "align_absolute-center",
            insertText: new vscode.SnippetString(
                "slds-align_absolute-center" ,
            ),
            detail: "Class will absolutely center children content (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "text-left",
            insertText: new vscode.SnippetString(
                "slds-text-align_left",
            ),
            detail: "Text Left (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "text-center",
            insertText: new vscode.SnippetString(
                "slds-text-align_center",
            ),
            detail: "Text Center (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "text-right",
            insertText: new vscode.SnippetString(
                "slds-text-align_right",
            ),
            detail: "Text Right (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "border_bottom",
            insertText: new vscode.SnippetString(
                "slds-border_bottom",
            ),
            detail: "Adds a bottom border to an element (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "border_left",
            insertText: new vscode.SnippetString(
                "slds-border_left",
            ),
            detail: "Adds a left border to an element (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "border_right",
            insertText: new vscode.SnippetString(
                "slds-border_right",
            ),
            detail: "Adds a right border to an element (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "border_top",
            insertText: new vscode.SnippetString(
                "slds-border_top",
            ),
            detail: "Adds a top border to an element (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "box",
            insertText: new vscode.SnippetString(
                "slds-box",
            ),
            detail: "Provides 1rem base padding and borders (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "box_x_small",
            insertText: new vscode.SnippetString(
                "slds-box slds-box_x-small",
            ),
            detail: "Provides .5rem base padding and borders (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "box_xx_small",
            insertText: new vscode.SnippetString(
                "slds-box slds-box_xx-small",
            ),
            detail: "Provides .25rem base padding and borders (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "box_shade",
            insertText: new vscode.SnippetString(
                "slds-box slds-theme_shade",
            ),
            detail: "Sets the background color to gray (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "box_inverse",
            insertText: new vscode.SnippetString(
                "slds-box slds-theme_inverse",
            ),
            detail: "Sets the background color to dark blue (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "box_alt-inverse",
            insertText: new vscode.SnippetString(
                "slds-box slds-theme_alt-inverse",
            ),
            detail: "Sets the background color to darker blue (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "box_success",
            insertText: new vscode.SnippetString(
                "slds-box slds-theme_success",
            ),
            detail: "Sets the background color to green (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "box_info",
            insertText: new vscode.SnippetString(
                "slds-box slds-theme_info",
            ),
            detail: "Sets the background color to gray-ish blue (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "box_warning",
            insertText: new vscode.SnippetString(
                "slds-box slds-theme_warning",
            ),
            detail: "Sets the background color to yellow (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "box_error",
            insertText: new vscode.SnippetString(
                "slds-box slds-theme_error",
            ),
            detail: "Sets the background color to red (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "box_offline",
            insertText: new vscode.SnippetString(
                "slds-box slds-theme_offline",
            ),
            detail: "Sets the background color to black (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "box_texture",
            insertText: new vscode.SnippetString(
                "slds-box slds-theme_alert-texture",
            ),
            detail: "Adds striped background (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "float_left",
            insertText: new vscode.SnippetString(
                "slds-float_left",
            ),
            detail: "Pulls element from document flow and floats left. Text and other elements wrap around it. (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "float_none",
            insertText: new vscode.SnippetString(
                "slds-float_none",
            ),
            detail: "Removes float from an element that has attribute already (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "float_right",
            insertText: new vscode.SnippetString(
                "slds-float_right",
            ),
            detail: "Pulls element from document flow and floats right. Text and other elements wrap around it. (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "hide",
            insertText: new vscode.SnippetString(
                "slds-hide",
            ),
            detail: "Hides an element from the page by setting display propery to none (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "show",
            insertText: new vscode.SnippetString(
                "slds-show",
            ),
            detail: "Shows the element by setting display property to block (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "hidden",
            insertText: new vscode.SnippetString(
                "slds-hidden",
            ),
            detail: "Hides an element but reserve the space on the page (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "visible",
            insertText: new vscode.SnippetString(
                "slds-visible",
            ),
            detail: "Shows an element which was hidden by slds-hidden (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "margin:around_none",
            insertText: new vscode.SnippetString(
                "slds-m-around_none",
            ),
            detail: "Removes margin from all sides (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "margin:around_xxx-small",
            insertText: new vscode.SnippetString(
                "slds-m-around_xxx-small",
            ),
            detail: "Adds .125rem margin to all sides (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "margin:around_xx-small",
            insertText: new vscode.SnippetString(
                "slds-m-around_xx-small",
            ),
            detail: "Adds .25rem margin to all sides (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "margin:around_x-small",
            insertText: new vscode.SnippetString(
                "slds-m-around_x-small",
            ),
            detail: "Adds .5rem margin to all sides (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "margin:around_small",
            insertText: new vscode.SnippetString(
                "slds-m-around_small",
            ),
            detail: "Adds .75rem margin to all sides (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "margin:around_medium",
            insertText: new vscode.SnippetString(
                "slds-m-around_medium",
            ),
            detail: "Adds 1rem margin to all sides (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "margin:around_large",
            insertText: new vscode.SnippetString(
                "slds-m-around_large",
            ),
            detail: "Adds 1.5rem margin to all sides (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "margin:around_x-large",
            insertText: new vscode.SnippetString(
                "slds-m-around_x-large",
            ),
            detail: "Adds 2rem margin to all sides (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "margin:around_xx-large",
            insertText: new vscode.SnippetString(
                "slds-m-around_xx-large",
            ),
            detail: "Adds 3rem margin to all sides (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "margin:top_none",
            insertText: new vscode.SnippetString(
                "slds-m-top_none",
            ),
            detail: "Removes margin from top (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "margin:top_xxx-small",
            insertText: new vscode.SnippetString(
                "slds-m-top_xxx-small",
            ),
            detail: "Adds .125rem margin to top (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "margin:top_xx-small",
            insertText: new vscode.SnippetString(
                "slds-m-top_xx-small",
            ),
            detail: "Adds .25rem margin to top (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "margin:top_x-small",
            insertText: new vscode.SnippetString(
                "slds-m-top_x-small",
            ),
            detail: "Adds .5rem margin to top (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "margin:top_small",
            insertText: new vscode.SnippetString(
                "slds-m-top_small",
            ),
            detail: "Adds .75rem margin to top (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "margin:top_medium",
            insertText: new vscode.SnippetString(
                "slds-m-top_medium",
            ),
            detail: "Adds 1rem margin to top (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "margin:top_large",
            insertText: new vscode.SnippetString(
                "slds-m-top_large",
            ),
            detail: "Adds 1.5rem margin to top (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "margin:top_x-large",
            insertText: new vscode.SnippetString(
                "slds-m-top_x-large",
            ),
            detail: "Adds 2rem margin to top (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "margin:top_xx-large",
            insertText: new vscode.SnippetString(
                "slds-m-top_xx-large",
            ),
            detail: "Adds 3rem margin to top (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "margin:left_none",
            insertText: new vscode.SnippetString(
                "slds-m-left_none",
            ),
            detail: "Removes margin from left (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "margin:left_xxx-small",
            insertText: new vscode.SnippetString(
                "slds-m-left_xxx-small",
            ),
            detail: "Adds .125rem margin to left (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "margin:left_xx-small",
            insertText: new vscode.SnippetString(
                "slds-m-left_xx-small",
            ),
            detail: "Adds .25rem margin to left (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "margin:left_x-small",
            insertText: new vscode.SnippetString(
                "slds-m-left_x-small",
            ),
            detail: "Adds .5rem margin to left (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "margin:left_small",
            insertText: new vscode.SnippetString(
                "slds-m-left_small",
            ),
            detail: "Adds .75rem margin to left (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "margin:left_medium",
            insertText: new vscode.SnippetString(
                "slds-m-left_medium",
            ),
            detail: "Adds 1rem margin to left (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "margin:left_large",
            insertText: new vscode.SnippetString(
                "slds-m-left_large",
            ),
            detail: "Adds 1.5rem margin to left (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "margin:left_x-large",
            insertText: new vscode.SnippetString(
                "slds-m-left_x-large",
            ),
            detail: "Adds 2rem margin to left (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "margin:left_xx-large",
            insertText: new vscode.SnippetString(
                "slds-m-left_xx-large",
            ),
            detail: "Adds 3rem margin to left (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "margin:right_none",
            insertText: new vscode.SnippetString(
                "slds-m-right_none",
            ),
            detail: "Removes margin from right (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "margin:right_xxx-small",
            insertText: new vscode.SnippetString(
                "slds-m-right_xxx-small",
            ),
            detail: "Adds .125rem margin to right (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "margin:right_xx-small",
            insertText: new vscode.SnippetString(
                "slds-m-right_xx-small",
            ),
            detail: "Adds .25rem margin to right (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "margin:right_x-small",
            insertText: new vscode.SnippetString(
                "slds-m-right_x-small",
            ),
            detail: "Adds .5rem margin to right (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "margin:right_small",
            insertText: new vscode.SnippetString(
                "slds-m-right_small",
            ),
            detail: "Adds .75rem margin to right (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "margin:right_medium",
            insertText: new vscode.SnippetString(
                "slds-m-right_medium",
            ),
            detail: "Adds 1rem margin to right (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "margin:right_large",
            insertText: new vscode.SnippetString(
                "slds-m-right_large",
            ),
            detail: "Adds 1.5rem margin to right (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "margin:right_x-large",
            insertText: new vscode.SnippetString(
                "slds-m-right_x-large",
            ),
            detail: "Adds 2rem margin to right (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "margin:right_xx-large",
            insertText: new vscode.SnippetString(
                "slds-m-right_xx-large",
            ),
            detail: "Adds 3rem margin to right (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "margin:bottom_none",
            insertText: new vscode.SnippetString(
                "slds-m-bottom_none",
            ),
            detail: "Removes margin from bottom (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "margin:bottom_xxx-small",
            insertText: new vscode.SnippetString(
                "slds-m-bottom_xxx-small",
            ),
            detail: "Adds .125rem margin to bottom (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "margin:bottom_xx-small",
            insertText: new vscode.SnippetString(
                "slds-m-bottom_xx-small",
            ),
            detail: "Adds .25rem margin to bottom (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "margin:bottom_x-small",
            insertText: new vscode.SnippetString(
                "slds-m-bottom_x-small",
            ),
            detail: "Adds .5rem margin to bottom (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "margin:bottom_small",
            insertText: new vscode.SnippetString(
                "slds-m-bottom_small",
            ),
            detail: "Adds .75rem margin to bottom (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "margin:bottom_medium",
            insertText: new vscode.SnippetString(
                "slds-m-bottom_medium",
            ),
            detail: "Adds 1rem margin to bottom (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "margin:bottom_large",
            insertText: new vscode.SnippetString(
                "slds-m-bottom_large",
            ),
            detail: "Adds 1.5rem margin to bottom (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "margin:bottom_x-large",
            insertText: new vscode.SnippetString(
                "slds-m-bottom_x-large",
            ),
            detail: "Adds 2rem margin to bottom (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "margin:bottom_xx-large",
            insertText: new vscode.SnippetString(
                "slds-m-bottom_xx-large",
            ),
            detail: "Adds 3rem margin to bottom (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "margin:vertical_none",
            insertText: new vscode.SnippetString(
                "slds-m-vertical_none",
            ),
            detail: "Removes margin from top and bottom (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "margin:vertical_xxx-small",
            insertText: new vscode.SnippetString(
                "slds-m-vertical_xxx-small",
            ),
            detail: "Adds .125rem margin to top and bottom (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "margin:vertical_xx-small",
            insertText: new vscode.SnippetString(
                "slds-m-vertical_xx-small",
            ),
            detail: "Adds .25rem margin to top and bottom (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "margin:vertical_x-small",
            insertText: new vscode.SnippetString(
                "slds-m-vertical_x-small",
            ),
            detail: "Adds .5rem margin to top and bottom (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "margin:vertical_small",
            insertText: new vscode.SnippetString(
                "slds-m-vertical_small",
            ),
            detail: "Adds .75rem margin to top and bottom (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "margin:vertical_medium",
            insertText: new vscode.SnippetString(
                "slds-m-vertical_medium",
            ),
            detail: "Adds 1rem margin to top and bottom (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "margin:vertical_large",
            insertText: new vscode.SnippetString(
                "slds-m-vertical_large",
            ),
            detail: "Adds 1.5rem margin to top and bottom (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "margin:vertical_x-large",
            insertText: new vscode.SnippetString(
                "slds-m-vertical_x-large",
            ),
            detail: "Adds 2rem margin to top and bottom (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "margin:vertical_xx-large",
            insertText: new vscode.SnippetString(
                "slds-m-vertical_xx-large",
            ),
            detail: "Adds 3rem margin to top and bottom (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "margin:horizontal_none",
            insertText: new vscode.SnippetString(
                "slds-m-horizontal_none",
            ),
            detail: "Removes margin from left and right (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "margin:horizontal_xxx-small",
            insertText: new vscode.SnippetString(
                "slds-m-horizontal_xxx-small",
            ),
            detail: "Adds .125rem margin to left and right (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "margin:horizontal_xx-small",
            insertText: new vscode.SnippetString(
                "slds-m-horizontal_xx-small",
            ),
            detail: "Adds .25rem margin to left and right (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "margin:horizontal_x-small",
            insertText: new vscode.SnippetString(
                "slds-m-horizontal_x-small",
            ),
            detail: "Adds .5rem margin to left and right (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "margin:horizontal_small",
            insertText: new vscode.SnippetString(
                "slds-m-horizontal_small",
            ),
            detail: "Adds .75rem margin to left and right (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "margin:horizontal_medium",
            insertText: new vscode.SnippetString(
                "slds-m-horizontal_medium",
            ),
            detail: "Adds 1rem margin to left and right (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "margin:horizontal_large",
            insertText: new vscode.SnippetString(
                "slds-m-horizontal_large",
            ),
            detail: "Adds 1.5rem margin to left and right (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "margin:horizontal_x-large",
            insertText: new vscode.SnippetString(
                "slds-m-horizontal_x-large",
            ),
            detail: "Adds 2rem margin to left and right (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "margin:horizontal_xx-large",
            insertText: new vscode.SnippetString(
                "slds-m-horizontal_xx-large",
            ),
            detail: "Adds 3rem margin to left and right (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "padding:around_none",
            insertText: new vscode.SnippetString(
                "slds-p-around_none",
            ),
            detail: "Removes padding from all sides (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "padding:around_xxx-small",
            insertText: new vscode.SnippetString(
                "slds-p-around_xxx-small",
            ),
            detail: "Adds .125rem padding to all sides (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "padding:around_xx-small",
            insertText: new vscode.SnippetString(
                "slds-p-around_xx-small",
            ),
            detail: "Adds .25rem padding to all sides (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "padding:around_x-small",
            insertText: new vscode.SnippetString(
                "slds-p-around_x-small",
            ),
            detail: "Adds .5rem padding to all sides (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "padding:around_small",
            insertText: new vscode.SnippetString(
                "slds-p-around_small",
            ),
            detail: "Adds .75rem padding to all sides (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "padding:around_medium",
            insertText: new vscode.SnippetString(
                "slds-p-around_medium",
            ),
            detail: "Adds 1rem padding to all sides (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "padding:around_large",
            insertText: new vscode.SnippetString(
                "slds-p-around_large",
            ),
            detail: "Adds 1.5rem padding to all sides (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "padding:around_x-large",
            insertText: new vscode.SnippetString(
                "slds-p-around_x-large",
            ),
            detail: "Adds 2rem padding to all sides (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "padding:around_xx-large",
            insertText: new vscode.SnippetString(
                "slds-p-around_xx-large",
            ),
            detail: "Adds 3rem padding to all sides (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "padding:top_none",
            insertText: new vscode.SnippetString(
                "slds-p-top_none",
            ),
            detail: "Removes padding from top (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "padding:top_xxx-small",
            insertText: new vscode.SnippetString(
                "slds-p-top_xxx-small",
            ),
            detail: "Adds .125rem padding to top (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "padding:top_xx-small",
            insertText: new vscode.SnippetString(
                "slds-p-top_xx-small",
            ),
            detail: "Adds .25rem padding to top (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "padding:top_x-small",
            insertText: new vscode.SnippetString(
                "slds-p-top_x-small",
            ),
            detail: "Adds .5rem padding to top (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "padding:top_small",
            insertText: new vscode.SnippetString(
                "slds-p-top_small",
            ),
            detail: "Adds .75rem padding to top (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "padding:top_medium",
            insertText: new vscode.SnippetString(
                "slds-p-top_medium",
            ),
            detail: "Adds 1rem padding to top (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "padding:top_large",
            insertText: new vscode.SnippetString(
                "slds-p-top_large",
            ),
            detail: "Adds 1.5rem padding to top (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "padding:top_x-large",
            insertText: new vscode.SnippetString(
                "slds-p-top_x-large",
            ),
            detail: "Adds 2rem padding to top (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "padding:top_xx-large",
            insertText: new vscode.SnippetString(
                "slds-p-top_xx-large",
            ),
            detail: "Adds 3rem padding to top (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "padding:left_none",
            insertText: new vscode.SnippetString(
                "slds-p-left_none",
            ),
            detail: "Removes padding from left (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "padding:left_xxx-small",
            insertText: new vscode.SnippetString(
                "slds-p-left_xxx-small",
            ),
            detail: "Adds .125rem padding to left (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "padding:left_xx-small",
            insertText: new vscode.SnippetString(
                "slds-p-left_xx-small",
            ),
            detail: "Adds .25rem padding to left (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "padding:left_x-small",
            insertText: new vscode.SnippetString(
                "slds-p-left_x-small",
            ),
            detail: "Adds .5rem padding to left (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "padding:left_small",
            insertText: new vscode.SnippetString(
                "slds-p-left_small",
            ),
            detail: "Adds .75rem padding to left (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "padding:left_medium",
            insertText: new vscode.SnippetString(
                "slds-p-left_medium",
            ),
            detail: "Adds 1rem padding to left (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "padding:left_large",
            insertText: new vscode.SnippetString(
                "slds-p-left_large",
            ),
            detail: "Adds 1.5rem padding to left (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "padding:left_x-large",
            insertText: new vscode.SnippetString(
                "slds-p-left_x-large",
            ),
            detail: "Adds 2rem padding to left (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "padding:left_xx-large",
            insertText: new vscode.SnippetString(
                "slds-p-left_xx-large",
            ),
            detail: "Adds 3rem padding to left (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "padding:right_none",
            insertText: new vscode.SnippetString(
                "slds-p-right_none",
            ),
            detail: "Removes padding from right (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "padding:right_xxx-small",
            insertText: new vscode.SnippetString(
                "slds-p-right_xxx-small",
            ),
            detail: "Adds .125rem padding to right (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "padding:right_xx-small",
            insertText: new vscode.SnippetString(
                "slds-p-right_xx-small",
            ),
            detail: "Adds .25rem padding to right (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "padding:right_x-small",
            insertText: new vscode.SnippetString(
                "slds-p-right_x-small",
            ),
            detail: "Adds .5rem padding to right (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "padding:right_small",
            insertText: new vscode.SnippetString(
                "slds-p-right_small",
            ),
            detail: "Adds .75rem padding to right (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "padding:right_medium",
            insertText: new vscode.SnippetString(
                "slds-p-right_medium",
            ),
            detail: "Adds 1rem padding to right (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "padding:right_large",
            insertText: new vscode.SnippetString(
                "slds-p-right_large",
            ),
            detail: "Adds 1.5rem padding to right (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "padding:right_x-large",
            insertText: new vscode.SnippetString(
                "slds-p-right_x-large",
            ),
            detail: "Adds 2rem padding to right (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "padding:right_xx-large",
            insertText: new vscode.SnippetString(
                "slds-p-right_xx-large",
            ),
            detail: "Adds 3rem padding to right (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "padding:bottom_none",
            insertText: new vscode.SnippetString(
                "slds-p-bottom_none",
            ),
            detail: "Removes padding from bottom (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "padding:bottom_xxx-small",
            insertText: new vscode.SnippetString(
                "slds-p-bottom_xxx-small",
            ),
            detail: "Adds .125rem padding to bottom (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "padding:bottom_xx-small",
            insertText: new vscode.SnippetString(
                "slds-p-bottom_xx-small",
            ),
            detail: "Adds .25rem padding to bottom (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "padding:bottom_x-small",
            insertText: new vscode.SnippetString(
                "slds-p-bottom_x-small",
            ),
            detail: "Adds .5rem padding to bottom (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "padding:bottom_small",
            insertText: new vscode.SnippetString(
                "slds-p-bottom_small",
            ),
            detail: "Adds .75rem padding to bottom (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "padding:bottom_medium",
            insertText: new vscode.SnippetString(
                "slds-p-bottom_medium",
            ),
            detail: "Adds 1rem padding to bottom (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "padding:bottom_large",
            insertText: new vscode.SnippetString(
                "slds-p-bottom_large",
            ),
            detail: "Adds 1.5rem padding to bottom (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "padding:bottom_x-large",
            insertText: new vscode.SnippetString(
                "slds-p-bottom_x-large",
            ),
            detail: "Adds 2rem padding to bottom (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "padding:bottom_xx-large",
            insertText: new vscode.SnippetString(
                "slds-p-bottom_xx-large",
            ),
            detail: "Adds 3rem padding to bottom (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "padding:vertical_none",
            insertText: new vscode.SnippetString(
                "slds-p-vertical_none",
            ),
            detail: "Removes padding from top and bottom (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "padding:vertical_xxx-small",
            insertText: new vscode.SnippetString(
                "slds-p-vertical_xxx-small",
            ),
            detail: "Adds .125rem padding to top and bottom (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "padding:vertical_xx-small",
            insertText: new vscode.SnippetString(
                "slds-p-vertical_xx-small",
            ),
            detail: "Adds .25rem padding to top and bottom (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "padding:vertical_x-small",
            insertText: new vscode.SnippetString(
                "slds-p-vertical_x-small",
            ),
            detail: "Adds .5rem padding to top and bottom (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "padding:vertical_small",
            insertText: new vscode.SnippetString(
                "slds-p-vertical_small",
            ),
            detail: "Adds .75rem padding to top and bottom (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "padding:vertical_medium",
            insertText: new vscode.SnippetString(
                "slds-p-vertical_medium",
            ),
            detail: "Adds 1rem padding to top and bottom (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "padding:vertical_large",
            insertText: new vscode.SnippetString(
                "slds-p-vertical_large",
            ),
            detail: "Adds 1.5rem padding to top and bottom (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "padding:vertical_x-large",
            insertText: new vscode.SnippetString(
                "slds-p-vertical_x-large",
            ),
            detail: "Adds 2rem padding to top and bottom (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "padding:vertical_xx-large",
            insertText: new vscode.SnippetString(
                "slds-p-vertical_xx-large",
            ),
            detail: "Adds 3rem padding to top and bottom (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "padding:horizontal_none",
            insertText: new vscode.SnippetString(
                "slds-p-horizontal_none",
            ),
            detail: "Removes padding from left and right (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "padding:horizontal_xxx-small",
            insertText: new vscode.SnippetString(
                "slds-p-horizontal_xxx-small",
            ),
            detail: "Adds .125rem padding to left and right (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "padding:horizontal_xx-small",
            insertText: new vscode.SnippetString(
                "slds-p-horizontal_xx-small",
            ),
            detail: "Adds .25rem padding to left and right (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "padding:horizontal_x-small",
            insertText: new vscode.SnippetString(
                "slds-p-horizontal_x-small",
            ),
            detail: "Adds .5rem padding to left and right (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "padding:horizontal_small",
            insertText: new vscode.SnippetString(
                "slds-p-horizontal_small",
            ),
            detail: "Adds .75rem padding to left and right (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "padding:horizontal_medium",
            insertText: new vscode.SnippetString(
                "slds-p-horizontal_medium",
            ),
            detail: "Adds 1rem padding to left and right (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "padding:horizontal_large",
            insertText: new vscode.SnippetString(
                "slds-p-horizontal_large",
            ),
            detail: "Adds 1.5rem padding to left and right (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "padding:horizontal_x-large",
            insertText: new vscode.SnippetString(
                "slds-p-horizontal_x-large",
            ),
            detail: "Adds 2rem padding to left and right (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "padding:horizontal_xx-large",
            insertText: new vscode.SnippetString(
                "slds-p-horizontal_xx-large",
            ),
            detail: "Adds 3rem padding to left and right (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "truncate",
            insertText: new vscode.SnippetString(
                "slds-truncate",
            ),
            detail: "Truncates text (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-col",
            insertText: new vscode.SnippetString(
                "slds-col",
            ),
            detail: "Initializes a grid column (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-grid",
            insertText: new vscode.SnippetString(
                "slds-grid",
            ),
            detail: "Initializes grid (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-grid_align-center",
            insertText: new vscode.SnippetString(
                "slds-grid_align-center",
            ),
            detail: "Columns align in the center to the main axis and expand in each direction (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-grid_align-space",
            insertText: new vscode.SnippetString(
                "slds-grid_align-space",
            ),
            detail: "Columns are evenly distributed with equal space around them all (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-grid_align-spread",
            insertText: new vscode.SnippetString(
                "slds-grid_align-spread",
            ),
            detail: "Columns align to the left and right followed by center. Space is equal between them (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-grid_align-end",
            insertText: new vscode.SnippetString(
                "slds-grid_align-end",
            ),
            detail: "Columns start on the opposite end of the grid's main axis (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-grid_vertical-align-start",
            insertText: new vscode.SnippetString(
                "slds-grid_vertical-align-start",
            ),
            detail: "Columns start at the beginning of the grid's cross axis (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-grid_vertical-align-center",
            insertText: new vscode.SnippetString(
                "slds-grid_vertical-align-center",
            ),
            detail: "Columns align in the center to the cross axis and expand it each direction (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-grid_vertical-align-end",
            insertText: new vscode.SnippetString(
                "slds-grid_vertical-align-end",
            ),
            detail: "Columns start on the opposite end of the grid's cross axis (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-grid_vertical-stretch",
            insertText: new vscode.SnippetString(
                "slds-grid_vertical-stretch",
            ),
            detail: "Stretch the grid items for both single row and multi-line rows to fill the height of the parent grid container (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-gutters",
            insertText: new vscode.SnippetString(
                "slds-gutters",
            ),
            detail: "Apply 12px gutters to each grid column when you add this class to an `slds-grid` element (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-hyphenate",
            insertText: new vscode.SnippetString(
                "slds-hyphenate",
            ),
            detail: "The truncation class can be used on an element, or the truncation include can be added to an existing class. (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-is-collapsed",
            insertText: new vscode.SnippetString(
                "slds-is-collapsed",
            ),
            detail: "Hides elements inside a parent (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-is-expanded",
            insertText: new vscode.SnippetString(
                "slds-is-expanded",
            ),
            detail: "Shows the elements inside the parent (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-is-static",
            insertText: new vscode.SnippetString(
                "slds-is-static",
            ),
            detail: "Reset positioning back to normal behavior (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-is-relative",
            insertText: new vscode.SnippetString(
                "slds-is-relative",
            ),
            detail: "Used to contain children if children are absolutely positioned and out of flow. Also used to position element without changing layout. (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-is-fixed",
            insertText: new vscode.SnippetString(
                "slds-is-fixed",
            ),
            detail: "Used to position an element relative to the viewport. (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-is-absolute",
            insertText: new vscode.SnippetString(
                "slds-is-absolute",
            ),
            detail: "Used to position an element relative to its closest ancestor with relative positioning. (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-no-flex",
            insertText: new vscode.SnippetString(
                "slds-no-flex",
            ),
            detail: "Removes flexbox from grid column (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-no-space",
            insertText: new vscode.SnippetString(
                "slds-no-space",
            ),
            detail: "Sets the column to a min-width of 0 (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-nowrap",
            insertText: new vscode.SnippetString(
                "slds-nowrap",
            ),
            detail: "Keeps columns on one line. Allows columns to stretch and fill 100% of the parent’s width and height. (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-text-body_regular",
            insertText: new vscode.SnippetString(
                "slds-text-body_regular",
            ),
            detail: "Creates the 13px regular body copy (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-text-body_small",
            insertText: new vscode.SnippetString(
                "slds-text-body_small",
            ),
            detail: "Creates a more pale-colored 12px copy (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-text-color_default",
            insertText: new vscode.SnippetString(
                "slds-text-color_default",
            ),
            detail: "Default color of text (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-text-color_weak",
            insertText: new vscode.SnippetString(
                "slds-text-color_weak",
            ),
            detail: "Weak color of text (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-text-color_error",
            insertText: new vscode.SnippetString(
                "slds-text-color_error",
            ),
            detail: "Error color of text (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-text-color_destructive",
            insertText: new vscode.SnippetString(
                "slds-text-color_destructive",
            ),
            detail: "Color of text for destructive actions (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-text-color_success",
            insertText: new vscode.SnippetString(
                "slds-text-color_success",
            ),
            detail: "Success color of text (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-text-color_inverse",
            insertText: new vscode.SnippetString(
                "slds-text-color_inverse",
            ),
            detail: "Default color of text on inversed background (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-text-color_inverse-weak",
            insertText: new vscode.SnippetString(
                "slds-text-color_inverse-weak",
            ),
            detail: "Weak color of text on inversed background (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-text-heading_large",
            insertText: new vscode.SnippetString(
                "slds-text-heading_large",
            ),
            detail: "Very large 28px heading (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-text-heading_medium",
            insertText: new vscode.SnippetString(
                "slds-text-heading_medium",
            ),
            detail: "Large 20px heading (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-text-heading_small",
            insertText: new vscode.SnippetString(
                "slds-text-heading_small",
            ),
            detail: "Smaller 16px heading (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-theme_default",
            insertText: new vscode.SnippetString(
                "slds-theme_default",
            ),
            detail: "Sets the background color to white (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-theme_shade",
            insertText: new vscode.SnippetString(
                "slds-theme_shade",
            ),
            detail: "Sets the background color to gray (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-theme_inverse",
            insertText: new vscode.SnippetString(
                "slds-theme_inverse",
            ),
            detail: "Sets the background color to dark blue (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-theme_alt-inverse",
            insertText: new vscode.SnippetString(
                "slds-theme_alt-inverse",
            ),
            detail: "Sets the background color to darker blue (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-theme_success",
            insertText: new vscode.SnippetString(
                "slds-theme_success",
            ),
            detail: "Sets the background color to green (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-theme_info",
            insertText: new vscode.SnippetString(
                "slds-theme_info",
            ),
            detail: "Sets the background color to gray-ish blue (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-theme_warning",
            insertText: new vscode.SnippetString(
                "slds-theme_warning",
            ),
            detail: "Sets the background color to yellow (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-theme_error",
            insertText: new vscode.SnippetString(
                "slds-theme_error",
            ),
            detail: "Sets the background color to red (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-theme_offline",
            insertText: new vscode.SnippetString(
                "slds-theme_offline",
            ),
            detail: "Sets the background color to black (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-theme_alert-texture",
            insertText: new vscode.SnippetString(
                "slds-theme_alert-texture",
            ),
            detail: "Adds striped background (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-wrap",
            insertText: new vscode.SnippetString(
                "slds-wrap",
            ),
            detail: "Allows columns to wrap when they exceed 100% of their parent’s width (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-table",
            insertText: new vscode.SnippetString(
                "slds-table",
            ),
            detail: "Initializes data table (Salesforce Code Snippets)",
            documentation: "Can be used on table",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-no-row-hover",
            insertText: new vscode.SnippetString(
                "slds-no-row-hover",
            ),
            detail: "Default Table Row Hover (Salesforce Code Snippets)",
            documentation: "Can be used with .slds-table",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-is-selected",
            insertText: new vscode.SnippetString(
                "slds-is-selected",
            ),
            detail: "Selected Table Row + Hover (Salesforce Code Snippets)",
            documentation: "Can be used on .slds-table tr",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-cell-wrap",
            insertText: new vscode.SnippetString(
                "slds-cell-wrap",
            ),
            detail: "By default, nowrap is applied (Salesforce Code Snippets)",
            documentation: "Can be used on .slds-table th, .slds-table td",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-cell-buffer_left",
            insertText: new vscode.SnippetString(
                "slds-cell-buffer_left",
            ),
            detail: "Use to add a left padding buffer to cells (Salesforce Code Snippets)",
            documentation: "Can be used on .slds-table th, .slds-table td",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-cell-buffer_right",
            insertText: new vscode.SnippetString(
                "slds-cell-buffer_right",
            ),
            detail: "Use to add a right padding buffer to cells (Salesforce Code Snippets)",
            documentation: "Can be used on .slds-table th, .slds-table td",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-table_cell-buffer",
            insertText: new vscode.SnippetString(
                "slds-table_cell-buffer",
            ),
            detail: "Add left and right padding to the first and last cells of a table (Salesforce Code Snippets)",
            documentation: "Can be used with .slds-table",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-table_bordered",
            insertText: new vscode.SnippetString(
                "slds-table_bordered",
            ),
            detail: "Add vertical borders to a table (Salesforce Code Snippets)",
            documentation: "Can be used with .slds-table",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-has-focus",
            insertText: new vscode.SnippetString(
                "slds-has-focus",
            ),
            detail: "Focus state on a cell (Salesforce Code Snippets)",
            documentation: "Can be on .slds-table th, .slds-table td",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-table_bordered",
            insertText: new vscode.SnippetString(
                "slds-table_bordered",
            ),
            detail: "Add vertical borders to a table (Salesforce Code Snippets)",
            documentation: "Can be used with .slds-table",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-table_col-bordered",
            insertText: new vscode.SnippetString(
                "slds-table_col-bordered",
            ),
            detail: "Add column borders (Salesforce Code Snippets)",
            documentation: "Can be used with .slds-table",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-table_striped",
            insertText: new vscode.SnippetString(
                "slds-table_striped",
            ),
            detail: "Add alternating strips to rows (Salesforce Code Snippets)",
            documentation: "Can be used with .slds-table",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-table_fixed-layout",
            insertText: new vscode.SnippetString(
                "slds-table_fixed-layout",
            ),
            detail: "Set table to use fixed layout for width and truncation purposes (Salesforce Code Snippets)",
            documentation: "Can be used with .slds-table",
            kind: vscode.CompletionItemKind.Class,
        },
    ];

    return vscode.languages.registerCompletionItemProvider('html', {
        provideCompletionItems(doc, pos, token, context) {

            var start = new vscode.Position(pos.line, 0);
            var range = new vscode.Range(start, pos);
            var text = doc.getText(range);

            var rawClasses = text.match(/class=["|']([\w- ]*$)/);
            if (rawClasses === null) {
                return [];
            } else {
                return sldsClasses;
            }
        },
        resolveCompletionItem(item) {
            let tele = new ADBNTelemetry( context );
            tele.sendAdbnTelementry('lang_usage', {"language": "Classes"}, { 'lang_count': 1});
            tele.sendAdbnTelementry('htmlClasses', {"classes": item.label}, { 'count': 1});
            return item;
        }
    });

    
}