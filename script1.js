document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.chatlog__markdown-pre--multiline').forEach(e => hljs.highlightBlock(e));
});