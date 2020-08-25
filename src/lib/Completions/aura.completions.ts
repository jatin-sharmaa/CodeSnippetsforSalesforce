import * as vscode from 'vscode';
import ADBNTelemetry from '../../helper/telemetry';

export function loadAuraSnippets( context:vscode.ExtensionContext ) {

    let auraSnippets = [
        {
            label: "input:text-aura",
            insertText: new vscode.SnippetString(
                "<lightning:input name=\"${1:input1}\" label=\"${2:Input}\" value=\"${3:value}\" placeholder=\"${4:type here...}\"/>"
            ),
            detail: "Text input fields are for entering single-line text. (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Property,
        },
        {
            label: "input:number-aura",
            insertText: new vscode.SnippetString(
                "<lightning:input type=\"number\" name=\"${1:input1}\" label=\"${2:Number}\" placeholder=\"${3:type here...}\"/>"
            ),
            detail: "Number input fields support decimal, percentage, and currency values. (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Property,
        },
        {
            label: "input:search-aura",
            insertText: new vscode.SnippetString(
                "<div onkeyup=\"{! c.handleKeyUp }\">\n\t<lightning:input\n\t\ttype=\"search\"\n\t\taura:id=\"${1:enter-search}\"\n\t\tname=\"${2:input1}\"\n\t\tlabel=\"${3:Search when user hits the 'enter' key}\"\n\t/>\n</div>"
            ),
            detail: "Search input fields enable search queries (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Property,
        },
        {
            label: "input:date-aura",
            insertText: new vscode.SnippetString(
                "<lightning:input type=\"date\" name=\"${1:input1}\" label=\"${2:Date}\" value=\"${3:2020-12-31}\" placeholder=\"${4:enter date...}\"/>"
            ),
            detail: "Date input fields provide a date picker for entering a date. (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Property,
        },
        {
            label: "input:time-aura",
            insertText: new vscode.SnippetString(
                "<lightning:input type=\"time\" name=\"${1:input1}\" label=\"${2:Time}\" value=\"${3:23:59:59.000Z} placeholder=\"${4:enter time...}\"/>"
            ),
            detail: "Time input fields provide a dropdown list of time values (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Property,
        },
        {
            label: "input:datetime-aura",
            insertText: new vscode.SnippetString(
                "<lightning:input type=\"datetime\" name=\"${1:input1}\" label=\"${2:Date Time}\" value=\"${3:2000-12-31T23:59:59Z}\"/>"
            ),
            detail: "Date/Time input fields provide a date and time picker for entering a date and time. (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Property,
        },
        {
            label: "input:file-aura",
            insertText: new vscode.SnippetString(
                "<lightning:input type=\"file\" name=\"${1:input1}\"  label=\"${2:Attachment}\" multiple=\"${3|true,false|}\" accept=\"${4:}\" onchange=\"{! c.${5:handleFilesChange} }\"/>"
            ),
            detail: "File input fields support upload of single or multiple files and can restrict the accepted file types (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Property,
        },
        {
            label: "input:email-aura",
            insertText: new vscode.SnippetString(
                "<lightning:input type=\"email\" name=\"${1:input1}\" label=\"${2:Email}\" value=\"${3:abc@domain.com}\"  placeholder=\"${4:youraddress@company.com}\"/>"
            ),
            detail: "Email input fields are for entering email addresses (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Property,
        },
        {
            label: "input:password-aura",
            insertText: new vscode.SnippetString(
                "<lightning:input type=\"password\" name=\"${1:input1}\" label=\"${2:label}\" placeholder=\"Enter Password...\"/>"
            ),
            detail: "Password input fields obscure your text input (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Property,
        },
        {
            label: "input:checkbox-aura",
            insertText: new vscode.SnippetString(
                "<lightning:input type=\"checkbox\" label=\"${1:label}\" name=\"${2:name}\" checked=\"${3|true,false|}\" required=\"${4|true,false|}\" disabled=\"${5|true,false|}\"/>"
            ),
            detail: "Checkbox options can be required or disabled. (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Property,
        },
        {
            label: "combobox-aura",
            insertText: new vscode.SnippetString(
                "<aura:attribute name=\"${1:Options}\" type=\"List\" description=\"${2:description}\"/>\n<lightning:combobox name=\"${3:name}\" label=\"${4:label}\" placeholder=\"${5:placeholder}\" options=\"{! v.${1:Options} }\" onchange=\"{! c.${6:function} }\"/>"
            ),
            detail: "A combobox enables you to select only one option (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Property,
        },
        {
            label: "card:basic-aura",
            insertText: new vscode.SnippetString(
                "<lightning:card>\n\t<aura:set attribute=\"title\">\n\t\t${1:Title}\n\t</aura:set>\n\t<aura:set attribute=\"footer\">\n\t\t${2:Footer}\n\t</aura:set>\n\t${3:Card Body}\n</lightning:card>",
            ),
            detail: "Aura Basic Card (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Property,
        },
        {
            label: "icon:aura",
            insertText: new vscode.SnippetString(
                "<lightning:icon iconName=\"${1|utility:activity,utility:ad_set,utility:add,utility:adduser,utility:advanced_function,utility:advertising,utility:agent_session,utility:alert,utility:all,utility:anchor,utility:animal_and_nature,utility:announcement,utility:answer,utility:answered_twice,utility:apex_plugin,utility:apex,utility:approval,utility:apps,utility:archive,utility:arrowdown,utility:arrowup,utility:assignment,utility:attach,utility:automate,utility:away,utility:back,utility:ban,utility:block_visitor,utility:bold,utility:bookmark,utility:breadcrumbs,utility:broadcast,utility:brush,utility:bucket,utility:builder,utility:button_choice,utility:call,utility:campaign,utility:cancel_file_request,utility:cancel_transfer,utility:capslock,utility:cart,utility:case,utility:cases,utility:center_align_text,utility:change_owner,utility:change_record_type,utility:chart,utility:chat,utility:check,utility:checkin,utility:chevrondown,utility:chevronleft,utility:chevronright,utility:chevronup,utility:choice,utility:classic_interface,utility:clear,utility:clock,utility:close,utility:collapse_all,utility:collection_variable,utility:color_swatch,utility:comments,utility:company,utility:component_customization,utility:connected_apps,utility:constant,utility:contact_request,utility:contract_alt,utility:contract,utility:copy_to_clipboard,utility:copy,utility:crossfilter,utility:currency_input,utility:currency,utility:custom_apps,utility:cut,utility:dash,utility:database,utility:datadotcom,utility:date_input,utility:date_time,utility:dayview,utility:delete,utility:deprecate,utility:description,utility:desktop_and_phone,utility:desktop_console,utility:desktop,utility:dialing,utility:diamond,utility:dislike,utility:display_rich_text,utility:display_text,utility:dock_panel,utility:down,utility:download,utility:drag_and_drop,utility:drag,utility:dynamic_record_choice,utility:edit_form,utility:edit,utility:education,utility:einstein,utility:email_open,utility:email,utility:emoji,utility:end_call,utility:end_chat,utility:end_messaging_session,utility:engage,utility:enter,utility:erect_window,utility:error,utility:event,utility:events,utility:expand_all,utility:expand_alt,utility:expand,utility:fallback,utility:favorite,utility:feed,utility:file,utility:filter,utility:filterList,utility:flow_alt,utility:flow,utility:food_and_drink,utility:formula,utility:forward_up,utility:forward,utility:frozen,utility:fulfillment_order,utility:full_width_view,utility:global_constant,utility:graph,utility:groups,utility:help_center,utility:help,utility:hide_mobile,utility:hide,utility:hierarchy,utility:high_velocity_sales,utility:home,utility:identity,utility:image,utility:in_app_assistant,utility:inbox,utility:incoming_call,utility:info_alt,utility:info,utility:insert_tag_field,utility:insert_template,utility:inspector_panel,utility:internal_share,utility:italic,utility:jump_to_bottom,utility:jump_to_top,utility:justify_text,utility:kanban,utility:keyboard_dismiss,utility:knowledge_base,utility:layers,utility:layout,utility:leave_conference,utility:left_align_text,utility:left,utility:level_down,utility:level_up,utility:light_bulb,utility:lightning_extension,utility:lightning_inspector,utility:like,utility:link,utility:linked,utility:list,utility:listen,utility:live_message,utility:location,utility:lock,utility:locker_service_api_viewer,utility:locker_service_console,utility:log_a_call,utility:logout,utility:loop,utility:lower_flag,utility:macros,utility:magicwand,utility:mark_all_as_read,utility:matrix,utility:merge_field,utility:merge,utility:metrics,utility:minimize_window,utility:missed_call,utility:money,utility:moneybag,utility:monthlyview,utility:move,utility:multi_picklist,utility:multi_select_checkbox,utility:muted,utility:new_direct_message,utility:new_window,utility:new,utility:news,utility:note,utility:notebook,utility:notification,utility:number_input,utility:office365,utility:offline_cached,utility:offline,utility:omni_channel,utility:open_folder,utility:open,utility:opened_folder,utility:outbound_call,utility:outcome,utility:overflow,utility:package_org_beta,utility:package_org,utility:package,utility:page,utility:palette,utility:password,utility:paste,utility:pause,utility:people,utility:phone_landscape,utility:phone_portrait,utility:photo,utility:picklist_choice,utility:picklist_type,utility:picklist,utility:pin,utility:pinned,utility:play,utility:podcast_webinar,utility:pop_in,utility:power,utility:preview,utility:print,utility:priority,utility:privately_shared,utility:process,utility:prompt_edit,utility:prompt,utility:push,utility:puzzle,utility:question_mark,utility:question,utility:questions_and_answers,utility:quick_text,utility:quip,utility:quotation_marks,utility:quote,utility:radio_button,utility:rating,utility:reassign,utility:record_create,utility:record_delete,utility:record_lookup,utility:record_update,utility:record,utility:recurring_exception,utility:recycle_bin_empty,utility:recycle_bin_full,utility:redo,utility:refresh,utility:relate,utility:reminder,utility:remove_formatting,utility:remove_link,utility:replace,utility:reply_all,utility:reply,utility:report_issue,utility:reset_password,utility:resource_absence,utility:resource_capacity,utility:resource_territory,utility:retail_execution,utility:retweet,utility:ribbon,utility:richtextbulletedlist,utility:richtextindent,utility:richtextnumberedlist,utility:richtextoutdent,utility:right_align_text,utility:right,utility:rotate,utility:routing_offline,utility:rows,utility:rules,utility:salesforce1,utility:save,utility:screen,utility:search,utility:section,utility:send,utility:sentiment_negative,utility:sentiment_neutral,utility:settings,utility:setup_assistant_guide,utility:setup_modal,utility:setup,utility:share_file,utility:share_mobile,utility:share_post,utility:share,utility:shield,utility:shift_ui,utility:shopping_bag,utility:shortcuts,utility:side_list,utility:signpost,utility:skip_back,utility:skip_forward,utility:skip,utility:slider,utility:smiley_and_people,utility:sms,utility:snippet,utility:sobject_collection,utility:sobject,utility:socialshare,utility:sort,utility:spinner,utility:stage_collection,utility:stage,utility:standard_objects,utility:steps,utility:stop,utility:store,utility:strategy,utility:strikethrough,utility:success,utility:summary,utility:summarydetail,utility:survey,utility:switch,utility:symbols,utility:sync,utility:system_and_global_variable,utility:table_settings,utility:table,utility:tablet_landscape,utility:tablet_portrait,utility:tabset,utility:target,utility:task,utility:text_background_color,utility:text_color,utility:text_template,utility:text,utility:textarea,utility:textbox,utility:threedots_vertical,utility:threedots,utility:thunder,utility:tile_card_list,utility:toggle_panel_bottom,utility:toggle_panel_left,utility:toggle_panel_right,utility:toggle_panel_top,utility:toggle,utility:topic,utility:topic2,utility:touch_action,utility:tracker,utility:trail,utility:trailhead,utility:travel_and_places,utility:trending,utility:turn_off_notifications,utility:type_tool,utility:type,utility:undelete,utility:undeprecate,utility:underline,utility:undo,utility:unlinked,utility:unlock,utility:unmuted,utility:up,utility:upload,utility:user_role,utility:user,utility:variable,utility:video,utility:voicemail_drop,utility:volume_high,utility:volume_low,utility:volume_off,utility:waits,utility:warning,utility:watchlist,utility:weeklyview,utility:wifi,utility:work_order_type,utility:world,utility:yubi_key,utility:zoomin,utility:zoomout|}\" alternativeText=\"${2:Title}\" title=\"${2:Title}\" variant=\"${3|Success,warning,error,inverse|}\" size=\"${4|xx-small,x-small,small,medium,large|}\" />",
            ),
            detail: "Aura Icon (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Property,
        },
        {
            label: "button:basic-aura",
            insertText: new vscode.SnippetString(
                "<lightning:button variant=\"${1|base,default,brand,brand-outline,destructive,destructive-text,success|}\" label=\"${2:label}\" title=\"${2:Title}\" onclick=\"{!c.${3:Function Name}}\"/>",
            ),
            detail: "Basic Button Aura (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Property,
        },
        {
            label: "button:icon-aura",
            insertText: new vscode.SnippetString(
                "<lightning:button variant=\"${1|base,default,brand,brand-outline,destructive,destructive-text,success|}\" label=\"${2:label}\" title=\"${2:Title}\" onclick={!c.${3:Function Name}} iconName=\"${4|utility:activity, utility:ad_set, utility:add, utility:adduser, utility:advanced_function, utility:advertising, utility:agent_session, utility:alert, utility:all, utility:anchor, utility:animal_and_nature, utility:announcement, utility:answer, utility:answered_twice, utility:apex_plugin, utility:apex, utility:approval, utility:apps, utility:archive, utility:arrowdown, utility:arrowup, utility:assignment, utility:attach, utility:automate, utility:away, utility:back, utility:ban, utility:block_visitor, utility:bold, utility:bookmark, utility:breadcrumbs, utility:broadcast, utility:brush, utility:bucket, utility:builder, utility:button_choice, utility:call, utility:campaign, utility:cancel_file_request, utility:cancel_transfer, utility:capslock, utility:cart, utility:case, utility:cases, utility:center_align_text, utility:change_owner, utility:change_record_type, utility:chart, utility:chat, utility:check, utility:checkin, utility:chevrondown, utility:chevronleft, utility:chevronright, utility:chevronup, utility:choice, utility:classic_interface, utility:clear, utility:clock, utility:close, utility:collapse_all, utility:collection_variable, utility:color_swatch, utility:comments, utility:company, utility:component_customization, utility:connected_apps, utility:constant, utility:contact_request, utility:contract_alt, utility:contract, utility:copy_to_clipboard, utility:copy, utility:crossfilter, utility:currency_input, utility:currency, utility:custom_apps, utility:cut, utility:dash, utility:database, utility:datadotcom, utility:date_input, utility:date_time, utility:dayview, utility:delete, utility:deprecate, utility:description, utility:desktop_and_phone, utility:desktop_console, utility:desktop, utility:dialing, utility:diamond, utility:dislike, utility:display_rich_text, utility:display_text, utility:dock_panel, utility:down, utility:download, utility:drag_and_drop, utility:drag, utility:dynamic_record_choice, utility:edit_form, utility:edit, utility:education, utility:einstein, utility:email_open, utility:email, utility:emoji, utility:end_call, utility:end_chat, utility:end_messaging_session, utility:engage, utility:enter, utility:erect_window, utility:error, utility:event, utility:events, utility:expand_all, utility:expand_alt, utility:expand, utility:fallback, utility:favorite, utility:feed, utility:file, utility:filter, utility:filterList, utility:flow_alt, utility:flow, utility:food_and_drink, utility:formula, utility:forward_up, utility:forward, utility:frozen, utility:fulfillment_order, utility:full_width_view, utility:global_constant, utility:graph, utility:groups, utility:help_center, utility:help, utility:hide_mobile, utility:hide, utility:hierarchy, utility:high_velocity_sales, utility:home, utility:identity, utility:image, utility:in_app_assistant, utility:inbox, utility:incoming_call, utility:info_alt, utility:info, utility:insert_tag_field, utility:insert_template, utility:inspector_panel, utility:internal_share, utility:italic, utility:jump_to_bottom, utility:jump_to_top, utility:justify_text, utility:kanban, utility:keyboard_dismiss, utility:knowledge_base, utility:layers, utility:layout, utility:leave_conference, utility:left_align_text, utility:left, utility:level_down, utility:level_up, utility:light_bulb, utility:lightning_extension, utility:lightning_inspector, utility:like, utility:link, utility:linked, utility:list, utility:listen, utility:live_message, utility:location, utility:lock, utility:locker_service_api_viewer, utility:locker_service_console, utility:log_a_call, utility:logout, utility:loop, utility:lower_flag, utility:macros, utility:magicwand, utility:mark_all_as_read, utility:matrix, utility:merge_field, utility:merge, utility:metrics, utility:minimize_window, utility:missed_call, utility:money, utility:moneybag, utility:monthlyview, utility:move, utility:multi_picklist, utility:multi_select_checkbox, utility:muted, utility:new_direct_message, utility:new_window, utility:new, utility:news, utility:note, utility:notebook, utility:notification, utility:number_input, utility:office365, utility:offline_cached, utility:offline, utility:omni_channel, utility:open_folder, utility:open, utility:opened_folder, utility:outbound_call, utility:outcome, utility:overflow, utility:package_org_beta, utility:package_org, utility:package, utility:page, utility:palette, utility:password, utility:paste, utility:pause, utility:people, utility:phone_landscape, utility:phone_portrait, utility:photo, utility:picklist_choice, utility:picklist_type, utility:picklist, utility:pin, utility:pinned, utility:play, utility:podcast_webinar, utility:pop_in, utility:power, utility:preview, utility:print, utility:priority, utility:privately_shared, utility:process, utility:prompt_edit, utility:prompt, utility:push, utility:puzzle, utility:question_mark, utility:question, utility:questions_and_answers, utility:quick_text, utility:quip, utility:quotation_marks, utility:quote, utility:radio_button, utility:rating, utility:reassign, utility:record_create, utility:record_delete, utility:record_lookup, utility:record_update, utility:record, utility:recurring_exception, utility:recycle_bin_empty, utility:recycle_bin_full, utility:redo, utility:refresh, utility:relate, utility:reminder, utility:remove_formatting, utility:remove_link, utility:replace, utility:reply_all, utility:reply, utility:report_issue, utility:reset_password, utility:resource_absence, utility:resource_capacity, utility:resource_territory, utility:retail_execution, utility:retweet, utility:ribbon, utility:richtextbulletedlist, utility:richtextindent, utility:richtextnumberedlist, utility:richtextoutdent, utility:right_align_text, utility:right, utility:rotate, utility:routing_offline, utility:rows, utility:rules, utility:salesforce1, utility:save, utility:screen, utility:search, utility:section, utility:send, utility:sentiment_negative, utility:sentiment_neutral, utility:settings, utility:setup_assistant_guide, utility:setup_modal, utility:setup, utility:share_file, utility:share_mobile, utility:share_post, utility:share, utility:shield, utility:shift_ui, utility:shopping_bag, utility:shortcuts, utility:side_list, utility:signpost, utility:skip_back, utility:skip_forward, utility:skip, utility:slider, utility:smiley_and_people, utility:sms, utility:snippet, utility:sobject_collection, utility:sobject, utility:socialshare, utility:sort, utility:spinner, utility:stage_collection, utility:stage, utility:standard_objects, utility:steps, utility:stop, utility:store, utility:strategy, utility:strikethrough, utility:success, utility:summary, utility:summarydetail, utility:survey, utility:switch, utility:symbols, utility:sync, utility:system_and_global_variable, utility:table_settings, utility:table, utility:tablet_landscape, utility:tablet_portrait, utility:tabset, utility:target, utility:task, utility:text_background_color, utility:text_color, utility:text_template, utility:text, utility:textarea, utility:textbox, utility:threedots_vertical, utility:threedots, utility:thunder, utility:tile_card_list, utility:toggle_panel_bottom, utility:toggle_panel_left, utility:toggle_panel_right, utility:toggle_panel_top, utility:toggle, utility:topic, utility:topic2, utility:touch_action, utility:tracker, utility:trail, utility:trailhead, utility:travel_and_places, utility:trending, utility:turn_off_notifications, utility:type_tool, utility:type, utility:undelete, utility:undeprecate, utility:underline, utility:undo, utility:unlinked, utility:unlock, utility:unmuted, utility:up, utility:upload, utility:user_role, utility:user, utility:variable, utility:video, utility:voicemail_drop, utility:volume_high, utility:volume_low, utility:volume_off, utility:waits, utility:warning, utility:watchlist, utility:weeklyview, utility:wifi, utility:work_order_type, utility:world, utility:yubi_key, utility:zoomin, utility:zoomout|}\" iconPosition=\"${5|left,right|}\"/>",
            ),
            detail: "Basic Button Aura (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Property,
        },
        {
            label: "button:group-aura",
            insertText: new vscode.SnippetString(
                "<lightning:buttonGroup>\n\t<lightning:button variant=\"${1|base,default,brand,brand-outline,destructive,destructive-text,success|}\" label=\"${2:Label}\" onclick=\"{!c.${3:Function}}\"/>\n\t<lightning:button variant=\"${4|base,default,brand,brand-outline,destructive,destructive-text,success|}\" label=\"${5:Label}\" onclick=\"{!c.${6:Function}}\"/>\n\t<lightning:button variant=\"${7|base,default,brand,brand-outline,destructive,destructive-text,success|}\" label=\"${8:Label}\" onclick=\"{!c.${9:Function}}\"/>\n</lightning:buttonGroup>",
            ),
            detail: "Button Group Aura (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Property,
        },            
        {
            label: "if",
            insertText: new vscode.SnippetString(
                "<aura:if isTrue=\"{!v.${1:variable}}\">\n\t${2:ifBody}\n</aura:if>",
                ),
            detail: "Conditionally instantiates and renders either the body. (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Method,
        },
        {
            label: "if empty",
            insertText: new vscode.SnippetString(
                "<aura:if isTrue=\"{!empty(v.${1:variable})}\">\n\t${2:ifBody}\n</aura:if>",
                ),
            detail: "Conditionally checks if empty and renders either the body. (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Method,
        },
        {
            label: "if not empty",
            insertText: new vscode.SnippetString(
                "<aura:if isTrue=\"{!not(empty(v.${1:variable}))}\">\n\t${2:ifBody}\n</aura:if>",
                ),
            detail: "Conditionally checks if not empty and renders either the body. (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Method,
        },
        {
            label: "if equals",
            insertText: new vscode.SnippetString(
                "<aura:if isTrue=\"{!v.${1:variable} == '${2:text}'}\">\n\t${3:ifBody}\n</aura:if>",
                ),
            detail: "Conditionally checks if equals and renders either the body. (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Method,
        },
        {
            label: "if not equals",
            insertText: new vscode.SnippetString(
                "<aura:if isTrue=\"{!not(v.${1:variable} == '${2:text}')}\">\n\t${3:ifBody}\n</aura:if>",
                ),
            detail: "Conditionally if not equals and renders either the body. (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Method,
        },
        {
            label: "if else",
            insertText: new vscode.SnippetString(
                "<aura:if isTrue=\"{!v.${1:variable}}\">\n\t${2:ifBody}\n\t<aura:set attribute=\"else\">\n\t\t${3:elseBody}\n\t</aura:set>\n</aura:if>",
                ),
            detail: "Conditionally instantiates and renders either the body or the components in the else attribute. (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Method,
        },
        {
            label: "else",
            insertText: new vscode.SnippetString(
                "<aura:set attribute=\"else\">\n\t${3:elseBody}\n</aura:set>",
                ),
            detail: "Renders else attribute (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Method,
        },
        {
            label: "iteration",
            insertText: new vscode.SnippetString(
                "<aura:iteration items=\"{!v.${1:items}}\" var=\"${2:item}\">\n\t${3:iterationBody}\n</aura:iteration>",
                ),
            detail: "Renders a view of a collection of items. Supports iterations containing components that can be created exclusively on the client-side. (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Method,
        },
        {
            label: "attribute",
            insertText: new vscode.SnippetString(
                "<aura:attribute name=\"${1:input1}\" type=\"${2|Boolean,Date,DateTime,Decimal,Double,Integer,Long,String,Function,Object,Array,List,Map,Set,Id|}\" description=\"${3:description}\" default=\"${4:optionalDefault}\" />",
                ),
            detail: " (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Method,
        },
        {
            label: "hasRecordId",
            insertText: new vscode.SnippetString(
                "force:hasRecordId",
            ),
            detail: "Add the force:hasRecordId interface to a Lightning component to enable the component to be assigned the ID of the current record Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Text,
        },
        {
            label: "appHostable",
            insertText: new vscode.SnippetString(
                "force:appHostable",
            ),
            detail: "Add the force:appHostable interface to a Lightning component to allow it to be used as a custom tab in Lightning Experience or the Salesforce mobile app. Attribute name recordId, type String (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Text,
        },
        {
            label: "hasSObjectName",
            insertText: new vscode.SnippetString(
                "force:hasSObjectName",
            ),
            detail: "Add the force:hasSObjectName interface to a Lightning component to enable the component to be assigned the API name of current record’s sObject type. Attribute name sObjectName, type String (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Text,
        },
        {
            label: "lightningQuickAction",
            insertText: new vscode.SnippetString(
                "force:lightningQuickAction",
            ),
            detail: "Add the force:lightningQuickAction interface to a Lightning component to allow it to be used as a custom action in Lightning Experience or the Salesforce mobile app (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Text,
        },
        {
            label: "lightningQuickActionWithoutHeader",
            insertText: new vscode.SnippetString(
                "force:lightningQuickActionWithoutHeader",
            ),
            detail: "Add the force:lightningQuickActionWithoutHeader interface to a Lightning component to allow it to be used as a custom action in Lightning Experience or the Salesforce mobile app (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Text,
        },
        {
            label: "availableForAllPageTypes",
            insertText: new vscode.SnippetString(
                "flexipage:availableForAllPageTypes",
            ),
            detail: "To make your component available for record pages and any other type of page, implement the flexipage:availableForAllPageTypes interface (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Text,
        },
        {
            label: "availableForRecordHome",
            insertText: new vscode.SnippetString(
                "flexipage:availableForRecordHome",
            ),
            detail: "To make your component available for record pages only, implement the flexipage:availableForRecordHome interface. (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Text,
        },
        {
            label: "init",
            insertText: new vscode.SnippetString(
                "<aura:handler name='init' value='{!this}' action='{!c.doInit}' />",
            ),
            detail: "This event is automatically fired when an app or component is initialized, prior to rendering. (Salesforce Code Snippets)",
            kind: vscode.CompletionItemKind.Method,
        },
    ];

    return vscode.languages.registerCompletionItemProvider('html', {
        provideCompletionItems(doc, pos, token, context) {
            var start = new vscode.Position(pos.line, 0);
            var range = new vscode.Range(start, pos);
            var text = doc.getText(range);

            var rawClasses = text.match(/class=["|']([\w- ]*$)/);
            if (rawClasses === null) {
                return auraSnippets;
            }
        },
        resolveCompletionItem(item) {
            let tele = new ADBNTelemetry( context );
            tele.sendAdbnTelementry('lang_usage', {"language": "Aura"}, { 'lang_count': 1});
            tele.sendAdbnTelementry('htmlAura', {"Aura": item.label}, { 'count': 1});
            return item;
        }
    });

    
}