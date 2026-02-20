// Code Validator for HTML and CSS
const CodeValidator = {
  validateCode: function(question, code) {
    if (!code || code.trim() === '') return false;

    if (question.testCode && typeof question.testCode === 'function') {
      try {
        return question.testCode(code);
      } catch (e) {
        console.error('Validation error:', e);
        return false;
      }
    }

    return false;
  },

  validateHTML: function(code) {
    // Basic HTML validation
    const hasDoctype = /<!DOCTYPE\s+html>/i.test(code);
    const hasHtmlTag = /<html[^>]*>/i.test(code) && /<\/html>/i.test(code);
    const hasHead = /<head[^>]*>/i.test(code) && /<\/head>/i.test(code);
    const hasBody = /<body[^>]*>/i.test(code) && /<\/body>/i.test(code);

    return hasDoctype && hasHtmlTag && hasHead && hasBody;
  },

  validateCSS: function(code) {
    // Basic CSS validation
    const hasSelector = /[a-zA-Z0-9\-_#.]+\s*{/.test(code);
    const hasProperty = /[a-zA-Z\-]+\s*:\s*[^;]+;/.test(code);

    return hasSelector && hasProperty;
  },

  checkHTMLStructure: function(code) {
    const checks = {
      hasDoctype: /<!DOCTYPE\s+html>/i.test(code),
      hasHtmlTag: /<html[^>]*>/i.test(code),
      hasHead: /<head[^>]*>[\s\S]*?<\/head>/i.test(code),
      hasTitle: /<title[^>]*>[\s\S]*?<\/title>/i.test(code),
      hasBody: /<body[^>]*>[\s\S]*?<\/body>/i.test(code),
      hasH1: /<h1[^>]*>[\s\S]*?<\/h1>/i.test(code),
      hasP: /<p[^>]*>[\s\S]*?<\/p>/i.test(code),
      hasImg: /<img[^>]*src[^>]*>/i.test(code),
      hasAlt: /alt\s*=\s*["'][^"']*["']/i.test(code),
      hasUL: /<ul[^>]*>[\s\S]*?<\/ul>/i.test(code),
      hasLI: /<li[^>]*>[\s\S]*?<\/li>/i.test(code),
      hasOL: /<ol[^>]*>[\s\S]*?<\/ol>/i.test(code),
      hasLink: /<a[^>]*href[^>]*>[\s\S]*?<\/a>/i.test(code),
      hasTable: /<table[^>]*>[\s\S]*?<\/table>/i.test(code),
      hasForm: /<form[^>]*>[\s\S]*?<\/form>/i.test(code),
      hasInput: /<input[^>]*>/i.test(code),
      hasButton: /<button[^>]*>[\s\S]*?<\/button>/i.test(code),
      hasStrongTag: /<strong[^>]*>[\s\S]*?<\/strong>/i.test(code),
      hasEmTag: /<em[^>]*>[\s\S]*?<\/em>/i.test(code),
      hasDiv: /<div[^>]*>[\s\S]*?<\/div>/i.test(code),
      hasSpan: /<span[^>]*>[\s\S]*?<\/span>/i.test(code)
    };

    return checks;
  },

  checkCSSProperties: function(code) {
    const checks = {
      hasColor: /color\s*:/i.test(code),
      hasBackground: /background(-color)?\s*:/i.test(code),
      hasFontSize: /font-size\s*:/i.test(code),
      hasPadding: /padding\s*:/i.test(code),
      hasMargin: /margin\s*:/i.test(code),
      hasBorder: /border\s*:/i.test(code),
      hasDisplay: /display\s*:/i.test(code),
      hasWidth: /width\s*:/i.test(code),
      hasHeight: /height\s*:/i.test(code),
      hasJustifyContent: /justify-content\s*:/i.test(code),
      hasAlignItems: /align-items\s*:/i.test(code),
      hasFlex: /display\s*:\s*flex/i.test(code),
      hasGrid: /display\s*:\s*grid/i.test(code),
      hasFlexDirection: /flex-direction\s*:/i.test(code),
      hasGap: /gap\s*:/i.test(code),
      hasMediaQuery: /@media\s*\(/.test(code),
      hasHover: /:hover\s*{/.test(code),
      hasFontFamily: /font-family\s*:/i.test(code),
      hasTextAlign: /text-align\s*:/i.test(code),
      hasOpacity: /opacity\s*:/i.test(code),
      hasTransition: /transition\s*:/i.test(code)
    };

    return checks;
  },

  validateFlexbox: function(code) {
    const hasDisplay = /display\s*:\s*flex/i.test(code);
    const hasJustify = /(justify-content|align-items|flex-direction|gap)\s*:/i.test(code);

    return hasDisplay && hasJustify;
  },

  validateMediaQuery: function(code) {
    return /@media\s*\([^)]+\)\s*{/.test(code);
  },

  validateResponsive: function(code) {
    const hasViewport = /viewport|device-width/i.test(code);
    const hasMediaQuery = /@media\s*\(/.test(code);

    return hasViewport || hasMediaQuery;
  },

  getCodeSuggestions: function(code, type = 'html') {
    const suggestions = [];

    if (type === 'html') {
      const checks = this.checkHTMLStructure(code);
      if (!checks.hasDoctype) suggestions.push("❌ Doctype tag ontbreekt: <!DOCTYPE html>");
      if (!checks.hasHtmlTag) suggestions.push("❌ <html> tag ontbreekt");
      if (!checks.hasHead) suggestions.push("❌ <head> sectie ontbreekt");
      if (!checks.hasTitle) suggestions.push("❌ <title> tag ontbreekt");
      if (!checks.hasBody) suggestions.push("❌ <body> tag ontbreekt");
      if (!checks.hasH1) suggestions.push("⚠️ Geen <h1> kop gevonden");
    } else if (type === 'css') {
      const checks = this.checkCSSProperties(code);
      // You can add suggestions based on missing properties
    }

    return suggestions;
  },

  countElements: function(code, tagName) {
    const regex = new RegExp(`<${tagName}[^>]*>`, 'gi');
    const matches = code.match(regex);
    return matches ? matches.length : 0;
  },

  hasValidSyntax: function(code) {
    // Basic syntax checking
    const openTags = (code.match(/<[a-z][^>]*>/gi) || []).length;
    const closeTags = (code.match(/<\/[a-z][^>]*>/gi) || []).length;

    // These don't need closing tags
    const selfClosingCount = (code.match(/<(img|br|hr|input|meta|link)[^>]*>/gi) || []).length;

    return openTags >= closeTags - selfClosingCount;
  }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CodeValidator;
}
