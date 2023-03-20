/**
 * Gets a stylesheet, from the document.
 *
 * @param {String} fileName - 
 * @returns {CSSStyleSheet?} - The object representing the stylesheet, if found; otherwise, null. 
 */
Document.prototype.getStylesheet = function (fileName)
{
    // Get all the stylesheets in the document.
    let stylesheets = this.styleSheets;

    // Loop through the stylesheets until you find the one you want.
    for (let i = 0; i < stylesheets.length; i++)
    {
        let stylesheet = stylesheets[i];

        // Check if the stylesheet has the desired name.
        if (!(stylesheet.href && stylesheet.href.includes(fileName))) continue;
        
        // Return the stylesheet
        return stylesheet;        
    }

    // If we haven't found the stylesheet, return null.
    return null;
};
