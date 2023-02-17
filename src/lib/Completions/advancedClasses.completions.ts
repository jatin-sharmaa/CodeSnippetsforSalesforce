import * as vscode from 'vscode';

export function loadAdvancedClassesSnippets( context:vscode.ExtensionContext ) {

    let sldsClasses = [
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
            label: "slds-col_bump-top",
            insertText: new vscode.SnippetString(
                "slds-col_bump-top",
            ),
            detail: "Bumps grid item(s) away from the other grid items to sit at the top, taking up the remaining white-space of the grid container Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-col_bump-right",
            insertText: new vscode.SnippetString(
                "slds-col_bump-right",
            ),
            detail: "Bumps grid item(s) away from the other grid items to sit to the right, taking up the remaining white-space of the grid container Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-col_bump-bottom",
            insertText: new vscode.SnippetString(
                "slds-col_bump-bottom",
            ),
            detail: "Bumps grid item(s) away from the other grid items to sit at the bottom, taking up the remaining white-space of the grid container Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-col_bump-left",
            insertText: new vscode.SnippetString(
                "slds-col_bump-left",
            ),
            detail: "Bumps grid item(s) away from the other grid items to sit to the left, taking up the remaining white-space of the grid container Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-container_small",
            insertText: new vscode.SnippetString(
                "slds-container_small",
            ),
            detail: "Restrict width of containers to a maximum of 480px",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-container_medium",
            insertText: new vscode.SnippetString(
                "slds-container_medium",
            ),
            detail: "Restrict width of containers to a maximum of 768px",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-container_large",
            insertText: new vscode.SnippetString(
                "slds-container_large",
            ),
            detail: "Restrict width of containers to a maximum of 1024px",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-container_x-large",
            insertText: new vscode.SnippetString(
                "slds-container_x-large",
            ),
            detail: "Restrict width of containers to a maximum of 1280px",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-container_fluid",
            insertText: new vscode.SnippetString(
                "slds-container_fluid",
            ),
            detail: "Width of container takes up 100% of viewport",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-container_center",
            insertText: new vscode.SnippetString(
                "slds-container_center",
            ),
            detail: "Horizontally positions containers in the center of the viewport",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-container_left",
            insertText: new vscode.SnippetString(
                "slds-container_left",
            ),
            detail: "Horizontally positions containers to the left of the viewport",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-container_right",
            insertText: new vscode.SnippetString(
                "slds-container_right",
            ),
            detail: "Horizontally positions containers to the right of the viewport",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-dl_inline",
            insertText: new vscode.SnippetString(
                "slds-dl_inline",
            ),
            detail: "Causes description list to display horizontally with `dt` followed immediately by the `dd`.",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-dl_inline__label",
            insertText: new vscode.SnippetString(
                "slds-dl_inline__label",
            ),
            detail: "Marks a term",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-dl_inline__detail",
            insertText: new vscode.SnippetString(
                "slds-dl_inline__detail",
            ),
            detail: "Marks a description",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-dl_horizontal",
            insertText: new vscode.SnippetString(
                "slds-dl_horizontal",
            ),
            detail: "Causes description list to display horizontally with `dt` consuming 33% of the space and the `dd` taking up the rest. Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-dl_horizontal__label",
            insertText: new vscode.SnippetString(
                "slds-dl_horizontal__label",
            ),
            detail: "Marks a term",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-dl_horizontal__detail",
            insertText: new vscode.SnippetString(
                "slds-dl_horizontal__detail",
            ),
            detail: "Marks a description",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-grid_frame",
            insertText: new vscode.SnippetString(
                "slds-grid_frame",
            ),
            detail: "Initializes grid",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-grid_vertical",
            insertText: new vscode.SnippetString(
                "slds-grid_vertical",
            ),
            detail: "Initializes grid",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-grid_vertical-reverse",
            insertText: new vscode.SnippetString(
                "slds-grid_vertical-reverse",
            ),
            detail: "Initializes grid",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-grid_reverse",
            insertText: new vscode.SnippetString(
                "slds-grid_reverse",
            ),
            detail: "Initializes grid",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-grid_pull-padded",
            insertText: new vscode.SnippetString(
                "slds-grid_pull-padded",
            ),
            detail: "Normalizes the 0.75rem of padding when nesting a grid in a region with `.slds-p-horizontal_small`",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-grid_pull-padded-xxx-small",
            insertText: new vscode.SnippetString(
                "slds-grid_pull-padded-xxx-small",
            ),
            detail: "Normalizes the 0.125rem of padding when nesting a grid in a region with `.slds-p-horizontal_xxx-small`",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-grid_pull-padded-xx-small",
            insertText: new vscode.SnippetString(
                "slds-grid_pull-padded-xx-small",
            ),
            detail: "Normalizes the 0.25rem of padding when nesting a grid in a region with `.slds-p-horizontal_xx-small`",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-grid_pull-padded-x-small",
            insertText: new vscode.SnippetString(
                "slds-grid_pull-padded-x-small",
            ),
            detail: "Normalizes the 0.5rem of padding when nesting a grid in a region with `.slds-p-horizontal_x-small`",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-grid_pull-padded-small",
            insertText: new vscode.SnippetString(
                "slds-grid_pull-padded-small",
            ),
            detail: "Normalizes the 0.75rem of padding when nesting a grid in a region with `.slds-p-horizontal_small`",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-grid_pull-padded-medium",
            insertText: new vscode.SnippetString(
                "slds-grid_pull-padded-medium",
            ),
            detail: "Normalizes the 1rem of padding when nesting a grid in a region with `.slds-p-horizontal_medium`",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-grid_pull-padded-large",
            insertText: new vscode.SnippetString(
                "slds-grid_pull-padded-large",
            ),
            detail: "Normalizes the 1.5rem of padding when nesting a grid in a region with `.slds-p-horizontal_large`",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-grid_pull-padded-x-large",
            insertText: new vscode.SnippetString(
                "slds-grid_pull-padded-x-large",
            ),
            detail: "Normalizes the 1.5rem of padding when nesting a grid in a region with `.slds-p-horizontal_x-large`",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-grid_pull-padded-xx-large",
            insertText: new vscode.SnippetString(
                "slds-grid_pull-padded-xx-large",
            ),
            detail: "Normalizes the 1.5rem of padding when nesting a grid in a region with `.slds-p-horizontal_xx-large`",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-grow",
            insertText: new vscode.SnippetString(
                "slds-grow",
            ),
            detail: "Allows column to grow to children’s content",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-grow-none",
            insertText: new vscode.SnippetString(
                "slds-grow-none",
            ),
            detail: "Prevents column from growing to children’s content",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-gutters_xxx-small",
            insertText: new vscode.SnippetString(
                "slds-gutters_xxx-small",
            ),
            detail: "Apply 2px gutters to each grid column when you add this class to an `slds-grid` element",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-gutters_xx-small",
            insertText: new vscode.SnippetString(
                "slds-gutters_xx-small",
            ),
            detail: "Apply 4px gutters to each grid column when you add this class to an `slds-grid` element",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-gutters_x-small",
            insertText: new vscode.SnippetString(
                "slds-gutters_x-small",
            ),
            detail: "Apply 8px gutters to each grid column when you add this class to an `slds-grid` element",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-gutters_small",
            insertText: new vscode.SnippetString(
                "slds-gutters_small",
            ),
            detail: "Apply 12px gutters to each grid column when you add this class to an `slds-grid` element",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-gutters_medium",
            insertText: new vscode.SnippetString(
                "slds-gutters_medium",
            ),
            detail: "Apply 16px gutters to each grid column when you add this class to an `slds-grid` element",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-gutters_large",
            insertText: new vscode.SnippetString(
                "slds-gutters_large",
            ),
            detail: "Apply 24px gutters to each grid column when you add this class to an `slds-grid` element",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-gutters_x-large",
            insertText: new vscode.SnippetString(
                "slds-gutters_x-large",
            ),
            detail: "Apply 32px gutters to each grid column when you add this class to an `slds-grid` element",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-gutters_xx-large",
            insertText: new vscode.SnippetString(
                "slds-gutters_xx-large",
            ),
            detail: "Apply 48px gutters to each grid column when you add this class to an `slds-grid` element",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-gutters_direct",
            insertText: new vscode.SnippetString(
                "slds-gutters_direct",
            ),
            detail: "Apply 12px gutters to only direct column children when you add this class to an `slds-grid` element",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-gutters_direct-xxx-small",
            insertText: new vscode.SnippetString(
                "slds-gutters_direct-xxx-small",
            ),
            detail: "Apply 2px gutters to only direct column children when you add this class to an `slds-grid` element",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-gutters_direct-xx-small",
            insertText: new vscode.SnippetString(
                "slds-gutters_direct-xx-small",
            ),
            detail: "Apply 4px gutters to only direct column children when you add this class to an `slds-grid` element",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-gutters_direct-x-small",
            insertText: new vscode.SnippetString(
                "slds-gutters_direct-x-small",
            ),
            detail: "Apply 8px gutters to only direct column children when you add this class to an `slds-grid` element",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-gutters_direct-small",
            insertText: new vscode.SnippetString(
                "slds-gutters_direct-small",
            ),
            detail: "Apply 12px gutters to only direct column children when you add this class to an `slds-grid` element",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-gutters_direct-medium",
            insertText: new vscode.SnippetString(
                "slds-gutters_direct-medium",
            ),
            detail: "Apply 16px gutters to only direct column children when you add this class to an `slds-grid` element",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-gutters_direct-large",
            insertText: new vscode.SnippetString(
                "slds-gutters_direct-large",
            ),
            detail: "Apply 24px gutters to only direct column children when you add this class to an `slds-grid` element",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-gutters_direct-x-large",
            insertText: new vscode.SnippetString(
                "slds-gutters_direct-x-large",
            ),
            detail: "Apply 32px gutters to only direct column children when you add this class to an `slds-grid` element",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-gutters_direct-xx-large",
            insertText: new vscode.SnippetString(
                "slds-gutters_direct-xx-large",
            ),
            detail: "Apply 48px gutters to only direct column children when you add this class to an `slds-grid` element",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-has-flexi-truncate",
            insertText: new vscode.SnippetString(
                "slds-has-flexi-truncate",
            ),
            detail: "Needed when truncation is nested in a flexible container in a grid",
            kind: vscode.CompletionItemKind.Class,
        },
        
        {
            label: "slds-is-nested",
            insertText: new vscode.SnippetString(
                "slds-is-nested",
            ),
            detail: "Provides styles for a nested lists",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-is-visually-empty",
            insertText: new vscode.SnippetString(
                "slds-is-visually-empty",
            ),
            detail: "Hides element and removes width",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-item_label",
            insertText: new vscode.SnippetString(
                "slds-item_label",
            ),
            detail: "Label of the name-value pair variant. Layout is modified by its parent class.",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-item_detail",
            insertText: new vscode.SnippetString(
                "slds-item_detail",
            ),
            detail: "Label of the name-value pair variant. Layout is modified by its parent class.",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-list_horizontal",
            insertText: new vscode.SnippetString(
                "slds-list_horizontal",
            ),
            detail: "Causes items of a list to display horizontally",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-list_vertical-space",
            insertText: new vscode.SnippetString(
                "slds-list_vertical-space",
            ),
            detail: "Marks a vertical list with .5rem spacing around",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-list_vertical-space-medium",
            insertText: new vscode.SnippetString(
                "slds-list_vertical-space-medium",
            ),
            detail: "Marks a vertical list with 1rem spacing around",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-media__figure",
            insertText: new vscode.SnippetString(
                "slds-media__figure",
            ),
            detail: "Defines the figure area",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-media__body",
            insertText: new vscode.SnippetString(
                "slds-media__body",
            ),
            detail: "Defines the body area",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-media_small",
            insertText: new vscode.SnippetString(
                "slds-media_small",
            ),
            detail: "Adjusts whitespace on smaller media objects",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-media_large",
            insertText: new vscode.SnippetString(
                "slds-media_large",
            ),
            detail: "Adjusts whitespace on larger media objects",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-media_inline",
            insertText: new vscode.SnippetString(
                "slds-media_inline",
            ),
            detail: "Aligns the figure and body to be inline-block of each other",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-media_center",
            insertText: new vscode.SnippetString(
                "slds-media_center",
            ),
            detail: "Aligns the content in the .slds-media__body to the middle of the .slds-media__figure",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-media__figure_reverse",
            insertText: new vscode.SnippetString(
                "slds-media__figure_reverse",
            ),
            detail: "Defines the figure area on the other side",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-media_responsive",
            insertText: new vscode.SnippetString(
                "slds-media_responsive",
            ),
            detail: ".slds-media__figure and .slds-media__body stack on smaller screens",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-shrink",
            insertText: new vscode.SnippetString(
                "slds-shrink",
            ),
            detail: "Allows column to shrink to children's content",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-shrink-none",
            insertText: new vscode.SnippetString(
                "slds-shrink-none",
            ),
            detail: "Prevents column from shrinking to children's content",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-text-font_monospace",
            insertText: new vscode.SnippetString(
                "slds-text-font_monospace",
            ),
            detail: "Monospace font family",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-text-link_reset",
            insertText: new vscode.SnippetString(
                "slds-text-link_reset",
            ),
            detail: "Makes links and buttons appear as regular text",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-text-link",
            insertText: new vscode.SnippetString(
                "slds-text-link",
            ),
            detail: "Used in combination with `.slds-text-link--reset`, you can apply the class `.slds-text-link` to a child element to reset its styles back to that of a link.",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-text-link_faux",
            insertText: new vscode.SnippetString(
                "slds-text-link_faux",
            ),
            detail: "Faux links are used on areas that can't be wrapped in an `a` element, but need to appear to be a link with an underline on hover. An example is in the page header for Object home. The `H1` and `button` that sit next to each other have the `.slds-text-link--faux` class on their parent element.",
            kind: vscode.CompletionItemKind.Class,
        },
        {
            label: "slds-text-longform",
            insertText: new vscode.SnippetString(
                "slds-text-longform",
            ),
            detail: "Adds default spacing and list styling within a wrapper",
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
        }
    });

    
}