
window.WebFontConfig = {
    custom: {
        families: ['KaTeX_AMS', 'KaTeX_Caligraphic:n4,n7', 'KaTeX_Fraktur:n4,n7',
            'KaTeX_Main:n4,n7,i4,i7', 'KaTeX_Math:i4,i7', 'KaTeX_Script',
            'KaTeX_SansSerif:n4,n7,i4', 'KaTeX_Size1', 'KaTeX_Size2', 'KaTeX_Size3',
            'KaTeX_Size4', 'KaTeX_Typewriter'],
    },
};

function formatHtml(_str, _color = 0, _b = false, _size = 14, _font = "") {
    return `<span style="color:#${_color.toString(16).padStart(6, '0')};${_b ? "font-weight:bold;" : ""}${_size ? `font-size:${_size};` : ""}${_font ? `font-family:${_font};` : ""}">${_str.replaceAll("\n", "<br>")}</span>`;
}

function formatHtmlBr(_arr) {
    return _arr.join("<br>");
}

const katexConfig = {
    displayMode: false,
    leqno: false,
    fleqn: false,
    throwOnError: false,
    errorColor: '#cc0000',
    strict: 'ignore',
    output: 'htmlAndMathml',
    trust: false,
    macros: {}
};

const katexConfigD = {
    displayMode: true,
    leqno: false,
    fleqn: false,
    throwOnError: false,
    errorColor: '#cc0000',
    strict: 'ignore',
    output: 'htmlAndMathml',
    trust: false,
    macros: {}
};

function formatMarktex(str) {
    return marked(str.replace(/\$\$[\s\S]+?\$\$/gm, f => `<p>${katex.renderToString(f.substr(2, f.length - 4), katexConfigD)}</p>`)
        .replace(/\$[\s\S]+?\$/gm, f => `<span>${katex.renderToString(f.substr(1, f.length - 2), katexConfig)}</span>`)
    );
}

function formatKatex(str, block = false) {
    return block ? katex.renderToString(str, katexConfigD) : katex.renderToString(str, katexConfig);
}