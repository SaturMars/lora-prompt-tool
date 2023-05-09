console.log("[lora-prompt-tool] load other data module");
const lorahelp_old_ver_css = `.lora-context-menu {
    position: fixed;
    z-index: 10000;
    background: #1b1a1a;
    border-radius: 5px;
    transform: scale(0);
    transform-origin: top left;
}

.lora-context-menu.visible {
    transform: scale(1);
    transition: transform 200ms ease-in-out;
}

.lora-context-menu .item {
    padding: 8px 10px;
    font-size: 15px;
    color: #eee;
    cursor: pointer;
    border-radius: inherit;
}

.lora-context-menu .hritem {
    color: #eee;
    border-radius: inherit;
}

.lora-context-menu .item:hover {
    background: #343434;
}

.lorahelp-touch-icon {
    position: absolute;
    top: 0;
    right: 0;
    background: rgba(0,0,0,0.5);
    padding: 0 6px 0 6px;
    color: white;
}

#translate_language_selector option {
    background-color: var(--background-fill-primary);
}`;
const mahiro_icon = "data:image/png;base64,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";
const mahiro_icon2 = "data:image/png;base64,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";
const watashiwoyamamahoro = "data:audio/mp3;base64,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";