/**
 * Gets a stylesheet, from the document.
 *
 * @param {String} fileName - 
 * @returns {CSSStyleSheet?} - The object representing the stylesheet, if found; otherwise, null. 
 */
Document.prototype.getStylesheet = function (fileName)
{
    // Loop through the stylesheets until you find the one you want.
    for (const stylesheet of this.styleSheets)
    {
        // Check if the stylesheet has the desired name.
        if (!(stylesheet.href && stylesheet.href.includes(fileName))) continue;
        
        // Return the stylesheet
        return stylesheet;        
    }

    // If we haven't found the stylesheet, return null.
    return null;
};

/**
 * Programmatically set the value of a variable within CSS.
 * 
 * @param {String} variableName - If the name is not prepended with trailing hyphen, they will be added.
 * @param {*} value - The value to set.
 */
Document.prototype.setCssVariable = function(variableName, value)
{
    if (!variableName.startsWith('--')) variableName = `--${variableName}`;
    this.querySelector(':root').style.setProperty(variableName, value);
}